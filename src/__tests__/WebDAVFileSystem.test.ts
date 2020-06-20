import * as BrowserFS from 'browserfs';
import { XMLHttpRequest } from 'xmlhttprequest';

window.XMLHttpRequest = XMLHttpRequest;
window.BrowserFS = BrowserFS;

import '..';

import { promisify } from 'util';

const testEndpoint = 'http://localhost:1900/';

BrowserFS.install(window);

const fs = BrowserFS.BFSRequire('fs');

it('should allow to use BrowserFS.configure', async () => {
    await new Promise((resolve, reject) => BrowserFS.configure({ fs: 'WebDAV', options: { url: testEndpoint } }, function (err) {
        if (err) {
            reject(err);
        } else {
            resolve();
        }
    }));
});

it('should read the file', async () => {
    const expected = 'TEST CONTENT';
    const actual = await promisify(fs.readFile)('/folder1/file1.txt');

    expect(actual).toBe(expected);
});

it('should save the file', async () => {

    const expected = 'NEW TEST DATA';
    const fileName = '/folder1/new-file.txt';
    await new Promise((resolve, reject) => fs.writeFile(fileName, expected, (err) => {

        if (err) {
            reject(err);
        } else {
            resolve();
        }
    }));

    const actual = await promisify(fs.readFile)(fileName);

    expect(actual).toBe(expected);
});

it('should read the directory', async () => {
    const expected = ['folder1', 'file0.txt'];
    const actual = await promisify(fs.readdir)('/');

    expect(actual).toStrictEqual(expected);
});

it('should return the stats for a file', async () => {
    const content = 'NEW TEST DATA';
    const fileName = '/folder1/new-file.txt';
    const stats = await promisify(fs.stat)(fileName);

    expect(stats.size).toBe(content.length);
});

it('should return the stats for a directory', async () => {
    const dirName = '/folder1';
    const stats = await promisify(fs.stat)(dirName);

    expect(stats.isDirectory()).toBe(true);
});
