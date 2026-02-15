/**
 * Webpack Module #734
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require.r(module);
    require(355) /* AppError */;
    class o extends Error {
      constructor(...e) {
        super(...e),
          (this.constructor = o),
          (this.__proto__ = o.prototype),
          (this.name = "ExternalFileSettingsError");
      }
      toString() {
        return this.message;
      }
    }
    module.default = o;
  }