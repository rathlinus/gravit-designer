/**
 * Webpack Module #452
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var globalThis = require(23) /* globalThis */,
      anObject = require(35) /* anObject */,
      a = globalThis.WeakMap;
    exports.exports = anObject(a) && /native code/.test(String(a));
  }