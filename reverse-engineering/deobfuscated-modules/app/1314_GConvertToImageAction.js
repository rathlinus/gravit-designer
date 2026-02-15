/**
 * Webpack Module #1314
 * Type: class
 * Name: GConvertToImageAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    require(811) /* GGroupAction */;
    function l() {}
    GCore.GObject.inherit(l, GElementAction),
      (l.USE_DPI = true),
      (l.ID = "modify.path2bmp"),
      (l.TITLE = new GCore.GLocaleKey("GConvertToImageAction", "title")),
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
        return MenuItemBuilder.CATEGORY_MODIFY;
      }),
      (l.prototype.getGroup = function () {
        return "structure-bitmap";
      }),
      (l.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.F7];
      }),
      (l.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument()
          ? gDesigner.getActiveDocument().getEditor().getSelection()
          : null;
        if (e)
          for (var module = 0; module < e.length; ++module)
            if (
              e[module] instanceof GCore.GElement &&
              e[module].getPaintBBox() &&
              !e[module].getPaintBBox().isEmpty()
            )
              return true;
        return false;
      }),
      (l.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e ? e.getEditor() : null,
          n = t ? GCore.GNode.order(t.getIndividualSelection().slice()) : null,
          GEditor = [];
        if (n)
          for (var CollaborationMergeUtils = 0; CollaborationMergeUtils < n.length; ++CollaborationMergeUtils)
            n[CollaborationMergeUtils] instanceof GCore.GElement &&
              n[CollaborationMergeUtils].getPaintBBox() &&
              !n[CollaborationMergeUtils].getPaintBBox().isEmpty() &&
              GEditor.push(n[CollaborationMergeUtils]);
        if (GEditor.length) {
          t.beginTransaction(), t.clearSelection();
          try {
            var MenuItemBuilder = this._groupStuff(GEditor);
            if (MenuItemBuilder) {
              var GElementAction = MenuItemBuilder.getParent(),
                l = MenuItemBuilder.getNext(),
                c = this._convertToImage(MenuItemBuilder);
              c &&
                (GElementAction.insertChild(c, l),
                GElementAction.removeChild(MenuItemBuilder),
                t.updateSelection(false, [c]));
            }
          } finally {
            t.commitTransaction(GCore.GLocale.get(this.getTitle()));
          }
        }
      }),
      (l.prototype._groupStuff = function (e) {
        if (e && 1 === e.length) return e[0];
        for (
          var module = gDesigner.getActiveDocument(),
            require = module ? module.getEditor() : null,
            GEditor = new GCore.GGroup(),
            MenuItemBuilder = [],
            GElementAction = 0;
          GElementAction < e.length;
          ++GElementAction
        ) {
          (g = e[GElementAction]).validateInsertion(GEditor) && MenuItemBuilder.push(g);
        }
        if (MenuItemBuilder.length > 0) {
          var l,
            c = MenuItemBuilder[MenuItemBuilder.length - 1],
            d = c.getParent(),
            u = c.getNext();
          if (!d.isLocked() && GEditor.validateInsertion(d)) {
            d.insertChild(GEditor, u);
            var p = gDesigner.getActiveDocument().getScene();
            try {
              l = new Set();
              for (GElementAction = 0; GElementAction < MenuItemBuilder.length; ++GElementAction) l.add(MenuItemBuilder[GElementAction].getParent());
              (0, CollaborationMergeUtils.blockChanges)(require, l, p, GEditor);
              for (GElementAction = 0; GElementAction < MenuItemBuilder.length; ++GElementAction) {
                var g;
                (g = MenuItemBuilder[GElementAction]).getParent().removeChild(g), GEditor.appendChild(g);
              }
            } finally {
              (0, CollaborationMergeUtils.releaseChanges)(require, l, p, GEditor);
            }
          }
        }
        return GEditor;
      }),
      (l.prototype._convertToImage = function (e) {
        var t, n;
        e instanceof GCore.GImage ||
          (t = GCore.GPaintCanvas.getScreenDPI() * GCore.GLength.DPI),
          e instanceof GCore.GElement && (n = e.getScene()),
          e instanceof GCore.GImage ||
            (t = Math.max(
              t || GCore.GLength.DPI,
              (n && n.getProperty("dpi")) || GCore.GLength.DPI
            ));
        var GEditor = e.toBitmap(null, null, null, null, null, t),
          CollaborationMergeUtils = new GCore.GImage(),
          MenuItemBuilder = 1;
        e instanceof GCore.GImage || (MenuItemBuilder /= t / GCore.GLength.DPI);
        var GElementAction = e.getPaintBBox().getSide(GCore.GRect.Side.TOP_LEFT),
          l = new GCore.GTransform().scaled(MenuItemBuilder, MenuItemBuilder).translated(GElementAction.getX(), GElementAction.getY());
        return (
          CollaborationMergeUtils.setProperties(
            ["iw", "ih", "url", "trf", "itrf"],
            [
              GEditor.getWidth(),
              GEditor.getHeight(),
              GEditor.toImageDataUrl(GCore.GBitmap.ImageType.PNG),
              l,
              l,
            ]
          ),
          CollaborationMergeUtils
        );
      }),
      (l.prototype.toString = function () {
        return "[Object GConvertToImageAction]";
      }),
      (exports.exports = l);
  }