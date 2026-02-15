/**
 * Webpack Module #407
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var globalThis = require(23) /* globalThis */,
      i = require(129) /* stub_requires_23 */,
      DataModule_116 = require(116) /* DataModule_116 */,
      r = function (e) {
        return i.slice(0, e.length) === e;
      };
    exports.exports = r("Bun/")
      ? "BUN"
      : r("Cloudflare-Workers")
      ? "CLOUDFLARE"
      : r("Deno/")
      ? "DENO"
      : r("Node.js/")
      ? "NODE"
      : globalThis.Bun && "string" == typeof Bun.version
      ? "BUN"
      : globalThis.Deno && "object" == typeof Deno.version
      ? "DENO"
      : "process" === DataModule_116(globalThis.process)
      ? "NODE"
      : globalThis.window && globalThis.document
      ? "BROWSER"
      : "REST";
  }