/**
 * Webpack Module #407
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* globalThis */,
      i = require(129) /* stub_requires_23 */,
      a = require(116) /* module_116 */,
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
      : o.Bun && "string" == typeof Bun.version
      ? "BUN"
      : o.Deno && "object" == typeof Deno.version
      ? "DENO"
      : "process" === a(o.process)
      ? "NODE"
      : o.window && o.document
      ? "BROWSER"
      : "REST";
  }