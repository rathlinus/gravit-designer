/**
 * Webpack Module #629
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      isCallable = require(29) /* isCallable */,
      a = require(65) /* module_65 */,
      r = require(202) /* module_202 */,
      s = require(304) /* module_304 */,
      l = require(121) /* module_121 */;
    core_export(
      { target: "Promise", stat: true, forced: require(413) /* module_413 */ },
      {
        race: function (e) {
          var t = this,
            n = r.f(t),
            core_export = n.reject,
            c = s(function () {
              var r = a(t.resolve);
              l(e, function (e) {
                isCallable(r, t, e).then(n.resolve, core_export);
              });
            });
          return c.error && core_export(c.value), n.promise;
        },
      }
    );
  }