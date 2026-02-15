/**
 * Webpack Module #693
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(23) /* module_23 */,
      i = n(21) /* module_21 */,
      a = n(343) /* module_343 */,
      r = n(152) /* module_152 */.NATIVE_ARRAY_BUFFER_VIEWS,
      s = o.ArrayBuffer,
      l = o.Int8Array;
    e.exports =
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