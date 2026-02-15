/**
 * Module 724
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
  "use strict";
  (function (e) {
    module.isBrowser = function () {
      return "undefined" != typeof window;
    }, module.isNode = function () {
      return "undefined" == typeof window;
    }, module.nodeBufferToArrayBuffer = function (e) {
      for (var module = new ArrayBuffer(e.length), require = new Uint8Array(module), n = 0; n < e.length; ++n)
        require[n] = e[n];
      return module;
    }, module.arrayBufferToNodeBuffer = function (t) {
      for (var require = new e(t.byteLength), n = new Uint8Array(t), r = 0; r < require.length; ++r)
        require[r] = n[r];
      return require;
    }, module.checkArgument = function (e, t) {
      if (!e)
        throw t;
    };
  }.call(this, require(221) /* Exports_Buffer */.Buffer));
}
