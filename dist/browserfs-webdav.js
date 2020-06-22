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
var BrowserFS = __webpack_require__(3);
if (typeof BrowserFS !== 'undefined') {
    BrowserFS.registerFileSystem('WebDAV', WebDAVFileSystem_1["default"]);
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
exports.__esModule = true;
var file_system_1 = __webpack_require__(2);
var api_error_1 = __webpack_require__(4);
var node_fs_stats_1 = __webpack_require__(5);
var auth = __webpack_require__(6);
var WebDAV_1 = __webpack_require__(7);
var propFind = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, WebDAV_1["default"].PROPFIND(url)];
            case 1:
                response = _a.sent();
                if (!response) {
                    throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOENT);
                }
                return [2 /*return*/, response];
        }
    });
}); };
var combinePaths = function () {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    return paths.map(function (path) { return path.replace(/^\/?(.*?)\/?$/, '$1'); }).join('/');
};
var mapHttpErrorToApiError = function (err) {
    switch (err.status) {
        case 401: return new api_error_1.ApiError(api_error_1.ErrorCode.EACCES);
        case 404: return new api_error_1.ApiError(api_error_1.ErrorCode.ENOENT);
    }
    return err;
};
var mapHttpErrorCallback = function (cb) { return function (err, data) {
    if (err) {
        cb(mapHttpErrorToApiError(err));
        return;
    }
    cb(err, data);
}; };
var WebDAVFileSystem = /** @class */ (function (_super) {
    __extends(WebDAVFileSystem, _super);
    function WebDAVFileSystem(url, token) {
        var _this = _super.call(this) || this;
        _this.url = url;
        _this.token = token;
        _this.headers = {};
        if (!url && typeof document !== 'undefined') {
            url = document.baseURI;
        }
        if (!url) {
            throw 'Couln\'t determine an URL, please provide it in the options';
        }
        if (url.slice(-1) !== '/') {
            throw new Error('URL should end with /');
        }
        if (token) {
            Object.defineProperty(_this.headers, 'Authorization', {
                get: function () { return auth.generateTokenAuthHeader(token); },
                configurable: true,
                enumerable: true
            });
        }
        return _this;
    }
    WebDAVFileSystem.Create = function (opts, cb) {
        var fs = new WebDAVFileSystem(opts.url);
        cb(null, fs);
    };
    WebDAVFileSystem.isAvailable = function () {
        return true;
    };
    WebDAVFileSystem.prototype.getName = function () {
        return WebDAVFileSystem.Name;
    };
    WebDAVFileSystem.prototype.isReadOnly = function () {
        return false;
    };
    WebDAVFileSystem.prototype.supportsProps = function () {
        return false;
    };
    WebDAVFileSystem.prototype.supportsSynch = function () {
        return false;
    };
    WebDAVFileSystem.prototype.writeFile = function (fname, data, encoding, flag, mode, cb) {
        WebDAV_1["default"].PUT.bind(this)(combinePaths(this.url, fname), data, mapHttpErrorCallback(cb));
    };
    WebDAVFileSystem.prototype.readFile = function (fname, encoding, flag, cb) {
        WebDAV_1["default"].GET.bind(this)(combinePaths(this.url, fname), mapHttpErrorCallback(cb));
    };
    WebDAVFileSystem.prototype.readdir = function (p, cb) {
        propFind.bind(this)(combinePaths(this.url, p)).then(function (response) {
            if (!response.length) {
                cb(null, []);
                return;
            }
            var mapToDisplayName = function (item) {
                var _a;
                var _b, _c;
                var displayName = (_c = (_b = item.propstat) === null || _b === void 0 ? void 0 : _b.prop) === null || _c === void 0 ? void 0 : _c.displayname;
                if (!displayName) {
                    _a = item.href.match(/.+\/(.+)\/?$/), displayName = _a[1];
                }
                return displayName;
            };
            var contents = response
                .map(function (item) { return mapToDisplayName(item); })
                .slice(1);
            cb(null, contents);
        }, function (err) { return cb(mapHttpErrorToApiError(err)); });
    };
    ;
    WebDAVFileSystem.prototype.stat = function (p, isLstat, cb) {
        propFind.bind(this)(combinePaths(this.url, p)).then(function (response) {
            var self = response[0] || response;
            var prop = self.propstat.prop;
            var isDirectory = prop.resourcetype && 'collection' in prop.resourcetype;
            var itemType = isDirectory ? node_fs_stats_1.FileType.DIRECTORY : node_fs_stats_1.FileType.FILE;
            var size = parseInt(prop.getcontentlength);
            var mode = 777;
            var atime = undefined;
            var mtime = new Date(prop.getlastmodified);
            var ctime = new Date(prop.creationdate);
            var stats = new node_fs_stats_1["default"](itemType, size, mode, atime, mtime, ctime);
            cb(null, stats);
        }, function (err) { return cb(mapHttpErrorToApiError(err)); });
    };
    WebDAVFileSystem.prototype.unlink = function (p, cb) {
        WebDAV_1["default"].DELETE.bind(this)(combinePaths(this.url, p), mapHttpErrorCallback(cb));
    };
    WebDAVFileSystem.prototype.rmdir = function (p, cb) {
        WebDAV_1["default"].DELETE.bind(this)(combinePaths(this.url, p), mapHttpErrorCallback(cb));
    };
    WebDAVFileSystem.prototype.mkdir = function (p, mode, cb) {
        WebDAV_1["default"].MKCOL.bind(this)(combinePaths(this.url, p), mapHttpErrorCallback(cb));
    };
    WebDAVFileSystem.Name = 'WebDAV';
    WebDAVFileSystem.Options = {
        url: {
            type: 'string',
            description: 'The URL of the WebDAV endpoint.',
        }
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
var BrowserFS = __webpack_require__(3);
var BaseFileSystem = Object.getPrototypeOf(BrowserFS.FileSystem.XmlHttpRequest);
exports.BaseFileSystem = BaseFileSystem;
;
;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = BrowserFS;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ErrorCode = exports.ApiError = void 0;
var BrowserFS = __webpack_require__(3);
var _a = BrowserFS.Errors, ApiError = _a.ApiError, ErrorCode = _a.ErrorCode;
exports.ApiError = ApiError;
exports.ErrorCode = ErrorCode;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.FileType = void 0;
var BrowserFS = __webpack_require__(3);
var FileType;
(function (FileType) {
    FileType[FileType["FILE"] = 32768] = "FILE";
    FileType[FileType["DIRECTORY"] = 16384] = "DIRECTORY";
    FileType[FileType["SYMLINK"] = 40960] = "SYMLINK";
})(FileType = exports.FileType || (exports.FileType = {}));
var fs = BrowserFS.BFSRequire('fs');
var Stats = fs.FS.Stats;
exports["default"] = Stats;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBasicAuthHeader", function() { return generateBasicAuthHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDigestAuthHeader", function() { return generateDigestAuthHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTokenAuthHeader", function() { return generateTokenAuthHeader; });
function generateBasicAuthHeader(username, password) {
  const encoded = btoa(`${username}:${password}`);
  return `Basic ${encoded}`;
}

function generateDigestAuthHeader(options, digest) {
  const url = options.url.replace("//", "");
  const uri = url.indexOf("/") == -1 ? "/" : url.slice(url.indexOf("/"));
  const method = options.method ? options.method.toUpperCase() : "GET";
  const qop = /(^|,)\s*auth\s*($|,)/.test(digest.qop) ? "auth" : false;
  const ncString = `00000000${digest.nc}`.slice(-8);
  const cnonce = digest.cnonce;
  const ha1 = ha1Compute(digest.algorithm, digest.username, digest.realm, digest.password, digest.nonce, digest.cnonce);
  const ha2 = md5(`${method}:${uri}`);
  const digestResponse = qop ? md5(`${ha1}:${digest.nonce}:${ncString}:${digest.cnonce}:${qop}:${ha2}`) : md5(`${ha1}:${digest.nonce}:${ha2}`);
  const authValues = {
    username: digest.username,
    realm: digest.realm,
    nonce: digest.nonce,
    uri,
    qop,
    response: digestResponse,
    nc: ncString,
    cnonce: digest.cnonce,
    algorithm: digest.algorithm,
    opaque: digest.opaque
  };
  const authHeader = [];

  for (var k in authValues) {
    if (authValues[k]) {
      if (k === "qop" || k === "nc" || k === "algorithm") {
        authHeader.push(`${k}=${authValues[k]}`);
      } else {
        authHeader.push(`${k}="${authValues[k]}"`);
      }
    }
  }

  return `Digest ${authHeader.join(", ")}`;
}

function generateTokenAuthHeader(tokenInfo) {
  return `${tokenInfo.token_type} ${tokenInfo.access_token}`;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var WebDAV_1 = __webpack_require__(8);
exports["default"] = WebDAV_1["default"];


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var txml_1 = __webpack_require__(9);
var request_1 = __webpack_require__(12);
exports["default"] = {
    headers: {},
    GET: function (url, callback) {
        return request_1["default"]('GET', url, __assign({}, this.headers), null, 'text', callback);
    },
    PROPFIND: function (url, callback) {
        var _this = this;
        return new Promise(function (resolve, reject) { return request_1["default"]('PROPFIND', url, __assign(__assign({}, _this.headers), { Depth: "1" }), null, 'xml', function (err, xmlString) {
            var _a, _b;
            if (err) {
                reject(err);
                return;
            }
            xmlString = xmlString.replace(/(<\/?)D:/gm, '$1');
            var xmlData = txml_1.xml(xmlString);
            var jsData = txml_1.simplify(xmlData);
            var response = (_b = (_a = jsData['?xml']) === null || _a === void 0 ? void 0 : _a.multistatus) === null || _b === void 0 ? void 0 : _b.response;
            if (callback) {
                callback(err, response);
            }
            resolve(response);
        }); });
    },
    MKCOL: function (url, callback) {
        return request_1["default"]('MKCOL', url, __assign({}, this.headers), null, 'text', callback);
    },
    DELETE: function (url, callback) {
        return request_1["default"]('DELETE', url, __assign({}, this.headers), null, 'text', callback);
    },
    PUT: function (url, data, callback) {
        return request_1["default"]('PUT', url, __assign({}, this.headers), data, 'text', callback);
    }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==

/**
 * @author: Tobias Nickel
 * @created: 06.04.2015
 * I needed a small xmlparser chat can be used in a worker.
 */

/**
 * @typedef tNode 
 * @property {string} tagName 
 * @property {object} [attributes] 
 * @property {tNode|string|number[]} children 
 **/

/**
 * parseXML / html into a DOM Object. with no validation and some failur tolerance
 * @param {string} S your XML to parse
 * @param options {object} all other options:
 * searchId {string} the id of a single element, that should be returned. using this will increase the speed rapidly
 * filter {function} filter method, as you know it from Array.filter. but is goes throw the DOM.

 * @return {tNode[]}
 */
function tXml(S, options) {
    "use strict";
    options = options || {};

    var pos = options.pos || 0;

    var openBracket = "<";
    var openBracketCC = "<".charCodeAt(0);
    var closeBracket = ">";
    var closeBracketCC = ">".charCodeAt(0);
    var minus = "-";
    var minusCC = "-".charCodeAt(0);
    var slash = "/";
    var slashCC = "/".charCodeAt(0);
    var exclamation = '!';
    var exclamationCC = '!'.charCodeAt(0);
    var singleQuote = "'";
    var singleQuoteCC = "'".charCodeAt(0);
    var doubleQuote = '"';
    var doubleQuoteCC = '"'.charCodeAt(0);

    /**
     * parsing a list of entries
     */
    function parseChildren() {
        var children = [];
        while (S[pos]) {
            if (S.charCodeAt(pos) == openBracketCC) {
                if (S.charCodeAt(pos + 1) === slashCC) {
                    pos = S.indexOf(closeBracket, pos);
                    if (pos + 1) pos += 1
                    return children;
                } else if (S.charCodeAt(pos + 1) === exclamationCC) {
                    if (S.charCodeAt(pos + 2) == minusCC) {
                        //comment support
                        while (pos !== -1 && !(S.charCodeAt(pos) === closeBracketCC && S.charCodeAt(pos - 1) == minusCC && S.charCodeAt(pos - 2) == minusCC && pos != -1)) {
                            pos = S.indexOf(closeBracket, pos + 1);
                        }
                        if (pos === -1) {
                            pos = S.length
                        }
                    } else {
                        // doctypesupport
                        pos += 2;
                        while (S.charCodeAt(pos) !== closeBracketCC && S[pos]) {
                            pos++;
                        }
                    }
                    pos++;
                    continue;
                }
                var node = parseNode();
                children.push(node);
            } else {
                var text = parseText()
                if (text.trim().length > 0)
                    children.push(text);
                pos++;
            }
        }
        return children;
    }

    /**
     *    returns the text outside of texts until the first '<'
     */
    function parseText() {
        var start = pos;
        pos = S.indexOf(openBracket, pos) - 1;
        if (pos === -2)
            pos = S.length;
        return S.slice(start, pos + 1);
    }
    /**
     *    returns text until the first nonAlphebetic letter
     */
    var nameSpacer = '\n\t>/= ';

    function parseName() {
        var start = pos;
        while (nameSpacer.indexOf(S[pos]) === -1 && S[pos]) {
            pos++;
        }
        return S.slice(start, pos);
    }
    /**
     *    is parsing a node, including tagName, Attributes and its children,
     * to parse children it uses the parseChildren again, that makes the parsing recursive
     */
    var NoChildNodes = options.noChildNodes || ['img', 'br', 'input', 'meta', 'link'];

    function parseNode() {
        pos++;
        const tagName = parseName();
        const attributes = {};
        let children = [];

        // parsing attributes
        while (S.charCodeAt(pos) !== closeBracketCC && S[pos]) {
            var c = S.charCodeAt(pos);
            if ((c > 64 && c < 91) || (c > 96 && c < 123)) {
                //if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(S[pos])!==-1 ){
                var name = parseName();
                // search beginning of the string
                var code = S.charCodeAt(pos);
                while (code && code !== singleQuoteCC && code !== doubleQuoteCC && !((code > 64 && code < 91) || (code > 96 && code < 123)) && code !== closeBracketCC) {
                    pos++;
                    code = S.charCodeAt(pos);
                }
                if (code === singleQuoteCC || code === doubleQuoteCC) {
                    var value = parseString();
                    if (pos === -1) {
                        return {
                            tagName,
                            attributes,
                            children,
                        };
                    }
                } else {
                    value = null;
                    pos--;
                }
                attributes[name] = value;
            }
            pos++;
        }
        // optional parsing of children
        if (S.charCodeAt(pos - 1) !== slashCC) {
            if (tagName == "script") {
                var start = pos + 1;
                pos = S.indexOf('</script>', pos);
                children = [S.slice(start, pos - 1)];
                pos += 9;
            } else if (tagName == "style") {
                var start = pos + 1;
                pos = S.indexOf('</style>', pos);
                children = [S.slice(start, pos - 1)];
                pos += 8;
            } else if (NoChildNodes.indexOf(tagName) == -1) {
                pos++;
                children = parseChildren(name);
            }
        } else {
            pos++;
        }
        return {
            tagName,
            attributes,
            children,
        };
    }

    /**
     *    is parsing a string, that starts with a char and with the same usually  ' or "
     */

    function parseString() {
        var startChar = S[pos];
        var startpos = ++pos;
        pos = S.indexOf(startChar, startpos)
        return S.slice(startpos, pos);
    }

    /**
     *
     */
    function findElements() {
        var r = new RegExp('\\s' + options.attrName + '\\s*=[\'"]' + options.attrValue + '[\'"]').exec(S)
        if (r) {
            return r.index;
        } else {
            return -1;
        }
    }

    var out = null;
    if (options.attrValue !== undefined) {
        options.attrName = options.attrName || 'id';
        var out = [];

        while ((pos = findElements()) !== -1) {
            pos = S.lastIndexOf('<', pos);
            if (pos !== -1) {
                out.push(parseNode());
            }
            S = S.substr(pos);
            pos = 0;
        }
    } else if (options.parseNode) {
        out = parseNode()
    } else {
        out = parseChildren();
    }

    if (options.filter) {
        out = tXml.filter(out, options.filter);
    }

    if (options.setPos) {
        out.pos = pos;
    }

    return out;
}

/**
 * transform the DomObject to an object that is like the object of PHPs simplexmp_load_*() methods.
 * this format helps you to write that is more likely to keep your programm working, even if there a small changes in the XML schema.
 * be aware, that it is not possible to reproduce the original xml from a simplified version, because the order of elements is not saved.
 * therefore your programm will be more flexible and easyer to read.
 *
 * @param {tNode[]} children the childrenList
 */
tXml.simplify = function simplify(children) {
    var out = {};
    if (!children.length) {
        return '';
    }

    if (children.length === 1 && typeof children[0] == 'string') {
        return children[0];
    }
    // map each object
    children.forEach(function(child) {
        if (typeof child !== 'object') {
            return;
        }
        if (!out[child.tagName])
            out[child.tagName] = [];
        var kids = tXml.simplify(child.children||[]);
        out[child.tagName].push(kids);
        if (child.attributes) {
            kids._attributes = child.attributes;
        }
    });

    for (var i in out) {
        if (out[i].length == 1) {
            out[i] = out[i][0];
        }
    }

    return out;
};

/**
 * behaves the same way as Array.filter, if the filter method return true, the element is in the resultList
 * @params children{Array} the children of a node
 * @param f{function} the filter method
 */
tXml.filter = function(children, f) {
    var out = [];
    children.forEach(function(child) {
        if (typeof(child) === 'object' && f(child)) out.push(child);
        if (child.children) {
            var kids = tXml.filter(child.children, f);
            out = out.concat(kids);
        }
    });
    return out;
};

/**
 * stringify a previously parsed string object.
 * this is useful,
 *  1. to remove whitespaces
 * 2. to recreate xml data, with some changed data.
 * @param {tNode} O the object to Stringify
 */
tXml.stringify = function TOMObjToXML(O) {
    var out = '';

    function writeChildren(O) {
        if (O)
            for (var i = 0; i < O.length; i++) {
                if (typeof O[i] == 'string') {
                    out += O[i].trim();
                } else {
                    writeNode(O[i]);
                }
            }
    }

    function writeNode(N) {
        out += "<" + N.tagName;
        for (var i in N.attributes) {
            if (N.attributes[i] === null) {
                out += ' ' + i;
            } else if (N.attributes[i].indexOf('"') === -1) {
                out += ' ' + i + '="' + N.attributes[i].trim() + '"';
            } else {
                out += ' ' + i + "='" + N.attributes[i].trim() + "'";
            }
        }
        out += '>';
        writeChildren(N.children);
        out += '</' + N.tagName + '>';
    }
    writeChildren(O);

    return out;
};


/**
 * use this method to read the textcontent, of some node.
 * It is great if you have mixed content like:
 * this text has some <b>big</b> text and a <a href=''>link</a>
 * @return {string}
 */
tXml.toContentString = function(tDom) {
    if (Array.isArray(tDom)) {
        var out = '';
        tDom.forEach(function(e) {
            out += ' ' + tXml.toContentString(e);
            out = out.trim();
        });
        return out;
    } else if (typeof tDom === 'object') {
        return tXml.toContentString(tDom.children)
    } else {
        return ' ' + tDom;
    }
};

tXml.getElementById = function(S, id, simplified) {
    var out = tXml(S, {
        attrValue: id
    });
    return simplified ? tXml.simplify(out) : out[0];
};
/**
 * A fast parsing method, that not realy finds by classname,
 * more: the class attribute contains XXX
 * @param
 */
tXml.getElementsByClassName = function(S, classname, simplified) {
    const out = tXml(S, {
        attrName: 'class',
        attrValue: '[a-zA-Z0-9- ]*' + classname + '[a-zA-Z0-9- ]*'
    });
    return simplified ? tXml.simplify(out) : out;
};

tXml.parseStream = function(stream, offset) {
    if (typeof offset === 'string') {
        offset = offset.length + 2;
    }
    if (typeof stream === 'string') {
        var fs = __webpack_require__(10);
        stream = fs.createReadStream(stream, { start: offset });
        offset = 0;
    }

    var position = offset;
    var data = '';
    stream.on('data', function(chunk) {
        data += chunk;
        var lastPos = 0;
        do {
            position = data.indexOf('<', position) + 1;
            if(!position) {
                position = lastPos;
                return;
            }
            if (data[position + 1] === '/') {
                position = position + 1;
                lastPos = pos;
                continue;
            }
            var res = tXml(data, { pos: position-1, parseNode: true, setPos: true });
            position = res.pos;
            if (position > (data.length - 1) || position < lastPos) {
                data = data.slice(lastPos);
                position = 0;
                lastPos = 0;
                return;
            } else {
                stream.emit('xml', res);
                lastPos = position;
            }
        } while (1);
    });
    stream.on('end', function() {
        console.log('end')
    });
    return stream;
}

tXml.transformStream = function (offset) {
    // require through here, so it will not get added to webpack/browserify
    const through2 = __webpack_require__(11);
    if (typeof offset === 'string') {
        offset = offset.length + 2;
    }

    var position = offset || 0;
    var data = '';
    const stream = through2({ readableObjectMode: true }, function (chunk, enc, callback) {
        data += chunk;
        var lastPos = 0;
        do {
            position = data.indexOf('<', position) + 1;
            if (!position) {
                position = lastPos;
                return callback();;
            }
            if (data[position + 1] === '/') {
                position = position + 1;
                lastPos = pos;
                continue;
            }
            var res = tXml(data, { pos: position - 1, parseNode: true, setPos: true });
            position = res.pos;
            if (position > (data.length - 1) || position < lastPos) {
                data = data.slice(lastPos);
                position = 0;
                return callback();;
            } else {
                this.push(res);
                lastPos = position;
            }
        } while (1);
        callback();
    });

    return stream;
}

if (true) {
    module.exports = tXml;
    tXml.xml = tXml;
}
//console.clear();
//console.log('here:',tXml.getElementById('<some><xml id="test">dada</xml><that id="test">value</that></some>','test'));
//console.log('here:',tXml.getElementsByClassName('<some><xml id="test" class="sdf test jsalf">dada</xml><that id="test">value</that></some>','test'));

/*
console.clear();
tXml(d,'content');
 //some testCode
var s = document.body.innerHTML.toLowerCase();
var start = new Date().getTime();
var o = tXml(s,'content');
var end = new Date().getTime();
//console.log(JSON.stringify(o,undefined,'\t'));
console.log("MILLISECONDS",end-start);
var nodeCount=document.querySelectorAll('*').length;
console.log('node count',nodeCount);
console.log("speed:",(1000/(end-start))*nodeCount,'Nodes / second')
//console.log(JSON.stringify(tXml('<html><head><title>testPage</title></head><body><h1>TestPage</h1><p>this is a <b>test</b>page</p></body></html>'),undefined,'\t'));
var p = new DOMParser();
var s2='<body>'+s+'</body>'
var start2= new Date().getTime();
var o2 = p.parseFromString(s2,'text/html').querySelector('#content')
var end2=new Date().getTime();
console.log("MILLISECONDS",end2-start2);
// */


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = fs;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = through2;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.HTTP = void 0;
exports.HTTP = {
    OK: 200
};
var fetch_1 = __webpack_require__(13);
var xhr_1 = __webpack_require__(14);
exports["default"] = typeof XMLHttpRequest === 'undefined' ? fetch_1["default"] : xhr_1["default"];


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var _1 = __webpack_require__(12);
function default_1(verb, url, headers, body, type, callback) {
    var _this = this;
    return fetch(url, {
        mode: 'cors',
        method: verb,
        headers: __assign({ 'Content-Type': 'text/xml; charset=UTF-8' }, headers),
        body: body
    })
        .then(function (r) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (Math.floor(r.status / _1.HTTP.OK) > 1) {
                        throw Object.assign(new Error(r.statusText), { status: r.status });
                    }
                    return [4 /*yield*/, r.text()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); })
        .then(function (text) {
        var returnValue = text;
        if (callback) {
            callback(null, returnValue);
        }
        return returnValue;
    }, function (err) {
        callback && callback(err);
        throw err;
    });
}
exports["default"] = default_1;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _1 = __webpack_require__(12);
function default_1(verb, url, headers, data, type, callback) {
    var xhr = new XMLHttpRequest();
    var body = function () {
        return xhr.responseText;
    };
    var promise;
    var resolvePromise, rejectPromise;
    promise = new Promise(function (resolve, reject) {
        resolvePromise = resolve;
        rejectPromise = reject;
    });
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { // complete.
            if (Math.floor(xhr.status / _1.HTTP.OK) > 1) {
                var err = Object.assign(new Error(xhr.statusText), { status: xhr.status });
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
exports["default"] = default_1;


/***/ })
/******/ ]);