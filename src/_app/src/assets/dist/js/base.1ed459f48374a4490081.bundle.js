webpackJsonp([2],{

/***/ 100:
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reducer = __webpack_require__(239);

Object.keys(_reducer).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _reducer[key];
        }
    });
});

var _selectors = __webpack_require__(240);

Object.keys(_selectors).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _selectors[key];
        }
    });
});
/**
 * Thsi wfuiFetch adds following features to native fetch function.
 * - Cancellable promise
 * - Added timeout
 * - Retry connecting when it's failed.
 * - Dispatch request states.
 * @param {string} input - Request url
 * @param {object} init - Request options.
 * @param {function} dispatch - dispatch function from redux.
 */
var wfuiFetch = exports.wfuiFetch = function wfuiFetch(input, init) {
    var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (f) {
        return f;
    };

    var hasCanceled = false;
    var appId = init.headers && init.headers['app-id'] || 0;

    dispatch({ type: 'FETCH_REQUEST', requestId: init.requestId, appId: appId });
    var promise = new Promise(function (resolve, reject) {

        var fetchTimer = void 0;
        var timer5s = setTimeout(function () {
            dispatch({ type: 'FETCH_REQUEST_5S', requestId: init.requestId, appId: appId });
        }, 5000);
        var timer8s = setTimeout(function () {
            dispatch({ type: 'FETCH_REQUEST_8S', requestId: init.requestId, appId: appId });
        }, 8000);
        var timeout = setTimeout(function () {
            dispatch({ type: 'FETCH_REQUEST_TIMEOUT', requestId: init.requestId, appId: appId });
            reject('timeout');
            clearTimeout(fetchTimer);
        }, init.timeout || 300000);

        var wrappedFetch = function wrappedFetch(n) {
            global.fetch(input, init).then(function (response) {
                clearTimeout(timer5s);
                clearTimeout(timer8s);
                clearTimeout(timeout);
                // Need to have more statement.
                if (response.ok) {
                    var contentType = response.headers.get('content-type');
                    if (contentType && contentType.indexOf('application/json') !== -1) {
                        return response.json().then(function (data) {
                            dispatch({ type: 'RECEIVE_FETCH_DATA', requestId: init.requestId, data: data });
                            dispatch({ type: 'FETCH_SUCCESS', requestId: init.requestId, appId: appId });
                            resolve({ res: response, data: data });
                        });
                    } else if (contentType && contentType.indexOf('text/') !== -1) {
                        return response.text().then(function (data) {
                            dispatch({ type: 'RECEIVE_FETCH_DATA', requestId: init.requestId, data: data });
                            dispatch({ type: 'FETCH_SUCCESS', requestId: init.requestId, appId: appId });
                            resolve({ res: response, data: data });
                        });
                    } else {
                        return response.blob().then(function (data) {
                            dispatch({ type: 'RECEIVE_FETCH_DATA', requestId: init.requestId, data: data });
                            dispatch({ type: 'FETCH_SUCCESS', requestId: init.requestId, appId: appId });
                            resolve({ res: response, data: data });
                        });
                    }
                } else {
                    dispatch({ type: 'FETCH_FAILURE', requestId: init.requestId, statusText: response.statusText, appId: appId });
                }
                return hasCanceled ? reject({ isCanceled: true }) : resolve({ res: response });
            }).catch(function (error) {
                if (n > 0) {
                    fetchTimer = setTimeout(function () {
                        console.log('Retry connecting to ' + input);
                        wrappedFetch(n - 1);
                    }, init.retryDelay || 3000);
                } else {
                    dispatch({ type: 'FETCH_RETRY_FAILURE', requestId: init.requestId, statusText: error.message, appId: appId });
                    return hasCanceled ? reject({ isCanceled: true }) : reject(error);
                }
            });
        };
        wrappedFetch(init.retryCount || 0);
    });
    return {
        promise: promise,
        abort: function abort() {
            hasCanceled = true;
        }
    };
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)))

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * This reducer will add fetching state of specific API calles.
 * @param {Object} state - redux state.
 * @param {Object} action - redux payload
 */
