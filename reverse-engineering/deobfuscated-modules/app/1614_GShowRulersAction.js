/**
 * Webpack Module #1614
 * Type: class
 * Name: GShowRulersAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      GShowGuideLinesAction = require(1169) /* GShowGuideLinesAction */;
    function l() {}
    GCore.GObject.inherit(l, GAction),
      (l.ID = "view.canvas.show-rulers"),
      (l.TITLE = new GCore.GLocaleKey("GShowRulersAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_VIEW_CANVAS;
      }),
      (l.prototype.getGroup = function () {
        return "show/canvas";
      }),
      (l.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.OPTION, "R"];
      }),
      (l.prototype.isEnabled = function () {
        return !(
          !gDesigner.getWindows().getActiveWindow() ||
          !gDesigner.getWindows().getActiveWindow().getView()
        );
      }),
      (l.prototype.isCheckable = function () {
        return true;
      }),
      (l.prototype.isChecked = function () {
        return (
          gDesigner.getWindows().getActiveWindow() &&
          gDesigner.getWindows().getActiveWindow().getView() &&
          gDesigner.getWindows().getActiveWindow().getView().hasRulers()
        );
      }),
      (l.prototype.execute = function () {
        var e = gDesigner.getWindows().getActiveWindow().getView(),
          t = !e.hasRulers(),
          n = gDesigner.getAction(GShowGuideLinesAction.ID);
        t &&
          !n.isChecked() &&
          gDesigner.executeAction(GShowGuideLinesAction.ID, undefined, undefined, true),
          e.setRulers(t),
          $("#mainframe").toggleClass("rulers", t),
          gDesigner.setSetting("rulers_visible", t);
      }),
      (l.prototype.toString = function () {
        return "[Object GShowRulersAction]";
      }),
      (exports.exports = l);
  }