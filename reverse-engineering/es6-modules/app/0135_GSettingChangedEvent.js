/**
 * Webpack Module #135
 * Type: class
 * Name: GSettingChangedEvent
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e, t, n, GCore) {
      super();
      ((this.key = e), (this.previousValue = t), (this.newValue = n), (this.restoring = GCore));
    }

    key = null;
    previousValue = null;
    newValue = null;
    restoring = false;

    toString() {
      return '[Object GSettingChangedEvent]';
    }

  }
  exports.exports = i;
}