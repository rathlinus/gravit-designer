/**
 * Webpack Module #627
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      isCallable = require(29) /* isCallable */,
      DataModule_65 = require(65) /* DataModule_65 */,
      DataModule_202 = require(202) /* DataModule_202 */,
      s = require(304) /* module_304 */,
      DataModule_121 = require(121) /* DataModule_121 */;
    core_export(
      { target: "Promise", stat: true, forced: require(413) /* module_413 */ },
      {
        all: function (e) {
          var t = this,
            n = DataModule_202.f(t),
            core_export = n.resolve,
            c = n.reject,
            d = s(function () {
              var n = DataModule_65(t.resolve),
                DataModule_202 = [],
                s = 0,
                d = 1;
              DataModule_121(e, function (e) {
                var DataModule_65 = s++,
                  DataModule_121 = false;
                d++,
                  isCallable(n, t, e).then(function (e) {
                    DataModule_121 || ((DataModule_121 = true), (DataModule_202[DataModule_65] = e), --d || core_export(DataModule_202));
                  }, c);
              }),
                --d || core_export(DataModule_202);
            });
          return d.error && c(d.value), n.promise;
        },
      }
    );
  }