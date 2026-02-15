/**
 * Webpack Module #1250
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e, t) {
      super();
      ((this.oldPersona = e), (this.newPersona = t));
    }

    oldPersona = null;
    newPersona = null;

  }
  exports.exports = i;
}