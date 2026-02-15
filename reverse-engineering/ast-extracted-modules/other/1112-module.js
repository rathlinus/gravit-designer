/**
 * Module 1112
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
  var n = i(165), r = i(11);
  function o() {
  }
  o.prototype.concurrencyEncode = function (e, t, i) {
    return e.createPromise(function (e, n) {
      var o = t[0], a = r.uuid();
      o.postMessage({
        uuid: a,
        command: "zipencoder",
        buffer: i
      }, [i]);
      var s = function (e) {
          o.removeEventListener("message", l), o.removeEventListener("error", s), n(e);
        }, l = function (t) {
          var i = t.data;
          i.uuid === a && "zipencoder" === i.command && (o.removeEventListener("message", l), o.removeEventListener("error", s), e(i.buffer));
        };
      o.addEventListener("message", l), o.addEventListener("error", s);
    });
  }, o.prototype.encode = function (e) {
    return n.deflate(e);
  }, e.exports = o;
}
