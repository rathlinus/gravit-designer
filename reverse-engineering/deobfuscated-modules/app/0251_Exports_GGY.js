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
      r = require(21) /* module_21 */,
      s = require(35) /* module_35 */,
      l = require(46) /* module_46 */,
      c = require(136) /* module_136 */,
      d = require(208) /* module_208 */,
      u = require(79) /* module_79 */,
      p = require(43) /* module_43 */,
      g = require(74) /* module_74 */,
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