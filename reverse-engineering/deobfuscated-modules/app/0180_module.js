/**
 * Webpack Module #180
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* module_25 */,
      i = require(23) /* module_23 */,
      a = require(324) /* module_324 */,
      r = require(260) /* module_260 */,
      s = a.ArrayBuffer;
    o(
      { global: true, constructor: true, forced: i.ArrayBuffer !== s },
      { ArrayBuffer: s }
    ),
      r("ArrayBuffer");
  }