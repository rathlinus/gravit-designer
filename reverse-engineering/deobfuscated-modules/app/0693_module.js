/**
 * Webpack Module #693
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* module_23 */,
      i = require(21) /* module_21 */,
      a = require(343) /* module_343 */,
      r = require(152) /* module_152 */.NATIVE_ARRAY_BUFFER_VIEWS,
      s = o.ArrayBuffer,
      l = o.Int8Array;
    exports.exports =
      !r ||
      !i(function () {
        l(1);
      }) ||
      !i(function () {
        new l(-1);
      }) ||
      !a(function (e) {
        new l(), new l(null), new l(1.5), new l(e);
      }, true) ||
      i(function () {
        return 1 !== new l(new s(2), 1, undefined).length;
      });
  }