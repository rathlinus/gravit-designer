/**
 * Webpack Module #1039
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      DataModule_735 = require(735) /* DataModule_735 */;
    core_export(
      {
        target: "String",
        proto: true,
        name: "trimStart",
        forced: "".trimLeft !== DataModule_735,
      },
      { trimLeft: DataModule_735 }
    );
  }