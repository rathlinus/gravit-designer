/**
 * Module 818
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
  var n = i(512);
  function r() {
    this._edges = Object.create(null), this._anchors = Object.create(null);
  }
  r.ColorMap = function () {
  }, r.ColorMap.Colors = {
    White: 0,
    Gray: 1,
    Black: 2
  }, r.ColorMap.prototype._itemsIdx = null, r.ColorMap.prototype._colorMap = null, r.ColorMap.prototype.initWhite = function (e) {
    this._itemsIdx = {};
    for (var t = 0; t < e.length; ++t)
      this._itemsIdx[e[t].getId()] = {
        idx: t,
        color: r.ColorMap.Colors.White
      };
    this._colorMap = new Array(Object.keys(r.ColorMap.Colors).length), this._colorMap[r.ColorMap.Colors.White] = e.slice(), this._colorMap[r.ColorMap.Colors.Gray] = new Array(e.length), this._colorMap[r.ColorMap.Colors.Black] = new Array(e.length);
  }, r.ColorMap.prototype.getColor = function (e) {
    var t = this._itemsIdx[e.getId()];
    return t ? t.color : null;
  }, r.ColorMap.prototype.setColor = function (e, t) {
    if (t >= r.ColorMap.Colors.White && t <= r.ColorMap.Colors.Black) {
      var i = this._itemsIdx[e.getId()];
      if (i && i.color !== t) {
        var n = this._colorMap[i.color];
        i.color = t, this._colorMap[i.color][i.idx] = n[i.idx], n[i.idx] = null;
      }
    }
  }, r.ColorMap.prototype.getFirstOfColor = function (e) {
    if (e >= r.ColorMap.Colors.White && e <= r.ColorMap.Colors.Black)
      for (var t = this._colorMap[e], i = 0; i < t.length; ++i)
        if (t[i])
          return t[i];
    return null;
  }, r.ColorMap.prototype.getItemsOfColor = function (e) {
    var t = [];
    if (e >= r.ColorMap.Colors.White && e <= r.ColorMap.Colors.Black)
      for (var i = this._colorMap[e], n = 0; n < i.length; ++n)
        i[n] && t.push(i[n]);
    return t;
  }, r.ColorMap.prototype.getIdxItemsOfColor = function (e) {
    var t = [];
    if (e >= r.ColorMap.Colors.White && e <= r.ColorMap.Colors.Black)
      for (var i = this._colorMap[e], n = 0; n < i.length; ++n)
        i[n] && t.push(n);
    return t;
  }, r.ColorMap.prototype.clearItemsOfColor = function (e) {
    if (e >= r.ColorMap.Colors.White && e <= r.ColorMap.Colors.Black)
      for (var t = this._colorMap[e], i = 0; i < t.length; ++i)
        t[i] && (t[i] = null);
  }, r.prototype._edges = {}, r.prototype._anchors = {}, r.prototype._data = null, r.prototype.getEdges = function () {
    return this._edges;
  }, r.prototype.getAnchors = function () {
    return this._anchors;
  }, r.prototype.getData = function () {
    return this._data;
  }, r.prototype.setData = function (e) {
    this._data = e;
  }, r.prototype.addEdge = function (e) {
    this._edges[e.getId()] = e;
  }, r.prototype.interconnectAnchors = function (e, t, i) {
    var n = i.getAnchors().slice();
    if (n[0] && n[1]) {
      if (n[0] == e && n[1] == t)
        return;
      this.disconnectAnchors(i);
    }
    i.init(e, t), e.addOutEdge(i), t.addInEdge(i);
  }, r.prototype.connectAnchors = function (e, t, i) {
    this.interconnectAnchors(e, t, i), this.addEdge(i);
  }, r.prototype.addAnchor = function (e) {
    this._anchors[e.getId()] = e;
  }, r.prototype.disconnectAnchors = function (e) {
    var t = e.getAnchors().slice();
    if (t[0] && t[1]) {
      var i = new n(t[0].getId()), r = new n(t[1].getId());
      t[0].removeOutEdge(e), t[1].removeInEdge(e), e.setAnchors([
        i,
        r
      ]);
    }
  }, r.prototype.removeEdge = function (e) {
    this.disconnectAnchors(e), this._removeEdge(e);
  }, r.prototype._removeEdge = function (e) {
    this._edges[e.getId()] && (delete this._edges[e.getId()], this._edges || (this._edges = {}));
  }, r.prototype.removeAnchor = function (e) {
    for (var t = e.getOutEdges().slice(), i = 0; i < t.length; ++i) {
      var n = t[i];
      this.removeEdge(n);
    }
    t = e.getInEdges().slice();
    for (i = 0; i < t.length; ++i) {
      n = t[i];
      this.removeEdge(n);
    }
    this._removeAnchor(e);
  }, r.prototype._removeAnchor = function (e) {
    this._anchors[e.getId()] && (delete this._anchors[e.getId()], this._anchors || (this._anchors = {}));
  }, r.prototype.dfsPartitioner = function (e, t, i, n) {
    var o = new r.ColorMap(), a = this._getInternalMapAsArray(this._anchors), s = this._getInternalMapAsArray(this._edges);
    if (a && s) {
      o.initWhite(a);
      var l = new r.ColorMap();
      l.initWhite(s);
      for (var h = n || o.getFirstOfColor(r.ColorMap.Colors.White); h;) {
        var A = new r.ColorMap();
        A.initWhite(a);
        var c = new r.ColorMap();
        c.initWhite(s), this.depthFirstSearch(e, t, h, A, c);
        var p = c.getItemsOfColor(r.ColorMap.Colors.Black), u = A.getItemsOfColor(r.ColorMap.Colors.Black);
        i && i(u, p);
        for (var d = 0; d < u.length; ++d)
          o.setColor(u[d], r.ColorMap.Colors.Black);
        for (d = 0; d < p.length; ++d)
          l.setColor(p[d], r.ColorMap.Colors.Black);
        h = o.getFirstOfColor(r.ColorMap.Colors.White);
      }
    }
  }, r.prototype.depthFirstSearch = function (e, t, i, n, o) {
    n.setColor(i, r.ColorMap.Colors.Gray), t && t(i);
    for (var a = function (i, a) {
          var s = !1;
          o.getColor(i) === r.ColorMap.Colors.White && (o.setColor(i, r.ColorMap.Colors.Black), e && (s = !!(s = e(i)))), s || n.getColor(a) !== r.ColorMap.Colors.White || this.depthFirstSearch(e, t, a, n, o);
        }.bind(this), s = i.getOutEdges(), l = 0; l < s.length; ++l) {
      var h = (c = s[l]).getDestination();
      a(c, h);
    }
    var A = i.getInEdges();
    for (l = 0; l < A.length; ++l) {
      var c;
      h = (c = A[l]).getSource();
      a(c, h);
    }
    n.setColor(i, r.ColorMap.Colors.Black);
  }, r.prototype._getInternalMapAsArray = function (e) {
    for (var t = Object.keys(e), i = new Array(t.length), n = 0; n < t.length; ++n)
      i[n] = e[t[n]];
    return i;
  }, r.prototype.toString = function () {
    return "[Object GGraph]";
  }, e.exports = r;
}
