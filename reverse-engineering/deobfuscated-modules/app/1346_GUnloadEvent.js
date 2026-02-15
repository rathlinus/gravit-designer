/**
 * Webpack Module #1346
 * Type: class
 * Name: GUnloadEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */;
    function i() {}
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.prototype.message = null),
      (i.prototype.toString = function () {
        return "[Object GUnloadEvent]";
      }),
      (exports.exports = i);
  }