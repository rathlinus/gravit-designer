/**
 * Webpack Module #34
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var advanceStringIndex = require(200) /* advanceStringIndex */,
    isCallable = require(29) /* isCallable */,
    uncurryThis = require(27) /* uncurryThis */,
    fixRegExpWKS = require(278) /* fixRegExpWKS */,
    tryCall = require(21) /* tryCall */,
    toString_default = require(37) /* toString_default */,
    anObject = require(35) /* anObject */,
    toLength = require(46) /* toLength */,
    lengthOfArrayLike = require(130) /* lengthOfArrayLike */,
    toStringTagSupport = require(117) /* toStringTagSupport */,
    requireObjectCoercible = require(62) /* requireObjectCoercible */,
    classof = require(92) /* classof */,
    regExpFlags = require(308) /* regExpFlags */,
    getSubstitution = require(145) /* getSubstitution */,
    DataModule_667 = require(667) /* DataModule_667 */,
    DataModule_279 = require(279) /* DataModule_279 */,
    wellKnownSymbol = require(43)(/* wellKnownSymbol */ 'replace'),
    b = Math.max,
    w = Math.min,
    C = uncurryThis([].concat),
    x = uncurryThis([].push),
    S = uncurryThis(''.indexOf),
    E = uncurryThis(''.slice),
    A = '$0' === 'a'.replace(/./, '$0'),
    T = !!/./[wellKnownSymbol] && '' === /./[wellKnownSymbol]('a', '$0');
  fixRegExpWKS(
    'replace',
    function (e, t, n) {
      var uncurryThis = T ? '$' : '$0';
      return [
        function (e, n) {
          var advanceStringIndex = classof(this),
            uncurryThis = toLength(e) ? getSubstitution(e, wellKnownSymbol) : undefined;
          return uncurryThis
            ? isCallable(uncurryThis, e, advanceStringIndex, n)
            : isCallable(t, requireObjectCoercible(advanceStringIndex), e, n);
        },
        function (e, isCallable) {
          var fixRegExpWKS = toString_default(this),
            tryCall = requireObjectCoercible(e);
          if (
            'string' == typeof isCallable &&
            -1 === S(isCallable, uncurryThis) &&
            -1 === S(isCallable, '$<')
          ) {
            var toLength = n(t, fixRegExpWKS, tryCall, isCallable);
            if (toLength.done) return toLength.value;
          }
          var classof = anObject(isCallable);
          classof || (isCallable = requireObjectCoercible(isCallable));
          var getSubstitution,
            wellKnownSymbol = fixRegExpWKS.global;
          wellKnownSymbol &&
            ((getSubstitution = fixRegExpWKS.unicode), (fixRegExpWKS.lastIndex = 0));
          for (
            var A, T = [];
            null !== (A = DataModule_279(fixRegExpWKS, tryCall)) && (x(T, A), wellKnownSymbol);
          ) {
            '' === requireObjectCoercible(A[0]) &&
              (fixRegExpWKS.lastIndex = regExpFlags(
                tryCall,
                toStringTagSupport(fixRegExpWKS.lastIndex),
                getSubstitution
              ));
          }
          for (var G, P = '', D = 0, L = 0; L < T.length; L++) {
            for (
              var I,
                k = requireObjectCoercible((A = T[L])[0]),
                O = b(w(lengthOfArrayLike(A.index), tryCall.length), 0),
                F = [],
                R = 1;
              R < A.length;
              R++
            )
              x(F, undefined === (G = A[R]) ? G : String(G));
            var M = A.groups;
            if (classof) {
              var N = C([k], F, O, tryCall);
              (undefined !== M && x(N, M),
                (I = requireObjectCoercible(advanceStringIndex(isCallable, undefined, N))));
            } else I = DataModule_667(k, tryCall, O, F, M, isCallable);
            O >= D && ((P += E(tryCall, D, O) + I), (D = O + k.length));
          }
          return P + E(tryCall, D);
        },
      ];
    },
    !!tryCall(function () {
      var e = /./;
      return (
        (e.exec = function () {
          var e = [];
          return ((e.groups = { a: '7' }), e);
        }),
        '7' !== ''.replace(e, '$<a>')
      );
    }) ||
      !A ||
      T
  );
}
