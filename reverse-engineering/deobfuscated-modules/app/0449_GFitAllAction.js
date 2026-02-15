/**
 * Webpack Module #449
 * Type: class
 * Name: GFitAllAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function l() {
      l.TOOLTIP_CONFIG = {
        [GRichTooltipConfig.TOOLTIP_AREA.TOOLBAR]: GRichTooltipConfig.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GFitAllAction", "tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey("GFitAllAction", "tooltip-description")
          ),
          shortcut: l.SHORTCUT,
        }),
      };
    }
    GCore.GObject.inherit(l, GAction),
      (l.ID = "view.zoom.fit.all"),
      (l.TITLE = new GCore.GLocaleKey("GFitAllAction", "title")),
      (l.SHORTCUT = [GEditor.GKey.Constant.OPTION, GEditor.GKey.Constant.META, "0"]),
      (l.TOOLTIP_CONFIG = null),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_VIEW;
      }),
      (l.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-fit-all" : null;
      }),
      (l.prototype.getGroup = function () {
        return "zoom";
      }),
      (l.prototype.getShortcut = function () {
        return l.SHORTCUT;
      }),
      (l.prototype.isEnabled = function () {
        var e = gDesigner.getActiveDocument(),
          t = (e && e.getScene() && e.getScene().getPaintBBox()) || null;
        return t && !t.isEmpty();
      }),
      (l.prototype.execute = function () {
        var e,
          t = gDesigner.getActiveDocument(),
          n = t.getScene(),
          GEditor = t
            .getActiveWindow()
            .getView()
            .getViewConfiguration().multiPageView;
        if (n.isFixedSized() && !GEditor) {
          var GRichTooltipConfig = n.getActivePage();
          e = new GCore.GRect(0, 0, GRichTooltipConfig.getProperty("w"), GRichTooltipConfig.getProperty("h"));
        } else e = n.getPaintBBox(GEditor);
        e && !e.isEmpty() && t.getActiveWindow().getView().zoomAll(e, false);
      }),
      (l.prototype.getTooltipConfig = function (e) {
        return (e && l.TOOLTIP_CONFIG[e]) || null;
      }),
      (l.prototype.toString = function () {
        return "[Object GFitAllAction]";
      }),
      (exports.exports = l);
  }