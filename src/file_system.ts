import * as BrowserFS from 'browserfs';

const BaseFileSystem = Object.getPrototypeOf(BrowserFS.FileSystem.XmlHttpRequest);

type BFSOneArgCallback = Function;
type BFSCallback<T> = Function;

interface FileSystem {};
interface FileSystemOptions {
    [name: string]: any;
};

export { BaseFileSystem, BFSOneArgCallback, BFSCallback, FileSystemOptions, FileSystem };
