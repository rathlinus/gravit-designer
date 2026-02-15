/**
 * Webpack Module #627
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
        all: function (e) {
          var t = this,
            n = r.f(t),
            core_export = n.resolve,
            c = n.reject,
            d = s(function () {
              var n = a(t.resolve),
                r = [],
                s = 0,
                d = 1;
              l(e, function (e) {
                var a = s++,
                  l = false;
                d++,
                  isCallable(n, t, e).then(function (e) {
                    l || ((l = true), (r[a] = e), --d || core_export(r));
                  }, c);
              }),
                --d || core_export(r);
            });
          return d.error && c(d.value), n.promise;
        },
      }
    );
  }