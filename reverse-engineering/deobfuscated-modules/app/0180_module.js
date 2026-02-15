/**
 * Webpack Module #180
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      globalThis = require(23) /* globalThis */,
      a = require(324) /* polyfill_ArrayBuffer_DataView */,
      r = require(260) /* module_260 */,
      s = a.ArrayBuffer;
    core_export(
      { global: true, constructor: true, forced: globalThis.ArrayBuffer !== s },
      { ArrayBuffer: s }
    ),
      r("ArrayBuffer");
  }