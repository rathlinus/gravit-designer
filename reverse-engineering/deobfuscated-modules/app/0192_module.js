/**
 * Webpack Module #192
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* globalThis */,
      i = require(200) /* advanceStringIndex */,
      a = require(152) /* module_152 */,
      r = require(21) /* tryCall */,
      s = require(157) /* stub_requires_27 */,
      l = o.Int8Array,
      c = a.aTypedArray,
      d = a.exportTypedArrayMethod,
      u = [].toLocaleString,
      p =
        !!l &&
        r(function () {
          u.call(new l(1));
        });
    d(
      "toLocaleString",
      function () {
        return i(u, p ? s(c(this)) : c(this), s(arguments));
      },
      r(function () {
        return [1, 2].toLocaleString() !== new l([1, 2]).toLocaleString();
      }) ||
        !r(function () {
          l.prototype.toLocaleString.call([1, 2]);
        })
    );
  }