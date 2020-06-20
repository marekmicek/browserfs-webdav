import * as BrowserFS from 'browserfs';

export enum FileType {
    FILE = 0x8000,
    DIRECTORY = 0x4000,
    SYMLINK = 0xA000
}

const fs = BrowserFS.BFSRequire('fs');
const Stats = fs.FS.Stats;

type Stats = typeof Stats;

export default Stats;
