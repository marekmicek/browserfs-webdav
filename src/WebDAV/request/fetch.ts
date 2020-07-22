import { HTTP } from '.';

export default function (verb, url, headers, body, type: 'text' | 'xml', callback) {
    return fetch(url, {
        mode: 'cors',
        method: verb,
        headers: {
            'Content-Type': 'application/octet-stream',
            ...headers,
        },
        body
    })
        .then(async r => {

            if (Math.floor(r.status / HTTP.OK) > 1) {
                throw Object.assign(new Error(r.statusText), { status: r.status })
            }

            let outputAs = 'arrayBuffer';

            const contentType = r.headers.get('Content-Type').split(';')[0];
            switch (contentType) {
                case 'application/xml':
                case 'application/json':
                    outputAs = 'text';
                    break;
            }

            return await r[outputAs]();
        })
        .then(text => {
            const returnValue = text;

            if (callback) {
                callback(null, returnValue);
            }

            return returnValue;
        }, err => {
            callback && callback(err);

            throw err;
        });
}
