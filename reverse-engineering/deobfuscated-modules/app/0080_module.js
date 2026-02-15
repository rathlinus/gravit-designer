/**
 * Webpack Module #80
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o,
      i,
      a,
      r = require(452) /* module_452 */,
      s = require(23) /* module_23 */,
      l = require(46) /* module_46 */,
      c = require(100) /* module_100 */,
      d = require(61) /* module_61 */,
      u = require(297) /* module_297 */,
      p = require(300) /* module_300 */,
      g = require(259) /* module_259 */,
      h = s.TypeError,
      f = s.WeakMap;
    if (r || u.state) {
      var m = u.state || (u.state = new f());
      (m.get = m.get),
        (m.has = m.has),
        (m.set = m.set),
        (o = function (e, t) {
          if (m.has(e)) throw new h("Object already initialized");
          return (t.facade = e), m.set(e, t), t;
        }),
        (i = function (e) {
          return m.get(e) || {};
        }),
        (a = function (e) {
          return m.has(e);
        });
    } else {
      var y = p("state");
      (g[y] = true),
        (o = function (e, t) {
          if (d(e, y)) throw new h("Object already initialized");
          return (t.facade = e), c(e, y, t), t;
        }),
        (i = function (e) {
          return d(e, y) ? e[y] : {};
        }),
        (a = function (e) {
          return d(e, y);
        });
    }
    exports.exports = {
      set: o,
      get: i,
      has: a,
      enforce: function (e) {
        return a(e) ? i(e) : o(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!l(t) || (n = i(t)).type !== e)
            throw new h("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    };
  }