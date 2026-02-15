/**
 * Webpack Module #1492
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1); /* GCore */
  exports.exports = class {
    constructor() {
      this._lastMousePoint = null;
    }
    init() {
      document.addEventListener('mousemove', this._mouseMoveEventHandler.bind(this), true);
    }
    _mouseMoveEventHandler(e) {
      let { pageX: module, pageY: require } = e;
      this._lastMousePoint = new GCore.GPoint(module, require);
    }
    getLastCursorPoint() {
      return this._lastMousePoint;
    }
  };
}
