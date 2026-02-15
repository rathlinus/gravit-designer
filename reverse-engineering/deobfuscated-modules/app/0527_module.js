/**
 * Webpack Module #527
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* module_23 */,
      i = require(49) /* module_49 */,
      a = require(120) /* module_120 */,
      r = require(307) /* module_307 */,
      s = require(21) /* module_21 */,
      l = o.RegExp,
      c = l.prototype;
    i &&
      s(function () {
        var e = true;
        try {
          l(".", "d");
        } catch (t) {
          e = false;
        }
        var t = {},
          n = "",
          o = e ? "dgimsy" : "gimsy",
          i = function (e, o) {
            Object.defineProperty(t, e, {
              get: function () {
                return (n += o), true;
              },
            });
          },
          a = {
            dotAll: "s",
            global: "g",
            ignoreCase: "i",
            multiline: "m",
            sticky: "y",
          };
        for (var r in (e && (a.hasIndices = "d"), a)) i(r, a[r]);
        return (
          Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== o ||
          n !== o
        );
      }) &&
      a(c, "flags", { configurable: true, get: r });
  }