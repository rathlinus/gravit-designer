/**
 * Webpack Module #804
 * Type: class
 * Name: GMenuOpenEvent
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
      return '[Object GMenuOpenEvent]';
    }

    static EVENT = new i();

  }
  exports.exports = i;
}