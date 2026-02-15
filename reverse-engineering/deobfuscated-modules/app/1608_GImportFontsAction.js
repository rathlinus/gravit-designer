/**
 * Webpack Module #1608
 * Type: class
 * Name: GImportFontsAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      i = (require(15) /* module */, require(67) /* GRichTooltipConfig */),
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      s = require(1245) /* module_1245 */;
    function l() {
      l.TOOLTIP_CONFIG = {
        [i.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: i.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey(
              "GImportFontsAction",
              "text.try-this-feature-pro-tooltip-title"
            )
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey(
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
    GCore.GObject.inherit(l, GAction),
      (l.ID = "font.import"),
      (l.TITLE = new GCore.GLocaleKey("GImportFontsAction", "title")),
      (l.TOOLTIP_CONFIG = null),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE_IMPORT;
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
      (exports.exports = l);
  }