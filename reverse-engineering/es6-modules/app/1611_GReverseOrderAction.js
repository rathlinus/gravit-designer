/**
 * Webpack Module #1611
 * Type: class
 * Name: GReverseOrderAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GElementAction = require(106);
  class r extends GElementAction {
    constructor() {
      super();
    }

    getId() {
      return r.ID;
    }

    getTitle() {
      return r.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY_PATH;
    }

    getGroup() {
      return 'structure/path';
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument()
          ? gDesigner.getActiveDocument().getEditor().getSelection()
          : null,
        t = false;
      if (e)
        for (var require = 0; !t && require < e.length; ++require)
          e[require] instanceof GCore.GPath && (t = true);
      return t;
    }

    execute() {
      var e = gDesigner.getActiveDocument(),
        t = e ? e.getEditor() : null,
        n = t ? t.getSelection() : null,
        MenuItemBuilder = [];
      if (n)
        for (var GElementAction = 0; GElementAction < n.length; ++GElementAction) {
          var r = n[GElementAction];
          r instanceof GCore.GPath && MenuItemBuilder.push(r);
        }
      if (MenuItemBuilder.length) {
        t.beginTransaction();
        try {
          for (GElementAction = 0; GElementAction < MenuItemBuilder.length; ++GElementAction)
            MenuItemBuilder[GElementAction].reverseOrder();
        } finally {
          t.commitTransaction(GCore.GLocale.get(this.getTitle()));
        }
      }
    }

    toString() {
      return '[Object GReverseOrderAction]';
    }

    static ID = 'modify.reverse-order';

    static TITLE = new GCore.GLocaleKey('GReverseOrderAction', 'title');

  }
  exports.exports = r;
}