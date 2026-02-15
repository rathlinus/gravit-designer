/**
 * Webpack Module #1591
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }),
      (t.default = undefined),
      n(19) /* module_19 */,
      n(26) /* module_26 */;
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
    t.default = o;
  }