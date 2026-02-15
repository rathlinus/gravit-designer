/**
 * Webpack Module #192
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var globalThis = require(23) /* globalThis */,
    advanceStringIndex = require(200) /* advanceStringIndex */,
    a = require(152) /* polyfill_TypedArrays */,
    tryCall = require(21) /* tryCall */,
    s = require(157) /* stub_requires_27 */,
    l = globalThis.Int8Array,
    c = a.aTypedArray,
    d = a.exportTypedArrayMethod,
    u = [].toLocaleString,
    p =
      !!l &&
      tryCall(function () {
        u.call(new l(1));
      });
  d(
    'toLocaleString',
    function () {
      return advanceStringIndex(u, p ? s(c(this)) : c(this), s(arguments));
    },
    tryCall(function () {
      return [1, 2].toLocaleString() !== new l([1, 2]).toLocaleString();
    }) ||
      !tryCall(function () {
        l.prototype.toLocaleString.call([1, 2]);
      })
  );
}
