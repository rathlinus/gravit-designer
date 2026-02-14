/**
 * Module 1113
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
  var n = i(359), r = i(11), o = i(791);
  function a() {
  }
  a.prototype.concurrencyRaster = function (e, t, i, a, s, l, h) {
    var A = new Uint32Array(i), c = A.length, p = Math.floor(c / t.length) - Math.floor(c / t.length) % 4, u = c - p * t.length, d = Object.keys(n).find(function (e) {
        return n[e] === l;
      });
    return e.createPromise(function (e, i) {
      o.all(t.map(function (e, i) {
        return new o(function (n, o) {
          var l, c = {
              start: i * p,
              end: i * p + p
            };
          if (i === t.length - 1 && u > 0) {
            var g = u + 10 - (u + 10) % 4, f = new Uint32Array(c.end - c.start + g);
            f.set(A.slice(c.start, c.end), 0), c.end += u, l = f.buffer;
          } else
            l = A.slice(c.start, c.end).buffer;
          var m = r.uuid();
          e.postMessage({
            uuid: m,
            index: i,
            command: "raster",
            dataBuffer: l,
            range: c,
            colorspace: d,
            hasMask: h,
            width: a,
            height: s
          }, [l]), l = null;
          var y = function (t) {
              var i = t.data;
              i.uuid === m && "raster" === i.command && (e.removeEventListener("message", y), e.removeEventListener("error", _), n(i));
            }, _ = function (t) {
              e.removeEventListener("message", y), e.removeEventListener("error", _), o(t);
            };
          e.addEventListener("message", y), e.addEventListener("error", _);
        });
      })).then(function (t) {
        var i = new Uint8ClampedArray(a * s * l.length), n = h ? null : new Uint8ClampedArray(a * s), o = 0, A = 0, c = !1;
        r.bubbleSort(t, function (e, t) {
          return e.index - t.index;
        }).forEach(function (e) {
          i.set(new Uint8ClampedArray(e.imageBuffer), o), o += e.imageBuffer.byteLength, !h && e.smaskBuffer && (n.set(new Uint8ClampedArray(e.smaskBuffer), A), A += e.smaskBuffer.byteLength), c = c || e.hasTransparency, delete e.imageBuffer, delete e.smaskBuffer;
        }), e([
          i,
          c ? n : null
        ]);
      }).catch(i);
    });
  }, a.prototype.raster = function (e, t, i, n) {
    for (var r = 0, o = 0, a = !1, s = new Uint32Array(e), l = 0, h = s.length; l < h; l++) {
      var A = s[l], c = 255 & A, p = A >> 8 & 255, u = A >> 16 & 255, d = A >> 24 & 255;
      if (r >= i.length)
        break;
      i.set(t.fromRGBA(c, p, u, d), r), r += t.length, n && (n[o++] = d, d < 255 && (a = !0));
    }
    return a;
  }, e.exports = a;
}
