/**
 * Webpack Module #1386
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */;
    var GCore = require(1) /* module */,
      AppSettings = require(10) /* AppSettings */,
      a = require(237) /* Item */,
      r = (require(220) /* Item */, require(40) /* CollaborationMergeUtils */.decrypt);
    require(173) /* stub_requires_1 */;
    function s() {}
    GCore.GObject.inherit(s, a),
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
      (s.Item = function (e, t, n, GCore, AppSettings) {
        a.Item.call(this, e),
          (this._filename = n),
          (this._id = t),
          (this._file = GCore),
          (this._hash = AppSettings);
      }),
      GCore.GObject.inherit(s.Item, a.Item),
      (s.Item.prototype.getName = function () {
        return this._filename
          ? this._filename
          : GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.image"));
      }),
      (s.Item.prototype.getFullName = function () {
        return this._filename
          ? this._filename
          : GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.image"));
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
          var GCore = await AppSettings.gApi.getProviderExternalAsset(
            this._hash || this._file.hash
          );
          return e(new TextEncoder().encode(r(GCore)));
        } catch (e) {
          return t(e);
        }
      }),
      (s.Item.prototype.getExtension = function () {
        return this._file.extension && this._file.extension.toUpperCase();
      }),
      (exports.exports = s);
  }