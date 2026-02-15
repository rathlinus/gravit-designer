/**
 * Webpack Module #371
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var isCallable = require(29) /* isCallable */,
      DataModule_136 = require(136) /* DataModule_136 */,
      createProperty = require(100) /* createProperty */,
      r = require(232) /* module_232 */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */,
      internalState = require(80) /* internalState */,
      getSubstitution = require(145) /* getSubstitution */,
      GGY = require(251) /* Exports_GGY */.IteratorPrototype,
      toStringClassof = require(252) /* toStringClassof */,
      DataModule_102 = require(102) /* DataModule_102 */,
      g = wellKnownSymbol("toStringTag"),
      h = internalState.set,
      f = function (e) {
        var t = internalState.getterFor(e ? "WrapForValidIterator" : "IteratorHelper");
        return r(DataModule_136(GGY), {
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
              DataModule_136 = n.iterator;
            if (((n.done = true), e)) {
              var createProperty = getSubstitution(DataModule_136, "return");
              return createProperty ? isCallable(createProperty, DataModule_136) : toStringClassof(undefined, true);
            }
            if (n.inner)
              try {
                DataModule_102(n.inner.iterator, "normal");
              } catch (e) {
                return DataModule_102(DataModule_136, "throw", e);
              }
            return DataModule_136 && DataModule_102(DataModule_136, "normal"), toStringClassof(undefined, true);
          },
        });
      },
      m = f(true),
      y = f(false);
    createProperty(y, g, "Iterator Helper"),
      (exports.exports = function (e, t, n) {
        var isCallable = function (isCallable, DataModule_136) {
          DataModule_136 ? ((DataModule_136.iterator = isCallable.iterator), (DataModule_136.next = isCallable.next)) : (DataModule_136 = isCallable),
            (DataModule_136.type = t ? "WrapForValidIterator" : "IteratorHelper"),
            (DataModule_136.returnHandlerResult = !!n),
            (DataModule_136.nextHandler = e),
            (DataModule_136.counter = 0),
            (DataModule_136.done = false),
            h(this, DataModule_136);
        };
        return (isCallable.prototype = t ? m : y), isCallable;
      });
  }