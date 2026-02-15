/**
 * Module 140
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

function (exports, module) {
  function i(e, t, i, n) {
    this.max_objects = t || 10, this.max_levels = i || 4, this.level = n || 0, this.bounds = e, this.objects = [], this.nodes = null;
  }
  i.Element = function (e, t, i, n) {
    this.x = e || 0, this.y = t || 0, this.width = i || 0, this.height = n || 0;
  }, i.Element.prototype.x = 0, i.Element.prototype.y = 0, i.Element.prototype.width = 0, i.Element.prototype.height = 0, i.Element.prototype.data = null, i.prototype.max_objects = 0, i.prototype.max_levels = 0, i.prototype.level = 0, i.prototype.bounds = null, i.prototype.objects = null, i.prototype.nodes = null, i.RETRIEVE_MODE_FULLYCONTAINED = 1, i.RETRIEVE_MODE_INTERSECT = 2, i.prototype.split = function () {
    var e = this.level + 1, t = Math.round(0.5 * this.bounds.width), n = Math.round(0.5 * this.bounds.height), r = Math.round(this.bounds.x), o = Math.round(this.bounds.y);
    this.nodes = new Array(4), this.nodes[0] = new i({
      x: r + t,
      y: o + n,
      width: t,
      height: n
    }, this.max_objects, this.max_levels, e), this.nodes[1] = new i({
      x: r + t,
      y: o,
      width: t,
      height: n
    }, this.max_objects, this.max_levels, e), this.nodes[2] = new i({
      x: r,
      y: o + n,
      width: t,
      height: n
    }, this.max_objects, this.max_levels, e), this.nodes[3] = new i({
      x: r,
      y: o,
      width: t,
      height: n
    }, this.max_objects, this.max_levels, e);
  }, i.prototype.getIndex = function (e) {
    var t = this.bounds.x + this.bounds.width / 2, i = this.bounds.y + this.bounds.height / 2, n = e.y >= this.bounds.y && e.y + e.height < i, r = e.y >= i && e.y + e.height <= this.bounds.y + this.bounds.height, o = e.x >= this.bounds.x && e.x + e.width < t, a = e.x >= t && e.x + e.width <= this.bounds.width + this.bounds.x;
    return (n || r) && (o || a) ? n << 0 | o << 1 : -1;
  }, i.prototype.insert = function (e) {
    var t, i = 0;
    if (this.nodes && -1 !== (t = this.getIndex(e)))
      this.nodes[t].insert(e);
    else if (this.objects.push(e), this.objects.length > this.max_objects && this.level < this.max_levels)
      for (this.nodes || this.split(); i < this.objects.length;)
        -1 !== (t = this.getIndex(this.objects[i])) ? this.nodes[t].insert(this.objects.splice(i, 1)[0]) : i += 1;
  }, i.prototype.remove = function (e) {
    var t = this.objects.indexOf(e), i = false;
    if (t >= 0)
      this.objects.splice(t, 1), i = true;
    else if (this.nodes) {
      if (-1 !== (t = this.getIndex(e)))
        if (i = this.nodes[t].remove(e)) {
          var n = this.nodes[0], r = this.nodes[1], o = this.nodes[2], a = this.nodes[3];
          n.nodes || r.nodes || o.nodes || a.nodes || n.objects.length || r.objects.length || o.objects.length || a.objects.length || (this.nodes = null);
        }
    }
    return i;
  }, i.prototype.retrieve = function (e, t) {
    var n = null;
    if (t ? t === i.RETRIEVE_MODE_INTERSECT ? n = this.objects.filter(function (t) {
        return !(t.x >= e.x + e.width || e.x >= t.x + t.width || t.y >= e.y + e.height || e.y >= t.y + t.height);
      }) : t === i.RETRIEVE_MODE_FULLYCONTAINED && (n = this.objects.filter(function (t) {
        return t.x >= e.x && t.y >= e.y && t.x + t.width <= e.x + e.width && t.y + t.height <= e.y + e.height;
      })) : n = this.objects, this.nodes) {
      var r = this.getIndex(e);
      if (-1 !== r)
        n = n.concat(this.nodes[r].retrieve(e, t));
      else
        for (var o = 0; o < this.nodes.length; o++)
          n = n.concat(this.nodes[o].retrieve(e, t));
    }
    return n;
  }, i.prototype.clear = function () {
    this.objects = [];
    for (var exports = 0; exports < this.nodes.length; exports++)
      this.nodes && this.nodes[exports].clear();
    this.nodes = null;
  }, exports.exports = i;
}
