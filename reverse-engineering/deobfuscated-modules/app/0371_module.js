/**
 * Webpack Module #371
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(29) /* module_29 */,
      i = require(136) /* module_136 */,
      a = require(100) /* module_100 */,
      r = require(232) /* module_232 */,
      s = require(43) /* module_43 */,
      l = require(80) /* module_80 */,
      c = require(145) /* module_145 */,
      d = require(251) /* Exports_GGY */.IteratorPrototype,
      u = require(252) /* module_252 */,
      p = require(102) /* module_102 */,
      g = s("toStringTag"),
      h = l.set,
      f = function (e) {
        var t = l.getterFor(e ? "WrapForValidIterator" : "IteratorHelper");
        return r(i(d), {
          next: function () {
            var n = t(this);
            if (e) return n.nextHandler();
            if (n.done) return u(undefined, true);
            try {
              var o = n.nextHandler();
              return n.returnHandlerResult ? o : u(o, n.done);
            } catch (e) {
              throw ((n.done = true), e);
            }
          },
          return: function () {
            var n = t(this),
              i = n.iterator;
            if (((n.done = true), e)) {
              var a = c(i, "return");
              return a ? o(a, i) : u(undefined, true);
            }
            if (n.inner)
              try {
                p(n.inner.iterator, "normal");
              } catch (e) {
                return p(i, "throw", e);
              }
            return i && p(i, "normal"), u(undefined, true);
          },
        });
      },
      m = f(true),
      y = f(false);
    a(y, g, "Iterator Helper"),
      (exports.exports = function (e, t, n) {
        var o = function (o, i) {
          i ? ((i.iterator = o.iterator), (i.next = o.next)) : (i = o),
            (i.type = t ? "WrapForValidIterator" : "IteratorHelper"),
            (i.returnHandlerResult = !!n),
            (i.nextHandler = e),
            (i.counter = 0),
            (i.done = false),
            h(this, i);
        };
        return (o.prototype = t ? m : y), o;
      });
  }