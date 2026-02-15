/**
 * Webpack Module #1386
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */;
    var o = require(1) /* module */,
      i = require(10) /* AppSettings */,
      a = require(237) /* Item */,
      r = (require(220) /* Item */, require(40) /* CollaborationMergeUtils */.decrypt);
    require(173) /* stub_requires_1 */;
    function s() {}
    o.GObject.inherit(s, a),
      (s.prototype.canPromptOpen = function () {
        return false;
      }),
      (s.prototype.canPromptSave = function (e) {
        return true;
      }),
      (s.prototype.canSave = function () {
        return true;
      }),
      (s.prototype.canDownload = function () {
        return true;
      }),
      (s.Item = function (e, t, n, o, i) {
        a.Item.call(this, e),
          (this._filename = n),
          (this._id = t),
          (this._file = o),
          (this._hash = i);
      }),
      o.GObject.inherit(s.Item, a.Item),
      (s.Item.prototype.getName = function () {
        return this._filename
          ? this._filename
          : o.GLocale.get(new o.GLocaleKey("GCommonNames", "text.image"));
      }),
      (s.Item.prototype.getFullName = function () {
        return this._filename
          ? this._filename
          : o.GLocale.get(new o.GLocaleKey("GCommonNames", "text.image"));
      }),
      (s.Item.prototype.setFile = function (e) {
        if (!e) throw new Error("File can not be null");
        (this._file = e), (this._id = e.id), (this._name = e.name);
      }),
      (s.Item.prototype.getFile = function () {
        return this._file;
      }),
      (s.Item.prototype.read = async function (e, t, n) {
        try {
          var o = await i.gApi.getProviderExternalAsset(
            this._hash || this._file.hash
          );
          return e(new TextEncoder().encode(r(o)));
        } catch (e) {
          return t(e);
        }
      }),
      (s.Item.prototype.getExtension = function () {
        return this._file.extension && this._file.extension.toUpperCase();
      }),
      (exports.exports = s);
  }