/**
 * Webpack Module #251
 * Type: exports
 * Name: Exports_GGY
 */

function (e, t, n) {
    "use strict";
    var o,
      i,
      a,
      r = n(21) /* tryCall */,
      s = n(35) /* anObject */,
      l = n(46) /* toLength */,
      c = n(136) /* DataModule_136 */,
      d = n(208) /* DataModule_208 */,
      u = n(79) /* defineBuiltIn */,
      p = n(43) /* wellKnownSymbol */,
      g = n(74) /* createNonEnumerableProperty */,
      h = p("iterator"),
      f = !1;
    [].keys &&
      ("next" in (a = [].keys())
        ? (i = d(d(a))) !== Object.prototype && (o = i)
        : (f = !0)),
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
      (e.exports = { IteratorPrototype: o, BUGGY_SAFARI_ITERATORS: f });
  }