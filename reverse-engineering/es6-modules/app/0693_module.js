/**
 * Webpack Module #693
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var globalThis = require(23) /* globalThis */,
    tryCall = require(21) /* tryCall */,
    a = require(343) /* module_343 */,
    r = require(152) /* polyfill_TypedArrays */.NATIVE_ARRAY_BUFFER_VIEWS,
    s = globalThis.ArrayBuffer,
    l = globalThis.Int8Array;
  exports.exports =
    !r ||
    !tryCall(function () {
      l(1);
    }) ||
    !tryCall(function () {
      new l(-1);
    }) ||
    !a(function (e) {
      (new l(), new l(null), new l(1.5), new l(e));
    }, true) ||
    tryCall(function () {
      return 1 !== new l(new s(2), 1, undefined).length;
    });
}
