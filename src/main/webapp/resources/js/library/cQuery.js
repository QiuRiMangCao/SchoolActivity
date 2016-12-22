/**
 * Ctrip JavaScript Code
 * http://www.ctrip.com/
 * Copyright(C) 2008 - 2013, Ctrip All rights reserved.
 * Version: 131209
 * Date: 2013-12-09
 */
;
window.replace = function() {
    return ''
}; (function() {
    function w(a) {
        return ("" + a).slice()
    }
    try {
        if (!window.cQuery) {
            window.cQuery = function(a, b, c) {
                return (cQuery.isCDom(a) ? a: new U(a, b, c))
            };
            var n = {
                isOpera: (/opera/),
                isIE: (/msie (\d+)/),
                isIe11: (/rv:(\d+)/),
                isFirefox: (/firefox\/(\d+)/),
                isChrome: (/chrome/),
                isSafari: (/safari/),
                isIOS: (/iphone|ipod|ipad/),
                isIPhone: (/iphone/),
                isIPod: (/ipod/),
                isIPad: (/ipad/),
                isIPadUCWeb: (/ucweb/),
                space: (/\s+/g),
                trimMulti: (/^[\s\xA0]+|[\s\xA0]+$/gm),
                trim: (/^[\s\xA0]+|[\s\xA0]+$/g),
                stringifyJSON: (/([\n\r\f\\\/\'\"])/g),
                errStack: [(/^\s*at [^ ]* \((.*?):(\d+):\d+\)$/m), (/^\s*at (.*?):(\d+):\d+$/m), (/^\s*@(.*?):\d+$/m)],
                isInt: (/^-?([1-9]\d*)?\d$/),
                isFloat: (/^-?(([1-9]\d*)?\d(\.\d*)?|\.\d+)$/),
                isDate: (/^(\d{4})-(\d{1,2})-(\d{1,2})$/),
                isDateTime: (/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.\d+)?$/),
                toReStringA: (/([\.\\\/\+\*\?\[\]\{\}\(\)\^\$\|])/g),
                toReStringB: (/[\r\t\n]/g),
                toDate: (/^(\d{4})-(\d{1,2})-(\d{1,2})( \d{1,2}:\d{1,2}:\d{1,2}(\.\d+)?)?$/),
                toDateTime: (/^(\d{4})-(\d{1,2})-(\d{1,2})( (\d{1,2}):(\d{1,2}):(\d{1,2})(\.\d+)?)?$/),
                toFormatString: (/([yMdhmsS])\1*/g),
                toCurStringA: (/(\d)(\d{3}(,|\.|$))/),
                toCurStringB: (/^(-?)\./),
                toIntFix: (/,/g),
                cssFix: (/-(.)/g),
                offsetA: (/^(none|hidden)$/i),
                ajax: (/xml/i),
                tmplMapString: (/[\r\n\'\"\\]/g),
                tmplCheckVari: (/(^|[^\.])\b([a-z_$][\w$]*)/gi),
                tmplParse: (/^[\s\S]*?(?=(\$\{|\{\{))/),
                tmplKey_$: (/^\$\{([\s\S]+)\}$/),
                tmplKey_cmd: (/^\{\{\s*(if|else|\/if|\/?loop|\/?each|\/?enum|tmpl)\b.*\}\}$/),
                tmplKey_if: (/^\{\{\s*if\s+(.+?)\s*\}\}$/),
                tmplKey_else: (/^\{\{\s*else(\s+(.+?))?\s*\}\}$/),
                tmplKey_loop: (/^\{\{\s*loop(\s*\(([^,\)]+)(,([^,\)]+))?\))?\s+(.+?)\s*\}\}$/),
                tmplKey_each: (/^\{\{\s*each(\s*\(([^,\)]+)(,([^,\)]+))?(,([^,\)]+))?\))?\s+(.+?)\s*\}\}$/),
                tmplKey_enum: (/^\{\{\s*enum(\s*\(([^,\)]+)(,([^,\)]+))?\))?\s+(.+?)\s*\}\}$/),
                tmplKey_tmpl: (/^\{\{\s*tmpl\s+(.+?)(,([^,]+?))?\s*\}\}$/),
                isSelfScript: (/cQuery_110421(\.src)?\.js/i)
            },
            C = {};
            cQuery.jsonpResponse = cQuery.undefined;
            var E = null,
            N = "";
            cQuery.isReady = !1;
            cQuery.isLoaded = !1;
            cQuery.undefined = void 0;
            cQuery.tmp = {};
            cQuery.browser = function() {
                var a = {
                    isOpera: !1,
                    isIE: !1,
                    isStdIE: !1,
                    isAllIE: !1,
                    isIE6: !1,
                    isIE7: !1,
                    isIE8: !1,
                    isIE9: !1,
                    isIE10: !1,
                    isIE11: !1,
                    isFirefox: !1,
                    isFirefox2: !1,
                    isFirefox3: !1,
                    isFirefox4: !1,
                    isChrome: !1,
                    isSafari: !1,
                    isIOS: !1,
                    isIPhone: !1,
                    isIPod: !1,
                    isIPad: !1,
                    isIPadUCWeb: !1
                },
                b = navigator.userAgent.toLowerCase(),
                c = (navigator.vendor || "").toLowerCase(),
                d;
                if (n.isOpera.test(b)) return a.isOpera = !0,
                a;
                if (d = b.match(n.isIE)) return a.isIE = !0,
                a.isAllIE = !0,
                a["isIE" + d[1]] = !0,
                a;
                if ( - 1 < b.indexOf("trident") && (d = b.match(n.isIe11))) return a.isStdIE = !0,
                a.isAllIE = !0,
                a["isIE" + d[1]] = !0,
                a; ((d = b.match(n.isFirefox)) ? (a.isFirefox = !0, a["isFirefox" + d[1]] = !0) : (n.isChrome.test(b) ? a.isChrome = !0 : n.isSafari.test(b) && (a.isSafari = !0)));
                n.isIOS.test(b) && (a.isIOS = !0, (n.isIPhone.test(b) ? a.isIPhone = !0 : (n.isIPod.test(b) ? a.isIPod = !0 : n.isIPad.test(b) && (a.isIPad = !0, n.isIPadUCWeb.test(c) && (a.isIPadUCWeb = !0)))));
                return a
            } ();
            cQuery.type = function(a) {
                if (null == a) return String(a);
                var b = {
                    "[object Boolean]": "boolean",
                    "[object Number]": "number",
                    "[object String]": "string",
                    "[object Function]": "function",
                    "[object Array]": "array",
                    "[object Date]": "date",
                    "[object RegExp]": "regexp",
                    "[object Error]": "error"
                },
                c = Object.prototype.toString.call(a);
                if (c in b) return b[c];
                "[object Object]" == c && (c = a + "");
                return ((a = c.match((/^\[object (HTML\w+)\]$/))) ? a[1] : "object")
            };
            cQuery.uid = function(a) {
                a && cQuery.isCDom(a) && (a = a[0]);
                return (a && (a == window || a.nodeType) ? ("_uid_" in a ? a._uid_: a = (document.uniqueID ? a._uid_ = (a == window ? "ms_window": a.uniqueID) : a._uid_ = cQuery.uid())) : "uid_" + (new Date).getTime() + (1E10 * Math.random()).toFixed(0))
            };
            cQuery.crypto = {
                sha1: function(a) {
                    function b(a, b) {
                        return a << b | a >>> 32 - b
                    }
                    function c(a) {
                        var b = "",
                        c, d;
                        for (c = 7; 0 <= c; c--) d = a >>> 4 * c & 15,
                        b += d.toString(16);
                        return b
                    }
                    var d, e, f = Array(80),
                    g = 1732584193,
                    h = 4023233417,
                    k = 2562383102,
                    l = 271733878,
                    p = 3285377520,
                    m,
                    q,
                    n,
                    y,
                    u;
                    a = function(a) {
                        a = a.replace((/\r\n/g), "\n");
                        for (var b = "",
                        c = 0; c < a.length; c++) {
                            var d = a.charCodeAt(c); (128 > d ? b += String.fromCharCode(d) : ((127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128))), b += String.fromCharCode(d & 63 | 128)))
                        }
                        return b
                    } (a);
                    m = a.length;
                    var v = [];
                    for (d = 0; d < m - 3; d += 4) e = a.charCodeAt(d) << 24 | a.charCodeAt(d + 1) << 16 | a.charCodeAt(d + 2) << 8 | a.charCodeAt(d + 3),
                    v.push(e);
                    switch (m % 4) {
                    case 0:
                        d = 2147483648;
                        break;
                    case 1:
                        d = a.charCodeAt(m - 1) << 24 | 8388608;
                        break;
                    case 2:
                        d = a.charCodeAt(m - 2) << 24 | a.charCodeAt(m - 1) << 16 | 32768;
                        break;
                    case 3:
                        d = a.charCodeAt(m - 3) << 24 | a.charCodeAt(m - 2) << 16 | a.charCodeAt(m - 1) << 8 | 128
                    }
                    for (v.push(d); 14 != v.length % 16;) v.push(0);
                    v.push(m >>> 29);
                    v.push(m << 3 & 4294967295);
                    for (a = 0; a < v.length; a += 16) {
                        for (d = 0; 16 > d; d++) f[d] = v[a + d];
                        for (d = 16; 79 >= d; d++) f[d] = b(f[d - 3] ^ f[d - 8] ^ f[d - 14] ^ f[d - 16], 1);
                        e = g;
                        m = h;
                        q = k;
                        n = l;
                        y = p;
                        for (d = 0; 19 >= d; d++) u = b(e, 5) + (m & q | ~m & n) + y + f[d] + 1518500249 & 4294967295,
                        y = n,
                        n = q,
                        q = b(m, 30),
                        m = e,
                        e = u;
                        for (d = 20; 39 >= d; d++) u = b(e, 5) + (m ^ q ^ n) + y + f[d] + 1859775393 & 4294967295,
                        y = n,
                        n = q,
                        q = b(m, 30),
                        m = e,
                        e = u;
                        for (d = 40; 59 >= d; d++) u = b(e, 5) + (m & q | m & n | q & n) + y + f[d] + 2400959708 & 4294967295,
                        y = n,
                        n = q,
                        q = b(m, 30),
                        m = e,
                        e = u;
                        for (d = 60; 79 >= d; d++) u = b(e, 5) + (m ^ q ^ n) + y + f[d] + 3395469782 & 4294967295,
                        y = n,
                        n = q,
                        q = b(m, 30),
                        m = e,
                        e = u;
                        g = g + e & 4294967295;
                        h = h + m & 4294967295;
                        k = k + q & 4294967295;
                        l = l + n & 4294967295;
                        p = p + y & 4294967295
                    }
                    u = c(g) + c(h) + c(k) + c(l) + c(p);
                    return u.toLowerCase()
                }
            };
            cQuery.isPlainObject = function(a) {
                if (!a || "object" !== cQuery.type(a) || a.nodeType || a == a.window) return ! 1;
                var b = Object.prototype.hasOwnProperty;
                try {
                    if (a.constructor && !b.call(a, "constructor") && !b.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(c) {
                    return ! 1
                }
                if (cQuery.isCDom(a)) return ! 1;
                for (var d in a) if (!b.call(a, d) && d in Object.prototype && a[d] !== Object.prototype[d]) return ! 1;
                return ! 0
            };
            cQuery.isEmptyObject = function(a) {
                for (var b in a) return ! 1;
                return ! 0
            };
            cQuery.isCDom = function(a) {
                return a && a.hasOwnProperty && !a.hasOwnProperty("_v") && cQuery.fn._v == a._v
            };
            cQuery.stringifyJSON = function(a) {
                var b, c = window.JSON;
                try {
                    if (c && c.stringify) b = c.stringify(a);
                    else {
                        var c = [],
                        d = 0,
                        e,
                        f,
                        g = {
                            "\n": "\\n",
                            "\r": "\\r",
                            "\f": "\\f"
                        };
                        switch (cQuery.type(a)) {
                        case null:
                            b = "null";
                            break;
                        case "undefined":
                            b = "undefined";
                            break;
                        case "object":
                            for (f in a) a.hasOwnProperty(f) && (c[d++] = cQuery.stringifyJSON(f) + ":" + cQuery.stringifyJSON(a[f]));
                            b = "{" + c.join(",") + "}";
                            break;
                        case "array":
                            d = 0;
                            for (e = a.length; d < e; d++) c[d] = cQuery.stringifyJSON(a[d]);
                            b = "[" + c.join(",") + "]";
                            break;
                        case "string":
                            b = '"' + a.replace(n.stringifyJSON,
                            function(a) {
                                return g[a] || "\\" + a
                            }) + '"';
                            break;
                        case "date":
                            b = "new Date(" + a.getTime() + ")";
                            break;
                        case "number":
                        case "boolean":
                        case "function":
                        case "regexp":
                            b = a.toString();
                            break;
                        default:
                            b = "null"
                        }
                    }
                    return b
                } catch(h) {
                    cQuery.error("stringifyJSON", "invalid Object")
                }
                return null
            };
            cQuery.parseJSON = function(a) {
                if ("string" != cQuery.type(a) || !a) return null;
                a = a.trim();
                var b = null,
                c = window.JSON;
                try {
                    if (c && c.parse) return b = c.parse(a)
                } catch(d) {
                    cQuery.log("parseJSON", "Nonstandard JSON: " + a)
                }
                try {
                    b = (new Function("return (" + a + ");"))()
                } catch(e) {
                    cQuery.error("parseJSON", "invalid JSON: " + a)
                }
                return b
            };
            cQuery.parseXML = function(a) {
                var b, c; (window.DOMParser ? (b = new DOMParser, b = b.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))); (c = b.documentElement) && c.nodeName && "parsererror" !== c.nodeName || cQuery.error("parseXML", "invalid XML: " + a);
                return b
            };
            cQuery.error = function(a, b, c) {
                var d;
                switch (cQuery.type(a)) {
                case "string":
                    d = {
                        msg: w(b || ""),
                        file: "",
                        line: "",
                        number: 0,
                        stack: cQuery.trace(),
                        name: w(a || "")
                    };
                    if (window.console && console.log) {
                        console.log("[ Error ]");
                        console.log(d);
                        for (var e in c) c.hasOwnProperty(e) && console.log(e + ": ", c[e])
                    }
                    break;
                case "error":
                    if (cQuery.config && cQuery.config("allowDebug")) throw a;
                    d = {
                        msg: w(a.message || a.description || ""),
                        file: w(a.fileName || a.sourceURL || ""),
                        line: a.lineNumber || a.line || 0,
                        number: a.number || 0,
                        stack: cQuery.trace(a),
                        name: w(a.name)
                    };
                    if (!d.file && a.stack) {
                        for (b = 0; b < n.errStack.length; b++) {
                            var f = a.stack.match(n.errStackA);
                            if (f) break
                        }
                        f && (d.file = f[1], d.line = parseInt(f[2], 10))
                    }
                    window.console && console.log && (console.log("[ Error ]"), console.log(d))
                }
                d.error = (cQuery.browser.isIE ? Error(d.number, d.msg) : Error(d.msg, d.file, d.line));
                setTimeout(function() {
                    window.$LAB && $LAB.errorQueue && $LAB.errorQueue.push(d)
                })
            };
            cQuery.trace = function() {
                function a(b) {
                    b = b || {
                        guess: !0
                    };
                    var c = b.e || null;
                    b = !!b.guess;
                    var d = new a.implementation,
                    c = d.run(c);
                    return (b ? d.guessAnonymousFunctions(c) : c)
                }
                a.implementation = function() {};
                a.implementation.prototype = {
                    run: function(a, c) {
                        a = a || this.createException();
                        c = c || this.mode(a);
                        return ("other" === c ? this.other(arguments.callee) : this[c](a))
                    },
                    createException: function() {
                        try {
                            this.undef()
                        } catch(a) {
                            return a
                        }
                    },
                    mode: function(a) {
                        return (a.arguments && a.stack ? "chrome": (a.stack && a.sourceURL ? "safari": (a.stack && a.number ? "ie": (a.stack && a.fileName ? "firefox": (a.stack && !a.fileName ? "chrome": "other")))))
                    },
                    instrumentFunction: function(b, c, d) {
                        b = b || window;
                        var e = b[c];
                        b[c] = function() {
                            d.call(this, a().slice(4));
                            return b[c]._instrumented.apply(this, arguments)
                        };
                        b[c]._instrumented = e
                    },
                    deinstrumentFunction: function(a, c) {
                        a[c].constructor === Function && a[c]._instrumented && a[c]._instrumented.constructor === Function && (a[c] = a[c]._instrumented)
                    },
                    chrome: function(a) {
                        return (a.stack + "\n").replace((/^\s+(at eval )?at\s+/gm), "").split("\n").slice(1, -1)
                    },
                    safari: function(a) {
                        return a.stack.replace((/\[native code\]\n/m), "").replace((/^(?=\w+Error\:).*$\n/m), "").replace((/^@/gm), "{anonymous}()@").split("\n")
                    },
                    ie: function(a) {
                        return a.stack.replace((/^\s*at\s+(.*)$/gm), "$1").replace((/^Anonymous function\s+/gm), "{anonymous}() ").replace((/^(.+)\s+\((.+)\)$/gm), "$1@$2").split("\n").slice(1)
                    },
                    firefox: function(a) {
                        return a.stack.replace((/(?:\n@:0)?\s+$/m), "").replace((/^(?:\((\S*)\))?@/gm), "{anonymous}($1)@").split("\n")
                    },
                    other: function(a) {
                        for (var c = (/function\s*([\w\-$]+)?\s*\(/i), d = [], e, f; a && a.arguments && 10 > d.length;) e = (c.test(a.toString()) ? RegExp.$1 || "{anonymous}": "{anonymous}"),
                        f = Array.prototype.slice.call(a.arguments || []),
                        d[d.length] = e + "(" + this.stringifyArguments(f) + ")",
                        a = a.caller;
                        return d
                    },
                    stringifyArguments: function(a) {
                        for (var c = [], d = Array.prototype.slice, e = 0; e < a.length; ++e) {
                            var f = a[e]; (void 0 === f ? c[e] = "undefined": (null === f ? c[e] = "null": f.constructor && ((f.constructor === Array ? c[e] = (3 > f.length ? "[" + this.stringifyArguments(f) + "]": "[" + this.stringifyArguments(d.call(f, 0, 1)) + "..." + this.stringifyArguments(d.call(f, -1)) + "]") : (f.constructor === Object ? c[e] = "#object": (f.constructor === Function ? c[e] = "#function": (f.constructor === String ? c[e] = '"' + f + '"': f.constructor === Number && (c[e] = f))))))))
                        }
                        return c.join(",")
                    },
                    sourceCache: {},
                    isSameDomain: function(a) {
                        return "undefined" !== typeof location && -1 !== a.indexOf(location.hostname)
                    },
                    getSource: function(a) {
                        a in this.sourceCache || (this.sourceCache[a] = "");
                        return this.sourceCache[a]
                    },
                    guessAnonymousFunctions: function(a) {
                        for (var c = 0; c < a.length; ++c) {
                            var d = (/^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/),
                            e = a[c],
                            f = (/\{anonymous\}\(.*\)@(.*)/).exec(e);
                            if (f) {
                                var g = d.exec(f[1]);
                                g && (d = g[1], f = g[2], g = g[3] || 0, d && this.isSameDomain(d) && f && (d = this.guessAnonymousFunction(d, f, g), a[c] = e.replace("{anonymous}", d)))
                            }
                        }
                        return a
                    },
                    guessAnonymousFunction: function(a, c, d) {
                        var e;
                        try {
                            e = this.findFunctionName(this.getSource(a), c)
                        } catch(f) {
                            e = f.toString()
                        }
                        return e
                    },
                    findFunctionName: function(a, c) {
                        for (var d = (/function\s+([^(]*?)\s*\(([^)]*)\)/), e = (/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/), f = (/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/), g = "", h, k = Math.min(c, 20), l, p = 0; p < k; ++p) if (h = a[c - p - 1], l = h.indexOf("//"), 0 <= l && (h = h.substr(0, l)), h) if (g = h + g, (h = e.exec(g)) && h[1] || (h = d.exec(g)) && h[1] || (h = f.exec(g)) && h[1]) return h[1];
                        return "(?)"
                    }
                };
                return a
            } ();
            cQuery.log = function(a, b) {
                if (window.console && console.log) {
                    switch (arguments.length) {
                    case 0:
                        a = "timestamp";
                        b = (new Date).toFormatString("yyyy-MM-dd hh:mm:ss,SSS");
                        break;
                    case 1:
                        b = a,
                        a = "log"
                    }
                    console.log("[ " + a + " ] " + cQuery.stringifyJSON(b))
                }
            };
            cQuery.logTrace = function() {
                var a = Array.prototype.slice.call(arguments),
                a = cQuery.trace.apply(null, a);
                cQuery.log("[ Trace ]");
                for (var b = 0,
                c = a.length; b < c; b++) cQuery.log(a[b])
            };
            cQuery.debug = function() {
                if (window.console && console.log) {
                    var a = Array.prototype.slice.call(arguments); (console.log.apply ? console.log.apply(console, a) : console.log(a.join(" | ")))
                }
            };
            cQuery.extend = function() {
                var a = null,
                b = [].slice.call(arguments, 0),
                c = b.shift(),
                d;
                if (null === c || "boolean" == cQuery.type(c)) a = c,
                c = b.shift();
                b.length || (b[0] = c, c = cQuery);
                for (; d = b.shift();) for (var e in d) if (!d.hasOwnProperty || d.hasOwnProperty(e) && c !== d[e]) {
                    var f = cQuery.type(c[e]),
                    g = cQuery.type(d[e]);
                    if (!0 === a) {
                        var h = (c.hasOwnProperty ? c.hasOwnProperty(e) : e in c);
                        if (h && f == g) switch (f) {
                        case "object":
                            if (cQuery.isPlainObject(d[e])) cQuery.extend(a, c[e], d[e]);
                            else try {
                                c[e] = d[e]
                            } catch(k) {}
                            break;
                        default:
                            try {
                                c[e] = d[e]
                            } catch(l) {}
                        } else try {
                            c[e] = cQuery.copy(d[e])
                        } catch(p) {}
                    } else if (!1 === a) {
                        if (h = e in c, !h) try {
                            c[e] = d[e]
                        } catch(m) {}
                    } else try {
                        c[e] = d[e]
                    } catch(n) {}
                }
                return c
            };
            cQuery.extend({
                COMMON_DONOTHING: function() {},
                AJAX_METHOD_GET: "GET",
                AJAX_METHOD_POST: "POST",
                ting: "keepFirst",
                AJAX_UNIQUETYPE_KEEPLAST: "keepLast",
                KEY_ESC: 27,
                KEY_F1: 112,
                KEY_F2: 113,
                KEY_F3: 114,
                KEY_F4: 115,
                KEY_F5: 116,
                KEY_F6: 117,
                KEY_F7: 118,
                KEY_F8: 119,
                KEY_F9: 120,
                KEY_F10: 121,
                KEY_F11: 122,
                KEY_F12: 123,
                KEY_UP: 38,
                KEY_DOWN: 40,
                KEY_LEFT: 37,
                KEY_RIGHT: 39,
                KEY_ENTER: 13,
                KEY_SPACE: 32,
                KEY_TAB: 9,
                KEY_HOME: 36,
                KEY_END: 35,
                KEY_PAGEUP: 33,
                KEY_PAGEDOWN: 34,
                KEY_BACKSPACE: 8,
                TMPL_TYPE_STRICT: "strict",
                TMPL_TYPE_NORMAL: "normal"
            });
            cQuery.sleep = function(a) {
                for (var b = +new Date; + new Date - b < a;);
            };
            cQuery.loader = {
                _loaded: {},
                _jsonpBusy: !1,
                _jsonpQueue: [],
                _jsonpCache: {},
                pre: function(a, b) {
                    b = cQuery.extend(!0, {
                        width: 0,
                        height: 0,
                        disabled: "disabled",
                        style: {
                            display: "none"
                        },
                        rel: "alternate stylesheet",
                        onload: cQuery.COMMON_DONOTHING,
                        onerror: cQuery.COMMON_DONOTHING
                    },
                    b || {});
                    if (this._loaded[a]) b.onload && b.onload.apply();
                    else {
                        var c = b.onload;
                        b.onload = function() {
                            cQuery.loader._loaded[a] = !0;
                            c && c.apply(d, arguments)
                        };
                        var d;
                        d = (cQuery.browser.isIE || cQuery.browser.isOpera ? this._createLink(a, b) : this._createObject(a, b))
                    }
                },
                js: function(a, b) {
                    b = cQuery.extend({
                        type: "text/javascript",
                        charset: cQuery.config("charset"),
                        async: !1,
                        group: "",
                        onload: cQuery.COMMON_DONOTHING,
                        onerror: cQuery.COMMON_DONOTHING
                    },
                    b || {});
                    var c = document.createElement("script"),
                    d = b.onload;
                    b.onload = function() {
                        d.apply(c, arguments);
                        c.onload = c.onreadystatechange = cQuery.COMMON_DONOTHING
                    };
                    cQuery.extend(c, b);
                    c.onreadystatechange = function() {
                        switch (c.readyState) {
                        case "loaded":
                        case "complete":
                            b.onload.apply(c, arguments)
                        }
                    };
                    c.src = a;
                    this._appendToHead(c);
                    return c
                },
                jsText: function() {},
                css: function(a, b) {
                    b = cQuery.extend({
                        type: "text/css",
                        charset: cQuery.config("charset"),
                        rel: "stylesheet"
                    },
                    b || {});
                    var c = document.createElement("link");
                    cQuery.extend(c, b);
                    c.href = a;
                    this._appendToHead(c);
                    return c
                },
                image: function(a, b) {
                    b = cQuery.extend({
                        onload: cQuery.COMMON_DONOTHING,
                        onerror: cQuery.COMMON_DONOTHING
                    },
                    b || {});
                    var c = (new Image);
                    cQuery.extend(c, b);
                    c.src = a;
                    return c
                },
                jsonp: function(a, b) {
                    b = cQuery.extend({
                        type: "text/javascript",
                        charset: cQuery.config("charset"),
                        async: !0,
                        group: "",
                        onload: cQuery.COMMON_DONOTHING,
                        onerror: cQuery.COMMON_DONOTHING
                    },
                    b || {});
                    if (a in this._jsonpCache) {
                        var c = this._jsonpCache[a];
                        c.onload[c.onload.length] = b.onload;
                        c.onerror[c.onerror.length] = b.onerror;
                        "loaded" == c.status && (cQuery.jsonpResponse = c.data, this._jsonpRun(a))
                    } else(this._jsonpBusy ? this._jsonpQueue[this._jsonpQueue.length] = Array.prototype.slice.call(arguments) : (this._jsonpBusy = !0, c = this._jsonpCache[a] = {
                        status: "loading",
                        onload: [b.onload],
                        onerror: [b.onerror]
                    },
                    b.onload = this._jsonpRun.bind(this, a), c.script = this.js(a, b)))
                },
                _jsonpRun: function(a) {
                    var b = this._jsonpCache[a];
                    if (cQuery.jsonpResponse == cQuery.undefined) for (delete this._jsonpCache[a]; a = b.onerror.shift();) a();
                    else for (b.status = "loaded", b.data = cQuery.copy(cQuery.jsonpResponse), cQuery.jsonpResponse = cQuery.undefined; a = b.onload.shift();) a(b.data);
                    this._jsonpBusy = !1; (b = this._jsonpQueue.shift()) && this.jsonp.apply(this, b)
                },
                _createLink: function(a, b) {
                    var c = document.createElement("link");
                    cQuery.extend(!0, c, b);
                    c.href = a;
                    this._appendToHead(c);
                    return c
                },
                _createObject: function(a, b) {
                    var c = document.createElement("object");
                    cQuery.extend(!0, c, b);
                    c.data = a;

                    this._appendToBody(c);
                    return c
                },
                _appendToHead: function(a, b) {
                    var c = document.head || document.getElementsByTagName("head")[0] || document.documentElement; (c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a));
                    b && c.removeChild(a);
                    return a
                },
                _appendToBody: function(a, b) {
                    var c = document.body;
                    c || (c = cQuery.uid(), document.write('<input id="' + c + '" type="hidden"></input>'), c = document.getElementById(c), c.parentNode.removeChild(c), c = document.body); (c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a));
                    b && c.removeChild(a);
                    return a
                }
            };
            cQuery.extend(!1, String.prototype, {
                trim: function(a) {
                    return this.replace((a ? n.trimMulti: n.trim), "")
                },
                repeat: function(a) {
                    var b = [];
                    b[a] = "";
                    return b.join(this)
                },
                isInt: function(a, b) {
                    if (n.isInt.test(this)) {
                        var c = parseInt(this, 10);
                        return ("number" == typeof a && c < a || "number" == typeof b && c > b ? !1 : !0)
                    }
                    return ! 1
                },
                isFloat: function(a, b) {
                    if (n.isFloat.test(this)) {
                        var c = parseFloat(this, 10);
                        return ("number" == typeof a && c < a || "number" == typeof b && c > b ? !1 : !0)
                    }
                    return ! 1
                },
                isDate: function() {
                    var a = this.match(n.isDate);
                    if (a) {
                        var b = a[1].toInt(),
                        c = a[2].toInt() - 1,
                        a = a[3].toInt(),
                        d = new Date(b, c, a);
                        if (d.getFullYear() == b && d.getMonth() == c && d.getDate() == a) return ! 0
                    }
                    return ! 1
                },
                isDateTime: function() {
                    var a = this.match(n.isDateTime);
                    if (a) {
                        var b = a[1].toInt(),
                        c = a[2].toInt() - 1,
                        d = a[3].toInt(),
                        e = (a[4] || "").toInt() || 0,
                        f = (a[5] || "").toInt() || 0,
                        a = (a[6] || "").toInt() || 0,
                        g = new Date(b, c, d, e, f, a);
                        if (g.getFullYear() == b && g.getMonth() == c && g.getDate() == d && g.getHours() == e && g.getMinutes() == f && g.getSeconds() == a) return ! 0
                    }
                    return ! 1
                },
                toReString: function() {
                    var a = {
                        "\r": "\\r",
                        "\n": "\\n",
                        "\t": "\\t"
                    };
                    return this.replace(n.toReStringA, "\\$1").replace(n.toReStringB,
                    function(b) {
                        return a[b]
                    })
                },
                toInt: function() {
                    return parseInt(this.replace(n.toIntFix, ""), 10)
                },
                toBool: function() {
                    return (/^([tT]rue|1)$/).test(this)
                },
                toDate: function() {
                    var a = this.match(n.toDate);
                    if (a) {
                        var b = a[1].toInt(),
                        c = a[2].toInt() - 1,
                        a = a[3].toInt(),
                        d = new Date(b, c, a);
                        if (d.getFullYear() == b && d.getMonth() == c && d.getDate() == a) return d
                    }
                    return null
                },
                toDateTime: function() {
                    var a = this.match(n.toDateTime);
                    if (a) {
                        var b = a[1].toInt(),
                        c = a[2].toInt() - 1,
                        d = a[3].toInt(),
                        e = (a[5] || "").toInt() || 0,
                        f = (a[6] || "").toInt() || 0,
                        a = (a[7] || "").toInt() || 0,
                        g = new Date(b, c, d, e, f, a);
                        if (g.getFullYear() == b && g.getMonth() == c && g.getDate() == d && g.getHours() == e && g.getMinutes() == f && g.getSeconds() == a) return g
                    }
                    return null
                },
                _wrap: function(a) {
                    return (a ? "<" + a + ">" + this + "</" + a + ">": this)
                }
            });
            cQuery.extend(!1, Number.prototype, {
                toCurString: function(a) {
                    for (var b = this.toFixed((arguments.length ? a: 2)), c = n.toCurStringA; c.test(b);) b = b.replace(c, "$1,$2");
                    return b.replace(n.toCurStringB, "$10.")
                }
            });
            cQuery.extend(!1, Array.prototype, {
                unique: function() {
                    if (this.length) for (var a = 0,
                    b = this.length; a < b; a++) for (var c = a + 1; c < b; c++) this[a] === this[c] && (this.splice(c, 1), c--, b--);
                    return this
                },
                each: Array.prototype.forEach ||
                function(a, b) {
                    for (var c = 0,
                    d = this.length; c < d; c++) a.call(b, this[c], c, this);
                    return this
                },
                map: function(a, b) {
                    for (var c = [], d = 0, e = 0, f = this.length; e < f; e++) c[d++] = a.call(b, this[e], e, this);
                    return c
                },
                filter: function(a, b) {
                    for (var c = [], d = 0, e = 0, f = this.length; e < f; e++) {
                        var g = this[e]; ! 0 === a.call(b, g, e, this) && (c[d++] = g)
                    }
                    return c
                },
                indexOf: function(a, b) {
                    var c = this.length;
                    b = Number(b) || 0;
                    b = (0 > b ? Math.ceil(b) : Math.floor(b));
                    for (0 > b && (b += c); b < c; b++) if (this[b] === a) return b;
                    return - 1
                }
            });
            cQuery.extend(!1, Date.prototype, {
                addYears: function(a) {
                    var b = new Date( + this);
                    b.setYear(b.getFullYear() + a);
                    return b
                },
                addMonths: function(a) {
                    var b = new Date( + this);
                    b.setMonth(b.getMonth() + a);
                    return b
                },
                addDays: function(a) {
                    var b = new Date( + this);
                    b.setDate(b.getDate() + a);
                    return b
                },
                addHours: function(a) {
                    var b = new Date( + this);
                    b.setHours(b.getHours() + a);
                    return b
                },
                addMinutes: function(a) {
                    var b = new Date( + this);
                    b.setMinutes(b.getMinutes() + a);
                    return b
                },
                addSeconds: function(a) {
                    var b = new Date( + this);
                    b.setSeconds(b.getSeconds() + a);
                    return b
                },
                toISOString: function() {
                    return this.getUTCFullYear() + "-" + ("00" + (this.getUTCMonth() + 1)).slice( - 2) + "-" + ("00" + this.getUTCDate()).slice( - 2) + "T" + ("00" + this.getUTCHours()).slice( - 2) + ":" + ("00" + this.getUTCMinutes()).slice( - 2) + ":" + ("00" + this.getUTCSeconds()).slice( - 2) + "Z"
                },
                toDate: function() {
                    return new Date(this.getFullYear(), this.getMonth(), this.getDate())
                },
                toStdDateString: function() {
                    return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate()
                },
                toStdDateTimeString: function() {
                    return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + " " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds()
                },
                toEngDateString: function() {
                    return "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[this.getMonth()] + "-" + this.getDate() + "-" + this.getFullYear()
                },
                toFormatString: function(a) {
                    var b = {
                        y: this.getFullYear(),
                        M: this.getMonth() + 1,
                        d: this.getDate(),
                        h: this.getHours(),
                        m: this.getMinutes(),
                        s: this.getSeconds(),
                        S: this.getMilliseconds()
                    },
                    c = {
                        y: 2
                    },
                    d;
                    for (d in b) ! b.hasOwnProperty(d) || d in c || (c[d] = b[d].toString().length);
                    return a.replace(n.toFormatString,
                    function(a, d) {
                        var g = b[d],
                        h = Math.max(a.length, c[d]);
                        return ("0".repeat(h) + g).slice( - h)
                    })
                }
            });
            cQuery.extend(!1, Function.prototype, {
                bind: function(a) {
                    var b = this,
                    c = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        return b.apply(a, c.concat(Array.prototype.slice.call(arguments, 0)))
                    }
                },
                pass: function() {
                    var a = this,
                    b = Array.prototype.slice.call(arguments, 0);
                    return function() {
                        return a.apply(this, b.concat(Array.prototype.slice.call(arguments, 0)))
                    }
                },
                delay: function(a) {
                    var b = setTimeout(this.wrap(), a);
                    b.clear = function() {
                        clearTimeout(b)
                    };
                    return b
                },
                repeat: function(a) {
                    var b = setInterval(this.wrap(), a);
                    b.clear = function() {
                        clearInterval(b)
                    };
                    return b
                },
                wrap: function() {
                    if (cQuery.browser.isIE) return this;
                    var a = this;
                    return function() {
                        try {
                            return a.apply(this)
                        } catch(b) {
                            return cQuery.error(b),
                            null
                        }
                    }
                },
                run: function() {
                    this.wrap().apply(this)
                }
            });
            cQuery.run = function() {
                for (var a = arguments,
                b = 0; b < a.length; b++) switch (cQuery.type(a[b])) {
                case "function":
                    a[b].run();
                    break;
                case "string":
                    (function() {
                        var c = new Function(a[b]);
                        c.call(c)
                    }).run();
                    break;
                case "array":
                    (function() {
                        if (a[b].length) {
                            var c = new Function(a[b].length - 1);
                            c.apply(c, a[b].slice(0, -1))
                        }
                    }).run()
                }
            };
            try {
                window.replace = function() {
                    return ""
                },
                function() {
                    function a() {
                        var a = "{}";
                        if ("userDataBehavior" == u) {
                            s.load("jStorage");
                            try {
                                a = s.getAttribute("jStorage")
                            } catch(b) {}
                            try {
                                z = s.getAttribute("jStorage_update")
                            } catch(c) {}
                            n.jStorage = a
                        }
                        e();
                        h();
                        k()
                    }
                    function b() {
                        var b;
                        clearTimeout(w);
                        w = setTimeout(function() {
                            if ("localStorage" == u || "globalStorage" == u) b = n.jStorage_update;
                            else if ("userDataBehavior" == u) {
                                s.load("jStorage");
                                try {
                                    b = s.getAttribute("jStorage_update")
                                } catch(d) {}
                            }
                            if (b && b != z) {
                                z = b;
                                var e = p.parse(p.stringify(m.__jstorage_meta.CRC32)),
                                f;
                                a();
                                f = p.parse(p.stringify(m.__jstorage_meta.CRC32));
                                var g, h = [],
                                k = [];
                                for (g in e) e.hasOwnProperty(g) && ((f[g] ? e[g] != f[g] && "2." == String(e[g]).substr(0, 2) && h.push(g) : k.push(g)));
                                for (g in f) f.hasOwnProperty(g) && (e[g] || h.push(g));
                                c(h, "updated");
                                c(k, "deleted")
                            }
                        },
                        25)
                    }
                    function c(a, b) {
                        a = [].concat(a || []);
                        if ("flushed" == b) {
                            a = [];
                            for (var c in v) v.hasOwnProperty(c) && a.push(c);
                            b = "deleted"
                        }
                        c = 0;
                        for (var d = a.length; c < d; c++) {
                            if (v[a[c]]) for (var e = 0,
                            f = v[a[c]].length; e < f; e++) v[a[c]][e](a[c], b);
                            if (v["*"]) for (e = 0, f = v["*"].length; e < f; e++) v["*"][e](a[c], b)
                        }
                    }
                    function d() {
                        var a = ( + new Date).toString(); ("localStorage" == u || "globalStorage" == u ? n.jStorage_update = a: "userDataBehavior" == u && (s.setAttribute("jStorage_update", a), s.save("jStorage")));
                        b()
                    }
                    function e() {
                        if (n.jStorage) try {
                            m = p.parse(String(n.jStorage))
                        } catch(a) {
                            n.jStorage = "{}"
                        } else n.jStorage = "{}";
                        y = (n.jStorage ? String(n.jStorage).length: 0);
                        m.__jstorage_meta || (m.__jstorage_meta = {});
                        m.__jstorage_meta.CRC32 || (m.__jstorage_meta.CRC32 = {})
                    }
                    function f() {
                        if (m.__jstorage_meta.PubSub) {
                            for (var a = +new Date - 2E3,
                            b = 0,
                            c = m.__jstorage_meta.PubSub.length; b < c; b++) if (m.__jstorage_meta.PubSub[b][0] <= a) {
                                m.__jstorage_meta.PubSub.splice(b, m.__jstorage_meta.PubSub.length - b);
                                break
                            }
                            m.__jstorage_meta.PubSub.length || delete m.__jstorage_meta.PubSub
                        }
                        try {
                            n.jStorage = p.stringify(m),
                            s && (s.setAttribute("jStorage", n.jStorage), s.save("jStorage")),
                            y = (n.jStorage ? String(n.jStorage).length: 0)
                        } catch(d) {}
                    }
                    function g(a) {
                        if (!a || "string" != typeof a && "number" != typeof a) throw new TypeError("Key name must be string or numeric");
                        if ("__jstorage_meta" == a) throw new TypeError("Reserved key name");
                        return ! 0
                    }
                    function h() {
                        var a, b, e, g, k = Infinity,
                        l = !1,
                        n = [];
                        clearTimeout(E);
                        if (m.__jstorage_meta && "object" == typeof m.__jstorage_meta.TTL) {
                            a = +new Date;
                            e = m.__jstorage_meta.TTL;
                            g = m.__jstorage_meta.CRC32;
                            for (b in e) e.hasOwnProperty(b) && ((e[b] <= a ? (delete e[b], delete g[b], delete m[b], l = !0, n.push(b)) : e[b] < k && (k = e[b])));
                            Infinity != k && (E = setTimeout(h, k - a));
                            l && (f(), d(), c(n, "deleted"))
                        }
                    }
                    function k() {
                        var a;
                        if (m.__jstorage_meta.PubSub) {
                            var b, c = C;
                            for (a = m.__jstorage_meta.PubSub.length - 1; 0 <= a; a--) if (b = m.__jstorage_meta.PubSub[a], b[0] > C) {
                                var c = b[0],
                                d = b[1];
                                b = b[2];
                                if (Z[d]) for (var e = 0,
                                f = Z[d].length; e < f; e++) Z[d][e](d, p.parse(p.stringify(b)))
                            }
                            C = c
                        }
                    }
                    var l, p = {
                        parse: cQuery.parseJSON,
                        stringify: cQuery.stringifyJSON
                    },
                    m = {
                        __jstorage_meta: {
                            CRC32: {}
                        }
                    },
                    n = {
                        jStorage: "{}"
                    },
                    s = null,
                    y = 0,
                    u = !1,
                    v = {},
                    w = !1,
                    z = 0,
                    Z = {},
                    C = +new Date,
                    E,
                    D = {
                        isXML: function(a) {
                            return ((a = ((a ? a.ownerDocument || a: 0)).documentElement) ? "HTML" !== a.nodeName: !1)
                        },
                        encode: function(a) {
                            if (!this.isXML(a)) return ! 1;
                            try {
                                return (new XMLSerializer).serializeToString(a)
                            } catch(b) {
                                try {
                                    return a.xml
                                } catch(c) {}
                            }
                            return ! 1
                        },
                        decode: function(a) {
                            var b = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject &&
                            function(a) {
                                var b = new ActiveXObject("Microsoft.XMLDOM");
                                b.async = "false";
                                b.loadXML(a);
                                return b
                            };
                            if (!b) return ! 1;
                            a = b.call("DOMParser" in window && new DOMParser || window, a, "text/xml");
                            return (this.isXML(a) ? a: !1)
                        }
                    };
                    l = {
                        version: "0.4.3",
                        set: function(a, b, d) {
                            g(a);
                            d = d || {};
                            if ("undefined" == typeof b) return this.deleteKey(a),
                            b;
                            if (D.isXML(b)) b = {
                                _is_xml: !0,
                                xml: D.encode(b)
                            };
                            else {
                                if ("function" == typeof b) return;
                                b && "object" == typeof b && (b = p.parse(p.stringify(b)))
                            }
                            m[a] = b;
                            for (var e = m.__jstorage_meta.CRC32,
                            f = p.stringify(b), h = f.length, k = 2538058380 ^ h, l = 0, n; 4 <= h;) n = f.charCodeAt(l) & 255 | (f.charCodeAt(++l) & 255) << 8 | (f.charCodeAt(++l) & 255) << 16 | (f.charCodeAt(++l) & 255) << 24,
                            n = 1540483477 * (n & 65535) + ((1540483477 * (n >>> 16) & 65535) << 16),
                            n ^= n >>> 24,
                            n = 1540483477 * (n & 65535) + ((1540483477 * (n >>> 16) & 65535) << 16),
                            k = 1540483477 * (k & 65535) + ((1540483477 * (k >>> 16) & 65535) << 16) ^ n,
                            h -= 4,
                            ++l;
                            switch (h) {
                            case 3:
                                k ^= (f.charCodeAt(l + 2) & 255) << 16;
                            case 2:
                                k ^= (f.charCodeAt(l + 1) & 255) << 8;
                            case 1:
                                k ^= f.charCodeAt(l) & 255,
                                k = 1540483477 * (k & 65535) + ((1540483477 * (k >>> 16) & 65535) << 16)
                            }
                            k ^= k >>> 13;
                            k = 1540483477 * (k & 65535) + ((1540483477 * (k >>> 16) & 65535) << 16);
                            e[a] = "2." + ((k ^ k >>> 15) >>> 0);
                            this.setTTL(a, d.TTL || 0);
                            c(a, "updated");
                            return b
                        },
                        get: function(a, b) {
                            g(a);
                            return (a in m ? (m[a] && "object" == typeof m[a] && m[a]._is_xml ? D.decode(m[a].xml) : m[a]) : ("undefined" == typeof b ? null: b))
                        },
                        deleteKey: function(a) {
                            g(a);
                            return (a in m ? (delete m[a], "object" == typeof m.__jstorage_meta.TTL && a in m.__jstorage_meta.TTL && delete m.__jstorage_meta.TTL[a], delete m.__jstorage_meta.CRC32[a], f(), d(), c(a, "deleted"), !0) : !1)
                        },
                        setTTL: function(a, b) {
                            var c = +new Date;
                            g(a);
                            b = Number(b) || 0;
                            return (a in m ? (m.__jstorage_meta.TTL || (m.__jstorage_meta.TTL = {}), (0 < b ? m.__jstorage_meta.TTL[a] = c + b: delete m.__jstorage_meta.TTL[a]), f(), h(), d(), !0) : !1)
                        },
                        getTTL: function(a) {
                            var b = +new Date;
                            g(a);
                            return (a in m && m.__jstorage_meta.TTL && m.__jstorage_meta.TTL[a] ? m.__jstorage_meta.TTL[a] - b || 0 : 0)
                        },
                        flush: function() {
                            m = {
                                __jstorage_meta: {
                                    CRC32: {}
                                }
                            };
                            f();
                            d();
                            c(null, "flushed");
                            return ! 0
                        },
                        storageObj: function() {
                            function a() {}
                            a.prototype = m;
                            return new a
                        },
                        index: function() {
                            var a = [],
                            b;
                            for (b in m) m.hasOwnProperty(b) && "__jstorage_meta" != b && a.push(b);
                            return a
                        },
                        storageSize: function() {
                            return y
                        },
                        currentBackend: function() {
                            return u
                        },
                        storageAvailable: function() {
                            return !! u
                        },
                        listenKeyChange: function(a, b) {
                            g(a);
                            v[a] || (v[a] = []);
                            v[a].push(b)
                        },
                        stopListening: function(a, b) {
                            g(a);
                            if (v[a]) if (b) for (var c = v[a].length - 1; 0 <= c; c--) v[a][c] == b && v[a].splice(c, 1);
                            else delete v[a]
                        },
                        subscribe: function(a, b) {
                            a = (a || "").toString();
                            if (!a) throw new TypeError("Channel not defined");
                            Z[a] || (Z[a] = []);
                            Z[a].push(b)
                        },
                        publish: function(a, b) {
                            a = (a || "").toString();
                            if (!a) throw new TypeError("Channel not defined");
                            m.__jstorage_meta || (m.__jstorage_meta = {});
                            m.__jstorage_meta.PubSub || (m.__jstorage_meta.PubSub = []);
                            m.__jstorage_meta.PubSub.unshift([ + new Date, a, b]);
                            f();
                            d()
                        },
                        reInit: function() {
                            a()
                        }
                    }; (function() {
                        var a = !1;
                        if ("localStorage" in window) try {
                            window.localStorage.setItem("_tmptest", "tmpval"),
                            a = !0,
                            window.localStorage.removeItem("_tmptest")
                        } catch(c) {}
                        if (a) try {
                            window.localStorage && (n = window.localStorage, u = "localStorage", z = n.jStorage_update)
                        } catch(d) {} else if ("globalStorage" in window) try {
                            window.globalStorage && (n = window.globalStorage[window.location.hostname], u = "globalStorage", z = n.jStorage_update)
                        } catch(f) {} else if (s = document.createElement("link"), s.addBehavior) {
                            s.style.behavior = "url(#default#userData)";
                            document.getElementsByTagName("head")[0].appendChild(s);
                            try {
                                s.load("jStorage")
                            } catch(g) {
                                s.setAttribute("jStorage", "{}"),
                                s.save("jStorage"),
                                s.load("jStorage")
                            }
                            a = "{}";
                            try {
                                a = s.getAttribute("jStorage")
                            } catch(l) {}
                            try {
                                z = s.getAttribute("jStorage_update")
                            } catch(m) {}
                            n.jStorage = a;
                            u = "userDataBehavior"
                        } else {
                            s = null;
                            return
                        }
                        e();
                        h(); ("localStorage" == u || "globalStorage" == u ? ("addEventListener" in window ? window.addEventListener("storage", b, !1) : document.attachEvent("onstorage", b)) : "userDataBehavior" == u && setInterval(b, 1E3));
                        k();
                        "addEventListener" in window && window.addEventListener("pageshow",
                        function(a) {
                            a.persisted && b()
                        },
                        !1)
                    })();
                    cQuery.storage = {
                        set: function(a, b, c) {
                            a = l.set(a, b);
                            "number" == cQuery.type(c) && l.setTTL(a, 6E4 * c);
                            return a
                        },
                        get: l.get,
                        remove: l.deleteKey,
                        expire: function(a, b) {
                            return l.setTTL(a, ("number" == cQuery.type(b) ? 6E4 * b: 0))
                        },
                        clear: l.flush,
                        keys: l.index,
                        size: l.storageSize,
                        isEnabled: l.storageAvailable()
                    }
                } ()
            } catch(ka) {
                cQuery.storage = {
                    set: function(a, b, c) {},
                    get: function(a) {
                        return null
                    },
                    remove: function(a) {},
                    expire: function(a, b) {},
                    clear: function() {},
                    keys: function() {
                        return []
                    },
                    size: function() {
                        return 0
                    },
                    isEnabled: !1
                },
                cQuery.error(ka)
            }
            try { (function(a, b) {
                    function c(a, b, c, d) {
                        var e, f, g, h, k; ((b ? b.ownerDocument || b: O)) !== F && aa(b);
                        b = b || F;
                        c = c || [];
                        if (!a || "string" !== typeof a) return c;
                        if (1 !== (h = b.nodeType) && 9 !== h) return [];
                        if (J && !d) {
                            if (e = xa.exec(a)) if (g = e[1]) if (9 === h) if ((f = b.getElementById(g)) && f.parentNode) {
                                if (f.id === g) return c.push(f),
                                c
                            } else return c;
                            else {
                                if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && ba(b, f) && f.id === g) return c.push(f),
                                c
                            } else {
                                if (e[2]) return Q.apply(c, b.getElementsByTagName(a)),
                                c;
                                if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return Q.apply(c, b.getElementsByClassName(g)),
                                c
                            }
                            if (x.qsa && (!H || !H.test(a))) {
                                f = e = B;
                                g = b;
                                k = 9 === h && a;
                                if (1 === h && "object" !== b.nodeName.toLowerCase()) {
                                    h = u(a); ((e = b.getAttribute("id")) ? f = e.replace(ya, "\\$&") : b.setAttribute("id", f));
                                    f = "[id='" + f + "'] ";
                                    for (g = h.length; g--;) h[g] = f + v(h[g]);
                                    g = ma.test(a) && b.parentNode || b;
                                    k = h.join(",")
                                }
                                if (k) try {
                                    return Q.apply(c, g.querySelectorAll(k)),
                                    c
                                } catch(l) {} finally {
                                    e || b.removeAttribute("id")
                                }
                            }
                        }
                        var m;
                        a: {
                            a = a.replace(fa, "$1");
                            f = u(a);
                            if (!d && 1 === f.length) {
                                e = f[0] = f[0].slice(0);
                                if (2 < e.length && "ID" === (m = e[0]).type && x.getById && 9 === b.nodeType && J && r.relative[e[1].type]) {
                                    b = (r.find.ID(m.matches[0].replace(R, S), b) || [])[0];
                                    if (!b) {
                                        m = c;
                                        break a
                                    }
                                    a = a.slice(e.shift().value.length)
                                }
                                for (h = (ga.needsContext.test(a) ? 0 : e.length); h--;) {
                                    m = e[h];
                                    if (r.relative[g = m.type]) break;
                                    if (g = r.find[g]) if (d = g(m.matches[0].replace(R, S), ma.test(e[0].type) && b.parentNode || b)) {
                                        e.splice(h, 1);
                                        a = d.length && v(e);
                                        if (!a) {
                                            Q.apply(c, d);
                                            m = c;
                                            break a
                                        }
                                        break
                                    }
                                }
                            }
                            U(a, f)(d, b, !J, c, ma.test(a));
                            m = c
                        }
                        return m
                    }
                    function d(a) {
                        return za.test(a + "")
                    }
                    function e() {
                        function a(c, d) {
                            b.push(c += " ") > r.cacheLength && delete a[b.shift()];
                            return a[c] = d
                        }
                        var b = [];
                        return a
                    }
                    function f(a) {
                        a[B] = !0;
                        return a
                    }
                    function g(a) {
                        var b = F.createElement("div");
                        try {
                            return !! a(b)
                        } catch(c) {
                            return ! 1
                        } finally {
                            b.parentNode && b.parentNode.removeChild(b)
                        }
                    }
                    function h(a, b, c) {
                        a = a.split("|");
                        var d, e = a.length;
                        for (c = (c ? null: b); e--;)(d = r.attrHandle[a[e]]) && d !== b || (r.attrHandle[a[e]] = c)
                    }
                    function k(a, b) {
                        var c = a.getAttributeNode(b);
                        return (c && c.specified ? c.value: (!0 === a[b] ? b.toLowerCase() : null))
                    }
                    function l(a, b) {
                        return a.getAttribute(b, ("type" === b.toLowerCase() ? 1 : 2))
                    }
                    function n(a) {
                        if ("input" === a.nodeName.toLowerCase()) return a.defaultValue
                    }
                    function m(a, b) {
                        var c = b && a,
                        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || qa) - (~a.sourceIndex || qa);
                        if (d) return d;
                        if (c) for (; c = c.nextSibling;) if (c === b) return - 1;
                        return (a ? 1 : -1)
                    }
                    function q(a) {
                        return function(b) {
                            return "input" === b.nodeName.toLowerCase() && b.type === a
                        }
                    }
                    function s(a) {
                        return function(b) {
                            var c = b.nodeName.toLowerCase();
                            return ("input" === c || "button" === c) && b.type === a
                        }
                    }
                    function y(a) {
                        return f(function(b) {
                            b = +b;
                            return f(function(c, d) {
                                for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                            })
                        })
                    }
                    function u(a, b) {
                        var d, e, f, g, h, k, l;
                        if (h = ra[a + " "]) return (b ? 0 : h.slice(0));
                        h = a;
                        k = [];
                        for (l = r.preFilter; h;) {
                            if (!d || (e = Aa.exec(h))) e && (h = h.slice(e[0].length) || h),
                            k.push(f = []);
                            d = !1;
                            if (e = Ba.exec(h)) d = e.shift(),
                            f.push({
                                value: d,
                                type: e[0].replace(fa, " ")
                            }),
                            h = h.slice(d.length);
                            for (g in r.filter) ! (e = ga[g].exec(h)) || l[g] && !(e = l[g](e)) || (d = e.shift(), f.push({
                                value: d,
                                type: g,
                                matches: e
                            }), h = h.slice(d.length));
                            if (!d) break
                        }
                        return (b ? h.length: (h ? c.error(a) : ra(a, k).slice(0)))
                    }
                    function v(a) {
                        for (var b = 0,
                        c = a.length,
                        d = ""; b < c; b++) d += a[b].value;
                        return d
                    }
                    function w(a, b, c) {
                        var d = b.dir,
                        e = c && "parentNode" === d,
                        f = ja++;
                        return (b.first ?
                        function(b, c, f) {
                            for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
                        }: function(b, c, g) {
                            var h, k, la, l = K + " " + f;
                            if (g) for (; b = b[d];) {
                                if ((1 === b.nodeType || e) && a(b, c, g)) return ! 0
                            } else for (; b = b[d];) if (1 === b.nodeType || e) if (la = b[B] || (b[B] = {}), (k = la[d]) && k[0] === l) {
                                if (!0 === (h = k[1]) || h === I) return ! 0 === h
                            } else if (k = la[d] = [l], k[1] = a(b, c, g) || I, !0 === k[1]) return ! 0
                        })
                    }
                    function z(a) {
                        return (1 < a.length ?
                        function(b, c, d) {
                            for (var e = a.length; e--;) if (!a[e](b, c, d)) return ! 1;
                            return ! 0
                        }: a[0])
                    }
                    function C(a, b, c, d, e) {
                        for (var f, g = [], h = 0, k = a.length, l = null != b; h < k; h++) if (f = a[h]) if (!c || c(f, d, e)) g.push(f),
                        l && b.push(h);
                        return g
                    }
                    function D(a, b, d, e, g, h) {
                        e && !e[B] && (e = D(e));
                        g && !g[B] && (g = D(g, h));
                        return f(function(f, h, k, l) {
                            var m, n, p = [],
                            q = [],
                            s = h.length,
                            A;
                            if (! (A = f)) {
                                A = b || "*";
                                for (var r = (k.nodeType ? [k] : k), u = [], v = 0, w = r.length; v < w; v++) c(A, r[v], u);
                                A = u
                            }
                            A = (!a || !f && b ? A: C(A, p, a, k, l));
                            r = (d ? (g || ((f ? a: s || e)) ? [] : h) : A);
                            d && d(A, r, k, l);
                            if (e) for (m = C(r, q), e(m, [], k, l), k = m.length; k--;) if (n = m[k]) r[q[k]] = !(A[q[k]] = n);
                            if (f) {
                                if (g || a) {
                                    if (g) {
                                        m = [];
                                        for (k = r.length; k--;)(n = r[k]) && m.push(A[k] = n);
                                        g(null, r = [], m, l)
                                    }
                                    for (k = r.length; k--;)(n = r[k]) && -1 < (m = (g ? V.call(f, n) : p[k])) && (f[m] = !(h[m] = n))
                                }
                            } else r = C((r === h ? r.splice(s, r.length) : r)),
                            (g ? g(null, h, r, l) : Q.apply(h, r))
                        })
                    }
                    function E(a) {
                        var b, c, d, e = a.length,
                        f = r.relative[a[0].type];
                        c = f || r.relative[" "];
                        for (var g = (f ? 1 : 0), h = w(function(a) {
                            return a === b
                        },
                        c, !0), k = w(function(a) {
                            return - 1 < V.call(b, a)
                        },
                        c, !0), l = [function(a, c, d) {
                            return ! f && (d || c !== ea) || (((b = c).nodeType ? h(a, c, d) : k(a, c, d)))
                        }]; g < e; g++) if (c = r.relative[a[g].type]) l = [w(z(l), c)];
                        else {
                            c = r.filter[a[g].type].apply(null, a[g].matches);
                            if (c[B]) {
                                for (d = ++g; d < e && !r.relative[a[d].type]; d++);
                                return D(1 < g && z(l), 1 < g && v(a.slice(0, g - 1).concat({
                                    value: (" " === a[g - 2].type ? "*": "")
                                })).replace(fa, "$1"), c, g < d && E(a.slice(g, d)), d < e && E(a = a.slice(d)), d < e && v(a))
                            }
                            l.push(c)
                        }
                        return z(l)
                    }
                    function P(a, b) {
                        var d = 0,
                        e = 0 < b.length,
                        g = 0 < a.length,
                        h = function(f, h, k, l, m) {
                            var n, p, q = [],
                            s = 0,
                            A = "0",
                            u = f && [],
                            v = null != m,
                            w = ea,
                            y = f || g && r.find.TAG("*", m && h.parentNode || h),
                            x = K += (null == w ? 1 : Math.random() || 0.1);
                            for (v && (ea = h !== F && h, I = d); null != (m = y[A]); A++) {
                                if (g && m) {
                                    for (n = 0; p = a[n++];) if (p(m, h, k)) {
                                        l.push(m);
                                        break
                                    }
                                    v && (K = x, I = ++d)
                                }
                                e && ((m = !p && m) && s--, f && u.push(m))
                            }
                            s += A;
                            if (e && A !== s) {
                                for (n = 0; p = b[n++];) p(u, q, h, k);
                                if (f) {
                                    if (0 < s) for (; A--;) u[A] || q[A] || (q[A] = oa.call(l));
                                    q = C(q)
                                }
                                Q.apply(l, q);
                                v && !f && 0 < q.length && 1 < s + b.length && c.uniqueSort(l)
                            }
                            v && (K = x, ea = w);
                            return u
                        };
                        return (e ? f(h) : h)
                    }
                    function M() {}
                    var G, x, I, r, N, Y, U, ea, W, aa, F, L, J, H, X, ha, ba, B = "sizzle" + -new Date,
                    O = a.document,
                    K = 0,
                    ja = 0,
                    sa = e(),
                    ra = e(),
                    ta = e(),
                    ca = !1,
                    ia = function() {
                        return 0
                    },
                    da = typeof b,
                    qa = -2147483648,
                    ka = {}.hasOwnProperty,
                    T = [],
                    oa = T.pop,
                    pa = T.push,
                    Q = T.push,
                    ua = T.slice,
                    V = T.indexOf ||
                    function(a) {
                        for (var b = 0,
                        c = this.length; b < c; b++) if (this[b] === a) return b;
                        return - 1
                    },
                    va = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
                    wa = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + va + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
                    na = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + wa.replace(3, 8) + ")*)|.*)\\)|)",
                    fa = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                    Aa = (/^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/),
                    Ba = (/^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/),
                    ma = (/[\x20\t\r\n\f]*[+~]/),
                    Ca = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*)[\\x20\\t\\r\\n\\f]*\\]", "g"),
                    Da = RegExp(na),
                    Ea = RegExp("^" + va + "$"),
                    ga = {
                        ID: (/^#((?:\\.|[\w-]|[^\x00-\xa0])+)/),
                        CLASS: (/^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/),
                        TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + wa),
                        PSEUDO: RegExp("^" + na),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                        bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
                        needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                    },
                    za = (/^[^{]+\{\s*\[native \w/),
                    xa = (/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/),
                    Fa = (/^(?:input|select|textarea|button)$/i),
                    Ga = (/^h\d$/i),
                    ya = (/'|\\/g),
                    R = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
                    S = function(a, b, c) {
                        a = "0x" + b - 65536;
                        return (a !== a || c ? b: (0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)))
                    };
                    try {
                        Q.apply(T = ua.call(O.childNodes), O.childNodes),
                        T[O.childNodes.length].nodeType
                    } catch(Ha) {
                        Q = {
                            apply: (T.length ?
                            function(a, b) {
                                pa.apply(a, ua.call(b))
                            }: function(a, b) {
                                for (var c = a.length,
                                d = 0; a[c++] = b[d++];);
                                a.length = c - 1
                            })
                        }
                    }
                    Y = c.isXML = function(a) {
                        return ((a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName: !1)
                    };
                    x = c.support = {};
                    aa = c.setDocument = function(a) {
                        var b = (a ? a.ownerDocument || a: O);
                        if (b === F || 9 !== b.nodeType || !b.documentElement) return F;
                        F = b;
                        L = b.documentElement;
                        J = !Y(b);
                        x.attributes = g(function(a) {
                            a.innerHTML = "<a href='#'></a>";
                            h("type|href|height|width", l, "#" === a.firstChild.getAttribute("href"));
                            h("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", k, null == a.getAttribute("disabled"));
                            a.className = "i";
                            return ! a.getAttribute("className")
                        });
                        x.input = g(function(a) {
                            a.innerHTML = "<input>";
                            a.firstChild.setAttribute("value", "");
                            return "" === a.firstChild.getAttribute("value")
                        });
                        h("value", n, x.attributes && x.input);
                        x.getElementsByTagName = g(function(a) {
                            a.appendChild(b.createComment(""));
                            return ! a.getElementsByTagName("*").length
                        });
                        x.getElementsByClassName = g(function(a) {
                            a.innerHTML = "<div class='a'></div><div class='a i'></div>";
                            a.firstChild.className = "i";
                            return 2 === a.getElementsByClassName("i").length
                        });
                        x.getById = g(function(a) {
                            L.appendChild(a).id = B;
                            return ! b.getElementsByName || !b.getElementsByName(B).length
                        }); (x.getById ? (r.find.ID = function(a, b) {
                            if (typeof b.getElementById !== da && J) {
                                var c = b.getElementById(a);
                                return (c && c.parentNode ? [c] : [])
                            }
                        },
                        r.filter.ID = function(a) {
                            var b = a.replace(R, S);
                            return function(a) {
                                return a.getAttribute("id") === b
                            }
                        }) : (delete r.find.ID, r.filter.ID = function(a) {
                            var b = a.replace(R, S);
                            return function(a) {
                                return (a = typeof a.getAttributeNode !== da && a.getAttributeNode("id")) && a.value === b
                            }
                        }));
                        r.find.TAG = (x.getElementsByTagName ?
                        function(a, b) {
                            if (typeof b.getElementsByTagName !== da) return b.getElementsByTagName(a)
                        }: function(a, b) {
                            var c, d = [],
                            e = 0,
                            f = b.getElementsByTagName(a);
                            if ("*" === a) {
                                for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                                return d
                            }
                            return f
                        });
                        r.find.CLASS = x.getElementsByClassName &&
                        function(a, b) {
                            if (typeof b.getElementsByClassName !== da && J) return b.getElementsByClassName(a)
                        };
                        X = [];
                        H = [];
                        if (x.qsa = d(b.querySelectorAll)) g(function(a) {
                            a.innerHTML = "<select><option selected=''></option></select>";
                            a.querySelectorAll("[selected]").length || H.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                            a.querySelectorAll(":checked").length || H.push(":checked")
                        }),
                        g(function(a) {
                            var c = b.createElement("input");
                            c.setAttribute("type", "hidden");
                            a.appendChild(c).setAttribute("t", "");
                            a.querySelectorAll("[t^='']").length && H.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                            a.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled");
                            a.querySelectorAll("*,:x");
                            H.push(",.*:")
                        }); (x.matchesSelector = d(ha = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && g(function(a) {
                            x.disconnectedMatch = ha.call(a, "div");
                            ha.call(a, "[s!='']:x");
                            X.push("!=", na)
                        });
                        H = H.length && RegExp(H.join("|"));
                        X = X.length && RegExp(X.join("|"));
                        ba = (d(L.contains) || L.compareDocumentPosition ?
                        function(a, b) {
                            var c = (9 === a.nodeType ? a.documentElement: a),
                            d = b && b.parentNode;
                            return a === d || !!(d && 1 === d.nodeType && ((c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16)))
                        }: function(a, b) {
                            if (b) for (; b = b.parentNode;) if (b === a) return ! 0;
                            return ! 1
                        });
                        x.sortDetached = g(function(a) {
                            return a.compareDocumentPosition(b.createElement("div")) & 1
                        });
                        ia = (L.compareDocumentPosition ?
                        function(a, c) {
                            if (a === c) return ca = !0,
                            0;
                            var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                            return (d ? (d & 1 || !x.sortDetached && c.compareDocumentPosition(a) === d ? (a === b || ba(O, a) ? -1 : (c === b || ba(O, c) ? 1 : (W ? V.call(W, a) - V.call(W, c) : 0))) : (d & 4 ? -1 : 1)) : (a.compareDocumentPosition ? -1 : 1))
                        }: function(a, c) {
                            var d, e = 0;
                            d = a.parentNode;
                            var f = c.parentNode,
                            g = [a],
                            h = [c];
                            if (a === c) return ca = !0,
                            0;
                            if (!d || !f) return (a === b ? -1 : (c === b ? 1 : (d ? -1 : (f ? 1 : (W ? V.call(W, a) - V.call(W, c) : 0)))));
                            if (d === f) return m(a, c);
                            for (d = a; d = d.parentNode;) g.unshift(d);
                            for (d = c; d = d.parentNode;) h.unshift(d);
                            for (; g[e] === h[e];) e++;
                            return (e ? m(g[e], h[e]) : (g[e] === O ? -1 : (h[e] === O ? 1 : 0)))
                        });
                        return b
                    };
                    c.matches = function(a, b) {
                        return c(a, null, null, b)
                    };
                    c.matchesSelector = function(a, b) { (a.ownerDocument || a) !== F && aa(a);
                        b = b.replace(Ca, "='$1']");
                        if (x.matchesSelector && J && !(X && X.test(b) || H && H.test(b))) try {
                            var d = ha.call(a, b);
                            if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                        } catch(e) {}
                        return 0 < c(b, F, null, [a]).length
                    };
                    c.contains = function(a, b) { (a.ownerDocument || a) !== F && aa(a);
                        return ba(a, b)
                    };
                    c.attr = function(a, c) { (a.ownerDocument || a) !== F && aa(a);
                        var d = r.attrHandle[c.toLowerCase()],
                        d = (d && ka.call(r.attrHandle, c.toLowerCase()) ? d(a, c, !J) : b);
                        return (d === b ? (x.attributes || !J ? a.getAttribute(c) : ((d = a.getAttributeNode(c)) && d.specified ? d.value: null)) : d)
                    };
                    c.error = function(a) {
                        throw Error("Syntax error, unrecognized expression: " + a);
                    };
                    c.uniqueSort = function(a) {
                        var b, c = [],
                        d = 0,
                        e = 0;
                        ca = !x.detectDuplicates;
                        W = !x.sortStable && a.slice(0);
                        a.sort(ia);
                        if (ca) {
                            for (; b = a[e++];) b === a[e] && (d = c.push(e));
                            for (; d--;) a.splice(c[d], 1)
                        }
                        return a
                    };
                    N = c.getText = function(a) {
                        var b, c = "",
                        d = 0;
                        if (b = a.nodeType) if (1 === b || 9 === b || 11 === b) {
                            if ("string" === typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += N(a)
                        } else {
                            if (3 === b || 4 === b) return a.nodeValue
                        } else for (; b = a[d]; d++) c += N(b);
                        return c
                    };
                    r = c.selectors = {
                        cacheLength: 50,
                        createPseudo: f,
                        match: ga,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(a) {
                                a[1] = a[1].replace(R, S);
                                a[3] = (a[4] || a[5] || "").replace(R, S);
                                "~=" === a[2] && (a[3] = " " + a[3] + " ");
                                return a.slice(0, 4)
                            },
                            CHILD: function(a) {
                                a[1] = a[1].toLowerCase(); ("nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +((a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3]))), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]));
                                return a
                            },
                            PSEUDO: function(a) {
                                var c, d = !a[5] && a[2];
                                if (ga.CHILD.test(a[0])) return null; (a[3] && a[4] !== b ? a[2] = a[4] : d && Da.test(d) && (c = u(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)));
                                return a.slice(0, 3)
                            }
                        },
                        filter: {
                            TAG: function(a) {
                                var b = a.replace(R, S).toLowerCase();
                                return ("*" === a ?
                                function() {
                                    return ! 0
                                }: function(a) {
                                    return a.nodeName && a.nodeName.toLowerCase() === b
                                })
                            },
                            CLASS: function(a) {
                                var b = sa[a + " "];
                                return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && sa(a,
                                function(a) {
                                    return b.test("string" === typeof a.className && a.className || typeof a.getAttribute !== da && a.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(a, b, d) {
                                return function(e) {
                                    e = c.attr(e, a);
                                    if (null == e) return "!=" === b;
                                    if (!b) return ! 0;
                                    e += "";
                                    return ("=" === b ? e === d: ("!=" === b ? e !== d: ("^=" === b ? d && 0 === e.indexOf(d) : ("*=" === b ? d && -1 < e.indexOf(d) : ("$=" === b ? d && e.slice( - d.length) === d: ("~=" === b ? -1 < (" " + e + " ").indexOf(d) : ("|=" === b ? e === d || e.slice(0, d.length + 1) === d + "-": !1)))))))
                                }
                            },
                            CHILD: function(a, b, c, d, e) {
                                var f = "nth" !== a.slice(0, 3),
                                g = "last" !== a.slice( - 4),
                                h = "of-type" === b;
                                return (1 === d && 0 === e ?
                                function(a) {
                                    return !! a.parentNode
                                }: function(b, c, k) {
                                    var l, m, n, p, q;
                                    c = (f !== g ? "nextSibling": "previousSibling");
                                    var s = b.parentNode,
                                    r = h && b.nodeName.toLowerCase();
                                    k = !k && !h;
                                    if (s) {
                                        if (f) {
                                            for (; c;) {
                                                for (m = b; m = m[c];) if ((h ? m.nodeName.toLowerCase() === r: 1 === m.nodeType)) return ! 1;
                                                q = c = "only" === a && !q && "nextSibling"
                                            }
                                            return ! 0
                                        }
                                        q = [(g ? s.firstChild: s.lastChild)];
                                        if (g && k) for (k = s[B] || (s[B] = {}), l = k[a] || [], p = l[0] === K && l[1], n = l[0] === K && l[2], m = p && s.childNodes[p]; m = ++p && m && m[c] || (n = p = 0) || q.pop();) {
                                            if (1 === m.nodeType && ++n && m === b) {
                                                k[a] = [K, p, n];
                                                break
                                            }
                                        } else if (k && (l = (b[B] || (b[B] = {}))[a]) && l[0] === K) n = l[1];
                                        else for (; (m = ++p && m && m[c] || (n = p = 0) || q.pop()) && (((h ? m.nodeName.toLowerCase() !== r: 1 !== m.nodeType)) || !++n || (k && ((m[B] || (m[B] = {}))[a] = [K, n]), m !== b)););
                                        n -= e;
                                        return n === d || 0 === n % d && 0 <= n / d
                                    }
                                })
                            },
                            PSEUDO: function(a, b) {
                                var d, e = r.pseudos[a] || r.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                                return (e[B] ? e(b) : (1 < e.length ? (d = [a, a, "", b], (r.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function(a, c) {
                                    for (var d, f = e(a, b), g = f.length; g--;) d = V.call(a, f[g]),
                                    a[d] = !(c[d] = f[g])
                                }) : function(a) {
                                    return e(a, 0, d)
                                })) : e))
                            }
                        },
                        pseudos: {
                            not: f(function(a) {
                                var b = [],
                                c = [],
                                d = U(a.replace(fa, "$1"));
                                return (d[B] ? f(function(a, b, c, e) {
                                    e = d(a, null, e, []);
                                    for (var f = a.length; f--;) if (c = e[f]) a[f] = !(b[f] = c)
                                }) : function(a, e, f) {
                                    b[0] = a;
                                    d(b, null, f, c);
                                    return ! c.pop()
                                })
                            }),
                            has: f(function(a) {
                                return function(b) {
                                    return 0 < c(a, b).length
                                }
                            }),
                            contains: f(function(a) {
                                return function(b) {
                                    return - 1 < (b.textContent || b.innerText || N(b)).indexOf(a)
                                }
                            }),
                            lang: f(function(a) {
                                Ea.test(a || "") || c.error("unsupported lang: " + a);
                                a = a.replace(R, S).toLowerCase();
                                return function(b) {
                                    var c;
                                    do
                                    if (c = (J ? b.lang: b.getAttribute("xml:lang") || b.getAttribute("lang"))) return c = c.toLowerCase(),
                                    c === a || 0 === c.indexOf(a + "-");
                                    while ((b = b.parentNode) && 1 === b.nodeType);
                                    return ! 1
                                }
                            }),
                            target: function(b) {
                                var c = a.location && a.location.hash;
                                return c && c.slice(1) === b.id
                            },
                            root: function(a) {
                                return a === L
                            },
                            focus: function(a) {
                                return a === F.activeElement && (!F.hasFocus || F.hasFocus()) && !(!a.type && !a.href && !~a.tabIndex)
                            },
                            enabled: function(a) {
                                return ! 1 === a.disabled
                            },
                            disabled: function(a) {
                                return ! 0 === a.disabled
                            },
                            checked: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return "input" === b && !!a.checked || "option" === b && !!a.selected
                            },
                            selected: function(a) {
                                a.parentNode && a.parentNode.selectedIndex;
                                return ! 0 === a.selected
                            },
                            empty: function(a) {
                                for (a = a.firstChild; a; a = a.nextSibling) if ("@" < a.nodeName || 3 === a.nodeType || 4 === a.nodeType) return ! 1;
                                return ! 0
                            },
                            parent: function(a) {
                                return ! r.pseudos.empty(a)
                            },
                            header: function(a) {
                                return Ga.test(a.nodeName)
                            },
                            input: function(a) {
                                return Fa.test(a.nodeName)
                            },
                            button: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return "input" === b && "button" === a.type || "button" === b
                            },
                            text: function(a) {
                                var b;
                                return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                            },
                            first: y(function() {
                                return [0]
                            }),
                            last: y(function(a, b) {
                                return [b - 1]
                            }),
                            eq: y(function(a, b, c) {
                                return [(0 > c ? c + b: c)]
                            }),
                            even: y(function(a, b) {
                                for (var c = 0; c < b; c += 2) a.push(c);
                                return a
                            }),
                            odd: y(function(a, b) {
                                for (var c = 1; c < b; c += 2) a.push(c);
                                return a
                            }),
                            lt: y(function(a, b, c) {
                                for (b = (0 > c ? c + b: c); 0 <= --b;) a.push(b);
                                return a
                            }),
                            gt: y(function(a, b, c) {
                                for (c = (0 > c ? c + b: c); ++c < b;) a.push(c);
                                return a
                            })
                        }
                    };
                    for (G in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[G] = q(G);
                    for (G in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[G] = s(G);
                    U = c.compile = function(a, b) {
                        var c, d = [],
                        e = [],
                        f = ta[a + " "];
                        if (!f) {
                            b || (b = u(a));
                            for (c = b.length; c--;) f = E(b[c]),
                            (f[B] ? d.push(f) : e.push(f));
                            f = ta(a, P(e, d))
                        }
                        return f
                    };
                    r.pseudos.nth = r.pseudos.eq;
                    M.prototype = r.filters = r.pseudos;
                    r.setFilters = new M;
                    x.sortStable = B.split("").sort(ia).join("") === B;
                    aa(); [0, 0].sort(ia);
                    x.detectDuplicates = ca; ("function" === typeof define && define.amd ? define(function() {
                        return c
                    }) : a.Sizzle = c)
                })(window)
            } catch(oa) {
                cQuery.error(oa)
            }
            cQuery.event = {
                _opt: function() {
                    return {
                        arguments: [],
                        priority: 50
                    }
                },
                _evts: {},
                _cEvts: {
                    ready: {
                        el: document.documentElement
                    }
                },
                _sort: function(a) {
                    a.sort(function(a, c) {
                        var d = a.opt.priority,
                        e = c.opt.priority;
                        return (d > e ? 1 : (d == e ? 0 : -1))
                    })
                },
                add: function(a, b, c, d) {
                    "array" === cQuery.type(a) || cQuery.isCDom(a) || (a = [a]);
                    "array" !== cQuery.type(b) && (b = [b]);
                    this._fixTypes(b);
                    if ("function" !== cQuery.type(c)) cQuery.error("event.add", "handler is not a function", {
                        els: a,
                        types: b,
                        handler: c,
                        opt: d
                    });
                    else {
                        var e, f, g, h, k;
                        d = cQuery.extend(!0, this._opt(), d);
                        for (var l = 0,
                        n = a.length; l < n; l++) {
                            e = a[l];
                            for (var m = 0,
                            q = b.length; m < q; m++) {
                                f = b[m];
                                if (g = this._cEvts[f]) g.el && (e = g.el),
                                g.type && (f = g.type);
                                g = cQuery.uid(e);
                                g = this._evts[g] = this._evts[g] || {};
                                h = {
                                    opt: d,
                                    handler: c
                                }; (g[f] ? (g = g[f], g.push(h)) : (g = g[f] = [h], (e.addEventListener ? e.addEventListener(f, this._run, !1) : (h = e["on" + f], "function" == cQuery.type(h) && g.unshift({
                                    opt: this._opt(),
                                    handler: h
                                }), e["on" + f] = this._run))));
                                this._sort(g);
                                e === window && "load" == f && cQuery.isLoaded && setTimeout(function() {
                                    k = cQuery.event.create(e, f);
                                    c.apply(e, [k].concat(d.arguments || []))
                                },
                                1)
                            }
                        }
                    }
                },
                remove: function(a, b, c) {
                    "array" === cQuery.type(a) || cQuery.isCDom(a) || (a = [a]);
                    "array" !== cQuery.type(b) && (b = [b]);
                    this._fixTypes(b);
                    var d, e, f, g, h, k = 0,
                    l = a.length;
                    a: for (; k < l; k++) {
                        d = a[k];
                        for (var n = 0,
                        m = b.length; n < m; n++) {
                            e = b[n];
                            if (f = this._cEvts[e]) f.el && (d = f.el),
                            f.type && (e = f.type);
                            f = d._uid_;
                            if (!f) continue a;
                            f = this._evts[f];
                            if (!f) continue a;
                            if (g = f[e]) {
                                for (h = g.length; h--;) g[h].handler == c && g.splice(h, 1);
                                g.length || ((d.removeEventListener ? d.removeEventListener(e, this._run, !1) : d["on" + e] = null), delete f[e])
                            }
                        }
                    }
                },
                trigger: function(a, b, c) {
                    "array" === cQuery.type(a) || cQuery.isCDom(a) || (a = [a]);
                    "array" !== cQuery.type(b) && (b = [b]);
                    this._fixTypes(b);
                    for (var d, e, f, g = 0,
                    h = a.length; g < h; g++) {
                        d = a[g];
                        for (var k = 0,
                        l = b.length; k < l; k++) {
                            e = b[k];
                            if (f = this._cEvts[e]) f.el && (d = f.el),
                            f.type && (e = f.type);
                            e = this.create(d, e);
                            this._run.call(d, e, c)
                        }
                    }
                },
                create: function(a, b) {
                    var c;
                    if (document.createEvent) {
                        c = document.createEvent("HTMLEvents");
                        c.initEvent(b, !0, !0);
                        var d = 1;
                        try {
                            cQuery.extend(c, {
                                target: a
                            }),
                            a == c.target && (d = 0)
                        } catch(e) {}
                        d && (c.skip = !0, a.dispatchEvent(c), delete c.skip)
                    } else document.createEventObject && (c = document.createEventObject(), cQuery.extend(c, {
                        srcElement: a,
                        type: b
                    }));
                    return c
                },
                debug: function(a) {
                    "array" === cQuery.type(a) || cQuery.isCDom(a) || (a = [a]);
                    var b, c;
                    cQuery.debug("-------------------- event --------------------");
                    for (var d = 0,
                    e = a.length; d < e; d++) b = a[d],
                    eld = ((c = b._uid_) ? this._evts[c] : null),
                    cQuery.debug("[" + d + "]", b, eld || "null")
                },
                clone: function(a, b, c) {
                    "array" === cQuery.type(b) || cQuery.isCDom(b) || (b = [b]);
                    var d = a._uid_;
                    if (d && (d = this._evts[d])) for (var e, f, g, h = 0,
                    k = b.length; h < k; h++) if (e = b[h], e != a) {
                        f = cQuery.uid(e);
                        g = this._evts[f] = this._evts[f] || {};
                        if (c) {
                            g = this._evts[f] = cQuery.extend(!0, g, d);
                            for (var l in g) this._sort(g[l])
                        } else {
                            for (l in g) g.hasOwnProperty(l) && ((e.removeEventListener ? e.removeEventListener(l, this._run, !1) : e["on" + l] = null));
                            g = this._evts[f] = cQuery.copy(d)
                        }
                        for (l in g) ! g.hasOwnProperty(l) || c && l in d || ((e.addEventListener ? e.addEventListener(l, this._run, !1) : (f = e["on" + l], "function" == cQuery.type(f) && typed.unshift({
                            opt: this._opt(),
                            handler: f
                        }), e["on" + l] = this._run)))
                    }
                },
                _type: function() {
                    var a = {};
                    cQuery.browser.isIOS && (a.beforeunload = "pagehide");
                    return a
                } (),
                _fixTypes: function(a) {
                    for (var b = 0,
                    c = a.length; b < c; b++) a[b] = (this._type.hasOwnProperty(a[b]) ? this._type[a[b]] : a[b])
                },
                _run: function(a, b) {
                    try {
                        if (!a || !a.skip) {
                            if (!a) {
                                var c;
                                a: {
                                    switch (this.nodeType || -1) {
                                    case - 1 : c = (setInterval in this ? this: window);
                                        break a;
                                    case 9:
                                        var d = this;
                                        break;
                                    default:
                                        d = this.ownerDocument
                                    }
                                    c = d.defaultView || d.parentWindow
                                }
                                a = c.event
                            }
                            var e = cQuery.uid(this);
                            if (e) {
                                var f = cQuery.event._evts[e];
                                if (f) {
                                    var g = f[a.type];
                                    if (g) {
                                        a = cQuery.event.fixProperty(a, this);
                                        b = b || {};
                                        var h, k, l;
                                        c = 0;
                                        for (var n = g.length; c < n; c++) {
                                            h = g[c];
                                            cQuery.extend(h.opt, b);
                                            if (cQuery.config && cQuery.config("allowDebug")) l = h.handler.apply(this, [a].concat(h.opt.arguments || []));
                                            else try {
                                                l = h.handler.apply(this, [a].concat(h.opt.arguments || []))
                                            } catch(m) {
                                                cQuery.error(m)
                                            } (k === cQuery.undefined ? k = l: !1 !== k && (k = l))
                                        }
                                        return k
                                    }
                                }
                            }
                        }
                    } catch(q) {
                        cQuery.error(q)
                    }
                },
                fixProperty: function(a, b) {
                    a.host = b;
                    a.target || (a.target = a.srcElement || document);
                    null !== a.target && 3 === a.target.nodeType && (a.target = a.target.parentNode); ! a.relatedTarget && a.fromElement && (a.relatedTarget = (a.fromElement === a.target ? a.toElement: a.fromElement));
                    if (null == a.pageX && null != a.clientX) {
                        var c = a.target.ownerDocument || document,
                        d = c.documentElement,
                        c = c.body;
                        a.pageX = a.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0);
                        a.pageY = a.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop || 0)
                    }
                    null != a.which || null == a.charCode && null == a.keyCode || (a.which = (null != a.charCode ? a.charCode: a.keyCode)); ! a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey);
                    a.which || void 0 === a.button || (a.which = (a.button & 1 ? 1 : (a.button & 2 ? 3 : (a.button & 4 ? 2 : 0))));
                    cQuery.extend(!1, a, this.fixMethod);
                    return a
                },
                fixMethod: {
                    preventDefault: function() {
                        this.returnValue = !1
                    },
                    stopPropagation: function() {
                        this.cancelBubble = !0
                    },
                    stop: function() {
                        this.preventDefault();
                        this.stopPropagation()
                    }
                }
            };
            cQuery.mod = {
                _mods: {},
                _instances: {},
                load: function(a, b, c) {
                    var d = {}; (d[a] = {})[b] = c;
                    this.multiLoad(d)
                },
                multiLoad: function(a, b) {
                    if (a) {
                        var c, d, e, f, g, h, k = [],
                        l = 0;
                        for (c in a) if (a.hasOwnProperty(c)) {
                            e = a[c]; (f = this._mods[c]) || (f = this._mods[c] = {});
                            switch (cQuery.type(e)) {
                            case "string":
                                g = e;
                                e = {};
                                e[g] = null;
                                break;
                            case "array":
                                g = e;
                                e = {};
                                h = 0;
                                for (var n = g.length; h < n; h++) e[g[h]] = null;
                                break;
                            case "object":
                                break;
                            default:
                                continue
                            }
                            for (d in e) if (g = e[d], h = f[d]) switch (h.status) {
                            case "buffer":
                                h.status = "loading";
                                g && h.callback.push(g); (cQuery.config("loadMultiMod") ? k[l++] = c + "-" + d: (l++,
                                function(a) {
                                    cQuery.loader.js(cQuery.config("modPath") + c + "-" + d + ".js", {
                                        charset: "utf-8",
                                        onload: function() {
                                            l--; ! l && b && b()
                                        }
                                    })
                                } (h)));
                                break;
                            case "loading":
                                g && h.callback.push(g);
                                break;
                            case "loaded":
                                g && g()
                            } else h = f[d] = {
                                name: c,
                                version: d,
                                status: "loading",
                                callback: (g ? [g] : [])
                            },
                            (cQuery.config("loadMultiMod") ? k[l++] = c + "-" + d: (l++,
                            function(a) {
                                cQuery.loader.js(cQuery.config("modPath") + c + "-" + d + ".js", {
                                    charset: "utf-8",
                                    onload: function() {
                                        l--; ! l && b && b()
                                    }
                                })
                            } (h)))
                        }
                        l && cQuery.config("loadMultiMod") && (k.sort(), cQuery.loader.js(cQuery.config("modPath") + k.join("_") + ".js", {
                            charset: "utf-8",
                            onload: function() {
                                b && b()
                            }
                        }))
                    }
                },
                reg: function(a) {
                    if (a) {
                        var b = this._getModOpt(a.name, a.version, !0);
                        b.status = "loaded";
                        b.init = a.init;
                        b.uninit = a.uninit;
                        b.module = a.module;
                        b.init && b.init();
                        for (var c; c = b.callback.shift();) c();
                        if (a = this._getInstanceOpt(a.name, a.version)) {
                            var d, e;
                            for (d in a) if (b = a[d].buffer) {
                                for (delete a[d].buffer; c = b.shift();) switch (c.cmd) {
                                case "new":
                                    e = this._getInstance.apply(this, c.args);
                                    break;
                                case "get":
                                    e.get.apply(e, c.args);
                                    break;
                                case "set":
                                    e.set.apply(e, c.args);
                                    break;
                                case "method":
                                    e.method.apply(e, c.args)
                                }
                                a[d] = e
                            }
                        }
                    }
                },
                _getModOpt: function(a, b, c) {
                    c === cQuery.undefined && (c = cQuery.config("modBuffer"));
                    var d = this._mods[a];
                    if (!d) if (c) d = this._mods[a] = {};
                    else return null;
                    var e = d[b];
                    if (!e) if (c) e = d[b] = {
                        name: a,
                        version: b,
                        status: "buffer",
                        callback: []
                    };
                    else return null;
                    return e
                },
                _getInstanceOpt: function(a, b) {
                    var c = this._instances[a];
                    return (c ? ((c = c[b]) ? c: null) : null)
                },
                debug: function(a) {
                    "number" !== cQuery.type(a.length) && (a = [a]);
                    var b, c;
                    cQuery.debug("--------------------  mod  --------------------");
                    for (var d = 0,
                    e = a.length; d < e; d++) {
                        b = a[d];
                        c = b._uid_;
                        var f = [],
                        g = 0,
                        h,
                        k,
                        l,
                        n;
                        if (c) for (h in this._instances) for (k in l = this._instances[h], l) n = l[k],
                        c in n && (f[g++] = n[c]);
                        cQuery.debug("[" + d + "]", b, (f.length ? f: "null"))
                    }
                },
                _destoryInstance: function(a) {
                    for (var b in a) a.hasOwnProperty(b) && delete a[b]
                },
                unreg: function(a, b) {
                    var c = this._getModOpt(a, b);
                    if (c) {
                        var d = this._getInstanceOpt(a, b),
                        e;
                        if (d) {
                            for (var f in d) e = d[f],
                            e.uninit();
                            delete this._instances[a][b];
                            cQuery.isEmptyObject(this._instances[a]) && delete this._instances[a]
                        }
                        c.uninit && c.uninit();
                        delete this._mods[a][b];
                        cQuery.isEmptyObject(this._mods[a]) && delete this._mods[a]
                    }
                },
                _getBufferInstance: function(a, b, c) {
                    return {
                        name: a,
                        version: b,
                        uid: c,
                        buffer: [{
                            cmd: "new",
                            args: arguments
                        }],
                        get: function() {
                            this.buffer.push({
                                cmd: "get",
                                args: arguments
                            });
                            return null
                        },
                        set: function() {
                            this.buffer.push({
                                cmd: "set",
                                args: arguments
                            });
                            return null
                        },
                        method: function() {
                            this.buffer.push({
                                cmd: "method",
                                args: arguments
                            });
                            return null
                        },
                        uninit: function() {
                            cQuery.mod._destoryInstance(this);
                            delete cQuery.mod._instances[a][b][c];
                            return this
                        }
                    }
                },
                _newByArray: function(a, b) {
                    var c = cQuery.uid(),
                    d = cQuery.uid();
                    cQuery.tmp[c] = a;
                    cQuery.tmp[d] = b;
                    for (var e = [], f = 0, g = b.length; f < g; f++) e[f] = "args[" + f + "]";
                    e = (new Function('var cls=cQuery.tmp["' + c + '"],args=cQuery.tmp["' + d + '"];var t=new cls(' + e.join(",") + ");return t;"))();
                    delete cQuery.tmp[c];
                    delete cQuery.tmp[d];
                    return e
                },
                _getInstance: function(a, b, c, d, e, f) {
                    var g = this._getModOpt(a, b),
                    h = Array.prototype.slice.call(arguments, 3, 5),
                    k = this._newByArray(g.module, h),
                    l = this._instances[a][b][c] || {};
                    cQuery.extend(l, {
                        name: a,
                        version: b,
                        uid: c,
                        buffer: !1,
                        callback: ("function" == cQuery.type(f) ? f: null)
                    });
                    l.set = function(c, d) {
                        var e, f, g;
                        switch (cQuery.type(c)) {
                        case "string":
                            if (!c || "_" == c[0]) {
                                cQuery.error("mod(" + a + ":" + b + ").set", "invalid property name " + c);
                                return
                            }
                            e = {};
                            e[c] = d;
                            g = Array.prototype.slice.call(arguments, 2);
                            break;
                        case "object":
                            e = c;
                            g = Array.prototype.slice.call(arguments, 1);
                            break;
                        default:
                            return
                        }
                        for (f in e) if ("_" == f[0]) cQuery.error("mod(" + a + ":" + b + ").set", "invalid property name " + f);
                        else {
                            e = e[f];
                            if (f in k) if (f + "_set" in k) {
                                if ("function" == cQuery.type(k[f + "_set"])) return k[f + "_set"].apply(k, [e].concat(g));
                                cQuery.error("mod(" + a + ":" + b + ").set", f + "_set is not a function")
                            } else cQuery.error("mod(" + a + ":" + b + ").set", "no " + f + " set permitions");
                            else cQuery.error("mod(" + a + ":" + b + ").set", f + " is not a public property");
                            break
                        }
                    };
                    l.get = function(a) {
                        if ("string" == cQuery.type(a) && a && "_" != a[0]) if (a in k) if (a + "_get" in k) {
                            if ("function" == cQuery.type(k[a + "_get"])) return k[a + "_get"].apply(k, Array.prototype.slice.call(arguments, 1));
                            cQuery.error("mod(" + g.name + ":" + g.version + ").get", a + "_set is not a function")
                        } else cQuery.error("mod(" + g.name + ":" + g.version + ").get", "no " + a + " set permitions");
                        else cQuery.error("mod(" + g.name + ":" + g.version + ").get", a + " is not a public property");
                        else cQuery.error("mod(" + g.name + ":" + g.version + ").set", "invalid property name " + a)
                    };
                    l.method = function(a) {
                        if ("string" == cQuery.type(a) && a && "_" != a[0]) if (a in k) {
                            var b = k[a];
                            if ("function" == cQuery.type(b)) return b.apply(k, Array.prototype.slice.call(arguments, 1));
                            cQuery.error("mod(" + g.name + ":" + g.version + ").method", a + " is not a function")
                        } else cQuery.error("mod(" + g.name + ":" + g.version + ").method", a + " is not a public method");
                        else cQuery.error("mod(" + g.name + ":" + g.version + ").method", "invalid method name " + property)
                    };
                    l.uninit = function() {
                        this.method("uninit");
                        cQuery.mod._destoryInstance(this);
                        delete cQuery.mod._instances[a][b][c];
                        return this
                    };
                    l.callback && l.callback.apply(l, h);
                    return l
                },
                instantiate: function(a, b, c) {
                    var d = this._getModOpt(a, b);
                    if (!d) return cQuery.error("mod(" + a + ":" + b + ").instantiate(" + c + ")", "module has not been loaded"),
                    null;
                    var e;
                    e = (a in this._instances ? this._instances[a] : this._instances[a] = {});
                    e = (b in e ? e[b] : e[b] = {});
                    if (c in e) return cQuery.error("mod(" + a + ":" + b + ").instantiate(" + c + ")", "module has already been instantiated"),
                    e[c];
                    d = ("loaded" == d.status ? this._getInstance.apply(this, arguments) : this._getBufferInstance.apply(this, arguments));
                    return e[c] = d
                }
            };
            cQuery.ajax = function(a, b) {
                return cQuery.ajax.request(a, b)
            };
            cQuery.extend(cQuery.ajax, {
                _xhrs: {},
                _uniques: {},
                _remove: function(a) {
                    a in this._xhrs && delete this._xhrs[a];
                    a in this._uniques && delete this._uniques[a]
                },
                _getXhr: function() {
                    var a = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"],
                    b;
                    try {
                        b = new XMLHttpRequest
                    } catch(c) {
                        for (var d = 0; d < a.length; d++) try {
                            b = new ActiveXObject(a[d]);
                            break
                        } catch(e) {}
                    }
                    if (b) return b;
                    cQuery.error("ajax._getXhr", "create XMLHttpRequest object failed");
                    return null
                },
                request: function(a, b) {
                    b = cQuery.extend({
                        method: cQuery.AJAX_METHOD_GET,
                        context: {},
                        escape: !1,
                        async: !0,
                        cache: !1,
                        header: {},
                        unique: "",
                        uniqueType: cQuery.AJAX_UNIQUETYPE_KEEPLAST,
                        onsuccess: cQuery.COMMON_DONOTHING,
                        onerror: cQuery.COMMON_DONOTHING,
                        onabort: cQuery.COMMON_DONOTHING
                    },
                    b);
                    var c, d, e, f;
                    switch (b.method) {
                    case cQuery.AJAX_METHOD_GET:
                    case cQuery.AJAX_METHOD_POST:
                        break;
                    default:
                        cQuery.error("ajax", "invalid method");
                        return
                    }
                    if (cQuery.isPlainObject(b.header)) {
                        switch (cQuery.type(b.context)) {
                        case "string":
                            break;
                        case "object":
                            d = [];
                            c = 0;
                            for (e in b.context) if (b.context.hasOwnProperty(e)) {
                                f = b.context[e];
                                switch (cQuery.type(f)) {
                                case "array":
                                case "object":
                                    f = cQuery.stringifyJSON(f);
                                    break;
                                case "date":
                                    f = f.toStdDateTimeString();
                                    break;
                                default:
                                    f = f.toString()
                                }
                                b.escape && (f = escape(f));
                                d[c++] = encodeURIComponent(e) + "=" + encodeURIComponent(f)
                            }
                            b.context = d.join("&");
                            break;
                        default:
                            cQuery.error("ajax", "invalid context");
                            return
                        }
                        if ("string" != cQuery.type(b.unique)) cQuery.error("ajax", "invalid unique");
                        else if ("function" != cQuery.type(b.onsuccess)) cQuery.error("ajax", "invalid onsuccess function");
                        else if ("function" != cQuery.type(b.onerror)) cQuery.error("ajax", "invalid onerror function");
                        else if ("function" != cQuery.type(b.onabort)) cQuery.error("ajax", "invalid onabort function");
                        else {
                            if (b.unique && b.unique in this._uniques) switch (b.uniqueType) {
                            case cQuery.AJAX_UNIQUETYPE_KEEPFIRST:
                                cQuery.log("ajax(" + b.unique + ")", "AJAX_UNIQUETYPE_KEEPFIRST");
                                return;
                            case cQuery.AJAX_UNIQUETYPE_KEEPLAST:
                                cQuery.log("ajax(" + b.unique + ")", "AJAX_UNIQUETYPE_KEEPLAST");
                                this._uniques[b.unique].abort();
                                break;
                            default:
                                cQuery.error("ajax", "invalid uniqueType");
                                return
                            }
                            var g = this._getXhr();
                            if (!g) return null;
                            var h = cQuery.uid();
                            this._xhrs[h] = g;
                            b.unique && (this._uniques[h] = g);
                            g.open(b.method, a || document.URL, b.async);
                            "Content-Type" in b.header || g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
                            b.cache || "If-Modified-Since" in b.header || g.setRequestHeader("If-Modified-Since", "Thu, 01 Jan 1970 00:00:00 GMT");
                            for (e in b.header) g.setRequestHeader(e, b.header[e]);
                            g.onreadystatechange = function() {
                                switch (g.readyState) {
                                case 0:
                                    cQuery.ajax._remove(h);
                                    b.onabort.call(g);
                                    break;
                                case 4:
                                    if (cQuery.ajax._remove(h), 200 <= g.status && 300 > g.status || 304 == g.status) {
                                        var a;
                                        a = (n.ajax.test(g.getResponseHeader("content-type")) ? g.responseXML: g.responseText);
                                        b.onsuccess.call(g, g, a)
                                    } else b.onerror.call(g, g)
                                }
                            };
                            g.send(b.context);
                            return g
                        }
                    } else cQuery.error("ajax", "invalid header")
                },
                abort: function() {
                    for (var a in this._xhrs) this._xhrs[a].abort(),
                    this._remove(a)
                }
            });
            cQuery.jsonp = function(a, b) {
                return cQuery.jsonp.request(a, b)
            };
            cQuery.extend(cQuery.jsonp, {
                request: function(a, b) {
                    return cQuery.loader.jsonp(a, b)
                }
            });
            cQuery.fx = {
                _refs: {},
                add: function() {},
                remove: function() {},
                run: function() {}
            };
            cQuery.tmpl = {
                _tmpls: {},
                _keyword1: "break delete function return typeof case do if switch var catch else in this void continue false instanceof throw while debugger finally new true with default for null try".split(" "),
                _keyword2: "abstract double goto native static boolean enum implements package super byte export import private synchronized char extends int protected throws class final interface public transient const float long short volatile".split(" "),
                _keywordHash: null,
                _stringMap: {
                    "\r": "\\r",
                    "\n": "\\n",
                    '"': '\\"',
                    "'": "\\'",
                    "\\": "\\\\"
                },
                _init: function() {
                    if (!this._keywordHash) {
                        this._keywordHash = {};
                        for (var a = 0,
                        b = this._keyword1.length; a < b; a++) this._keywordHash[this._keyword1[a]] = !0;
                        a = 0;
                        for (b = this._keyword2.length; a < b; a++) this._keywordHash[this._keyword2[a]] = !0
                    }
                },
                _mapString: function(a) {
                    var b = this._stringMap;
                    return a.replace(n.tmplMapString,
                    function(a) {
                        return b[a] || a
                    })
                },
                _parse: function(a) {
                    var b = [],
                    c = 0,
                    d;
                    a: for (;;) {
                        d = "";
                        a = a.replace(n.tmplParse,
                        function(a, e) {
                            b[c++] = {
                                type: "txt",
                                value: a
                            };
                            d = e;
                            return ""
                        });
                        if (!d) {
                            b[c++] = {
                                type: "txt",
                                value: a
                            };
                            break a
                        }
                        b: if ("${" == d) {
                            for (var e = 1,
                            f = 2,
                            g = a.length; f < g; f++) {
                                var h = a.substr(f, 1);
                                switch (h) {
                                case "{":
                                    e++;
                                    break;
                                case "}":
                                    e--
                                }
                                if (!e) {
                                    b[c++] = {
                                        type: "vari",
                                        value: a.slice(0, f + 1)
                                    };
                                    a = a.slice(f + 1);
                                    break b
                                }
                            }
                            b[c++] = {
                                type: "txt",
                                value: a
                            };
                            break a
                        }
                        b: if ("{{" == d) {
                            f = e = 2;
                            for (g = a.length; f < g; f++) {
                                h = a.substr(f, 1);
                                switch (h) {
                                case "{":
                                    e++;
                                    break;
                                case "}":
                                    e--
                                }
                                if (!e) {
                                    b[c++] = {
                                        type: ("}" == a.substr(f - 1, 1) ? "cmd": "txt"),
                                        value: a.slice(0, f + 1)
                                    };
                                    a = a.slice(f + 1);
                                    break b
                                }
                            }
                            b[c++] = {
                                type: "txt",
                                value: a
                            };
                            break a
                        }
                    }
                    return b
                },
                _checkVari: function() {
                    for (var a = [], b = 0, c, d = this._keywordHash, e = 0, f = arguments.length; e < f; e++) c = arguments[e],
                    c.replace(n.tmplCheckVari,
                    function(c, e, f) {
                        d.hasOwnProperty(f) || (a[b++] = "if (typeof " + f + '=="undefined") _undefined["' + f + '"]="";')
                    });
                    return a.join("")
                },
                _splitVari: function(a) {
                    for (var b = [], c = 0, d = (a + " ,").split(""), e = [], f = 0, g = 0, h = d.length; g < h; g++) if ('"' != e[0] && "'" != e[0] || "\\" != d[g]) switch (d[g]) {
                    case ",":
                        e.length || (b[c++] = a.slice(f, g).trim(), f = g + 1);
                        break;
                    case "(":
                    case "[":
                    case "{":
                        e.unshift(d[g]);
                        break;
                    case ")":
                        "(" == e[0] && e.shift();
                        break;
                    case "]":
                        "[" == e[0] && e.shift();
                        break;
                    case "}":
                        "{" == e[0] && e.shift();
                        break;
                    case '"':
                    case "'":
                        (e[0] == d[g] ? e.shift() : e.unshift(d[g]))
                    } else g++;
                    return b
                },
                _makeFn: function(a) {
                    var b = [],
                    c = 0,
                    d = [],
                    e = 0;
                    d[e++] = "var _o=[],_k=0,_undefined={};if(!$data){$data={};}if(!$opt){$opt={};}with(_undefined){with($opt){with($data){";
                    for (var f = 0,
                    g = a.length; f < g; f++) switch (a[f].type) {
                    case "txt":
                        d[e++] = '_o[_k++]="' + this._mapString(a[f].value) + '";';
                        break;
                    case "vari":
                        var h = a[f].value.match(n.tmplKey_$),
                        k = this._checkVari(h[1]);
                        d[e++] = k + "_o[_k++]=" + h[1] + ";";
                        break;
                    case "cmd":
                        k = a[f].value.match(n.tmplKey_cmd);
                        if (!k) break;
                        switch (k[1]) {
                        case "if":
                            var l = a[f].value.match(n.tmplKey_if);
                            b[++c] = 1;
                            k = this._checkVari(l[1]);
                            d[e++] = k + 'try{_undefined["#tmp"]=' + l[1] + ';}catch($error){_undefined["#tmp"]=false;};if (_undefined["#tmp"]){';
                            break;
                        case "else":
                            l = a[f].value.match(n.tmplKey_else); (l[1] ? (b[c]++, k = this._checkVari(l[2]), d[e++] = "}else{" + k + 'try{_undefined["#tmp"]=' + l[2] + ';}catch($error){_undefined["#tmp"]=false;};if (_undefined["#tmp"]){') : d[e++] = "}else{");
                            break;
                        case "/if":
                            d[e++] = "}".repeat(b[c--]);
                            break;
                        case "loop":
                            var l = a[f].value.match(n.tmplKey_loop),
                            p = l[2] || "$index",
                            m = l[4] || "$length",
                            l = l[5],
                            k = this._checkVari(l),
                            l = this._splitVari(l);
                            switch (l.length) {
                            case 1:
                                l = [0, l[0], 1];
                                break;
                            case 2:
                                l = [l[0], l[1], 1]
                            }
                            var q;
                            switch (l[2]) {
                            case 0:
                                l[2] = "";
                                q = "<";
                                break;
                            case 1:
                                l[2] = "++";
                                q = "<";
                                break;
                            case - 1 : l[2] = "--";
                                q = "<";
                                break;
                            default:
                                l[2].toString().isFloat() && (q = (0 <= parseFloat(l[2], 10) ? "<": ">"), l[2] = "+=" + l[2])
                            } (q ? d[e++] = k + "(function(){for (var " + p + "=" + l[0] + "," + m + "=" + l[1] + ";" + p + q + m + ";" + p + l[2] + "){": d[e++] = k + "(function(){for (var " + p + "=" + l[0] + "," + m + "=" + l[1] + ",$step=" + l[2] + ";$step>=0^" + p + "<" + m + ";" + p + "+=$step){");
                            break;
                        case "/loop":
                            d[e++] = "}})();";
                            break;
                        case "each":
                            l = a[f].value.match(n.tmplKey_each);
                            p = l[2] || "$index";
                            h = l[4] || "$value";
                            m = l[6] || "$length";
                            l = l[7];
                            k = this._checkVari(l);
                            d[e++] = k + "(function(){for (var " + p + "=0," + m + "=(" + l + ").length;" + p + "<" + m + ";" + p + "++){var " + h + "=" + l + "[" + p + "];with(" + h + "){";
                            break;
                        case "/each":
                            d[e++] = "}}})();";
                            break;
                        case "enum":
                            l = a[f].value.match(n.tmplKey_enum);
                            p = l[2] || "$key";
                            h = l[4] || "$value";
                            l = l[5];
                            k = this._checkVari(l);
                            d[e++] = k + "(function(){for (var " + p + " in " + l + "){var " + h + "=" + l + "[" + p + "];with(" + h + "){";
                            break;
                        case "/enum":
                            d[e++] = "}}})();";
                            break;
                        case "tmpl":
                            l = a[f].value.match(n.tmplKey_tmpl),
                            l[3] = l[3] || "$data",
                            k = this._checkVari(l[1], l[3]),
                            d[e++] = k + "_o[_k++]=cQuery.tmpl.render(" + l[1] + "," + l[3] + ");"
                        }
                    }
                    d[e++] = '}}} return _o.join("");';
                    a = d.join("");
                    try {
                        var s = new Function("$data", "$opt", a)
                    } catch(w) {
                        return cQuery.error("tmpl._makefn", "invalid source"),
                        cQuery.error(w),
                        cQuery.log("tmpl._makefn", a),
                        cQuery.COMMON_DONOTHING
                    }
                    return s
                },
                _makeFnStrict: function(a) {
                    var b = [],
                    c = 0,
                    d = [],
                    e = 0;
                    d[e++] = "\t\t\t\t\tvar _o=[],_k=0;\t\t\t\t\tif (!$data){\t\t\t\t\t\t$data={};\t\t\t\t\t}\t\t\t\t\tif (!$opt){\t\t\t\t\t\t$opt={};\t\t\t\t\t}\t\t\t\t";
                    for (var f = 0,
                    g = a.length; f < g; f++) switch (a[f].type) {
                    case "txt":
                        d[e++] = '_o[_k++]="' + this._mapString(a[f].value) + '";';
                        break;
                    case "vari":
                        var h = a[f].value.match(n.tmplKey_$);
                        d[e++] = "_o[_k++]=" + h[1] + ";";
                        break;
                    case "cmd":
                        h = a[f].value.match(n.tmplKey_cmd);
                        if (!h) break;
                        switch (h[1]) {
                        case "if":
                            var k = a[f].value.match(n.tmplKey_if);
                            b[++c] = 1;
                            d[e++] = "if (" + k[1] + "){";
                            break;
                        case "else":
                            k = a[f].value.match(n.tmplKey_else); (k[1] ? (b[c]++, d[e++] = "}else{ if (" + k[2] + "){") : d[e++] = "}else{");
                            break;
                        case "/if":
                            d[e++] = "}".repeat(b[c--]);
                            break;
                        case "loop":
                            var k = a[f].value.match(n.tmplKey_loop),
                            l = k[2] || "$index",
                            p = k[4] || "$length",
                            k = k[5],
                            k = this._splitVari(k);
                            switch (k.length) {
                            case 1:
                                k = [0, k[0], 1];
                            case 2:
                                k = [k[0], k[1], 1]
                            }
                            var m;
                            switch (k[2]) {
                            case 0:
                                k[2] = "";
                                m = "<";
                                break;
                            case 1:
                                k[2] = "++";
                                m = "<";
                                break;
                            case - 1 : k[2] = "--";
                                m = "<";
                                break;
                            default:
                                k[2].toString().isFloat() && (m = (0 <= parseFloat(k[2], 10) ? "<": ">"), k[2] = "+=" + k[2])
                            } (m ? d[e++] = "(function(){for (var " + l + "=" + k[0] + "," + p + "=" + k[1] + ";" + l + m + p + ";" + l + k[2] + "){": d[e++] = "(function(){for (var " + l + "=" + k[0] + "," + p + "=" + k[1] + ",$step=" + k[2] + ";$step>=0^" + l + "<" + p + ";" + l + "+=$step){");
                            break;
                        case "/loop":
                            d[e++] = "}})();";
                            break;
                        case "each":
                            k = a[f].value.match(n.tmplKey_each);
                            l = k[2] || "$index";
                            h = k[4] || "$value";
                            p = k[6] || "$length";
                            k = k[7];
                            d[e++] = "(function(){for (var " + l + "=0," + p + "=(" + k + ").length;" + l + "<" + p + ";" + l + "++){var " + h + "=" + k + "[" + l + "];";
                            break;
                        case "/each":
                            d[e++] = "}})();";
                            break;
                        case "enum":
                            k = a[f].value.match(n.tmplKey_enum);
                            l = k[2] || "$key";
                            h = k[4] || "$value";
                            k = k[5];
                            d[e++] = "(function(){for (var " + l + " in " + k + "){var " + h + "=" + k + "[" + l + "];";
                            break;
                        case "/enum":
                            d[e++] = "}})();";
                            break;
                        case "tmpl":
                            k = a[f].value.match(n.tmplKey_tmpl),
                            k[3] = k[3] || "$data",
                            d[e++] = "_o[_k++]=cQuery.tmpl.renderStrict(" + k[1] + "," + k[3] + ");"
                        }
                    }
                    d[e++] = 'return _o.join("");';
                    a = d.join("");
                    try {
                        var q = new Function("$data", "$opt", a)
                    } catch(s) {
                        return cQuery.error("tmpl._makeFnStrict", "invalid source"),
                        cQuery.error(s),
                        cQuery.log("tmpl._makeFnStrict", a),
                        cQuery.COMMON_DONOTHING
                    }
                    return q
                },
                _getCache: function(a) {
                    var b = this._tmpls[a];
                    b || (b = this._tmpls[a] = {
                        source: a
                    });
                    b.tmpl || (b.tmpl = this._parse(a));
                    return b
                },
                render: function(a, b, c) {
                    this._init();
                    a = this._getCache(a);
                    a.fn || (a.fn = this._makeFn(a.tmpl));
                    try {
                        var d = a.fn(b, c)
                    } catch(e) {
                        return cQuery.error("tmpl.render", a.fn.toString().slice(0, 200) + "..."),
                        ""
                    }
                    return d
                },
                renderStrict: function(a, b, c) {
                    this._init();
                    a = this._getCache(a);
                    a.fnStrict || (a.fnStrict = this._makeFnStrict(a.tmpl));
                    try {
                        var d = a.fnStrict(b, c)
                    } catch(e) {
                        return cQuery.error("tmpl.renderStrict", a.fnStrict.toString().slice(0, 200) + "..."),
                        ""
                    }
                    return d
                }
            };
            cQuery.extend(cQuery, {
                ready: function(a, b) {
                    cQuery.event.add(document.documentElement, "ready", a, b);
                    cQuery.isReady && setTimeout(function() {
                        var b = cQuery.event.create(document.documentElement, "ready");
                        a.call(document.documentElement, b)
                    },
                    1)
                },
                _jQueryFn: [],
                jQueryReady: function(a) {
                    if ("function" != cQuery.type(a)) cQuery.error("jQueryReady", "invalid function " + a);
                    else {
                        var b = this;
                        switch (N) {
                        case "":
                            this._jQueryFn.push(a);
                            N = "loading";
                            cQuery.loader.js(cQuery.config("jQueryPath"), {
                                onload: function() {
                                    N = "loaded";
                                    jQuery.extend(P);
                                    var a;
                                    for (window.$ = jQuery; a = b._jQueryFn.shift();) a(jQuery);
                                    window[cQuery.config("namespace")] = cQuery
                                }
                            });
                            break;
                        case "loading":
                            this._jQueryFn.push(a);
                            break;
                        case "loaded":
                            window.$ = jQuery,
                            t(jQuery),
                            window[cQuery.config("namespace")] = cQuery
                        }
                    }
                },
                copy: function(a, b) {
                    var c;
                    switch (cQuery.type(a)) {
                    case "array":
                        c = [];
                        for (var d = 0,
                        e = a.length; d < e; d++) try {
                            c[d] = this.copy(a[d])
                        } catch(f) {
                            c[d] = null
                        }
                        break;
                    case "object":
                        if (a.nodeType || a.window == a) c = a;
                        else if (cQuery.isCDom(a)) c = cQuery.fn.pushStack(a.toArray());
                        else for (d in c = {},
                        a) if (b || !a.hasOwnProperty || a.hasOwnProperty(d)) try {
                            c[d] = this.copy(a[d])
                        } catch(g) {
                            c[d] = null
                        }
                        break;
                    default:
                        c = a
                    }
                    return c
                },
                bindMethod: function(a, b, c) {
                    "boolean" !== cQuery.type(a) && (c = b, b = a, a = !1);
                    var d;
                    c || (c = b);
                    for (d in b) a && !b.hasOwnProperty(d) || "function" != cQuery.type(b[d]) || (b[d] = b[d].bind(c))
                },
                active: function() {
                    return ("activeElement" in document ? document.activeElement: E)
                }
            });
            var P = {
                _pluginStatus: {},
                _pluginFn: {},
                plugin: function(a, b) {
                    var c = P._pluginStatus[a],
                    d = cQuery.type(b);
                    if (!c || d) switch (c) {
                    case "loading":
                        P._pluginFn[a].push(b);
                        break;
                    case "loaded":
                        b(jQuery);
                        break;
                    default:
                        P._pluginStatus[a] = "loading",
                        P._pluginFn[a] = ("function" == d ? [b] : []),
                        cQuery.loader.js(a, {
                            onload: function() {
                                P._pluginStatus[a] = "loaded";
                                for (var b; b = P._pluginFn[a].shift();) b(jQuery)
                            }
                        })
                    }
                }
            },
            U = function(a, b) {
                if (!a) return this;
                if (a == window || a.nodeType) return this[0] = a,
                this.length = 1,
                this;
                var c = cQuery.type(a);
                return ("array" == c || "HTMLCollection" == c ? this.pushStack(a) : this.push.apply(this, Sizzle.apply(null, arguments)))
            };
            cQuery.fn = U.prototype = {
                _v: Math.random(),
                length: 0,
                push: Array.prototype.push,
                pushStack: function(a) {
                    var b = new U;
                    Array.prototype.push.apply(b, a);
                    return b
                },
                slice: function() {
                    return this.pushStack(Array.prototype.slice.apply(this, arguments))
                },
                splice: function() {
                    return this.pushStack(Array.prototype.splice.apply(this, arguments))
                },
                sort: Array.prototype.sort,
                find: function(a) {
                    for (var b = [], c = 0, d, e, f = 0, g = this.length; f < g; f++) if (d = Sizzle(a, this[f])) {
                        try {
                            b[c] = Array.prototype.slice.call(d, 0)
                        } catch(h) {
                            e = [];
                            for (var k = 0,
                            l = d.length; k < l; k++) e[k] = d[k];
                            b[c] = e
                        }
                        c++
                    }
                    b = Array.prototype.concat.apply([], b);
                    Sizzle.uniqueSort(b);
                    return this.pushStack(b)
                },
                filter: function(a) {
                    a = Sizzle.matches(a, this.toArray());
                    return this.pushStack(a)
                },
                is: function(a) {
                    return this.length && this.filter(a).length == this.length
                },
                toArray: function() {
                    return Array.prototype.slice.call(this, 0)
                },
                get: function(a) {
                    return ("number" == cQuery.type(a) ? this[(0 <= a ? a: a + this.length)] : this.toArray())
                },
                each: function(a, b) {
                    for (var c = 0,
                    d = this.length; c < d; c++) a.call(b, this.slice(c, c + 1), c, this);
                    return this
                },
                first: function() {
                    return this.slice(0, 1)
                },
                last: function() {
                    return this.slice( - 1)
                },
                indexOf: function(a) {
                    a = cQuery(a);
                    if (!a[0]) return cQuery.error("indexOf", "the cDom object is empty"),
                    -1;
                    for (var b = 0,
                    c = this.length; b < c; b++) if (this[b] == a[0]) return b;
                    return - 1
                },
                uid: function() {
                    var a = this[0];
                    return (a ? cQuery.uid(a) : (cQuery.error("uid", "the cDom object is empty"), this))
                },
                bind: function(a, b, c) {
                    cQuery.event.add(this, a, b, c);
                    return this
                },
                unbind: function(a, b) {
                    cQuery.event.remove(this, a, b);
                    return this
                },
                debug: function() {
                    cQuery.debug("==================== debug ====================");
                    cQuery.debug(this);
                    cQuery.event.debug(this);
                    cQuery.mod.debug(this);
                    cQuery.debug("===============================================");
                    return this
                },
                trigger: function(a, b) {
                    cQuery.event.trigger(this, a, b);
                    return this
                },
                clone: function(a, b) {
                    for (var c = [], d = 0, e, f, g = 0; g < this.length; g++) e = this[g],
                    f = e.cloneNode(a),
                    b && cQuery.event.clone(e, f),
                    c[d++] = f;
                    return this.pushStack(c)
                },
                append: function(a) {
                    var b = this[0];
                    if (!b) return cQuery.error("append", "the cDom object is empty"),
                    this;
                    a = (cQuery.isCDom(a) ? a: [a]);
                    for (var c = 0,
                    d = a.length; c < d; c++) b.appendChild(a[c]);
                    return this
                },
                appendTo: function(a) {
                    a = (cQuery.isCDom(a) ? a[0] : a);
                    for (var b = 0,
                    c = this.length; b < c; b++) a.appendChild(this[b]);
                    return this
                },
                prepend: function(a) {
                    var b = this[0];
                    if (!b) return cQuery.error("prepend", "the cDom object is empty"),
                    this;
                    var c = (cQuery.isCDom(a) ? a: [a]),
                    d = b.firstChild;
                    if (d) {
                        a = 0;
                        for (var e = c.length; a < e; a++) b.insertBefore(c[a], d)
                    } else this.append(a);
                    return this
                },
                prependTo: function(a) {
                    var b = (cQuery.isCDom(a) ? a[0] : a),
                    c = b.firstChild;
                    if (c) {
                        a = 0;
                        for (var d = this.length; a < d; a++) b.insertBefore(this[a], c)
                    } else this.appendTo(a);
                    return this
                },
                insertBefore: function(a) {
                    a = (cQuery.isCDom(a) ? a[0] : a);
                    for (var b = a.parentNode,
                    c = 0,
                    d = this.length; c < d; c++) b.insertBefore(this[c], a);
                    return this
                },
                insertAfter: function(a) {
                    var b = (cQuery.isCDom(a) ? a[0] : a);
                    a = b.parentNode;
                    if (b = b.nextSibling) for (var c = 0,
                    d = this.length; c < d; c++) a.insertBefore(this[c], b);
                    else this.appendTo(a);
                    return this
                },
                remove: function() {
                    for (var a, b = 0,
                    c = this.length; b < c; b++) a = this[b],
                    a.parentNode && a.parentNode.removeChild(a);
                    return this
                },
                _createNewHtml1: function(a, b, c) {
                    for (var d, e; e = a.firstChild;) a.removeChild(e);
                    d = a.ownerDocument.createElement("div");
                    d.innerHTML = b;
                    if (d = d.getElementsByTagName(c)[0]) switch (d.tagName) {
                    case "SELECT":
                        for (; e = d.firstChild;) switch (e.tagName) {
                        case "OPTION":
                            (cQuery.browser.isIE ? (d.options[0] = null, a.options.add(new Option(e.text, e.value))) : a.options.add(e));
                            break;
                        default:
                            a.appendChild(e)
                        }
                        break;
                    default:
                        for (; e = d.firstChild;) a.appendChild(e)
                    }
                },
                _createNewHtml2: function(a, b) {
                    var c, d, e = [],
                    f = 0,
                    g = a.parentNode;
                    c = a.ownerDocument.createElement("div");
                    for ((c.innerHTML = b); d = c.firstChild;) g.insertBefore(d, a),
                    e[f++] = d;
                    g.removeChild(a);
                    return e
                },
                _writeIframe: function(a, b, c) {
                    var d = cQuery.config("blankPage") || "about:blank";
                    a.src != d && (a.src = d);
                    try {
                        var e = (a.contentWindow || a.window).document;
                        e.open();
                        e.write(b);
                        e.close();
                        c && "function" == cQuery.type(c) && c.call(a)
                    } catch(f) {
                        this._writeIframe.bind(this, a, b).delay()
                    }
                },
                attr: function(a, b) {
                    if ("string" != cQuery.type(a) || !a) return cQuery.error("attr", "invalid key"),
                    null;
                    if (b == cQuery.undefined) return (this[0] ? this[0].getAttribute(a) : "");
                    var c, d;
                    c = 0;
                    for (d = this.length; c < d; c++) this[c].setAttribute(a, b);
                    return this
                },
                value: function(a) {
                    if (a == cQuery.undefined) return (this[0] ? this[0].value: "");
                    var b, c;
                    b = 0;
                    for (c = this.length; b < c; b++) this[b].value = a
                },
                html: function(a, b) {
                    var c, d;
                    if (a == cQuery.undefined) return ((c = this[0]) ? c.innerHTML: "");
                    for (var e = 0,
                    f = this.length; e < f; e++) if (c = this[e], 1 == c.nodeType) switch (d = c.tagName.toLowerCase(), ie = (cQuery.browser.isIE ? "ie": "!ie"), d + "_" + ie) {
                    case "thead_ie":
                    case "tbody_ie":
                    case "tfoot_ie":
                        a = a._wrap(d);
                    case "table_ie":
                        a = a._wrap("table");
                        this._createNewHtml1(c, a, d);
                        break;
                    case "tr_ie":
                        a = a._wrap("tr")._wrap("table");
                        this._createNewHtml1(c, a, d);
                        break;
                    case "optgroup_ie":
                        a = a._wrap(d);
                    case "select_ie":
                        a = a._wrap("select");
                        this._createNewHtml1(c, a, d);
                        break;
                    case "style_ie":
                        c.cssText = a;
                        break;
                    case "style_!ie":
                        c.textContent = a;
                        break;
                    case "script_ie":
                        c.text = a;
                        break;
                    case "script_!ie":
                        c.text = a;
                        break;
                    case "iframe_ie":
                    case "iframe_!ie":
                        this._writeIframe(c, a, b);
                        break;
                    default:
                        c.innerHTML = a
                    }
                    return this
                },
                ohtml: function(a) {
                    var b, c = [],
                    d = 0,
                    e,
                    f,
                    g;
                    if ("string" == cQuery.type(a)) {
                        for (var h = 0; h < this.length; h++) if (b = this[h], 1 == b.nodeType) if (b.outerHTML) {
                            if (e = b.parentNode, f = b.previousSibling, g = b.nextSibling, b.outerHTML = a, (e = f || e.firstChild) && e != g) for (e != f && (c[d++] = e); (e = e.nextSibling) && e != g;) c[d++] = e
                        } else c = c.concat(this._createNewHtml2(b, a)),
                        d = c.length;
                        else c[d++] = [b];
                        return cQuery.fn.pushStack(c)
                    }
                    b = this[0];
                    if (b.outerHTML) return b.outerHTML;
                    e = document.createElement("div");
                    e.appendChild(b.cloneNode(!0));
                    return e.innerHTML
                },
                text: function(a) {
                    var b;
                    if ("string" == cQuery.type(a)) {
                        for (var c = 0; c < this.length; c++) switch (b = this[c], b.nodeType) {
                        case 1:
                            ("innerText" in b ? b.innerText = a: "textContent" in b && (b.textContent = a));
                        case 3:
                            b.nodeValue = a
                        }
                        return this
                    }
                    return ((b = this[0]) ? ("innerText" in b ? b.innerText: ("textContent" in b ? b.textContent: "")) : "")
                },
                _getCss: function() {
                    var a = this[0],
                    b;
                    if (!a) return null;
                    if (window.getComputedStyle) b = window.getComputedStyle(a, null);
                    else if (a.currentStyle) {
                        b = cQuery.copy(a.currentStyle);
                        var a = a.runtimeStyle,
                        c;
                        for (c in a) a[c] && (b[c] = a[c])
                    } else return null;
                    return b
                },
                css: function(a, b) {
                    var c = cQuery.type(a);
                    switch (arguments.length) {
                    case 0:
                    case 1:
                        switch (c) {
                        case "string":
                            if (a && -1 == a.indexOf(":")) return ((c = this._getCss()) && a in c ? c[a] : null);
                            d = 0;
                            for (e = this.length; d < e; d++) this[d].style.cssText = a || "";
                        case "undefined":
                            return this._getCss();
                        case "object":
                            var d, e, c = {};
                            for (d in a) a.hasOwnProperty(d) && (c[d.replace(n.cssFix,
                            function(a, b) {
                                return b.toUpperCase()
                            })] = a[d]);
                            d = 0;
                            for (e = this.length; d < e; d++) cQuery.extend(this[d].style, c)
                        }
                        break;
                    case 2:
                        if ("string" != c) {
                            cQuery.error("css", "invalid key");
                            break
                        }
                        a = a.replace(n.cssFix,
                        function(a, b) {
                            return b.toUpperCase()
                        });
                        d = 0;
                        for (e = this.length; d < e; d++) this[d].style[a] = b
                    }
                    return this
                },
                click: function() {
                    for (var a = 0,
                    b = this.length; a < b; a++) {
                        var c = this[a];
                        if ("click" in c && "function" == cQuery.type(c.click)) c.click();
                        else if ("fireEvent" in c) c.fireEvent("onclick");
                        else if ("createEvent" in document) {
                            var d = c.ownerDocument,
                            e = d.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, d.defaultView, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
                            c.dispatchEvent(e)
                        } else cQuery.error("click", "can't emulate mouse click event")
                    }
                    return this
                },
                mask: function() {
                    var a = this[0];
                    if (!a) return cQuery.error("mask", "the cDom object is empty"),
                    this;
                    this.unmask();
                    var b = {};
                    b.cssText = a.style.cssText;
                    b.nextSibling = a.nextSibling;
                    b.parentNode = a.parentNode;
                    a.style.position = "absolute";
                    a.style.display = "block";
                    cQuery.container.append(a);
                    a.style.left = document.documentElement.scrollLeft + document.body.scrollLeft + Math.max(0, (document.documentElement.clientWidth - a.offsetWidth) / 2) + "px";
                    a.style.top = document.documentElement.scrollTop + document.body.scrollTop + Math.max(0, (document.documentElement.clientHeight - a.offsetHeight) / 2) + "px";
                    var c = "background:#000;position:absolute;left:0;top:0;width:" + Math.max(document.documentElement.clientWidth, document.documentElement.scrollWidth, document.body.clientWidth, document.body.scrollWidth) + "px;height:" + Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight, document.body.clientHeight, document.body.scrollHeight) + "px;";
                    b.maskDiv = document.createElement("div");
                    b.maskDiv.style.cssText = c + "filter:progid:DXImageTransform.Microsoft.Alpha(opacity=50);opacity:0.5;";
                    cQuery(b.maskDiv).insertBefore(a);
                    cQuery.browser.isIE && (b.maskIframe = document.createElement("iframe"), b.maskIframe.style.cssText = c + "filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);opacity:0;", cQuery(b.maskIframe).insertBefore(b.maskDiv));
                    this.data("__mask__", b);
                    return this
                },
                unmask: function() {
                    if (!this[0]) return cQuery.error("unmask", "the cDom object is empty"),
                    this;
                    var a = this.data("__mask__");
                    a && (this[0].style.cssText = a.cssText, (a.nextSibling ? this.first().insertBefore(a.nextSibling) : this.first().appendTo(a.parentNode)), cQuery(a.maskDiv).remove(), a.maskIframe && cQuery(a.maskIframe).remove(), this.removeData("__mask__"))
                },
                cover: function() {
                    if (cQuery.browser.isIE6) {
                        var a = this[0];
                        if (!a) return cQuery.error("cover", "the cDom object is empty"),
                        this;
                        this.uncover();
                        var b = {},
                        c = this.offset(),
                        d = this.offsetParent().offset(),
                        e = document.createElement("iframe");
                        e.frameBorder = 0;
                        var f = this.css("zIndex");
                        e.style.cssText = "background:#FFF;position:absolute;left:" + (c.left - d.left) + "px;top:" + (c.top - d.top) + "px;width:" + c.width + "px;height:" + c.height + "px;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);opacity:0;" + ((isNaN(f) ? "": "z-index:" + (parseInt(f, 10) - 1)));
                        cQuery(e).insertBefore(a);
                        b.cover = e;
                        this.data("__cover__", b);
                        return this
                    }
                },
                uncover: function() {
                    if (!this[0]) return cQuery.error("uncover", "the cDom object is empty"),
                    this;
                    var a = this.data("__cover__");
                    a && (cQuery(a.cover).remove(), this.removeData("__cover__"))
                },
                offset: function(a, b) {
                    if (a) {
                        if (cQuery.isPlainObject(a)) {
                            var c;
                            b = a;
                            b.left = ("left" in b ? ("number" == cQuery.type(b.left) ? b.left + "px": b.left) : "");
                            b.top = ("top" in b ? ("number" == cQuery.type(b.top) ? b.top + "px": b.top) : "");
                            b.right = ("right" in b ? ("number" == cQuery.type(b.right) ? b.right + "px": b.right) : "");
                            b.bottom = ("bottom" in b ? ("number" == cQuery.type(b.bottom) ? b.bottom + "px": b.bottom) : "");
                            for (var d = 0,
                            e = this.length; d < e; d++) c = this.slice(d, d + 1),
                            cQuery.extend(c[0].style, b),
                            "static" == c.css("position") && (c[0].style.position = "absolute")
                        } else {
                            a = cQuery(a);
                            if (!a[0]) return this;
                            "number" == cQuery.type(b) && (b = {
                                position: b
                            });
                            b = cQuery.extend({
                                position: 0,
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0
                            },
                            b || {});
                            var f, g, h, k = a[0].ownerDocument,
                            l = k.documentElement.scrollLeft || k.body.scrollLeft || 0,
                            n = k.documentElement.scrollTop || k.body.scrollTop || 0,
                            m = arguments.callee.caller == a.offsetA;
                            f = (m ? a.offsetA() : a.offset());
                            d = 0;
                            for (e = this.length; d < e; d++) {
                                c = this.slice(d, d + 1);
                                h = (m ? c.offsetA() : c.offset());
                                switch (b.position) {
                                case 1:
                                    h.left = f.left;
                                    h.top = f.top - h.height;
                                    break;
                                case 1.5:
                                    h.left = f.left + f.width;
                                    h.top = f.top - h.height;
                                    break;
                                case 2:
                                    h.left = f.left + f.width;
                                    h.top = f.top + f.height - h.height;
                                    break;
                                case 3:
                                    h.left = f.left + f.width;
                                    h.top = f.top + f.height / 2 - h.height / 2;
                                    break;
                                case 4:
                                    h.left = f.left + f.width;
                                    h.top = f.top;
                                    break;
                                case 4.5:
                                    h.left = f.left + f.width;
                                    h.top = f.top + f.height;
                                    break;
                                case 5:
                                    h.left = f.left;
                                    h.top = f.top + f.height;
                                    break;
                                case 6:
                                    h.left = f.left + f.width / 2 - h.width / 2;
                                    h.top = f.top + f.height;
                                    break;
                                case 7:
                                    h.left = f.left + f.width - h.width;
                                    h.top = f.top + f.height;
                                    break;
                                case 7.5:
                                    h.left = f.left - h.width;
                                    h.top = f.top + f.height;
                                    break;
                                case 8:
                                    h.left = f.left - h.width;
                                    h.top = f.top;
                                    break;
                                case 9:
                                    h.left = f.left - h.width;
                                    h.top = f.top + f.height / 2 - h.height / 2;
                                    break;
                                case 10:
                                    h.left = f.left - h.width;
                                    h.top = f.top + f.height - h.height;
                                    break;
                                case 10.5:
                                    h.left = f.left - h.width;
                                    h.top = f.top - h.height;
                                    break;
                                case 11:
                                    h.left = f.left + f.width - h.width;
                                    h.top = f.top - h.height;
                                    break;
                                case 12:
                                    h.left = f.left + f.width / 2 - h.width / 2;
                                    h.top = f.top - h.height;
                                    break;
                                default:
                                    var q = k.defaultView || k.parentWindow;
                                    if (m) try {
                                        for (;;) {
                                            var s = q.parent;
                                            if (s && s != q && s.document) q = s;
                                            else break
                                        }
                                    } catch(w) {}
                                    g = q.document.documentElement.clientWidth;
                                    q = q.document.documentElement.clientHeight;
                                    h.left = (f.left + h.width + b.left - b.right < g + l || f.left - l <= g / 2 ? f.left: f.left + f.width - h.width);
                                    h.top = (f.top + f.height + h.height + b.top - b.bottom < q + n || f.top - n <= q / 2 ? f.top + f.height: f.top - h.height)
                                }
                                h.left += b.left - b.right;
                                h.top += b.top - b.bottom;
                                switch (c.css("position")) {
                                case "static":
                                    c[0].style.position = "absolute";
                                    break;
                                case "relative":
                                    g = c.offsetParent().offset();
                                    h.left -= g.left;
                                    h.top -= g.top;
                                    break;
                                case "fixed":
                                    h.left -= l,
                                    h.top -= n
                                }
                                c.offset({
                                    left: h.left,
                                    top: h.top
                                })
                            }
                        }
                        return this
                    }
                    c = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    };
                    if (!this[0]) return c;
                    var k = this[0].ownerDocument;
                    if (!k) return c;
                    d = k.documentElement;
                    if ("getBoundingClientRect" in d) c = this[0].getBoundingClientRect(),
                    c = cQuery.copy(c, !0),
                    e = ((this[0] == d ? 0 : d.scrollLeft || k.body.scrollLeft || 0)) - d.clientLeft,
                    c.left += e,
                    c.right += e,
                    e = ((this[0] == d ? 0 : d.scrollTop || k.body.scrollTop || 0)) - d.clientTop,
                    c.top += e,
                    c.bottom += e,
                    c.width = c.right - c.left,
                    c.height = c.bottom - c.top;
                    else {
                        for (e = this[0]; e && (e != k || e != d);) e != this[0] && (c.left -= e.scrollLeft, c.top -= e.scrollTop),
                        c.left += c.offsetLeft,
                        c.top += c.offsetTop,
                        e = e.offsetParent();
                        c.left += d.clientLeft;
                        c.top += d.clientTop;
                        c.width = c.offsetWidth;
                        c.height = c.offsetHeight;
                        c.right = c.left + c.width;
                        c.bottom = c.left + c.height
                    }
                    return c
                },
                offsetA: function(a, b) {
                    if (a) return (cQuery.isPlainObject(a) ? this.offset(a) : this.offset(a, b));
                    var c = this.first();
                    if (!c[0]) return {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    };
                    var d = {
                        thin: 2,
                        medium: 4,
                        thick: 6
                    },
                    e = c.offset(),
                    f,
                    g = 0,
                    h = 0;
                    f = c[0].ownerDocument;
                    for (var k = f.defaultView || f.parentWindow;;) {
                        try {
                            var l = k.frameElement,
                            c = (l ? $(l) : !1)
                        } catch(p) {
                            c = !1
                        }
                        if (c) g -= f.documentElement.scrollLeft || f.body.scrollLeft,
                        h -= f.documentElement.scrollTop || f.body.scrollTop,
                        n.offsetA.test(c.css("borderLeftStyle")) || (f = c.css("borderLeftWidth").toLowerCase(), f = (f in d ? d[f] : parseInt(f, 10)), g += f),
                        n.offsetA.test(c.css("borderTopStyle")) || (f = c.css("borderTopWidth").toLowerCase(), f = (f in d ? d[f] : parseInt(f, 10)), h += f),
                        f = c.offset(),
                        g += f.left,
                        h += f.top,
                        f = c[0].ownerDocument,
                        k = f.defaultView || f.parentWindow;
                        else break
                    }
                    e.left += g;
                    e.right += g;
                    e.top += h;
                    e.bottom += h;
                    return e
                },
                data: function(a, b) {
                    var c = this[0];
                    if (!c) return cQuery.error("data", "the cDom object is empty"),
                    this;
                    var c = cQuery.uid(c),
                    d = C[c];
                    d || (d = C[c] = {});
                    if (a) {
                        if ("string" == !cQuery.type(a)) return cQuery.error("data", "invalid key " + a),
                        this;
                        if (b === cQuery.undefined) return d[a];
                        d[a] = b;
                        return this
                    }
                    return cQuery.copy(d)
                },
                removeData: function(a) {
                    var b = this[0];
                    if (!b) return cQuery.error("removeData", "the cDom object is empty"),
                    this;
                    var c = cQuery.uid(b); (b = C[c]) || (b = C[c] = {});
                    switch (cQuery.type(a)) {
                    case "string":
                        delete b[a];
                        break;
                    case "array":
                        for (var c = 0,
                        d = a.length; c < d; c++) delete b[a[c]];
                        break;
                    case "undefined":
                        C[c] = {};
                        break;
                    default:
                        cQuery.error("removeData", "invalid key " + a)
                    }
                    return this
                },
                contains: function(a) {
                    var b = this[0];
                    if (!b) return cQuery.error("contains", "the cDom object is empty"),
                    !1;
                    a = cQuery(a);
                    if (!a[0]) return ! 1;
                    for (var c = 0,
                    d = a.length; c < d; c++) if (!Sizzle.contains(b, a[c])) return ! 1;
                    return ! 0
                },
                regMod: function(a, b, c, d) {
                    var e, f;
                    e = this[0];
                    if (!e) return cQuery.error("regMod(" + a + "," + b + ")", "the cDom object is empty"),
                    null;
                    f = cQuery.uid(e);
                    return cQuery.mod.instantiate(a, b, f, e, c, d)
                },
                allRegMod: function(a, b, c, d) {
                    var e, f, g, h, k = [];
                    e = 0;
                    for (f = this.length; e < f; e++) g = this[e],
                    h = cQuery.uid(g),
                    k[e] = cQuery.mod.instantiate(a, b, h, g, c, d);
                    return k
                },
                unregMod: function(a, b) {
                    var c = this.getMod(a, b);
                    if (c) c.uninit();
                    else return cQuery.error("unregMod", "Failed to get instance"),
                    this
                },
                allUnregMod: function(a, b) {
                    var c, d, e;
                    c = 0;
                    for (d = this.length; c < d; c++) e = this.slice(c, c + 1),
                    (e = e.getMod(a, b)) && e.uninit();
                    return instances
                },
                getMod: function(a, b) {
                    var c = this[0];
                    if (!c) return cQuery.error("getMod", "the cDom object is empty"),
                    this;
                    if (!a || "string" != cQuery.type(a)) return cQuery.error("getMod", "invalid mod name " + a),
                    null;
                    if (!b || "string" != cQuery.type(b)) return cQuery.error("getMod", "invalid mod version " + b),
                    null;
                    var c = cQuery.uid(c),
                    d = cQuery.mod._getInstanceOpt(a, b);
                    if (d && c in d) return d[c];
                    cQuery.error("getMod", "No instance found " + a + " , " + b);
                    return null
                },
                hasClass: function(a) {
                    var b = this[0];
                    if (!b) return cQuery.error("hasClass", "the cDom object is empty"),
                    this;
                    a = a.trim().split(n.space);
                    var b = " " + b.className.replace(n.space, " ") + " ",
                    c,
                    d;
                    c = 0;
                    for (d = a.length; c < d; c++) if ( - 1 < b.indexOf(" " + a[c] + " ")) return ! 0;
                    return ! 1
                },
                addClass: function(a) {
                    var b, c, d, e, f, g, h;
                    if (!a) return this;
                    g = a.trim().split(n.space);
                    b = 0;
                    for (d = this.length; b < d; b++) if (f = this[b], h = f.className) for (h = " " + h.replace(n.space, " ") + " ", c = 0, e = g.length; c < e; c++) - 1 == h.indexOf(" " + g[b] + " ") && (f.className += " " + g[c]);
                    else f.className = a;
                    return this
                },
                removeClass: function(a) {
                    var b, c, d, e;
                    a && (d = RegExp("(^|\\s)(" + a.trim().toReString().replace(n.space, "|") + ")(?=\\s|$)", "g"));
                    b = 0;
                    for (c = this.length; b < c; b++) e = this[b],
                    e.className = (a ? e.className.replace(d, "").trim() : "");
                    return this
                },
                toggleClass: function(a) {
                    var b, c, d, e;
                    if (a) {
                        cn = a.trim().split(n.space);
                        b = 0;
                        for (d = this.length; b < d; b++) {
                            c = this[b];
                            var f = c.className;
                            if (f) for (f = " " + f.replace(n.space, " ") + " ", c = 0, e = cn.length; c < e; c++) f = ( - 1 == f.indexOf(" " + cn[c] + " ") ? f + (" " + cn[c]) : f.replace(" " + cn[c] + " ", " "));
                            else c.className = a
                        }
                        return this
                    }
                }
            };
            cQuery.cookie = {
                set: function(a, b, c, d) {
                    d = d || {};
                    null === c && (c = "", d.expires = -1);
                    var e = "";
                    d.expires && ("number" == typeof d.expires || d.expires.toUTCString) && (("number" == typeof d.expires ? (e = new Date, e.setTime(e.getTime() + 864E5 * d.expires)) : e = d.expires), e = "; expires=" + e.toUTCString());
                    var f = (d.path ? "; path=" + d.path: ""),
                    g = (d.domain ? "; domain=" + d.domain: "");
                    d = (d.secure ? "; secure": "");
                    if (b) {
                        var h = cQuery.cookie.get(a, !1) || "";
                        h && (h = (h + "&").replace(RegExp("(^|&)\\s*" + encodeURIComponent(b).toReString() + "=[^&]+&"), "$1"));
                        document.cookie = [encodeURIComponent(a), "=", h, encodeURIComponent(b), "=", encodeURIComponent(c), e, f, g, d].join("")
                    } else document.cookie = [encodeURIComponent(a), "=", encodeURIComponent(c), e, f, g, d].join("")
                },
                get: function(a, b) {
                    var c = document.cookie.match(RegExp("(?:^|;)\\s*" + encodeURIComponent(a).toReString() + "=([^;]+)"));
                    if (!1 === b) return (c ? c[1] : null);
                    c && b && (c = c[1].match(RegExp("(?:^|&)\\s*" + encodeURIComponent(b).toReString() + "=([^&]+)")));
                    return (c ? decodeURIComponent(c[1]) : null)
                },
                del: function(a, b, c) {
                    c = c || {};
                    var d = (c.path ? "; path=" + c.path: "");
                    c = (c.domain ? "; domain=" + c.domain: "");
                    if (b) {
                        var e = cQuery.cookie.get(a, !1);
                        if (null === e) return;
                        if (e = e.replace(RegExp("(^|&)\\s*" + encodeURIComponent(b).toReString() + "=[^&]+"), "").replace((/^\s*&/), "")) {
                            document.cookie = encodeURIComponent(a) + "=" + e;
                            return
                        }
                    }
                    b = new Date;
                    b.setTime(b.getTime() - 1);
                    document.cookie = encodeURIComponent(a) + "=" + ((c ? "; domain=" + c: "")) + "; path=" + (d || "/") + "; expires=" + b.toGMTString()
                }
            };
            "firstChild lastChild previousSibling nextSibling parentNode offsetParent".split(" ").each(function(a) {
                cQuery.fn[a] = function() {
                    for (var b = [], c = 0, d, e = 0; e < this.length; e++)(d = this[e][a]) && (b[c++] = d);
                    return this.pushStack(b)
                }
            }); ["childNodes"].each(function(a) {
                cQuery.fn[a] = function() {
                    for (var b = [], c = 0, d, e = 0; e < this.length; e++)(d = this[e][a]) && (b[c++] = Array.prototype.slice.call(d, 0));
                    b = Array.prototype.concat.apply([], b);
                    return this.pushStack(b)
                }
            });
            var D = function() {
                cQuery.isReady = !0; (document.removeEventListener ? (document.removeEventListener("DOMContentLoaded", D, !1), window.removeEventListener("load", D, !1)) : document.detachEvent && window.detachEvent("onload", D));
                cQuery.event.trigger(document.documentElement, "ready")
            },
            Y = function() {
                cQuery.isLoaded = !0; (document.removeEventListener ? window.removeEventListener("load", Y, !1) : document.detachEvent && window.detachEvent("onload", Y))
            },
            ja = function() {
                if (!cQuery.isReady) try {
                    document.documentElement.doScroll("left"),
                    D()
                } catch(a) {
                    setTimeout(ja, 1)
                }
            }; (function() {
                if ("complete" === document.readyState || window.$LAB && $LAB.isReady) setTimeout(D, 1);
                else if (document.addEventListener) document.addEventListener("DOMContentLoaded", D, !1),
                window.addEventListener("load", D, !1);
                else if (document.attachEvent) {
                    window.attachEvent("onload", D);
                    var a;
                    try {
                        a = null == window.frameElement
                    } catch(b) {}
                    document.documentElement.doScroll && a && setTimeout(ja, 1)
                }
            })(); (window.$LAB && $LAB.isLoaded ? cQuery.isLoaded = !0 : (document.addEventListener ? window.addEventListener("load", Y, !1) : document.attachEvent && window.attachEvent("onload", Y))); (function() {
                var a = document.createElement("container");
                a.style.cssText = "position:absolute;top:0;left:0;width:0;height:0;z-index:100;";
                var b = document.body;
                b || document.write('<span id="__body__" style="display:none;">cQuery</span>'); ((b = document.body.firstChild) ? document.body.insertBefore(a, b) : document.body.appendChild(a)); (b = document.getElementById("__body__")) && b.parentNode.removeChild(b);
                cQuery.container = cQuery(a)
            })(); (function() {
                if (! ("activeElement" in document)) {
                    var a = function() {
                        E = this
                    };
                    cQuery("html").bind("mousedown",
                    function(b) {
                        var c = cQuery(b.target);
                        c.bind("focus", a);
                        setTimeout(function() {
                            c.unbind("focus", a)
                        })
                    })
                }
            })(); (function() {
                function a() {
                    var a = "";
                    try {
                        a = location.href
                    } catch(b) {
                        a = document.URL
                    }
                    return a = a.replace((/#.*$/), "")
                }
                var b = cQuery.storage.get("__history__", {}),
                c = {};
                cQuery.pageStorage = {
                    get: function(a) {
                        return (a in c ? c[a] : cQuery.undefined)
                    },
                    set: function(a, b) {
                        c[a] = b;
                        return ! 0
                    },
                    remove: function(a) {
                        delete c[a]
                    },
                    keys: function() {
                        var a = [],
                        b = 0,
                        d;
                        for (d in c) a[b++] = d;
                        return a
                    },
                    clear: function() {
                        c = {};
                        return ! 0
                    },
                    reset: function() {
                        c = {};
                        b = {};
                        return ! 0
                    }
                };
                for (var d in b) b[d].time + 36E5 < +new Date && delete b[d];
                var e = function() {
                    var b = window.name = window.name || cQuery.uid(),
                    b = b + (" " + a() + " " + document.referrer);
                    return b = cQuery.crypto.sha1(b)
                } (); (d = b.hasOwnProperty(e)) && (c = b[e].storage || {});
                cQuery.isNavigator = !0;
                cQuery.isBack = !1;
                cQuery.isRefresh = !1;
                if (window.performance && performance.navigation.type) switch (performance.navigation.type) {
                case 1:
                    cQuery.isNavigator = !1;
                    cQuery.isRefresh = !0;
                    break;
                case 2:
                    cQuery.isNavigator = !1,
                    cQuery.isBack = !0
                } else d && (cQuery.isNavigator = !1, cQuery.isBack = !0);
                cQuery(window).bind("unload", cQuery.COMMON_DONOTHING);
                cQuery(window).bind("beforeunload",
                function() {
                    var d = a();
                    b[e] = {
                        time: +new Date,
                        length: history.length,
                        url: d,
                        referrer: document.referrer,
                        storage: c
                    };
                    cQuery.storage.set("__history__", b)
                },
                {
                    priority: 99
                })
            })(); (function() {
                function a(a, e) {
                    if (b.hasOwnProperty(a)) {
                        switch (a) {
                        case "namespace":
                            e != b[a] && (window[b[a]] = c, e && (c = window[e], window[e] = cQuery));
                            break;
                        case "allowDebug":
                            cQuery.cookie.set("cQuery", "allowDebug", (e ? "true": "false"), {
                                expires: 3
                            })
                        }
                        b[a] = e;
                        return ! 0
                    }
                    return ! 1
                }
                var b = {
                    namespace: "$",
                    loadAsync: !0,
                    jQueryPath: "",
                    modPath: "",
                    loadMultiMod: !0,
                    modBuffer: !0,
                    charset: (document.charset || document.characterSet || "utf-8").toLowerCase(),
                    now: new Date,
                    blankPage: "about:blank",
                    allowDebug: (cQuery.cookie.get("cQuery", "allowDebug") || "").toBool() || !1
                };
                cQuery.config = function(c, e) {
                    switch (cQuery.type(c)) {
                    case "string":
                        return (1 < arguments.length ? a(c, e) : b[c]);
                    case "object":
                        var f, g = !0,
                        h;
                        for (h in c) c.hasOwnProperty(h) && (f++, g = g && a(h, c[h]));
                        return f && g
                    }
                };
                "gbk" == cQuery.config("charset") && cQuery.config("charset", "gb2312");
                var c = window[cQuery.config("namespace")];
                window[cQuery.config("namespace")] = cQuery; (function() {
                    for (var a = document.getElementsByTagName("script"), b = 0, c = a.length; b < c; b++) if (n.isSelfScript.test(a[b].src)) { (a = a[b].text.trim()) && (a = cQuery.parseJSON(a)) && cQuery.config(a);
                        break
                    }
                })()
            })();
        }
    } catch(z) {
        if (window.cQuery && cQuery.error) cQuery.error(z);
        else {
            var I = {
                name: w(z.name || ""),
                msg: w(z.message || z.description || ""),
                file: w(z.fileName || z.sourceURL || ""),
                line: z.lineNumber || z.line || 0,
                number: z.number || 0,
                stack: w(z.stack || "")
            },
            M = "[cQuery Init Error]",
            G;
            for (G in I) if (I.hasOwnProperty(G)) var pa = I[G].toString().replace((/[\r\n]+/g), "; "),
            M = M + (" ###" + G + "###: " + (pa || "null"));
            1500 < M.length && (M = M.slice(0, 1500) + "...");
            G = new Function("err", "throw err;"); ((/msie (\d+)/i).test(navigator.userAgent) ? G(Error(I.number, M)) : G(Error(M, I.file, I.line)))
        }
    }
})();