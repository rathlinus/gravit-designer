/**
 * Webpack Module #350
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var tryCall = require(21) /* tryCall */;
    exports.exports = function (e, t) {
      var n = [][e];
      return (
        !!n &&
        tryCall(function () {
          n.call(
            null,
            t ||
              function () {
                return 1;
              },
            1
          );
        })
      );
    };
  }