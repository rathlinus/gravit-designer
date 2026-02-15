/**
 * Webpack Module #196
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* core_export */,
      i = n(74) /* createNonEnumerableProperty */,
      a = n(186) /* stub_requires_23 */,
      r = n(21) /* tryCall */,
      s = n(110) /* module_110 */,
      l = n(35) /* anObject */,
      c = n(342) /* module_342 */,
      d = n(453) /* module_453 */,
      u = n(79) /* defineBuiltIn */,
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