/**
 * Webpack Module #1196
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(1375) /* module_1375 */,
      a = n(93) /* module_93 */,
      r = n(101) /* module_101 */,
      s = n(130) /* module_130 */,
      l = n(573) /* module_573 */;
    o(
      { target: "Array", proto: !0 },
      {
        flat: function () {
          var e = arguments.length ? arguments[0] : void 0,
            t = a(this),
            n = r(t),
            o = l(t, 0);
          return (o.length = i(o, t, t, n, 0, void 0 === e ? 1 : s(e))), o;
        },
      }
    );
  }