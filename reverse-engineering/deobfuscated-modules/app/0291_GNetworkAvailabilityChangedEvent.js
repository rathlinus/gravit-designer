/**
 * Webpack Module #291
 * Type: class
 * Name: GNetworkAvailabilityChangedEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */;
    function i(e) {
      this.connected = e;
    }
    GCore.GObject.inherit(i, GCore.GEvent),
      (i.prototype.connected = false),
      (i.prototype.toString = function () {
        return "[Object GNetworkAvailabilityChangedEvent]";
      }),
      (exports.exports = i);
  }