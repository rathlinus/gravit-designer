/**
 * Webpack Module #629
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
        race: function (e) {
          var t = this,
            n = DataModule_202.f(t),
            core_export = n.reject,
            c = s(function () {
              var DataModule_202 = DataModule_65(t.resolve);
              DataModule_121(e, function (e) {
                isCallable(DataModule_202, t, e).then(n.resolve, core_export);
              });
            });
          return c.error && core_export(c.value), n.promise;
        },
      }
    );
  }