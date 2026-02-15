/**
 * Webpack Module #371
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(29) /* module_29 */,
      i = n(136) /* module_136 */,
      a = n(100) /* module_100 */,
      r = n(232) /* module_232 */,
      s = n(43) /* module_43 */,
      l = n(80) /* module_80 */,
      c = n(145) /* module_145 */,
      d = n(251) /* Exports_GGY */.IteratorPrototype,
      u = n(252) /* module_252 */,
      p = n(102) /* module_102 */,
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
      (e.exports = function (e, t, n) {
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