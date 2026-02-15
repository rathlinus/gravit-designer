/**
 * Webpack Module #1156
 * Type: class
 * Name: GMenuCloseEvent
 */

function (e, t, n) {
    "use strict";
    n(3) /* polyfill_RegExp_toString */;
    var o = n(1) /* GCore */;
    function i() {}
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.toString = function () {
        return "[Object GMenuCloseEvent]";
      }),
      (i.EVENT = new i()),
      (e.exports = i);
  }