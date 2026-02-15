/**
 * Webpack Module #91
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      DataModule_262 = require(262) /* DataModule_262 */.trim;
    core_export(
      { target: "String", proto: true, forced: require(461) /* DataModule_461 */("trim") },
      {
        trim: function () {
          return DataModule_262(this);
        },
      }
    );
  }