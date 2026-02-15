/**
 * Webpack Module #1559
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      toString_default = require(37) /* toString_default */,
      DataModule_121 = require(121) /* DataModule_121 */,
      r = require(143) /* module_143 */,
      s = [].push;
    core_export(
      { target: "Iterator", proto: true, real: true },
      {
        toArray: function () {
          var e = [];
          return DataModule_121(r(toString_default(this)), s, { that: e, IS_RECORD: true }), e;
        },
      }
    );
  }