/**
 * Webpack Module #1295
 * Type: class
 * Name: GSnapUnitAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(53) /* module */,
      i = require(15) /* module */,
      a = require(1) /* module */,
      r = require(18) /* MenuItemBuilder */,
      s = require(31) /* GAction */;
    function l(e) {
      (this._category = e),
        (this._title = new a.GLocaleKey("GSnapUnitAction", "title." + e));
    }
    a.GObject.inherit(l, s),
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
        return r.CATEGORY_MODIFY_ALIGN;
      }),
      (l.prototype.getGroup = function () {
        return "arrange/snap-unit";
      }),
      (l.prototype.getShortcut = function () {
        switch (this._category) {
          case l.Type.FullUnit:
            return [i.GKey.Constant.SHIFT, i.GKey.Constant.META, "U"];
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
          o.GEditor.tryRunTransaction(
            n,
            function () {
              for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                if (n.hasMixin(a.GElement.Transform)) {
                  var o = n.getGeometryBBox();
                  if (o && o.getWidth() + o.getHeight() !== 0) {
                    var i = a.GMath.round(o.getX(), true),
                      r = a.GMath.round(o.getY(), true),
                      s = a.GMath.round(o.getWidth(), true),
                      c = a.GMath.round(o.getHeight(), true);
                    this._category === l.Type.HalfUnit &&
                      ((i += 0.5), (r += 0.5), (s += 0.5), (c += 0.5));
                    var d = new a.GTransform()
                      .translated(-o.getX(), -o.getY())
                      .scaled(s / (o.getWidth() || 1), c / (o.getHeight() || 1))
                      .translated(o.getX(), o.getY())
                      .translated(i - o.getX(), r - o.getY());
                    n.transform(d);
                  }
                }
              }
            }.bind(this),
            a.GLocale.get(this.getTitle())
          );
      }),
      (l.prototype.toString = function () {
        return "[Object GSnapUnitAction]";
      }),
      (exports.exports = l);
  }