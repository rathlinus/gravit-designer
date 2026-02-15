/**
 * Webpack Module #1591
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = undefined),
      require(19) /* module_19 */,
      require(26) /* module_26 */;
    class o extends Error {
      constructor() {
        super(...arguments),
          (this.constructor = o),
          (this.__proto__ = o.prototype),
          (this.name = "GMSTeamsModeUserNotFoundError");
      }
      toString() {
        return this.message;
      }
    }
    module.default = o;
  }