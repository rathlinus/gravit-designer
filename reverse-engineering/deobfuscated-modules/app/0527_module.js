/**
 * Webpack Module #527
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(23) /* module_23 */,
      i = n(49) /* module_49 */,
      a = n(120) /* module_120 */,
      r = n(307) /* module_307 */,
      s = n(21) /* module_21 */,
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