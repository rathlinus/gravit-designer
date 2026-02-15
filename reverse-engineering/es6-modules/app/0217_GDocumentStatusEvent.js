/**
 * Webpack Module #217
 * Type: class
 * Name: GDocumentStatusEvent
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e, t) {
      super();
      ((this.status = e), (this.data = t));
    }

    status = null;
    data = null;

    toString() {
      return '[Object GDocumentStatusEvent]';
    }

  }
  exports.exports = i;
}