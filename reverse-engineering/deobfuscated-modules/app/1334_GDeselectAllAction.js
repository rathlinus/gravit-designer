/**
 * Webpack Module #1334
 * Type: class
 * Name: GDeselectAllAction
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
          var exports = gDesigner.getActiveDocument().getEditor().getSelection();
          if (exports && exports.length) return true;
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
      (exports.exports = s);
  }