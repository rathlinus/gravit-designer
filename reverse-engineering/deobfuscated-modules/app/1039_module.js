/**
 * Webpack Module #1039
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      i = require(735) /* module_735 */;
    core_export(
      {
        target: "String",
        proto: true,
        name: "trimStart",
        forced: "".trimLeft !== i,
      },
      { trimLeft: i }
    );
  }