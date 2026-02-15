/**
 * Webpack Module #1378
 * Type: class
 * Name: GMarketingFileStorageItem
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  require(3) /* polyfill_RegExp_toString */;
  var i = _interopRequireDefault(require(1195) /* Item */);
  class a {
    constructor(e, t, n, _interopRequireDefault) {
      (i.default.Item.call(this, e, t, n), (this._fileId = _interopRequireDefault));
    }

    isRegistrable() {
      return !!this.getId();
    }

    getId() {
      return this._fileId;
    }

    toString() {
      return '[Object GMarketingFileStorageItem]';
    }

  }
  (require(1) /* GCore */
    .GObject.inheritAndMix(a, i.default.Item),
    exports.exports = a);
}