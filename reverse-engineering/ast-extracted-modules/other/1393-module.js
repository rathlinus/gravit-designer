/**
 * Module 1393
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
  var n = i(11), r = i(83), o = (i(70), i(17)), a = i(281), s = i(108), l = i(1394), h = i(1120), A = i(792), c = i(1397), p = i(1399), u = i(1203);
  function d() {
  }
  d.FontManagerProxy = function (e) {
    this._fontManager = e, this._fontManager.addEventListener(a.FontAvailableEvent, this._fontEvent, this), this._fontManager.addEventListener(a.FontUnavailableEvent, this._fontEvent, this), this._unresolvedFonts = [], this._resolvedFonts = [];
    var t = {};
    this._promise = new Promise(function (e, i) {
      t.resolve = e, t.reject = i;
    }), this._promiseCapability = t;
  }, d.FontManagerProxy.prototype._fontManager = null, d.FontManagerProxy.prototype._unresolvedFonts = null, d.FontManagerProxy.prototype._resolvedFonts = null, d.FontManagerProxy.prototype._promise = null, d.FontManagerProxy.prototype._promiseCapability = null, d.FontManagerProxy.prototype.getFont = function (e, t, i) {
    var n = this._fontManager.getFont(e, t, i);
    n.isResolved() || this._unresolvedFonts.some(function (n) {
      return n.getFamily() === e && n.getStyle() === t && n.getWeight() === i;
    }) || this._unresolvedFonts.push(n);
    return n;
  }, d.FontManagerProxy.prototype.getDefaultFont = function () {
    return this._fontManager.getDefaultFont();
  }, d.FontManagerProxy.prototype.getFonts = function () {
    return this._fontManager._fonts;
  }, d.FontManagerProxy.prototype.release = function () {
    this._promiseCapability.resolve(), this._fontManager.removeEventListener(a.FontAvailableEvent, this._fontEvent, this), this._fontManager.removeEventListener(a.FontUnavailableEvent, this._fontEvent, this);
  }, d.FontManagerProxy.prototype._fontEvent = function (e) {
    var t;
    this._unresolvedFonts.some(function (i, n) {
      return !!s.equals(e.font, i) && (t = n, !0);
    }) && this._resolvedFonts.push(this._unresolvedFonts.slice(t, 1)), this._checkUnresolvedFonts();
  }, d.FontManagerProxy.prototype.ready = function (e) {
    this._promise.then(e), this._checkUnresolvedFonts();
  }, d.FontManagerProxy.prototype._checkUnresolvedFonts = function () {
    this._resolvedFonts.length >= this._unresolvedFonts.length && this._promiseCapability.resolve();
  }, d.updateFontFamilies = function (e) {
    u.updateList(e);
  }, d.isAIFormat = function (e) {
    return A.getDocument({ data: e }).then(function (e) {
      return e.getMetadata().then(function (e) {
        var t = e && e.metadata && e.metadata.get("dc:format");
        return !!t && "application/vnd.adobe.illustrator" === t;
      });
    });
  }, d.import = function (e, t, i, a, u, g) {
    if (e instanceof Blob || e instanceof File) {
      var f = new FileReader();
      return f.onload = function (e) {
        return d.import(f.result, t, i, a, u, g);
      }, f.readAsArrayBuffer(e);
    }
    if (g)
      d.isAIFormat(e).then(function (n) {
        n ? g(function () {
          d.import(e, t, i, a, u, null);
        }) : d.import(e, t, i, a, u, null);
      }).catch(function (e) {
        a(e);
      });
    else {
      var m = new d.FontManagerProxy(i), y = function () {
          m.release(), a.apply(null, arguments);
        }, _ = n.extend({
          data: e,
          disableCMYKToRGB: !0
        }, t.pdfjsOptions || {});
      A.getDocument(_).then(function (e) {
        var i = [], a = [], A = [], d = t.startPage || 1, g = d, f = t.endPage || t.startPage || e.numPages, _ = f - g;
        !function t() {
          var g = new r();
          A.push(g), u && _ > 1 && u(d, _), e.getPage(d).then(function (r) {
            var _ = r.getViewport({ scale: 1 }), v = new h(_.width, _.height);
            g.setProperties([
              "w",
              "h",
              "bck"
            ], [
              _.width,
              _.height,
              o.WHITE
            ]);
            var b = new l(g, v, m), C = {
                canvasContext: b,
                viewport: _,
                canvasGraphicsClass: c,
                canvasFactory: new p()
              };
            1 === e.numPages && (C.progress = u), r.render(C).promise.then(function () {
              n.each(b.getMissingFonts(), function (e, t) {
                -1 === i.indexOf(t) && i.push(t);
              });
              var o = [];
              b.getEmbeddedFonts().forEach(function (e) {
                a.some(function (t) {
                  return s.equals(t, e);
                }) || o.push(e);
              }), a = a.concat(o), r.cleanup(), d + 1 > f ? m.ready(function () {
                e.cleanup(), e.destroy(), y(null, A, i, a);
              }) : (d++, t());
            }).catch(function (e) {
              return e && console.log(e.stack || e), y(e);
            });
          });
        }();
      });
    }
  }, e.exports = d;
}
