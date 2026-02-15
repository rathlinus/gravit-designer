/**
 * Webpack Module #1335
 * Type: class
 * Name: GToggleFullscreenAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      r = _interopRequireDefault(require(443) /* module_443 */),
      s = _interopRequireDefault(require(1330) /* module_1330 */);
    const { isExecutingOnMSTeamsSync: l } = r.default;
    var c = require(863) /* module_863 */,
      GFitAllAction = require(449) /* GFitAllAction */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      g = require(1588) /* module_1588 */;
    function h() {
      this._banner.setBannerText(
        GCore.GLocale.get(
          new GCore.GLocaleKey("GToggleFullscreenAction", "fullscreen-banner")
        )
      );
    }
    GCore.GObject.inherit(h, GAction),
      (h.ID = "view.fullscreen"),
      (h.TITLE = new GCore.GLocaleKey("GToggleFullscreenAction", "title")),
      (h.prototype._lastStates = {}),
      (h.prototype._banner = new g()),
      (h.prototype.getId = function () {
        return h.ID;
      }),
      (h.prototype.getTitle = function () {
        return h.TITLE;
      }),
      (h.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_VIEW;
      }),
      (h.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.ALT_LEFT, GEditor.GKey.Constant.ENTER];
      }),
      (h.prototype.isEnabled = function () {
        return !!gDesigner.getActiveDocument() && this._isSupported();
      }),
      (h.prototype.isVisible = function () {
        return this._isSupported();
      }),
      (h.prototype._isSupported = function () {
        return !l();
      }),
      (h.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled()
          ? "gravit-icon-toggle-full-screen"
          : null;
      }),
      (h.prototype.isFullscreen = function () {
        return !(
          gDesigner.isPartVisible(c.Header) ||
          gDesigner.isPartVisible(c.Toolbar) ||
          gDesigner.isPartVisible(c.RightSidebars) ||
          gDesigner.isPartVisible(c.LeftSidebars) ||
          gDesigner.isPartVisible(c.Panels)
        );
      }),
      (h.prototype.execute = function () {
        var e = this.isFullscreen();
        e
          ? this._banner.hide()
          : (this._updateLastStates(),
            gDesigner.isTouchEnabled() || this._banner.show()),
          gDesigner.setPartVisible(
            c.Header,
            !!e && this._lastStates.header,
            ""
          ),
          gDesigner.setPartVisible(
            c.Toolbar,
            !!e && this._lastStates.toolbar,
            ""
          ),
          gDesigner.setPartVisible(c.Panels, !!e && this._lastStates.panels),
          gDesigner.setPartVisible(
            c.RightSidebars,
            !!e && this._lastStates.rightSidebar
          ),
          gDesigner.setPartVisible(
            c.LeftSidebars,
            !!e && this._lastStates.leftSidebar
          ),
          gDesigner.relayout(),
          gDesigner.executeAction(GFitAllAction.ID, undefined, undefined, true),
          gDesigner.hasEventListeners(s.default) &&
            gDesigner.trigger(new s.default(e));
      }),
      (h.prototype._updateLastStates = function () {
        this._lastStates = {
          header: gDesigner.isPartVisible(c.Header),
          toolbar: gDesigner.isPartVisible(c.Toolbar),
          panels: gDesigner.isPartVisible(c.Panels),
          leftSidebar: gDesigner.isPartVisible(c.LeftSidebars),
          rightSidebar: gDesigner.isPartVisible(c.RightSidebars),
        };
      }),
      (h.prototype.toString = function () {
        return "[Object GToggleFullscreenAction]";
      }),
      (exports.exports = h);
  }