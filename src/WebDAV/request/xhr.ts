export default function (verb, url, headers, data, type, callback) {
    var xhr = new XMLHttpRequest();
    var body = function () {
        var b: any = xhr.responseText;
        // if (type == 'xml') {
        //     var xml = xhr.responseXML;

        //     if (!xml) {

        //         return
        //         const parser = new DOMParser();
        //         xml = parser.parseFromString(b, 'text/xml');
        //     }

        //     if (xml) {
        //         b = xml.firstChild.nextSibling ? xml.firstChild.nextSibling : xml.firstChild;
        //     }
        // }

        return b;
    };

    let promise;

    let resolvePromise, rejectPromise;
    promise = new Promise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
    });

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { // complete.
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
