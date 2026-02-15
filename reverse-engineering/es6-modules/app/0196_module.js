/**
 * Webpack Module #196
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var core_export = require(25) /* core_export */,
    createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
    a = require(186) /* stub_requires_23 */,
    tryCall = require(21) /* tryCall */,
    s = require(110) /* module_110 */,
    anObject = require(35) /* anObject */,
    DataModule_342 = require(342) /* DataModule_342 */,
    d = require(453) /* module_453 */,
    defineBuiltIn = require(79) /* defineBuiltIn */,
    p = a && a.prototype;
  if (
    (core_export(
      {
        target: 'Promise',
        proto: true,
        real: true,
        forced:
          !!a &&
          tryCall(function () {
            p.finally.call({ then: function () {} }, function () {});
          }),
      },
      {
        finally: function (e) {
          var t = DataModule_342(this, s('Promise')),
            n = anObject(e);
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
    !createNonEnumerableProperty && anObject(a))
  ) {
    var g = s('Promise').prototype.finally;
    p.finally !== g && defineBuiltIn(p, 'finally', g, { unsafe: true });
  }
}
