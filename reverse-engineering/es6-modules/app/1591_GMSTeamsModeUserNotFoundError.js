/**
 * Webpack Module #1591
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (Object.defineProperty(module, '__esModule', { value: true }),
    (module.default = undefined),
    require(19) /* polyfill_Array_iterator */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  class o extends Error {
    constructor() {
      (super(...arguments),
        (this.constructor = o),
        (this.__proto__ = o.prototype),
        (this.name = 'GMSTeamsModeUserNotFoundError'));
    }
    toString() {
      return this.message;
    }
  }
  module.default = o;
}
