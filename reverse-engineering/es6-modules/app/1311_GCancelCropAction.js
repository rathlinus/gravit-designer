/**
 * Webpack Module #1311
 * Type: class
 * Name: GCancelCropAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GTools = require(53) /* GTools */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    r = (require(31) /* GAction */, require(106)) /* GElementAction */;
  class s extends r {
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
      return null;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY;
    }

    getGroup() {
      return 'structure-group';
    }

    isEnabled() {
      if (!r.prototype.isEnabled.call(this)) return false;
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
      if (!r.prototype.isEnabled.call(this)) return false;
      var n = gDesigner.getActiveDocument();
      if (n) {
        var MenuItemBuilder = n.getEditor().getIndividualSelection(),
          l = MenuItemBuilder && MenuItemBuilder.length ? MenuItemBuilder[0] : null;
        l &&
          l instanceof GCore.GImage &&
          !GCore.GTransform.equals(l.getTransform(), l.getImageTransform()) &&
          GTools.GEditor.tryRunTransaction(
            l,
            function () {
              var e = l.getImageTransform();
              l.setProperties(['trf', 'ut', 'tl_sx'], [e, true, 0]);
            }.bind(this),
            GCore.GLocale.get(s.TITLE)
          );
      }
      var c = gDesigner.getToolManager();
      c.getActiveTool() instanceof GTools.GSubSelectTool
        ? (c.activateTool(GTools.GPointerTool, null, true),
          c.getActiveTool().setEditMode(GTools.GSelectTool.EditMode.Select))
        : c.getActiveTool() instanceof GTools.GPointerTool &&
          c.getActiveTool().setEditMode(GTools.GSelectTool.EditMode.Select);
    }

    toString() {
      return '[Object GCancelCropAction]';
    }

    static ID = 'modify.cancel-crop';

    static TITLE = new GCore.GLocaleKey('GCancelCropAction', 'title');

  }
  exports.exports = s;
}