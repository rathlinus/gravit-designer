/**
 * Webpack Module #1334
 * Type: class
 * Name: GDeselectAllAction
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = n(15) /* module_15 */,
      a = n(18) /* module_18 */,
      r = n(31) /* GAction */;
    function s() {}
    o.GObject.inherit(s, r),
      (s.ID = "edit.deselect-all"),
      (s.TITLE = new o.GLocaleKey("GDeselectAllAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_EDIT;
      }),
      (s.prototype.getGroup = function () {
        return "select";
      }),
      (s.prototype.getShortcut = function () {
        return [i.GKey.Constant.SHIFT, i.GKey.Constant.META, "A"];
      }),
      (s.prototype.isEnabled = function () {
        if (document.activeElement && $(document.activeElement).is(":editable"))
          return true;
        if (gDesigner.getActiveDocument()) {
          var e = gDesigner.getActiveDocument().getEditor().getSelection();
          if (e && e.length) return true;
        }
        return false;
      }),
      (s.prototype.execute = function () {
        document.activeElement &&
        $(document.activeElement).is(":editable") &&
        !$(document.activeElement).is("button") &&
        !gDesigner.isGravitIME(document.activeElement)
          ? document.execCommand("selectAll")
          : gDesigner.getActiveDocument().getEditor().clearSelection();
      }),
      (s.prototype.toString = function () {
        return "[Object GDeselectAllAction]";
      }),
      (e.exports = s);
  }