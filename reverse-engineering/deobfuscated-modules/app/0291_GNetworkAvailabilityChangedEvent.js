/**
 * Webpack Module #291
 * Type: class
 * Name: GNetworkAvailabilityChangedEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
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