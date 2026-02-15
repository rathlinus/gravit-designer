/**
 * Webpack Module #201
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(23) /* module_23 */,
      i = n(186) /* module_186 */,
      a = n(35) /* module_35 */,
      r = n(277) /* module_277 */,
      s = n(299) /* module_299 */,
      l = n(43) /* module_43 */,
      c = n(407) /* module_407 */,
      d = n(74) /* module_74 */,
      u = n(213) /* module_213 */,
      p = i && i.prototype,
      g = l("species"),
      h = false,
      f = a(o.PromiseRejectionEvent),
      m = r("Promise", function () {
        var e = s(i),
          t = e !== String(i);
        if (!t && 66 === u) return true;
        if (d && (!p.catch || !p.finally)) return true;
        if (!u || u < 51 || !/native code/.test(e)) {
          var n = new i(function (e) {
              e(1);
            }),
            o = function (e) {
              e(
                function () {},
                function () {}
              );
            };
          if (
            (((n.constructor = {})[g] = o),
            !(h = n.then(function () {}) instanceof o))
          )
            return true;
        }
        return !(t || ("BROWSER" !== c && "DENO" !== c) || f);
      });
    e.exports = { CONSTRUCTOR: m, REJECTION_EVENT: f, SUBCLASSING: h };
  }