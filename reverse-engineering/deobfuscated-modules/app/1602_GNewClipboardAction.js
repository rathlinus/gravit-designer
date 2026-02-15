/**
 * Webpack Module #1602
 * Type: class
 * Name: GNewClipboardAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */;
    require(53) /* module */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GDocument = require(163) /* GDocument */,
      s = (require(449) /* GFitAllAction */, require(31) /* GAction */);
    function l() {}
    GCore.GObject.inherit(l, s),
      (l.ID = "file.new.clipboard"),
      (l.TITLE = new GCore.GLocaleKey("GNewClipboardAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE;
      }),
      (l.prototype.getGroup = function () {
        return "document";
      }),
      (l.prototype.getShortcut = function () {
        return [
          GEditor.GKey.Constant.SHIFT,
          GEditor.GKey.Constant.CONTROL,
          GEditor.GKey.Constant.OPTION,
          "N",
        ];
      }),
      (l.prototype.isEnabled = function () {
        return (
          !!gDesigner.getApplicationManager().isCopyPasteEnabled() &&
          !!gDesigner.getActiveDocument() &&
          !!gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE)
        );
      }),
      (l.prototype.execute = function () {
        var e = GCore.GNode.deserialize(
          gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE)
        );
        if (e && e.length > 0) {
          var module = e.filter(function (e) {
            return e instanceof GCore.GItem || e instanceof GCore.GLayer;
          });
          if (module.length > 0) {
            var require = gDesigner.createScene();
            require
              .getActivePage()
              .setProperties(["bck", "w", "h"], [GCore.GRGBColor.WHITE, 0, 0]),
              gDesigner.addDocument(new GDocument(require));
            var GEditor = gDesigner.getActiveDocument().getEditor();
            GEditor.beginTransaction();
            try {
              GEditor.insertElements(module, true, true, true);
            } finally {
              GEditor.commitTransaction("Paste"),
                gDesigner.setClipboardContent(GCore.GNode.MIME_TYPE, null);
            }
            gDesigner.getActiveDocument().getActiveWindow().centerAndZoom();
          }
        }
      }),
      (l.prototype._getBBox = function (e) {
        var t = null;
        return (
          GCore.GUtil.each(e, function (e, n) {
            var GEditor = n.getPaintBBox();
            GEditor &&
              GEditor.getWidth() + GEditor.getHeight() > 0 &&
              (t = t
                ? t.united(GEditor)
                : new GCore.GRect(GEditor.getX(), GEditor.getY(), GEditor.getWidth(), GEditor.getHeight()));
          }),
          t
        );
      }),
      (l.prototype.toString = function () {
        return "[Object GNewClipboardAction]";
      }),
      (exports.exports = l);
  }