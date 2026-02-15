/**
 * Webpack Module #1385
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(8) /* polyfill_bundle_ES6 */;
  var GCore = require(1) /* GCore */,
    AppSettings = require(10) /* AppSettings */,
    a = require(237) /* Item */,
    r = require(220) /* Item */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */.decrypt;
  require(173) /* stub_requires_1 */;
  class l extends a {
    constructor() {
      super();
    }

    canPromptOpen() {
      return false;
    }

    canPromptSave(e) {
      return false;
    }

    canSave() {
      return false;
    }

    canDownload() {
      return false;
    }

    static Item(e, t, n, GCore) {
      r.CommercialProduct.call(this, e, t, n, GCore);
    }

  }
  (GCore.GObject.inherit(l.Item, r.CommercialProduct),
    l.Item.prototype.getPrice = async function () {
      return Promise.resolve(this._file.price);
    },
    l.Item.prototype.getName = function () {
      return this._filename
        ? this._filename
        : GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.image'));
    },
    l.Item.prototype.getFullName = function () {
      return this._filename
        ? this._filename
        : GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.image'));
    },
    l.Item.prototype.getFormattedPrice = async function () {
      const exports = await this.getPrice(),
        module = GCore.GLocale.toLocaleCurrency(exports, 'USD');
      return new Promise((e) => e(module));
    },
    l.Item.prototype.setFile = function (e) {
      if (!e) throw new Error('File can not be null');
      ((this._file = e), (this._id = e.id), (this._name = e.name));
    },
    l.Item.prototype.getFile = function () {
      return this._file;
    },
    l.Item.prototype.read = async function (e, t, n) {
      var GCore = await AppSettings.gApi.getProviderContentFile(this._file.hash);
      return e(new TextEncoder().encode(CollaborationMergeUtils(GCore)));
    },
    l.Item.prototype.getExtension = function () {
      return this._file.extension && this._file.extension.toUpperCase();
    },
    exports.exports = l);
}