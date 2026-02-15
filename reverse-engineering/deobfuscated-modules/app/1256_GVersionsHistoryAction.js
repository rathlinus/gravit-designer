/**
 * Webpack Module #1256
 * Type: class
 * Name: GVersionsHistoryAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(3) /* module_3 */;
    var i = require(1) /* module */,
      a = o(require(31) /* GAction */),
      r = o(require(18) /* module_18 */),
      s = o(require(119) /* module_119 */),
      l = o(require(1159) /* module_1159 */),
      c = o(require(219) /* module_219 */),
      d = o(require(256) /* GOfflineDialog */),
      u = require(67) /* GRichTooltipConfig */;
    function p() {
      (this._title = new i.GLocaleKey("GVersionsHistoryAction", "title")),
        (p.TOOLTIP_CONFIG = {
          [u.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: u.GRichTooltipConfig.from({
            title: i.GLocale.get(
              new i.GLocaleKey(
                "GVersionsHistoryAction",
                "text.try-this-feature-pro-tooltip-title"
              )
            ),
            description: i.GLocale.get(
              new i.GLocaleKey(
                "GVersionsHistoryAction",
                "text.try-this-feature-pro-tooltip-description"
              )
            ),
            learnMore:
              "",
            upgradeToProStatsValue: "gravit-versions-history",
            middle: false,
            side: true,
          }),
        });
    }
    i.GObject.inherit(p, a.default),
      (p.ID = "gravit-versions-history"),
      (p.GroupID = "file"),
      (p.TOOLTIP_CONFIG = null),
      (p.prototype._title = null),
      (p.prototype.getId = function () {
        return p.ID;
      }),
      (p.prototype.getTitle = function () {
        return this._title;
      }),
      (p.prototype.isPro = function () {
        return true;
      }),
      (p.prototype.getTooltipArea = function () {
        return u.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON;
      }),
      (p.prototype.getTooltipConfig = function (e) {
        return (e && p.TOOLTIP_CONFIG[e]) || null;
      }),
      (p.prototype.getIcon = function () {
        return "gravit-icon-versions";
      }),
      (p.prototype.getCategory = function () {
        return r.default.CATEGORY_FILE;
      }),
      (p.prototype.getGroup = function () {
        return p.GroupID;
      }),
      (p.prototype.isEnabled = function () {
        if (!gDesigner.getApplicationManager().isShareEnabled()) return false;
        var e =
            (gDesigner.getActiveDocument() &&
              gDesigner.getActiveDocument().getStorageItem()) ||
            null,
          t =
            !!gDesigner.getActiveDocument() &&
            gDesigner.getActiveDocument().getScene().isCloudSynchronization();
        return s.default.isOnline() && e && t;
      }),
      (p.prototype.execute = function () {
        if (gDesigner.getWindows().getActiveWindow().getDocument().isModified())
          return (
            new c.default(
              i.GLocale.get(
                new i.GLocaleKey(
                  "GVersionsHistoryAction",
                  "unsaved-modifications"
                )
              )
            ).open(),
            false
          );
        const exports = () => {
          gDesigner &&
            gDesigner.hasEventListeners(l.default) &&
            (gDesigner.trigger(
              new l.default(
                l.default.Type.Enable,
                gDesigner.getActiveDocument().getScene().getProperty("cid")
              )
            ),
            gDesigner.intercomStats("Entered version history"));
        };
        gDesigner.isOffline() ? d.default.openUnavailableFeature(exports) : exports();
      }),
      (p.prototype.toString = function () {
        return "[Object GVersionsHistoryAction]";
      }),
      (exports.exports = p);
  }