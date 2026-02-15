/**
 * Webpack Module #1378
 * Type: class
 * Name: GMarketingFileStorageItem
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var i = o(require(1195) /* Item */);
    function a(e, t, n, o) {
      i.default.Item.call(this, e, t, n), (this._fileId = o);
    }
    require(1) /* module */.GObject.inheritAndMix(a, i.default.Item),
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