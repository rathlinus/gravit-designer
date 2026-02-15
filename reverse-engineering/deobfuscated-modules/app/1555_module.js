/**
 * Webpack Module #1555
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* polyfill_Object_assign */, require(4) /* stub_requires_668 */, require(38) /* stub_requires_680 */, require(97) /* stub_requires_684 */;
    const GCloudStorageItem = require(156) /* GCloudStorageItem */,
      i = require(1301) /* module_1301 */;
    function a(e) {
      var t, n, GCloudStorageItem;
      if (
        (e && ((t = e.nextPageToken), (n = e.items), (GCloudStorageItem = e.query)),
        n && !this._isItemValid(n))
      )
        throw Error("Must be a cloud item");
      (this.nextPageToken = t), (this.items = n || []), (this.query = GCloudStorageItem);
    }
    (a.prototype._isItemValid = function (e) {
      return !(e = e instanceof Array ? e : [e]).some((e) => !e instanceof GCloudStorageItem);
    }),
      (a.prototype.nextPageToken = null),
      (a.prototype.items = null),
      (a.prototype.isEmpty = function () {
        return (
          !this.items || (this.items instanceof Array && !this.items.length)
        );
      }),
      (a.prototype.getSize = function () {
        return this.items.length;
      }),
      (a.prototype.getItems = function () {
        return this.items;
      }),
      (a.prototype.update = function (e) {
        var t = e.nextPageToken,
          n = e.items,
          GCloudStorageItem = e.query;
        if (!this._isItemValid(n)) throw Error("Must be a cloud item");
        (this.nextPageToken = t),
          (this.items = this.items.concat(n)),
          GCloudStorageItem && (this.query = GCloudStorageItem);
      }),
      (a.from = function (e) {
        var t = new a();
        return (
          (t = Object.assign(t, e)).query && (t.query = i.from(t.query)),
          t.items && (t.items = t.items.map((e) => GCloudStorageItem.from(e))),
          t
        );
      }),
      (exports.exports = a);
  }