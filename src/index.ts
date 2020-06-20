import WebDAVFileSystem from './WebDAVFileSystem';
import * as BrowserFS from 'browserfs';

if (typeof BrowserFS !== 'undefined') {
    BrowserFS.registerFileSystem('WebDAV', WebDAVFileSystem);
}

export { WebDAVFileSystem };
