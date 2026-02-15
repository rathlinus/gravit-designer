/**
 * Webpack Module #1470
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(26) /* polyfill_DOMCollection_iterator */;
    const o = require(255) /* barrel_sidebars */;
    exports.exports = class {
      constructor() {
        this._missingFonts = [];
      }
      start() {
        o.getInstance().addEventListener(
          o.MissingFontEvent,
          this._missingFontEvent,
          this
        );
      }
      stop() {
        o.getInstance().removeEventListener(
          o.MissingFontEvent,
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