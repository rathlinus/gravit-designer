/**
 * Webpack Module #808
 * Type: class
 * Name: GApplicationStatusEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */;
    function i(e) {
      this.status = e;
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.Status = { Init: 0, Ready: 1 }),
      (i.prototype.status = null),
      (i.prototype.toString = function () {
        return "[Object GApplicationStatusEvent]";
      }),
      (exports.exports = i);
  }