import { BaseFileSystem, BFSOneArgCallback, BFSCallback, FileSystemOptions, FileSystem } from 'browserfs/dist/node/core/file_system';
import { FileFlag } from 'browserfs/dist/node/core/file_flag';

import { ApiError, ErrorCode } from 'browserfs/dist/node/core/api_error';
import Stats, { FileType } from 'browserfs/dist/node/core/node_fs_stats';

import WebDAV from './WebDAV';

const propFind = async url => {
    const doc = await WebDAV.PROPFIND(url);

    if (doc.childNodes == null) {
        throw new ApiError(ErrorCode.ENOENT);
    }

    return doc;
}

declare interface WebDAVOptions {
    url: string
}

export default class WebDAVFileSystem extends BaseFileSystem implements FileSystem {
    constructor(public url) {
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
        WebDAV.PUT(this.url + fname, data, cb);
    }

    public readFile(fname: string, encoding: string | null, flag: FileFlag, cb: BFSCallback<string | Buffer>): void {
        WebDAV.GET(this.url + fname, cb);
    }

    public readdir(p: string, cb: BFSCallback<string[]>): void {
        propFind(this.url + p).then(doc => {
            const contents = [...doc.childNodes]
                .map(node => node.getElementsByTagName('D:displayname')[0].textContent)
                .filter(name => name.length);

            cb(null, contents);
        });
    };

    public stat(p: string, isLstat: boolean | null, cb: BFSCallback<Stats>): void {
        propFind(this.url + p).then(entry => {

            let self;

            if (entry.childNodes.length > 1) {
                const contents = [...entry.childNodes]
                    .map(node => ({
                        name: node.getElementsByTagName('D:displayname')[0].textContent,
                        node
                    }))

                self = contents[0].node;
            } else {
                self = entry;
            }

            const isDirectory = self.getElementsByTagName('D:collection').length;

            const itemType: FileType = isDirectory ? FileType.DIRECTORY : FileType.FILE;
            const size = parseInt(entry.getElementsByTagName('D:getcontentlength')[0].textContent);
            const mode = 777;
            const atime = undefined;
            const mtime = new Date(entry.getElementsByTagName('D:getlastmodified')[0].textContent);
            const ctime = new Date(entry.getElementsByTagName('D:creationdate')[0].textContent);

            const stats = new Stats(itemType, size, mode, atime, mtime, ctime);

            cb(null, stats);
        });
    }

    public unlink(p: string, cb: BFSOneArgCallback): void {
        WebDAV.DELETE(this.url + p, cb);
    }

    public rmdir(p: string, cb: BFSOneArgCallback): void {
        WebDAV.DELETE(this.url + p, cb);
    }

    public mkdir(p: string, mode: number, cb: BFSOneArgCallback): void {
        WebDAV.MKCOL(this.url + p, cb);
    }
}
