/**
 * Webpack Module #618
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o,
    i,
    a,
    core_export = require(25) /* core_export */,
    createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
    l = require(245) /* stub_requires_407 */,
    globalThis = require(23) /* globalThis */,
    isCallable = require(29) /* isCallable */,
    defineBuiltIn = require(79) /* defineBuiltIn */,
    DataModule_175 = require(175) /* DataModule_175 */,
    setToStringTag = require(137) /* setToStringTag */,
    DataModule_260 = require(260) /* DataModule_260 */,
    DataModule_65 = require(65) /* DataModule_65 */,
    anObject = require(35) /* anObject */,
    toLength = require(46) /* toLength */,
    DataModule_146 = require(146) /* DataModule_146 */,
    DataModule_342 = require(342) /* DataModule_342 */,
    b = require(409) /* module_409 */.set,
    DataModule_623 = require(623) /* DataModule_623 */,
    C = require(626) /* module_626 */,
    x = require(304) /* module_304 */,
    S = require(412) /* module_412 */,
    internalState = require(80) /* internalState */,
    A = require(186) /* stub_requires_23 */,
    DataModule_201 = require(201) /* DataModule_201 */,
    DataModule_202 = require(202) /* DataModule_202 */,
    P = DataModule_201.CONSTRUCTOR,
    D = DataModule_201.REJECTION_EVENT,
    L = DataModule_201.SUBCLASSING,
    I = internalState.getterFor('Promise'),
    k = internalState.set,
    O = A && A.prototype,
    F = A,
    R = O,
    M = globalThis.TypeError,
    N = globalThis.document,
    B = globalThis.process,
    U = DataModule_202.f,
    $ = U,
    j = !!(N && N.createEvent && globalThis.dispatchEvent),
    K = function (e) {
      var t;
      return !(!toLength(e) || !anObject((t = e.then))) && t;
    },
    V = function (e, t) {
      var n,
        o,
        i,
        a = t.value,
        core_export = 1 === t.state,
        createNonEnumerableProperty = core_export ? e.ok : e.fail,
        l = e.resolve,
        globalThis = e.reject,
        defineBuiltIn = e.domain;
      try {
        createNonEnumerableProperty
          ? (core_export || (2 === t.rejection && Y(t), (t.rejection = 1)),
            true === createNonEnumerableProperty
              ? (n = a)
              : (defineBuiltIn && defineBuiltIn.enter(),
                (n = createNonEnumerableProperty(a)),
                defineBuiltIn && (defineBuiltIn.exit(), (i = true))),
            n === e.promise
              ? globalThis(new M('Promise-chain cycle'))
              : (o = K(n))
                ? isCallable(o, n, l, globalThis)
                : l(n))
          : globalThis(a);
      } catch (e) {
        (defineBuiltIn && !i && defineBuiltIn.exit(), globalThis(e));
      }
    },
    H = function (e, t) {
      e.notified ||
        ((e.notified = true),
        DataModule_623(function () {
          for (var require, o = e.reactions; (require = o.get()); ) V(require, e);
          ((e.notified = false), t && !e.rejection && z(e));
        }));
    },
    W = function (e, t, n) {
      var o, i;
      (j
        ? (((o = N.createEvent('Event')).promise = t),
          (o.reason = n),
          o.initEvent(e, false, true),
          globalThis.dispatchEvent(o))
        : (o = { promise: t, reason: n }),
        !D && (i = globalThis['on' + e])
          ? i(o)
          : 'unhandledrejection' === e && C('Unhandled promise rejection', n));
    },
    z = function (e) {
      isCallable(b, globalThis, function () {
        var t,
          n = e.facade,
          o = e.value;
        if (
          q(e) &&
          ((t = x(function () {
            l ? B.emit('unhandledRejection', o, n) : W('unhandledrejection', n, o);
          })),
          (e.rejection = l || q(e) ? 2 : 1),
          t.error)
        )
          throw t.value;
      });
    },
    q = function (e) {
      return 1 !== e.rejection && !e.parent;
    },
    Y = function (e) {
      isCallable(b, globalThis, function () {
        var t = e.facade;
        l ? B.emit('rejectionHandled', t) : W('rejectionhandled', t, e.value);
      });
    },
    X = function (e, t, n) {
      return function (o) {
        e(t, o, n);
      };
    },
    Q = function (e, t, n) {
      e.done || ((e.done = true), n && (e = n), (e.value = t), (e.state = 2), H(e, true));
    },
    J = function (e, t, n) {
      if (!e.done) {
        ((e.done = true), n && (e = n));
        try {
          if (e.facade === t) throw new M("Promise can't be resolved itself");
          var o = K(t);
          o
            ? DataModule_623(function () {
                var n = { done: false };
                try {
                  isCallable(o, t, X(J, n, e), X(Q, n, e));
                } catch (t) {
                  Q(n, t, e);
                }
              })
            : ((e.value = t), (e.state = 1), H(e, false));
        } catch (t) {
          Q({ done: false }, t, e);
        }
      }
    };
  if (
    P &&
    ((R = (F = function (e) {
      (DataModule_146(this, R), DataModule_65(e), isCallable(o, this));
      var t = I(this);
      try {
        e(X(J, t), X(Q, t));
      } catch (e) {
        Q(t, e);
      }
    }).prototype),
    ((o = function (e) {
      k(this, {
        type: 'Promise',
        done: false,
        notified: false,
        parent: false,
        reactions: new S(),
        rejection: false,
        state: 0,
        value: null,
      });
    }).prototype = defineBuiltIn(R, 'then', function (e, t) {
      var n = I(this),
        o = U(DataModule_342(this, F));
      return (
        (n.parent = true),
        (o.ok = !anObject(e) || e),
        (o.fail = anObject(t) && t),
        (o.domain = l ? B.domain : undefined),
        0 === n.state
          ? n.reactions.add(o)
          : DataModule_623(function () {
              V(o, n);
            }),
        o.promise
      );
    })),
    (i = function () {
      var e = new o(),
        t = I(e);
      ((this.promise = e), (this.resolve = X(J, t)), (this.reject = X(Q, t)));
    }),
    (DataModule_202.f = U =
      function (e) {
        return e === F || undefined === e ? new i(e) : $(e);
      }),
    !createNonEnumerableProperty && anObject(A) && O !== Object.prototype)
  ) {
    ((a = O.then),
      L ||
        defineBuiltIn(
          O,
          'then',
          function (e, t) {
            var n = this;
            return new F(function (e, t) {
              isCallable(a, n, e, t);
            }).then(e, t);
          },
          { unsafe: true }
        ));
    try {
      delete O.constructor;
    } catch (e) {}
    DataModule_175 && DataModule_175(O, R);
  }
  (core_export({ global: true, constructor: true, wrap: true, forced: P }, { Promise: F }),
    setToStringTag(F, 'Promise', false, true),
    DataModule_260('Promise'));
}
