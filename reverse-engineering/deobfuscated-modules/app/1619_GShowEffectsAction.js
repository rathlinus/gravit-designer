/**
 * Webpack Module #1619
 * Type: class
 * Name: GShowEffectsAction
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
      (s.ID = "view.canvas.show-effects"),
      (s.TITLE = new GCore.GLocaleKey("GShowEffectsAction", "title")),
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
      (s.prototype.isEnabled = function () {
        return !!gDesigner.getWindows().getActiveWindow();
      }),
      (s.prototype.isCheckable = function () {
        return true;
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, "E"];
      }),
      (s.prototype.isChecked = function () {
        var e = gDesigner.getWindows().getActiveWindow();
        return !!e && !e.getView().getViewConfiguration().ignoreEffects;
      }),
      (s.prototype.execute = function () {
        var e = gDesigner.getWindows().getActiveWindow();
        if (!e) return false;
        var t = e.getView();
        (t.getViewConfiguration().ignoreEffects =
          !t.getViewConfiguration().ignoreEffects),
          t.invalidateAndResetCache(null);
      }),
      (s.prototype.toString = function () {
        return "[Object GShowEffectsAction]";
      }),
      (exports.exports = s);
  }