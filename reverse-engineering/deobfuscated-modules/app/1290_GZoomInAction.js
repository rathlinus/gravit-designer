/**
 * Webpack Module #1290
 * Type: class
 * Name: GZoomInAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GTools = require(53) /* module */,
      GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      r = require(67) /* GRichTooltipConfig */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function c() {
      c.TOOLTIP_CONFIG = {
        [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GZoomInAction", "tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey("GZoomInAction", "tooltip-description")
          ),
          shortcut: c.SHORTCUT,
        }),
      };
    }
    GCore.GObject.inherit(c, GAction),
      (c.ID = "view.zoom.in"),
      (c.TITLE = new GCore.GLocaleKey("GZoomInAction", "title")),
      (c.ZOOM_STEP = 2),
      (c.SHORTCUT = [GEditor.GKey.Constant.META, "+"]),
      (c.TOOLTIP_CONFIG = null),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return c.TITLE;
      }),
      (c.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_VIEW_MAGNIFICATION;
      }),
      (c.prototype.getGroup = function () {
        return "zoom/magnification";
      }),
      (c.prototype.getShortcut = function () {
        return c.SHORTCUT;
      }),
      (c.prototype.isShortcutGlobal = function () {
        return true;
      }),
      (c.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-zoom-in" : null;
      }),
      (c.prototype.isEnabled = function () {
        var e = gDesigner.getWindows().getActiveWindow(),
          t = e ? e.getView() : null;
        return t && t.getZoom() < GEditor.GSceneWidget.options.maxZoomFactor;
      }),
      (c.prototype.execute = function () {
        var e = gDesigner.getWindows().getActiveWindow().getView(),
          t = null;
        if (GTools.GZoomTool.options.zoomLevels) {
          for (
            var require = GTools.GZoomTool.options.zoomLevels,
              GCore = e.getZoom(),
              r = require.length - 1,
              MenuItemBuilder = 0;
            MenuItemBuilder < require.length;
            MenuItemBuilder++
          )
            if ((GCore < require[r - MenuItemBuilder] && (t = require[r - MenuItemBuilder]), GCore === require[MenuItemBuilder])) {
              t = r > 0 ? require[MenuItemBuilder + 1] : GEditor.GSceneWidget.options.maxZoomFactor;
              break;
            }
        } else t = e.getZoom() * c.ZOOM_STEP;
        gDesigner.zoomAtViewCenter(e, t);
      }),
      (c.prototype.getTooltipConfig = function (e) {
        return (e && c.TOOLTIP_CONFIG[e]) || null;
      }),
      (c.prototype.toString = function () {
        return "[Object GZoomInAction]";
      }),
      (exports.exports = c);
  }