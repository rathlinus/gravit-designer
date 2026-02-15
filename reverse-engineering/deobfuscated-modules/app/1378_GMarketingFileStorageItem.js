/**
 * Webpack Module #1378
 * Type: class
 * Name: GMarketingFileStorageItem
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var i = _interopRequireDefault(require(1195) /* Item */);
    function a(e, t, n, _interopRequireDefault) {
      i.default.Item.call(this, e, t, n), (this._fileId = _interopRequireDefault);
    }
    require(1) /* GCore */.GObject.inheritAndMix(a, i.default.Item),
      (a.prototype.isRegistrable = function () {
        return !!this.getId();
      }),
      (a.prototype.getId = function () {
        return this._fileId;
      }),
      (a.prototype.toString = function () {
        return "[Object GMarketingFileStorageItem]";
      }),
      (exports.exports = a);
  }