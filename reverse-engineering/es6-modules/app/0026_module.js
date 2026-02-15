/**
 * Webpack Module #26
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var globalThis = require(23) /* globalThis */,
    domIterables = require(421) /* domIterables */,
    domTokenListPrototype = require(422) /* domTokenListPrototype */,
    r = require(19) /* polyfill_Array_iterator */,
    createProperty = require(100) /* createProperty */,
    setToStringTag = require(137) /* setToStringTag */,
    wellKnownSymbol = require(43)(/* wellKnownSymbol */ 'iterator'),
    d = r.values,
    u = function (e, t) {
      if (e) {
        if (e[wellKnownSymbol] !== d)
          try {
            createProperty(e, wellKnownSymbol, d);
          } catch (t) {
            e[wellKnownSymbol] = d;
          }
        if ((setToStringTag(e, t, true), domIterables[t]))
          for (var require in r)
            if (e[require] !== r[require])
              try {
                createProperty(e, require, r[require]);
              } catch (t) {
                e[require] = r[require];
              }
      }
    };
  for (var p in domIterables) u(globalThis[p] && globalThis[p].prototype, p);
  u(domTokenListPrototype, 'DOMTokenList');
}
