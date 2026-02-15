/**
 * Webpack Module #868
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e) {
      super();
      this.type = e;
    }

    type = null;

    static Type = { Updated: 0 };

  }
  exports.exports = i;
}