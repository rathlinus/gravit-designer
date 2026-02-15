/**
 * Webpack Module #1310
 * Type: class
 * Name: GCropAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GTools = require(53) /* GTools */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GElementAction = require(106);
  class s extends GElementAction {
    constructor() {
      super();
    }

    getId() {
      return s.ID;
    }

    getTitle() {
      return s.TITLE;
    }

    getIcon() {
      return 'gravit-icon-crop';
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY;
    }

    getGroup() {
      return 'structure-group';
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument();
      if (e) {
        var module = e.getEditor(),
          require = module.getIndividualSelection();
        if (
          require &&
          require.length &&
          require[0] instanceof GCore.GImage &&
          module.hasSelectionDetail()
        )
          return require[0].isReady();
      }
      return false;
    }

    execute(e, t) {
      var n = gDesigner.getToolManager();
      n.getActiveTool() instanceof GTools.GSubSelectTool
        ? (n.activateTool(GTools.GPointerTool, null, true),
          n.getActiveTool().setEditMode(GTools.GSelectTool.EditMode.Select))
        : n.getActiveTool() instanceof GTools.GPointerTool &&
          n.getActiveTool().setEditMode(GTools.GSelectTool.EditMode.Select);
    }

    toString() {
      return '[Object GCropAction]';
    }

    static ID = 'modify.crop';

    static TITLE = new GCore.GLocaleKey('GCropAction', 'title');

  }
  exports.exports = s;
}