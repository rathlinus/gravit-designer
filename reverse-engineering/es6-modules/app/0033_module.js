/**
 * Webpack Module #33
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var globalThis = require(23) /* globalThis */,
    domIterables = require(421) /* domIterables */,
    domTokenListPrototype = require(422) /* domTokenListPrototype */,
    arrayForEach = require(671) /* arrayForEach */,
    createProperty = require(100) /* createProperty */,
    l = function (e) {
      if (e && e.forEach !== arrayForEach)
        try {
          createProperty(e, 'forEach', arrayForEach);
        } catch (t) {
          e.forEach = arrayForEach;
        }
    };
  for (var c in domIterables) domIterables[c] && l(globalThis[c] && globalThis[c].prototype);
  l(domTokenListPrototype);
}
