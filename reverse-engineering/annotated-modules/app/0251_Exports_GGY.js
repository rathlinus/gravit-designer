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
      r = n(21) /* module_21 */,
      s = n(35) /* module_35 */,
      l = n(46) /* module_46 */,
      c = n(136) /* module_136 */,
      d = n(208) /* module_208 */,
      u = n(79) /* module_79 */,
      p = n(43) /* module_43 */,
      g = n(74) /* module_74 */,
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