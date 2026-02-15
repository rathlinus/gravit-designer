/**
 * Webpack Module #1354
 * Type: class
 * Name: GInvalidationOptions
 */

function (exports, module, require) {
  'use strict';
  class o {
    constructor() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      Object.assign(this, { fileCache: true, collaboratorsCache: true }, exports);
    }

    collaboratorsCache = true;
    fileCache = true;

    toString() {
      return '[Object GInvalidationOptions]';
    }

    static NO_CACHE_INVALIDATION = Object.freeze(
      new o({ fileCache: false, collaboratorsCache: false })
    );

  }
  (require(30),
    require(3),
    exports.exports = o);
}