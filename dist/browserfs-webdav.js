/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.WebDAVFileSystem = void 0;
var WebDAVFileSystem_1 = __webpack_require__(1);
exports.WebDAVFileSystem = WebDAVFileSystem_1["default"];
if (window.BrowserFS) {
    window.BrowserFS.registerFileSystem('WebDAVFileSystem', WebDAVFileSystem_1["default"]);
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var file_system_1 = __webpack_require__(2);
var api_error_1 = __webpack_require__(3);
var node_fs_stats_1 = __webpack_require__(4);
var WebDAV_1 = __webpack_require__(5);
var propFind = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var doc;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, WebDAV_1["default"].PROPFIND(url)];
            case 1:
                doc = _a.sent();
                if (doc.childNodes == null) {
                    throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOENT);
                }
                return [2 /*return*/, doc];
        }
    });
}); };
var WebDAVFileSystem = /** @class */ (function (_super) {
    __extends(WebDAVFileSystem, _super);
    function WebDAVFileSystem(url, options) {
        var _this = _super.call(this) || this;
        _this.url = url;
        if (url.slice(-1) !== '/') {
            throw new Error('URL should end with /');
        }
        return _this;
    }
    WebDAVFileSystem.isAvailable = function () {
        return true;
    };
    WebDAVFileSystem.prototype.writeFile = function (fname, data, encoding, flag, mode, cb) {
        WebDAV_1["default"].PUT(this.url + fname, data, cb);
    };
    WebDAVFileSystem.prototype.readFile = function (fname, encoding, flag, cb) {
        WebDAV_1["default"].GET(this.url + fname, cb);
    };
    WebDAVFileSystem.prototype.readdir = function (p, cb) {
        propFind(this.url + p).then(function (doc) {
            var contents = __spreadArrays(doc.childNodes).map(function (node) { return node.getElementsByTagName('D:displayname')[0].textContent; })
                .filter(function (name) { return name.length; });
            cb(null, contents);
        });
    };
    ;
    WebDAVFileSystem.prototype.stat = function (p, isLstat, cb) {
        propFind(this.url + p).then(function (entry) {
            var self;
            if (entry.childNodes.length > 1) {
                var contents = __spreadArrays(entry.childNodes).map(function (node) { return ({
                    name: node.getElementsByTagName('D:displayname')[0].textContent,
                    node: node
                }); });
                self = contents[0].node;
            }
            else {
                self = entry;
            }
            var isDirectory = self.getElementsByTagName('D:collection').length;
            var itemType = isDirectory ? node_fs_stats_1.FileType.DIRECTORY : node_fs_stats_1.FileType.FILE;
            var size = parseInt(entry.getElementsByTagName('D:getcontentlength')[0].textContent);
            var mode = 777;
            var atime = undefined;
            var mtime = new Date(entry.getElementsByTagName('D:getlastmodified')[0].textContent);
            var ctime = new Date(entry.getElementsByTagName('D:creationdate')[0].textContent);
            var stats = new node_fs_stats_1["default"](itemType, size, mode, atime, mtime, ctime);
            cb(null, stats);
        });
    };
    WebDAVFileSystem.prototype.unlink = function (p, cb) {
        WebDAV_1["default"].DELETE(this.url + p, cb);
    };
    WebDAVFileSystem.prototype.rmdir = function (p, cb) {
        WebDAV_1["default"].DELETE(this.url + p, cb);
    };
    WebDAVFileSystem.prototype.mkdir = function (p, mode, cb) {
        WebDAV_1["default"].MKCOL(this.url + p, cb);
    };
    return WebDAVFileSystem;
}(file_system_1.BaseFileSystem));
exports["default"] = WebDAVFileSystem;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.BaseFileSystem = void 0;
var BaseFileSystem = Object.getPrototypeOf(window.BrowserFS.FileSystem.XmlHttpRequest);
exports.BaseFileSystem = BaseFileSystem;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ApiError;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.FileType = void 0;
var FileType;
(function (FileType) {
    FileType[FileType["FILE"] = 32768] = "FILE";
    FileType[FileType["DIRECTORY"] = 16384] = "DIRECTORY";
    FileType[FileType["SYMLINK"] = 40960] = "SYMLINK";
})(FileType = exports.FileType || (exports.FileType = {}));
var fs = window.BrowserFS.BFSRequire('fs');
var Stats = fs.FS.Stats;
exports["default"] = Stats;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var WebDAV_1 = __webpack_require__(6);
exports["default"] = WebDAV_1["default"];


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var request_1 = __webpack_require__(7);
exports["default"] = {
    GET: function (url, callback) {
        return request_1["default"]('GET', url, {}, null, 'text', callback);
    },
    PROPFIND: function (url, callback) {
        return request_1["default"]('PROPFIND', url, { Depth: "1" }, null, 'xml', callback);
    },
    MKCOL: function (url, callback) {
        return request_1["default"]('MKCOL', url, {}, null, 'text', callback);
    },
    DELETE: function (url, callback) {
        return request_1["default"]('DELETE', url, {}, null, 'text', callback);
    },
    PUT: function (url, data, callback) {
        return request_1["default"]('PUT', url, {}, data, 'text', callback);
    }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function default_1(verb, url, headers, data, type, callback) {
    var xhr = new XMLHttpRequest();
    var body = function () {
        var b = xhr.responseText;
        if (type == 'xml') {
            var xml = xhr.responseXML;
            if (!xml) {
                var parser = new DOMParser();
                xml = parser.parseFromString(b, 'text/xml');
            }
            if (xml) {
                b = xml.firstChild.nextSibling ? xml.firstChild.nextSibling : xml.firstChild;
            }
        }
        return b;
    };
    var promise;
    var resolvePromise, rejectPromise;
    promise = new Promise(function (resolve, reject) {
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
exports["default"] = default_1;


/***/ })
/******/ ]);