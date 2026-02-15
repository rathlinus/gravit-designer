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

function (e, t, i) {
  var n = i(22), r = i(159), o = i(122);
  function a(e) {
    throw new Error("This class cannot be instantiated");
  }
  a.asFlattenElement = function (e) {
    function t(e, i) {
      if (e instanceof n) {
        var a = e.getFirstChild();
        for (e instanceof r ? e = new o() : e.getParent().removeChild(e), i && (e instanceof o && i instanceof o ? e = i : i.appendChild(e)); a;) {
          var s = a.getNext();
          (e instanceof r || e instanceof o) && t(a, e), a = s;
        }
      }
    }
    for (var i = new o(), a = e.getFirstChild(); a;) {
      var s = a.getNext();
      t(a, i), a = s;
    }
    if (i.getFirstChild() && null === i.getFirstChild().getNext()) {
      var l = i.getFirstChild();
      i.removeChild(l), i = l;
    }
    return i;
  }, e.exports = a;
}
