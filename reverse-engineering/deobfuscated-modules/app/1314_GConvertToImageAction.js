/**
 * Webpack Module #1314
 * Type: class
 * Name: GConvertToImageAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(40) /* CollaborationMergeUtils */,
      r = require(18) /* MenuItemBuilder */,
      s = require(106) /* GElementAction */;
    require(811) /* GGroupAction */;
    function l() {}
    o.GObject.inherit(l, s),
      (l.USE_DPI = true),
      (l.ID = "modify.path2bmp"),
      (l.TITLE = new o.GLocaleKey("GConvertToImageAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-flatten" : "";
      }),
      (l.prototype.getCategory = function () {
        return r.CATEGORY_MODIFY;
      }),
      (l.prototype.getGroup = function () {
        return "structure-bitmap";
      }),
      (l.prototype.getShortcut = function () {
        return [i.GKey.Constant.F7];
      }),
      (l.prototype.isEnabled = function () {
        if (!s.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument()
          ? gDesigner.getActiveDocument().getEditor().getSelection()
          : null;
        if (e)
          for (var module = 0; module < e.length; ++module)
            if (
              e[module] instanceof o.GElement &&
              e[module].getPaintBBox() &&
              !e[module].getPaintBBox().isEmpty()
            )
              return true;
        return false;
      }),
      (l.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e ? e.getEditor() : null,
          n = t ? o.GNode.order(t.getIndividualSelection().slice()) : null,
          i = [];
        if (n)
          for (var a = 0; a < n.length; ++a)
            n[a] instanceof o.GElement &&
              n[a].getPaintBBox() &&
              !n[a].getPaintBBox().isEmpty() &&
              i.push(n[a]);
        if (i.length) {
          t.beginTransaction(), t.clearSelection();
          try {
            var r = this._groupStuff(i);
            if (r) {
              var s = r.getParent(),
                l = r.getNext(),
                c = this._convertToImage(r);
              c &&
                (s.insertChild(c, l),
                s.removeChild(r),
                t.updateSelection(false, [c]));
            }
          } finally {
            t.commitTransaction(o.GLocale.get(this.getTitle()));
          }
        }
      }),
      (l.prototype._groupStuff = function (e) {
        if (e && 1 === e.length) return e[0];
        for (
          var module = gDesigner.getActiveDocument(),
            require = module ? module.getEditor() : null,
            i = new o.GGroup(),
            r = [],
            s = 0;
          s < e.length;
          ++s
        ) {
          (g = e[s]).validateInsertion(i) && r.push(g);
        }
        if (r.length > 0) {
          var l,
            c = r[r.length - 1],
            d = c.getParent(),
            u = c.getNext();
          if (!d.isLocked() && i.validateInsertion(d)) {
            d.insertChild(i, u);
            var p = gDesigner.getActiveDocument().getScene();
            try {
              l = new Set();
              for (s = 0; s < r.length; ++s) l.add(r[s].getParent());
              (0, a.blockChanges)(require, l, p, i);
              for (s = 0; s < r.length; ++s) {
                var g;
                (g = r[s]).getParent().removeChild(g), i.appendChild(g);
              }
            } finally {
              (0, a.releaseChanges)(require, l, p, i);
            }
          }
        }
        return i;
      }),
      (l.prototype._convertToImage = function (e) {
        var t, n;
        e instanceof o.GImage ||
          (t = o.GPaintCanvas.getScreenDPI() * o.GLength.DPI),
          e instanceof o.GElement && (n = e.getScene()),
          e instanceof o.GImage ||
            (t = Math.max(
              t || o.GLength.DPI,
              (n && n.getProperty("dpi")) || o.GLength.DPI
            ));
        var i = e.toBitmap(null, null, null, null, null, t),
          a = new o.GImage(),
          r = 1;
        e instanceof o.GImage || (r /= t / o.GLength.DPI);
        var s = e.getPaintBBox().getSide(o.GRect.Side.TOP_LEFT),
          l = new o.GTransform().scaled(r, r).translated(s.getX(), s.getY());
        return (
          a.setProperties(
            ["iw", "ih", "url", "trf", "itrf"],
            [
              i.getWidth(),
              i.getHeight(),
              i.toImageDataUrl(o.GBitmap.ImageType.PNG),
              l,
              l,
            ]
          ),
          a
        );
      }),
      (l.prototype.toString = function () {
        return "[Object GConvertToImageAction]";
      }),
      (exports.exports = l);
  }