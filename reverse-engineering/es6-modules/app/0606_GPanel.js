/**
 * Webpack Module #606
 * Type: class
 * Name: GPanel
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GView = require(394);
  class a extends GView {
    constructor() {
      super();
      GView.call(this);
    }

    init(e) {}

    activate() {}

    deactivate() {}

    isEnabled() {
      return true;
    }

    toString() {
      return '[Object GPanel]';
    }

  }
  exports.exports = a;
}