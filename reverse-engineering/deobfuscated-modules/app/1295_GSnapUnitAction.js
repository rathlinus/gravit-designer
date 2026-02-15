/**
 * Webpack Module #1295
 * Type: class
 * Name: GSnapUnitAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GTools = require(53) /* GTools */,
      GEditor = require(15) /* GEditor */,
      GCore = require(1) /* GCore */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function l(e) {
      (this._category = e),
        (this._title = new GCore.GLocaleKey("GSnapUnitAction", "title." + e));
    }
    GCore.GObject.inherit(l, GAction),
      (l.Type = { FullUnit: "full", HalfUnit: "half" }),
      (l.ID = "arrange.snap-unit"),
      (l.prototype._category = null),
      (l.prototype._title = null),
      (l.prototype.getId = function () {
        return l.ID + "." + this._category;
      }),
      (l.prototype.getTitle = function () {
        return this._title;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY_ALIGN;
      }),
      (l.prototype.getGroup = function () {
        return "arrange/snap-unit";
      }),
      (l.prototype.getShortcut = function () {
        switch (this._category) {
          case l.Type.FullUnit:
            return [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, "U"];
          default:
            return null;
        }
      }),
      (l.prototype.isEnabled = function (e) {
        return (
          (e =
            e ||
            (gDesigner.getActiveDocument()
              ? gDesigner
                  .getActiveDocument()
                  .getEditor()
                  .getIndividualSelection()
              : null)) && e.length > 0
        );
      }),
      (l.prototype.execute = function (e) {
        var t = gDesigner.getActiveDocument(),
          n = t.getScene();
        e || (e = t.getEditor().getIndividualSelection()),
          GTools.GEditor.tryRunTransaction(
            n,
            function () {
              for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                if (n.hasMixin(GCore.GElement.Transform)) {
                  var GTools = n.getGeometryBBox();
                  if (GTools && GTools.getWidth() + GTools.getHeight() !== 0) {
                    var GEditor = GCore.GMath.round(GTools.getX(), true),
                      MenuItemBuilder = GCore.GMath.round(GTools.getY(), true),
                      GAction = GCore.GMath.round(GTools.getWidth(), true),
                      c = GCore.GMath.round(GTools.getHeight(), true);
                    this._category === l.Type.HalfUnit &&
                      ((GEditor += 0.5), (MenuItemBuilder += 0.5), (GAction += 0.5), (c += 0.5));
                    var d = new GCore.GTransform()
                      .translated(-GTools.getX(), -GTools.getY())
                      .scaled(GAction / (GTools.getWidth() || 1), c / (GTools.getHeight() || 1))
                      .translated(GTools.getX(), GTools.getY())
                      .translated(GEditor - GTools.getX(), MenuItemBuilder - GTools.getY());
                    n.transform(d);
                  }
                }
              }
            }.bind(this),
            GCore.GLocale.get(this.getTitle())
          );
      }),
      (l.prototype.toString = function () {
        return "[Object GSnapUnitAction]";
      }),
      (exports.exports = l);
  }