var fetchReducer = exports.fetchReducer = function fetchReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];


    // Return if request Id doesn't exist
    if (!action.requestId) return state;

    var _state = JSON.parse(JSON.stringify(state));

    if (!_state[action.requestId]) _state[action.requestId] = { isFetching: false, fetch5s: false, fetch8s: false, status: '', error: '', timeout: false, retried: false, lastUpdated: false };
    var lastUpdate = new Date().getTime();
    switch (action.type) {
        case 'FETCH_INIT':
            _state[action.requestId].status = _state[action.requestId].error = '';
            _state[action.requestId].isFetching = _state[action.requestId].fetch5s = _state[action.requestId].fetch8s = _state[action.requestId].timeout = _state[action.requestId].retried = false;
            _state[action.requestId].lastUpdated = lastUpdate;
            return _state;
        case 'FETCH_REQUEST':
            _state[action.requestId].isFetching = true;
            _state[action.requestId].status = _state[action.requestId].error = '';
            _state[action.requestId].fetch5s = _state[action.requestId].fetch8s = _state[action.requestId].timeout = _state[action.requestId].retried = false;
            _state[action.requestId].lastUpdated = lastUpdate;
            return _state;
        case 'FETCH_REQUEST_5S':
            _state[action.requestId].fetch5s = true;
            _state[action.requestId].lastUpdated = lastUpdate;
            return _state;
        case 'FETCH_REQUEST_8S':
            _state[action.requestId].fetch8s = true;
            _state[action.requestId].lastUpdated = lastUpdate;
            return _state;
        case 'FETCH_REQUEST_TIMEOUT':
            _state[action.requestId].isFetching = _state[action.requestId].fetch5s = _state[action.requestId].fetch8s = false;
            _state[action.requestId].status = 'fail';
            _state[action.requestId].timeout = true;
            _state[action.requestId].lastUpdated = lastUpdate;
            return _state;
        case 'FETCH_SUCCESS':
            _state[action.requestId].isFetching = _state[action.requestId].fetch5s = _state[action.requestId].fetch8s = false;
            _state[action.requestId].status = 'success';
            _state[action.requestId].lastUpdated = lastUpdate;
            return _state;
        case 'FETCH_FAILURE':
            _state[action.requestId].isFetching = _state[action.requestId].fetch5s = _state[action.requestId].fetch8s = false;
            _state[action.requestId].status = 'fail';
            _state[action.requestId].error = action.statusText;
            _state[action.requestId].lastUpdated = lastUpdate;
            return _state;
        case 'FETCH_RETRY_FAILURE':
            _state[action.requestId].isFetching = _state[action.requestId].fetch5s = _state[action.requestId].fetch8s = false;
            _state[action.requestId].status = 'fail';
            _state[action.requestId].retried = true;
            _state[action.requestId].lastUpdated = lastUpdate;
            return _state;
        default:
            return _state;
    }
};

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchSelector = undefined;

var _reselect = __webpack_require__(62);

var _fetchSelector = function _fetchSelector(state) {
    return state.fetch;
};

var fetchSelector = exports.fetchSelector = function fetchSelector(requestId) {
    return (0, _reselect.createSelector)(_fetchSelector, function (fetch) {
        return fetch[requestId];
    });
};

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Folked from External Links from WFUI
 * 
 */

