/**
 * Webpack Module #873
 * Type: class
 * Name: GSplitPathAction
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

    getShortcut() {
      return [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, 'J'];
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-split-path' : null;
    }

    isEnabled() {
      var e = gDesigner.getActiveDocument();
      if (e) {
        var module = e.getEditor().getSelection();
        if (module)
          for (var require = 0; require < module.length; ++require)
            if (module[require] instanceof GCore.GCompoundPath) return true;
      }
      return false;
    }

    execute() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument().getEditor(),
        t = e.getSelection().slice();
      if (t && t.length) {
        e.beginTransaction();
        try {
          for (var require = [], GEditor = 0; GEditor < t.length; ++GEditor) {
            var MenuItemBuilder = t[GEditor];
            if (MenuItemBuilder instanceof GCore.GCompoundPath) {
              var s = new GCore.GRectangle();
              GCore.GElement.prototype.assignFrom.call(s, MenuItemBuilder);
              var l = e.splitCompoundPath(MenuItemBuilder);
              if (l && l.length)
                for (var c = 0; c < l.length; ++c) {
                  var d = l[c];
                  (GCore.GElement.prototype.assignFrom.call(d, s), require.push(d));
                }
            }
          }
          require.length && e.updateSelection(false, require);
        } finally {
          e.commitTransaction(GCore.GLocale.get(this.getTitle()));
        }
      }
    }

    toString() {
      return '[Object GSplitPathAction]';
    }

    static ID = 'modify.split-path';

    static TITLE = new GCore.GLocaleKey('GSplitPathAction', 'title');

  }
  exports.exports = s;
}