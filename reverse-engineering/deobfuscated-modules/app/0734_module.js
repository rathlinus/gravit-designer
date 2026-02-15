/**
 * Webpack Module #734
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n.r(t);
    n(355) /* module_355 */;
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
    t.default = o;
  }