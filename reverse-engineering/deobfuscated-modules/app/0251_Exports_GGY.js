/**
 * Webpack Module #251
 * Type: exports
 * Name: Exports_GGY
 */

function (exports, module, require) {
    "use strict";
    var o,
      i,
      a,
      tryCall = require(21) /* tryCall */,
      anObject = require(35) /* anObject */,
      toLength = require(46) /* toLength */,
      c = require(136) /* module_136 */,
      d = require(208) /* module_208 */,
      defineBuiltIn = require(79) /* defineBuiltIn */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */,
      createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      h = wellKnownSymbol("iterator"),
      f = false;
    [].keys &&
      ("next" in (a = [].keys())
        ? (i = d(d(a))) !== Object.prototype && (o = i)
        : (f = true)),
      !toLength(o) ||
      tryCall(function () {
        var e = {};
        return o[h].call(e) !== e;
      })
        ? (o = {})
        : createNonEnumerableProperty && (o = c(o)),
      anObject(o[h]) ||
        defineBuiltIn(o, h, function () {
          return this;
        }),
      (exports.exports = { IteratorPrototype: o, BUGGY_SAFARI_ITERATORS: f });
  }