/**
 * Webpack Module #1315
 * Type: class
 * Name: GDuplicateAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
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

    getCategory() {
      return MenuItemBuilder.CATEGORY_EDIT;
    }

    getGroup() {
      return 'ccp';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, 'D'];
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-duplicate' : null;
    }

    getAdditionalShortcuts() {
      return [[GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, 'D']];
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument();
      return e && null != e.getEditor().getSelection();
    }

    execute() {
      var e = gDesigner.getActiveDocument().getEditor();
      e.beginTransaction();
      try {
        e.cloneSelection(false, true);
      } finally {
        e.commitTransaction(GCore.GLocale.get(this.getTitle()));
      }
    }

    toString() {
      return '[Object GDuplicateAction]';
    }

    static ID = 'edit.duplicate';

    static TITLE = new GCore.GLocaleKey('GDuplicateAction', 'title');

  }
  exports.exports = s;
}