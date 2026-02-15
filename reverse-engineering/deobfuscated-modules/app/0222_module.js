/**
 * Webpack Module #222
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      isCallable = require(29) /* isCallable */,
      a = require(396) /* module_396 */,
      r = require(174) /* module_174 */,
      toIndexedObject = require(184) /* toIndexedObject */,
      l = require(294) /* module_294 */,
      c = require(61) /* module_61 */,
      d = require(399) /* module_399 */,
      u = Object.getOwnPropertyDescriptor;
    module.f = hasOwnProperty_wrapper
      ? u
      : function (e, t) {
          if (((e = toIndexedObject(e)), (t = l(t)), d))
            try {
              return u(e, t);
            } catch (e) {}
          if (c(e, t)) return r(!isCallable(a.f, e, t), e[t]);
        };
  }