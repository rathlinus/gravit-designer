/**
 * Webpack Module #180
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* core_export */,
      i = n(23) /* globalThis */,
      a = n(324) /* polyfill_ArrayBuffer_DataView */,
      r = n(260) /* module_260 */,
      s = a.ArrayBuffer;
    o(
      { global: !0, constructor: !0, forced: i.ArrayBuffer !== s },
      { ArrayBuffer: s }
    ),
      r("ArrayBuffer");
  }