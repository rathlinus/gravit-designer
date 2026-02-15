/**
 * Webpack Module #1178
 * Type: class
 * Name: GDetachFromPathAction
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
      return 'structure/modify';
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-detach-from-path' : null;
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument()
        ? gDesigner.getActiveDocument().getEditor().getSelection()
        : null;
      if (e)
        for (var module = 0; module < e.length; ++module)
          if (e[module] instanceof GCore.GText && e[module].hasPathAttached()) return true;
      return false;
    }

    execute() {
      var e = gDesigner.getActiveDocument(),
        t = e ? e.getEditor() : null,
        n = t ? t.getIndividualSelection() : null,
        MenuItemBuilder = [];
      if (n)
        for (var GElementAction = 0; GElementAction < n.length; ++GElementAction)
          n[GElementAction] instanceof GCore.GText &&
            n[GElementAction].hasPathAttached() &&
            MenuItemBuilder.push(n[GElementAction]);
      t.beginTransaction();
      try {
        var r = e.getScene();
        MenuItemBuilder.forEach(function (e) {
          r.visitLinks(e, function (t) {
            t instanceof GCore.GPathBase && r.unlink(e, t);
          });
        });
      } finally {
        t.commitTransaction(GCore.GLocale.get(this.getTitle()));
      }
    }

    toString() {
      return '[Object GDetachFromPathAction]';
    }

    static ID = 'modify.detachFromPath';

    static TITLE = new GCore.GLocaleKey('GDetachFromPathAction', 'title');

  }
  exports.exports = r;
}