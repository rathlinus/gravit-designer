/**
 * chunk.vendor.js Module #632
 * Type: unknown
 */

function (e, t) {
      function i() {}
      ((i.extend = function (e, t) {
        var n = !1,
          r = null,
          o = 1;
        "boolean" == typeof e
          ? ((n = e), (r = t || {}), (o = 2))
          : ((n = !1), (r = e || {}));
        for (var a = o; a < arguments.length; a++)
          if (arguments[a])
            for (var s in arguments[a])
              arguments[a].hasOwnProperty(s) &&
                (n && "object" == typeof arguments[a][s]
                  ? (r[s] = i.extend({}, arguments[a][s]))
                  : (r[s] = arguments[a][s]));
        return r;
      }),
        (i.bcp47ToISO6391 = function (e) {
          return ["pt-BR", "zh-CN", "zh-TW"].includes(e)
            ? e
            : e.slice(0, 2).toLowerCase();
        }),
        (i.arrayChunk = function (e, t) {
          for (var i = [], n = e.length, r = 0; r < n; r += t)
            i.push(e.slice(r, r + t));
          return i;
        }),
        (i.sleep = function (e) {
          return new Promise(function (t) {
            setTimeout(t, e);
          });
        }),
        (e.exports = i));
    }