/**
 * chunk.vendor.js Module #226
 * Type: unknown
 */

function (e, t, i) {
      var n,
        r,
        o,
        a = i(0),
        s = i(103),
        l = i(111),
        h = i(205),
        A = i(470);

      function c() {
        throw new Error("This class cannot be instantiated");
      }
      a.inherit(c, a);
      var p,
        u,
        d = (function () {
          function e(e, t, i, n) {
            var r = c.getGLContext();
            ((this.id = r.createTexture()),
              (this.width = e),
              (this.height = t),
              (this.format = i),
              (this.type = n),
              r.bindTexture(r.TEXTURE_2D, this.id),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
              e &&
                t &&
                r.texImage2D(
                  r.TEXTURE_2D,
                  0,
                  this.format,
                  e,
                  t,
                  0,
                  this.format,
                  this.type,
                  null,
                ),
              A.addTexture(this));
          }
          return (
            (e.prototype.id = -1),
            (e.prototype.width = -1),
            (e.prototype.height = -1),
            (e.prototype.format = 0),
            (e.prototype.type = 0),
            (e.fromBytes = function (t, i, n) {
              var r = c.getGLContext();
              if (r) {
                var o = new e(0, 0, r.RGBA, r.UNSIGNED_BYTE);
                return (o.initFromBytes(t, i, n), o);
              }
            }),
            (e.fromCanvas = function (t, i, n) {
              var r = c.getGLContext();
              if (r) {
                var o = new e(0, 0, r.RGBA, r.UNSIGNED_BYTE);
                return (o.initFromCanvas(t, i, n), o);
              }
            }),
            (e.fromCanvasCropped = function (t, i, n, r, o, a, s, l, h) {
              var A = c.getGLContext();
              if (A) {
                ((a = a || 0), (s = s || 0), (l = l || r), (h = h || o));
                var p = new e(0, 0, A.RGBA, A.UNSIGNED_BYTE);
                return (p.initFromCanvasCropped(t, i, n, r, o, a, s, l, h), p);
              }
            }),
            (e.prototype.clone = function () {
              var t = c.getGLContext();
              if (t) {
                var i = new e(0, 0, this.format, n);
                return (
                  (t.framebuffer = t.framebuffer || t.createFramebuffer()),
                  t.bindFramebuffer(t.FRAMEBUFFER, t.framebuffer),
                  t.framebufferTexture2D(
                    t.FRAMEBUFFER,
                    t.COLOR_ATTACHMENT0,
                    t.TEXTURE_2D,
                    this.id,
                    0,
                  ),
                  t.bindTexture(t.TEXTURE_2D, i.id),
                  t.copyTexImage2D(
                    t.TEXTURE_2D,
                    0,
                    this.format,
                    0,
                    0,
                    this.width,
                    this.height,
                    0,
                  ),
                  t.bindFramebuffer(t.FRAMEBUFFER, null),
                  (i.width = this.width),
                  (i.height = this.height),
                  i
                );
              }
            }),
            (e.prototype.initFromBytes = function (e, t, i) {
              var n = c.getGLContext();
              n &&
                ((this.width = e),
                (this.height = t),
                (this.format = n.RGBA),
                (this.type = n.UNSIGNED_BYTE),
                n.bindTexture(n.TEXTURE_2D, this.id),
                i instanceof l.ImageDataArray
                  ? n.texImage2D(
                      n.TEXTURE_2D,
                      0,
                      n.RGBA,
                      e,
                      t,
                      0,
                      n.RGBA,
                      this.type,
                      i.uint8Array,
                    )
                  : n.texImage2D(
                      n.TEXTURE_2D,
                      0,
                      n.RGBA,
                      e,
                      t,
                      0,
                      n.RGBA,
                      this.type,
                      new Uint8Array(i),
                    ));
            }),
            (e.prototype.initFromCanvas = function (e, t, i) {
              var n = c.getGLContext();
              if (n) {
                if (
                  ((this.width = t || e.width),
                  (this.height = i || e.height),
                  (this.format = n.RGBA),
                  (this.type = n.UNSIGNED_BYTE),
                  n.bindTexture(n.TEXTURE_2D, this.id),
                  void 0 === t ||
                    void 0 === t ||
                    (e.width === t && e.height === i))
                )
                  c.flushCanvasForSPECIALBrowsers(e);
                else {
                  var r = g();
                  ((r.canvas.width = t),
                    (r.canvas.height = i),
                    r.clearRect(0, 0, t, i),
                    r.drawImage(e, 0, 0, t, i),
                    (e = resizedCanvas));
                }
                n.texImage2D(
                  n.TEXTURE_2D,
                  0,
                  n.RGBA,
                  n.RGBA,
                  n.UNSIGNED_BYTE,
                  e,
                );
              }
            }),
            (e.prototype.initFromCanvasCropped = function (
              e,
              t,
              i,
              n,
              r,
              o,
              a,
              s,
              l,
            ) {
              var h,
                A,
                p = c.getGLContext();
              p &&
                ((s = s || n),
                (l = l || r),
                (this.width = s),
                (this.height = l),
                (this.format = p.RGBA),
                (this.type = p.UNSIGNED_BYTE),
                (o = o || 0),
                (a = a || 0),
                p.bindTexture(p.TEXTURE_2D, this.id),
                0 !== t ||
                0 !== i ||
                s !== e.width ||
                l !== e.height ||
                s !== n ||
                l !== r
                  ? (((A = g()).canvas.width = s),
                    (A.canvas.height = l),
                    A.clearRect(0, 0, s, l),
                    A.drawImage(e, t, i, n, r, o, a, s, l),
                    (h = A.canvas),
                    c.flushCanvasForSPECIALBrowsers(h))
                  : ((h = e), c.flushCanvasForSPECIALBrowsers(h)),
                p.texImage2D(
                  p.TEXTURE_2D,
                  0,
                  p.RGBA,
                  p.RGBA,
                  p.UNSIGNED_BYTE,
                  h,
                ));
            }),
            (e.prototype.flushCanvasForSPECIALBrowsers = function (e) {
              var t = document.createElement("canvas");
              ((t.width = 1),
                (t.height = 1),
                t.getContext("2d").drawImage(e, 0, 0));
            }),
            (e.prototype.destroy = function () {
              var e = c.getGLContext();
              e &&
                "undefined" != typeof WebGLRenderingContext &&
                (e instanceof WebGLRenderingContext &&
                this.id instanceof l.WebGLTexture
                  ? e.deleteTexture(this.id.render())
                  : e instanceof WebGLRenderingContext &&
                      this.id instanceof h.WebGLTexture
                    ? this.id.destroy()
                    : e.deleteTexture(this.id),
                A.deleteTexture(this),
                (this.id = null));
            }),
            (e.prototype.use = function (e) {
              var t = c.getGLContext();
              t &&
                (t.activeTexture(t.TEXTURE0 + (e || 0)),
                t.bindTexture(t.TEXTURE_2D, this.id));
            }),
            (e.prototype.unuse = function (e) {
              var t = c.getGLContext();
              t &&
                (t.activeTexture(t.TEXTURE0 + (e || 0)),
                t.bindTexture(t.TEXTURE_2D, null));
            }),
            (e.prototype.drawTo = function (e) {
              var t = c.getGLContext();
              t &&
                ((t.framebuffer = t.framebuffer || t.createFramebuffer()),
                t.bindFramebuffer(t.FRAMEBUFFER, t.framebuffer),
                t.framebufferTexture2D(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0,
                  t.TEXTURE_2D,
                  this.id,
                  0,
                ),
                t.viewport(0, 0, this.width, this.height),
                e([0, 0, this.width, this.height]),
                t.bindFramebuffer(t.FRAMEBUFFER, null));
            }),
            (e.prototype.ensureFormat = function (e, t, i, n) {
              var r = c.getGLContext();
              if (r) {
                if (1 == arguments.length) {
                  var o = arguments[0];
                  ((e = o.width), (t = o.height), (i = o.format), (n = o.type));
                }
                (e == this.width &&
                  t == this.height &&
                  i == this.format &&
                  n == this.type) ||
                  ((this.width = e),
                  (this.height = t),
                  (this.format = i),
                  (this.type = n),
                  r.bindTexture(r.TEXTURE_2D, this.id),
                  r.texImage2D(
                    r.TEXTURE_2D,
                    0,
                    this.format,
                    e,
                    t,
                    0,
                    this.format,
                    this.type,
                    null,
                  ));
              }
            }),
            (e.prototype.swapWith = function (e) {
              var t;
              ((t = e.id),
                (e.id = this.id),
                (this.id = t),
                (t = e.width),
                (e.width = this.width),
                (this.width = t),
                (t = e.height),
                (e.height = this.height),
                (this.height = t),
                (t = e.format),
                (e.format = this.format),
                (this.format = t));
            }),
            (e.prototype.isInitialized = function () {
              return this.id instanceof l.WebGLTexture
                ? this.id.isInitialized()
                : null !== this.id;
            }),
            e
          );
        })();

      function g() {
        return s.isRenderPhase()
          ? (o || (o = s.getRenderer(void 0, void 0, void 0, !0)), o)
          : (r || (r = s.getRenderer(void 0, void 0, void 0, !0)), r);
      }

      function f() {
        var e =
            s.getRenderer(
              !0,
              "webgl",
              {
                premultipliedAlpha: !1,
              },
              !0,
            ) ||
            s.getRenderer(
              !0,
              "experimental-webgl",
              {
                premultipliedAlpha: !1,
              },
              !0,
            ),
          t = !1;
        return (
          s.isRenderPhase() || s.isMultiThreaded(e) || (t = !0),
          e.SUPPORTED_TEXTURE_FORMAT === e.FLOAT
            ? (e.getExtension("OES_texture_float", t),
              e.getExtension("OES_texture_float_linear", t))
            : e.SUPPORTED_TEXTURE_FORMAT === e.HALF_FLOAT &&
              (e.getExtension("OES_texture_half_float", t),
              e.getExtension("OES_texture_half_float_linear", t)),
          e
        );
      }
      ((c.flushCanvasForSPECIALBrowsers = function (e) {
        if (e instanceof l.RendererCanvas || e instanceof h.RendererCanvas)
          e.flushCanvas();
        else {
          var t = document.createElement("canvas");
          ((t.width = 1),
            (t.height = 1),
            t.getContext("2d").drawImage(e, 0, 0));
        }
      }),
        (c.createTexture = function () {
          var e = arguments[0];
          if (
            5 == arguments.length &&
            (e instanceof HTMLCanvasElement ||
              e instanceof l.RendererCanvas ||
              e instanceof h.RendererCanvas)
          )
            return d.fromCanvasCropped(
              e,
              arguments[1],
              arguments[2],
              arguments[3],
              arguments[4],
            );
          if (
            7 == arguments.length &&
            (e instanceof HTMLCanvasElement ||
              e instanceof l.RendererCanvas ||
              e instanceof h.RendererCanvas)
          )
            return d.fromCanvasCropped(
              e,
              arguments[1],
              arguments[2],
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
            );
          if (
            9 == arguments.length &&
            (e instanceof HTMLCanvasElement ||
              e instanceof l.RendererCanvas ||
              e instanceof h.RendererCanvas)
          )
            return d.fromCanvasCropped(
              e,
              arguments[1],
              arguments[2],
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              arguments[7],
              arguments[8],
            );
          if (
            (arguments.length >= 3 && ((t = arguments[1]), (i = arguments[2])),
            e instanceof HTMLCanvasElement ||
              e instanceof l.RendererCanvas ||
              e instanceof h.RendererCanvas)
          )
            return d.fromCanvas(e, t, i);
          if ("number" != typeof e && "string" != typeof e)
            return d.fromBytes(t, i, e);
          var t,
            i,
            r = arguments[2];
          return new d((t = arguments[0]), (i = arguments[1]), r, n);
        }),
        (c.getGLContext = function () {
          if ("undefined" == typeof WebGLRenderingContext) return null;
          if (p) {
            if (p instanceof WebGLRenderingContext) return p;
            if (
              (s.isMultiThreaded(p) && (u || s.isMultiThreaded() || (u = f())),
              s.isMultiThreaded() &&
                !s.isMultiThreaded(p) &&
                ((u = p), !(p = f()).__multiThreaded))
            )
              throw new Error("WTF");
            return s.isRenderPhase()
              ? s.isMultiThreaded(p) && !s.isMultiThreaded()
                ? u
                : p
              : s.isMultiThreaded(p)
                ? u.__realCtx
                : p.__realCtx;
          }
          if (!(p = f()))
            return (
              "undefined" == typeof g_node_test_environment &&
                console.warn("No WebGL support. Most filters won't work"),
              null
            );
          if (
            ((n = p.SUPPORTED_TEXTURE_FORMAT), "undefined" == typeof document)
          )
            return null;
          "undefined" != typeof gdb_showCanvas && (window.GGLMemoryManager = A);
          var e = p.canvas;
          return (
            e.addEventListener(
              "webglcontextlost",
              function (e) {
                e.preventDefault();
              },
              !1,
            ),
            e.addEventListener(
              "webglcontextrestored",
              function () {
                p = null;
              },
              !1,
            ),
            p
          );
        }),
        (c.GLTexture = d),
        (e.exports = c));
    }