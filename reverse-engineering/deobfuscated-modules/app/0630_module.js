/**
 * Webpack Module #630
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      DataModule_202 = require(202) /* DataModule_202 */;
    core_export(
      { target: "Promise", stat: true, forced: require(201) /* DataModule_201 */.CONSTRUCTOR },
      {
        reject: function (e) {
          var t = DataModule_202.f(this);
          return (0, t.reject)(e), t.promise;
        },
      }
    );
  }