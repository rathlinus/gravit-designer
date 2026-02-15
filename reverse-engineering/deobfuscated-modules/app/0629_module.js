/**
 * Webpack Module #629
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(29) /* isCallable */,
      a = require(65) /* module_65 */,
      r = require(202) /* module_202 */,
      s = require(304) /* module_304 */,
      l = require(121) /* module_121 */;
    o(
      { target: "Promise", stat: true, forced: require(413) /* module_413 */ },
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