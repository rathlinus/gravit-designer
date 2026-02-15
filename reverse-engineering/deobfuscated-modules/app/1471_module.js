/**
 * Webpack Module #1471
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */;
    const { GFontManager: o } = require(1) /* module */;
    exports.exports = class {
      constructor(e) {
        (this._fontManager = e),
          this._fontManager.addEventListener(
            o.FontAvailableEvent,
            this._fontEvent,
            this
          ),
          this._fontManager.addEventListener(
            o.FontUnavailableEvent,
            this._fontEvent,
            this
          ),
          (this._promise = new Promise((e) => {
            this._resolver = e;
          }));
      }
      _fontEvent() {
        this._checkPendingFonts();
      }
      _checkPendingFonts() {
        this._fontManager.hasPendingFonts() ||
          (this._fontManager.removeEventListener(
            o.FontAvailableEvent,
            this._fontEvent,
            this
          ),
          this._fontManager.removeEventListener(
            o.FontUnavailableEvent,
            this._fontEvent,
            this
          ),
          this._resolver());
      }
      waitForAllPendingFonts() {
        return this._checkPendingFonts(), this._promise;
      }
    };
  }