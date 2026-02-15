/**
 * Webpack Module #804
 * Type: class
 * Name: GMenuOpenEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */;
    function i() {}
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.prototype.toString = function () {
        return "[Object GMenuOpenEvent]";
      }),
      (i.EVENT = new i()),
      (exports.exports = i);
  }