/**
 * Webpack Module #192
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* module_23 */,
      i = require(200) /* module_200 */,
      a = require(152) /* module_152 */,
      r = require(21) /* module_21 */,
      s = require(157) /* module_157 */,
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