/**
 * Webpack Module #1156
 * Type: class
 * Name: GMenuCloseEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */;
    function i() {}
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.prototype.toString = function () {
        return "[Object GMenuCloseEvent]";
      }),
      (i.EVENT = new i()),
      (exports.exports = i);
  }