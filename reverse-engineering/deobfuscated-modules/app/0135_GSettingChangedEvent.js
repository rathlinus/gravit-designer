/**
 * Webpack Module #135
 * Type: class
 * Name: GSettingChangedEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */;
    function i(e, t, n, GCore) {
      (this.key = e),
        (this.previousValue = t),
        (this.newValue = n),
        (this.restoring = GCore);
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.prototype.key = null),
      (i.prototype.previousValue = null),
      (i.prototype.newValue = null),
      (i.prototype.restoring = false),
      (i.prototype.toString = function () {
        return "[Object GSettingChangedEvent]";
      }),
      (exports.exports = i);
  }