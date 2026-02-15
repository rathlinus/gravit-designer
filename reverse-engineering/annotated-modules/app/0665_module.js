/**
 * Webpack Module #665
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(21) /* tryCall */;
    e.exports = !o(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    });
  }