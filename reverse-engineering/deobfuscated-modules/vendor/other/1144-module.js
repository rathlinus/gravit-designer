/**
 * Module 1144
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
  var n = require(0) /* GObject */, r = require(90) /* Container */, o = require(560) /* module */, a = require(1218) /* module */;
  function s(e) {
    this._value = e;
  }
  n.inherit(s, r), s.newFromBytes = function (e) {
    return new s(new a(new Uint8Array(s.escape(e))));
  }, s.newFromString = function (e) {
    return new s(new o(s.escape(e)));
  }, s.BACKSLASH = "\\".charCodeAt(0), s.Lb = "\b".charCodeAt(0), s.Lt = "\t".charCodeAt(0), s.Ln = "\n".charCodeAt(0), s.Lf = "\f".charCodeAt(0), s.Lr = "\r".charCodeAt(0), s.OPEN_PARENTHESIS = "(".charCodeAt(0), s.CLOSE_PARENTHESIS = ")".charCodeAt(0), s.escape = function (e) {
    if ("string" == typeof e)
      return e.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    var t = [];
    return e.forEach(function (e) {
      switch (e) {
      case s.Lb:
        t.push(s.BACKSLASH), t.push("b".charCodeAt(0));
        break;
      case s.Lt:
        t.push(s.BACKSLASH), t.push("t".charCodeAt(0));
        break;
      case s.Ln:
        t.push(s.BACKSLASH), t.push("n".charCodeAt(0));
        break;
      case s.Lf:
        t.push(s.BACKSLASH), t.push("f".charCodeAt(0));
        break;
      case s.Lr:
        t.push(s.BACKSLASH), t.push("r".charCodeAt(0));
        break;
      case s.OPEN_PARENTHESIS:
      case s.CLOSE_PARENTHESIS:
      case s.BACKSLASH:
        t.push(s.BACKSLASH), t.push(e);
        break;
      default:
        t.push(e);
      }
    }), t;
  }, s.prototype._value = null, s.prototype.write = function (e) {
    e.write("("), this._value.write(e), e.write(")");
  }, s.prototype.toString = function () {
    return "[Object GPDFString]";
  }, exports.exports = s;
}
