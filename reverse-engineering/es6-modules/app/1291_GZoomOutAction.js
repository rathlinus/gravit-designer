/**
 * Webpack Module #1291
 * Type: class
 * Name: GZoomOutAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    r = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class c extends GAction {
    constructor() {
      super();
      c.TOOLTIP_CONFIG = {
      [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
      title: GCore.GLocale.get(new GCore.GLocaleKey('GZoomOutAction', 'tooltip-title')),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GZoomOutAction', 'tooltip-description')
      ),
      shortcut: c.SHORTCUT,
      }),
      };
    }

    getId() {
      return c.ID;
    }

    getTitle() {
      return c.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_VIEW_MAGNIFICATION;
    }

    getGroup() {
      return 'zoom/magnification';
    }

    getShortcut() {
      return c.SHORTCUT;
    }

    isShortcutGlobal() {
      return true;
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-zoom-out' : null;
    }

    isEnabled() {
      var e = gDesigner.getWindows().getActiveWindow(),
        t = e ? e.getView() : null;
      return t && t.getZoom() > GEditor.GSceneWidget.options.minZoomFactor;
    }

    execute() {
      var e = gDesigner.getWindows().getActiveWindow().getView(),
        t = null;
      if (GTools.GZoomTool.options.zoomLevels) {
        for (
          var require = GTools.GZoomTool.options.zoomLevels,
            GCore = e.getZoom(),
            r = (require.length, 0);
          r < require.length;
          r++
        )
          if ((GCore > require[r] && (t = require[r]), GCore === require[r])) {
            t = r > 0 ? require[r - 1] : GEditor.GSceneWidget.options.minZoomFactor;
            break;
          }
      } else t = e.getZoom() / c.ZOOM_STEP;
      gDesigner.zoomAtViewCenter(e, t);
    }

    getTooltipConfig(e) {
      return (e && c.TOOLTIP_CONFIG[e]) || null;
    }

    toString() {
      return '[Object GZoomOutAction]';
    }

    static TOOLTIP_CONFIG = {
      [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GZoomOutAction', 'tooltip-title')),
        description: GCore.GLocale.get(
          new GCore.GLocaleKey('GZoomOutAction', 'tooltip-description')
        ),
        shortcut: c.SHORTCUT,
      }),
    };

    static ID = 'zoom.out';

    static TITLE = new GCore.GLocaleKey('GZoomOutAction', 'title');

    static ZOOM_STEP = 2;

    static SHORTCUT = [GEditor.GKey.Constant.META, '-'];

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = c;
}