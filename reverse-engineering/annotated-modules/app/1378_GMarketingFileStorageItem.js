/**
 * Webpack Module #1378
 * Type: class
 * Name: GMarketingFileStorageItem
 */

function (e, t, n) {
    "use strict";
    var o = n(16) /* _interopRequireDefault */;
    n(3) /* polyfill_RegExp_toString */;
    var i = o(n(1195) /* Item */);
    function a(e, t, n, o) {
      i.default.Item.call(this, e, t, n), (this._fileId = o);
    }
    n(1) /* module */.GObject.inheritAndMix(a, i.default.Item),
      (a.prototype.isRegistrable = function () {
        return !!this.getId();
      }),
      (a.prototype.getId = function () {
        return this._fileId;
      }),
      (a.prototype.toString = function () {
        return "[Object GMarketingFileStorageItem]";
      }),
      (e.exports = a);
  }