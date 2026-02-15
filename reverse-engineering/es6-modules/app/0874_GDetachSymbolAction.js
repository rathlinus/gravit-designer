/**
 * Webpack Module #874
 * Type: class
 * Name: GDetachSymbolAction
 */

function (exports, module, require) {
  'use strict';
  (require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(34)) /* polyfill_String_replace */;
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
      return MenuItemBuilder.CATEGORY_MODIFY_SYMBOL;
    }

    getGroup() {
      return 'structure/modify';
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-detach-symbol' : null;
    }

    getShortcut() {
      return [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, GEditor.GKey.Constant.F8];
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument();
      if (e) {
        var module = e.getEditor().getIndividualSelection();
        if (module && module.length)
          for (var require = module.length - 1; require >= 0; --require) {
            var GEditor = module[require];
            if (
              GEditor instanceof GCore.GSymbol &&
              !GEditor.isMaster() &&
              GEditor.getMasterSymbol()
            )
              return true;
          }
      }
      return false;
    }

    execute() {
      var e = gDesigner.getActiveDocument().getEditor(),
        t = GCore.GNode.order(e.getIndividualSelection().slice());
      if (t.length && t[0].getScene()) {
        e.beginTransaction();
        try {
          for (var require = 0, GEditor = 0; GEditor < t.length; ++GEditor) {
            var MenuItemBuilder = t[GEditor];
            MenuItemBuilder instanceof GCore.GSymbol && MenuItemBuilder.detach() && require++;
          }
        } finally {
          e.commitTransaction(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GDetachSymbolAction', 'text.number-detached')
            ).replace('%number', require > 1 ? 's' : '')
          );
        }
      }
    }

    toString() {
      return '[Object GDetachSymbolAction]';
    }

    static ID = 'modify.detachsymbol';

    static TITLE = new GCore.GLocaleKey('GDetachSymbolAction', 'title');

  }
  exports.exports = s;
}