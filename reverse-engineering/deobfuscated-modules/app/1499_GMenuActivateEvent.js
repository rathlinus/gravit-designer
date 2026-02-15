/**
 * Webpack Module #1499
 * Type: class
 * Name: GMenuActivateEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */;
    function i(e) {
      this.item = e;
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.item = null),
      (i.prototype.toString = function () {
        return "[Object GMenuActivateEvent]";
      }),
      (i.EVENT = new i()),
      (exports.exports = i);
  }