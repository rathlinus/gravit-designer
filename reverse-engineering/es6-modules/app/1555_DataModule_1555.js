/**
 * Webpack Module #1555
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(30) /* polyfill_Object_assign */,
    require(4) /* stub_requires_668 */,
    require(38) /* stub_requires_680 */,
    require(97)) /* stub_requires_684 */;
  const GCloudStorageItem = require(156) /* GCloudStorageItem */,
    DataModule_1301 = require(1301);
  class a {
    constructor(e) {
      var t, n, GCloudStorageItem;
      if (
      (e && ((t = e.nextPageToken), (n = e.items), (GCloudStorageItem = e.query)),
      n && !this._isItemValid(n))
      )
      throw Error('Must be a cloud item');
      ((this.nextPageToken = t), (this.items = n || []), (this.query = GCloudStorageItem));
    }

    nextPageToken = null;
    items = null;

    _isItemValid(e) {
    return !(e = e instanceof Array ? e : [e]).some((e) => (!e) instanceof GCloudStorageItem);
  }

    isEmpty() {
      return !this.items || (this.items instanceof Array && !this.items.length);
    }

    getSize() {
      return this.items.length;
    }

    getItems() {
      return this.items;
    }

    update(e) {
      var t = e.nextPageToken,
        n = e.items,
        GCloudStorageItem = e.query;
      if (!this._isItemValid(n)) throw Error('Must be a cloud item');
      ((this.nextPageToken = t),
        (this.items = this.items.concat(n)),
        GCloudStorageItem && (this.query = GCloudStorageItem));
    }

    static from(e) {
      var t = new a();
      return (
        (t = Object.assign(t, e)).query && (t.query = DataModule_1301.from(t.query)),
        t.items && (t.items = t.items.map((e) => GCloudStorageItem.from(e))),
        t
      );
    }

  }
  exports.exports = a;
}