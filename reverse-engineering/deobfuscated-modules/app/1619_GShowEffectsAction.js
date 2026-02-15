/**
 * Webpack Module #1619
 * Type: class
 * Name: GShowEffectsAction
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
      (s.ID = "view.canvas.show-effects"),
      (s.TITLE = new o.GLocaleKey("GShowEffectsAction", "title")),
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
      (s.prototype.isEnabled = function () {
        return !!gDesigner.getWindows().getActiveWindow();
      }),
      (s.prototype.isCheckable = function () {
        return true;
      }),
      (s.prototype.getShortcut = function () {
        return [i.GKey.Constant.META, "E"];
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