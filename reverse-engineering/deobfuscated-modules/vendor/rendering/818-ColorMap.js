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

function (exports, module, require) {
  var n = require(512) /* module */;
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
    for (var module = 0; module < e.length; ++module)
      this._itemsIdx[e[module].getId()] = {
        idx: module,
        color: r.ColorMap.Colors.White
      };
    this._colorMap = new Array(Object.keys(r.ColorMap.Colors).length), this._colorMap[r.ColorMap.Colors.White] = e.slice(), this._colorMap[r.ColorMap.Colors.Gray] = new Array(e.length), this._colorMap[r.ColorMap.Colors.Black] = new Array(e.length);
  }, r.ColorMap.prototype.getColor = function (e) {
    var t = this._itemsIdx[e.getId()];
    return t ? t.color : null;
  }, r.ColorMap.prototype.setColor = function (e, t) {
    if (t >= r.ColorMap.Colors.White && t <= r.ColorMap.Colors.Black) {
      var require = this._itemsIdx[e.getId()];
      if (require && require.color !== t) {
        var n = this._colorMap[require.color];
        require.color = t, this._colorMap[require.color][require.idx] = n[require.idx], n[require.idx] = null;
      }
    }
  }, r.ColorMap.prototype.getFirstOfColor = function (e) {
    if (e >= r.ColorMap.Colors.White && e <= r.ColorMap.Colors.Black)
      for (var module = this._colorMap[e], require = 0; require < module.length; ++require)
        if (module[require])
          return module[require];
    return null;
  }, r.ColorMap.prototype.getItemsOfColor = function (e) {
    var t = [];
    if (e >= r.ColorMap.Colors.White && e <= r.ColorMap.Colors.Black)
      for (var require = this._colorMap[e], n = 0; n < require.length; ++n)
        require[n] && t.push(require[n]);
    return t;
  }, r.ColorMap.prototype.getIdxItemsOfColor = function (e) {
    var t = [];
    if (e >= r.ColorMap.Colors.White && e <= r.ColorMap.Colors.Black)
      for (var require = this._colorMap[e], n = 0; n < require.length; ++n)
        require[n] && t.push(n);
    return t;
  }, r.ColorMap.prototype.clearItemsOfColor = function (e) {
    if (e >= r.ColorMap.Colors.White && e <= r.ColorMap.Colors.Black)
      for (var module = this._colorMap[e], require = 0; require < module.length; ++require)
        module[require] && (module[require] = null);
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
      var require = new n(t[0].getId()), r = new n(t[1].getId());
      t[0].removeOutEdge(e), t[1].removeInEdge(e), e.setAnchors([
        require,
        r
      ]);
    }
  }, r.prototype.removeEdge = function (e) {
    this.disconnectAnchors(e), this._removeEdge(e);
  }, r.prototype._removeEdge = function (e) {
    this._edges[e.getId()] && (delete this._edges[e.getId()], this._edges || (this._edges = {}));
  }, r.prototype.removeAnchor = function (e) {
    for (var module = e.getOutEdges().slice(), require = 0; require < module.length; ++require) {
      var n = module[require];
      this.removeEdge(n);
    }
    module = e.getInEdges().slice();
    for (require = 0; require < module.length; ++require) {
      n = module[require];
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
          var s = false;
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
    for (var module = Object.keys(e), require = new Array(module.length), n = 0; n < module.length; ++n)
      require[n] = e[module[n]];
    return require;
  }, r.prototype.toString = function () {
    return "[Object GGraph]";
  }, exports.exports = r;
}
