/**
 * Webpack Module #1321
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(30) /* polyfill_Object_assign */, require(3)) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e, t) {
      super();
      ((this.notification = Object.assign({ popup: false, annonymous: false }, e || {})),
      (this.builder = t));
    }

    notification = null;

    toString() {
      return 'GEvent [GNotificationEvent]';
    }

  }
  exports.exports = i;
}