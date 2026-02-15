/**
 * Webpack Module #79
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var anObject = require(35) /* anObject */,
    createPropertyDescriptor = require(88) /* createPropertyDescriptor */,
    DataModule_401 = require(401) /* DataModule_401 */,
    defineGlobalProperty = require(298); /* defineGlobalProperty */
  exports.exports = function (e, t, n, s) {
    s || (s = {});
    var l = s.enumerable,
      c = undefined !== s.name ? s.name : t;
    if ((anObject(n) && DataModule_401(n, c, s), s.global))
      l ? (e[t] = n) : defineGlobalProperty(t, n);
    else {
      try {
        s.unsafe ? e[t] && (l = true) : delete e[t];
      } catch (e) {}
      l
        ? (e[t] = n)
        : createPropertyDescriptor.f(e, t, {
            value: n,
            enumerable: false,
            configurable: !s.nonConfigurable,
            writable: !s.nonWritable,
          });
    }
    return e;
  };
}
