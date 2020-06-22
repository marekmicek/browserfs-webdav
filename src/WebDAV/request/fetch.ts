import { HTTP } from '.';

export default function (verb, url, headers, body, type: 'text' | 'xml', callback) {
    return fetch(url, {
        mode: 'cors',
        method: verb,
        headers: {
            'Content-Type': 'text/xml; charset=UTF-8',
            ...headers,
        },
        body
    })
        .then(async r => {

            if (Math.floor(r.status / HTTP.OK) > 1) {
                throw Object.assign(new Error(r.statusText), { status: r.status })
            }

            return await r.text();
        })
        .then(text => {
            const returnValue = text;

            if (callback) {
                callback(null, returnValue);
            }

            return returnValue;
        },  err => {
            callback && callback(err);

            throw err;
        });
}
