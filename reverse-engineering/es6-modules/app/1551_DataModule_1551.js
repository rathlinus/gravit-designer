/**
 * Webpack Module #1551
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(8) /* polyfill_bundle_ES6 */;
  const GEventTarget = require(75) /* GEventTarget */,
    GObject = require(0) /* GObject */,
    GEvent_type_1174 = require(1174);
  class r extends GEventTarget {
    constructor() {
      super();
    }

    async render(e, t) {
      throw 'Not implemented!';
    }

    async _triggerEvent(e, t) {
      this.hasEventListeners(GEvent_type_1174) && this.trigger(new GEvent_type_1174(e, t));
    }

  }
  exports.exports = r;
}