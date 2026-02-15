/**
 * Module 799
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
  var n = require(0) /* GObject */, r = require(197) /* module */, o = require(391) /* module */, a = function (e, t) {
      this._name = e, this._indirectReference = t;
    };
  a.prototype.getName = function () {
    return this._name;
  }, a.prototype.getPDFIndirectReference = function () {
    return this._indirectReference;
  }, a.prototype.getPDFObject = function () {
    return this.getPDFIndirectReference().getPDFObject();
  }, a.Group = function (e) {
    r.call(this), this._type = e;
  }, n.inherit(a.Group, r), a.Group.prototype.getName = function () {
    return this._type.name;
  }, a.Group.prototype.add = function (e) {
    if (e instanceof o && (e = new a(this._type.prefix + (this.length() + 1), e)), !(e instanceof a))
      throw "Invalid PDF Resource: " + e;
    return this.put("/" + e.getName(), e.getPDFIndirectReference()), e;
  }, a.Group.Types = {
    FONT: {
      name: "Font",
      prefix: "F"
    },
    PATTERN: {
      name: "Pattern",
      prefix: "P"
    },
    GSTATE: {
      name: "ExtGState",
      prefix: "GS"
    },
    XOBJECT: {
      name: "XObject",
      prefix: "xobj"
    }
  }, exports.exports = a;
}
