/**
 * Webpack Module #623
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o,
      i,
      a,
      r,
      s,
      l = require(23) /* module_23 */,
      c = require(411) /* module_411 */,
      d = require(124) /* module_124 */,
      u = require(409) /* module_409 */.set,
      p = require(412) /* module_412 */,
      g = require(410) /* module_410 */,
      h = require(624) /* module_624 */,
      f = require(625) /* module_625 */,
      m = require(245) /* module_245 */,
      y = l.MutationObserver || l.WebKitMutationObserver,
      v = l.document,
      _ = l.process,
      b = l.Promise,
      w = c("queueMicrotask");
    if (!w) {
      var C = new p(),
        x = function () {
          var e, t;
          for (m && (e = _.domain) && e.exit(); (t = C.get()); )
            try {
              t();
            } catch (e) {
              throw (C.head && o(), e);
            }
          e && e.enter();
        };
      g || m || f || !y || !v
        ? !h && b && b.resolve
          ? (((r = b.resolve(undefined)).constructor = b),
            (s = d(r.then, r)),
            (o = function () {
              s(x);
            }))
          : m
          ? (o = function () {
              _.nextTick(x);
            })
          : ((u = d(u, l)),
            (o = function () {
              u(x);
            }))
        : ((i = true),
          (a = v.createTextNode("")),
          new y(x).observe(a, { characterData: true }),
          (o = function () {
            a.data = i = !i;
          })),
        (w = function (e) {
          C.head || o(), C.add(e);
        });
    }
    exports.exports = w;
  }