/**
 * Webpack Module #355
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require.r(module);
    class o extends Error {
      function Object() { [native code] }(...e) {
        super(...e),
          (this.constructor = o),
          (this.__proto__ = o.prototype),
          (this.name = "AppError");
      }
      function toString() { [native code] }() {
        return this.message;
      }
    }
    module.default = o;
  }