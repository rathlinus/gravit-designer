/**
 * Webpack Module #388
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */;
    const i = require(237) /* Item */,
      a = require(156) /* module_156 */;
    function r() {}
    GCore.GObject.inherit(r, i),
      (r.Item = function (e, t) {
        i.Item.call(this, e), this.setFile(t);
      }),
      GCore.GObject.inherit(r.Item, i.Item),
      (r.Item.prototype._app = null),
      (r.Item.prototype._filename = null),
      (r.Item.prototype._ext = null),
      (r.Item.prototype._id = null),
      (r.Item.prototype._file = null),
      (r.Item.prototype.isRegistrable = function () {
        return !!this.getId();
      }),
      (r.Item.prototype.getId = function () {
        return this._id;
      }),
      (r.Item.prototype.setId = function (e) {
        return (this._id = e), this;
      }),
      (r.Item.prototype.getFullName = function () {
        return this._filename;
      }),
      (r.Item.prototype.getName = function () {
        return this._filename;
      }),
      (r.Item.prototype.setFileName = function (e) {
        return (this._filename = e), this;
      }),
      (r.Item.prototype.getExtension = function () {
        return (this._ext && this._ext.toUpperCase()) || "CDRAPP";
      }),
      (r.Item.prototype.setFile = function (e) {
        if (!e)
          throw new Error(
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GExternalStorage",
                "text.error-file-cant-be-null"
              )
            )
          );
        (e = a.createOrReturnSelfInstance(e)),
          (this._file = e),
          (this._id = e.id),
          (this._filename = e.name);
      }),
      (r.Item.prototype.getFile = function () {
        const exports = this._file;
        return (
          !exports.settings &&
            this._client &&
            (exports.settings = this._client.getSettings()),
          exports
        );
      }),
      (r.Item.prototype.hasFileSettings = function () {
        return this._file && this._file.settings;
      }),
      (r.Item.prototype.getUniqueId = function () {
        return this._id;
      }),
      (r.Item.prototype.getVersion = function () {
        throw Error("Not implemented!");
      }),
      (r.Item.prototype.getMimeType = function () {
        throw Error("Not implemented!");
      }),
      (r.Item.prototype.hasVersionControl = function () {
        return false;
      }),
      (r.Item.prototype.hasUpdates = async function () {
        throw Error("Not implemented!");
      }),
      (r.Item.prototype.getLatestFileVersion = async function () {
        throw Error("Not implemented!");
      }),
      (r.Item.prototype.getLatestFileInfo = async function () {
        throw Error("Not implemented!");
      }),
      (r.Item.prototype.exists = async function () {
        throw Error("Not implemented!");
      }),
      (r.Item.prototype.isVersionNewerThan = function () {
        throw Error("Not implemented!");
      }),
      (r.Item.prototype.setCloudClient = function (e) {
        this._client = e;
      }),
      (r.Item.prototype.getCloudClient = function () {
        return this._client;
      }),
      (r.Item.prototype.supportsSharing = function () {
        return this._getClient().isCorporate();
      }),
      (r.Item.prototype.getCorporateProviderName = function () {
        throw Error("Not implemented!");
      }),
      (r.Item.prototype.isEmailFromCorporateDomain = function () {
        throw Error("Not implemented!");
      }),
      (r.Item.prototype.toString = function () {
        return "[Object GExternalStorage.Item]";
      }),
      (exports.exports = r);
  }