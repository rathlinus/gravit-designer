/**
 * Webpack Module #1323
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e, t) {
      super();
      ((this.document = e), (this.state = t));
    }

    document = null;
    state = null;

    toString() {
      return 'Object [GShareStateChangedEvent]';
    }

  }
  exports.exports = i;
}