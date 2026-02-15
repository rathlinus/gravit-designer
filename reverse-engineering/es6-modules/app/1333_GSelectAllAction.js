/**
 * Webpack Module #1333
 * Type: class
 * Name: GSelectAllAction
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
      return [GEditor.GKey.Constant.META, 'A'];
    }

    isEnabled() {
      return (
        !(!document.activeElement || !$(document.activeElement).is(':editable')) ||
        !!gDesigner.getActiveDocument()
      );
    }

    execute() {
      if (
        document.activeElement &&
        $(document.activeElement).is(':editable') &&
        !$(document.activeElement).is('button') &&
        !gDesigner.isGravitIME(document.activeElement)
      )
        document.execCommand('selectAll');
      else {
        var exports = gDesigner.getActiveDocument().getEditor(),
          module = gDesigner.getActiveDocument().getScene(),
          require = module.getActivePage(),
          GEditor = gDesigner
            .getActiveDocument()
            .getActiveWindow()
            .getView()
            .getViewConfiguration().multiPageView,
          MenuItemBuilder = [];
        (module.accept(function (e) {
          if (
            e instanceof GCore.GItem &&
            !e.hasMixin(GCore.GAnnotation) &&
            !(e.getParent() instanceof GCore.GItem) &&
            (e.getPage() === require || GEditor) &&
            !e.isLocked()
          ) {
            var module =
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
            module || s || MenuItemBuilder.push(e);
          }
        }),
          exports.updateSelection(false, MenuItemBuilder));
      }
    }

    toString() {
      return '[Object GSelectAllAction]';
    }

    static ID = 'edit.select-all';

    static TITLE = new GCore.GLocaleKey('GSelectAllAction', 'title');

  }
  exports.exports = s;
}