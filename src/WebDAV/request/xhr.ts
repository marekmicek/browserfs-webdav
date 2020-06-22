import { HTTP } from '.';

export default function (verb, url, headers, data, type, callback) {
    var xhr = new XMLHttpRequest();
    var body = function () {
        return xhr.responseText;
    };

    let promise;

    let resolvePromise, rejectPromise;
    promise = new Promise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
    });

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { // complete.
            if (Math.floor(xhr.status / HTTP.OK) > 1) {
                const err = Object.assign(new Error(xhr.statusText), { status: xhr.status })
                
                rejectPromise(err);
                return callback(err);
            }

            var b = body();

            callback && callback(null, b);
            resolvePromise(b);
        }
    };

    xhr.open(verb, url, true);
    xhr.setRequestHeader('Content-Type', 'text/xml; charset=UTF-8');

    for (var header in headers) {
        xhr.setRequestHeader(header, headers[header]);
    }

    xhr.send(data);

    return promise;
}