var extLink = exports.extLink = function extLink($, _config) {

    var defaultConfig = {
        extAlert: "_blank",
        extAlertText: "This link will take you to an external web site.",
        extClass: "ext",
        extCssExclude: "",
        extCssExplicit: "",
        extExclude: "",
        extImgClass: 0,
        extInclude: "",
        extLabel: "(link is external)",
        extSubdomains: 1, // Exclude links with the same primary domain. // For example, a link from 'www.example.com' to the subdomain of 'my.example.com' would be excluded.
        extTarget: "_blank",
        mailtoClass: 0,
        mailtoLabel: "(link sends e-mail)",
        promptExclude: ""
    };
    var config = Object.assign({}, defaultConfig, _config);

    function attach(context) {

        if (!$) {
            console.error('jQuery is not found: extlink is dependent on jQuery.');
            return false;
        }

        // Strip the host name down, removing ports, subdomains, or www.
        var pattern = /^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/;
        var host = window.location.host.replace(pattern, '$3$4');
        var subdomain = window.location.host.replace(pattern, '$1');

        // Determine what subdomains are considered internal.
        var subdomains;
        if (config.extSubdomains) {
            subdomains = '([^/]*\\.)?';
        } else if (subdomain === 'www.' || subdomain === '') {
            subdomains = '(www\\.)?';
        } else {
            subdomains = subdomain.replace('.', '\\.');
        }

        // Build regular expressions that define an internal link.
        var internal_link = new RegExp('^https?://' + subdomains + host, 'i');

        // Extra internal link matching.
        var extInclude = false;
        if (config.extInclude) {
            extInclude = new RegExp(config.extInclude.replace(/\\/, '\\'), 'i');
        }

        // Extra external link matching.
        var extExclude = false;
        if (config.extExclude) {
            extExclude = new RegExp(config.extExclude.replace(/\\/, '\\'), 'i');
        }

        // Extra external link CSS selector exclusion.
        var extCssExclude = false;
        if (config.extCssExclude) {
            extCssExclude = config.extCssExclude;
        }

        // Extra external link CSS selector explicit.
        var extCssExplicit = false;
        if (config.extCssExplicit) {
            extCssExplicit = config.extCssExplicit;
        }

        // Find all links which are NOT internal and begin with http as opposed
        // to ftp://, javascript:, etc. other kinds of links.
        // When operating on the 'this' variable, the host has been appended to
        // all links by the browser, even local ones.
        // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
        // available in jQuery 1.0 (WFUI 5 default).
        var external_links = [];
        var mailto_links = [];

        $('a:not(.' + config.extClass + ', .' + config.mailtoClass + '), area:not(.' + config.extClass + ', .' + config.mailtoClass + ')', context).each(function (el) {
            try {
                var url = '';
                if (typeof this.href == 'string') {
                    url = this.href.toLowerCase();
                }
                // Handle SVG links (xlink:href).
                else if (_typeof(this.href) == 'object') {
                        url = this.href.baseVal;
                    }
                if (url.indexOf('http') === 0 && (!url.match(internal_link) && !(extExclude && url.match(extExclude)) || extInclude && url.match(extInclude)) && !(extCssExclude && $(this).parents(extCssExclude).length > 0) && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
                    external_links.push(this);
                }
                // Do not include area tags with begin with mailto: (this prohibits
                // icons from being added to image-maps).
                else if (this.tagName !== 'AREA' && url.indexOf('mailto:') === 0 && !(extCssExclude && $(this).parents(extCssExclude).length > 0) && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
                        mailto_links.push(this);
                    }
            }
            // IE7 throws errors often when dealing with irregular links, such as:
            // <a href="node/10"></a> Empty tags.
            // <a href="http://user:pass@example.com">example</a> User:pass syntax.
            catch (error) {
                return false;
            }
        });

        if (config.extClass) {
            applyClassAndSpan(external_links, config.extClass);
        }

        if (config.mailtoClass) {
            applyClassAndSpan(mailto_links, config.mailtoClass);
        }

        if (config.extTarget) {
            // Apply the target attribute to all links.
            if (config.extTarget) {
                $(external_links).attr({ target: '_blank', rel: 'nofollow' });
                $(external_links).attr('rel', function (i, val) {
                    // If no rel attribute is present, create one with the values noopener and noreferrer.
                    if (val === null) {
                        return 'noopener nofererer';
                    }
                    // Check to see if rel contains noopener or noreferrer. Add what doesn't exist.
                    if (val.indexOf('noopener') > -1 || val.indexOf('noreferrer') > -1) {
                        if (val.indexOf('noopener') === -1) {
                            return val + ' noopener';
                        }
                        if (val.indexOf('noreferrer') === -1) {
                            return val + ' noreferrer';
                        }
                        // Both noopener and noreferrer exist. Nothing needs to be added.
                        else {
                                return val;
                            }
                    }
                    // Else, append noopener and noreferrer to val.
                    else {
                            return val + ' noopener nofererer';
                        }
                });
            }
        }

        // Set up default click function for the external links popup. This should be
        // overridden by modules wanting to alter the popup.
        function popupClickHandler() {
            if (config.extAlert) {
                return confirm(config.extAlertText);
            }
        };

        $(external_links).click(function (e) {
            return popupClickHandler(e, this);
        });
    };

    /**
     * Apply a class and a trailing <span> to all links not containing images.
     *
     * @param {object[]} links
     *   An array of DOM elements representing the links.
     * @param {string} class_name
     *   The class to apply to the links.
     */
    function applyClassAndSpan(links, class_name) {
        var $links_to_process;
        if (config.extImgClass) {
            $links_to_process = $(links);
        } else {
            var links_with_images = $(links).find('img').parents('a');
            $links_to_process = $(links).not(links_with_images);
        }
        $links_to_process.addClass(class_name);
        var i;
        var length = $links_to_process.length;
        for (i = 0; i < length; i++) {
            var $link = $($links_to_process[i]);
            if ($link.css('display') === 'inline' || $link.css('display') === 'inline-block' || $link.css('display') === 'block') {
                if (class_name === config.mailtoClass) {
                    $link.append('<span class="' + class_name + '"><span class="element-invisible"> ' + config.mailtoLabel + '</span></span>');
                } else {
                    $link.append('<span class="' + class_name + '"><span class="element-invisible"> ' + config.extLabel + '</span></span>');
                }
            }
        }
    };

    return { attach: attach };
};

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _wfuiFetch = __webpack_require__(167);

var wfuiFetch = _interopRequireWildcard(_wfuiFetch);

var _jquery = __webpack_require__(241);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = _extends({}, wfuiFetch, {
    extLink: _jquery.extLink
});

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
module.exports = __webpack_require__(742);


/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(26);

/**
 * Set external link
 */
var ext = (0, _util.extLink)(jQuery, Object({"extAlert":"_Alert","extClass":"ext"}));
ext.attach(document);

/***/ })

},[741]);
//# sourceMappingURL=base.1ed459f48374a4490081.bundle.js.map