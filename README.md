Allows you to use WebDAV through BrowserFS.

``` javascript
    import { promisify } from 'util';
    import 'browserfs-webdav';

    const indexedDB = await promisify(BrowserFS.FileSystem.IndexedDB.Create)();
    const webDav = new BrowserFS.FileSystem.WebDAVFileSystem('http://localhost:1900/folder1/');

    // create mountable file system
    const mountable = await promisify(BrowserFS.FileSystem.MountableFileSystem.Create)({
        '/': indexedDB,
        '/folder1': webDav
    });
```
