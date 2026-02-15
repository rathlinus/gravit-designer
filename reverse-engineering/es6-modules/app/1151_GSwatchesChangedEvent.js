/**
 * Webpack Module #1151
 * Type: class
 * Name: GSwatchesChangedEvent
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e) {
      super();
      this.scope = e;
    }

    scope = null;

    toString() {
      return '[Object GSwatchesChangedEvent]';
    }

  }
  exports.exports = i;
}