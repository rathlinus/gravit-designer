/**
 * Module 1390
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
  var n = i(165), r = i(11), o = i(1391), a = i(70), s = i(122), l = i(83), h = i(132);
  function A() {
  }
  A.import = function (e, t, i, c) {
    try {
      if ("string" == typeof e)
        return A.import(new DOMParser().parseFromString(e, "text/xml"), t, i, c);
      if (e instanceof ArrayBuffer || e instanceof Uint8Array) {
        var p = e instanceof ArrayBuffer ? new Uint8Array(e) : e;
        if (31 === p[0] && 139 === p[1] && 8 === p[2]) {
          e = n.ungzip(p, { to: "string" });
          return A.import(e, t, i, c);
        }
        return A.import(new Blob([e]), t, i, c);
      }
      if (e instanceof Blob) {
        var u = new FileReader();
        return u.onload = function (e) {
          return A.import(u.result, t, i, c);
        }, u.readAsText(e);
      }
      if (!e || !e.documentElement || "svg" !== e.documentElement.nodeName)
        return c("Invalid svg document.");
      t = r.extend({
        baseWidth: 400,
        baseHeight: 400,
        forceBaseSize: !1
      }, t);
      var d, g, f = o(t, i), m = f.CreateElement(e.documentElement);
      if (m.root = !0, f.ViewPort.Clear(), f.ViewPort.SetCurrent(t.baseWidth, t.baseHeight), !t.forceBaseSize && m.attributes.viewBox) {
        var y = m.attributes.viewBox.value.split(" ");
        4 === y.length && (d = parseFloat(y[2]) - parseFloat(y[0]), g = parseFloat(y[3]) - parseFloat(y[1]), NaN !== d && NaN !== g && d >= 0 && g >= 0 && f.ViewPort.SetCurrent(d, g));
      }
      var _ = null;
      if (!t.forceBaseSize && m.style("width").hasValue() && m.style("height").hasValue()) {
        var v = m.style("width").toPixels("x"), b = m.style("height").toPixels("y"), C = m.style("width").getUnits();
        Object.keys(h.Unit).some(function (e) {
          if (h.Unit[e] === C)
            return _ = h.Unit[e], !0;
        }), f.ViewPort.Clear(), f.ViewPort.SetCurrent(v, b), d = v, g = b;
      }
      var w = m.toScene([], t.target);
      if (w.getFirstChild() || (w = null), !t.target && w && !(w instanceof l)) {
        if (w.getFirstChild() === w.getLastChild()) {
          var E = w.getFirstChild();
          w.removeChild(E), w = E;
        }
        r.each(Object.keys(f.References), function (e, t) {
          var i = w.querySingle("[name=" + t + "]");
          i && (i.setProperty("rtxt", f.References[t].map(function (e) {
            return e.getReferenceId();
          })), r.each(f.References[t], function (e, t) {
            t instanceof a && t.attachPath(i);
          }));
        });
        var B = [];
        w.acceptChildren(function (e) {
          e instanceof s && !e.getChildren().length && B.push(e);
        }), r.each(B, function (e, t) {
          t.getParent().removeChild(t);
        });
      }
      f.waitFor(function () {
        c(null, w, {
          width: d,
          height: g,
          unit: _
        });
      });
    } catch (e) {
      console.error(e), c(e);
    }
  }, e.exports = A;
}
