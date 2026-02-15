/**
 * Webpack Module #1602
 * Type: class
 * Name: GNewClipboardAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */, require(4) /* module_4 */, require(41) /* module_41 */;
    require(53) /* module */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(18) /* module_18 */,
      r = require(163) /* module_163 */,
      s = (require(449) /* GFitAllAction */, require(31) /* GAction */);
    function l() {}
    o.GObject.inherit(l, s),
      (l.ID = "file.new.clipboard"),
      (l.TITLE = new o.GLocaleKey("GNewClipboardAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return a.CATEGORY_FILE;
      }),
      (l.prototype.getGroup = function () {
        return "document";
      }),
      (l.prototype.getShortcut = function () {
        return [
          i.GKey.Constant.SHIFT,
          i.GKey.Constant.CONTROL,
          i.GKey.Constant.OPTION,
          "N",
        ];
      }),
      (l.prototype.isEnabled = function () {
        return (
          !!gDesigner.getApplicationManager().isCopyPasteEnabled() &&
          !!gDesigner.getActiveDocument() &&
          !!gDesigner.getClipboardContent(o.GNode.MIME_TYPE)
        );
      }),
      (l.prototype.execute = function () {
        var e = o.GNode.deserialize(
          gDesigner.getClipboardContent(o.GNode.MIME_TYPE)
        );
        if (e && e.length > 0) {
          var module = e.filter(function (e) {
            return e instanceof o.GItem || e instanceof o.GLayer;
          });
          if (module.length > 0) {
            var require = gDesigner.createScene();
            require
              .getActivePage()
              .setProperties(["bck", "w", "h"], [o.GRGBColor.WHITE, 0, 0]),
              gDesigner.addDocument(new r(require));
            var i = gDesigner.getActiveDocument().getEditor();
            i.beginTransaction();
            try {
              i.insertElements(module, true, true, true);
            } finally {
              i.commitTransaction("Paste"),
                gDesigner.setClipboardContent(o.GNode.MIME_TYPE, null);
            }
            gDesigner.getActiveDocument().getActiveWindow().centerAndZoom();
          }
        }
      }),
      (l.prototype._getBBox = function (e) {
        var t = null;
        return (
          o.GUtil.each(e, function (e, n) {
            var i = n.getPaintBBox();
            i &&
              i.getWidth() + i.getHeight() > 0 &&
              (t = t
                ? t.united(i)
                : new o.GRect(i.getX(), i.getY(), i.getWidth(), i.getHeight()));
          }),
          t
        );
      }),
      (l.prototype.toString = function () {
        return "[Object GNewClipboardAction]";
      }),
      (exports.exports = l);
  }