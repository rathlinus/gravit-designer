/**
 * Webpack Module #121
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o = require(124) /* module_124 */,
    isCallable = require(29) /* isCallable */,
    toString_default = require(37) /* toString_default */,
    DataModule_185 = require(185) /* DataModule_185 */,
    DataModule_305 = require(305) /* DataModule_305 */,
    l = require(101) /* stub_requires_117 */,
    c = require(144) /* stub_requires_27 */,
    DataModule_246 = require(246) /* DataModule_246 */,
    DataModule_204 = require(204) /* DataModule_204 */,
    DataModule_102 = require(102) /* DataModule_102 */,
    g = TypeError,
    h = function (e, t) {
      ((this.stopped = e), (this.result = t));
    },
    f = h.prototype;
  exports.exports = function (e, t, n) {
    var m,
      y,
      v,
      _,
      b,
      w,
      C,
      x = n && n.that,
      S = !(!n || !n.AS_ENTRIES),
      E = !(!n || !n.IS_RECORD),
      A = !(!n || !n.IS_ITERATOR),
      T = !(!n || !n.INTERRUPTED),
      G = o(t, x),
      P = function (e) {
        return (m && DataModule_102(m, 'normal', e), new h(true, e));
      },
      D = function (e) {
        return S ? (toString_default(e), T ? G(e[0], e[1], P) : G(e[0], e[1])) : T ? G(e, P) : G(e);
      };
    if (E) m = e.iterator;
    else if (A) m = e;
    else {
      if (!(y = DataModule_204(e))) throw new g(DataModule_185(e) + ' is not iterable');
      if (DataModule_305(y)) {
        for (v = 0, _ = l(e); _ > v; v++) if ((b = D(e[v])) && c(f, b)) return b;
        return new h(false);
      }
      m = DataModule_246(e, y);
    }
    for (w = E ? e.next : m.next; !(C = isCallable(w, m)).done; ) {
      try {
        b = D(C.value);
      } catch (e) {
        DataModule_102(m, 'throw', e);
      }
      if ('object' == typeof b && b && c(f, b)) return b;
    }
    return new h(false);
  };
}
