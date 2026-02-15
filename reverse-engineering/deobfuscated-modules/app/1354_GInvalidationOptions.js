/**
 * Webpack Module #1354
 * Type: class
 * Name: GInvalidationOptions
 */

function (exports, module, require) {
    "use strict";
    function o() {
      let exports =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      Object.assign(this, { fileCache: true, collaboratorsCache: true }, exports);
    }
    require(30) /* polyfill_Object_assign */,
      require(3) /* polyfill_RegExp_toString */,
      (o.NO_CACHE_INVALIDATION = Object.freeze(
        new o({ fileCache: false, collaboratorsCache: false })
      )),
      (o.prototype.collaboratorsCache = true),
      (o.prototype.fileCache = true),
      (o.prototype.toString = function () {
        return "[Object GInvalidationOptions]";
      }),
      (exports.exports = o);
  }