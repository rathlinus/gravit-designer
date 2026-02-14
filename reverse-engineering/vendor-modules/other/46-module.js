/**
 * Module 46
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This code is minified. Variable names like e, t, n, i, o, a, r, s
 * have been compressed. Refer to the original open-source Gravit code
 * for better understanding of the logic.
 */

function (e, t) {
      function i() {}
      (i.prototype.write = function (e) {}),
        (i.prototype.isEmpty = function () {
          return !1;
        }),
        (i.prototype.equals = function (e) {
          return this === e;
        }),
        (i.prototype.toString = function () {
          return "[Object GPDFObject]";
        }),
        (i.Container = function () {}),
        (i.Container.prototype.accept = function () {
          throw new Error("Not Implemented");
        }),
        (i.Container.prototype.toString = function () {
          return "[Object GPDFObject.Container]";
        }),
        (e.exports = i);
    }
