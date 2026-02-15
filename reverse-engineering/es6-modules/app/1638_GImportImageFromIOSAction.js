/**
 * Webpack Module #1638
 * Type: class
 * Name: GImportImageFromIOSAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(8) /* polyfill_bundle_ES6 */,
    require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(41)) /* stub_requires_682 */;
  var GCore = require(1) /* GCore */,
    MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
    GDocument = _interopRequireDefault(require(163) /* GDocument */),
    GContainer = _interopRequireDefault(require(85) /* GContainer */),
    GElementAction = _interopRequireDefault(require(106) /* GElementAction */);
  class c extends GElementAction.default {
    constructor(e) {
      super();
      this._source = e;
    }

    _source = null;

    getId() {
      return c.getId(this._source);
    }

    getTitle() {
      return new GCore.GLocaleKey('GImportImageFromIOSAction', 'text.ios-'.concat(this._source));
    }

    getCategory() {
      return MenuItemBuilder.default.CATEGORY_FILE_IMPORT_IMAGE;
    }

    getGroup() {
      return 'import/image-type/'.concat(this._source);
    }

    isAvailable() {
      return gContainer.getRuntime() === GContainer.default.Runtime.IPad;
    }

    isEnabled(e) {
      if (!GElementAction.default.prototype.isEnabled.call(this)) return false;
      const module = gDesigner.getActiveDocument();
      return (
        !!module &&
        !!(e = e || module.getStorage() || gDesigner.getDefaultStorage()) &&
        e.canPromptOpen() &&
        gDesigner.getApplicationManager().isImportResourcesEnabled()
      );
    }

    async execute(e, t) {
      const require = gDesigner.getActiveDocument();
      if (!require) return false;
      e = e || require.getStorage() || gDesigner.getDefaultStorage();
      const _interopRequireDefault = GDocument.default.FileTypes.filter((e) => e.import_image);
      try {
        let GCore;
        ((GCore =
          this._source === c.Source.FILES
            ? await e.openFromFiles(_interopRequireDefault)
            : await e.openFromPhotos(_interopRequireDefault)),
          require.placeOrImport(GCore),
          t && t());
      } catch (e) {
        console.warn('GImportImageFromIOSAction.prototype.execute', e);
      }
    }

    toString() {
      return '[Object GImportImageFromIOSAction]';
    }

    static getId(e) {
      return 'file.import-image-from-ios-'.concat(e);
    }

    static Source = { FILES: 'files', PHOTOS: 'photos' };

  }
  exports.exports = c;
}