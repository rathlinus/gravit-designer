/**
 * Webpack Module #1610
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* GCore */,
      i = require(237) /* Item */;
    function a() {}
    GCore.GObject.inherit(a, i),
      (a.Item = function (e) {
        i.Item.call(this, new a()), (this._extension = e);
      }),
      GCore.GObject.inherit(a.Item, i.Item),
      (a.Item.prototype._extension = null),
      (a.Item.prototype.getExtension = function () {
        return this._extension;
      }),
      (a.Item.prototype.read = function (e, t, n) {
        return e(this._data);
      }),
      (a.Item.prototype.write = function (e, t, n, GCore) {
        (this._data = e), t && t();
      }),
      (exports.exports = a);
  }