/**
 * Webpack Module #1177
 * Type: class
 * Name: GResetInstanceAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    i = (require(15) /* GEditor */, require(18)) /* MenuItemBuilder */,
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
      return i.CATEGORY_MODIFY_SYMBOL;
    }

    getGroup() {
      return 'structure/modify';
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-reset-instance' : null;
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument();
      if (e) {
        var module = e.getEditor().getIndividualSelection();
        if (module && module.length)
          for (var require = module.length - 1; require >= 0; --require) {
            var i = module[require];
            if (!i.isLocked()) {
              if (i instanceof GCore.GSymbol && !i.isLocked() && !i.inSync()) return true;
              var r = null;
              if (
                (r = i.findParent(function (e) {
                  return e instanceof GCore.GSymbol;
                })) &&
                !r.inSync(i, true)
              )
                return true;
            }
          }
      }
      return false;
    }

    execute() {
      var e = gDesigner.getActiveDocument().getEditor(),
        t = GCore.GNode.order(e.getIndividualSelection().slice());
      e.beginTransaction();
      try {
        for (var require = 0; require < t.length; ++require) {
          var i = t[require];
          if (
            (i instanceof GCore.GSymbol && !i.isLocked() && !i.inSync() && i.synchronize(),
            !(i instanceof GCore.GSymbol))
          ) {
            var GElementAction = null;
            (GElementAction = i.findParent(function (e) {
              return e instanceof GCore.GSymbol;
            })) &&
              (GElementAction.inSync(i, true) || GElementAction.synchronize(i));
          }
        }
      } finally {
        e.commitTransaction(GCore.GLocale.get(r.TITLE));
      }
    }

    toString() {
      return '[Object GResetInstanceAction]';
    }

    static ID = 'modify.resetinstance';

    static TITLE = new GCore.GLocaleKey('GResetInstanceAction', 'title');

  }
  exports.exports = r;
}