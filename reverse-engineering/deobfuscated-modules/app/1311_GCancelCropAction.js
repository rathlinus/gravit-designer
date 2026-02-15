/**
 * Webpack Module #1311
 * Type: class
 * Name: GCancelCropAction
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = n(53) /* module_53 */,
      a = n(18) /* module_18 */,
      r = (n(31) /* GAction */, n(106) /* GElementAction */);
    function s() {}
    o.GObject.inherit(s, r),
      (s.ID = "modify.cancel-crop"),
      (s.TITLE = new o.GLocaleKey("GCancelCropAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getIcon = function () {
        return null;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_MODIFY;
      }),
      (s.prototype.getGroup = function () {
        return "structure-group";
      }),
      (s.prototype.isEnabled = function () {
        if (!r.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var t = e.getEditor(),
            n = t.getIndividualSelection();
          if (
            n &&
            n.length &&
            n[0] instanceof o.GImage &&
            t.hasSelectionDetail()
          )
            return n[0].isReady();
        }
        return false;
      }),
      (s.prototype.execute = function (e, t) {
        if (!r.prototype.isEnabled.call(this)) return false;
        var n = gDesigner.getActiveDocument();
        if (n) {
          var a = n.getEditor().getIndividualSelection(),
            l = a && a.length ? a[0] : null;
          l &&
            l instanceof o.GImage &&
            !o.GTransform.equals(l.getTransform(), l.getImageTransform()) &&
            i.GEditor.tryRunTransaction(
              l,
              function () {
                var e = l.getImageTransform();
                l.setProperties(["trf", "ut", "tl_sx"], [e, true, 0]);
              }.bind(this),
              o.GLocale.get(s.TITLE)
            );
        }
        var c = gDesigner.getToolManager();
        c.getActiveTool() instanceof i.GSubSelectTool
          ? (c.activateTool(i.GPointerTool, null, true),
            c.getActiveTool().setEditMode(i.GSelectTool.EditMode.Select))
          : c.getActiveTool() instanceof i.GPointerTool &&
            c.getActiveTool().setEditMode(i.GSelectTool.EditMode.Select);
      }),
      (s.prototype.toString = function () {
        return "[Object GCancelCropAction]";
      }),
      (e.exports = s);
  }