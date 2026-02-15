/**
 * Webpack Module #842
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(1039) /* polyfill_String_trimLeft */;
    var o = require(25) /* core_export */,
      i = require(735) /* module_735 */;
    o(
      {
        target: "String",
        proto: true,
        name: "trimStart",
        forced: "".trimStart !== i,
      },
      { trimStart: i }
    );
  }