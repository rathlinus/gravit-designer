/**
 * Module 383
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  require(5) /* GPoint */;
  var n = require(24) /* GEditorOptions */, r = require(81) /* GEditorAnnotation */, o = require(17) /* GRGBColor */, a = require(95) /* GImage */, s = require(6) /* GRect */, l = require(7) /* GTransform */, h = require(14) /* GPaintCanvas */;
  function A() {
  }
  A.prototype._icon = null, A.prototype._iconVisible = false, A.prototype.getAnnotationOptions = function () {
    throw new Error("Not implemented");
  }, A.prototype.getAnnotationBBox = function (e, t, i) {
    return r.getAnnotationBBox(e, t, this.getAnnotationOptions().size, i).expanded(n.annotPickDistance, n.annotPickDistance, n.annotPickDistance, n.annotPickDistance);
  }, A.prototype.getAnnotHalfWidth = function () {
    return this.getAnnotationOptions().size / 2;
  }, A.prototype.paintAnnotation = function (e, t, i, n, a) {
    var A = this.getAnnotationOptions();
    if (r.paintAnnotation(e, t, i, A.type, A.inverted, A.size, a || e.selectionOutlineColor, o.WHITE, A.outlineWidth, A.shadowColor, A.outsideStroke), this.isIconVisible()) {
      var c = this._icon.getImageCanvas();
      if (c) {
        t && (i = t.mapPoint(i));
        var p, u = e.canvas.getTransform(true), d = new l(), g = this._icon.getGeometryBBox(), f = g.getSide(s.Side.CENTER), m = Math.floor(i.getX() - f.getX()), y = Math.floor(i.getY() - f.getY());
        n && (d = new l().translated(-f.getX(), -f.getY()).rotated(-n).translated(f.getX(), f.getY())), A.iconDynamicColor && ((p = e.canvas.createCanvas(g)).fillCanvas(a || e.selectionOutlineColor, 1), p.drawImage(c, 0, 0, true, 1, h.CompositeOperator.DestinationIn, true, g.getWidth(), g.getHeight()), c = p), d = d.translated(m, y), e.canvas.setTransform(u.preMultiplied(d)), e.canvas.drawImage(c, 0, 0, false, 1, null, false, g.getWidth(), g.getHeight()), e.canvas.setTransform(u), p && p.destroy();
      }
    }
  }, A.prototype.setIcon = function (e) {
    if (e) {
      var module = new XMLHttpRequest();
      module.addEventListener("load", function () {
        if (200 == module.status && module.response) {
          var e = new Blob([module.response], { type: "image/png" }), require = new FileReader();
          require.onload = function (e) {
            var t = e.target.result;
            this._icon = new a(), this._icon.addEventListener(a.StatusEvent, this._statusEvent, this), this._icon.setProperty("url", t), this._icon.forceImageUpdate();
          }.bind(this), require.readAsDataURL(e);
        }
      }.bind(this)), module.responseType = "blob", module.open("GET", e, true), module.send(null);
    } else
      this._icon = null;
  }, A.prototype.getIcon = function () {
    return this._icon;
  }, A.prototype.setIconVisible = function (e) {
    this._iconVisible !== e && (this._iconVisible = e, this._iconVisible && this._updateBounds());
  }, A.prototype.isIconVisible = function () {
    return this._iconVisible && !!this._icon;
  }, A.prototype._statusEvent = function (e) {
    e.status !== a.ImageStatus.Loading && e.status !== a.ImageStatus.Resolving && (e.status === a.ImageStatus.Loaded && this._updateBounds(), this._icon.removeEventListener(a.StatusEvent, this._statusEvent, this));
  }, A.prototype._updateBounds = function () {
    if (this._icon) {
      var exports = this.getAnnotationOptions().iconSize, module = exports, require = exports;
      "object" == typeof exports && (module = exports.width, require = exports.height), this._icon.setBounds(0, 0, module, require);
    }
  }, exports.exports = A;
}
