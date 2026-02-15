/**
 * Webpack Module #371
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var isCallable = require(29) /* isCallable */,
      i = require(136) /* module_136 */,
      createProperty = require(100) /* createProperty */,
      r = require(232) /* module_232 */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */,
      internalState = require(80) /* internalState */,
      getSubstitution = require(145) /* getSubstitution */,
      GGY = require(251) /* Exports_GGY */.IteratorPrototype,
      toStringClassof = require(252) /* toStringClassof */,
      p = require(102) /* module_102 */,
      g = wellKnownSymbol("toStringTag"),
      h = internalState.set,
      f = function (e) {
        var t = internalState.getterFor(e ? "WrapForValidIterator" : "IteratorHelper");
        return r(i(GGY), {
          next: function () {
            var n = t(this);
            if (e) return n.nextHandler();
            if (n.done) return toStringClassof(undefined, true);
            try {
              var isCallable = n.nextHandler();
              return n.returnHandlerResult ? isCallable : toStringClassof(isCallable, n.done);
            } catch (e) {
              throw ((n.done = true), e);
            }
          },
          return: function () {
            var n = t(this),
              i = n.iterator;
            if (((n.done = true), e)) {
              var createProperty = getSubstitution(i, "return");
              return createProperty ? isCallable(createProperty, i) : toStringClassof(undefined, true);
            }
            if (n.inner)
              try {
                p(n.inner.iterator, "normal");
              } catch (e) {
                return p(i, "throw", e);
              }
            return i && p(i, "normal"), toStringClassof(undefined, true);
          },
        });
      },
      m = f(true),
      y = f(false);
    createProperty(y, g, "Iterator Helper"),
      (exports.exports = function (e, t, n) {
        var isCallable = function (isCallable, i) {
          i ? ((i.iterator = isCallable.iterator), (i.next = isCallable.next)) : (i = isCallable),
            (i.type = t ? "WrapForValidIterator" : "IteratorHelper"),
            (i.returnHandlerResult = !!n),
            (i.nextHandler = e),
            (i.counter = 0),
            (i.done = false),
            h(this, i);
        };
        return (isCallable.prototype = t ? m : y), isCallable;
      });
  }