/**
 * Webpack Module #1159
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e, t) {
      super();
      ((this.type = e), (this.fileId = t));
    }

    fileId = null;
    type = null;

    static Type = { Enable: 1, Disable: 0, Close: 2 };

  }
  exports.exports = i;
}