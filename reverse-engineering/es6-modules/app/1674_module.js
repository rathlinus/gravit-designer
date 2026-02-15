/**
 * Webpack Module #1674
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */, require(26)) /* polyfill_DOMCollection_iterator */;
  class o extends Error {
    constructor() {
      (super(...arguments), Error.captureStackTrace(this, o), (this.code = 57005));
    }
    static isPluginError(e) {
      return e && e.code && 57005 === e.code;
    }
  }
  exports.exports = o;
}
