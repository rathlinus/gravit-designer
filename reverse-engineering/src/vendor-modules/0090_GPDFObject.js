/**
 * chunk.vendor.js Module #90
 * Type: class
 * Name: GPDFObject
 */

function (e, t) {
      function i() {}
      ((i.prototype.write = function (e) {}),
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
        (e.exports = i));
    }