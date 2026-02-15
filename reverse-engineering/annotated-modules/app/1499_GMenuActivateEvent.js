/**
 * Webpack Module #1499
 * Type: class
 * Name: GMenuActivateEvent
 */

function (e, t, n) {
    "use strict";
    n(3) /* polyfill_RegExp_toString */;
    var o = n(1) /* module */;
    function i(e) {
      this.item = e;
    }
    o.GObject.inherit(i, o.GEvent),
      (i.item = null),
      (i.prototype.toString = function () {
        return "[Object GMenuActivateEvent]";
      }),
      (i.EVENT = new i()),
      (e.exports = i);
  }