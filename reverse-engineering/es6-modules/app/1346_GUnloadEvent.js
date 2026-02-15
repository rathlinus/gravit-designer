/**
 * Webpack Module #1346
 * Type: class
 * Name: GUnloadEvent
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor() {
      super();
    }

    message = null;

    toString() {
      return '[Object GUnloadEvent]';
    }

  }
  exports.exports = i;
}