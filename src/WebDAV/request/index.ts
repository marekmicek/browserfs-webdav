export const HTTP = {
    OK: 200
}

import fetch from './fetch';
import xhr from './xhr';

export default typeof XMLHttpRequest === 'undefined' ? fetch : xhr;
