/**
 * Webpack Module #94
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o =
      "undefined" != typeof Uint8Array &&
      "undefined" != typeof Uint16Array &&
      "undefined" != typeof Int32Array;
    function i(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    (module.assign = function (e) {
      for (var module = Array.prototype.slice.call(arguments, 1); module.length; ) {
        var require = module.shift();
        if (require) {
          if ("object" != typeof require)
            throw new TypeError(require + "must be non-object");
          for (var o in require) i(require, o) && (e[o] = require[o]);
        }
      }
      return e;
    }),
      (module.shrinkBuf = function (e, t) {
        return e.length === t
          ? e
          : e.subarray
          ? e.subarray(0, t)
          : ((e.length = t), e);
      });
    var a = {
        arraySet: function (e, t, n, o, i) {
          if (t.subarray && e.subarray) e.set(t.subarray(n, n + o), i);
          else for (var a = 0; a < o; a++) e[i + a] = t[n + a];
        },
        flattenChunks: function (e) {
          var t, n, o, i, a, r;
          for (o = 0, t = 0, n = e.length; t < n; t++) o += e[t].length;
          for (r = new Uint8Array(o), i = 0, t = 0, n = e.length; t < n; t++)
            (a = e[t]), r.set(a, i), (i += a.length);
          return r;
        },
      },
      r = {
        arraySet: function (e, t, n, o, i) {
          for (var a = 0; a < o; a++) e[i + a] = t[n + a];
        },
        flattenChunks: function (e) {
          return [].concat.apply([], e);
        },
      };
    (module.setTyped = function (e) {
      e
        ? ((module.Buf8 = Uint8Array),
          (module.Buf16 = Uint16Array),
          (module.Buf32 = Int32Array),
          module.assign(module, a))
        : ((module.Buf8 = Array),
          (module.Buf16 = Array),
          (module.Buf32 = Array),
          module.assign(module, r));
    }),
      module.setTyped(o);
  }