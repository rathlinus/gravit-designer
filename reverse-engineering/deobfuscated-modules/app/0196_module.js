/**
 * Webpack Module #196
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* module_25 */,
      i = require(74) /* module_74 */,
      a = require(186) /* module_186 */,
      r = require(21) /* module_21 */,
      s = require(110) /* module_110 */,
      l = require(35) /* module_35 */,
      c = require(342) /* module_342 */,
      d = require(453) /* module_453 */,
      u = require(79) /* module_79 */,
      p = a && a.prototype;
    if (
      (o(
        {
          target: "Promise",
          proto: true,
          real: true,
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
      p.finally !== g && u(p, "finally", g, { unsafe: true });
    }
  }