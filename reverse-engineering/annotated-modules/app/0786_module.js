/**
 * Webpack Module #786
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(21) /* tryCall */;
    e.exports = !o(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  }