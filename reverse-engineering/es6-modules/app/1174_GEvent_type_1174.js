/**
 * Webpack Module #1174
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e, t) {
      super();
      ((this.type = e), (this.data = t));
    }

    type = null;
    data = null;

    static Type = { DoubleClickFile: 1, Reload: 2, UnshareWithMe: 3 };

  }
  exports.exports = i;
}