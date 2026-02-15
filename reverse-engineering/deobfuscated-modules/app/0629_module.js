/**
 * Webpack Module #629
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(29) /* module_29 */,
      a = n(65) /* module_65 */,
      r = n(202) /* module_202 */,
      s = n(304) /* module_304 */,
      l = n(121) /* module_121 */;
    o(
      { target: "Promise", stat: true, forced: n(413) /* module_413 */ },
      {
        race: function (e) {
          var t = this,
            n = r.f(t),
            o = n.reject,
            c = s(function () {
              var r = a(t.resolve);
              l(e, function (e) {
                i(r, t, e).then(n.resolve, o);
              });
            });
          return c.error && o(c.value), n.promise;
        },
      }
    );
  }