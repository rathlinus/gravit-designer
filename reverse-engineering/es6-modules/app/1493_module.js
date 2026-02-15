/**
 * Webpack Module #1493
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (Object.defineProperty(module, '__esModule', { value: true }),
    (module.default = undefined),
    require(4) /* stub_requires_668 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  module.default = class {
    constructor() {
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
