/**
 * Webpack Module #1283
 * Type: class
 * Name: GPlaceImportAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
      GContainer = _interopRequireDefault(require(85) /* GContainer */),
      AppSettings = require(10) /* AppSettings */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GDocument = require(163) /* GDocument */,
      GAction = require(31) /* GAction */;
    function p() {
      p.TOOLTIP_CONFIG = {
        [GRichTooltipConfig.TOOLTIP_AREA.TOOLBAR]: GRichTooltipConfig.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GPlaceImportAction", "tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey("GPlaceImportAction", "tooltip-description")
          ),
          middle: false,
          video: AppSettings.gApi.getRichTooltipVideoURL("Place_Image.mp4"),
          learnMore:
            "",
        }),
      };
    }
    GCore.GObject.inherit(p, GAction),
      (p.ID = "file.place-import"),
      (p.TITLE = new GCore.GLocaleKey("GPlaceImportAction", "title")),
      (p.TOOLTIP_CONFIG = null),
      (p.prototype.getId = function () {
        return p.ID;
      }),
      (p.prototype.getTitle = function () {
        return p.TITLE;
      }),
      (p.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE_IMPORT;
      }),
      (p.prototype.getGroup = function () {
        return "import/place-import";
      }),
      (p.prototype.isVisible = function () {
        return gContainer.getRuntime() !== GContainer.default.Runtime.IPad;
      }),
      (p.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-place-image" : null;
      }),
      (p.prototype.isEnabled = function (e) {
        var t = gDesigner.getActiveDocument();
        return (
          !!t &&
          (e = e || t.getStorage() || gDesigner.getDefaultStorage()) &&
          e.canPromptOpen() &&
          gDesigner.getApplicationManager().isImportResourcesEnabled()
        );
      }),
      (p.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.OPTION, "P"];
      }),
      (p.prototype.execute = function (e, t) {
        var n = gDesigner.getActiveDocument();
        if (!n) return false;
        (e = e || n.getStorage() || gDesigner.getDefaultStorage()).openPrompt(
          GDocument.FileTypes.filter((e) => e.import_image),
          (e) => {
            gDesigner.stats(
              "import-placeimport_open_localfile",
              e.getExtension()
            ),
              n.placeOrImport(e),
              t && t();
          },
          false
        );
      }),
      (p.prototype.getTooltipConfig = function (e) {
        return (e && p.TOOLTIP_CONFIG[e]) || null;
      }),
      (p.prototype.toString = function () {
        return "[Object GPlaceImportAction]";
      }),
      (exports.exports = p);
  }