/**
 * Webpack Module #851
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var isCallable = require(29) /* isCallable */,
    fixRegExpWKS = require(278) /* fixRegExpWKS */,
    toString_default = require(37) /* toString_default */,
    toLength = require(46) /* toLength */,
    classof = require(92) /* classof */,
    l = require(1387) /* module_1387 */,
    requireObjectCoercible = require(62) /* requireObjectCoercible */,
    getSubstitution = require(145) /* getSubstitution */,
    DataModule_279 = require(279); /* DataModule_279 */
  fixRegExpWKS('search', function (e, t, n) {
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
        var classof = isCallable.lastIndex;
        l(classof, 0) || (isCallable.lastIndex = 0);
        var getSubstitution = DataModule_279(isCallable, fixRegExpWKS);
        return (
          l(isCallable.lastIndex, classof) || (isCallable.lastIndex = classof),
          null === getSubstitution ? -1 : getSubstitution.index
        );
      },
    ];
  });
}
