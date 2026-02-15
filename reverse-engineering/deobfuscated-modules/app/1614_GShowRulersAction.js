/**
 * Webpack Module #1614
 * Type: class
 * Name: GShowRulersAction
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = n(15) /* module_15 */,
      a = n(18) /* module_18 */,
      r = n(31) /* GAction */,
      s = n(1169) /* GShowGuideLinesAction */;
    function l() {}
    o.GObject.inherit(l, r),
      (l.ID = "view.canvas.show-rulers"),
      (l.TITLE = new o.GLocaleKey("GShowRulersAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return a.CATEGORY_VIEW_CANVAS;
      }),
      (l.prototype.getGroup = function () {
        return "show/canvas";
      }),
      (l.prototype.getShortcut = function () {
        return [i.GKey.Constant.META, i.GKey.Constant.OPTION, "R"];
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
          n = gDesigner.getAction(s.ID);
        t &&
          !n.isChecked() &&
          gDesigner.executeAction(s.ID, undefined, undefined, true),
          e.setRulers(t),
          $("#mainframe").toggleClass("rulers", t),
          gDesigner.setSetting("rulers_visible", t);
      }),
      (l.prototype.toString = function () {
        return "[Object GShowRulersAction]";
      }),
      (e.exports = l);
  }