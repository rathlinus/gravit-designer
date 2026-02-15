/**
 * Webpack Module #1256
 * Type: class
 * Name: GVersionsHistoryAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GAction = _interopRequireDefault(require(31) /* GAction */),
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
      GCloudStorage = _interopRequireDefault(require(119) /* GCloudStorage */),
      GEvent_fileId = _interopRequireDefault(require(1159) /* GEvent_fileId */),
      c = _interopRequireDefault(require(219) /* GLocale */),
      GOfflineDialog = _interopRequireDefault(require(256) /* GOfflineDialog */),
      u = require(67) /* GRichTooltipConfig */;
    function p() {
      (this._title = new GCore.GLocaleKey("GVersionsHistoryAction", "title")),
        (p.TOOLTIP_CONFIG = {
          [u.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: u.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GVersionsHistoryAction",
                "text.try-this-feature-pro-tooltip-title"
              )
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey(
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
    GCore.GObject.inherit(p, GAction.default),
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
        return MenuItemBuilder.default.CATEGORY_FILE;
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
        return GCloudStorage.default.isOnline() && e && t;
      }),
      (p.prototype.execute = function () {
        if (gDesigner.getWindows().getActiveWindow().getDocument().isModified())
          return (
            new c.default(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GVersionsHistoryAction",
                  "unsaved-modifications"
                )
              )
            ).open(),
            false
          );
        const exports = () => {
          gDesigner &&
            gDesigner.hasEventListeners(GEvent_fileId.default) &&
            (gDesigner.trigger(
              new GEvent_fileId.default(
                GEvent_fileId.default.Type.Enable,
                gDesigner.getActiveDocument().getScene().getProperty("cid")
              )
            ),
            gDesigner.intercomStats("Entered version history"));
        };
        gDesigner.isOffline() ? GOfflineDialog.default.openUnavailableFeature(exports) : exports();
      }),
      (p.prototype.toString = function () {
        return "[Object GVersionsHistoryAction]";
      }),
      (exports.exports = p);
  }