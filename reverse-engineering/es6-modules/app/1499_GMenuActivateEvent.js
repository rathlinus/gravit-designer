/**
 * Webpack Module #1499
 * Type: class
 * Name: GMenuActivateEvent
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e) {
      super();
      this.item = e;
    }

    toString() {
      return '[Object GMenuActivateEvent]';
    }

    static item = null;

    static EVENT = new i();

  }
  exports.exports = i;
}