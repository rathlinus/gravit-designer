/**
 * Webpack Module #1151
 * Type: class
 * Name: GSwatchesChangedEvent
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */;
    function i(e) {
      this.scope = e;
    }
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.scope = null),
      (i.prototype.toString = function () {
        return "[Object GSwatchesChangedEvent]";
      }),
      (e.exports = i);
  }