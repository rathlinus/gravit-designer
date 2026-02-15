/**
 * Webpack Module #1091
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  exports.exports = class {
    constructor() {
      let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0],
        module = arguments.length > 1 ? arguments[1] : undefined;
      ((this._status = exports), (this._statusText = module));
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
