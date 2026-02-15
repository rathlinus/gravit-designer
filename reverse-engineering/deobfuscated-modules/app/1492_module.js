/**
 * Webpack Module #1492
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(1) /* module_1 */;
    e.exports = class {
      constructor() {
        this._lastMousePoint = null;
      }
      init() {
        document.addEventListener(
          "mousemove",
          this._mouseMoveEventHandler.bind(this),
          true
        );
      }
      _mouseMoveEventHandler(e) {
        let { pageX: t, pageY: n } = e;
        this._lastMousePoint = new o.GPoint(t, n);
      }
      getLastCursorPoint() {
        return this._lastMousePoint;
      }
    };
  }