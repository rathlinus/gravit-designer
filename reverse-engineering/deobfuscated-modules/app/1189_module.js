/**
 * Webpack Module #1189
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* module_4 */, require(97) /* module_97 */;
    exports.exports = class {
      function Object() { [native code] }() {
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