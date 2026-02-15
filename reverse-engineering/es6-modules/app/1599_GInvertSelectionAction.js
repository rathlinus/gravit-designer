/**
 * Webpack Module #1599
 * Type: class
 * Name: GInvertSelectionAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class s extends GAction {
    constructor() {
      super();
    }

    getId() {
      return s.ID;
    }

    getTitle() {
      return s.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_EDIT;
    }

    getGroup() {
      return 'select';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, 'I'];
    }

    isEnabled() {
      return !!gDesigner.getActiveDocument();
    }

    execute() {
      var e = gDesigner.getActiveDocument(),
        t = e.getScene(),
        n = t.getActivePage(),
        GEditor = gDesigner
          .getActiveDocument()
          .getActiveWindow()
          .getView()
          .getViewConfiguration().multiPageView,
        MenuItemBuilder = [];
      (t.accept(function (e) {
        if (
          e instanceof GCore.GItem &&
          !e.hasMixin(GCore.GAnnotation) &&
          !(e.getParent() instanceof GCore.GItem) &&
          !e.hasFlag(GCore.GNode.Flag.Selected) &&
          (e.getPage() === n || GEditor) &&
          !e.isLocked()
        ) {
          var t =
              !e.getProperty('vis') ||
              e.findParent(function (e) {
                return e instanceof GCore.GBlock && !e.getProperty('vis');
              }),
            GAction = e.getProperty('plkt'),
            s =
              GAction & GCore.GBlock.ProgramLck.NoEdit &&
              GAction & GCore.GBlock.ProgramLck.NoSizeChanges &&
              GAction & GCore.GBlock.ProgramLck.NoMove &&
              GAction & GCore.GBlock.ProgramLck.NoDelete;
          t || s || MenuItemBuilder.push(e);
        }
      }),
        e.getEditor().updateSelection(false, MenuItemBuilder));
    }

    toString() {
      return '[Object GInvertSelectionAction]';
    }

    static ID = 'edit.invert-selection';

    static TITLE = new GCore.GLocaleKey('GInvertSelectionAction', 'title');

  }
  exports.exports = s;
}