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
        .then(r => r.text())
        .then(text => {
            const returnValue = text;

            if (callback) {
                callback(null, returnValue);
            }

            return returnValue;
        },  err => {
            console.error(err);
            console.error(err.stack);
            callback && callback(err);
        });
}
