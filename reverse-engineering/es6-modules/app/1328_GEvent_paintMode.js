/**
 * Webpack Module #1328
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e) {
      super();
      this.paintMode = e;
    }

    paintMode = null;

  }
  exports.exports = i;
}