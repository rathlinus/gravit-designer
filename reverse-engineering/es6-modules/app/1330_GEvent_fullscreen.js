/**
 * Webpack Module #1330
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e) {
      super();
      this.fullscreen = e;
    }

    fullscreen = false;

  }
  exports.exports = i;
}