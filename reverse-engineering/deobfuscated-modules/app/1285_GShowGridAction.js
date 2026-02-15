/**
 * Webpack Module #1285
 * Type: class
 * Name: GShowGridAction
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
      (s.ID = "view.canvas.show-grid"),
      (s.TITLE = new GCore.GLocaleKey("GShowGridAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_VIEW_CANVAS;
      }),
      (s.prototype.getGroup = function () {
        return "show/canvas";
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.OPTION, "G"];
      }),
      (s.prototype.isEnabled = function () {
        return !!gDesigner.getActiveDocument();
      }),
      (s.prototype.isCheckable = function () {
        return true;
      }),
      (s.prototype.isChecked = function () {
        var e = gDesigner.getActiveDocument();
        return !!e && !!e.getScene().getProperty("gm");
      }),
      (s.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getScene();
        e.getProperty("gm")
          ? e.setProperty("gm", null)
          : e.setProperty(
              "gm",
              e.getProperty("lgm") || GCore.GScene.GridMode.Boxed
            );
      }),
      (s.prototype.toString = function () {
        return "[Object GShowGridAction]";
      }),
      (exports.exports = s);
  }