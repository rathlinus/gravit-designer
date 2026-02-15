/**
 * Module 7 - GTransform
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This code is minified. Variable names like e, t, n, i, o, a, r, s
 * have been compressed. Refer to the original open-source Gravit code
 * for better understanding of the logic.
 */

function (e, t, i) {
      var n = i(12),
        r = i(165);

      function o() {}
      (o.SortOperators = {
        LessThan: -1,
        Equals: 0,
        GreaterThan: 1,
      }),
        (o.extend = function (e, t) {
          var i = !1,
            n = null,
            r = 1;
          "boolean" == typeof e
            ? ((i = e), (n = t || {}), (r = 2))
            : ((i = !1), (n = e || {})),
            "object" != typeof n && "function" != typeof n && (n = {});
          for (var a = r; a < arguments.length; a++)
            if (arguments[a])
              for (var s in arguments[a]) {
                var l = arguments[a][s];
                n !== l &&
                  arguments[a].hasOwnProperty(s) &&
                  (n[s] =
                    i && "object" == typeof l
                      ? o.extend(i, l instanceof Array ? [] : {}, l)
                      : l);
              }
          return n;
        }),
        (o.find = function (e, t) {
          for (var i = 0; i < e.length; i++) if (t(e[i])) return e[i];
          return null;
        }),
        (o.map = function (e, t) {
          if (e instanceof Array) return e.map(t);
          var i = Object.keys(e),
            n = [];
          return (
            i.forEach(function (i) {
              n.push(t(e[i], i));
            }),
            n
          );
        }),
        (o.each = function (e, t) {
          e instanceof Array
            ? e.forEach(function (e, i) {
                t(i, e);
              })
            : Object.keys(e).forEach(function (i) {
                t(i, e[i]);
              });
        }),
        (o.indexOfEquals = function (e, t, i) {
          for (var n = 0; n < e.length; ++n) if (o.equals(e[n], t, i)) return n;
          return -1;
        }),
        (o.equals = function (e, t, i, r) {
          if (e || e !== t) {
            if (e && t) {
              if (e.constructor.equals || t.constructor.equals)
                return (
                  e.constructor === t.constructor && e.constructor.equals(e, t)
                );
              if (e instanceof Date || t instanceof Date)
                return e instanceof Date && t instanceof Date && +e == +t;
              if (e instanceof Array || t instanceof Array) {
                if (e instanceof Array && t instanceof Array) {
                  if (e.length !== t.length) return !1;
                  for (var a = 0; a < e.length; ++a)
                    if (!o.equals(e[a], t[a], i, r)) return !1;
                  return !0;
                }
                return !1;
              }
              var s = typeof e;
              if (s !== typeof t) return !1;
              if ("number" === s)
                return isNaN(e) || isNaN(t)
                  ? isNaN(e) && isNaN(t)
                  : n.isEqualEps(e, t, r);
              if ("string" === s) return 0 === e.localeCompare(t);
              if ("boolean" === s) return +e == +t;
              if ("object" === s) {
                if (i) {
                  var l = Object.keys(e),
                    h = Object.keys(t);
                  if (!o.equals(l, h, i, r)) return !1;
                  for (a = 0; a < l.length; ++a)
                    if (!o.equals(e[l[a]], t[l[a]], i, r)) return !1;
                  return !0;
                }
                return e === t;
              }
              return !1;
            }
            return !1;
          }
          return !0;
        }),
        (o.containsOneOf = function (e, t) {
          for (var i = 0; i < t.length; ++i)
            if (e.indexOf(t[i]) >= 0) return !0;
          return !1;
        }),
        (o.containsObjectKey = function (e, t) {
          for (var i in t) if (e.indexOf(i) >= 0) return !0;
          return !1;
        }),
        (o.dictionaryContainsValue = function (e, t) {
          for (var i in e) if (e[i] === t) return !0;
          return !1;
        });
      var a =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
          ""
        );
      (o.uuid = function (e) {
        var t,
          i = a,
          n = [],
          r = i.length;
        e = e || 32;
        for (t = 0; t < e; t++) n[t] = i[0 | (Math.random() * r)];
        return n.join("");
      }),
        (o.replaceAll = function (e, t, i) {
          for (var n = e; n.indexOf(t) >= 0; ) n = n.replace(t, i);
          return n;
        }),
        (o.unique = function (e) {
          if (!e) return null;
          for (var t = {}, i = [], n = e.length, r = 0, o = 0; o < n; o++) {
            var a = e[o];
            1 !== t[a] && ((t[a] = 1), (i[r++] = a));
          }
          return i;
        }),
        (o.uniqueObj = function (e) {
          for (var t, i = 0; i < e.length; i++) {
            t = e[i];
            for (var n = e.length - 1; n > i; n--) t === e[n] && e.splice(n, 1);
          }
          return e;
        }),
        (o.hash = function (e) {
          var t,
            i,
            n = 0;
          if (0 == e.length) return n;
          for (t = 0, i = e.length; t < i; t++)
            (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
          return n;
        }),
        (o.escape = function (e) {
          return e
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        }),
        (o.unescape = function (e) {
          var t = o.replaceAll(e, "&lt;", "<");
          return (
            (t = o.replaceAll(t, "&gt;", ">")),
            (t = o.replaceAll(t, "&quot;", '"')),
            (t = o.replaceAll(t, "&#039;", "'")),
            (t = o.replaceAll(t, "&amp;", "&"))
          );
        }),
        (o.isNumeric = function (e) {
          return e - parseFloat(e) >= 0;
        }),
        (o.formatNumber = function (e, t, i) {
          return (
            (i = i || "."),
            (t = "number" == typeof t ? t : 3),
            n.round(e, !1, t).toString().replace(".", i)
          );
        }),
        (o.parseNumber = function (e) {
          if (!e) return Number.NaN;
          for (var t = "", i = !1, n = e.length; n >= 0; --n) {
            var r = e.charAt(n);
            ("," !== r && "." !== r) || i
              ? (t = r + t)
              : ((t = "." + t), (i = !0));
          }
          return parseFloat(t);
        }),
        (o.numToHexSixDigitsString = function (e) {
          var t = e.toString(16).toUpperCase(),
            i = t || "000000";
          return (
            t && t.length < 6
              ? (i = new Array(7 - t.length).join("0") + t)
              : t && t.length > 6 && (i = t.substr(0, 6)),
            i
          );
        }),
        (o.packNumbers = function () {
          for (
            var e = new Float32Array(arguments.length),
              t = new Uint8Array(e.buffer),
              i = 0;
            i < arguments.length;
            i++
          ) {
            var n = arguments[i];
            e[i] = n;
          }
          return btoa(String.fromCharCode.apply(null, t));
        }),
        (o.unpackNumbers = function (e) {
          for (
            var t = [],
              i = new Float32Array(1),
              n = new Uint8Array(i.buffer),
              r = atob(e),
              o = 0;
            o < e.length;
            o += 4
          )
            (n[0] = r.charCodeAt(o)),
              (n[1] = r.charCodeAt(o + 1)),
              (n[2] = r.charCodeAt(o + 2)),
              (n[3] = r.charCodeAt(o + 3)),
              t.push(i[0]);
          return t;
        });
      var s = new Float32Array(2),
        l = new Uint8Array(s.buffer);
      (o.packPoint = function (e, t) {
        return (s[0] = e), (s[1] = t), btoa(String.fromCharCode.apply(null, l));
      }),
        (o.unpackPoint = function (e) {
          var t = atob(e);
          return (
            (l[0] = t.charCodeAt(0)),
            (l[1] = t.charCodeAt(1)),
            (l[2] = t.charCodeAt(2)),
            (l[3] = t.charCodeAt(3)),
            (l[4] = t.charCodeAt(4)),
            (l[5] = t.charCodeAt(5)),
            (l[6] = t.charCodeAt(6)),
            (l[7] = t.charCodeAt(7)),
            s
          );
        }),
        (o.parseXML = function (e) {
          if ("undefined" != typeof DOMParser)
            return new DOMParser().parseFromString(e, "application/xml");
          throw new Error("XML Parsing not supported.");
        }),
        (o.formatOpacity = function (e) {
          return o.formatNumber(e, 1);
        }),
        (o.base64EncodeUnicode = function (e) {
          if ("string" != typeof e && !(e instanceof String))
            throw "Invalid format to encode, it must at least be a string!";
          var t = null;
          if ("function" == typeof TextEncoder) {
            for (
              var i = [],
                n = new TextEncoder("utf-8").encode(e),
                r = 0,
                o = n.byteLength;
              r < o;
              r++
            )
              i.push(String.fromCharCode(n[r]));
            t = i.join("");
          } else
            t = encodeURIComponent(e).replace(
              /%([0-9A-F]{2})/g,
              function (e, t) {
                return String.fromCharCode("0x" + t);
              }
            );
          return btoa(t);
        }),
        (o.base64DecodeUnicode = function (e) {
          if ("string" != typeof e && !(e instanceof String))
            throw "Invalid format to decode, it must at least be a string!";
          var t = atob(e);
          return "function" == typeof TextDecoder
            ? new TextDecoder().decode(
                Uint8Array.from(t, function (e) {
                  return e.charCodeAt(0);
                })
              )
            : decodeURIComponent(
                o
                  .map(t.split(""), function (e) {
                    return (
                      "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    );
                  })
                  .join("")
              );
        }),
        (o.compressString = function (e) {
          if ("string" != typeof e && !(e instanceof String))
            throw "Invalid format to compress, it must at least be a string!";
          var t = r.deflate(e, {
            to: "string",
          });
          return o.base64EncodeUnicode(t);
        }),
        (o.decompressString = function (e) {
          if ("string" != typeof e && !(e instanceof String))
            throw "Invalid format to decompress, it must at least be a string!";
          var t = o.base64DecodeUnicode(e);
          return r.inflate(t, {
            to: "string",
          });
        }),
        (o.bubbleSort = function (e, t) {
          for (var i = 0, n = e.length; i < n; i++)
            for (var r = i; r > 0; r--)
              if (t(e[r], e[r - 1]) < o.SortOperators.Equals) {
                var a = e[r];
                (e[r] = e[r - 1]), (e[r - 1] = a);
              }
          return e;
        }),
        (o.xss = function (e) {
          return e ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;") : e;
        }),
        (o.replaceMicrosoftLineFeed = function (e) {
          return (
            ("string" == typeof e || e instanceof String) &&
              (e = e.replace(/\r\n/g, "\n")),
            e
          );
        }),
        (e.exports = o);
    }
