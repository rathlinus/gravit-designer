/**
 * Webpack Module #594
 * Type: class
 * Name: GError
 */

function (exports, module, require) {
    "use strict";
    require.r(module);
    class o extends Error {
      function Object() { [native code] }(...e) {
        super(...e),
          (this.constructor = o),
          (this.__proto__ = o.prototype),
          (this.name = "GError");
      }
      function toString() { [native code] }() {
        return "[Object GError]";
      }
    }
    module.default = o;
  }