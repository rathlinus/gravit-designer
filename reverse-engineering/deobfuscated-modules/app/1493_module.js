/**
 * Webpack Module #1493
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = undefined),
      require(4) /* module_4 */,
      require(32) /* module_32 */,
      require(33) /* module_33 */;
    module.default = class {
      function Object() { [native code] }() {
        this._executions = [];
      }
      step(e) {
        this._executions.push(e);
      }
      abort() {
        this._executions.forEach((e) => e.abort());
      }
    };
  }