/**
 * Webpack Module #1608
 * Type: class
 * Name: GImportFontsAction
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = (n(15) /* module_15 */, n(67) /* GRichTooltipConfig */),
      a = n(18) /* module_18 */,
      r = n(31) /* GAction */,
      s = n(1245) /* module_1245 */;
    function l() {
      l.TOOLTIP_CONFIG = {
        [i.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: i.GRichTooltipConfig.from({
          title: o.GLocale.get(
            new o.GLocaleKey(
              "GImportFontsAction",
              "text.try-this-feature-pro-tooltip-title"
            )
          ),
          description: o.GLocale.get(
            new o.GLocaleKey(
              "GImportFontsAction",
              "text.try-this-feature-pro-tooltip-description"
            )
          ),
          learnMore:
            "",
          upgradeToProStatsValue: "font.import",
          middle: false,
          side: true,
        }),
      };
    }
    o.GObject.inherit(l, r),
      (l.ID = "font.import"),
      (l.TITLE = new o.GLocaleKey("GImportFontsAction", "title")),
      (l.TOOLTIP_CONFIG = null),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return a.CATEGORY_FILE_IMPORT;
      }),
      (l.prototype.getGroup = function () {
        return "import/import-fonts";
      }),
      (l.prototype.isEnabled = function (e) {
        return (
          (e = e || gDesigner.getDefaultStorage()),
          !!gDesigner.getApplicationManager().isImportResourcesEnabled() &&
            e.canPromptOpen() &&
            "undefined" != typeof window &&
            window.indexedDB
        );
      }),
      (l.prototype.execute = function (e, t) {
        (e = e || new s()).import(t);
      }),
      (l.prototype.getTooltipArea = function () {
        return i.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON;
      }),
      (l.prototype.getTooltipConfig = function (e) {
        return (e && l.TOOLTIP_CONFIG[e]) || null;
      }),
      (l.prototype.toString = function () {
        return "[Object GImportFontsAction]";
      }),
      (e.exports = l);
  }