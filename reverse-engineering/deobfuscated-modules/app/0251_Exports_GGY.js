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
      r = require(21) /* tryCall */,
      s = require(35) /* anObject */,
      l = require(46) /* toLength */,
      c = require(136) /* module_136 */,
      d = require(208) /* module_208 */,
      u = require(79) /* defineBuiltIn */,
      p = require(43) /* wellKnownSymbol */,
      g = require(74) /* createNonEnumerableProperty */,
      h = p("iterator"),
      f = false;
    [].keys &&
      ("next" in (a = [].keys())
        ? (i = d(d(a))) !== Object.prototype && (o = i)
        : (f = true)),
      !l(o) ||
      r(function () {
        var e = {};
        return o[h].call(e) !== e;
      })
        ? (o = {})
        : g && (o = c(o)),
      s(o[h]) ||
        u(o, h, function () {
          return this;
        }),
      (exports.exports = { IteratorPrototype: o, BUGGY_SAFARI_ITERATORS: f });
  }