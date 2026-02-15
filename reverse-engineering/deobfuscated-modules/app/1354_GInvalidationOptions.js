/**
 * Webpack Module #1354
 * Type: class
 * Name: GInvalidationOptions
 */

function (exports, module, require) {
    "use strict";
    function o() {
      let e =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      Object.assign(this, { fileCache: true, collaboratorsCache: true }, e);
    }
    n(30) /* module_30 */,
      n(3) /* module_3 */,
      (o.NO_CACHE_INVALIDATION = Object.freeze(
        new o({ fileCache: false, collaboratorsCache: false })
      )),
      (o.prototype.collaboratorsCache = true),
      (o.prototype.fileCache = true),
      (o.prototype.toString = function () {
        return "[Object GInvalidationOptions]";
      }),
      (e.exports = o);
  }