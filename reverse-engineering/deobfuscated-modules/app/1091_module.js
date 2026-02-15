/**
 * Webpack Module #1091
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    e.exports = class {
      constructor() {
        let e = arguments.length > 0 && undefined !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : undefined;
        (this._status = e), (this._statusText = t);
      }
      isAuthorized() {
        return !!this._status;
      }
      getStatusText() {
        return this._statusText;
      }
      hasStatusText() {
        return !!this._statusText;
      }
    };
  }