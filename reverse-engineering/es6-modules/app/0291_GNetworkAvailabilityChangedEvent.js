/**
 * Webpack Module #291
 * Type: class
 * Name: GNetworkAvailabilityChangedEvent
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e) {
      super();
      this.connected = e;
    }

    connected = false;

    toString() {
      return '[Object GNetworkAvailabilityChangedEvent]';
    }

  }
  exports.exports = i;
}