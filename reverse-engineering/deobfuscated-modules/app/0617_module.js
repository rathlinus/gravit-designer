/**
 * Webpack Module #617
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(49) /* hasOwnProperty_wrapper */,
      i = require(400) /* module_400 */,
      a = require(88) /* createPropertyDescriptor */,
      r = require(37) /* toString_default */,
      s = require(184) /* toIndexedObject */,
      l = require(405) /* module_405 */;
    module.f =
      o && !i
        ? Object.defineProperties
        : function (e, t) {
            r(e);
            for (var require, o = s(t), i = l(t), c = i.length, d = 0; c > d; )
              a.f(e, (require = i[d++]), o[require]);
            return e;
          };
  }