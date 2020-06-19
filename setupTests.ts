import { v2 as webdav } from 'webdav-server'

const port = 1900;
const server = new webdav.WebDAVServer();

const createFiles = server => {
    server.rootFileSystem().addSubTree(server.createExternalContext(), {
        'folder1': {                                // /folder1
            'file1.txt': 'TEST CONTENT',            // /folder1/file1.txt
            'file2.txt': webdav.ResourceType.File   // /folder1/file2.txt
        },
        'file0.txt': webdav.ResourceType.File       // /file0.txt
    });
};

beforeAll(async () => {
    // run webdav server
    await server.startAsync(port);

    createFiles(server);

    console.log(`WebDAV server is listening on port ${port}`);
});


afterAll(async () => {
    await server.stopAsync();
});
