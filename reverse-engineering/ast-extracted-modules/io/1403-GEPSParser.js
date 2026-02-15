/**
 * Module 1403
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  i(11), i(83), i(70), i(17), i(281), i(108);
  var n = i(47), r = i(9), o = (i(122), i(1404));
  function a() {
  }
  a.import = function (e, t, i, s, l, h, A) {
    if (e instanceof Blob || e instanceof File) {
      var c = new FileReader();
      return c.onload = function (e) {
        return a.import(c.result, t, i, s, l, h, A);
      }, c.readAsArrayBuffer(e);
    }
    if (e instanceof ArrayBuffer || e instanceof Uint8Array) {
      var p = e instanceof ArrayBuffer ? new Uint8Array(e) : e;
      var u = "ps.worker.js" + ("?v=" + Math.random()), d = new o(p, s, i, l), g = null, f = null;
      try {
        (function (e, t) {
          try {
            var i = new URL(e);
            if (!i.origin || "null" === i.origin)
              return !1;
          } catch (e) {
            return !1;
          }
          var n = new URL(t, i);
          return i.origin === n.origin;
        }(window.location.href, u) || (m = new URL(u, window.location.href).href, y = "importScripts('" + m + "');", u = URL.createObjectURL(new Blob([y]))), g = new Worker(u), d.worker = g, g.onmessage = function (e) {
          var t = e.data;
          if ("error" in t);
          else if ("func" in t) {
            var i = t.func;
            if ("progress" == i && t.data && t.data.length)
              h(t.data[0]);
            else if ("function" == typeof d.workerAPI[i])
              if ("done" == i && h(100), "data" in t) {
                for (var n = [], r = 0; r < t.data.length; r++)
                  n[r] = t.data[r];
                "result" in t && t.result && t.result.byteLength && t.result.byteLength > 4 && (n[n.length] = new Int32Array(t.result, 0, 1), n[n.length] = new Uint8Array(t.result, 4, t.result.byteLength - 4)), d.workerAPI[i].apply(d, n), "error" == i && n == o.ErrorCodes.General ? (null !== f && clearTimeout(f), g.terminate(), d.ready() || d.workerAPI.done.apply(d)) : d.ready() && null !== f && clearTimeout(f);
              } else
                g.postMessage({
                  error: -3,
                  errorStr: "no `data` field found in worker"
                });
            else
              g.postMessage({
                error: -2,
                errorStr: "no func found in worker"
              });
          } else
            g.postMessage({
              error: -1,
              errorStr: "no `func` field found in call"
            });
        }, A && A(function () {
          null !== f && clearTimeout(f), g.terminate(), l && l(r.get(new n("GEPSParser", o.ErrorCodes.Canceled)));
        }), g.postMessage({
          func: "init",
          data: [
            p,
            {
              gDevelopment: !1,
              maxWaitTime: 300000,
              outlineFonts: !!t
            }
          ]
        }), g.postMessage({
          func: "run",
          data: []
        }), f = setTimeout(function () {
          g.terminate(), d.ready() || (d.workerAPI.done.apply(d), d.workerAPI.error.apply(d, [o.ErrorCodes.Timeout]));
        }, 300000));
      } catch (e) {
        return void console.log("error loading worker");
      }
    }
    var m, y;
  }, e.exports = a;
}
