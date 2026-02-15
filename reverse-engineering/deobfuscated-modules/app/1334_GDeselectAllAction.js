/**
 * Webpack Module #1334
 * Type: class
 * Name: GDeselectAllAction
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
      (s.ID = "edit.deselect-all"),
      (s.TITLE = new GCore.GLocaleKey("GDeselectAllAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_EDIT;
      }),
      (s.prototype.getGroup = function () {
        return "select";
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, "A"];
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