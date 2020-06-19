import WebDAVFileSystem from './WebDAVFileSystem';

declare const window: any;

if (window.BrowserFS) {
    window.BrowserFS.registerFileSystem('WebDAVFileSystem', WebDAVFileSystem);
}

export { WebDAVFileSystem };
