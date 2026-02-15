/**
 * Webpack Module #1169
 * Type: class
 * Name: GShowGuideLinesAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(18) /* module_18 */,
      r = require(31) /* GAction */;
    function s() {}
    o.GObject.inherit(s, r),
      (s.ID = "view.canvas.show-guide-lines"),
      (s.TITLE = new o.GLocaleKey("GShowGuideLinesAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_VIEW_CANVAS;
      }),
      (s.prototype.getGroup = function () {
        return "show/canvas";
      }),
      (s.prototype.getShortcut = function () {
        return [i.GKey.Constant.META, ","];
      }),
      (s.prototype.isEnabled = function () {
        return !!gDesigner.getWindows().getActiveWindow();
      }),
      (s.prototype.isCheckable = function () {
        return true;
      }),
      (s.prototype.isChecked = function () {
        var e = gDesigner.getWindows().getActiveWindow();
        if (e) {
          var module = e.getView().getViewConfiguration();
          return !!module && true === module.guideLinesVisible;
        }
        return false;
      }),
      (s.prototype.execute = function () {
        var e = gDesigner.getWindows().getActiveWindow().getView();
        (e.getViewConfiguration().guideLinesVisible =
          !e.getViewConfiguration().guideLinesVisible),
          e.invalidate(),
          gDesigner.setSetting(
            "guide_lines_visible",
            e.getViewConfiguration().guideLinesVisible
          );
      }),
      (s.prototype.toString = function () {
        return "[Object GShowGuideLinesAction]";
      }),
      (exports.exports = s);
  }