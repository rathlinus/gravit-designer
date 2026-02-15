/**
 * Webpack Module #1347
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

    static Type = { OpenInAppLink: 1 };

  }
  exports.exports = i;
}