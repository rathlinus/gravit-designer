/**
 * Webpack Module #1171
 * Type: class
 * Name: GUndoAction
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      a = require(67) /* GRichTooltipConfig */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function l() {
      l.TOOLTIP_CONFIG = {
        [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GUndoAction", "tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey("GUndoAction", "tooltip-description")
          ),
          shortcut: l.SHORTCUT,
        }),
      };
    }
    GCore.GObject.inherit(l, GAction),
      (l.ID = "edit.undo"),
      (l.TITLE = new GCore.GLocaleKey("GUndoAction", "title")),
      (l.SHORTCUT = [GEditor.GKey.Constant.META, "z"]),
      (l.TOOLTIP_CONFIG = null),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        var e = gDesigner.getActiveDocument();
        return e && e.getEditor() && e.getEditor().hasUndoState()
          ? GCore.GLocale.get(
              new GCore.GLocaleKey("GUndoAction", "undo-action")
            ).replace("%action", e.getEditor().getUndoStateName())
          : GCore.GLocale.get(l.TITLE);
      }),
      (l.prototype.getIcon = function () {
        return "gravit-icon-undo";
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_EDIT;
      }),
      (l.prototype.getGroup = function () {
        return "undo_redo";
      }),
      (l.prototype.getShortcut = function () {
        return l.SHORTCUT;
      }),
      (l.prototype.isEnabled = function () {
        return (
          !(
            gDesigner.getActiveDocument() &&
            !gDesigner.getActiveDocument().isEditingEnabled()
          ) &&
          (!(
            !document.activeElement ||
            !$(document.activeElement).is(":editable") ||
            $(document.activeElement).is(":button") ||
            $(document.activeElement).is("select") ||
            gDesigner.isGravitIME(document.activeElement)
          ) ||
            !!(
              gDesigner.getActiveDocument() &&
              gDesigner.getActiveDocument().getEditor() &&
              gDesigner.getActiveDocument().getEditor().hasUndoState()
            ))
        );
      }),
      (l.prototype.execute = function () {
        !document.activeElement ||
        !$(document.activeElement).is(":editable") ||
        $(document.activeElement).is(":button") ||
        $(document.activeElement).is("select") ||
        gDesigner.isGravitIME(document.activeElement)
          ? gDesigner.getActiveDocument().getEditor().undoState()
          : document.execCommand("undo");
      }),
      (l.prototype.getTooltipConfig = function (e) {
        return (e && l.TOOLTIP_CONFIG[e]) || null;
      }),
      (l.prototype.toString = function () {
        return "[Object GUndoAction]";
      }),
      (exports.exports = l);
  }