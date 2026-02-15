/**
 * Webpack Module #80
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o,
    i,
    a,
    r = require(452) /* module_452 */,
    globalThis = require(23) /* globalThis */,
    toLength = require(46) /* toLength */,
    createProperty = require(100) /* createProperty */,
    d = require(61) /* module_61 */,
    DataModule_297 = require(297) /* DataModule_297 */,
    p = require(300) /* module_300 */,
    g = require(259) /* module_259 */,
    h = globalThis.TypeError,
    f = globalThis.WeakMap;
  if (r || DataModule_297.state) {
    var m = DataModule_297.state || (DataModule_297.state = new f());
    ((m.get = m.get),
      (m.has = m.has),
      (m.set = m.set),
      (o = function (e, t) {
        if (m.has(e)) throw new h('Object already initialized');
        return ((t.facade = e), m.set(e, t), t);
      }),
      (i = function (e) {
        return m.get(e) || {};
      }),
      (a = function (e) {
        return m.has(e);
      }));
  } else {
    var y = p('state');
    ((g[y] = true),
      (o = function (e, t) {
        if (d(e, y)) throw new h('Object already initialized');
        return ((t.facade = e), createProperty(e, y, t), t);
      }),
      (i = function (e) {
        return d(e, y) ? e[y] : {};
      }),
      (a = function (e) {
        return d(e, y);
      }));
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
        if (!toLength(t) || (n = i(t)).type !== e)
          throw new h('Incompatible receiver, ' + e + ' required');
        return n;
      };
    },
  };
}
