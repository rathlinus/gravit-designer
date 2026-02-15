/**
 * Webpack Module #1346
 * Type: class
 * Name: GUnloadEvent
 */

function (e, t, n) {
    "use strict";
    n(3) /* polyfill_RegExp_toString */;
    var o = n(1) /* GCore */;
    function i() {}
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.message = null),
      (i.prototype.toString = function () {
        return "[Object GUnloadEvent]";
      }),
      (e.exports = i);
  }