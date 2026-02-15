/**
 * Webpack Module #1283
 * Type: class
 * Name: GPlaceImportAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(3) /* module_3 */, require(4) /* module_4 */, require(41) /* module_41 */;
    var i = require(1) /* module */,
      a = require(15) /* module */,
      r = require(67) /* GRichTooltipConfig */,
      s = o(require(85) /* GContainer */),
      l = require(10) /* module_10 */,
      c = require(18) /* module_18 */,
      d = require(163) /* module_163 */,
      u = require(31) /* GAction */;
    function p() {
      p.TOOLTIP_CONFIG = {
        [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
          title: i.GLocale.get(
            new i.GLocaleKey("GPlaceImportAction", "tooltip-title")
          ),
          description: i.GLocale.get(
            new i.GLocaleKey("GPlaceImportAction", "tooltip-description")
          ),
          middle: false,
          video: l.gApi.getRichTooltipVideoURL("Place_Image.mp4"),
          learnMore:
            "",
        }),
      };
    }
    i.GObject.inherit(p, u),
      (p.ID = "file.place-import"),
      (p.TITLE = new i.GLocaleKey("GPlaceImportAction", "title")),
      (p.TOOLTIP_CONFIG = null),
      (p.prototype.getId = function () {
        return p.ID;
      }),
      (p.prototype.getTitle = function () {
        return p.TITLE;
      }),
      (p.prototype.getCategory = function () {
        return c.CATEGORY_FILE_IMPORT;
      }),
      (p.prototype.getGroup = function () {
        return "import/place-import";
      }),
      (p.prototype.isVisible = function () {
        return gContainer.getRuntime() !== s.default.Runtime.IPad;
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
        return [a.GKey.Constant.OPTION, "P"];
      }),
      (p.prototype.execute = function (e, t) {
        var n = gDesigner.getActiveDocument();
        if (!n) return false;
        (e = e || n.getStorage() || gDesigner.getDefaultStorage()).openPrompt(
          d.FileTypes.filter((e) => e.import_image),
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