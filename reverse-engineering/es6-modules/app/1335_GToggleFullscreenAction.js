/**
 * Webpack Module #1335
 * Type: class
 * Name: GToggleFullscreenAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    r = _interopRequireDefault(require(443) /* module_443 */),
    GEvent_fullscreen = _interopRequireDefault(require(1330) /* GEvent_fullscreen */);
  const { isExecutingOnMSTeamsSync: l } = r.default;
  var c = require(863) /* module_863 */,
    GFitAllAction = require(449) /* GFitAllAction */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    DataModule_1588 = require(1588);
  class h extends GAction {
    constructor() {
      super();
      this._banner.setBannerText(
      GCore.GLocale.get(new GCore.GLocaleKey('GToggleFullscreenAction', 'fullscreen-banner'))
      );
    }

    _lastStates = {};
    _banner = new DataModule_1588();

    getId() {
      return h.ID;
    }

    getTitle() {
      return h.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_VIEW;
    }

    getShortcut() {
      return [GEditor.GKey.Constant.ALT_LEFT, GEditor.GKey.Constant.ENTER];
    }

    isEnabled() {
      return !!gDesigner.getActiveDocument() && this._isSupported();
    }

    isVisible() {
      return this._isSupported();
    }

    _isSupported() {
      return !l();
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-toggle-full-screen' : null;
    }

    isFullscreen() {
      return !(
        gDesigner.isPartVisible(c.Header) ||
        gDesigner.isPartVisible(c.Toolbar) ||
        gDesigner.isPartVisible(c.RightSidebars) ||
        gDesigner.isPartVisible(c.LeftSidebars) ||
        gDesigner.isPartVisible(c.Panels)
      );
    }

    execute() {
      var e = this.isFullscreen();
      (e
        ? this._banner.hide()
        : (this._updateLastStates(), gDesigner.isTouchEnabled() || this._banner.show()),
        gDesigner.setPartVisible(c.Header, !!e && this._lastStates.header, ''),
        gDesigner.setPartVisible(c.Toolbar, !!e && this._lastStates.toolbar, ''),
        gDesigner.setPartVisible(c.Panels, !!e && this._lastStates.panels),
        gDesigner.setPartVisible(c.RightSidebars, !!e && this._lastStates.rightSidebar),
        gDesigner.setPartVisible(c.LeftSidebars, !!e && this._lastStates.leftSidebar),
        gDesigner.relayout(),
        gDesigner.executeAction(GFitAllAction.ID, undefined, undefined, true),
        gDesigner.hasEventListeners(GEvent_fullscreen.default) &&
          gDesigner.trigger(new GEvent_fullscreen.default(e)));
    }

    _updateLastStates() {
      this._lastStates = {
        header: gDesigner.isPartVisible(c.Header),
        toolbar: gDesigner.isPartVisible(c.Toolbar),
        panels: gDesigner.isPartVisible(c.Panels),
        leftSidebar: gDesigner.isPartVisible(c.LeftSidebars),
        rightSidebar: gDesigner.isPartVisible(c.RightSidebars),
      };
    }

    toString() {
      return '[Object GToggleFullscreenAction]';
    }

    static ID = 'view.fullscreen';

    static TITLE = new GCore.GLocaleKey('GToggleFullscreenAction', 'title');

  }
  exports.exports = h;
}