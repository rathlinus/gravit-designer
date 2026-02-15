/**
 * Webpack Module #1248
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    function o() {
      let exports =
          arguments.length > 0 && undefined !== arguments[0]
            ? arguments[0]
            : o.Unsupported.KeepEditable,
        module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0,
        require =
          arguments.length > 2 && undefined !== arguments[2]
            ? arguments[2]
            : undefined;
      (this.unsupportedChoice = exports),
        (this.formatVersion = module),
        (this.lastModifiedDate = require);
    }
    (o.Unsupported = {
      KeepAppearance: 0,
      KeepEditable: 1,
      NotCDR: 2,
      OmitIncompatible: 3,
    }),
      (o.prototype.unsupportedChoice = o.Unsupported.KeepEditable),
      (o.prototype.formatVersion = 0),
      (o.prototype.lastModifiedDate = undefined),
      (exports.exports = o);
  }