/**
 * Module 1236
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
  var n = i(11), r = i(438), o = function () {
    };
  o.createMask = function (e, t, i, o, a) {
    var s = "_mask_" + n.uuid(), l = e.createSvgElement("mask");
    if (l.setAttribute("id", s), l.appendChild(t), i.parentNode.insertBefore(l, i), i.setAttribute("mask", r.createIdUrl(s)), o) {
      t.setAttribute("fill", "black"), t.setAttribute("stroke", "none");
      var h, A, c, p, u = e.createSvgElement("rect");
      e.globalOffset.x || e.globalOffset.y ? (h = -e.globalOffset.x + "", A = -e.globalOffset.y + "", c = "100%", p = "100%") : (h = "-200%", A = "-200%", c = "400%", p = "400%"), u.setAttribute("x", h), u.setAttribute("y", A), u.setAttribute("width", c), u.setAttribute("height", p), u.setAttribute("style", "fill:white;"), l.insertBefore(u, t), l.setAttribute("x", "-200%"), l.setAttribute("y", "-200%"), l.setAttribute("width", "400%"), l.setAttribute("height", "400%");
    } else
      t.setAttribute("fill", "white"), t.setAttribute("stroke", "none");
    a && t.removeAttribute("transform");
  }, o.createMaskDefinition = function (e, t, i, r) {
    var o = "_mask_" + n.uuid(), a = e.createElementNS("http://www.w3.org/2000/svg", "mask");
    a.setAttribute("id", o);
    var s = i.parentNode;
    if (s.removeChild(i), n.each(s.childNodes, function (e, t) {
        t.setAttribute("mask", "url(#" + o + ")");
      }), s.appendChild(a), a.appendChild(i), r.isMask = !0, "destination-out" === t) {
      r.isInverse = !0;
      var l = e.createElementNS("http://www.w3.org/2000/svg", "rect");
      l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("width", "100%"), l.setAttribute("height", "100%"), l.setAttribute("style", "fill:white;"), a.insertBefore(l, i);
    } else
      r.isInverse = !1;
  }, o.filterElementsUsedForMasking = function (e) {
    return r.filterClipPathElements(e);
  }, o.createMaskDefinitionFromShape = function (e, t, i) {
    var a = "_clipPath_" + n.uuid(), s = e.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    s.setAttribute("id", a);
    var l = t.cloneNode(!0);
    r.removeDefs(l);
    var h = o.filterElementsUsedForMasking(l);
    return n.each(h, function (e, t) {
      s.appendChild(t);
    }), i ? r.replaceFillAndStroke(l, "white", "white") : r.replaceFillAndStroke(l, "white", "black"), s;
  }, o.createClipPath = function (e, t) {
    var i = t.ownerDocument, r = "_mask_" + n.uuid(), o = i.createElementNS("http://www.w3.org/2000/svg", "mask");
    o.setAttribute("id", r), n.each(t.childNodes, function (e, t) {
      if ("path" === t.tagName) {
        var i = t.cloneNode(!0), n = i.getAttribute("style");
        n && (n = (n = n.replace(/fill:[^;]+/, "fill:white")).replace(/stroke:[^;]+/, "stroke:white"), i.setAttribute("style", n)), o.appendChild(i);
      }
    }), t.parentNode.insertBefore(o, t), t.setAttribute("mask", "url(#" + r + ")");
  }, e.exports = o;
}
