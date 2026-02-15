/**
 * Module 1234
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

function (exports, module) {
  function i() {
    throw new Error("This class can not be instantiated");
  }
  i.Surrogate = {
    Lead: {
      FirstChar: 55296,
      EndChar: 56319
    },
    Trail: {
      FirstChar: 56320,
      EndChar: 57343
    }
  }, i.isSurrogatePair = function (e, t) {
    return i.isSurrogateLead(e) && i.isSurrogateTrail(t);
  }, i.isSurrogateLead = function (e) {
    return e >= i.Surrogate.Lead.FirstChar && e <= i.Surrogate.Lead.EndChar;
  }, i.isSurrogateTrail = function (e) {
    return e >= i.Surrogate.Trail.FirstChar && e <= i.Surrogate.Trail.EndChar;
  }, i.encodeToUTF32 = function (e, t) {
    return 1024 * (e - i.Surrogate.Lead.FirstChar) + t - i.Surrogate.Trail.FirstChar + 65536;
  }, i.encodeToUTF16BE = function (e) {
    for (var module = i.encodeToUCS2(e), n = 0; n < module.length; n += 2) {
      var r = module[n];
      module[n] = module[n + 1], module[n + 1] = r;
    }
    return module;
  }, i.encodeToUCS2 = function (e) {
    for (var module, i = [], n = 0; n < e.length; ++n)
      module = "string" == typeof e ? e.charCodeAt(n) : e[n], i.push(module % 256), i.push(module >> 8);
    return i;
  }, exports.exports = i;
}
