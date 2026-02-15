/**
 * Webpack Module #278
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */;
    var isCallable = require(29) /* isCallable */,
      defineBuiltIn = require(79) /* defineBuiltIn */,
      regexpExec = require(306) /* regexpExec */,
      tryCall = require(21) /* tryCall */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */,
      createProperty = require(100) /* createProperty */,
      c = wellKnownSymbol("species"),
      d = RegExp.prototype;
    exports.exports = function (e, t, n, u) {
      var p = wellKnownSymbol(e),
        g = !tryCall(function () {
          var t = {};
          return (
            (t[p] = function () {
              return 7;
            }),
            7 !== ""[e](t)
          );
        }),
        h =
          g &&
          !tryCall(function () {
            var t = false,
              n = /a/;
            return (
              "split" === e &&
                (((n = {}).constructor = {}),
                (n.constructor[c] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[p] = /./[p])),
              (n.exec = function () {
                return (t = true), null;
              }),
              n[p](""),
              !t
            );
          });
      if (!g || !h || n) {
        var f = /./[p],
          m = t(p, ""[e], function (e, t, n, defineBuiltIn, tryCall) {
            var wellKnownSymbol = t.exec;
            return wellKnownSymbol === regexpExec || wellKnownSymbol === d.exec
              ? g && !tryCall
                ? { done: true, value: isCallable(f, t, n, defineBuiltIn) }
                : { done: true, value: isCallable(e, n, t, defineBuiltIn) }
              : { done: false };
          });
        defineBuiltIn(String.prototype, e, m[0]), defineBuiltIn(d, p, m[1]);
      }
      u && createProperty(d[p], "sham", true);
    };
  }