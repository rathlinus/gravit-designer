/**
 * Webpack Module #1290
 * Type: class
 * Name: GZoomInAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(53) /* module */,
      i = require(1) /* module */,
      a = require(15) /* module */,
      r = require(67) /* GRichTooltipConfig */,
      s = require(18) /* module_18 */,
      l = require(31) /* GAction */;
    function c() {
      c.TOOLTIP_CONFIG = {
        [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
          title: i.GLocale.get(
            new i.GLocaleKey("GZoomInAction", "tooltip-title")
          ),
          description: i.GLocale.get(
            new i.GLocaleKey("GZoomInAction", "tooltip-description")
          ),
          shortcut: c.SHORTCUT,
        }),
      };
    }
    i.GObject.inherit(c, l),
      (c.ID = "view.zoom.in"),
      (c.TITLE = new i.GLocaleKey("GZoomInAction", "title")),
      (c.ZOOM_STEP = 2),
      (c.SHORTCUT = [a.GKey.Constant.META, "+"]),
      (c.TOOLTIP_CONFIG = null),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return c.TITLE;
      }),
      (c.prototype.getCategory = function () {
        return s.CATEGORY_VIEW_MAGNIFICATION;
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
        return t && t.getZoom() < a.GSceneWidget.options.maxZoomFactor;
      }),
      (c.prototype.execute = function () {
        var e = gDesigner.getWindows().getActiveWindow().getView(),
          t = null;
        if (o.GZoomTool.options.zoomLevels) {
          for (
            var require = o.GZoomTool.options.zoomLevels,
              i = e.getZoom(),
              r = require.length - 1,
              s = 0;
            s < require.length;
            s++
          )
            if ((i < require[r - s] && (t = require[r - s]), i === require[s])) {
              t = r > 0 ? require[s + 1] : a.GSceneWidget.options.maxZoomFactor;
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