/**
 * Webpack Module #297
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      globalThis = require(23) /* globalThis */,
      defineGlobalProperty = require(298) /* defineGlobalProperty */,
      r = (exports.exports = globalThis["__core-js_shared__"] || defineGlobalProperty("__core-js_shared__", {}));
    (r.versions || (r.versions = [])).push({
      version: "3.42.0",
      mode: createNonEnumerableProperty ? "pure" : "global",
      copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.42.0/LICENSE",
      source: "https://github.com/zloirock/core-js",
    });
  }