/**
 * Webpack Module #292
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e) {
      super();
      this.user = e;
    }

    user = null;

  }
  exports.exports = i;
}