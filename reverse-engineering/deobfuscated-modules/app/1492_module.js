/**
 * Webpack Module #1492
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(1) /* module */;
    exports.exports = class {
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
        let { pageX: module, pageY: require } = e;
        this._lastMousePoint = new o.GPoint(module, require);
      }
      getLastCursorPoint() {
        return this._lastMousePoint;
      }
    };
  }