/**
 * Webpack Module #1282
 * Type: class
 * Name: GOriginalViewAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function s() {}
    GCore.GObject.inherit(s, GAction),
      (s.ID = "view.zoom.original"),
      (s.TITLE = new GCore.GLocaleKey("GOriginalViewAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_VIEW;
      }),
      (s.prototype.getGroup = function () {
        return "zoom";
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, "0"];
      }),
      (s.prototype.isEnabled = function () {
        return !!gDesigner.getActiveDocument();
      }),
      (s.prototype.execute = function () {
        var e,
          t = gDesigner.getActiveDocument(),
          n = t
            .getActiveWindow()
            .getView()
            .getViewConfiguration().multiPageView,
          GEditor = t.getScene();
        if (GEditor.isFixedSized()) {
          var MenuItemBuilder = GEditor.getActivePage();
          if (
            ((e = new GCore.GRect(0, 0, MenuItemBuilder.getProperty("w"), MenuItemBuilder.getProperty("h"))), n)
          ) {
            var GAction = MenuItemBuilder.getPosition(true);
            GAction && (e = e.translated(GAction.getX(), GAction.getY()));
          }
        } else e = GEditor.getPaintBBox(n);
        e &&
          !e.isEmpty() &&
          t
            .getActiveWindow()
            .getView()
            .zoomAtCenter(e.getSide(GCore.GRect.Side.CENTER), 1);
      }),
      (s.prototype.toString = function () {
        return "[Object GOriginalViewAction]";
      }),
      (exports.exports = s);
  }