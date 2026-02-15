/**
 * Webpack Module #196
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(74) /* module_74 */,
      a = n(186) /* module_186 */,
      r = n(21) /* module_21 */,
      s = n(110) /* module_110 */,
      l = n(35) /* module_35 */,
      c = n(342) /* module_342 */,
      d = n(453) /* module_453 */,
      u = n(79) /* module_79 */,
      p = a && a.prototype;
    if (
      (o(
        {
          target: "Promise",
          proto: !0,
          real: !0,
          forced:
            !!a &&
            r(function () {
              p.finally.call({ then: function () {} }, function () {});
            }),
        },
        {
          finally: function (e) {
            var t = c(this, s("Promise")),
              n = l(e);
            return this.then(
              n
                ? function (n) {
                    return d(t, e()).then(function () {
                      return n;
                    });
                  }
                : e,
              n
                ? function (n) {
                    return d(t, e()).then(function () {
                      throw n;
                    });
                  }
                : e
            );
          },
        }
      ),
      !i && l(a))
    ) {
      var g = s("Promise").prototype.finally;
      p.finally !== g && u(p, "finally", g, { unsafe: !0 });
    }
  }