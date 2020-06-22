import { xml, simplify } from 'txml';
import request from './request';

export default {
    headers: {},
    GET: function (url, callback?) {
        return request('GET', url, { ...this.headers }, null, 'text', callback);
    },

    PROPFIND: function (url, callback?) {
        return new Promise((resolve, reject) => request('PROPFIND', url, { ...this.headers, Depth: "1" }, null, 'xml', (err, xmlString) => {

            if (err) {
                reject(err);

                return;
            }

            xmlString = xmlString.replace(/(<\/?)D:/gm, '$1');

            const xmlData = xml(xmlString);
            const jsData = simplify(xmlData as any) as any;

            const response = jsData['?xml']?.multistatus?.response;

            if (callback) {
                callback(err, response);
            }

            resolve(response);
        }));
    },

    MKCOL: function (url, callback?) {
        return request('MKCOL', url, { ...this.headers }, null, 'text', callback);
    },

    DELETE: function (url, callback?) {
        return request('DELETE', url, { ...this.headers }, null, 'text', callback);
    },

    PUT: function (url, data, callback?) {
        return request('PUT', url, { ...this.headers }, data, 'text', callback);
    }
};
