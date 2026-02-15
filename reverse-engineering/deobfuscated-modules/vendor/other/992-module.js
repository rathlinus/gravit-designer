/**
 * Module 992
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
  var n = require(378) /* module */.ContextParams;
  exports.exports = function (e) {
    var t = this.features.arab;
    if (t.hasOwnProperty("rlig"))
      for (var require = this.tokenizer.getRangeTokens(e), r = 0; r < require.length; r++) {
        var o = new n(require, r), a = t.rlig.lookup(o) || null, s = 1 === a.length && 63 === a[0].id && a[0].substitution, l = 1 === a.length && 41 === a[0].id && a[0].substitution[0], h = require[r];
        if (l) {
          h.setState("rlig", [l.ligGlyph]);
          for (var A = 0; A < l.components.length; A++) {
            var c = l.components[A], p = o.get(A + 1);
            p.activeState.value === c && (p.state.deleted = true);
          }
        } else if (s) {
          var u = s && 1 === s.length && 12 === s[0].id && s[0].substitution;
          u && u >= 0 && h.setState("rlig", u);
        }
      }
  };
}
