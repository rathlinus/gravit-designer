/**
 * Webpack Module #135
 * Type: class
 * Name: GSettingChangedEvent
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */;
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
      (e.exports = i);
  }