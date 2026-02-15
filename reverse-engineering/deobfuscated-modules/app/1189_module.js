/**
 * Webpack Module #1189
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(97) /* stub_requires_684 */;
    exports.exports = class {
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