/**
 * Webpack Module #804
 * Type: class
 * Name: GMenuOpenEvent
 */

function (e, t, n) {
    "use strict";
    n(3) /* polyfill_RegExp_toString */;
    var o = n(1) /* module */;
    function i() {}
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.toString = function () {
        return "[Object GMenuOpenEvent]";
      }),
      (i.EVENT = new i()),
      (e.exports = i);
  }