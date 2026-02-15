/**
 * Webpack Module #247
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var isCallable = require(29) /* isCallable */,
    uncurryThis = require(27) /* uncurryThis */,
    fixRegExpWKS = require(278) /* fixRegExpWKS */,
    toString_default = require(37) /* toString_default */,
    toLength = require(46) /* toLength */,
    classof = require(92) /* classof */,
    DataModule_342 = require(342) /* DataModule_342 */,
    regExpFlags = require(308) /* regExpFlags */,
    toStringTagSupport = require(117) /* toStringTagSupport */,
    requireObjectCoercible = require(62) /* requireObjectCoercible */,
    getSubstitution = require(145) /* getSubstitution */,
    DataModule_279 = require(279) /* DataModule_279 */,
    DataModule_344 = require(344) /* DataModule_344 */,
    tryCall = require(21) /* tryCall */,
    y = DataModule_344.UNSUPPORTED_Y,
    v = Math.min,
    _ = uncurryThis([].push),
    b = uncurryThis(''.slice),
    w = !tryCall(function () {
      var e = /(?:)/,
        t = e.exec;
      e.exec = function () {
        return t.apply(this, arguments);
      };
      var n = 'ab'.split(e);
      return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1];
    }),
    C =
      'c' === 'abbc'.split(/(b)*/)[1] ||
      4 !== 'test'.split(/(?:)/, -1).length ||
      2 !== 'ab'.split(/(?:ab)*/).length ||
      4 !== '.'.split(/(.?)(.?)/).length ||
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length;
  fixRegExpWKS(
    'split',
    function (e, t, n) {
      var uncurryThis = '0'.split(undefined, 0).length
        ? function (e, n) {
            return undefined === e && 0 === n ? [] : isCallable(t, this, e, n);
          }
        : t;
      return [
        function (t, n) {
          var fixRegExpWKS = classof(this),
            toString_default = toLength(t) ? getSubstitution(t, e) : undefined;
          return toString_default
            ? isCallable(toString_default, t, fixRegExpWKS, n)
            : isCallable(uncurryThis, requireObjectCoercible(fixRegExpWKS), t, n);
        },
        function (e, isCallable) {
          var fixRegExpWKS = toString_default(this),
            toLength = requireObjectCoercible(e);
          if (!C) {
            var classof = n(uncurryThis, fixRegExpWKS, toLength, isCallable, uncurryThis !== t);
            if (classof.done) return classof.value;
          }
          var getSubstitution = DataModule_342(fixRegExpWKS, RegExp),
            DataModule_344 = fixRegExpWKS.unicode,
            tryCall =
              (fixRegExpWKS.ignoreCase ? 'i' : '') +
              (fixRegExpWKS.multiline ? 'm' : '') +
              (fixRegExpWKS.unicode ? 'u' : '') +
              (y ? 'g' : 'y'),
            w = new getSubstitution(y ? '^(?:' + fixRegExpWKS.source + ')' : fixRegExpWKS, tryCall),
            x = undefined === isCallable ? 4294967295 : isCallable >>> 0;
          if (0 === x) return [];
          if (0 === toLength.length) return null === DataModule_279(w, toLength) ? [toLength] : [];
          for (var S = 0, E = 0, A = []; E < toLength.length; ) {
            w.lastIndex = y ? 0 : E;
            var T,
              G = DataModule_279(w, y ? b(toLength, E) : toLength);
            if (
              null === G ||
              (T = v(toStringTagSupport(w.lastIndex + (y ? E : 0)), toLength.length)) === S
            )
              E = regExpFlags(toLength, E, DataModule_344);
            else {
              if ((_(A, b(toLength, S, E)), A.length === x)) return A;
              for (var P = 1; P <= G.length - 1; P++) if ((_(A, G[P]), A.length === x)) return A;
              E = S = T;
            }
          }
          return (_(A, b(toLength, S)), A);
        },
      ];
    },
    C || !w,
    y
  );
}
