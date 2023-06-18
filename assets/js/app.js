(() => {
    "use strict";

    function e(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    const {
        toString: t
    } = Object.prototype, {
        getPrototypeOf: n
    } = Object, s = (i = Object.create(null), e => {
        const n = t.call(e);
        return i[n] || (i[n] = n.slice(8, -1).toLowerCase())
    });
    var i;
    const r = e => (e = e.toLowerCase(), t => s(t) === e),
        a = e => t => typeof t === e,
        {
            isArray: o
        } = Array,
        l = a("undefined"),
        c = r("ArrayBuffer"),
        d = a("string"),
        u = a("function"),
        p = a("number"),
        f = e => null !== e && "object" == typeof e,
        h = e => {
            if ("object" !== s(e)) return !1;
            const t = n(e);
            return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
        },
        m = r("Date"),
        g = r("File"),
        v = r("Blob"),
        b = r("FileList"),
        y = r("URLSearchParams");

    function w(e, t, {
        allOwnKeys: n = !1
    } = {}) {
        if (null == e) return;
        let s, i;
        if ("object" != typeof e && (e = [e]), o(e))
            for (s = 0, i = e.length; s < i; s++) t.call(null, e[s], s, e);
        else {
            const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
                r = i.length;
            let a;
            for (s = 0; s < r; s++) a = i[s], t.call(null, e[a], a, e)
        }
    }

    function S(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let s, i = n.length;
        for (; i-- > 0;)
            if (s = n[i], t === s.toLowerCase()) return s;
        return null
    }
    const E = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
        C = e => !l(e) && e !== E,
        T = (x = "undefined" != typeof Uint8Array && n(Uint8Array), e => x && e instanceof x);
    var x;
    const O = r("HTMLFormElement"),
        k = (({
                  hasOwnProperty: e
              }) => (t, n) => e.call(t, n))(Object.prototype),
        L = r("RegExp"),
        P = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
                s = {};
            w(n, ((n, i) => {
                !1 !== t(n, i, e) && (s[i] = n)
            })), Object.defineProperties(e, s)
        },
        A = "abcdefghijklmnopqrstuvwxyz",
        _ = "0123456789",
        $ = {
            DIGIT: _,
            ALPHA: A,
            ALPHA_DIGIT: A + A.toUpperCase() + _
        },
        M = {
            isArray: o,
            isArrayBuffer: c,
            isBuffer: function(e) {
                return null !== e && !l(e) && null !== e.constructor && !l(e.constructor) && u(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            },
            isFormData: e => {
                const n = "[object FormData]";
                return e && ("function" == typeof FormData && e instanceof FormData || t.call(e) === n || u(e.toString) && e.toString() === n)
            },
            isArrayBufferView: function(e) {
                let t;
                return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && c(e.buffer), t
            },
            isString: d,
            isNumber: p,
            isBoolean: e => !0 === e || !1 === e,
            isObject: f,
            isPlainObject: h,
            isUndefined: l,
            isDate: m,
            isFile: g,
            isBlob: v,
            isRegExp: L,
            isFunction: u,
            isStream: e => f(e) && u(e.pipe),
            isURLSearchParams: y,
            isTypedArray: T,
            isFileList: b,
            forEach: w,
            merge: function e() {
                const {
                    caseless: t
                } = C(this) && this || {}, n = {}, s = (s, i) => {
                    const r = t && S(n, i) || i;
                    h(n[r]) && h(s) ? n[r] = e(n[r], s) : h(s) ? n[r] = e({}, s) : o(s) ? n[r] = s.slice() : n[r] = s
                };
                for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && w(arguments[e], s);
                return n
            },
            extend: (t, n, s, {
                allOwnKeys: i
            } = {}) => (w(n, ((n, i) => {
                s && u(n) ? t[i] = e(n, s) : t[i] = n
            }), {
                allOwnKeys: i
            }), t),
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, n, s) => {
                e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                    value: t.prototype
                }), n && Object.assign(e.prototype, n)
            },
            toFlatObject: (e, t, s, i) => {
                let r, a, o;
                const l = {};
                if (t = t || {}, null == e) return t;
                do {
                    for (r = Object.getOwnPropertyNames(e), a = r.length; a-- > 0;) o = r[a], i && !i(o, e, t) || l[o] || (t[o] = e[o], l[o] = !0);
                    e = !1 !== s && n(e)
                } while (e && (!s || s(e, t)) && e !== Object.prototype);
                return t
            },
            kindOf: s,
            kindOfTest: r,
            endsWith: (e, t, n) => {
                e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                const s = e.indexOf(t, n);
                return -1 !== s && s === n
            },
            toArray: e => {
                if (!e) return null;
                if (o(e)) return e;
                let t = e.length;
                if (!p(t)) return null;
                const n = new Array(t);
                for (; t-- > 0;) n[t] = e[t];
                return n
            },
            forEachEntry: (e, t) => {
                const n = (e && e[Symbol.iterator]).call(e);
                let s;
                for (;
                    (s = n.next()) && !s.done;) {
                    const n = s.value;
                    t.call(e, n[0], n[1])
                }
            },
            matchAll: (e, t) => {
                let n;
                const s = [];
                for (; null !== (n = e.exec(t));) s.push(n);
                return s
            },
            isHTMLForm: O,
            hasOwnProperty: k,
            hasOwnProp: k,
            reduceDescriptors: P,
            freezeMethods: e => {
                P(e, ((t, n) => {
                    if (u(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                    const s = e[n];
                    u(s) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
                        throw Error("Can not rewrite read-only method '" + n + "'")
                    }))
                }))
            },
            toObjectSet: (e, t) => {
                const n = {},
                    s = e => {
                        e.forEach((e => {
                            n[e] = !0
                        }))
                    };
                return o(e) ? s(e) : s(String(e).split(t)), n
            },
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e, t, n) {
                return t.toUpperCase() + n
            })),
            noop: () => {},
            toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t),
            findKey: S,
            global: E,
            isContextDefined: C,
            ALPHABET: $,
            generateString: (e = 16, t = $.ALPHA_DIGIT) => {
                let n = "";
                const {
                    length: s
                } = t;
                for (; e--;) n += t[Math.random() * s | 0];
                return n
            },
            isSpecCompliantForm: function(e) {
                return !!(e && u(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
            },
            toJSONObject: e => {
                const t = new Array(10),
                    n = (e, s) => {
                        if (f(e)) {
                            if (t.indexOf(e) >= 0) return;
                            if (!("toJSON" in e)) {
                                t[s] = e;
                                const i = o(e) ? [] : {};
                                return w(e, ((e, t) => {
                                    const r = n(e, s + 1);
                                    !l(r) && (i[t] = r)
                                })), t[s] = void 0, i
                            }
                        }
                        return e
                    };
                return n(e, 0)
            }
        };

    function N(e, t, n, s, i) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), i && (this.response = i)
    }
    M.inherits(N, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: M.toJSONObject(this.config),
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
            }
        }
    });
    const I = N.prototype,
        D = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e => {
        D[e] = {
            value: e
        }
    })), Object.defineProperties(N, D), Object.defineProperty(I, "isAxiosError", {
        value: !0
    }), N.from = (e, t, n, s, i, r) => {
        const a = Object.create(I);
        return M.toFlatObject(e, a, (function(e) {
            return e !== Error.prototype
        }), (e => "isAxiosError" !== e)), N.call(a, e.message, t, n, s, i), a.cause = e, a.name = e.name, r && Object.assign(a, r), a
    };
    const R = N;

    function B(e) {
        return M.isPlainObject(e) || M.isArray(e)
    }

    function q(e) {
        return M.endsWith(e, "[]") ? e.slice(0, -2) : e
    }

    function j(e, t, n) {
        return e ? e.concat(t).map((function(e, t) {
            return e = q(e), !n && t ? "[" + e + "]" : e
        })).join(n ? "." : "") : t
    }
    const z = M.toFlatObject(M, {}, null, (function(e) {
            return /^is[A-Z]/.test(e)
        })),
        F = function(e, t, n) {
            if (!M.isObject(e)) throw new TypeError("target must be an object");
            t = t || new FormData;
            const s = (n = M.toFlatObject(n, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, (function(e, t) {
                    return !M.isUndefined(t[e])
                }))).metaTokens,
                i = n.visitor || c,
                r = n.dots,
                a = n.indexes,
                o = (n.Blob || "undefined" != typeof Blob && Blob) && M.isSpecCompliantForm(t);
            if (!M.isFunction(i)) throw new TypeError("visitor must be a function");

            function l(e) {
                if (null === e) return "";
                if (M.isDate(e)) return e.toISOString();
                if (!o && M.isBlob(e)) throw new R("Blob is not supported. Use a Buffer instead.");
                return M.isArrayBuffer(e) || M.isTypedArray(e) ? o && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
            }

            function c(e, n, i) {
                let o = e;
                if (e && !i && "object" == typeof e)
                    if (M.endsWith(n, "{}")) n = s ? n : n.slice(0, -2), e = JSON.stringify(e);
                    else if (M.isArray(e) && function(e) {
                        return M.isArray(e) && !e.some(B)
                    }(e) || (M.isFileList(e) || M.endsWith(n, "[]")) && (o = M.toArray(e))) return n = q(n), o.forEach((function(e, s) {
                        !M.isUndefined(e) && null !== e && t.append(!0 === a ? j([n], s, r) : null === a ? n : n + "[]", l(e))
                    })), !1;
                return !!B(e) || (t.append(j(i, n, r), l(e)), !1)
            }
            const d = [],
                u = Object.assign(z, {
                    defaultVisitor: c,
                    convertValue: l,
                    isVisitable: B
                });
            if (!M.isObject(e)) throw new TypeError("data must be an object");
            return function e(n, s) {
                if (!M.isUndefined(n)) {
                    if (-1 !== d.indexOf(n)) throw Error("Circular reference detected in " + s.join("."));
                    d.push(n), M.forEach(n, (function(n, r) {
                        !0 === (!(M.isUndefined(n) || null === n) && i.call(t, n, M.isString(r) ? r.trim() : r, s, u)) && e(n, s ? s.concat(r) : [r])
                    })), d.pop()
                }
            }(e), t
        };

    function G(e) {
        const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function(e) {
            return t[e]
        }))
    }

    function H(e, t) {
        this._pairs = [], e && F(e, this, t)
    }
    const U = H.prototype;
    U.append = function(e, t) {
        this._pairs.push([e, t])
    }, U.toString = function(e) {
        const t = e ? function(t) {
            return e.call(this, t, G)
        } : G;
        return this._pairs.map((function(e) {
            return t(e[0]) + "=" + t(e[1])
        }), "").join("&")
    };
    const V = H;

    function W(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    function J(e, t, n) {
        if (!t) return e;
        const s = n && n.encode || W,
            i = n && n.serialize;
        let r;
        if (r = i ? i(t, n) : M.isURLSearchParams(t) ? t.toString() : new V(t, n).toString(s), r) {
            const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + r
        }
        return e
    }
    const X = class {
            constructor() {
                this.handlers = []
            }
            use(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }), this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                M.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }))
            }
        },
        Y = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        K = "undefined" != typeof URLSearchParams ? URLSearchParams : V,
        Q = "undefined" != typeof FormData ? FormData : null,
        Z = (() => {
            let e;
            return ("undefined" == typeof navigator || "ReactNative" !== (e = navigator.product) && "NativeScript" !== e && "NS" !== e) && "undefined" != typeof window && "undefined" != typeof document
        })(),
        ee = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        te = {
            isBrowser: !0,
            classes: {
                URLSearchParams: K,
                FormData: Q,
                Blob
            },
            isStandardBrowserEnv: Z,
            isStandardBrowserWebWorkerEnv: ee,
            protocols: ["http", "https", "file", "blob", "url", "data"]
        },
        ne = function(e) {
            function t(e, n, s, i) {
                let r = e[i++];
                const a = Number.isFinite(+r),
                    o = i >= e.length;
                return r = !r && M.isArray(s) ? s.length : r, o ? (M.hasOwnProp(s, r) ? s[r] = [s[r], n] : s[r] = n, !a) : (s[r] && M.isObject(s[r]) || (s[r] = []), t(e, n, s[r], i) && M.isArray(s[r]) && (s[r] = function(e) {
                    const t = {},
                        n = Object.keys(e);
                    let s;
                    const i = n.length;
                    let r;
                    for (s = 0; s < i; s++) r = n[s], t[r] = e[r];
                    return t
                }(s[r])), !a)
            }
            if (M.isFormData(e) && M.isFunction(e.entries)) {
                const n = {};
                return M.forEachEntry(e, ((e, s) => {
                    t(function(e) {
                        return M.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
                    }(e), s, n, 0)
                })), n
            }
            return null
        },
        se = {
            "Content-Type": void 0
        },
        ie = {
            transitional: Y,
            adapter: ["xhr", "http"],
            transformRequest: [function(e, t) {
                const n = t.getContentType() || "",
                    s = n.indexOf("application/json") > -1,
                    i = M.isObject(e);
                if (i && M.isHTMLForm(e) && (e = new FormData(e)), M.isFormData(e)) return s && s ? JSON.stringify(ne(e)) : e;
                if (M.isArrayBuffer(e) || M.isBuffer(e) || M.isStream(e) || M.isFile(e) || M.isBlob(e)) return e;
                if (M.isArrayBufferView(e)) return e.buffer;
                if (M.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                let r;
                if (i) {
                    if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                        return F(e, new te.classes.URLSearchParams, Object.assign({
                            visitor: function(e, t, n, s) {
                                return te.isNode && M.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments)
                            }
                        }, t))
                    }(e, this.formSerializer).toString();
                    if ((r = M.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                        const t = this.env && this.env.FormData;
                        return F(r ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                return i || s ? (t.setContentType("application/json", !1), function(e, t, n) {
                    if (M.isString(e)) try {
                        return (0, JSON.parse)(e), M.trim(e)
                    } catch (e) {
                        if ("SyntaxError" !== e.name) throw e
                    }
                    return (0, JSON.stringify)(e)
                }(e)) : e
            }],
            transformResponse: [function(e) {
                const t = this.transitional || ie.transitional,
                    n = t && t.forcedJSONParsing,
                    s = "json" === this.responseType;
                if (e && M.isString(e) && (n && !this.responseType || s)) {
                    const n = !(t && t.silentJSONParsing) && s;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (n) {
                            if ("SyntaxError" === e.name) throw R.from(e, R.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e
                        }
                    }
                }
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: te.classes.FormData,
                Blob: te.classes.Blob
            },
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }
        };
    M.forEach(["delete", "get", "head"], (function(e) {
        ie.headers[e] = {}
    })), M.forEach(["post", "put", "patch"], (function(e) {
        ie.headers[e] = M.merge(se)
    }));
    const re = ie,
        ae = M.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
        oe = Symbol("internals");

    function le(e) {
        return e && String(e).trim().toLowerCase()
    }

    function ce(e) {
        return !1 === e || null == e ? e : M.isArray(e) ? e.map(ce) : String(e)
    }

    function de(e, t, n, s, i) {
        return M.isFunction(s) ? s.call(this, t, n) : (i && (t = n), M.isString(t) ? M.isString(s) ? -1 !== t.indexOf(s) : M.isRegExp(s) ? s.test(t) : void 0 : void 0)
    }
    class ue {
        constructor(e) {
            e && this.set(e)
        }
        set(e, t, n) {
            const s = this;

            function i(e, t, n) {
                const i = le(t);
                if (!i) throw new Error("header name must be a non-empty string");
                const r = M.findKey(s, i);
                (!r || void 0 === s[r] || !0 === n || void 0 === n && !1 !== s[r]) && (s[r || t] = ce(e))
            }
            const r = (e, t) => M.forEach(e, ((e, n) => i(e, n, t)));
            return M.isPlainObject(e) || e instanceof this.constructor ? r(e, t) : M.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z]+$/.test(e.trim()) ? r((e => {
                const t = {};
                let n, s, i;
                return e && e.split("\n").forEach((function(e) {
                    i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), s = e.substring(i + 1).trim(), !n || t[n] && ae[n] || ("set-cookie" === n ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s)
                })), t
            })(e), t) : null != e && i(t, e, n), this
        }
        get(e, t) {
            if (e = le(e)) {
                const n = M.findKey(this, e);
                if (n) {
                    const e = this[n];
                    if (!t) return e;
                    if (!0 === t) return function(e) {
                        const t = Object.create(null),
                            n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        let s;
                        for (; s = n.exec(e);) t[s[1]] = s[2];
                        return t
                    }(e);
                    if (M.isFunction(t)) return t.call(this, e, n);
                    if (M.isRegExp(t)) return t.exec(e);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(e, t) {
            if (e = le(e)) {
                const n = M.findKey(this, e);
                return !(!n || void 0 === this[n] || t && !de(0, this[n], n, t))
            }
            return !1
        }
        delete(e, t) {
            const n = this;
            let s = !1;

            function i(e) {
                if (e = le(e)) {
                    const i = M.findKey(n, e);
                    !i || t && !de(0, n[i], i, t) || (delete n[i], s = !0)
                }
            }
            return M.isArray(e) ? e.forEach(i) : i(e), s
        }
        clear(e) {
            const t = Object.keys(this);
            let n = t.length,
                s = !1;
            for (; n--;) {
                const i = t[n];
                e && !de(0, this[i], i, e, !0) || (delete this[i], s = !0)
            }
            return s
        }
        normalize(e) {
            const t = this,
                n = {};
            return M.forEach(this, ((s, i) => {
                const r = M.findKey(n, i);
                if (r) return t[r] = ce(s), void delete t[i];
                const a = e ? function(e) {
                    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e, t, n) => t.toUpperCase() + n))
                }(i) : String(i).trim();
                a !== i && delete t[i], t[a] = ce(s), n[a] = !0
            })), this
        }
        concat(...e) {
            return this.constructor.concat(this, ...e)
        }
        toJSON(e) {
            const t = Object.create(null);
            return M.forEach(this, ((n, s) => {
                null != n && !1 !== n && (t[s] = e && M.isArray(n) ? n.join(", ") : n)
            })), t
        }[Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map((([e, t]) => e + ": " + t)).join("\n")
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(e) {
            return e instanceof this ? e : new this(e)
        }
        static concat(e, ...t) {
            const n = new this(e);
            return t.forEach((e => n.set(e))), n
        }
        static accessor(e) {
            const t = (this[oe] = this[oe] = {
                    accessors: {}
                }).accessors,
                n = this.prototype;

            function s(e) {
                const s = le(e);
                t[s] || (function(e, t) {
                    const n = M.toCamelCase(" " + t);
                    ["get", "set", "has"].forEach((s => {
                        Object.defineProperty(e, s + n, {
                            value: function(e, n, i) {
                                return this[s].call(this, t, e, n, i)
                            },
                            configurable: !0
                        })
                    }))
                }(n, e), t[s] = !0)
            }
            return M.isArray(e) ? e.forEach(s) : s(e), this
        }
    }
    ue.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), M.freezeMethods(ue.prototype), M.freezeMethods(ue);
    const pe = ue;

    function fe(e, t) {
        const n = this || re,
            s = t || n,
            i = pe.from(s.headers);
        let r = s.data;
        return M.forEach(e, (function(e) {
            r = e.call(n, r, i.normalize(), t ? t.status : void 0)
        })), i.normalize(), r
    }

    function he(e) {
        return !(!e || !e.__CANCEL__)
    }

    function me(e, t, n) {
        R.call(this, null == e ? "canceled" : e, R.ERR_CANCELED, t, n), this.name = "CanceledError"
    }
    M.inherits(me, R, {
        __CANCEL__: !0
    });
    const ge = me,
        ve = te.isStandardBrowserEnv ? {
            write: function(e, t, n, s, i, r) {
                const a = [];
                a.push(e + "=" + encodeURIComponent(t)), M.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), M.isString(s) && a.push("path=" + s), M.isString(i) && a.push("domain=" + i), !0 === r && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function(e) {
                const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        };

    function be(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }(e, t) : t
    }
    const ye = te.isStandardBrowserEnv ? function() {
            const e = /(msie|trident)/i.test(navigator.userAgent),
                t = document.createElement("a");
            let n;

            function s(n) {
                let s = n;
                return e && (t.setAttribute("href", s), s = t.href), t.setAttribute("href", s), {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
                }
            }
            return n = s(window.location.href),
                function(e) {
                    const t = M.isString(e) ? s(e) : e;
                    return t.protocol === n.protocol && t.host === n.host
                }
        }() : function() {
            return !0
        },
        we = function(e, t) {
            e = e || 10;
            const n = new Array(e),
                s = new Array(e);
            let i, r = 0,
                a = 0;
            return t = void 0 !== t ? t : 1e3,
                function(o) {
                    const l = Date.now(),
                        c = s[a];
                    i || (i = l), n[r] = o, s[r] = l;
                    let d = a,
                        u = 0;
                    for (; d !== r;) u += n[d++], d %= e;
                    if (r = (r + 1) % e, r === a && (a = (a + 1) % e), l - i < t) return;
                    const p = c && l - c;
                    return p ? Math.round(1e3 * u / p) : void 0
                }
        };

    function Se(e, t) {
        let n = 0;
        const s = we(50, 250);
        return i => {
            const r = i.loaded,
                a = i.lengthComputable ? i.total : void 0,
                o = r - n,
                l = s(o);
            n = r;
            const c = {
                loaded: r,
                total: a,
                progress: a ? r / a : void 0,
                bytes: o,
                rate: l || void 0,
                estimated: l && a && r <= a ? (a - r) / l : void 0,
                event: i
            };
            c[t ? "download" : "upload"] = !0, e(c)
        }
    }
    const Ee = {
        http: null,
        xhr: "undefined" != typeof XMLHttpRequest && function(e) {
            return new Promise((function(t, n) {
                let s = e.data;
                const i = pe.from(e.headers).normalize(),
                    r = e.responseType;
                let a;

                function o() {
                    e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a)
                }
                M.isFormData(s) && (te.isStandardBrowserEnv || te.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
                let l = new XMLHttpRequest;
                if (e.auth) {
                    const t = e.auth.username || "",
                        n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    i.set("Authorization", "Basic " + btoa(t + ":" + n))
                }
                const c = be(e.baseURL, e.url);

                function d() {
                    if (!l) return;
                    const s = pe.from("getAllResponseHeaders" in l && l.getAllResponseHeaders());
                    ! function(e, t, n) {
                        const s = n.config.validateStatus;
                        n.status && s && !s(n.status) ? t(new R("Request failed with status code " + n.status, [R.ERR_BAD_REQUEST, R.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
                    }((function(e) {
                        t(e), o()
                    }), (function(e) {
                        n(e), o()
                    }), {
                        data: r && "text" !== r && "json" !== r ? l.response : l.responseText,
                        status: l.status,
                        statusText: l.statusText,
                        headers: s,
                        config: e,
                        request: l
                    }), l = null
                }
                if (l.open(e.method.toUpperCase(), J(c, e.params, e.paramsSerializer), !0), l.timeout = e.timeout, "onloadend" in l ? l.onloadend = d : l.onreadystatechange = function() {
                    l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:")) && setTimeout(d)
                }, l.onabort = function() {
                    l && (n(new R("Request aborted", R.ECONNABORTED, e, l)), l = null)
                }, l.onerror = function() {
                    n(new R("Network Error", R.ERR_NETWORK, e, l)), l = null
                }, l.ontimeout = function() {
                    let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const s = e.transitional || Y;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new R(t, s.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED, e, l)), l = null
                }, te.isStandardBrowserEnv) {
                    const t = (e.withCredentials || ye(c)) && e.xsrfCookieName && ve.read(e.xsrfCookieName);
                    t && i.set(e.xsrfHeaderName, t)
                }
                void 0 === s && i.setContentType(null), "setRequestHeader" in l && M.forEach(i.toJSON(), (function(e, t) {
                    l.setRequestHeader(t, e)
                })), M.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), r && "json" !== r && (l.responseType = e.responseType), "function" == typeof e.onDownloadProgress && l.addEventListener("progress", Se(e.onDownloadProgress, !0)), "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", Se(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = t => {
                    l && (n(!t || t.type ? new ge(null, e, l) : t), l.abort(), l = null)
                }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
                const u = function(e) {
                    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }(c);
                u && -1 === te.protocols.indexOf(u) ? n(new R("Unsupported protocol " + u + ":", R.ERR_BAD_REQUEST, e)) : l.send(s || null)
            }))
        }
    };
    M.forEach(Ee, ((e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch (e) {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    }));
    const Ce = {
        getAdapter: e => {
            e = M.isArray(e) ? e : [e];
            const {
                length: t
            } = e;
            let n, s;
            for (let i = 0; i < t && (n = e[i], !(s = M.isString(n) ? Ee[n.toLowerCase()] : n)); i++);
            if (!s) {
                if (!1 === s) throw new R(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT");
                throw new Error(M.hasOwnProp(Ee, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`)
            }
            if (!M.isFunction(s)) throw new TypeError("adapter is not a function");
            return s
        },
        adapters: Ee
    };

    function Te(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ge(null, e)
    }

    function xe(e) {
        return Te(e), e.headers = pe.from(e.headers), e.data = fe.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ce.getAdapter(e.adapter || re.adapter)(e).then((function(t) {
            return Te(e), t.data = fe.call(e, e.transformResponse, t), t.headers = pe.from(t.headers), t
        }), (function(t) {
            return he(t) || (Te(e), t && t.response && (t.response.data = fe.call(e, e.transformResponse, t.response), t.response.headers = pe.from(t.response.headers))), Promise.reject(t)
        }))
    }
    const Oe = e => e instanceof pe ? e.toJSON() : e;

    function ke(e, t) {
        t = t || {};
        const n = {};

        function s(e, t, n) {
            return M.isPlainObject(e) && M.isPlainObject(t) ? M.merge.call({
                caseless: n
            }, e, t) : M.isPlainObject(t) ? M.merge({}, t) : M.isArray(t) ? t.slice() : t
        }

        function i(e, t, n) {
            return M.isUndefined(t) ? M.isUndefined(e) ? void 0 : s(void 0, e, n) : s(e, t, n)
        }

        function r(e, t) {
            if (!M.isUndefined(t)) return s(void 0, t)
        }

        function a(e, t) {
            return M.isUndefined(t) ? M.isUndefined(e) ? void 0 : s(void 0, e) : s(void 0, t)
        }

        function o(n, i, r) {
            return r in t ? s(n, i) : r in e ? s(void 0, n) : void 0
        }
        const l = {
            url: r,
            method: r,
            data: r,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: o,
            headers: (e, t) => i(Oe(e), Oe(t), !0)
        };
        return M.forEach(Object.keys(e).concat(Object.keys(t)), (function(s) {
            const r = l[s] || i,
                a = r(e[s], t[s], s);
            M.isUndefined(a) && r !== o || (n[s] = a)
        })), n
    }
    const Le = "1.3.3",
        Pe = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(((e, t) => {
        Pe[e] = function(n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
        }
    }));
    const Ae = {};
    Pe.transitional = function(e, t, n) {
        function s(e, t) {
            return "[Axios v" + Le + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
        }
        return (n, i, r) => {
            if (!1 === e) throw new R(s(i, " has been removed" + (t ? " in " + t : "")), R.ERR_DEPRECATED);
            return t && !Ae[i] && (Ae[i] = !0, console.warn(s(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, r)
        }
    };
    const _e = {
            assertOptions: function(e, t, n) {
                if ("object" != typeof e) throw new R("options must be an object", R.ERR_BAD_OPTION_VALUE);
                const s = Object.keys(e);
                let i = s.length;
                for (; i-- > 0;) {
                    const r = s[i],
                        a = t[r];
                    if (a) {
                        const t = e[r],
                            n = void 0 === t || a(t, r, e);
                        if (!0 !== n) throw new R("option " + r + " must be " + n, R.ERR_BAD_OPTION_VALUE)
                    } else if (!0 !== n) throw new R("Unknown option " + r, R.ERR_BAD_OPTION)
                }
            },
            validators: Pe
        },
        $e = _e.validators;
    class Me {
        constructor(e) {
            this.defaults = e, this.interceptors = {
                request: new X,
                response: new X
            }
        }
        request(e, t) {
            "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = ke(this.defaults, t);
            const {
                transitional: n,
                paramsSerializer: s,
                headers: i
            } = t;
            let r;
            void 0 !== n && _e.assertOptions(n, {
                silentJSONParsing: $e.transitional($e.boolean),
                forcedJSONParsing: $e.transitional($e.boolean),
                clarifyTimeoutError: $e.transitional($e.boolean)
            }, !1), void 0 !== s && _e.assertOptions(s, {
                encode: $e.function,
                serialize: $e.function
            }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase(), r = i && M.merge(i.common, i[t.method]), r && M.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e => {
                delete i[e]
            })), t.headers = pe.concat(r, i);
            const a = [];
            let o = !0;
            this.interceptors.request.forEach((function(e) {
                "function" == typeof e.runWhen && !1 === e.runWhen(t) || (o = o && e.synchronous, a.unshift(e.fulfilled, e.rejected))
            }));
            const l = [];
            let c;
            this.interceptors.response.forEach((function(e) {
                l.push(e.fulfilled, e.rejected)
            }));
            let d, u = 0;
            if (!o) {
                const e = [xe.bind(this), void 0];
                for (e.unshift.apply(e, a), e.push.apply(e, l), d = e.length, c = Promise.resolve(t); u < d;) c = c.then(e[u++], e[u++]);
                return c
            }
            d = a.length;
            let p = t;
            for (u = 0; u < d;) {
                const e = a[u++],
                    t = a[u++];
                try {
                    p = e(p)
                } catch (e) {
                    t.call(this, e);
                    break
                }
            }
            try {
                c = xe.call(this, p)
            } catch (e) {
                return Promise.reject(e)
            }
            for (u = 0, d = l.length; u < d;) c = c.then(l[u++], l[u++]);
            return c
        }
        getUri(e) {
            return J(be((e = ke(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
        }
    }
    M.forEach(["delete", "get", "head", "options"], (function(e) {
        Me.prototype[e] = function(t, n) {
            return this.request(ke(n || {}, {
                method: e,
                url: t,
                data: (n || {}).data
            }))
        }
    })), M.forEach(["post", "put", "patch"], (function(e) {
        function t(t) {
            return function(n, s, i) {
                return this.request(ke(i || {}, {
                    method: e,
                    headers: t ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: n,
                    data: s
                }))
            }
        }
        Me.prototype[e] = t(), Me.prototype[e + "Form"] = t(!0)
    }));
    const Ne = Me;
    class Ie {
        constructor(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            let t;
            this.promise = new Promise((function(e) {
                t = e
            }));
            const n = this;
            this.promise.then((e => {
                if (!n._listeners) return;
                let t = n._listeners.length;
                for (; t-- > 0;) n._listeners[t](e);
                n._listeners = null
            })), this.promise.then = e => {
                let t;
                const s = new Promise((e => {
                    n.subscribe(e), t = e
                })).then(e);
                return s.cancel = function() {
                    n.unsubscribe(t)
                }, s
            }, e((function(e, s, i) {
                n.reason || (n.reason = new ge(e, s, i), t(n.reason))
            }))
        }
        throwIfRequested() {
            if (this.reason) throw this.reason
        }
        subscribe(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
        }
        unsubscribe(e) {
            if (!this._listeners) return;
            const t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
        }
        static source() {
            let e;
            return {
                token: new Ie((function(t) {
                    e = t
                })),
                cancel: e
            }
        }
    }
    const De = Ie,
        Re = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511
        };
    Object.entries(Re).forEach((([e, t]) => {
        Re[t] = e
    }));
    const Be = Re,
        qe = function t(n) {
            const s = new Ne(n),
                i = e(Ne.prototype.request, s);
            return M.extend(i, Ne.prototype, s, {
                allOwnKeys: !0
            }), M.extend(i, s, null, {
                allOwnKeys: !0
            }), i.create = function(e) {
                return t(ke(n, e))
            }, i
        }(re);
    qe.Axios = Ne, qe.CanceledError = ge, qe.CancelToken = De, qe.isCancel = he, qe.VERSION = Le, qe.toFormData = F, qe.AxiosError = R, qe.Cancel = qe.CanceledError, qe.all = function(e) {
        return Promise.all(e)
    }, qe.spread = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }, qe.isAxiosError = function(e) {
        return M.isObject(e) && !0 === e.isAxiosError
    }, qe.mergeConfig = ke, qe.AxiosHeaders = pe, qe.formToJSON = e => ne(M.isHTMLForm(e) ? new FormData(e) : e), qe.HttpStatusCode = Be, qe.default = qe;
    const je = qe;

    function ze(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function Fe(e = {}, t = {}) {
        Object.keys(t).forEach((n => {
            void 0 === e[n] ? e[n] = t[n] : ze(t[n]) && ze(e[n]) && Object.keys(t[n]).length > 0 && Fe(e[n], t[n])
        }))
    }
    const Ge = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function He() {
        const e = "undefined" != typeof document ? document : {};
        return Fe(e, Ge), e
    }
    const Ue = {
        document: Ge,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function Ve() {
        const e = "undefined" != typeof window ? window : {};
        return Fe(e, Ue), e
    }
    class We extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t,
                    set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }

    function Je(e = []) {
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...Je(e)) : t.push(e)
        })), t
    }

    function Xe(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function Ye(e, t) {
        const n = Ve(),
            s = He();
        let i = [];
        if (!t && e instanceof We) return e;
        if (!e) return new We(i);
        if ("string" == typeof e) {
            const n = e.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                let e = "div";
                0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
                const t = s.createElement(e);
                t.innerHTML = n;
                for (let e = 0; e < t.childNodes.length; e += 1) i.push(t.childNodes[e])
            } else i = function(e, t) {
                if ("string" != typeof e) return [e];
                const n = [],
                    s = t.querySelectorAll(e);
                for (let e = 0; e < s.length; e += 1) n.push(s[e]);
                return n
            }(e.trim(), t || s)
        } else if (e.nodeType || e === n || e === s) i.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof We) return e;
            i = e
        }
        return new We(function(e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(i))
    }
    Ye.fn = We.prototype;
    const Ke = "resize scroll".split(" ");

    function Qe(e) {
        return function(...t) {
            if (void 0 === t[0]) {
                for (let t = 0; t < this.length; t += 1) Ke.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : Ye(this[t]).trigger(e));
                return this
            }
            return this.on(e, ...t)
        }
    }
    Qe("click"), Qe("blur"), Qe("focus"), Qe("focusin"), Qe("focusout"), Qe("keyup"), Qe("keydown"), Qe("keypress"), Qe("submit"), Qe("change"), Qe("mousedown"), Qe("mousemove"), Qe("mouseup"), Qe("mouseenter"), Qe("mouseleave"), Qe("mouseout"), Qe("mouseover"), Qe("touchstart"), Qe("touchend"), Qe("touchmove"), Qe("resize"), Qe("scroll");
    const Ze = {
        addClass: function(...e) {
            const t = Je(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...t)
            })), this
        },
        removeClass: function(...e) {
            const t = Je(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...t)
            })), this
        },
        hasClass: function(...e) {
            const t = Je(e.map((e => e.split(" "))));
            return Xe(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function(...e) {
            const t = Je(e.map((e => e.split(" "))));
            this.forEach((e => {
                t.forEach((t => {
                    e.classList.toggle(t)
                }))
            }))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let n = 0; n < this.length; n += 1)
                if (2 === arguments.length) this[n].setAttribute(e, t);
                else
                    for (const t in e) this[n][t] = e[t], this[n].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function(...e) {
            let [t, n, s, i] = e;

            function r(e) {
                const t = e.target;
                if (!t) return;
                const i = e.target.dom7EventData || [];
                if (i.indexOf(e) < 0 && i.unshift(e), Ye(t).is(n)) s.apply(t, i);
                else {
                    const e = Ye(t).parents();
                    for (let t = 0; t < e.length; t += 1) Ye(e[t]).is(n) && s.apply(e[t], i)
                }
            }

            function a(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
            }
            "function" == typeof e[1] && ([t, s, i] = e, n = void 0), i || (i = !1);
            const o = t.split(" ");
            let l;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (n)
                    for (l = 0; l < o.length; l += 1) {
                        const e = o[l];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: s,
                            proxyListener: r
                        }), t.addEventListener(e, r, i)
                    } else
                    for (l = 0; l < o.length; l += 1) {
                        const e = o[l];
                        t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                            listener: s,
                            proxyListener: a
                        }), t.addEventListener(e, a, i)
                    }
            }
            return this
        },
        off: function(...e) {
            let [t, n, s, i] = e;
            "function" == typeof e[1] && ([t, s, i] = e, n = void 0), i || (i = !1);
            const r = t.split(" ");
            for (let e = 0; e < r.length; e += 1) {
                const t = r[e];
                for (let e = 0; e < this.length; e += 1) {
                    const r = this[e];
                    let a;
                    if (!n && r.dom7Listeners ? a = r.dom7Listeners[t] : n && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]), a && a.length)
                        for (let e = a.length - 1; e >= 0; e -= 1) {
                            const n = a[e];
                            s && n.listener === s || s && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === s ? (r.removeEventListener(t, n.proxyListener, i), a.splice(e, 1)) : s || (r.removeEventListener(t, n.proxyListener, i), a.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...e) {
            const t = Ve(),
                n = e[0].split(" "),
                s = e[1];
            for (let i = 0; i < n.length; i += 1) {
                const r = n[i];
                for (let n = 0; n < this.length; n += 1) {
                    const i = this[n];
                    if (t.CustomEvent) {
                        const n = new t.CustomEvent(r, {
                            detail: s,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = e.filter(((e, t) => t > 0)), i.dispatchEvent(n), i.dom7EventData = [], delete i.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", (function n(s) {
                s.target === this && (e.call(this, s), t.off("transitionend", n))
            })), this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = Ve();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = Ve(),
                    t = He(),
                    n = this[0],
                    s = n.getBoundingClientRect(),
                    i = t.body,
                    r = n.clientTop || i.clientTop || 0,
                    a = n.clientLeft || i.clientLeft || 0,
                    o = n === e ? e.scrollY : n.scrollTop,
                    l = n === e ? e.scrollX : n.scrollLeft;
                return {
                    top: s.top + o - r,
                    left: s.left + l - a
                }
            }
            return null
        },
        css: function(e, t) {
            const n = Ve();
            let s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (const t in e) this[s].style[t] = e[t];
                    return this
                }
                if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach(((t, n) => {
                e.apply(t, [t, n])
            })), this) : this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = Ve(),
                n = He(),
                s = this[0];
            let i, r;
            if (!s || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (s.matches) return s.matches(e);
                if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                if (s.msMatchesSelector) return s.msMatchesSelector(e);
                for (i = Ye(e), r = 0; r < i.length; r += 1)
                    if (i[r] === s) return !0;
                return !1
            }
            if (e === n) return s === n;
            if (e === t) return s === t;
            if (e.nodeType || e instanceof We) {
                for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
                    if (i[r] === s) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return Ye([]);
            if (e < 0) {
                const n = t + e;
                return Ye(n < 0 ? [] : [this[n]])
            }
            return Ye([this[e]])
        },
        append: function(...e) {
            let t;
            const n = He();
            for (let s = 0; s < e.length; s += 1) {
                t = e[s];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const s = n.createElement("div");
                        for (s.innerHTML = t; s.firstChild;) this[e].appendChild(s.firstChild)
                    } else if (t instanceof We)
                        for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
                    else this[e].appendChild(t)
            }
            return this
        },
        prepend: function(e) {
            const t = He();
            let n, s;
            for (n = 0; n < this.length; n += 1)
                if ("string" == typeof e) {
                    const i = t.createElement("div");
                    for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1) this[n].insertBefore(i.childNodes[s], this[n].childNodes[0])
                } else if (e instanceof We)
                    for (s = 0; s < e.length; s += 1) this[n].insertBefore(e[s], this[n].childNodes[0]);
                else this[n].insertBefore(e, this[n].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && Ye(this[0].nextElementSibling).is(e) ? Ye([this[0].nextElementSibling]) : Ye([]) : this[0].nextElementSibling ? Ye([this[0].nextElementSibling]) : Ye([]) : Ye([])
        },
        nextAll: function(e) {
            const t = [];
            let n = this[0];
            if (!n) return Ye([]);
            for (; n.nextElementSibling;) {
                const s = n.nextElementSibling;
                e ? Ye(s).is(e) && t.push(s) : t.push(s), n = s
            }
            return Ye(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && Ye(t.previousElementSibling).is(e) ? Ye([t.previousElementSibling]) : Ye([]) : t.previousElementSibling ? Ye([t.previousElementSibling]) : Ye([])
            }
            return Ye([])
        },
        prevAll: function(e) {
            const t = [];
            let n = this[0];
            if (!n) return Ye([]);
            for (; n.previousElementSibling;) {
                const s = n.previousElementSibling;
                e ? Ye(s).is(e) && t.push(s) : t.push(s), n = s
            }
            return Ye(t)
        },
        parent: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? Ye(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
            return Ye(t)
        },
        parents: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                let s = this[n].parentNode;
                for (; s;) e ? Ye(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
            }
            return Ye(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? Ye([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                const s = this[n].querySelectorAll(e);
                for (let e = 0; e < s.length; e += 1) t.push(s[e])
            }
            return Ye(t)
        },
        children: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                const s = this[n].children;
                for (let n = 0; n < s.length; n += 1) e && !Ye(s[n]).is(e) || t.push(s[n])
            }
            return Ye(t)
        },
        filter: function(e) {
            return Ye(Xe(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    Object.keys(Ze).forEach((e => {
        Object.defineProperty(Ye.fn, e, {
            value: Ze[e],
            writable: !0
        })
    }));
    const et = Ye;

    function tt(e, t = 0) {
        return setTimeout(e, t)
    }

    function nt() {
        return Date.now()
    }

    function st(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function it(...e) {
        const t = Object(e[0]),
            n = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < e.length; i += 1) {
            const r = e[i];
            if (null != r && (s = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                const e = Object.keys(Object(r)).filter((e => n.indexOf(e) < 0));
                for (let n = 0, s = e.length; n < s; n += 1) {
                    const s = e[n],
                        i = Object.getOwnPropertyDescriptor(r, s);
                    void 0 !== i && i.enumerable && (st(t[s]) && st(r[s]) ? r[s].__swiper__ ? t[s] = r[s] : it(t[s], r[s]) : !st(t[s]) && st(r[s]) ? (t[s] = {}, r[s].__swiper__ ? t[s] = r[s] : it(t[s], r[s])) : t[s] = r[s])
                }
            }
        }
        var s;
        return t
    }

    function rt(e, t, n) {
        e.style.setProperty(t, n)
    }

    function at({
                    swiper: e,
                    targetPosition: t,
                    side: n
                }) {
        const s = Ve(),
            i = -e.translate;
        let r, a = null;
        const o = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(e.cssModeFrameID);
        const l = t > i ? "next" : "prev",
            c = (e, t) => "next" === l && e >= t || "prev" === l && e <= t,
            d = () => {
                r = (new Date).getTime(), null === a && (a = r);
                const l = Math.max(Math.min((r - a) / o, 1), 0),
                    u = .5 - Math.cos(l * Math.PI) / 2;
                let p = i + u * (t - i);
                if (c(p, t) && (p = t), e.wrapperEl.scrollTo({
                    [n]: p
                }), c(p, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [n]: p
                    })
                })), void s.cancelAnimationFrame(e.cssModeFrameID);
                e.cssModeFrameID = s.requestAnimationFrame(d)
            };
        d()
    }
    let ot, lt, ct;

    function dt() {
        return ot || (ot = function() {
            const e = Ve(),
                t = He();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const n = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, n)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), ot
    }
    const ut = {
            on(e, t, n) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof t) return s;
                const i = n ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][i](t)
                })), s
            },
            once(e, t, n) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof t) return s;

                function i(...n) {
                    s.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(s, n)
                }
                return i.__emitterProxy = t, s.on(e, i, n)
            },
            onAny(e, t) {
                const n = this;
                if (!n.eventsListeners || n.destroyed) return n;
                if ("function" != typeof e) return n;
                const s = t ? "unshift" : "push";
                return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n
            },
            offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const n = t.eventsAnyListeners.indexOf(e);
                return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
            },
            off(e, t) {
                const n = this;
                return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((s, i) => {
                        (s === t || s.__emitterProxy && s.__emitterProxy === t) && n.eventsListeners[e].splice(i, 1)
                    }))
                })), n) : n
            },
            emit(...e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsListeners) return t;
                let n, s, i;
                return "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], s = e.slice(1, e.length), i = t) : (n = e[0].events, s = e[0].data, i = e[0].context || t), s.unshift(i), (Array.isArray(n) ? n : n.split(" ")).forEach((e => {
                    t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                        t.apply(i, [e, ...s])
                    })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                        e.apply(i, s)
                    }))
                })), t
            }
        },
        pt = {
            updateSize: function() {
                const e = this;
                let t, n;
                const s = e.$el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10), n = n - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                    width: t,
                    height: n,
                    size: e.isHorizontal() ? t : n
                }))
            },
            updateSlides: function() {
                const e = this;

                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }

                function n(e, n) {
                    return parseFloat(e.getPropertyValue(t(n)) || 0)
                }
                const s = e.params,
                    {
                        $wrapperEl: i,
                        size: r,
                        rtlTranslate: a,
                        wrongRTL: o
                    } = e,
                    l = e.virtual && s.virtual.enabled,
                    c = l ? e.virtual.slides.length : e.slides.length,
                    d = i.children(`.${e.params.slideClass}`),
                    u = l ? e.virtual.slides.length : d.length;
                let p = [];
                const f = [],
                    h = [];
                let m = s.slidesOffsetBefore;
                "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
                let g = s.slidesOffsetAfter;
                "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
                const v = e.snapGrid.length,
                    b = e.slidesGrid.length;
                let y = s.spaceBetween,
                    w = -m,
                    S = 0,
                    E = 0;
                if (void 0 === r) return;
                "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * r), e.virtualSize = -y, a ? d.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                }) : d.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }), s.centeredSlides && s.cssMode && (rt(e.wrapperEl, "--swiper-centered-offset-before", ""), rt(e.wrapperEl, "--swiper-centered-offset-after", ""));
                const C = s.grid && s.grid.rows > 1 && e.grid;
                let T;
                C && e.grid.initSlides(u);
                const x = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
                for (let i = 0; i < u; i += 1) {
                    T = 0;
                    const a = d.eq(i);
                    if (C && e.grid.updateSlide(i, a, u, t), "none" !== a.css("display")) {
                        if ("auto" === s.slidesPerView) {
                            x && (d[i].style[t("width")] = "");
                            const r = getComputedStyle(a[0]),
                                o = a[0].style.transform,
                                l = a[0].style.webkitTransform;
                            if (o && (a[0].style.transform = "none"), l && (a[0].style.webkitTransform = "none"), s.roundLengths) T = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                            else {
                                const e = n(r, "width"),
                                    t = n(r, "padding-left"),
                                    s = n(r, "padding-right"),
                                    i = n(r, "margin-left"),
                                    o = n(r, "margin-right"),
                                    l = r.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) T = e + i + o;
                                else {
                                    const {
                                        clientWidth: n,
                                        offsetWidth: r
                                    } = a[0];
                                    T = e + t + s + i + o + (r - n)
                                }
                            }
                            o && (a[0].style.transform = o), l && (a[0].style.webkitTransform = l), s.roundLengths && (T = Math.floor(T))
                        } else T = (r - (s.slidesPerView - 1) * y) / s.slidesPerView, s.roundLengths && (T = Math.floor(T)), d[i] && (d[i].style[t("width")] = `${T}px`);
                        d[i] && (d[i].swiperSlideSize = T), h.push(T), s.centeredSlides ? (w = w + T / 2 + S / 2 + y, 0 === S && 0 !== i && (w = w - r / 2 - y), 0 === i && (w = w - r / 2 - y), Math.abs(w) < .001 && (w = 0), s.roundLengths && (w = Math.floor(w)), E % s.slidesPerGroup == 0 && p.push(w), f.push(w)) : (s.roundLengths && (w = Math.floor(w)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && p.push(w), f.push(w), w = w + T + y), e.virtualSize += T + y, S = T, E += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, r) + g, a && o && ("slide" === s.effect || "coverflow" === s.effect) && i.css({
                    width: `${e.virtualSize+s.spaceBetween}px`
                }), s.setWrapperSize && i.css({
                    [t("width")]: `${e.virtualSize+s.spaceBetween}px`
                }), C && e.grid.updateWrapperSize(T, p, t), !s.centeredSlides) {
                    const t = [];
                    for (let n = 0; n < p.length; n += 1) {
                        let i = p[n];
                        s.roundLengths && (i = Math.floor(i)), p[n] <= e.virtualSize - r && t.push(i)
                    }
                    p = t, Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - r)
                }
                if (0 === p.length && (p = [0]), 0 !== s.spaceBetween) {
                    const n = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                    d.filter(((e, t) => !s.cssMode || t !== d.length - 1)).css({
                        [n]: `${y}px`
                    })
                }
                if (s.centeredSlides && s.centeredSlidesBounds) {
                    let e = 0;
                    h.forEach((t => {
                        e += t + (s.spaceBetween ? s.spaceBetween : 0)
                    })), e -= s.spaceBetween;
                    const t = e - r;
                    p = p.map((e => e < 0 ? -m : e > t ? t + g : e))
                }
                if (s.centerInsufficientSlides) {
                    let e = 0;
                    if (h.forEach((t => {
                        e += t + (s.spaceBetween ? s.spaceBetween : 0)
                    })), e -= s.spaceBetween, e < r) {
                        const t = (r - e) / 2;
                        p.forEach(((e, n) => {
                            p[n] = e - t
                        })), f.forEach(((e, n) => {
                            f[n] = e + t
                        }))
                    }
                }
                if (Object.assign(e, {
                    slides: d,
                    snapGrid: p,
                    slidesGrid: f,
                    slidesSizesGrid: h
                }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                    rt(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), rt(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0],
                        n = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
                }
                if (u !== c && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), !(l || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                    const t = `${s.containerModifierClass}backface-hidden`,
                        n = e.$el.hasClass(t);
                    u <= s.maxBackfaceHiddenSlides ? n || e.$el.addClass(t) : n && e.$el.removeClass(t)
                }
            },
            updateAutoHeight: function(e) {
                const t = this,
                    n = [],
                    s = t.virtual && t.params.virtual.enabled;
                let i, r = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const a = e => s ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)(t.visibleSlides || et([])).each((e => {
                        n.push(e)
                    }));
                    else
                        for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                            const e = t.activeIndex + i;
                            if (e > t.slides.length && !s) break;
                            n.push(a(e))
                        } else n.push(a(t.activeIndex));
                for (i = 0; i < n.length; i += 1)
                    if (void 0 !== n[i]) {
                        const e = n[i].offsetHeight;
                        r = e > r ? e : r
                    }(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
            },
            updateSlidesOffset: function() {
                const e = this,
                    t = e.slides;
                for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
            },
            updateSlidesProgress: function(e = this && this.translate || 0) {
                const t = this,
                    n = t.params,
                    {
                        slides: s,
                        rtlTranslate: i,
                        snapGrid: r
                    } = t;
                if (0 === s.length) return;
                void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                let a = -e;
                i && (a = e), s.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (let e = 0; e < s.length; e += 1) {
                    const o = s[e];
                    let l = o.swiperSlideOffset;
                    n.cssMode && n.centeredSlides && (l -= s[0].swiperSlideOffset);
                    const c = (a + (n.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + n.spaceBetween),
                        d = (a - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + n.spaceBetween),
                        u = -(a - l),
                        p = u + t.slidesSizesGrid[e];
                    (u >= 0 && u < t.size - 1 || p > 1 && p <= t.size || u <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), s.eq(e).addClass(n.slideVisibleClass)), o.progress = i ? -c : c, o.originalProgress = i ? -d : d
                }
                t.visibleSlides = et(t.visibleSlides)
            },
            updateProgress: function(e) {
                const t = this;
                if (void 0 === e) {
                    const n = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * n || 0
                }
                const n = t.params,
                    s = t.maxTranslate() - t.minTranslate();
                let {
                    progress: i,
                    isBeginning: r,
                    isEnd: a
                } = t;
                const o = r,
                    l = a;
                0 === s ? (i = 0, r = !0, a = !0) : (i = (e - t.minTranslate()) / s, r = i <= 0, a = i >= 1), Object.assign(t, {
                    progress: i,
                    isBeginning: r,
                    isEnd: a
                }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !r || l && !a) && t.emit("fromEdge"), t.emit("progress", i)
            },
            updateSlidesClasses: function() {
                const e = this,
                    {
                        slides: t,
                        params: n,
                        $wrapperEl: s,
                        activeIndex: i,
                        realIndex: r
                    } = e,
                    a = e.virtual && n.virtual.enabled;
                let o;
                t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), o = a ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), o.addClass(n.slideActiveClass), n.loop && (o.hasClass(n.slideDuplicateClass) ? s.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass) : s.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass));
                let l = o.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
                n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
                let c = o.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
                n.loop && 0 === c.length && (c = t.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? s.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : s.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? s.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : s.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                const t = this,
                    n = t.rtlTranslate ? t.translate : -t.translate,
                    {
                        slidesGrid: s,
                        snapGrid: i,
                        params: r,
                        activeIndex: a,
                        realIndex: o,
                        snapIndex: l
                    } = t;
                let c, d = e;
                if (void 0 === d) {
                    for (let e = 0; e < s.length; e += 1) void 0 !== s[e + 1] ? n >= s[e] && n < s[e + 1] - (s[e + 1] - s[e]) / 2 ? d = e : n >= s[e] && n < s[e + 1] && (d = e + 1) : n >= s[e] && (d = e);
                    r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                }
                if (i.indexOf(n) >= 0) c = i.indexOf(n);
                else {
                    const e = Math.min(r.slidesPerGroupSkip, d);
                    c = e + Math.floor((d - e) / r.slidesPerGroup)
                }
                if (c >= i.length && (c = i.length - 1), d === a) return void(c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
                const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                Object.assign(t, {
                    snapIndex: c,
                    realIndex: u,
                    previousIndex: a,
                    activeIndex: d
                }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            },
            updateClickedSlide: function(e) {
                const t = this,
                    n = t.params,
                    s = et(e).closest(`.${n.slideClass}`)[0];
                let i, r = !1;
                if (s)
                    for (let e = 0; e < t.slides.length; e += 1)
                        if (t.slides[e] === s) {
                            r = !0, i = e;
                            break
                        }
                if (!s || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(et(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        };

    function ft({
                    swiper: e,
                    runCallbacks: t,
                    direction: n,
                    step: s
                }) {
        const {
            activeIndex: i,
            previousIndex: r
        } = e;
        let a = n;
        if (a || (a = i > r ? "next" : i < r ? "prev" : "reset"), e.emit(`transition${s}`), t && i !== r) {
            if ("reset" === a) return void e.emit(`slideResetTransition${s}`);
            e.emit(`slideChangeTransition${s}`), "next" === a ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
        }
    }
    const ht = {
        slideTo: function(e = 0, t = this.params.speed, n = !0, s, i) {
            if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
            if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const r = this;
            let a = e;
            a < 0 && (a = 0);
            const {
                params: o,
                snapGrid: l,
                slidesGrid: c,
                previousIndex: d,
                activeIndex: u,
                rtlTranslate: p,
                wrapperEl: f,
                enabled: h
            } = r;
            if (r.animating && o.preventInteractionOnTransition || !h && !s && !i) return !1;
            const m = Math.min(r.params.slidesPerGroupSkip, a);
            let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
            g >= l.length && (g = l.length - 1);
            const v = -l[g];
            if (o.normalizeSlideIndex)
                for (let e = 0; e < c.length; e += 1) {
                    const t = -Math.floor(100 * v),
                        n = Math.floor(100 * c[e]),
                        s = Math.floor(100 * c[e + 1]);
                    void 0 !== c[e + 1] ? t >= n && t < s - (s - n) / 2 ? a = e : t >= n && t < s && (a = e + 1) : t >= n && (a = e)
                }
            if (r.initialized && a !== u) {
                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (u || 0) !== a) return !1
            }
            let b;
            if (a !== (d || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(v), b = a > u ? "next" : a < u ? "prev" : "reset", p && -v === r.translate || !p && v === r.translate) return r.updateActiveIndex(a), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(n, b), r.transitionEnd(n, b)), !1;
            if (o.cssMode) {
                const e = r.isHorizontal(),
                    n = p ? v : -v;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame((() => {
                        r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                    }))
                } else {
                    if (!r.support.smoothScroll) return at({
                        swiper: r,
                        targetPosition: n,
                        side: e ? "left" : "top"
                    }), !0;
                    f.scrollTo({
                        [e ? "left" : "top"]: n,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(n, b), 0 === t ? r.transitionEnd(n, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, b))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function(e = 0, t = this.params.speed, n = !0, s) {
            if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const i = this;
            let r = e;
            return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, n, s)
        },
        slideNext: function(e = this.params.speed, t = !0, n) {
            const s = this,
                {
                    animating: i,
                    enabled: r,
                    params: a
                } = s;
            if (!r) return s;
            let o = a.slidesPerGroup;
            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
            const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o;
            if (a.loop) {
                if (i && a.loopPreventsSlide) return !1;
                s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
            }
            return a.rewind && s.isEnd ? s.slideTo(0, e, t, n) : s.slideTo(s.activeIndex + l, e, t, n)
        },
        slidePrev: function(e = this.params.speed, t = !0, n) {
            const s = this,
                {
                    params: i,
                    animating: r,
                    snapGrid: a,
                    slidesGrid: o,
                    rtlTranslate: l,
                    enabled: c
                } = s;
            if (!c) return s;
            if (i.loop) {
                if (r && i.loopPreventsSlide) return !1;
                s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
            }

            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = d(l ? s.translate : -s.translate),
                p = a.map((e => d(e)));
            let f = a[p.indexOf(u) - 1];
            if (void 0 === f && i.cssMode) {
                let e;
                a.forEach(((t, n) => {
                    u >= t && (e = n)
                })), void 0 !== e && (f = a[e > 0 ? e - 1 : e])
            }
            let h = 0;
            if (void 0 !== f && (h = o.indexOf(f), h < 0 && (h = s.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (h = h - s.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), i.rewind && s.isBeginning) {
                const i = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                return s.slideTo(i, e, t, n)
            }
            return s.slideTo(h, e, t, n)
        },
        slideReset: function(e = this.params.speed, t = !0, n) {
            return this.slideTo(this.activeIndex, e, t, n)
        },
        slideToClosest: function(e = this.params.speed, t = !0, n, s = .5) {
            const i = this;
            let r = i.activeIndex;
            const a = Math.min(i.params.slidesPerGroupSkip, r),
                o = a + Math.floor((r - a) / i.params.slidesPerGroup),
                l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[o]) {
                const e = i.snapGrid[o];
                l - e > (i.snapGrid[o + 1] - e) * s && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[o - 1];
                l - e <= (i.snapGrid[o] - e) * s && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, n)
        },
        slideToClickedSlide: function() {
            const e = this,
                {
                    params: t,
                    $wrapperEl: n
                } = e,
                s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(et(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - s / 2 || r > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), r = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), tt((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r) : r > e.slides.length - s ? (e.loopFix(), r = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), tt((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r)
            } else e.slideTo(r)
        }
    };

    function mt(e) {
        const t = this,
            n = He(),
            s = Ve(),
            i = t.touchEventsData,
            {
                params: r,
                touches: a,
                enabled: o
            } = t;
        if (!o) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = et(l.target);
        if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length) return;
        if (i.isTouchEvent = "touchstart" === l.type, !i.isTouchEvent && "which" in l && 3 === l.which) return;
        if (!i.isTouchEvent && "button" in l && l.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        const d = !!r.noSwipingClass && "" !== r.noSwipingClass,
            u = e.composedPath ? e.composedPath() : e.path;
        d && l.target && l.target.shadowRoot && u && (c = et(u[0]));
        const p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
            f = !(!l.target || !l.target.shadowRoot);
        if (r.noSwiping && (f ? function(e, t = this) {
            return function t(n) {
                if (!n || n === He() || n === Ve()) return null;
                n.assignedSlot && (n = n.assignedSlot);
                const s = n.closest(e);
                return s || n.getRootNode ? s || t(n.getRootNode().host) : null
            }(t)
        }(p, c[0]) : c.closest(p)[0])) return void(t.allowClick = !0);
        if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
        a.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, a.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
        const h = a.currentX,
            m = a.currentY,
            g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
            v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (g && (h <= v || h >= s.innerWidth - v)) {
            if ("prevent" !== g) return;
            e.preventDefault()
        }
        if (Object.assign(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), a.startX = h, a.startY = m, i.touchStartTime = nt(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== l.type) {
            let e = !0;
            c.is(i.focusableElements) && (e = !1, "SELECT" === c[0].nodeName && (i.isTouched = !1)), n.activeElement && et(n.activeElement).is(i.focusableElements) && n.activeElement !== c[0] && n.activeElement.blur();
            const s = e && t.allowTouchMove && r.touchStartPreventDefault;
            !r.touchStartForcePreventDefault && !s || c[0].isContentEditable || l.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", l)
    }

    function gt(e) {
        const t = He(),
            n = this,
            s = n.touchEventsData,
            {
                params: i,
                touches: r,
                rtlTranslate: a,
                enabled: o
            } = n;
        if (!o) return;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent), !s.isTouched) return void(s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", l));
        if (s.isTouchEvent && "touchmove" !== l.type) return;
        const c = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
            d = "touchmove" === l.type ? c.pageX : l.pageX,
            u = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper) return r.startX = d, void(r.startY = u);
        if (!n.allowTouchMove) return et(l.target).is(s.focusableElements) || (n.allowClick = !1), void(s.isTouched && (Object.assign(r, {
            startX: d,
            startY: u,
            currentX: d,
            currentY: u
        }), s.touchStartTime = nt()));
        if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
            if (n.isVertical()) {
                if (u < r.startY && n.translate <= n.maxTranslate() || u > r.startY && n.translate >= n.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
            } else if (d < r.startX && n.translate <= n.maxTranslate() || d > r.startX && n.translate >= n.minTranslate()) return;
        if (s.isTouchEvent && t.activeElement && l.target === t.activeElement && et(l.target).is(s.focusableElements)) return s.isMoved = !0, void(n.allowClick = !1);
        if (s.allowTouchCallbacks && n.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
        r.currentX = d, r.currentY = u;
        const p = r.currentX - r.startX,
            f = r.currentY - r.startY;
        if (n.params.threshold && Math.sqrt(p ** 2 + f ** 2) < n.params.threshold) return;
        if (void 0 === s.isScrolling) {
            let e;
            n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : p * p + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, s.isScrolling = n.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
        }
        if (s.isScrolling && n.emit("touchMoveOpposite", l), void 0 === s.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (s.startMoving = !0)), s.isScrolling) return void(s.isTouched = !1);
        if (!s.startMoving) return;
        n.allowClick = !1, !i.cssMode && l.cancelable && l.preventDefault(), i.touchMoveStopPropagation && !i.nested && l.stopPropagation(), s.isMoved || (i.loop && !i.cssMode && n.loopFix(), s.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !i.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", l)), n.emit("sliderMove", l), s.isMoved = !0;
        let h = n.isHorizontal() ? p : f;
        r.diff = h, h *= i.touchRatio, a && (h = -h), n.swipeDirection = h > 0 ? "prev" : "next", s.currentTranslate = h + s.startTranslate;
        let m = !0,
            g = i.resistanceRatio;
        if (i.touchReleaseOnEdges && (g = 0), h > 0 && s.currentTranslate > n.minTranslate() ? (m = !1, i.resistance && (s.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + s.startTranslate + h) ** g)) : h < 0 && s.currentTranslate < n.maxTranslate() && (m = !1, i.resistance && (s.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - s.startTranslate - h) ** g)), m && (l.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), n.allowSlidePrev || n.allowSlideNext || (s.currentTranslate = s.startTranslate), i.threshold > 0) {
            if (!(Math.abs(h) > i.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
            if (!s.allowThresholdMove) return s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, void(r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
        }
        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(s.currentTranslate), n.setTranslate(s.currentTranslate))
    }

    function vt(e) {
        const t = this,
            n = t.touchEventsData,
            {
                params: s,
                touches: i,
                rtlTranslate: r,
                slidesGrid: a,
                enabled: o
            } = t;
        if (!o) return;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && s.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
        s.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = nt(),
            d = c - n.touchStartTime;
        if (t.allowClick) {
            const e = l.path || l.composedPath && l.composedPath();
            t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), d < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
        }
        if (n.lastClickTime = nt(), tt((() => {
            t.destroyed || (t.allowClick = !0)
        })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === i.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
        let u;
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = s.followFinger ? r ? t.translate : -t.translate : -n.currentTranslate, s.cssMode) return;
        if (t.params.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: u
        });
        let p = 0,
            f = t.slidesSizesGrid[0];
        for (let e = 0; e < a.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
            const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            void 0 !== a[e + t] ? u >= a[e] && u < a[e + t] && (p = e, f = a[e + t] - a[e]) : u >= a[e] && (p = e, f = a[a.length - 1] - a[a.length - 2])
        }
        let h = null,
            m = null;
        s.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
        const g = (u - a[p]) / f,
            v = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (d > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (g >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? h : p + v) : t.slideTo(p)), "prev" === t.swipeDirection && (g > 1 - s.longSwipesRatio ? t.slideTo(p + v) : null !== m && g < 0 && Math.abs(g) > s.longSwipesRatio ? t.slideTo(m) : t.slideTo(p))
        } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
            !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + v), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p)) : l.target === t.navigation.nextEl ? t.slideTo(p + v) : t.slideTo(p)
        }
    }

    function bt() {
        const e = this,
            {
                params: t,
                el: n
            } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: s,
            allowSlidePrev: i,
            snapGrid: r
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = s, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    function yt(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function wt() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: n,
                enabled: s
            } = e;
        if (!s) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }
    let St = !1;

    function Et() {}
    const Ct = (e, t) => {
            const n = He(),
                {
                    params: s,
                    touchEvents: i,
                    el: r,
                    wrapperEl: a,
                    device: o,
                    support: l
                } = e,
                c = !!s.nested,
                d = "on" === t ? "addEventListener" : "removeEventListener",
                u = t;
            if (l.touch) {
                const t = !("touchstart" !== i.start || !l.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                r[d](i.start, e.onTouchStart, t), r[d](i.move, e.onTouchMove, l.passiveListener ? {
                    passive: !1,
                    capture: c
                } : c), r[d](i.end, e.onTouchEnd, t), i.cancel && r[d](i.cancel, e.onTouchEnd, t)
            } else r[d](i.start, e.onTouchStart, !1), n[d](i.move, e.onTouchMove, c), n[d](i.end, e.onTouchEnd, !1);
            (s.preventClicks || s.preventClicksPropagation) && r[d]("click", e.onClick, !0), s.cssMode && a[d]("scroll", e.onScroll), s.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", bt, !0) : e[u]("observerUpdate", bt, !0)
        },
        Tt = {
            attachEvents: function() {
                const e = this,
                    t = He(),
                    {
                        params: n,
                        support: s
                    } = e;
                e.onTouchStart = mt.bind(e), e.onTouchMove = gt.bind(e), e.onTouchEnd = vt.bind(e), n.cssMode && (e.onScroll = wt.bind(e)), e.onClick = yt.bind(e), s.touch && !St && (t.addEventListener("touchstart", Et), St = !0), Ct(e, "on")
            },
            detachEvents: function() {
                Ct(this, "off")
            }
        },
        xt = (e, t) => e.grid && t.grid && t.grid.rows > 1,
        Ot = {
            addClasses: function() {
                const e = this,
                    {
                        classNames: t,
                        params: n,
                        rtl: s,
                        $el: i,
                        device: r,
                        support: a
                    } = e,
                    o = function(e, t) {
                        const n = [];
                        return e.forEach((e => {
                            "object" == typeof e ? Object.keys(e).forEach((s => {
                                e[s] && n.push(t + s)
                            })) : "string" == typeof e && n.push(t + e)
                        })), n
                    }(["initialized", n.direction, {
                        "pointer-events": !a.touch
                    }, {
                        "free-mode": e.params.freeMode && n.freeMode.enabled
                    }, {
                        autoheight: n.autoHeight
                    }, {
                        rtl: s
                    }, {
                        grid: n.grid && n.grid.rows > 1
                    }, {
                        "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill
                    }, {
                        android: r.android
                    }, {
                        ios: r.ios
                    }, {
                        "css-mode": n.cssMode
                    }, {
                        centered: n.cssMode && n.centeredSlides
                    }, {
                        "watch-progress": n.watchSlidesProgress
                    }], n.containerModifierClass);
                t.push(...o), i.addClass([...t].join(" ")), e.emitContainerClasses()
            },
            removeClasses: function() {
                const {
                    $el: e,
                    classNames: t
                } = this;
                e.removeClass(t.join(" ")), this.emitContainerClasses()
            }
        },
        kt = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: 300,
            height: 300,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: !0,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };

    function Lt(e, t) {
        return function(n = {}) {
            const s = Object.keys(n)[0],
                i = n[s];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && !0 === e[s] && (e[s] = {
                auto: !0
            }), s in e && "enabled" in i ? (!0 === e[s] && (e[s] = {
                enabled: !0
            }), "object" != typeof e[s] || "enabled" in e[s] || (e[s].enabled = !0), e[s] || (e[s] = {
                enabled: !1
            }), it(t, n)) : it(t, n)) : it(t, n)
        }
    }
    const Pt = {
            eventsEmitter: ut,
            update: pt,
            translate: {
                getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
                    const {
                        params: t,
                        rtlTranslate: n,
                        translate: s,
                        $wrapperEl: i
                    } = this;
                    if (t.virtualTranslate) return n ? -s : s;
                    if (t.cssMode) return s;
                    let r = function(e, t = "x") {
                        const n = Ve();
                        let s, i, r;
                        const a = function(e) {
                            const t = Ve();
                            let n;
                            return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
                        }(e);
                        return n.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new n.WebKitCSSMatrix("none" === i ? "" : i)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), "x" === t && (i = n.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (i = n.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), i || 0
                    }(i[0], e);
                    return n && (r = -r), r || 0
                },
                setTranslate: function(e, t) {
                    const n = this,
                        {
                            rtlTranslate: s,
                            params: i,
                            $wrapperEl: r,
                            wrapperEl: a,
                            progress: o
                        } = n;
                    let l, c = 0,
                        d = 0;
                    n.isHorizontal() ? c = s ? -e : e : d = e, i.roundLengths && (c = Math.floor(c), d = Math.floor(d)), i.cssMode ? a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -d : i.virtualTranslate || r.transform(`translate3d(${c}px, ${d}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? c : d;
                    const u = n.maxTranslate() - n.minTranslate();
                    l = 0 === u ? 0 : (e - n.minTranslate()) / u, l !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e = 0, t = this.params.speed, n = !0, s = !0, i) {
                    const r = this,
                        {
                            params: a,
                            wrapperEl: o
                        } = r;
                    if (r.animating && a.preventInteractionOnTransition) return !1;
                    const l = r.minTranslate(),
                        c = r.maxTranslate();
                    let d;
                    if (d = s && e > l ? l : s && e < c ? c : e, r.updateProgress(d), a.cssMode) {
                        const e = r.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
                        else {
                            if (!r.support.smoothScroll) return at({
                                swiper: r,
                                targetPosition: -d,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({
                                [e ? "left" : "top"]: -d,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0), r.setTranslate(d), n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(d), n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, n && r.emit("transitionEnd"))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    const n = this;
                    n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
                },
                transitionStart: function(e = !0, t) {
                    const n = this,
                        {
                            params: s
                        } = n;
                    s.cssMode || (s.autoHeight && n.updateAutoHeight(), ft({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e = !0, t) {
                    const n = this,
                        {
                            params: s
                        } = n;
                    n.animating = !1, s.cssMode || (n.setTransition(0), ft({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: ht,
            loop: {
                loopCreate: function() {
                    const e = this,
                        t = He(),
                        {
                            params: n,
                            $wrapperEl: s
                        } = e,
                        i = s.children().length > 0 ? et(s.children()[0].parentNode) : s;
                    i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
                    let r = i.children(`.${n.slideClass}`);
                    if (n.loopFillGroupWithBlank) {
                        const e = n.slidesPerGroup - r.length % n.slidesPerGroup;
                        if (e !== n.slidesPerGroup) {
                            for (let s = 0; s < e; s += 1) {
                                const e = et(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                                i.append(e)
                            }
                            r = i.children(`.${n.slideClass}`)
                        }
                    }
                    "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
                    const a = [],
                        o = [];
                    r.each(((e, t) => {
                        et(e).attr("data-swiper-slide-index", t)
                    }));
                    for (let t = 0; t < e.loopedSlides; t += 1) {
                        const e = t - Math.floor(t / r.length) * r.length;
                        o.push(r.eq(e)[0]), a.unshift(r.eq(r.length - e - 1)[0])
                    }
                    for (let e = 0; e < o.length; e += 1) i.append(et(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
                    for (let e = a.length - 1; e >= 0; e -= 1) i.prepend(et(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: n,
                        loopedSlides: s,
                        allowSlidePrev: i,
                        allowSlideNext: r,
                        snapGrid: a,
                        rtlTranslate: o
                    } = e;
                    let l;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const c = -a[t] - e.getTranslate();
                    t < s ? (l = n.length - 3 * s + t, l += s, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)) : t >= n.length - s && (l = -n.length + t + s, l += s, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)), e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: n
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: Tt,
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: n,
                            loopedSlides: s = 0,
                            params: i,
                            $el: r
                        } = e,
                        a = i.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length) return;
                    const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                    if (!o || e.currentBreakpoint === o) return;
                    const l = (o in a ? a[o] : void 0) || e.originalParams,
                        c = xt(e, i),
                        d = xt(e, l),
                        u = i.enabled;
                    c && !d ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (r.addClass(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        const n = i[t] && i[t].enabled,
                            s = l[t] && l[t].enabled;
                        n && !s && e[t].disable(), !n && s && e[t].enable()
                    }));
                    const p = l.direction && l.direction !== i.direction,
                        f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
                    p && n && e.changeDirection(), it(e.params, l);
                    const h = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), u && !h ? e.disable() : !u && h && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), f && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                },
                getBreakpoint: function(e, t = "window", n) {
                    if (!e || "container" === t && !n) return;
                    let s = !1;
                    const i = Ve(),
                        r = "window" === t ? i.innerHeight : n.clientHeight,
                        a = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: r * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < a.length; e += 1) {
                        const {
                            point: r,
                            value: o
                        } = a[e];
                        "window" === t ? i.matchMedia(`(min-width: ${o}px)`).matches && (s = r) : o <= n.clientWidth && (s = r)
                    }
                    return s || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: n
                        } = e,
                        {
                            slidesOffsetBefore: s
                        } = n;
                    if (s) {
                        const t = e.slides.length - 1,
                            n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                        e.isLocked = e.size > n
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: Ot,
            images: {
                loadImage: function(e, t, n, s, i, r) {
                    const a = Ve();
                    let o;

                    function l() {
                        r && r()
                    }
                    et(e).parent("picture")[0] || e.complete && i ? l() : t ? (o = new a.Image, o.onload = l, o.onerror = l, s && (o.sizes = s), n && (o.srcset = n), t && (o.src = t)) : l()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                        const s = e.imagesToLoad[n];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        At = {};
    class _t {
        constructor(...e) {
            let t, n;
            if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? n = e[0] : [t, n] = e, n || (n = {}), n = it({}, n), t && !n.el && (n.el = t), n.el && et(n.el).length > 1) {
                const e = [];
                return et(n.el).each((t => {
                    const s = it({}, n, {
                        el: t
                    });
                    e.push(new _t(s))
                })), e
            }
            const s = this;
            s.__swiper__ = !0, s.support = dt(), s.device = function(e = {}) {
                return lt || (lt = function({
                                                userAgent: e
                                            } = {}) {
                    const t = dt(),
                        n = Ve(),
                        s = n.navigator.platform,
                        i = e || n.navigator.userAgent,
                        r = {
                            ios: !1,
                            android: !1
                        },
                        a = n.screen.width,
                        o = n.screen.height,
                        l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let c = i.match(/(iPad).*OS\s([\d_]+)/);
                    const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                        u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        p = "Win32" === s;
                    let f = "MacIntel" === s;
                    return !c && f && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${o}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), f = !1), l && !p && (r.os = "android", r.android = !0), (c || u || d) && (r.os = "ios", r.ios = !0), r
                }(e)), lt
            }({
                userAgent: n.userAgent
            }), s.browser = (ct || (ct = function() {
                const e = Ve();
                return {
                    isSafari: function() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }(),
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                }
            }()), ct), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules);
            const i = {};
            s.modules.forEach((e => {
                e({
                    swiper: s,
                    extendParams: Lt(n, i),
                    on: s.on.bind(s),
                    once: s.once.bind(s),
                    off: s.off.bind(s),
                    emit: s.emit.bind(s)
                })
            }));
            const r = it({}, kt, i);
            return s.params = it({}, r, At, n), s.originalParams = it({}, s.params), s.passedParams = it({}, n), s.params && s.params.on && Object.keys(s.params.on).forEach((e => {
                s.on(e, s.params.on[e])
            })), s.params && s.params.onAny && s.onAny(s.params.onAny), s.$ = et, Object.assign(s, {
                enabled: s.params.enabled,
                el: t,
                classNames: [],
                slides: et(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === s.params.direction,
                isVertical: () => "vertical" === s.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return s.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, s.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, s.support.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: s.params.focusableElements,
                    lastClickTime: nt(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), s.emit("_swiper"), s.params.init && s.init(), s
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            const n = this;
            e = Math.min(Math.max(e, 0), 1);
            const s = n.minTranslate(),
                i = (n.maxTranslate() - s) * e + s;
            n.translateTo(i, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((n => {
                const s = e.getSlideClasses(n);
                t.push({
                    slideEl: n,
                    classNames: s
                }), e.emit("_slideClass", n, s)
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e = "current", t = !1) {
            const {
                params: n,
                slides: s,
                slidesGrid: i,
                slidesSizesGrid: r,
                size: a,
                activeIndex: o
            } = this;
            let l = 1;
            if (n.centeredSlides) {
                let e, t = s[o].swiperSlideSize;
                for (let n = o + 1; n < s.length; n += 1) s[n] && !e && (t += s[n].swiperSlideSize, l += 1, t > a && (e = !0));
                for (let n = o - 1; n >= 0; n -= 1) s[n] && !e && (t += s[n].swiperSlideSize, l += 1, t > a && (e = !0))
            } else if ("current" === e)
                for (let e = o + 1; e < s.length; e += 1)(t ? i[e] + r[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
            else
                for (let e = o - 1; e >= 0; e -= 1) i[o] - i[e] < a && (l += 1);
            return l
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: n
            } = e;

            function s() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let i;
            n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || s()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t = !0) {
            const n = this,
                s = n.params.direction;
            return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${s}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), n.emit("changeDirection"), t && n.update()), n
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const n = et(e || t.params.el);
            if (!(e = n[0])) return !1;
            e.swiper = t;
            const s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let i = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = et(e.shadowRoot.querySelector(s()));
                    return t.children = e => n.children(e), t
                }
                return n.children ? n.children(s()) : et(n).children(s())
            })();
            if (0 === i.length && t.params.createElements) {
                const e = He().createElement("div");
                i = et(e), e.className = t.params.wrapperClass, n.append(e), n.children(`.${t.params.slideClass}`).each((e => {
                    i.append(e)
                }))
            }
            return Object.assign(t, {
                $el: n,
                el: e,
                $wrapperEl: i,
                wrapperEl: i[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
                wrongRTL: "-webkit-box" === i.css("display")
            }), !0
        }
        init(e) {
            const t = this;
            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy(e = !0, t = !0) {
            const n = this,
                {
                    params: s,
                    $el: i,
                    $wrapperEl: r,
                    slides: a
                } = n;
            return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), s.loop && n.loopDestroy(), t && (n.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                n.off(e)
            })), !1 !== e && (n.$el[0].swiper = null, function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(n)), n.destroyed = !0), null
        }
        static extendDefaults(e) {
            it(At, e)
        }
        static get extendedDefaults() {
            return At
        }
        static get defaults() {
            return kt
        }
        static installModule(e) {
            _t.prototype.__modules__ || (_t.prototype.__modules__ = []);
            const t = _t.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => _t.installModule(e))), _t) : (_t.installModule(e), _t)
        }
    }
    Object.keys(Pt).forEach((e => {
        Object.keys(Pt[e]).forEach((t => {
            _t.prototype[t] = Pt[e][t]
        }))
    })), _t.use([function({
                              swiper: e,
                              on: t,
                              emit: n
                          }) {
        const s = Ve();
        let i = null,
            r = null;
        const a = () => {
                e && !e.destroyed && e.initialized && (n("beforeResize"), n("resize"))
            },
            o = () => {
                e && !e.destroyed && e.initialized && n("orientationchange")
            };
        t("init", (() => {
            e.params.resizeObserver && void 0 !== s.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
                r = s.requestAnimationFrame((() => {
                    const {
                        width: n,
                        height: s
                    } = e;
                    let i = n,
                        r = s;
                    t.forEach((({
                                    contentBoxSize: t,
                                    contentRect: n,
                                    target: s
                                }) => {
                        s && s !== e.el || (i = n ? n.width : (t[0] || t).inlineSize, r = n ? n.height : (t[0] || t).blockSize)
                    })), i === n && r === s || a()
                }))
            })), i.observe(e.el)) : (s.addEventListener("resize", a), s.addEventListener("orientationchange", o))
        })), t("destroy", (() => {
            r && s.cancelAnimationFrame(r), i && i.unobserve && e.el && (i.unobserve(e.el), i = null), s.removeEventListener("resize", a), s.removeEventListener("orientationchange", o)
        }))
    }, function({
                    swiper: e,
                    extendParams: t,
                    on: n,
                    emit: s
                }) {
        const i = [],
            r = Ve(),
            a = (e, t = {}) => {
                const n = new(r.MutationObserver || r.WebkitMutationObserver)((e => {
                    if (1 === e.length) return void s("observerUpdate", e[0]);
                    const t = function() {
                        s("observerUpdate", e[0])
                    };
                    r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
                }));
                n.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.push(n)
            };
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), n("init", (() => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) a(t[e])
                }
                a(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), a(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        })), n("destroy", (() => {
            i.forEach((e => {
                e.disconnect()
            })), i.splice(0, i.length)
        }))
    }]);
    const $t = _t;

    function Mt(e, t, n, s) {
        const i = He();
        return e.params.createElements && Object.keys(s).forEach((r => {
            if (!n[r] && !0 === n.auto) {
                let a = e.$el.children(`.${s[r]}`)[0];
                a || (a = i.createElement("div"), a.className = s[r], e.$el.append(a)), n[r] = a, t[r] = a
            }
        })), n
    }

    function Nt(e = "") {
        return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
    }
    $t.use([function({
                         swiper: e,
                         extendParams: t,
                         on: n,
                         emit: s
                     }) {
        let i;

        function r() {
            if (!e.size) return e.autoplay.running = !1, void(e.autoplay.paused = !1);
            const t = e.slides.eq(e.activeIndex);
            let n = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(i), i = tt((() => {
                let t;
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), s("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), s("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), s("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), s("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0), s("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), s("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && r()
            }), n)
        }

        function a() {
            return void 0 === i && !e.autoplay.running && (e.autoplay.running = !0, s("autoplayStart"), r(), !0)
        }

        function o() {
            return !!e.autoplay.running && void 0 !== i && (i && (clearTimeout(i), i = void 0), e.autoplay.running = !1, s("autoplayStop"), !0)
        }

        function l(t) {
            e.autoplay.running && (e.autoplay.paused || (i && clearTimeout(i), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].addEventListener(t, d)
            })) : (e.autoplay.paused = !1, r())))
        }

        function c() {
            const t = He();
            "hidden" === t.visibilityState && e.autoplay.running && l(), "visible" === t.visibilityState && e.autoplay.paused && (r(), e.autoplay.paused = !1)
        }

        function d(t) {
            e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].removeEventListener(t, d)
            })), e.autoplay.paused = !1, e.autoplay.running ? r() : o())
        }

        function u() {
            e.params.autoplay.disableOnInteraction ? o() : (s("autoplayPause"), l()), ["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].removeEventListener(t, d)
            }))
        }

        function p() {
            e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, s("autoplayResume"), r())
        }
        e.autoplay = {
            running: !1,
            paused: !1
        }, t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), n("init", (() => {
            e.params.autoplay.enabled && (a(), He().addEventListener("visibilitychange", c), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", u), e.$el.on("mouseleave", p)))
        })), n("beforeTransitionStart", ((t, n, s) => {
            e.autoplay.running && (s || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(n) : o())
        })), n("sliderFirstMove", (() => {
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : l())
        })), n("touchEnd", (() => {
            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && r()
        })), n("destroy", (() => {
            e.$el.off("mouseenter", u), e.$el.off("mouseleave", p), e.autoplay.running && o(), He().removeEventListener("visibilitychange", c)
        })), Object.assign(e.autoplay, {
            pause: l,
            run: r,
            start: a,
            stop: o
        })
    }, function({
                    swiper: e,
                    extendParams: t,
                    on: n,
                    emit: s
                }) {
        const i = "swiper-pagination";
        let r;
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${i}-bullet`,
                bulletActiveClass: `${i}-bullet-active`,
                modifierClass: `${i}-`,
                currentClass: `${i}-current`,
                totalClass: `${i}-total`,
                hiddenClass: `${i}-hidden`,
                progressbarFillClass: `${i}-progressbar-fill`,
                progressbarOppositeClass: `${i}-progressbar-opposite`,
                clickableClass: `${i}-clickable`,
                lockClass: `${i}-lock`,
                horizontalClass: `${i}-horizontal`,
                verticalClass: `${i}-vertical`,
                paginationDisabledClass: `${i}-disabled`
            }
        }), e.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let a = 0;

        function o() {
            return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
        }

        function l(t, n) {
            const {
                bulletActiveClass: s
            } = e.params.pagination;
            t[n]().addClass(`${s}-${n}`)[n]().addClass(`${s}-${n}-${n}`)
        }

        function c() {
            const t = e.rtl,
                n = e.params.pagination;
            if (o()) return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                c = e.pagination.$el;
            let d;
            const u = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (d = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), d > i - 1 - 2 * e.loopedSlides && (d -= i - 2 * e.loopedSlides), d > u - 1 && (d -= u), d < 0 && "bullets" !== e.params.paginationType && (d = u + d)) : d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const s = e.pagination.bullets;
                let i, o, u;
                if (n.dynamicBullets && (r = s.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(e.isHorizontal() ? "width" : "height", r * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (a += d - (e.previousIndex - e.loopedSlides || 0), a > n.dynamicMainBullets - 1 ? a = n.dynamicMainBullets - 1 : a < 0 && (a = 0)), i = Math.max(d - a, 0), o = i + (Math.min(s.length, n.dynamicMainBullets) - 1), u = (o + i) / 2), s.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${n.bulletActiveClass}${e}`)).join(" ")), c.length > 1) s.each((e => {
                    const t = et(e),
                        s = t.index();
                    s === d && t.addClass(n.bulletActiveClass), n.dynamicBullets && (s >= i && s <= o && t.addClass(`${n.bulletActiveClass}-main`), s === i && l(t, "prev"), s === o && l(t, "next"))
                }));
                else {
                    const t = s.eq(d),
                        r = t.index();
                    if (t.addClass(n.bulletActiveClass), n.dynamicBullets) {
                        const t = s.eq(i),
                            a = s.eq(o);
                        for (let e = i; e <= o; e += 1) s.eq(e).addClass(`${n.bulletActiveClass}-main`);
                        if (e.params.loop)
                            if (r >= s.length) {
                                for (let e = n.dynamicMainBullets; e >= 0; e -= 1) s.eq(s.length - e).addClass(`${n.bulletActiveClass}-main`);
                                s.eq(s.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
                            } else l(t, "prev"), l(a, "next");
                        else l(t, "prev"), l(a, "next")
                    }
                }
                if (n.dynamicBullets) {
                    const i = Math.min(s.length, n.dynamicMainBullets + 4),
                        a = (r * i - r) / 2 - u * r,
                        o = t ? "right" : "left";
                    s.css(e.isHorizontal() ? o : "top", `${a}px`)
                }
            }
            if ("fraction" === n.type && (c.find(Nt(n.currentClass)).text(n.formatFractionCurrent(d + 1)), c.find(Nt(n.totalClass)).text(n.formatFractionTotal(u))), "progressbar" === n.type) {
                let t;
                t = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const s = (d + 1) / u;
                let i = 1,
                    r = 1;
                "horizontal" === t ? i = s : r = s, c.find(Nt(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)
            }
            "custom" === n.type && n.renderCustom ? (c.html(n.renderCustom(e, d + 1, u)), s("paginationRender", c[0])) : s("paginationUpdate", c[0]), e.params.watchOverflow && e.enabled && c[e.isLocked ? "addClass" : "removeClass"](n.lockClass)
        }

        function d() {
            const t = e.params.pagination;
            if (o()) return;
            const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                i = e.pagination.$el;
            let r = "";
            if ("bullets" === t.type) {
                let s = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && s > n && (s = n);
                for (let n = 0; n < s; n += 1) t.renderBullet ? r += t.renderBullet.call(e, n, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                i.html(r), e.pagination.bullets = i.find(Nt(t.bulletClass))
            }
            "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, i.html(r)), "custom" !== t.type && s("paginationRender", e.pagination.$el[0])
        }

        function u() {
            e.params.pagination = Mt(e, e.originalParams.pagination, e.params.pagination, {
                el: "swiper-pagination"
            });
            const t = e.params.pagination;
            if (!t.el) return;
            let n = et(t.el);
            0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el), n.length > 1 && (n = n.filter((t => et(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), n.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (n.addClass(`${t.modifierClass}${t.type}-dynamic`), a = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", Nt(t.bulletClass), (function(t) {
                t.preventDefault();
                let n = et(this).index() * e.params.slidesPerGroup;
                e.params.loop && (n += e.loopedSlides), e.slideTo(n)
            })), Object.assign(e.pagination, {
                $el: n,
                el: n[0]
            }), e.enabled || n.addClass(t.lockClass))
        }

        function p() {
            const t = e.params.pagination;
            if (o()) return;
            const n = e.pagination.$el;
            n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), n.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", Nt(t.bulletClass))
        }
        n("init", (() => {
            !1 === e.params.pagination.enabled ? f() : (u(), d(), c())
        })), n("activeIndexChange", (() => {
            (e.params.loop || void 0 === e.snapIndex) && c()
        })), n("snapIndexChange", (() => {
            e.params.loop || c()
        })), n("slidesLengthChange", (() => {
            e.params.loop && (d(), c())
        })), n("snapGridLengthChange", (() => {
            e.params.loop || (d(), c())
        })), n("destroy", (() => {
            p()
        })), n("enable disable", (() => {
            const {
                $el: t
            } = e.pagination;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
        })), n("lock unlock", (() => {
            c()
        })), n("click", ((t, n) => {
            const i = n.target,
                {
                    $el: r
                } = e.pagination;
            if (e.params.pagination.el && e.params.pagination.hideOnClick && r && r.length > 0 && !et(i).hasClass(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
                const t = r.hasClass(e.params.pagination.hiddenClass);
                s(!0 === t ? "paginationShow" : "paginationHide"), r.toggleClass(e.params.pagination.hiddenClass)
            }
        }));
        const f = () => {
            e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), p()
        };
        Object.assign(e.pagination, {
            enable: () => {
                e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), u(), d(), c()
            },
            disable: f,
            render: d,
            update: c,
            init: u,
            destroy: p
        })
    }, function({
                    swiper: e,
                    extendParams: t,
                    on: n,
                    emit: s
                }) {
        function i(t) {
            let n;
            return t && (n = et(t), e.params.uniqueNavElements && "string" == typeof t && n.length > 1 && 1 === e.$el.find(t).length && (n = e.$el.find(t))), n
        }

        function r(t, n) {
            const s = e.params.navigation;
            t && t.length > 0 && (t[n ? "addClass" : "removeClass"](s.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](s.lockClass))
        }

        function a() {
            if (e.params.loop) return;
            const {
                $nextEl: t,
                $prevEl: n
            } = e.navigation;
            r(n, e.isBeginning && !e.params.rewind), r(t, e.isEnd && !e.params.rewind)
        }

        function o(t) {
            t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), s("navigationPrev"))
        }

        function l(t) {
            t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), s("navigationNext"))
        }

        function c() {
            const t = e.params.navigation;
            if (e.params.navigation = Mt(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !t.nextEl && !t.prevEl) return;
            const n = i(t.nextEl),
                s = i(t.prevEl);
            n && n.length > 0 && n.on("click", l), s && s.length > 0 && s.on("click", o), Object.assign(e.navigation, {
                $nextEl: n,
                nextEl: n && n[0],
                $prevEl: s,
                prevEl: s && s[0]
            }), e.enabled || (n && n.addClass(t.lockClass), s && s.addClass(t.lockClass))
        }

        function d() {
            const {
                $nextEl: t,
                $prevEl: n
            } = e.navigation;
            t && t.length && (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", o), n.removeClass(e.params.navigation.disabledClass))
        }
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        }, n("init", (() => {
            !1 === e.params.navigation.enabled ? u() : (c(), a())
        })), n("toEdge fromEdge lock unlock", (() => {
            a()
        })), n("destroy", (() => {
            d()
        })), n("enable disable", (() => {
            const {
                $nextEl: t,
                $prevEl: n
            } = e.navigation;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
        })), n("click", ((t, n) => {
            const {
                $nextEl: i,
                $prevEl: r
            } = e.navigation, a = n.target;
            if (e.params.navigation.hideOnClick && !et(a).is(r) && !et(a).is(i)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === a || e.pagination.el.contains(a))) return;
                let t;
                i ? t = i.hasClass(e.params.navigation.hiddenClass) : r && (t = r.hasClass(e.params.navigation.hiddenClass)), s(!0 === t ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass)
            }
        }));
        const u = () => {
            e.$el.addClass(e.params.navigation.navigationDisabledClass), d()
        };
        Object.assign(e.navigation, {
            enable: () => {
                e.$el.removeClass(e.params.navigation.navigationDisabledClass), c(), a()
            },
            disable: u,
            update: a,
            init: c,
            destroy: d
        })
    }]),
        function() {
            const e = document.querySelectorAll(".hero__slider");
            e.length && e.forEach((e => {
                const t = e.closest(".tab-item").dataset.tab,
                    n = document.querySelector(`[data-game-bg="${t}"]`),
                    s = document.querySelector(`[data-game-title="${t}"]`),
                    i = document.querySelector(`[data-game-type="${t}"]`),
                    r = document.querySelector(`[data-game-description="${t}"]`),
                    a = document.querySelector(`[data-game-number="${t}"]`),
                    o = document.querySelector(`[data-game-price="${t}"]`),
                    l = document.querySelector(`[data-game-btn="${t}"]`);

                function c(t) {
                    const c = e.querySelectorAll(".swiper-slide")[t.activeIndex],
                        {
                            title: d,
                            type: u,
                            description: p,
                            number: f,
                            price: h,
                            bg: m,
                            href: g
                        } = c.dataset;
                    n.classList.add("opacity"), s.classList.add("opacity"), i.classList.add("opacity"), r.classList.add("opacity"), a.classList.add("opacity"), o.classList.add("opacity"), l.classList.add("opacity"), setTimeout((() => {
                        n.src = m, s.textContent = d, i.textContent = u, r.textContent = p, a.innerHTML = `${f}<span>шт.</span>`, o.innerHTML = `${h}<span>₽</span>`, l.href = g, s.classList.remove("opacity"), i.classList.remove("opacity"), r.classList.remove("opacity"), a.classList.remove("opacity"), o.classList.remove("opacity"), l.classList.remove("opacity"), n.classList.remove("opacity")
                    }), 400)
                }
                new $t(e, {
                    slidesPerView: "auto",
                    grabCursor: !0,
                    slideToClickedSlide: !0,
                    speed: 800,
                    loop: !0,
                    autoplay: {
                        delay: 15e3,
                        disableOnInteraction: !1
                    },
                    on: {
                        afterInit: function() {
                            c(this)
                        },
                        slideChange: function() {
                            c(this)
                        }
                    }
                })
            }));
            const t = document.querySelector(".products-slider");
            t && new $t(t, {
                slidesPerView: "auto",
                grabCursor: !0,
                speed: 800,
                autoplay: {
                    delay: 8e3,
                    disableOnInteraction: !1
                }
            });
            const n = document.querySelectorAll(".offer__slider");
            n.length && n.forEach((e => {
                new $t(e, {
                    width: null,
                    height: null,

                    spaceBetween: 20,
                    grabCursor: !0,
                    speed: 800,
                    autoplay: {
                        delay: 8e3,
                        disableOnInteraction: !1
                    },
                    breakpoints: {
                        1440: {
                            slidesPerView: 3
                        },
                        993: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 2
                        }
                    }
                })
            }));
            const s = document.querySelector(".product__slider");
            s && new $t(s, {
                width: null,
                height: null,
                spaceBetween: 20,
                simulateTouch: !1,
                speed: 800,
                autoplay: {
                    delay: 3e3,
                    disableOnInteraction: !1
                },
                pagination: {
                    el: ".product__slider-pagination",
                    clickable: !0
                },
                navigation: {
                    prevEl: ".product__btn-slider--prev",
                    nextEl: ".product__btn-slider--next"
                }
            })
        }(),
        function() {
            const e = document.querySelectorAll(".catalog__body");
            if (e.length) {
                const t = document.querySelectorAll(".catalog__product"),
                    n = document.querySelectorAll('.catalog__product[data-null="true"]'),
                    s = document.querySelectorAll(".catalog__sorting-item"),
                    i = document.querySelectorAll(".catalog__category-item"),
                    r = document.querySelector(".catalog__null-product-check");
                let a = "";

                function o(e, t, n) {
                    if ("asc" === n) {
                        for (let n = 0; n < e.children.length; n++)
                            for (let s = n; s < e.children.length; s++)
                                if (+e.children[n].getAttribute(t) > +e.children[s].getAttribute(t)) {
                                    const t = e.replaceChild(e.children[s], e.children[n]);
                                    l(e, t, e.children[n])
                                }
                    } else if ("desc" === n)
                        for (let n = 0; n < e.children.length; n++)
                            for (let s = n; s < e.children.length; s++)
                                if (+e.children[n].getAttribute(t) < +e.children[s].getAttribute(t)) {
                                    const t = e.replaceChild(e.children[s], e.children[n]);
                                    l(e, t, e.children[n])
                                }
                }

                function l(e, t, n) {
                    return e.insertBefore(t, n.nextSibling)
                }
                r.addEventListener("input", (() => {
                    r.checked ? n.forEach((e => e.classList.add("null"))) : n.forEach((e => e.classList.remove("null")))
                })), i.forEach((e => {
                    e.addEventListener("click", (() => {
                        e.classList.contains("active") ? (e.classList.remove("active"), t.forEach((e => {
                            e.classList.remove("none")
                        }))) : (i.forEach((e => e.classList.remove("active"))), e.classList.add("active"), a = e.dataset.filterCategory, t.forEach((e => {
                            e.dataset.category !== a ? e.classList.add("none") : e.classList.remove("none")
                        })))
                    }))
                })), s.forEach((t => {
                    t.addEventListener("click", (() => {
                        const [n, s] = t.dataset.sort.split(",");
                        e.forEach((e => o(e, n, s)))
                    }))
                })), e.forEach((e => o(e, "data-rank", "asc")))
            }
        }(),
        function() {
            const e = document.querySelector("#burger");
            if (e) {
                const t = document.querySelector("#burger-open"),
                    n = document.querySelector("#burger-close");

                function s() {
                    e.classList.remove("open")
                }
                t.addEventListener("click", (() => {
                    e.classList.add("open")
                })), e.addEventListener("click", (e => e.stopPropagation())), document.addEventListener("click", (e => {
                    e.target !== t && s()
                })), n.addEventListener("click", s)
            }
        }(),
        function() {
            const e = document.querySelector(".header__search");
            if (e) {
                const t = document.querySelector(".header__search-input");
                window.matchMedia("(min-width: 1200px)").matches && (e.addEventListener("mouseover", (n => {
                    e.classList.contains("open") || (e.classList.add("open"), t.focus())
                })), t.addEventListener("blur", (() => {
                    setTimeout((() => {
                        e.classList.remove("open")
                    }), 5e3)
                })))
            }
        }(),
        function() {
            const e = document.querySelectorAll(".tab");
            e.length && e.forEach((e => {
                const t = e.querySelectorAll(".btn-tab"),
                    n = e.querySelectorAll(".tab-item");
                t.forEach((e => {
                    e.addEventListener("click", (() => {
                        const {
                            btnTab: s
                        } = e.dataset, i = document.querySelector(`[data-tab="${s}"]`);
                        t.forEach((e => e.classList.remove("active"))), n.forEach((e => e.classList.remove("open"))), e.classList.add("active"), i.classList.add("open")
                    }))
                }))
            }))
        }(),
        function() {
            const e = document.querySelectorAll(".dropdown__btn");
            if (e.length) {
                const t = document.querySelectorAll(".dropdown__item");

                function n() {
                    t.forEach((e => e.classList.remove("open"))), e.forEach((e => e.classList.remove("active")))
                }
                e.forEach((e => {
                    e.addEventListener("click", (() => {
                        const t = e.closest(".dropdown").querySelector(".dropdown__item");
                        t.addEventListener("click", (e => e.stopPropagation())), e.classList.contains("active") ? (e.classList.remove("active"), t.classList.remove("open")) : (n(), e.classList.add("active"), t.classList.add("open"))
                    }))
                })), document.addEventListener("click", (e => {
                    e.target.classList.contains("dropdown__btn") || n()
                }))
            }
        }(),
        function() {
            const e = document.querySelectorAll(".select-btn");
            e.length && e.forEach((t => {
                t.addEventListener("click", (() => {
                    t.closest(".select").querySelector(".select-title").textContent = t.textContent, e.forEach((e => e.classList.remove("active"))), t.classList.add("active")
                }))
            }))
        }(),
        function() {
            const e = document.querySelectorAll("[data-popup-btn]");
            if (e.length) {
                function t(e) {
                    const t = e.clientHeight,
                        n = (window.innerHeight - t) / 2;
                    e.style.marginTop = `${n>=20?n:20}px`
                }
                e.forEach((e => {
                    e.addEventListener("click", (() => {
                        const {
                            popupBtn: n
                        } = e.dataset, s = document.querySelector(`[data-popup="${n}"]`), i = s.querySelector(".popup__window");
                        s.classList.add("open"), document.body.classList.add("body-hidden"), t(i)
                    }))
                })), document.addEventListener("click", (e => {
                    var t;
                    e.target.getAttribute("data-popup-close") && ((t = document.querySelector(".popup.open")).classList.add("hide"), setTimeout((() => {
                        t.classList.remove("open"), t.classList.remove("hide"), document.body.classList.remove("body-hidden")
                    }), 500))
                }))
            }
        }(),
        function() {
            const e = document.querySelector(".product__btn-cart");
            e && e.addEventListener("click", (() => {
                const t = JSON.parse(localStorage.getItem("basketItems")),
                    n = { ...e.dataset,
                        count: 1
                    };
                if (t ? t.find((e => e.id === n.id)) : void 0) return;
                let s;
                t ? (s = [...t, n], localStorage.setItem("basketItems", JSON.stringify(s))) : (s = [n], localStorage.setItem("basketItems", JSON.stringify(s)))
            }))
        }(),
        function() {
            const e = document.querySelector('[data-popup-btn="basket"]'),
                t = document.querySelector(".basket__product-list");

            function n() {
                const e = document.querySelector("#basket-number"),
                    t = document.querySelector("#basket-sum"),
                    n = document.querySelector("#basket-discount"),
                    s = document.querySelector("#basket-price"),
                    {
                        discount: i
                    } = n.dataset,
                    r = JSON.parse(localStorage.getItem("basketItems"));
                let a = 0,
                    o = 0;
                r.forEach((e => {
                    a += e.count, o += +e.price * e.count
                }));
                let l = o - o / 100 * +i;
                e.textContent = `x${a}`, t.textContent = `₽ ${o}`, s.textContent = `₽ ${l}`
            }
            e.addEventListener("click", (() => {
                const e = JSON.parse(localStorage.getItem("basketItems"));
                if (e) {
                    function s(e, t) {
                        let n = e.filter((e => e.id !== t.id));
                        localStorage.setItem("basketItems", JSON.stringify([...n, t]))
                    }
                    t.innerHTML = "", n(), e.forEach((e => {
                        const n = document.createElement("li");
                        n.classList.add("basket__product-item"), n.setAttribute("data-price", e.price), n.setAttribute("data-id", e.id), n.insertAdjacentHTML("beforeend", `\n        <h5 class="basket__game-title">${e.name}</h5>\n        <div class="basket__game-nav">\n          <button type="button" class="btn basket__btn-number basket__btn-number--decrement">-</button>\n          <input type="number" name="product-numbers" value="${e.count}" class="basket__product-input-number" />\n          <span class="basket__product-number">${+e.count<10?`0${e.count}`:e.count}</span>\n          <button type="button" class="btn basket__btn-number basket__btn-number--increment">+</button>\n        </div>\n      `), t.appendChild(n)
                    })), document.querySelectorAll(".basket__product-item").forEach((t => {
                        const i = t.querySelector(".basket__btn-number--decrement"),
                            r = t.querySelector(".basket__btn-number--increment"),
                            a = t.querySelector(".basket__product-input-number"),
                            o = t.querySelector(".basket__product-number");
                        let l = +a.value;
                        i.addEventListener("click", (() => {
                            const t = i.closest(".basket__product-item"),
                                r = JSON.parse(localStorage.getItem("basketItems")),
                                c = e.find((e => e.id === t.dataset.id));
                            if (l >= 2) c.count -= 1, s(r, c), a.value = l - 1, o.textContent = a.value < 10 ? `0${a.value}` : a.value, l--;
                            else {
                                let e = r.filter((e => e.id !== c.id));
                                localStorage.setItem("basketItems", JSON.stringify(e)), t.remove()
                            }
                            n()
                        })), r.addEventListener("click", (() => {
                            if (l <= 11) {
                                const t = r.closest(".basket__product-item"),
                                    i = e.find((e => e.id === t.dataset.id));
                                i.count += 1, s(e, i), a.value = l + 1, o.textContent = a.value < 10 ? `0${a.value}` : a.value, l++, n()
                            }
                        }))
                    }))
                }
            }))
        }(),
        function() {
            //            const e = document.querySelector(".basket__form");
            //            e.addEventListener("submit", (async t => {


            //            	const article = document.querySelector("body");



            //            	 // var stateOrder = $('body').data('orderWait');
            // 		if(parseInt(article.dataset.orderWait) == 1){
            // 			    alert('Подождите....');
            // 			    return false;
            // 		}
            // 		article.dataset.orderWait  = 1;

            // 		// $('body').data('orderWait',1);

            //                t.preventDefault();
            //                const n = JSON.parse(localStorage.getItem("basketItems")),
            //                    s = [],
            //                    i = e.querySelector("#basket-email").value,
            //                    r = e.querySelector("#promocode").value,
            //                    a = e.closest(".popup").dataset.id,
            //                    o = e.querySelector("#basket-rules"),
            //                    l = e.querySelectorAll(".basket__way-input");
            //                let c = 1,
            //                    d = o.checked ? 1 : 0;
            //                for (let e = 0; e < l.length; e++) {
            //                    const t = l[e];
            //                    t.checked && (c = +t.id.slice(-1))
            //                }
            //                for (let e = 0; e < n.length; e++) {
            //                    const t = n[e],
            //                        i = {
            //                            id: t.id,
            //                            count: t.count
            //                        };
            //                    s.push(i)
            //                }
            //                const u = new FormData;
            //                u.append("email", i), u.append("cartItems", JSON.stringify(s)), u.append("type", a), u.append("count", 1), u.append("rules", d), u.append("forms", JSON.stringify({})), u.append("fund", c), u.append("cupon", r),
            //                await je.post("/order/createcart", u) .then(function (response) {
            // 		    console.log(response.data);

            // 		     // var res = JSON.parse(response.data);
            //                 if (response.data.ok == 'TRUE') {
            //                     if (response.data.redirect == 'yes') {
            //                         // $('body').data('orderWait', 0);
            //                         article.dataset.orderWait  = 0;

            //                         document.location.href = response.data.url;
            //                     }
            //                 }

            // if (response.data.error !== null) {
            //     // $('body').data('orderWait', 0);
            //        article.dataset.orderWait  = 0;

            //     alert(response.data.error);
            // }


            // 		  })
            //            }))
        }(),
        function() {
            const e = document.querySelectorAll(".btn-buy"),
                t = document.querySelector("#basket-buy");
            if (e.length && e.forEach((e => {
                e.addEventListener("click", (() => {
                    const {
                        id: n,
                        price: s,
                        descr: i,
                        name: r
                    } = e.dataset, a = {
                        id: n,
                        price: s,
                        descr: i,
                        name: r,
                        count: 1
                    };
                    localStorage.setItem("product", JSON.stringify(a));
                    const o = t.querySelector(".basket__product-list"),
                        l = document.createElement("li");
                    h(), o.innerHTML = "", l.classList.add("basket__product-item"), l.insertAdjacentHTML("beforeend", `\n          <h5 class="basket__game-title">${a.name}</h5>\n          <div class="basket__game-nav">\n            <button type="button" class="btn basket__btn-number basket__btn-number--decrement">-</button>\n            <input type="number" name="product-numbers" value="${a.count}" class="basket__product-input-number" />\n            <span class="basket__product-number">${+a.count<10?`0${a.count}`:a.count}</span>\n            <button type="button" class="btn basket__btn-number basket__btn-number--increment">+</button>\n          </div>\n        `), o.appendChild(l);
                    const c = l.querySelector(".basket__btn-number--decrement"),
                        d = l.querySelector(".basket__btn-number--increment"),
                        u = l.querySelector(".basket__product-input-number"),
                        p = l.querySelector(".basket__product-number");
                    let f = +u.value;

                    function h() {
                        const e = JSON.parse(localStorage.getItem("product")),
                            t = document.querySelector("#basket-number-one"),
                            n = document.querySelector("#basket-sum-one"),
                            s = document.querySelector("#basket-discount-one"),
                            i = document.querySelector("#basket-price-one");
                        if (e) {
                            const {
                                discount: r
                            } = s.dataset;
                            let a = e.count * +e.price,
                                o = a - a / 100 * +r;
                            t.textContent = `x${e.count}`, n.textContent = `₽ ${a}`, i.textContent = `₽ ${o}`
                        } else t.textContent = "x0", n.textContent = "₽ 0", i.textContent = "₽ 0"
                    }
                    c.addEventListener("click", (() => {
                        const e = c.closest(".basket__product-item"),
                            t = JSON.parse(localStorage.getItem("product"));
                        f >= 2 ? (t.count -= 1, localStorage.setItem("product", JSON.stringify(t)), u.value = f - 1, p.textContent = u.value < 10 ? `0${u.value}` : u.value, f--) : (localStorage.removeItem("product"), e.remove()), h()
                    })), d.addEventListener("click", (() => {
                        if (f <= 11) {
                            const e = JSON.parse(localStorage.getItem("product"));
                            e.count += 1, localStorage.setItem("product", JSON.stringify(e)), u.value = f + 1, p.textContent = u.value < 10 ? `0${u.value}` : u.value, f++, h()
                        }
                    }))
                }))
            })), t) {
                const e = t.querySelector(".basket__form");
                e.addEventListener("submit", (async t => {
                    t.preventDefault();
                    const n = JSON.parse(localStorage.getItem("product")),
                        s = e.querySelector("#basket-email-one").value,
                        i = e.querySelector("#promocode-one").value,
                        r = e.closest(".popup").dataset.id,
                        a = e.querySelector("#basket-rules-one"),
                        o = e.querySelectorAll(".basket__way-input");
                    let l = 1,
                        c = a.checked ? 1 : 0;
                    for (let e = 0; e < o.length; e++) {
                        const t = o[e];
                        t.checked && (l = +t.id.slice(-1))
                    }
                    const d = new FormData;
                    d.append("email", s), d.append("product", JSON.stringify({
                        id: n.id,
                        count: n.count
                    })), d.append("type", r), d.append("count", 1), d.append("rules", c), d.append("forms", JSON.stringify({})), d.append("found", l), d.append("cupon", i), await je.post("http://localhost:5000/api/cartItems/", d)
                }))
            }
        }()
})();