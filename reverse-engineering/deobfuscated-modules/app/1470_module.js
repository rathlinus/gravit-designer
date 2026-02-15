/**
 * Webpack Module #1470
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(26) /* polyfill_DOMCollection_iterator */;
    const barrel_sidebars = require(255) /* barrel_sidebars */;
    exports.exports = class {
      constructor() {
        this._missingFonts = [];
      }
      start() {
        barrel_sidebars.getInstance().addEventListener(
          barrel_sidebars.MissingFontEvent,
          this._missingFontEvent,
          this
        );
      }
      stop() {
        barrel_sidebars.getInstance().removeEventListener(
          barrel_sidebars.MissingFontEvent,
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