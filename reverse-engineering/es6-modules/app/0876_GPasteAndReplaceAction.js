/**
 * Webpack Module #876
 * Type: class
 * Name: GPasteAndReplaceAction
 */

function (exports, module, require) {
  'use strict';
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(32) /* stub_requires_670 */,
    require(38) /* stub_requires_680 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15);
  const MenuItemBuilder = require(18) /* MenuItemBuilder */,
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

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-paste-and-replace' : null;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_EDIT_PASTE;
    }

    getGroup() {
      return 'ccp/paste';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.OPTION, GEditor.GKey.Constant.COMMAND, 'V'];
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      const exports = gDesigner.getActiveDocument(),
        module = exports && exports.getEditor(),
        require = module && module.getSelection();
      if (require && require.length > 0) {
        if (document.queryCommandSupported('paste')) return true;
        const e = gDesigner.getClipboardMimeTypes();
        if (e && e.indexOf(GCore.GNode.MIME_TYPE) >= 0) return true;
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

    _paste(e) {
      if (e && e.length > 0) {
        const t = gDesigner.getActiveDocument();
        if (!t) return;
        const n = t && t.getEditor();
        if (!n || !n.hasSelection()) return;
        const GEditor = t.filterUnrestrictedCommercialFileElements(
          e.filter((e) => e instanceof GCore.GElement)
        );
        if (GEditor.length > 0) {
          n.beginTransaction();
          try {
            let e = [];
            const t = n.getSelection().slice();
            (this._fixTexts(GEditor),
              t.forEach((t) => {
                const n = this._replace(t, GEditor);
                n && n.length > 0 && (e = e.concat(n));
              }),
              n.insertElements(e, true, true, false, true));
          } finally {
            n.commitTransaction(GCore.GLocale.get(this.getTitle()));
          }
        }
      }
    }

    _fixTexts(e) {
      const module = gDesigner.getActiveDocument(),
        require = module && module.getEditor();
      require &&
        e.forEach((e) => {
          e.accept((t) => {
            if (t instanceof GCore.GText)
              return (
                require.insertElements([e], true, true, false),
                e.getParent().removeChild(e),
                false
              );
          });
        });
    }

    _replace(e, t) {
      const require = this._getBoundingBox(t);
      if (!require) return;
      const GEditor = e.getGeometryBBox(),
        MenuItemBuilder = new GCore.GTransform(
          1,
          0,
          0,
          1,
          GEditor.getX() - require.getX(),
          GEditor.getY() - require.getY()
        ),
        GElementAction = this._clone(t);
      return (
        GElementAction.forEach((e) => {
          e.hasMixin(GCore.GElement.Transform) && e.transform(MenuItemBuilder, true);
        }),
        e.getParent().removeChild(e),
        GElementAction
      );
    }

    _clone(e) {
      return e.map((e) => e.clone());
    }

    _getBoundingBox(e) {
      let module;
      return (
        e.forEach((e) => {
          const require = e.getGeometryBBox();
          require && !require.isEmpty() && (module = module ? module.united(require) : require);
        }),
        module
      );
    }

    toString() {
      return '[Object GPasteAndReplaceAction]';
    }

    static ID = 'edit.paste.replace';

    static TITLE = new GCore.GLocaleKey('GPasteAndReplaceAction', 'title');

  }
  exports.exports = s;
}