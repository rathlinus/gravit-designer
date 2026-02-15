/**
 * Webpack Module #1312
 * Type: class
 * Name: GEditElementActon
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    a = (require(15) /* GEditor */, require(18)) /* MenuItemBuilder */,
    GElementAction = require(106);
  class s extends GElementAction {
    constructor() {
      super();
      this._title = new GCore.GLocaleKey('GEditElementActon', 'title');
    }

    _title = null;

    getId() {
      return s.ID;
    }

    getTitle() {
      return this._title;
    }

    getCategory() {
      return a.CATEGORY_EDIT;
    }

    getGroup() {
      return 'select';
    }

    getShortcut() {
      return null;
    }

    isEnabled(e) {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var t = false;
      if (
        (e =
          e ||
          (gDesigner.getActiveDocument()
            ? gDesigner.getActiveDocument().getEditor().getIndividualSelection()
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
    }

    execute(e) {
      var t = false;
      if (
        (e =
          e ||
          (gDesigner.getActiveDocument()
            ? gDesigner.getActiveDocument().getEditor().getIndividualSelection()
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
    }

    toString() {
      return '[Object GEditElementActon]';
    }

    static ID = 'edit.edit';

  }
  exports.exports = s;
}