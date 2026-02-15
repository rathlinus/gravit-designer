/**
 * Webpack Module #1296
 * Type: class
 * Name: GNewWindowAction
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
      (s.ID = "view.clone"),
      (s.TITLE = new GCore.GLocaleKey("GNewWindowAction", "title")),
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
        return "view";
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.OPTION, "N"];
      }),
      (s.prototype.isEnabled = function () {
        return !!gDesigner.getWindows().getActiveWindow();
      }),
      (s.prototype.execute = function () {
        gDesigner
          .getWindows()
          .addWindow(gDesigner.getWindows().getActiveWindow());
      }),
      (s.prototype.toString = function () {
        return "[Object GNewWindowAction]";
      }),
      (exports.exports = s);
  }