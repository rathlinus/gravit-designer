/**
 * Webpack Module #135
 * Type: class
 * Name: GSettingChangedEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */;
    function i(e, t, n, o) {
      (this.key = e),
        (this.previousValue = t),
        (this.newValue = n),
        (this.restoring = o);
    }
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.key = null),
      (i.prototype.previousValue = null),
      (i.prototype.newValue = null),
      (i.prototype.restoring = false),
      (i.prototype.toString = function () {
        return "[Object GSettingChangedEvent]";
      }),
      (exports.exports = i);
  }