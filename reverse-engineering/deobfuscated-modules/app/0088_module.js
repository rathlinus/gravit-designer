/**
 * Webpack Module #88
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      DataModule_399 = require(399) /* DataModule_399 */,
      DataModule_400 = require(400) /* DataModule_400 */,
      toString_default = require(37) /* toString_default */,
      DataModule_294 = require(294) /* DataModule_294 */,
      l = TypeError,
      c = Object.defineProperty,
      d = Object.getOwnPropertyDescriptor;
    module.f = hasOwnProperty_wrapper
      ? DataModule_400
        ? function (e, t, n) {
            if (
              (toString_default(e),
              (t = DataModule_294(t)),
              toString_default(n),
              "function" == typeof e &&
                "prototype" === t &&
                "value" in n &&
                "writable" in n &&
                !n.writable)
            ) {
              var hasOwnProperty_wrapper = d(e, t);
              hasOwnProperty_wrapper &&
                hasOwnProperty_wrapper.writable &&
                ((e[t] = n.value),
                (n = {
                  configurable:
                    "configurable" in n ? n.configurable : hasOwnProperty_wrapper.configurable,
                  enumerable: "enumerable" in n ? n.enumerable : hasOwnProperty_wrapper.enumerable,
                  writable: false,
                }));
            }
            return c(e, t, n);
          }
        : c
      : function (e, t, n) {
          if ((toString_default(e), (t = DataModule_294(t)), toString_default(n), DataModule_399))
            try {
              return c(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n) throw new l("Accessors not supported");
          return "value" in n && (e[t] = n.value), e;
        };
  }