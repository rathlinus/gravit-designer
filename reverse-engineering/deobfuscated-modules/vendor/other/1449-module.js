/**
 * Module 1449
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
  var n = require(7) /* GTransform */, r = require(14) /* GPaintCanvas */, o = require(228) /* GPaintContext */, a = require(133) /* GScenePaintConfiguration */, s = require(6) /* GRect */, l = require(5) /* GPoint */, h = require(95) /* GImage */, A = require(113) /* GCompoundPath */, c = require(233) /* GCompoundShape */, p = require(293) /* Stroke */, u = require(440) /* module */, d = require(249) /* GBlurEffect */, g = require(602) /* module */, f = require(855) /* module */, m = require(853) /* module */, y = require(359) /* module */, _ = require(564) /* module */, v = require(87) /* GVertexSource */, b = require(1450) /* module */, C = require(68) /* GColor */;
  function w() {
  }
  w.prototype.render = function (e, t, i) {
    i.$pat && 0 !== i.$opc && (t instanceof h || t.hasStyleFill()) && (!(i.$r > 0) && t.hasMixin(v) && t.$pat instanceof C ? this._createVectorShadow(e, t, i) : this._createBitmapShadow(e, t, i));
  }, w.prototype._createBitmapShadow = function (e, t, i) {
    var h = e.canvas.getScale(), A = i.getAbsoluteEffectPadding().map(function (e) {
        return Math.ceil(e * h);
      }), c = t.getPaintBBox(), g = e.canvas.getPaintExtents(c, true, A), f = e.canvas.getFinalExtents(g), m = e.canvas.getTransform().getTranslation(), y = new l(-f.getX(), -f.getY()), _ = e.canvas.getTranslateCorrection(m, y), v = 1 / h, C = _.getX() * v, w = _.getY() * v, E = c.translated(C, w).expanded(v, v, v, v);
    g = e.canvas.getPaintExtents(E, true, A), f = e.canvas.getFinalExtents(g).toRoundedPrecision();
    var B = new s(f.getX(), f.getY(), Math.ceil(f.getWidth()), Math.ceil(f.getHeight())), x = B.getSide(s.Side.TOP_LEFT), P = new r();
    P.resize(B.getWidth(), B.getHeight());
    var S = new o();
    S.canvas = P;
    var T = new a();
    T.paintMode = a.PaintMode.Full, T.paintSharp = false, T.annotations = false, S.configuration = T, T.clipDirty = false, T.enableFxCache = false, T.defaultEffectDetailLevel = 1, T.ignoreEffects = true, P.prepare(), P.setOrigin(x), P.setOffset(x), P.setScale(h);
    var I, F = new r();
    F.resize(B.getWidth(), B.getHeight()), F.prepare(), F.setOrigin(x), F.setOffset(x), F.setScale(h);
    try {
      t.paint(S);
      var R = F.getTransform(false).inverted().mapRect(new s(0, 0, F.getWidth(), F.getHeight())), D = F.createPatternPaint(i.$pat, R);
      if (D)
        if (D.transform) {
          var k = F.setTransform(F.getTransform(true).preMultiplied(D.transform));
          F.fillRect(0, 0, 1, 1, D.paint, i.$opc), F.setTransform(k);
        } else
          F.fillRect(R.getX(), R.getY(), R.getWidth(), R.getHeight(), D.paint, i.$opc);
      var G = F.getBitmap().getHTMLElement();
      (I = document.createElement("canvas")).width = F.getWidth(), I.height = F.getHeight(), I.getContext("2d").drawImage(G, 0, 0);
      var Q = i.$x * h, M = i.$y * h;
      F.drawCanvas(P, Q, M, 1, r.CompositeOperator.DestinationOut), r.disableFilters();
      try {
        var N = new d();
        N.setAffectedByGLBug(true), N.$r = i.$r, N.render(F, null, null, h, B, t);
      } finally {
        r.enableFilters();
      }
      F.drawCanvas(P, 0, 0, 1, r.CompositeOperator.DestinationIn);
    } finally {
      P.finish(), F.finish();
    }
    var U = e.canvas.getContext(), V = F.getBitmap().getHTMLElement(), O = U.createPNGImageResource(I, V), L = B.scaled(1 / h, 1 / h), Y = new n(L.getWidth(), 0, 0, L.getHeight(), L.getX(), U._y(L.getY()) - L.getHeight()), X = new p(U.getDocument());
    X.add(new u(Y)), X.add(new b(O)), U.getGraphics().add(X);
  }, w.prototype._createVectorShadow = function (e, t, i) {
    var n = t.getPaintBBox(), r = e.canvas.createCanvas(n);
    try {
      r.putVertices(t);
      var o = false;
      (t instanceof A || t instanceof c) && (o = t.getProperty("evenodd"));
      var a = r.getGraphics(), l = r.getContext(), h = a.pop().getValue(), p = new g();
      this._applyOpacityMask(l, p, h, o), this._applyGaps(l, p, h), this._applyTransparency(l, p, h, o, i);
      var u = i.$opc, d = t.getPaintLayers().getFillLayers(true)[0];
      d && (u *= d.$_op);
      var f = l.createSMaskGStateResource(p);
      a.setGStateResource(f), a.add(h);
      var m = r.getTransform(false).inverted().mapRect(new s(0, 0, r.getWidth(), r.getHeight())), y = r.createPatternPaint(i.$pat, m);
      r.fillVertices(y.paint, u);
    } finally {
      r.finish();
    }
  }, w.prototype._applyOpacityMask = function (e, t, i, n) {
    return t.add(i), t.add(new f({
      transform: e.getTransform(),
      doc: e.getDocument(),
      color: "rgba(0,0,0,1)",
      colorSpace: y.GRAY
    })), t.add(n ? _.f$ : _.f), t;
  }, w.prototype._applyGaps = function (e, t, i) {
    var n = new p.Stroke();
    n.lineWidth = 1, n.strokeStyle = new m({
      transform: e.getTransform(),
      doc: e.getDocument(),
      color: "rgba(0,0,0,1)",
      colorSpace: y.GRAY
    }), t.add(i), t.add(n);
  }, w.prototype._applyTransparency = function (e, t, i, r, o) {
    t.add(new u(new n(1, 0, 0, 1, o.$x, -o.$y))), t.add(i), t.add(new f({
      transform: e.getTransform(),
      doc: e.getDocument(),
      color: "rgba(0,0,0,0)",
      colorSpace: y.GRAY
    })), t.add(r ? _.f$ : _.f);
  }, w.prototype.toString = function () {
    return "[Object GPDFInnerShadowEffect]";
  }, exports.exports = w;
}
