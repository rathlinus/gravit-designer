/**
 * Webpack Module #1332
 * Type: class
 * Name: GDeleteAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(3) /* module_3 */, require(4) /* module_4 */, require(41) /* module_41 */;
    var i = require(1) /* module */,
      a = require(53) /* module */,
      r = require(15) /* module */,
      s = require(10) /* module_10 */,
      l = require(40) /* module_40 */,
      c = o(require(44) /* GSystemDialog */),
      d = require(567) /* GAnnotationsSidebar */,
      u = require(18) /* module_18 */,
      p = require(31) /* GAction */;
    const g = require(358) /* module_358 */,
      h = require(607) /* module_607 */;
    function f() {}
    i.GObject.inherit(f, p),
      (f.ID = "edit.delete"),
      (f.TITLE = new i.GLocaleKey("GDeleteAction", "title")),
      (f.prototype._isConfirmWindowDisplaying = false),
      (f.prototype.getId = function () {
        return f.ID;
      }),
      (f.prototype.getTitle = function () {
        return f.TITLE;
      }),
      (f.prototype.getCategory = function () {
        return u.CATEGORY_EDIT;
      }),
      (f.prototype.getGroup = function () {
        return "ccp";
      }),
      (f.prototype.getShortcut = function () {
        return [r.GKey.Constant.REMOVE];
      }),
      (f.prototype.getAdditionalShortcuts = function () {
        var e = [];
        return (
          i.GSystem.operatingSystem === i.GSystem.OperatingSystem.OSX_IOS
            ? e.push([r.GKey.Constant.DELETE])
            : e.push([r.GKey.Constant.BACKSPACE]),
          e
        );
      }),
      (f.prototype.isEnabled = function () {
        var e = gDesigner.getActiveDocument();
        if (this._isConfirmWindowDisplaying) return false;
        if (e) {
          var module = e.getEditor().getSelection();
          if (module)
            for (var require = 0; require < module.length; ++require)
              if (module[require] instanceof i.GItem || module[require] instanceof i.GLayer)
                return true;
        }
        return false;
      }),
      (f.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e.getEditor(),
          n = e.getActiveStylesList(),
          o = gDesigner.getMouseOverContext();
        if (
          s.HAS_ANNOTATIONS &&
          gDesigner.getRightSidebars().getActiveSidebar() === d.ID
        ) {
          var r = t.getSelection().filter((e) => g.canDeleteAnnotation(e));
          r.length &&
            (this._setIsConfirmWindowDisplaying(true),
            c.default.confirm(
              i.GLocale.get(
                new i.GLocaleKey("GAnnotationPanel", "text.confirm-remove")
              ),
              (e) => {
                e &&
                  gDesigner.getActiveDocument() &&
                  gDesigner.getActiveDocument().getEditor() === t &&
                  g.removeAnnotations(
                    r,
                    r[0].getParent(),
                    i.GLocale.get(this.getTitle())
                  ),
                  this._setIsConfirmWindowDisplaying(false);
              },
              null,
              null,
              null,
              true,
              true
            ));
        } else if (o.context && (n.Fill || n.Border || n.Effect)) {
          var u = null,
            p = null,
            m = t.getSelection();
          if (o.context === h.FillPropertiesPanel) (u = n.Fill), (p = "fill");
          else if (o.context === h.BorderPropertiesPanel)
            (u = n.Border), (p = "border");
          else {
            if (o.context !== h.EffectPropertiesPanel)
              return void t.deleteSelection();
            (u = n.Effect), (p = "effect");
          }
          a.GEditor.tryRunTransaction(
            e.getScene(),
            function () {
              (0, l.iterateEqualStyleLayers)(p, u, m, function (e) {
                e.getParent().removeChild(e);
              });
            },
            i.GLocale.get(f.TITLE)
          );
        } else t.deleteSelection();
      }),
      (f.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-delete" : "";
      }),
      (f.prototype._setIsConfirmWindowDisplaying = function (e) {
        this._isConfirmWindowDisplaying = e;
      }),
      (f.prototype.toString = function () {
        return "[Object GDeleteAction]";
      }),
      (exports.exports = f);
  }