/**
 * Module 1226
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
  var n = i(147), r = i(138), o = i(0), a = i(68), s = i(391), l = i(90), h = i(1415), A = i(1418), c = i(799), p = i(1419), u = i(1229), d = i(293), g = i(158), f = function (e, t) {
      this._valid = !0, this._operation = t, this.load(e);
    };
  o.inherit(f, l), f.prototype._pattern = null, f.prototype._operator = null, f.prototype._operation = null, f.prototype._valid = !0, f.prototype.isValid = function () {
    return this._valid;
  }, f.prototype.load = function (e) {
    var t = e.color;
    if (t instanceof r) {
      var i;
      if (t instanceof n)
        i = new h(e);
      else {
        if (!(t instanceof g))
          return void console.log("WARN: Unsupported gradient pattern: " + t);
        i = new A(e);
      }
      if (!i.isValid())
        return void (this._valid = !1);
      var o = e.doc, l = o.getIndirectObject(i), f = o.getIndirectObject(new p(l));
      o.addIndirectObject(l), o.addIndirectObject(f);
      var m = o.addResource(c.Group.Types.PATTERN, new s(f));
      this._pattern = new u(m, this._operation), this._operator = "scn";
    } else {
      if (!("string" == typeof t || t instanceof a))
        return void console.log("WARN: Unsupported color: " + t);
      var y = e.colorSpace || e.doc.getColorSpace();
      this._pattern = y.parseColor(t), this._operator = y.operator;
    }
    this._operation & d.OPERATIONFLAG_STROKE && (this._operator = this._operator.toUpperCase());
  }, f.prototype.getPattern = function () {
    return this._pattern;
  }, f.prototype.write = function (e) {
    this._pattern.write(e), e.writeln(), e.write(this._operator);
  }, f.prototype.equals = function (e) {
    return e instanceof f && this._pattern.equals(e._pattern);
  }, e.exports = f;
}
