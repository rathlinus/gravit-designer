/**
 * Module 1448
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
  var n = require(7) /* GTransform */, r = require(14) /* GPaintCanvas */, o = require(228) /* GPaintContext */, a = require(133) /* GScenePaintConfiguration */, s = require(6) /* GRect */, l = require(28) /* GStylable */, h = require(5) /* GPoint */, A = require(293) /* Stroke */, c = require(440) /* module */, p = require(249) /* GBlurEffect */, u = require(87) /* GVertexSource */;
  function d() {
  }
  d.prototype.render = function (e, t, i) {
    if (i.$pat && 0 !== i.$opc)
      if (i.$r > 0 || !t.hasMixin(u) || !t.$_op) {
        var d = e.canvas.getScale(), g = t.getPaintBBox(), f = Math.round(g.getWidth() * d), m = Math.round(g.getHeight() * d), y = new r();
        y.resize(f, m);
        var _ = new o();
        _.canvas = y;
        var v = new a();
        v.paintMode = a.PaintMode.Full, v.paintSharp = false, v.annotations = false, _.configuration = v, v.clipArea = g, v.clipDirty = false, v.enableFxCache = false, v.defaultEffectDetailLevel = 1, v.ignoreEffects = true, y.prepare(), y.setOrigin(new h(g.getX() * d, g.getY() * d)), y.setOffset(new h(g.getX() * d, g.getY() * d)), y.setScale(d);
        var b, C, w = new r();
        w.resize(f, m), w.prepare(), w.setOrigin(new h(g.getX() * d, g.getY() * d)), w.setOffset(new h(g.getX() * d, g.getY() * d)), w.setScale(d);
        try {
          t.paint(_);
          var E = w.getTransform(false).inverted().mapRect(new s(0, 0, w.getWidth(), w.getHeight()));
          if (Q = w.createPatternPaint(i.$pat, E))
            if (Q.transform) {
              var B = w.setTransform(w.getTransform(true).preMultiplied(Q.transform));
              w.fillRect(0, 0, 1, 1, Q.paint, i.$opc), w.setTransform(B);
            } else
              w.fillRect(E.getX(), E.getY(), E.getWidth(), E.getHeight(), Q.paint, i.$opc);
          var x = i.$x * d, P = i.$y * d;
          i.$r;
          (b = document.createElement("canvas")).width = w._canvasContext.canvas.width, b.height = w._canvasContext.canvas.height, b.getContext("2d").drawImage(w._canvasContext.canvas, 0, 0), w.drawCanvas(y, x, P, 1, r.CompositeOperator.DestinationIn);
          var S = d;
          i.$r > 150 && (f > 1920 || m > 1080) && (S = 150 / i.$r);
          var T = t.getPaintBBox().scaled(d, d), I = new p();
          I.$r = i.$r, I.render(w, null, null, S, T, t), C = w._canvasContext.canvas;
        } finally {
          y.finish(), w.finish();
        }
        x = g.getX(), P = g.getY();
        var F = new s(x, P, f, m), R = e.canvas._canvasContext._createImageResource(b, false, C);
        F = (F = F.scaled(1 / e.canvas.getScale(), 1 / e.canvas.getScale())).translated(-F.getX(), -F.getY()).translated(x, P);
        var D = new n(F.getWidth(), 0, 0, F.getHeight(), F.getX(), e.canvas._canvasContext._y(F.getY()) - F.getHeight());
        (N = new A(e.canvas._canvasContext._doc)).add(new c(D)), N.add("/" + R.getName() + " Do"), e.canvas._canvasContext._graphics.add(N);
      } else {
        F = t.getPaintBBox();
        var k = e.canvas.createCanvas(F);
        try {
          var G = i.$opc;
          if (t.hasMixin(l)) {
            var Q, M = t.getPaintLayers();
            if (M)
              (Q = M.getFillLayers(true)[0]) && (G *= Q.$_op);
          }
          var N = k.getGraphics(), U = new n(1, 0, 0, 1, i.$x, -i.$y);
          N.add(new c(U)), k.putVertices(t), k.fillVertices(i.$pat, G);
        } finally {
          k.finish();
        }
      }
  }, d.prototype.toString = function () {
    return "[Object GPDFDropShadowEffect]";
  }, exports.exports = d;
}
