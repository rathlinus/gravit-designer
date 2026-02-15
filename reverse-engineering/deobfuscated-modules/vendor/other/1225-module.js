/**
 * Module 1225
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
  var n = require(0) /* GObject */, r = require(1143) /* module */, o = require(800) /* module */, a = require(182) /* module */, s = require(440) /* module */, l = require(7) /* GTransform */, h = function (e, t, i, n, A) {
      o.call(this, {
        _out: null,
        write: function (e) {
          e.concat(this.getWriter());
        },
        length: function () {
          return this.getWriter().getPosition();
        },
        getWriter: function () {
          return this._out || (this._out = new r(), A && !A.isIdentity() && (new s(A).write(this._out), this._out.writeln()), t.write(this._out)), this._out;
        }
      });
      var c = new a(new l().getMatrix());
      this.putDictionary("/Type", "/XObject"), this.putDictionary("/Subtype", "/Form"), this.putDictionary("/Matrix", c), this.putDictionary("/BBox", n), this.putDictionary("/FormType", h.FormType.DEFAULT), i && this.putDictionary("/Group", i);
    };
  n.inherit(h, o), h.FormType = { DEFAULT: 1 }, exports.exports = h;
}
