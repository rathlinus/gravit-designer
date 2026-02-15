/**
 * Webpack Module #842
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(1039) /* polyfill_String_trimLeft */;
    var core_export = require(25) /* core_export */,
      DataModule_735 = require(735) /* DataModule_735 */;
    core_export(
      {
        target: "String",
        proto: true,
        name: "trimStart",
        forced: "".trimStart !== DataModule_735,
      },
      { trimStart: DataModule_735 }
    );
  }