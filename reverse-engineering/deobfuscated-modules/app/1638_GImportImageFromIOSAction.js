/**
 * Webpack Module #1638
 * Type: class
 * Name: GImportImageFromIOSAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */;
    var GCore = require(1) /* module */,
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
      r = _interopRequireDefault(require(163) /* module_163 */),
      GContainer = _interopRequireDefault(require(85) /* GContainer */),
      GElementAction = _interopRequireDefault(require(106) /* GElementAction */);
    function c(e) {
      this._source = e;
    }
    GCore.GObject.inherit(c, GElementAction.default),
      (c.getId = function (e) {
        return "file.import-image-from-ios-".concat(e);
      }),
      (c.Source = { FILES: "files", PHOTOS: "photos" }),
      (c.prototype._source = null),
      (c.prototype.getId = function () {
        return c.getId(this._source);
      }),
      (c.prototype.getTitle = function () {
        return new GCore.GLocaleKey(
          "GImportImageFromIOSAction",
          "text.ios-".concat(this._source)
        );
      }),
      (c.prototype.getCategory = function () {
        return MenuItemBuilder.default.CATEGORY_FILE_IMPORT_IMAGE;
      }),
      (c.prototype.getGroup = function () {
        return "import/image-type/".concat(this._source);
      }),
      (c.prototype.isAvailable = function () {
        return gContainer.getRuntime() === GContainer.default.Runtime.IPad;
      }),
      (c.prototype.isEnabled = function (e) {
        if (!GElementAction.default.prototype.isEnabled.call(this)) return false;
        const module = gDesigner.getActiveDocument();
        return (
          !!module &&
          !!(e = e || module.getStorage() || gDesigner.getDefaultStorage()) &&
          e.canPromptOpen() &&
          gDesigner.getApplicationManager().isImportResourcesEnabled()
        );
      }),
      (c.prototype.execute = async function (e, t) {
        const require = gDesigner.getActiveDocument();
        if (!require) return false;
        e = e || require.getStorage() || gDesigner.getDefaultStorage();
        const _interopRequireDefault = r.default.FileTypes.filter((e) => e.import_image);
        try {
          let GCore;
          (GCore =
            this._source === c.Source.FILES
              ? await e.openFromFiles(_interopRequireDefault)
              : await e.openFromPhotos(_interopRequireDefault)),
            require.placeOrImport(GCore),
            t && t();
        } catch (e) {
          console.warn("GImportImageFromIOSAction.prototype.execute", e);
        }
      }),
      (c.prototype.toString = function () {
        return "[Object GImportImageFromIOSAction]";
      }),
      (exports.exports = c);
  }