declare const window;

const BaseFileSystem = Object.getPrototypeOf(window.BrowserFS.FileSystem.XmlHttpRequest);
type BFSOneArgCallback = Function
type BFSCallback<T> = Function

export { BaseFileSystem, BFSOneArgCallback, BFSCallback };
