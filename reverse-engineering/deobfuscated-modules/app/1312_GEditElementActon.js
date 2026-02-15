/**
 * Webpack Module #1312
 * Type: class
 * Name: GEditElementActon
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GTools = require(53) /* module */,
      GCore = require(1) /* module */,
      a = (require(15) /* module */, require(18) /* MenuItemBuilder */),
      GElementAction = require(106) /* GElementAction */;
    function s() {
      this._title = new GCore.GLocaleKey("GEditElementActon", "title");
    }
    GCore.GObject.inherit(s, GElementAction),
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
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
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
            gDesigner.getToolManager().getTool(GTools.GSubSelectTool)
          )
            t = true;
          else
            for (var require = 0; require < e.length; ++require)
              e[require] instanceof GCore.GText && (t = true);
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
            if (e[require] instanceof GCore.GText) {
              var a = e[require].getGeometryBBox(),
                GElementAction = gDesigner.getWindows().getActiveWindow(),
                s = GElementAction ? GElementAction.getView() : null;
              a &&
                s &&
                (t = gDesigner
                  .getActiveDocument()
                  .getEditor()
                  .openInlineEditor(e[require], s, new GCore.GPoint(a.getX(), a.getY())));
            }
          t ||
            gDesigner.getToolManager().getActiveTool() ==
              gDesigner.getToolManager().getTool(GTools.GSubSelectTool) ||
            gDesigner.getToolManager().activateTool(GTools.GSubSelectTool, null, true);
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GEditElementActon]";
      }),
      (exports.exports = s);
  }