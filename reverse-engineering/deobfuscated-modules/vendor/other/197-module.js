/**
 * Module 197
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
  var n = require(0) /* GObject */, r = require(11) /* GUtil */, o = require(90) /* Container */, a = require(560) /* module */, s = require(1144) /* module */, l = function () {
      this.hashmap = {};
    };
  n.inherit(l, o), l.prototype.putText = function (e, t) {
    this.put(e, s.newFromString(t));
  }, l.prototype.put = function (e, t) {
    this.hashmap[e] = new a(t);
  }, l.prototype.get = function (e) {
    var t = this.hashmap[e];
    return t ? t.getValue() : null;
  }, l.prototype.remove = function (e) {
    var t = this.hashmap[e];
    return delete this.hashmap[e], t ? t.getValue() : null;
  }, l.prototype.length = function () {
    return Object.keys(this.hashmap).length || 0;
  }, l.prototype.write = function (e) {
    e.write("<<"), r.each(this.hashmap, function (t, i) {
      e.write(t), e.write(" "), i.write(e);
    }), e.write(">>");
  }, exports.exports = l;
}
