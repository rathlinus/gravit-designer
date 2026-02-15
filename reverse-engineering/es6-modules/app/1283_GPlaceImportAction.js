/**
 * Webpack Module #1283
 * Type: class
 * Name: GPlaceImportAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(41)) /* stub_requires_682 */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    r = require(67) /* GRichTooltipConfig */,
    GContainer = _interopRequireDefault(require(85) /* GContainer */),
    AppSettings = require(10) /* AppSettings */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GDocument = require(163) /* GDocument */,
    GAction = require(31);
  class p extends GAction {
    constructor() {
      super();
      p.TOOLTIP_CONFIG = {
      [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
      title: GCore.GLocale.get(new GCore.GLocaleKey('GPlaceImportAction', 'tooltip-title')),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GPlaceImportAction', 'tooltip-description')
      ),
      middle: false,
      video: AppSettings.gApi.getRichTooltipVideoURL('Place_Image.mp4'),
      learnMore: '',
      }),
      };
    }

    getId() {
      return p.ID;
    }

    getTitle() {
      return p.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_FILE_IMPORT;
    }

    getGroup() {
      return 'import/place-import';
    }

    isVisible() {
      return gContainer.getRuntime() !== GContainer.default.Runtime.IPad;
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-place-image' : null;
    }

    isEnabled(e) {
      var t = gDesigner.getActiveDocument();
      return (
        !!t &&
        (e = e || t.getStorage() || gDesigner.getDefaultStorage()) &&
        e.canPromptOpen() &&
        gDesigner.getApplicationManager().isImportResourcesEnabled()
      );
    }

    getShortcut() {
      return [GEditor.GKey.Constant.OPTION, 'P'];
    }

    execute(e, t) {
      var n = gDesigner.getActiveDocument();
      if (!n) return false;
      (e = e || n.getStorage() || gDesigner.getDefaultStorage()).openPrompt(
        GDocument.FileTypes.filter((e) => e.import_image),
        (e) => {
          (gDesigner.stats('import-placeimport_open_localfile', e.getExtension()),
            n.placeOrImport(e),
            t && t());
        },
        false
      );
    }

    getTooltipConfig(e) {
      return (e && p.TOOLTIP_CONFIG[e]) || null;
    }

    toString() {
      return '[Object GPlaceImportAction]';
    }

    static TOOLTIP_CONFIG = {
      [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GPlaceImportAction', 'tooltip-title')),
        description: GCore.GLocale.get(
          new GCore.GLocaleKey('GPlaceImportAction', 'tooltip-description')
        ),
        middle: false,
        video: AppSettings.gApi.getRichTooltipVideoURL('Place_Image.mp4'),
        learnMore: '',
      }),
    };

    static ID = 'file.place-import';

    static TITLE = new GCore.GLocaleKey('GPlaceImportAction', 'title');

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = p;
}