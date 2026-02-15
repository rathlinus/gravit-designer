/**
 * Webpack Module #617
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(49) /* hasOwnProperty_wrapper */,
      i = n(400) /* module_400 */,
      a = n(88) /* createPropertyDescriptor */,
      r = n(37) /* toString_default */,
      s = n(184) /* toIndexedObject */,
      l = n(405) /* module_405 */;
    t.f =
      o && !i
        ? Object.defineProperties
        : function (e, t) {
            r(e);
            for (var n, o = s(t), i = l(t), c = i.length, d = 0; c > d; )
              a.f(e, (n = i[d++]), o[n]);
            return e;
          };
  }