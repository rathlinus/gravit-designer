/**
 * Webpack Module #1189
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(4) /* module_4 */, n(97) /* module_97 */;
    e.exports = class {
      constructor() {
        this._swiping = false;
      }
      update(e) {
        this._touches = e.touches ? Array.from(e.touches) : [];
      }
      setSwiping(e) {
        this._swiping = e;
      }
      isSwiping() {
        return this._swiping;
      }
      hasActiveIdentifier(e) {
        return (
          !!this._touches &&
          this._touches.some((t) => t.identifier === e.identifier)
        );
      }
      hasActiveIdentifiers() {
        return !!this._touches && this._touches.length > 0;
      }
    };
  }