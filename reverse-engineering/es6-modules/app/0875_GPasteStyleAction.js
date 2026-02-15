/**
 * Webpack Module #875
 * Type: class
 * Name: GPasteStyleAction
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
      return MenuItemBuilder.CATEGORY_EDIT_PASTE;
    }

    getGroup() {
      return 'ccp/paste';
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-paste-style' : null;
    }

    getShortcut() {
      return [GEditor.GKey.Constant.F4];
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getClipboardMimeTypes();
      if (e && e.indexOf(GCore.GNode.MIME_TYPE) >= 0) {
        var module = gDesigner.getActiveDocument();
        if (module) {
          var require = module.getEditor().getIndividualSelection();
          if (require)
            for (var GEditor = 0; GEditor < require.length; ++GEditor)
              if (require[GEditor].hasMixin(GCore.GStylable)) return true;
        }
      }
      return false;
    }

    execute() {
      var e = GCore.GNode.deserialize(gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE));
      if (
        (e = gDesigner.getActiveDocument().filterUnrestrictedCommercialFileElements(e)) &&
        e.length > 0
      ) {
        for (var module = null, require = 0; require < e.length; ++require)
          if (e[require].hasMixin(GCore.GStylable)) {
            module = e[require];
            break;
          }
        if (!module) return;
        var GEditor = gDesigner.getActiveDocument().getEditor(),
          MenuItemBuilder = GEditor.getIndividualSelection();
        (module instanceof GCore.GText &&
          gDesigner.getActiveDocument().getScene().getActivePage().appendChild(module),
          GEditor.beginTransaction());
        try {
          for (require = 0; require < MenuItemBuilder.length; ++require) {
            var GElementAction = MenuItemBuilder[require];
            GElementAction.hasMixin(GCore.GStylable) && GElementAction.assignStyleFrom(module);
          }
        } finally {
          (GEditor.commitTransaction(GCore.GLocale.get(this.getTitle())),
            module instanceof GCore.GText &&
              gDesigner.getActiveDocument().getScene().getActivePage().removeChild(module));
        }
      }
    }

    toString() {
      return '[Object GPasteStyleAction]';
    }

    static ID = 'edit.paste.style';

    static TITLE = new GCore.GLocaleKey('GPasteStyleAction', 'title');

  }
  exports.exports = s;
}