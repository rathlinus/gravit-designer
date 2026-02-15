/**
 * Webpack Module #1378
 * Type: class
 * Name: GMarketingFileStorageItem
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(3) /* module_3 */;
    var i = o(require(1195) /* module_1195 */);
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