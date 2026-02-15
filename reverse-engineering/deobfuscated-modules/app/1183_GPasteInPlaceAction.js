/**
 * Webpack Module #1183
 * Type: class
 * Name: GPasteInPlaceAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */, require(4) /* module_4 */, require(32) /* module_32 */, require(33) /* module_33 */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(18) /* module_18 */,
      r = require(31) /* GAction */,
      s = require(106) /* GElementAction */;
    function l() {}
    o.GObject.inherit(l, r),
      (l.ID = "edit.paste.in-place"),
      (l.TITLE = new o.GLocaleKey("GPasteInPlaceAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return a.CATEGORY_EDIT_PASTE;
      }),
      (l.prototype.getGroup = function () {
        return "ccp/paste";
      }),
      (l.prototype.getShortcut = function () {
        return [i.GKey.Constant.SHIFT, i.GKey.Constant.META, "V"];
      }),
      (l.prototype.isEnabled = function () {
        if (!s.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e && e.getEditor().getSelection()) {
          if (document.queryCommandSupported("paste")) return true;
          var module = gDesigner.getClipboardMimeTypes();
          if (module && module.indexOf(o.GNode.MIME_TYPE) >= 0)
            return !!gDesigner.getActiveDocument();
        }
        return false;
      }),
      (l.prototype.execute = function () {
        gDesigner.getPaste().assignCallback(this._paste.bind(this)),
          (!gDesigner.isTouchDevice() && document.execCommand("paste")) ||
            (gDesigner.getPaste().assignCallback(null),
            this._paste(
              o.GNode.deserialize(
                gDesigner.getClipboardContent(o.GNode.MIME_TYPE)
              )
            ));
      }),
      (l.prototype._paste = function (e, t) {
        if (e && e.length > 0) {
          for (var require = [], i = 0; i < e.length; ++i)
            e[i] instanceof o.GElement && require.push(e[i]);
          if (
            (require = gDesigner
              .getActiveDocument()
              .filterUnrestrictedCommercialFileElements(require)).length > 0
          ) {
            var a = gDesigner.getActiveDocument().getEditor();
            require.forEach((e) => {
              e instanceof o.GText &&
                !e.getProperty("content") &&
                (a.insertElements([e], false, true, true),
                e.getParent().removeChild(e));
            });
            var r = null,
              s = null,
              l = a.getSelectionBBox(true);
            l && ((r = l.getX()), (s = l.getY())), a.beginTransaction();
            try {
              a.insertElements(require, !t, true, true, true);
              var c = null;
              require.forEach((e) => {
                var t = e.getGeometryBBox();
                t && (c = c ? c.united(t) : t);
              });
              var d = c ? c.getX() : null,
                u = c ? c.getY() : null,
                p = null;
              if (
                (null === r ||
                  null === d ||
                  (o.GMath.isEqualEps(r, d) && o.GMath.isEqualEps(s, u)) ||
                  (p = new o.GTransform(1, 0, 0, 1, r - d, s - u)),
                p)
              )
                for (i = 0; i < require.length; ++i) {
                  var g = require[i];
                  g.hasMixin(o.GElement.Transform) && g.transform(p, true);
                }
            } finally {
              a.commitTransaction(o.GLocale.get(this.getTitle()));
            }
          }
        }
      }),
      (l.prototype.toString = function () {
        return "[Object GPasteInPlaceAction]";
      }),
      (exports.exports = l);
  }