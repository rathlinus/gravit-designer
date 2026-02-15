/**
 * Webpack Module #627
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(29) /* module_29 */,
      a = n(65) /* module_65 */,
      r = n(202) /* module_202 */,
      s = n(304) /* module_304 */,
      l = n(121) /* module_121 */;
    o(
      { target: "Promise", stat: !0, forced: n(413) /* module_413 */ },
      {
        all: function (e) {
          var t = this,
            n = r.f(t),
            o = n.resolve,
            c = n.reject,
            d = s(function () {
              var n = a(t.resolve),
                r = [],
                s = 0,
                d = 1;
              l(e, function (e) {
                var a = s++,
                  l = !1;
                d++,
                  i(n, t, e).then(function (e) {
                    l || ((l = !0), (r[a] = e), --d || o(r));
                  }, c);
              }),
                --d || o(r);
            });
          return d.error && c(d.value), n.promise;
        },
      }
    );
  }