/**
 * Webpack Module #343
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(43) /* module_43 */("iterator"),
      i = false;
    try {
      var a = 0,
        r = {
          next: function () {
            return { done: !!a++ };
          },
          return: function () {
            i = true;
          },
        };
      (r[o] = function () {
        return this;
      }),
        Array.from(r, function () {
          throw 2;
        });
    } catch (e) {}
    exports.exports = function (e, t) {
      try {
        if (!t && !i) return false;
      } catch (e) {
        return false;
      }
      var n = false;
      try {
        var a = {};
        (a[o] = function () {
          return {
            next: function () {
              return { done: (n = true) };
            },
          };
        }),
          e(a);
      } catch (e) {}
      return n;
    };
  }