/**
 * Webpack Module #291
 * Type: class
 * Name: GNetworkAvailabilityChangedEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */;
    function i(e) {
      this.connected = e;
    }
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.connected = false),
      (i.prototype.toString = function () {
        return "[Object GNetworkAvailabilityChangedEvent]";
      }),
      (exports.exports = i);
  }