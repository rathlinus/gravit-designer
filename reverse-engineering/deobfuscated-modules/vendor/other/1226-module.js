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

function (exports, module, require) {
  var n = require(147) /* GLinearGradient */, r = require(138) /* GGradient */, o = require(0) /* GObject */, a = require(68) /* GColor */, s = require(391) /* module */, l = require(90) /* Container */, h = require(1415) /* module */, A = require(1418) /* module */, c = require(799) /* module */, p = require(1419) /* module */, u = require(1229) /* module */, d = require(293) /* Stroke */, g = require(158) /* GRadialGradient */, f = function (e, t) {
      this._valid = true, this._operation = t, this.load(e);
    };
  o.inherit(f, l), f.prototype._pattern = null, f.prototype._operator = null, f.prototype._operation = null, f.prototype._valid = true, f.prototype.isValid = function () {
    return this._valid;
  }, f.prototype.load = function (e) {
    var t = e.color;
    if (t instanceof r) {
      var require;
      if (t instanceof n)
        require = new h(e);
      else {
        if (!(t instanceof g))
          return void console.log("WARN: Unsupported gradient pattern: " + t);
        require = new A(e);
      }
      if (!require.isValid())
        return void (this._valid = false);
      var o = e.doc, l = o.getIndirectObject(require), f = o.getIndirectObject(new p(l));
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
  }, exports.exports = f;
}
