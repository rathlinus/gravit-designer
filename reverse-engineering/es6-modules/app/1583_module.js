/**
 * Webpack Module #1583
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  exports.exports = class {
    constructor(e) {
      this._event = e;
    }
    areThereTwoTouchPoints() {
      return 2 === this._event.touches.length;
    }
    areThereTwoTouchPointsOnTheTarget() {
      return 2 === this._event.targetTouches.length;
    }
    areThereMultipleTouchPointsOnTheTarget() {
      return this._event.targetTouches.length > 1;
    }
    isThereOneTouchPointOnTheTarget() {
      return 1 === this._event.targetTouches.length;
    }
    areThereMultipleTouchPoints() {
      return this._event.touches.length > 1;
    }
    getOriginalEvent() {
      return this._event;
    }
    iterateChangedTouches(e) {
      const module = this._event.changedTouches,
        require = module.length;
      for (let o = 0; o < require && false !== e(module[o]); o++);
    }
    isTrusted() {
      return this._event.isTrusted;
    }
    isCancelable() {
      return this._event.cancelable;
    }
  };
}
