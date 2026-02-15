/**
 * Webpack Module #876
 * Type: class
 * Name: GPasteAndReplaceAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */, require(4) /* module_4 */, require(41) /* module_41 */, require(32) /* module_32 */, require(38) /* module_38 */, require(33) /* module_33 */;
    var o = require(1) /* module */,
      i = require(15) /* module */;
    const a = require(18) /* module_18 */,
      r = require(106) /* GElementAction */;
    function s() {}
    o.GObject.inherit(s, r),
      (s.ID = "edit.paste.replace"),
      (s.TITLE = new o.GLocaleKey("GPasteAndReplaceAction", "title")),
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
        return a.CATEGORY_EDIT_PASTE;
      }),
      (s.prototype.getGroup = function () {
        return "ccp/paste";
      }),
      (s.prototype.getShortcut = function () {
        return [i.GKey.Constant.OPTION, i.GKey.Constant.COMMAND, "V"];
      }),
      (s.prototype.isEnabled = function () {
        if (!r.prototype.isEnabled.call(this)) return false;
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getEditor(),
          require = module && module.getSelection();
        if (require && require.length > 0) {
          if (document.queryCommandSupported("paste")) return true;
          const e = gDesigner.getClipboardMimeTypes();
          if (e && e.indexOf(o.GNode.MIME_TYPE) >= 0) return true;
        }
        return false;
      }),
      (s.prototype.execute = function () {
        gDesigner.getPaste().assignCallback(this._paste.bind(this)),
          (!gDesigner.isTouchDevice() && document.execCommand("paste")) ||
            (gDesigner.getPaste().assignCallback(null),
            this._paste(
              o.GNode.deserialize(
                gDesigner.getClipboardContent(o.GNode.MIME_TYPE)
              )
            ));
      }),
      (s.prototype._paste = function (e) {
        if (e && e.length > 0) {
          const t = gDesigner.getActiveDocument();
          if (!t) return;
          const n = t && t.getEditor();
          if (!n || !n.hasSelection()) return;
          const i = t.filterUnrestrictedCommercialFileElements(
            e.filter((e) => e instanceof o.GElement)
          );
          if (i.length > 0) {
            n.beginTransaction();
            try {
              let e = [];
              const t = n.getSelection().slice();
              this._fixTexts(i),
                t.forEach((t) => {
                  const n = this._replace(t, i);
                  n && n.length > 0 && (e = e.concat(n));
                }),
                n.insertElements(e, true, true, false, true);
            } finally {
              n.commitTransaction(o.GLocale.get(this.getTitle()));
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
              if (t instanceof o.GText)
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
        const i = e.getGeometryBBox(),
          a = new o.GTransform(
            1,
            0,
            0,
            1,
            i.getX() - require.getX(),
            i.getY() - require.getY()
          ),
          r = this._clone(t);
        return (
          r.forEach((e) => {
            e.hasMixin(o.GElement.Transform) && e.transform(a, true);
          }),
          e.getParent().removeChild(e),
          r
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