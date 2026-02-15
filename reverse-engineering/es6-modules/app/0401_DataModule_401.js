/**
 * Webpack Module #401
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var uncurryThis = require(27) /* uncurryThis */,
    tryCall = require(21) /* tryCall */,
    anObject = require(35) /* anObject */,
    r = require(61) /* module_61 */,
    hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
    GURABLE = require(199) /* Exports_GURABLE */.CONFIGURABLE,
    c = require(299) /* module_299 */,
    internalState = require(80) /* internalState */,
    u = internalState.enforce,
    p = internalState.get,
    g = String,
    h = Object.defineProperty,
    f = uncurryThis(''.slice),
    m = uncurryThis(''.replace),
    y = uncurryThis([].join),
    v =
      hasOwnProperty_wrapper &&
      !tryCall(function () {
        return 8 !== h(function () {}, 'length', { value: 8 }).length;
      }),
    _ = String(String).split('String'),
    b = (exports.exports = function (e, t, n) {
      ('Symbol(' === f(g(t), 0, 7) && (t = '[' + m(g(t), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
        n && n.getter && (t = 'get ' + t),
        n && n.setter && (t = 'set ' + t),
        (!r(e, 'name') || (GURABLE && e.name !== t)) &&
          (hasOwnProperty_wrapper ? h(e, 'name', { value: t, configurable: true }) : (e.name = t)),
        v && n && r(n, 'arity') && e.length !== n.arity && h(e, 'length', { value: n.arity }));
      try {
        n && r(n, 'constructor') && n.constructor
          ? hasOwnProperty_wrapper && h(e, 'prototype', { writable: false })
          : e.prototype && (e.prototype = undefined);
      } catch (e) {}
      var uncurryThis = u(e);
      return (
        r(uncurryThis, 'source') || (uncurryThis.source = y(_, 'string' == typeof t ? t : '')),
        e
      );
    });
  Function.prototype.toString = b(function () {
    return (anObject(this) && p(this).source) || c(this);
  }, 'toString');
}
