/**
 * Webpack Module #1312
 * Type: class
 * Name: GEditElementActon
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(53) /* module */,
      i = require(1) /* module */,
      a = (require(15) /* module */, require(18) /* MenuItemBuilder */),
      r = require(106) /* GElementAction */;
    function s() {
      this._title = new i.GLocaleKey("GEditElementActon", "title");
    }
    i.GObject.inherit(s, r),
      (s.ID = "edit.edit"),
      (s.prototype._title = null),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return this._title;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_EDIT;
      }),
      (s.prototype.getGroup = function () {
        return "select";
      }),
      (s.prototype.getShortcut = function () {
        return null;
      }),
      (s.prototype.isEnabled = function (e) {
        if (!r.prototype.isEnabled.call(this)) return false;
        var t = false;
        if (
          (e =
            e ||
            (gDesigner.getActiveDocument()
              ? gDesigner
                  .getActiveDocument()
                  .getEditor()
                  .getIndividualSelection()
              : null)) &&
          e.length > 0 &&
          !gDesigner.getActiveDocument().getEditor().isInlineEditing()
        )
          if (
            gDesigner.getToolManager().getActiveTool() !=
            gDesigner.getToolManager().getTool(o.GSubSelectTool)
          )
            t = true;
          else
            for (var require = 0; require < e.length; ++require)
              e[require] instanceof i.GText && (t = true);
        return t;
      }),
      (s.prototype.execute = function (e) {
        var t = false;
        if (
          (e =
            e ||
            (gDesigner.getActiveDocument()
              ? gDesigner
                  .getActiveDocument()
                  .getEditor()
                  .getIndividualSelection()
              : null)) &&
          e.length > 0
        ) {
          for (var require = 0; require < e.length && !t; ++require)
            if (e[require] instanceof i.GText) {
              var a = e[require].getGeometryBBox(),
                r = gDesigner.getWindows().getActiveWindow(),
                s = r ? r.getView() : null;
              a &&
                s &&
                (t = gDesigner
                  .getActiveDocument()
                  .getEditor()
                  .openInlineEditor(e[require], s, new i.GPoint(a.getX(), a.getY())));
            }
          t ||
            gDesigner.getToolManager().getActiveTool() ==
              gDesigner.getToolManager().getTool(o.GSubSelectTool) ||
            gDesigner.getToolManager().activateTool(o.GSubSelectTool, null, true);
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GEditElementActon]";
      }),
      (exports.exports = s);
  }