/**
 * Webpack Module #1493
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0),
      n(4) /* stub_requires_668 */,
      n(32) /* stub_requires_670 */,
      n(33) /* polyfill_DOMCollection_forEach */;
    t.default = class {
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