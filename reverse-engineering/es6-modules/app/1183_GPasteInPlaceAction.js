/**
 * Webpack Module #1183
 * Type: class
 * Name: GPasteInPlaceAction
 */

function (exports, module, require) {
  'use strict';
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GElementAction = require(106);
  class l extends GAction {
    constructor() {
      super();
    }

    getId() {
      return l.ID;
    }

    getTitle() {
      return l.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_EDIT_PASTE;
    }

    getGroup() {
      return 'ccp/paste';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, 'V'];
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument();
      if (e && e.getEditor().getSelection()) {
        if (document.queryCommandSupported('paste')) return true;
        var module = gDesigner.getClipboardMimeTypes();
        if (module && module.indexOf(GCore.GNode.MIME_TYPE) >= 0)
          return !!gDesigner.getActiveDocument();
      }
      return false;
    }

    execute() {
      (gDesigner.getPaste().assignCallback(this._paste.bind(this)),
        (!gDesigner.isTouchDevice() && document.execCommand('paste')) ||
          (gDesigner.getPaste().assignCallback(null),
          this._paste(
            GCore.GNode.deserialize(gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE))
          )));
    }

    _paste(e, t) {
      if (e && e.length > 0) {
        for (var require = [], GEditor = 0; GEditor < e.length; ++GEditor)
          e[GEditor] instanceof GCore.GElement && require.push(e[GEditor]);
        if (
          (require = gDesigner
            .getActiveDocument()
            .filterUnrestrictedCommercialFileElements(require)).length > 0
        ) {
          var MenuItemBuilder = gDesigner.getActiveDocument().getEditor();
          require.forEach((e) => {
            e instanceof GCore.GText &&
              !e.getProperty('content') &&
              (MenuItemBuilder.insertElements([e], false, true, true),
              e.getParent().removeChild(e));
          });
          var GAction = null,
            GElementAction = null,
            l = MenuItemBuilder.getSelectionBBox(true);
          (l && ((GAction = l.getX()), (GElementAction = l.getY())),
            MenuItemBuilder.beginTransaction());
          try {
            MenuItemBuilder.insertElements(require, !t, true, true, true);
            var c = null;
            require.forEach((e) => {
              var t = e.getGeometryBBox();
              t && (c = c ? c.united(t) : t);
            });
            var d = c ? c.getX() : null,
              u = c ? c.getY() : null,
              p = null;
            if (
              (null === GAction ||
                null === d ||
                (GCore.GMath.isEqualEps(GAction, d) && GCore.GMath.isEqualEps(GElementAction, u)) ||
                (p = new GCore.GTransform(1, 0, 0, 1, GAction - d, GElementAction - u)),
              p)
            )
              for (GEditor = 0; GEditor < require.length; ++GEditor) {
                var g = require[GEditor];
                g.hasMixin(GCore.GElement.Transform) && g.transform(p, true);
              }
          } finally {
            MenuItemBuilder.commitTransaction(GCore.GLocale.get(this.getTitle()));
          }
        }
      }
    }

    toString() {
      return '[Object GPasteInPlaceAction]';
    }

    static ID = 'edit.paste.in-place';

    static TITLE = new GCore.GLocaleKey('GPasteInPlaceAction', 'title');

  }
  exports.exports = l;
}