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

function (e, t, i) {
  var n = i(7), r = i(14), o = i(228), a = i(133), s = i(6), l = i(28), h = i(5), A = i(293), c = i(440), p = i(249), u = i(87);
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
        v.paintMode = a.PaintMode.Full, v.paintSharp = !1, v.annotations = !1, _.configuration = v, v.clipArea = g, v.clipDirty = !1, v.enableFxCache = !1, v.defaultEffectDetailLevel = 1, v.ignoreEffects = !0, y.prepare(), y.setOrigin(new h(g.getX() * d, g.getY() * d)), y.setOffset(new h(g.getX() * d, g.getY() * d)), y.setScale(d);
        var b, C, w = new r();
        w.resize(f, m), w.prepare(), w.setOrigin(new h(g.getX() * d, g.getY() * d)), w.setOffset(new h(g.getX() * d, g.getY() * d)), w.setScale(d);
        try {
          t.paint(_);
          var E = w.getTransform(!1).inverted().mapRect(new s(0, 0, w.getWidth(), w.getHeight()));
          if (Q = w.createPatternPaint(i.$pat, E))
            if (Q.transform) {
              var B = w.setTransform(w.getTransform(!0).preMultiplied(Q.transform));
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
        var F = new s(x, P, f, m), R = e.canvas._canvasContext._createImageResource(b, !1, C);
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
              (Q = M.getFillLayers(!0)[0]) && (G *= Q.$_op);
          }
          var N = k.getGraphics(), U = new n(1, 0, 0, 1, i.$x, -i.$y);
          N.add(new c(U)), k.putVertices(t), k.fillVertices(i.$pat, G);
        } finally {
          k.finish();
        }
      }
  }, d.prototype.toString = function () {
    return "[Object GPDFDropShadowEffect]";
  }, e.exports = d;
}
