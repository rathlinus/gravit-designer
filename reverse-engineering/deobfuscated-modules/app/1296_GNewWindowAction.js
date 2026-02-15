/**
 * Webpack Module #1296
 * Type: class
 * Name: GNewWindowAction
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
      (s.ID = "view.clone"),
      (s.TITLE = new o.GLocaleKey("GNewWindowAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_VIEW;
      }),
      (s.prototype.getGroup = function () {
        return "view";
      }),
      (s.prototype.getShortcut = function () {
        return [i.GKey.Constant.META, i.GKey.Constant.OPTION, "N"];
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