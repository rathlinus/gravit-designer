/**
 * Webpack Module #861
 * Type: class
 * Name: GExportAction
 */

function (exports, module, require) {
    "use strict";
    require(30) /* polyfill_Object_assign */, require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(67) /* GRichTooltipConfig */,
      r = require(18) /* MenuItemBuilder */,
      s = require(31) /* GAction */,
      l = require(1513) /* module_1513 */,
      c = require(446) /* module_446 */,
      d = require(447) /* GSaveAction */;
    const u = require(86) /* module_86 */,
      p = require(44) /* GSystemDialog */;
    function g(e) {
      (this._options = e || null),
        (g.TOOLTIP_CONFIG = {
          [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
            title: o.GLocale.get(
              new o.GLocaleKey("GExportAction", "tooltip-title")
            ),
            description: o.GLocale.get(
              new o.GLocaleKey("GExportAction", "tooltip-description")
            ),
            shortcut: g.SHORTCUT,
            learnMore:
              "",
          }),
          [a.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: a.GRichTooltipConfig.from({
            title: o.GLocale.get(
              new o.GLocaleKey(
                "GExportAction",
                "text.try-this-feature-pro-tooltip-title"
              )
            ),
            description: o.GLocale.get(
              new o.GLocaleKey(
                "GExportAction",
                "text.try-this-feature-pro-tooltip-description"
              )
            ),
            learnMore:
              "",
            upgradeToProStatsValue: "file.export",
            middle: false,
            side: true,
          }),
          [a.TOOLTIP_AREA.MAIN_MENU.TRY_EXP_PDF_ADVANCED_SETTING]:
            a.GRichTooltipConfig.from({
              title: o.GLocale.get(
                new o.GLocaleKey(
                  "GExportAction",
                  "text.try-export-pdf-advanced-setting-tooltip-title"
                )
              ),
              description: o.GLocale.get(
                new o.GLocaleKey(
                  "GExportAction",
                  "text.try-export-pdf-advanced-setting-tooltip-description"
                )
              ),
              learnMore:
                "",
              upgradeToProStatsValue: "file.export.pdf",
              middle: false,
              side: true,
            }),
        }),
        this._initProTooltip();
    }
    o.GObject.inherit(g, s),
      (g.ID = "file.export"),
      (g.TITLE = new o.GLocaleKey("GExportAction", "title")),
      (g.SHORTCUT = [i.GKey.Constant.SHIFT, i.GKey.Constant.META, "E"]),
      (g.TOOLTIP_CONFIG = null),
      (g.prototype._initProTooltip = function () {
        g.TOOLTIP_CONFIG[a.TOOLTIP_AREA.TOOLBAR] = a.GRichTooltipConfig.from(
          Object.assign(g.TOOLTIP_CONFIG[a.TOOLTIP_AREA.TOOLBAR].getConfig(), {
            isPro: gDesigner.isProTooltipNeeded(g.ID),
          })
        );
      }),
      (g.prototype.getId = function () {
        return this._options && this._options.format
          ? g.ID + "." + this._options.format
          : g.ID;
      }),
      (g.prototype.getTitle = function () {
        return this._options
          ? new o.GLocaleKey("GExportAction", "title.advanced-options")
          : g.TITLE;
      }),
      (g.prototype.getGroupIcon = function () {
        return this._options ? null : "gravit-icon-export";
      }),
      (g.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-export" : null;
      }),
      (g.prototype.getCategory = function () {
        return this._options && "pdf" == this._options.format
          ? r.CATEGORY_FILE_EXPORT_PDF
          : r.CATEGORY_FILE_EXPORT;
      }),
      (g.prototype.getGroup = function () {
        return this._options ? "export/file-type/export" : "export/export";
      }),
      (g.prototype.isPro = function () {
        return true;
      }),
      (g.prototype.getShortcut = function () {
        return this._options ? null : g.SHORTCUT;
      }),
      (g.prototype.isEnabled = function () {
        if (!gDesigner.getApplicationManager().isExportEnabled()) return false;
        return !!gDesigner.getActiveDocument();
      }),
      (g.prototype.execute = function () {
        const exports = arguments[0],
          module = gDesigner.getActiveDocument(),
          require = this;
        function i(t) {
          new l(t, require._options || exports, require.getId()).open();
        }
        module && module.isCommercialProductFile()
          ? module.openPaywall(this.getId())
          : module.hasPagesWithInfiniteEmptyCanvas()
          ? p.alert(
              o.GLocale.get(
                new o.GLocaleKey(
                  "GCommonNames",
                  "text.error-emtpy-infinite-canvas"
                )
              )
            )
          : new c(
              () => {
                $(".g-export-dialog").length ||
                  (module.isNew()
                    ? p.confirm(
                        o.GLocale.get(
                          new o.GLocaleKey(
                            "GExportAction",
                            "text.save-before-export"
                          )
                        ),
                        (e) => {
                          e
                            ? gDesigner.executeAction(
                                d.ID,
                                [
                                  module,
                                  function () {
                                    let e =
                                      arguments.length > 0 &&
                                      undefined !== arguments[0]
                                        ? arguments[0]
                                        : {};
                                    const { documentStatus: module = null } = e;
                                    module &&
                                      module === u.Saved &&
                                      i(gDesigner.getActiveDocument());
                                  },
                                  true,
                                ],
                                "unsavedhandler"
                              )
                            : i(module);
                        },
                        o.GLocale.get(new o.GLocaleKey("GLocale", "no")),
                        o.GLocale.get(new o.GLocaleKey("GLocale", "yes"))
                      )
                    : i(module));
              },
              () => {
                gDesigner.stats("action-cancelled_anonymous", this.getId());
              }
            );
      }),
      (g.prototype.getTooltipArea = function () {
        return this._options && "pdf" === this._options.format
          ? a.TOOLTIP_AREA.MAIN_MENU.TRY_EXP_PDF_ADVANCED_SETTING
          : a.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON;
      }),
      (g.prototype.getTooltipConfig = function (e) {
        return this._options
          ? ("pdf" === this._options.format && e && g.TOOLTIP_CONFIG[e]) || null
          : (e && g.TOOLTIP_CONFIG[e]) || null;
      }),
      (g.prototype.toString = function () {
        return "[Object GExportAction]";
      }),
      (exports.exports = g);
  }