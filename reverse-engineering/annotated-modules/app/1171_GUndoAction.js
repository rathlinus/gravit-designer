/**
 * Webpack Module #1171
 * Type: class
 * Name: GUndoAction
 */

function (e, t, n) {
    "use strict";
    n(20) /* polyfill_RegExp_exec */, n(3) /* polyfill_RegExp_toString */, n(34) /* polyfill_String_replace */;
    var o = n(1) /* module */,
      i = n(15) /* module */,
      a = n(67) /* GRichTooltipConfig */,
      r = n(18) /* MenuItemBuilder */,
      s = n(31) /* GAction */;
    function l() {
      l.TOOLTIP_CONFIG = {
        [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
          title: o.GLocale.get(
            new o.GLocaleKey("GUndoAction", "tooltip-title")
          ),
          description: o.GLocale.get(
            new o.GLocaleKey("GUndoAction", "tooltip-description")
          ),
          shortcut: l.SHORTCUT,
        }),
      };
    }
    o.GObject.inherit(l, s),
      (l.ID = "edit.undo"),
      (l.TITLE = new o.GLocaleKey("GUndoAction", "title")),
      (l.SHORTCUT = [i.GKey.Constant.META, "z"]),
      (l.TOOLTIP_CONFIG = null),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        var e = gDesigner.getActiveDocument();
        return e && e.getEditor() && e.getEditor().hasUndoState()
          ? o.GLocale.get(
              new o.GLocaleKey("GUndoAction", "undo-action")
            ).replace("%action", e.getEditor().getUndoStateName())
          : o.GLocale.get(l.TITLE);
      }),
      (l.prototype.getIcon = function () {
        return "gravit-icon-undo";
      }),
      (l.prototype.getCategory = function () {
        return r.CATEGORY_EDIT;
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
      (e.exports = l);
  }