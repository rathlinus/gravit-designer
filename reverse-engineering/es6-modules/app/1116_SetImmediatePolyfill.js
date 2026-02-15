/**
 * Webpack Module #1116
 * Type: unknown
 */

function (exports, module, require) {
  (function (e, t) {
    !(function (e, n) {
      'use strict';
      if (!e.setImmediate) {
        var o,
          i,
          a,
          r,
          s,
          l = 1,
          c = {},
          d = false,
          u = e.document,
          p = Object.getPrototypeOf && Object.getPrototypeOf(e);
        ((p = p && p.setTimeout ? p : e),
          '[object process]' === {}.toString.call(e.process)
            ? (o = function (e) {
                t.nextTick(function () {
                  h(e);
                });
              })
            : !(function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = true,
                      n = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = false;
                      }),
                      e.postMessage('', '*'),
                      (e.onmessage = n),
                      t
                    );
                  }
                })()
              ? e.MessageChannel
                ? (((a = new MessageChannel()).port1.onmessage = function (e) {
                    h(e.data);
                  }),
                  (o = function (e) {
                    a.port2.postMessage(e);
                  }))
                : u && 'onreadystatechange' in u.createElement('script')
                  ? ((i = u.documentElement),
                    (o = function (e) {
                      var t = u.createElement('script');
                      ((t.onreadystatechange = function () {
                        (h(e), (t.onreadystatechange = null), i.removeChild(t), (t = null));
                      }),
                        i.appendChild(t));
                    }))
                  : (o = function (e) {
                      setTimeout(h, 0, e);
                    })
              : ((r = 'setImmediate$' + Math.random() + '$'),
                (s = function (t) {
                  t.source === e &&
                    'string' == typeof t.data &&
                    0 === t.data.indexOf(r) &&
                    h(+t.data.slice(r.length));
                }),
                e.addEventListener
                  ? e.addEventListener('message', s, false)
                  : e.attachEvent('onmessage', s),
                (o = function (t) {
                  e.postMessage(r + t, '*');
                })),
          (p.setImmediate = function (e) {
            'function' != typeof e && (e = new Function('' + e));
            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
              t[n] = arguments[n + 1];
            var i = { callback: e, args: t };
            return ((c[l] = i), o(l), l++);
          }),
          (p.clearImmediate = g));
      }
      function g(e) {
        delete c[e];
      }
      function h(e) {
        if (d) setTimeout(h, 0, e);
        else {
          var t = c[e];
          if (t) {
            d = true;
            try {
              !(function (e) {
                var t = e.callback,
                  n = e.args;
                switch (n.length) {
                  case 0:
                    t();
                    break;
                  case 1:
                    t(n[0]);
                    break;
                  case 2:
                    t(n[0], n[1]);
                    break;
                  case 3:
                    t(n[0], n[1], n[2]);
                    break;
                  default:
                    t.apply(undefined, n);
                }
              })(t);
            } finally {
              (g(e), (d = false));
            }
          }
        }
      }
    })('undefined' == typeof self ? (undefined === e ? this : e) : self);
  }).call(this, require(109) /* module_109 */, require(183) /* module_183 */);
}
