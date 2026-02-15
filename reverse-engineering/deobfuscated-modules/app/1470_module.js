/**
 * Webpack Module #1470
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* module_19 */, require(26) /* module_26 */;
    const o = require(255) /* module_255 */;
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