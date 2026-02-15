/**
 * Webpack Module #291
 * Type: class
 * Name: GNetworkAvailabilityChangedEvent
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */;
    function i(e) {
      this.connected = e;
    }
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.connected = false),
      (i.prototype.toString = function () {
        return "[Object GNetworkAvailabilityChangedEvent]";
      }),
      (e.exports = i);
  }