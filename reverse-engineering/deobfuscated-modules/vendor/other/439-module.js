/**
 * Module 439
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
  var n = require(0) /* GObject */, r = require(28) /* GStylable */, o = require(14) /* GPaintCanvas */, a = require(22) /* GElement */, s = require(599) /* module */, l = require(1129) /* module */, h = require(1130) /* module */, A = require(1131) /* module */, c = require(1132) /* module */, p = require(1133) /* module */, u = require(794) /* module */, d = require(561) /* module */, g = 0, f = 1, m = 4, y = 5, _ = [
      r.BorderAlignment.Center,
      r.BorderAlignment.Inside,
      r.BorderAlignment.Outside
    ], v = [
      l,
      h,
      A
    ];
  function b() {
    u.apply(this, arguments);
  }
  n.inherit(b, u), b.prototype.parse = function (e, t) {
    if (this._node) {
      u.prototype.parse.call(this, e, t);
      var require = this._data, n = this._node;
      if (n.hasMixin(r) && require.style || require.hasBackgroundColor) {
        var o = require.style;
        o.borders && o.borders.forEach(function (e) {
          var t = new r.BorderPaintLayer();
          t.setProperty("_bw", e.thickness), t.setProperty("_bml", o.miterLimit), t.setProperty("_ba", _[o.position || 1]), this._parsePaintLayer(e, t), n.getPaintLayers().appendChild(t);
        }.bind(this));
        var a = function (e) {
          var t = new r.FillPaintLayer();
          this._parsePaintLayer(e, t), n.getPaintLayers().appendChild(t);
        }.bind(this);
        if (o.fills && o.fills.forEach(a), require.hasBackgroundColor && (n.getPaintLayers().clearFillLayers(), a({
            color: require.backgroundColor,
            fillType: g,
            isEnabled: true
          })), !this._data.isVisible && this._parent && this._parent instanceof d.getClassFromName("shapeGroup") && this._parent.hasClippingMask()) {
          var s = this._node.getPaintLayers();
          s && s.getLayers().forEach(function (e) {
            e.setProperty("_vs", false);
          }.bind(this));
        }
      }
    }
  }, b.prototype._postParse = function (e) {
    u.prototype._postParse.call(this, e), !this._node.hasMixin(a.Transform) || e || this._data.noTransform || (this.setBounds(this._getGeometryBBox()), this.transform(this._getTransformation()));
  }, b.prototype._parsePaintLayer = function (e, t) {
    var i;
    switch (t.setProperty("_vs", e.isEnabled), e.contextSettings && (t.setProperty("_bl", undefined !== e.contextSettings.blendMode ? u.BlendMode[e.contextSettings.blendMode] : o.BlendMode.Normal), t.setProperty("_op", undefined !== e.contextSettings.opacity ? e.contextSettings.opacity : 1)), e.fillType) {
    case g:
      i = new s(e.color, this._file);
      break;
    case f:
      var n = v[e.gradient.gradientType];
      n ? i = new n(e.gradient, this._file) : console.warn("Unsupported gradient type: " + e.gradient.gradientType);
      break;
    case m:
      i = new c(e, this._file);
      break;
    case y:
      i = new p(e, this._file);
      break;
    default:
      console.warn("Unsupported fill type: " + e.fillType);
    }
    i && i.applyTo(t);
  }, exports.exports = b;
}
