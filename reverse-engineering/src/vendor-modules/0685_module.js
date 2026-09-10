/**
 * chunk.vendor.js Module #685
 * Type: unknown
 */

function (e, t, i) {
      "use strict";

      function n() {}
      (i(58),
        i(8),
        (n.extend = function (e, t) {
          var i = !1,
            r = null,
            o = 1;
          "boolean" == typeof e
            ? ((i = e), (r = t || {}), (o = 2))
            : ((i = !1), (r = e || {}));
          for (var a = o; a < arguments.length; a++)
            if (arguments[a])
              for (var s in arguments[a])
                arguments[a].hasOwnProperty(s) &&
                  (i && "object" == typeof arguments[a][s]
                    ? (r[s] = n.extend({}, arguments[a][s]))
                    : (r[s] = arguments[a][s]));
          return r;
        }),
        (n.bcp47ToISO6391 = function (e) {
          return ["pt-BR", "zh-CN", "zh-TW"].includes(e)
            ? e
            : e.slice(0, 2).toLowerCase();
        }),
        (n.arrayChunk = function (e, t) {
          for (var i = [], n = e.length, r = 0; r < n; r += t)
            i.push(e.slice(r, r + t));
          return i;
        }),
        (n.sleep = function (e) {
          return new Promise(function (t) {
            setTimeout(t, e);
          });
        }),
        (e.exports = n));
    }