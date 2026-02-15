/**
 * Webpack Module #1179
 * Type: class
 * Name: GJoinPathsAction
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
      return MenuItemBuilder.CATEGORY_MODIFY_PATH;
    }

    getGroup() {
      return 'structure/path';
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-join-paths' : null;
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, 'J'];
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument();
      if (e) {
        var module = e.getEditor().getSelection();
        if (module && module.length > 1)
          for (var require = 0, GEditor = 0; GEditor < module.length; ++GEditor)
            if (
              !(module[GEditor] instanceof GCore.GImage) &&
              ((module[GEditor] instanceof GCore.GPathBase ||
                module[GEditor].hasMixin(GCore.GVertexSource)) &&
                require++,
              2 === require)
            )
              return true;
      }
      return false;
    }

    execute() {
      var e = gDesigner.getActiveDocument().getEditor(),
        t = e.getSelection();
      if (t && t.length) {
        e.beginTransaction();
        try {
          var require = new GCore.GRectangle();
          (GCore.GElement.prototype.assignFrom.call(require, t[0]),
            e.convertSelectionToPaths(true));
          var GEditor = e.joinPaths();
          GEditor &&
            (GCore.GElement.prototype.assignFrom.call(GEditor, require),
            e.updateSelection(false, [GEditor]));
        } finally {
          e.commitTransaction(GCore.GLocale.get(this.getTitle()));
        }
      }
    }

    toString() {
      return '[Object GJoinPathsAction]';
    }

    static ID = 'modify.join-paths';

    static TITLE = new GCore.GLocaleKey('GJoinPathsAction', 'title');

  }
  exports.exports = s;
}