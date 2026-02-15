/**
 * Webpack Module #876
 * Type: class
 * Name: GPasteAndReplaceAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(32) /* stub_requires_670 */, require(38) /* stub_requires_680 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */;
    const MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function s() {}
    GCore.GObject.inherit(s, GElementAction),
      (s.ID = "edit.paste.replace"),
      (s.TITLE = new GCore.GLocaleKey("GPasteAndReplaceAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled()
          ? "gravit-icon-paste-and-replace"
          : null;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_EDIT_PASTE;
      }),
      (s.prototype.getGroup = function () {
        return "ccp/paste";
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.OPTION, GEditor.GKey.Constant.COMMAND, "V"];
      }),
      (s.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getEditor(),
          require = module && module.getSelection();
        if (require && require.length > 0) {
          if (document.queryCommandSupported("paste")) return true;
          const e = gDesigner.getClipboardMimeTypes();
          if (e && e.indexOf(GCore.GNode.MIME_TYPE) >= 0) return true;
        }
        return false;
      }),
      (s.prototype.execute = function () {
        gDesigner.getPaste().assignCallback(this._paste.bind(this)),
          (!gDesigner.isTouchDevice() && document.execCommand("paste")) ||
            (gDesigner.getPaste().assignCallback(null),
            this._paste(
              GCore.GNode.deserialize(
                gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE)
              )
            ));
      }),
      (s.prototype._paste = function (e) {
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
              this._fixTexts(GEditor),
                t.forEach((t) => {
                  const n = this._replace(t, GEditor);
                  n && n.length > 0 && (e = e.concat(n));
                }),
                n.insertElements(e, true, true, false, true);
            } finally {
              n.commitTransaction(GCore.GLocale.get(this.getTitle()));
            }
          }
        }
      }),
      (s.prototype._fixTexts = function (e) {
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
      }),
      (s.prototype._replace = function (e, t) {
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
      }),
      (s.prototype._clone = function (e) {
        return e.map((e) => e.clone());
      }),
      (s.prototype._getBoundingBox = function (e) {
        let module;
        return (
          e.forEach((e) => {
            const require = e.getGeometryBBox();
            require && !require.isEmpty() && (module = module ? module.united(require) : require);
          }),
          module
        );
      }),
      (s.prototype.toString = function () {
        return "[Object GPasteAndReplaceAction]";
      }),
      (exports.exports = s);
  }