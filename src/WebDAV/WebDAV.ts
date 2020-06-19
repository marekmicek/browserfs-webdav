import request from './request';

export default {
    GET: function (url, callback?) {
        return request('GET', url, {}, null, 'text', callback);
    },

    PROPFIND: function (url, callback?) {
        return request('PROPFIND', url, { Depth: "1" }, null, 'xml', callback);
    },

    MKCOL: function (url, callback?) {
        return request('MKCOL', url, {}, null, 'text', callback);
    },

    DELETE: function (url, callback?) {
        return request('DELETE', url, {}, null, 'text', callback);
    },

    PUT: function (url, data, callback?) {
        return request('PUT', url, {}, data, 'text', callback);
    }
};
