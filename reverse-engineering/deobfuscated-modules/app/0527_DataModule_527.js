/**
 * Webpack Module #527
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var globalThis = require(23) /* globalThis */,
      hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      a = require(120) /* module_120 */,
      DataModule_307 = require(307) /* DataModule_307 */,
      tryCall = require(21) /* tryCall */,
      l = globalThis.RegExp,
      c = l.prototype;
    hasOwnProperty_wrapper &&
      tryCall(function () {
        var e = true;
        try {
          l(".", "d");
        } catch (t) {
          e = false;
        }
        var t = {},
          n = "",
          globalThis = e ? "dgimsy" : "gimsy",
          hasOwnProperty_wrapper = function (e, globalThis) {
            Object.defineProperty(t, e, {
              get: function () {
                return (n += globalThis), true;
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
        for (var DataModule_307 in (e && (a.hasIndices = "d"), a)) hasOwnProperty_wrapper(DataModule_307, a[DataModule_307]);
        return (
          Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== globalThis ||
          n !== globalThis
        );
      }) &&
      a(c, "flags", { configurable: true, get: DataModule_307 });
  }