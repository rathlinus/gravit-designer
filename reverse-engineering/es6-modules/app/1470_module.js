/**
 * Webpack Module #1470
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */, require(26)) /* polyfill_DOMCollection_iterator */;
  const GFontsProviderManager = require(255); /* GFontsProviderManager */
  exports.exports = class {
    constructor() {
      this._missingFonts = [];
    }
    start() {
      GFontsProviderManager.getInstance().addEventListener(
        GFontsProviderManager.MissingFontEvent,
        this._missingFontEvent,
        this
      );
    }
    stop() {
      GFontsProviderManager.getInstance().removeEventListener(
        GFontsProviderManager.MissingFontEvent,
        this._missingFontEvent,
        this
      );
    }
    getMissingFonts() {
      return [...new Set(this._missingFonts)];
    }
    _missingFontEvent(e) {
      var t = e.evt;
      this._missingFonts.push(t.family);
    }
  };
}
