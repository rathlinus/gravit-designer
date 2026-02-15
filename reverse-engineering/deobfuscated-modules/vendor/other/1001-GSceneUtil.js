/**
 * Module 1001 - GSceneUtil
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
  var n = require(22) /* GElement */, r = require(159) /* GLayer */, o = require(122) /* GGroup */;
  function a(e) {
    throw new Error("This class cannot be instantiated");
  }
  a.asFlattenElement = function (e) {
    function module(e, i) {
      if (e instanceof n) {
        var a = e.getFirstChild();
        for (e instanceof r ? e = new o() : e.getParent().removeChild(e), i && (e instanceof o && i instanceof o ? e = i : i.appendChild(e)); a;) {
          var s = a.getNext();
          (e instanceof r || e instanceof o) && module(a, e), a = s;
        }
      }
    }
    for (var require = new o(), a = e.getFirstChild(); a;) {
      var s = a.getNext();
      module(a, require), a = s;
    }
    if (require.getFirstChild() && null === require.getFirstChild().getNext()) {
      var l = require.getFirstChild();
      require.removeChild(l), require = l;
    }
    return require;
  }, exports.exports = a;
}
