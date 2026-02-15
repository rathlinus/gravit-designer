/**
 * Webpack Module #1156
 * Type: class
 * Name: GMenuCloseEvent
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor() {
      super();
    }

    toString() {
      return '[Object GMenuCloseEvent]';
    }

    static EVENT = new i();

  }
  exports.exports = i;
}