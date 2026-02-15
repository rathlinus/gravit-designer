/**
 * Module 1149
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
  var n = i(11);
  function r(e) {
    this.map = {}, e && e.split(";").forEach(function (e) {
      var t = e.trim().split(":");
      this.map[t[0]] = t[1];
    }.bind(this));
  }
  r.prototype.set = function (e, t) {
    this.map[e] = t;
  }, r.prototype.get = function (e) {
    return this.map[e];
  }, r.prototype.remove = function (e) {
    delete this.map[e];
  }, r.prototype.toString = function () {
    var e = "";
    return n.each(this.map, function (t, i) {
      e += t + ":" + i + ";";
    }), e;
  }, r.prototype.clone = function () {
    var e = new r();
    return n.each(this.map, function (t, i) {
      e.map[t] = i;
    }), e;
  }, r.prototype.getLength = function () {
    return Object.keys(this.map).length;
  }, r.prototype.setElementStyle = function (e) {
    this.getLength() > 0 && e.setAttribute("style", this.toString());
  }, e.exports = r;
}
