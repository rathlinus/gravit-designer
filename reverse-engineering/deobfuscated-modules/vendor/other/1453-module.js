/**
 * Module 1453
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
  var n = require(854) /* module */, r = require(293) /* Stroke */, o = require(853) /* module */, a = require(855) /* module */, s = require(359) /* module */, l = require(602) /* module */, h = require(60) /* GPath */, A = require(28) /* GStylable */, c = require(14) /* GPaintCanvas */;
  function p(e) {
    this._shape = e;
  }
  p.prototype._shape = null, p.prototype.paint = function (e, t, i, n, r) {
    if (this._shape.hasStyleBorder()) {
      var o = e.canvas, a = this;
      t && (a = this._shape.makeSharp(e, o, this._shape));
      var s = this._shape.getPatternBBox(e.isIncludingInvisible());
      if (s && r.$_ba !== A.BorderAlignment.Inside) {
        var l = r.$_bw;
        if (r.$_ba === A.BorderAlignment.Center && (l *= 0.5), this._shape.$trf)
          l /= this._shape.$trf.getScaleFactor();
        s = s.expanded(l, l, l, l);
      }
      var h = this._shape.createShapePaint(e, r.$_pt, s);
      h && h.paint && undefined !== o.putVertices(a) && (this._stroke(e, r, h), r.$_ba === A.BorderAlignment.Inside ? this._makeInsideBorder(e) : r.$_ba === A.BorderAlignment.Outside && this._makeOutsideBorder(e), i && this._paintBorderMarkers(e, h, r));
    }
  }, p.prototype._paintBorderMarkers = function (e, t, i) {
    var n = this._shape.getHeadMarkerVertices(i), r = this._shape.getTailMarkerVertices(i);
    n && this._paintBorderMarker(e, n, t, i, i.$_bhmo), r && this._paintBorderMarker(e, r, t, i, i.$_btmo);
  }, p.prototype._paintBorderMarker = function (e, t, i, n, r) {
    var o = e.canvas, a = o.putVertices(t), s = this._getBorderTransform(n, i), l = null;
    s && s.invertible() && (l = o.setTransform(o.getTransform(true).multiplied(s))), r || false === a ? o.strokeVertices(i.paint, n.$_bw) : o.fillVertices(i.paint), l && o.setTransform(l);
  }, p.prototype._makeInsideBorder = function (e) {
    var t = e.canvas, i = t.getCurrentNode();
    if (!(i instanceof h && i.isLine())) {
      var r = t.getContext(), o = r.getGraphics(), a = o.pop().getValue(), s = o.pop().getValue(), l = r.createGraphics();
      l.add(new n(s)), l.add(s), l.add(a), o.add(l);
    }
  }, p.prototype._makeOutsideBorder = function (e) {
    var t = e.canvas, i = t.getCurrentNode();
    if (!(i instanceof h && i.isLine())) {
      var n = t.getContext(), A = n.getGraphics(), c = A.pop().getValue(), p = A.pop().getValue(), u = new r.Stroke();
      u.lineWidth = n.lineWidth, u.strokeStyle = new o({
        transform: n._transform,
        doc: n._doc,
        color: "rgba(0,0,0,1)",
        colorSpace: s.GRAY
      });
      var d = new r.Fill();
      d.fillStyle = new a({
        transform: n._transform,
        doc: n._doc,
        color: "rgba(0,0,0,0)",
        colorSpace: s.GRAY
      });
      var g = new l();
      g.add(p), g.add(u), g.add(p), g.add(d);
      var f = n.createGraphics();
      f.setGStateResource(n.createSMaskGStateResource(g)), f.add(p), f.add(c), A.add(f);
    }
  }, p.prototype._stroke = function (e, t, i) {
    var n = t.$_bw;
    t.$_ba !== A.BorderAlignment.Center && (n *= 2);
    var r = this._shape.calculateMitterLimit(t), o = e.canvas, a = null, s = this._getBorderTransform(t, i);
    s && s.invertible() && (a = o.setTransform(o.getTransform(true).multiplied(s))), o.strokeVertices(i.paint, n, t.$_bds, t.$_blc, t.$_blj, r, t.$_op, t.$_bl !== c.BlendMode ? t.$_bl : null), a && o.setTransform(a);
  }, p.prototype._getBorderTransform = function (e, t) {
    var i = null;
    return t.transform && t.transform.isValid() && (i = t.transform, this._shape.$trf && (i = i.multiplied(this._shape.$trf)), e.$_px && !e.$_px.isIdentity() && (i = i.preMultiplied(e.$_px))), i;
  }, exports.exports = p;
}
