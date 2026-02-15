/**
 * Webpack Module #808
 * Type: class
 * Name: GApplicationStatusEvent
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e) {
      super();
      this.status = e;
    }

    status = null;

    toString() {
      return '[Object GApplicationStatusEvent]';
    }

    static Status = { Init: 0, Ready: 1 };

  }
  exports.exports = i;
}