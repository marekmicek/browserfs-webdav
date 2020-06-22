import { BaseFileSystem, BFSOneArgCallback, BFSCallback, FileSystemOptions, FileSystem } from 'browserfs/dist/node/core/file_system';
import { FileFlag } from 'browserfs/dist/node/core/file_flag';

import { ApiError, ErrorCode } from 'browserfs/dist/node/core/api_error';
import Stats, { FileType } from 'browserfs/dist/node/core/node_fs_stats';

import * as auth from './auth';

import WebDAV from './WebDAV';

const propFind = async url => {
    const response = await WebDAV.PROPFIND(url);

    if (!response) {
        throw new ApiError(ErrorCode.ENOENT);
    }

    return response;
}

declare interface TokenOption {
    access_token: string;
    token_type: 'Bearer'
}

declare interface WebDAVOptions {
    url: string
    token: TokenOption
}

const combinePaths = (...paths) => {
    return paths.map(path => path.replace(/^\/?(.*?)\/?$/, '$1')).join('/');
}

const mapHttpErrorToApiError = err => {

    switch (err.status) {
        case 401: return new ApiError(ErrorCode.EACCES);
        case 404: return new ApiError(ErrorCode.ENOENT);
    }

    return err;
};

const mapHttpErrorCallback = cb => (err, data) => {
    if (err) {
        cb(mapHttpErrorToApiError(err));

        return;
    }

    cb(err, data);
};

export default class WebDAVFileSystem extends BaseFileSystem implements FileSystem {
    headers = {};

    constructor(public url, public token?) {
        super();

        if (!url && typeof document !== 'undefined') {
            url = document.baseURI;
        }

        if (!url) {
            throw 'Couln\'t determine an URL, please provide it in the options';
        }

        if (url.slice(-1) !== '/') {
            throw new Error('URL should end with /');
        }

        if (token) {
            Object.defineProperty(this.headers, 'Authorization',
                { 
                    get: () => auth.generateTokenAuthHeader(token),
                    configurable: true,
                    enumerable: true
                }
            );
        }
    }

    public static readonly Name = 'WebDAV';

    public static readonly Options: FileSystemOptions = {
        url: {
            type: 'string',
            description: 'The URL of the WebDAV endpoint.',
        }
    };

    public static Create(opts: WebDAVOptions, cb: BFSCallback<WebDAVFileSystem>): void {
        const fs = new WebDAVFileSystem(opts.url);

        cb(null, fs);
    }

    public static isAvailable() {
        return true;
    }

    getName(): string {
        return WebDAVFileSystem.Name;
    }

    isReadOnly(): boolean {
        return false;
    }

    supportsProps(): boolean {
        return false;
    }

    supportsSynch(): boolean {
        return false;
    }

    public writeFile(fname: string, data: any, encoding: string | null, flag: FileFlag, mode: number, cb: BFSOneArgCallback): void {
        WebDAV.PUT.bind(this)(combinePaths(this.url, fname), data, mapHttpErrorCallback(cb));
    }

    public readFile(fname: string, encoding: string | null, flag: FileFlag, cb: BFSCallback<string | Buffer>): void {
        WebDAV.GET.bind(this)(combinePaths(this.url, fname), mapHttpErrorCallback(cb));
    }

    public readdir(p: string, cb: BFSCallback<string[]>): void {
        propFind.bind(this)(combinePaths(this.url, p)).then((response: any) => {
            if (!response.length) {
                cb(null, []);

                return;
            }

            const mapToDisplayName = item => {
                let displayName = item.propstat?.prop?.displayname;

                if (!displayName) {
                    [, displayName] = item.href.match(/.+\/(.+)\/?$/)
                }

                return displayName;
            }

            const contents = (response as [])
                .map((item: any) => mapToDisplayName(item))
                .slice(1);

            cb(null, contents);
        }, err => cb(mapHttpErrorToApiError(err)));
    };

    public stat(p: string, isLstat: boolean | null, cb: BFSCallback<Stats>): void {
        propFind.bind(this)(combinePaths(this.url, p)).then(response => {

            let self = response[0] || response;

            const prop = self.propstat.prop;

            const isDirectory = prop.resourcetype && 'collection' in prop.resourcetype;

            const itemType: FileType = isDirectory ? FileType.DIRECTORY : FileType.FILE;
            const size = parseInt(prop.getcontentlength);
            const mode = 777;
            const atime = undefined;
            const mtime = new Date(prop.getlastmodified);
            const ctime = new Date(prop.creationdate);

            const stats = new Stats(itemType, size, mode, atime, mtime, ctime);

            cb(null, stats);
        }, err => cb(mapHttpErrorToApiError(err)));
    }

    public unlink(p: string, cb: BFSOneArgCallback): void {
        WebDAV.DELETE.bind(this)(combinePaths(this.url, p), mapHttpErrorCallback(cb));
    }

    public rmdir(p: string, cb: BFSOneArgCallback): void {
        WebDAV.DELETE.bind(this)(combinePaths(this.url, p), mapHttpErrorCallback(cb));
    }

    public mkdir(p: string, mode: number, cb: BFSOneArgCallback): void {
        WebDAV.MKCOL.bind(this)(combinePaths(this.url, p), mapHttpErrorCallback(cb));
    }
}
