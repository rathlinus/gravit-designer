/**
 * Webpack Module #151
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var isCallable = require(29) /* isCallable */,
    fixRegExpWKS = require(278) /* fixRegExpWKS */,
    toString_default = require(37) /* toString_default */,
    toLength = require(46) /* toLength */,
    toStringTagSupport = require(117) /* toStringTagSupport */,
    requireObjectCoercible = require(62) /* requireObjectCoercible */,
    classof = require(92) /* classof */,
    getSubstitution = require(145) /* getSubstitution */,
    regExpFlags = require(308) /* regExpFlags */,
    DataModule_279 = require(279); /* DataModule_279 */
  fixRegExpWKS('match', function (e, t, n) {
    return [
      function (t) {
        var n = classof(this),
          fixRegExpWKS = toLength(t) ? getSubstitution(t, e) : undefined;
        return fixRegExpWKS
          ? isCallable(fixRegExpWKS, t, n)
          : new RegExp(t)[e](requireObjectCoercible(n));
      },
      function (e) {
        var isCallable = toString_default(this),
          fixRegExpWKS = requireObjectCoercible(e),
          toLength = n(t, isCallable, fixRegExpWKS);
        if (toLength.done) return toLength.value;
        if (!isCallable.global) return DataModule_279(isCallable, fixRegExpWKS);
        var classof = isCallable.unicode;
        isCallable.lastIndex = 0;
        for (
          var getSubstitution, g = [], h = 0;
          null !== (getSubstitution = DataModule_279(isCallable, fixRegExpWKS));
        ) {
          var f = requireObjectCoercible(getSubstitution[0]);
          ((g[h] = f),
            '' === f &&
              (isCallable.lastIndex = regExpFlags(
                fixRegExpWKS,
                toStringTagSupport(isCallable.lastIndex),
                classof
              )),
            h++);
        }
        return 0 === h ? null : g;
      },
    ];
  });
}
