/**
 * Webpack Module #441
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e) {
      super();
      this.license = e;
    }

    license = null;

  }
  exports.exports = i;
}