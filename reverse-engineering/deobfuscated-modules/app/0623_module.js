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
      l = n(23) /* module_23 */,
      c = n(411) /* module_411 */,
      d = n(124) /* module_124 */,
      u = n(409) /* module_409 */.set,
      p = n(412) /* module_412 */,
      g = n(410) /* module_410 */,
      h = n(624) /* module_624 */,
      f = n(625) /* module_625 */,
      m = n(245) /* module_245 */,
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
    e.exports = w;
  }