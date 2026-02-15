/**
 * Module 1237
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
  var n = require(138) /* GGradient */, r = require(0) /* GObject */, o = require(17) /* GRGBColor */, a = require(188) /* GCMYKColor */, s = require(228) /* GPaintContext */, l = (require(133) /* GScenePaintConfiguration */, require(1456) /* module */), h = require(1457) /* module */, A = require(1149) /* module */;
  function c(e) {
    this._context2d = e, this.configuration = new h(), this.configuration.annotations = !!e._options.annotations, this.canvas = new l(this._context2d), this._context2d.canvas = this.canvas, this.canvas._canvasContext = e, this.canvasStack = [this.canvas], this.outlineColors = [];
  }
  r.inherit(c, s), c.prototype.getSvgPaths = function () {
    return this.canvas._canvasContext._push(), this.canvas._canvasContext._svgs;
  }, c.prototype.isIncludingInvisible = function () {
    return !!(this._context2d && this._context2d._options && this._context2d._options.includeInvisible);
  }, c.prototype.getGlobalCompositeOperation = function (e) {
    return this.canvas._canvasContext._svgStyles[e].globalCompositeOperation;
  }, c.prototype.getGlobalAlpha = function (e) {
    return this.canvas._canvasContext._svgStyles[e].globalAlpha;
  }, c.prototype.getSvgStyleObject = function (e) {
    return this.canvas._canvasContext._svgStyles[e];
  }, c.prototype.getSvgStyle = function (e, t) {
    var i, r = new A(), o = this.canvas._canvasContext._svgStyles[e], a = t.ownerDocument;
    if (!this._ignoreFillStyle)
      if (o._isStroke) {
        if (r.set("fill", "none"), o.strokeStyle instanceof n) {
          var s = o.strokeStyle.asSVG(a, 1);
          r.set("stroke", "url(#" + s.getAttribute("id") + ")"), t.appendChild(s);
        } else
          r.set("stroke", o.strokeStyle);
        r.set("stroke-width", o.lineWidth);
      } else if (r.set("stroke", "none"), o.fillStyle instanceof n) {
        s = o.fillStyle.asSVG(a, 1);
        r.set("fill", "url(#" + s.getAttribute("id") + ")"), t.appendChild(s);
      } else
        r.set("fill", o.fillStyle);
    switch (o.lineCap || (o.lineCap = "butt"), o.lineCap) {
    case "square":
      i = "square";
      break;
    case "round":
      i = "round";
      break;
    case "butt":
    default:
      i = "butt";
    }
    switch ("butt" !== i ? r.set("stroke-linecap", i) : r.remove("stroke-linecap"), o.lineJoin || (o.lineJoin = "miter"), o.lineJoin) {
    case "bevel":
      i = "bevel";
      break;
    case "round":
      i = "round";
      break;
    case "miter":
    default:
      i = "miter";
    }
    return "miter" !== i ? r.set("stroke-linejoin", i) : r.remove("stroke-linejoin"), o._dashArray || (o._dashArray = []), o._dashArray instanceof Array && o._dashArray.length ? r.set("stroke-dasharray", o._dashArray) : r.remove("stroke-dasharray"), o.miterLimit || (o.miterLimit = "10"), 4 !== o.miterLimit && "4" !== o.miterLimit ? r.set("stroke-miterlimit", o.miterLimit) : r.remove("stroke-miterlimit"), o.globalAlpha || (o.globalAlpha = 1), 1 != o.globalAlpha && "1" !== o.globalAlpha ? r.set("opacity", o.globalAlpha) : r.remove("opacity"), "evenodd" === o._fillRule && r.set("fill-rule", "evenodd"), o.globalCompositeOperation, r;
  }, c.patternToRGBA = function (e) {
    if (e)
      return ret = "rgba(" + e._value.join(","), 3 == e._value.length && (ret += ",1"), ret += ")", ret;
  }, c.toFill = function (e) {
    var t;
    if (e instanceof o || e instanceof a) {
      var require = e.toScreen().slice(0, 4);
      t = require ? 4 == require.length ? "rgba(" + require.join(",") + ")" : "rgb(" + require.join(",") + ")" : "";
    } else
      t = e;
    return t;
  }, c.prototype.toString = function () {
    return "[Object GSVGPaintContext]";
  }, exports.exports = c;
}
