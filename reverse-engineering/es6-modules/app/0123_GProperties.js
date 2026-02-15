/**
 * Webpack Module #123
 * Type: class
 * Name: GProperties
 */

function (exports, module, require) {
  'use strict';
  class o {
    _touchTools = null;

    init(e, t) {
      throw new Error('Not Supported.');
    }

    isGroup(e) {
      return true;
    }

    isSticky() {
      return false;
    }

    isAvailable(e) {
      return !e;
    }

    update(e, t, n) {
      (e = e || this._document) && e.clearActiveStylesList();
    }

    openPatternChooser() {
      throw new Error('Not Supported.');
    }

    openEyeDropper(e, t) {
      throw new Error('Not Supported.');
    }

    setTouchTools(e) {
      this._touchTools = e;
    }

    getTouchTools() {
      return this._touchTools;
    }

    toString() {
      return '[Object GProperties]';
    }

  }
  (require(3),
    exports.exports = o);
}