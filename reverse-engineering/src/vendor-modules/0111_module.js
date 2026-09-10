/**
 * chunk.vendor.js Module #111
 * Type: unknown
 */

function (e, t, i) {
      var n = i(166),
        r = i(0),
        o = n.MAX_INITIAL_RENDER_BUFFER_SIZE,
        a = n.MIN_INITIAL_RENDER_BUFFER_SIZE,
        s = n.MAX_MEMORY_POOL_SIZE,
        l = 1,
        h = 1,
        A = [],
        c = [],
        p = [],
        u = [],
        d = [],
        g = 0;

      function f(e, t, i, n, r, a, s, h, A) {
        ((e = e || o),
          (this.__buffer = t ? t.slice() : y(e)),
          (this.__intOps = new Int32Array(this.__buffer)),
          (this.__uintOps = new Uint32Array(this.__buffer)),
          (this.__fltOps = new Float64Array(this.__buffer)),
          (this.__byteOps = new Uint8Array(this.__buffer)),
          (this.__mem = i ? i.slice() : []),
          (this.__memPtr = 0),
          (this.__contextType = r || "2d"),
          (this.__contextAttributes = a),
          (this.__execPtr = 0),
          (this.__maxSize = o),
          (this.__resetPoint = 0),
          (this.__persistent = A || !1),
          (this.__isRoot = !1),
          (this.__lastFlush = -1),
          (this.__contextId = l++));
        for (var c = 0; c < this.__mem.length; c++) {
          var p = this.__mem[c];
          p &&
            p.$type === f.INSTANCE_RENDERERCTX &&
            (this.__mem[c] = this.__mem[c].clone());
        }
        ((this.__len = n || 0),
          (this.$type = f.INSTANCE_RENDERERCTX),
          s
            ? ((this.canvas = new f.RendererCanvas(this)),
              (this.__multiThreaded = h || !1),
              (this.__offscreen = !!s._renderParameters.offscreen),
              s.preInitializeContext(this))
            : ((this.__multiThreaded = h), (this.canvas = null)));
      }

      function m(e, t) {
        if ("2d" !== t)
          return e
            ? new OffscreenCanvas(1, 1)
            : document.createElement("canvas");
        var i = null,
          n = !1;
        if (
          (e
            ? (i = u.shift())
              ? (n = !0)
              : (i = new OffscreenCanvas(1, 1))
            : (i = p.shift())
              ? (n = !0)
              : (i = document.createElement("canvas")),
          n)
        ) {
          var r = i.getContext("2d");
          (r.clearRect(0, 0, i.width, i.height),
            f.propertiesToSync["2d"].forEach(function (e) {
              r[e] = f.prototype["$" + e];
            }));
        }
        return i;
      }

      function y(e) {
        for (
          var t = null, i = -1, n = Number.POSITIVE_INFINITY, r = 0;
          r < d.length;
          r++
        ) {
          var o = d[r].byteLength - e;
          if (o >= 0 && o < n && ((i = r), (n = o), 0 === o)) break;
        }
        return (
          i >= 0 && ((t = d[i]), d.splice(i, 1), (g -= t.byteLength)),
          t || (t = new ArrayBuffer(e)),
          t
        );
      }
      ((f.SMALL_SIZE = a),
        (f.MAX_SIZE = o),
        (f.DEBUG = void 0),
        (f.INSTANCE_RENDERERCTX = 1),
        (f.INSTANCE_RENDERABLE = 16),
        (f.INSTANCE_RENDERERCANVAS = 256),
        (f.RendererCanvas = function (e) {
          ((this.parent = e), (this.$type = f.INSTANCE_RENDERERCANVAS));
        }),
        (f.RendererCanvas.prototype.parent = null),
        (f.RendererCanvas.prototype.rendered = !1),
        (f.RendererCanvas.prototype.rendering = !1),
        (f.RendererCanvas.prototype.renderingSkipped = !1),
        (f.RendererCanvas.prototype.renderedName = null),
        (f.RendererCanvas.prototype.renderingName = null),
        (f.RendererCanvas.prototype._w = 0),
        (f.RendererCanvas.prototype._h = 0),
        (f.RendererCanvas.prototype.$realCanvas = null),
        (f.RendererCanvas.prototype.$renderedBitmap = null),
        (f.RendererCanvas.prototype.$renderedBitmapSource = null),
        (f.RendererCanvas.prototype.$type = f.INSTANCE_RENDERERCANVAS),
        Object.defineProperties(f.RendererCanvas.prototype, {
          width: {
            set: function (e) {
              ((this._w = e), this.parent._setWidth(e), (this.rendered = !1));
            },
            get: function () {
              return this._w;
            },
          },
          height: {
            set: function (e) {
              ((this._h = e), this.parent._setHeight(e), (this.rendered = !1));
            },
            get: function () {
              return this._h;
            },
          },
          __realCanvas: {
            get: function () {
              return (
                this.$realCanvas ||
                  (this.parent.__multiThreaded || this.parent.__offscreen
                    ? this.parent.__multiThreaded ||
                      (this.$realCanvas = m(!0, this.parent.__contextType))
                    : (this.$realCanvas = m(!1, this.parent.__contextType))),
                this.parent.__multiThreaded
                  ? this.$renderedBitmap
                  : this.$realCanvas
              );
            },
            set: function () {},
          },
        }),
        (f.RendererCanvas.prototype.getContext = function (e) {
          return this.parent;
        }),
        (f.RendererCanvas.prototype.addEventListener = function (e, t) {
          this.parent.__multiThreaded ||
            this.__realCanvas.addEventListener(e, t);
        }),
        (f.RendererCanvas.prototype.flushCanvas = function () {
          this.parent.__flushCanvas();
        }),
        (f.RendererCanvas.prototype.isRendered = function () {
          return (
            !!this.parent &&
            !!this.parent.$realCtx &&
            (0 === this.parent.__len
              ? !this.renderingSkipped
              : !!f.finished(this.parent))
          );
        }),
        (f.RendererCanvas.prototype.toDataURL = function () {
          return this.rendered
            ? this.__realCanvas.toDataURL()
            : (console.warn("Renderer: Canvas is not rendered!"), null);
        }));
      var _ = 0,
        v = [];
      ((f.Renderable = function (e, t) {
        ((this.ctx = e),
          (this.$type = f.INSTANCE_RENDERABLE),
          (this.$renderable_type = this.RENDERABLE_TYPE),
          e.__persistent && !t && (this.__renderableId = h++));
      }),
        r.inherit(f.Renderable, r),
        (f.Renderable.inherit = function (e, t) {
          (r.inherit(e, t),
            (e.prototype.RENDERABLE_TYPE = ++_),
            (v[_] = e.prototype));
        }),
        (f.Renderable.inheritAndMix = function (e, t, i) {
          (r.inheritAndMix(e, t, i),
            (e.prototype.RENDERABLE_TYPE = ++_),
            (v[_] = e.prototype));
        }),
        (f.Renderable.render = function (e, t, i, n) {
          if (void 0 === e.$rendered) {
            if (e.ctx.__multiThreaded && e.__renderableId) {
              var r = c[e.__renderableId];
              if (r) return ((e.$rendered = r.$rendered), r.$rendered);
            }
            ((e.$rendered = v[e.$renderable_type]._render.call(e, t, i, n)),
              void 0 !== e.$rendered &&
                e.__renderableId &&
                (c[e.__renderableId] = e));
          }
          return e.$rendered;
        }),
        (f.Renderable.dumpCode = function (e, t, i, n, r, o) {
          if (!e.$renderedVariable) {
            if (
              ((e.$renderedVariable = i),
              e.ctx.__multiThreaded && e.ctx.__persistent)
            ) {
              var a = c[e.__renderableId];
              if (a)
                return (
                  (e.$renderedVariable = a.$renderedVariable),
                  a.$renderedVariable
                );
            }
            return v[e.$renderable_type]._dumpCode.call(e, t, i, n, r, o);
          }
          return e.$renderedVariable;
        }),
        (f.Renderable.prototype.ctx = null),
        (f.Renderable.prototype.__renderableId = 0),
        (f.Renderable.prototype.$rendered = void 0),
        (f.Renderable.prototype.$renderedVariable = null),
        (f.Renderable.prototype.$type = f.INSTANCE_RENDERABLE),
        (f.Renderable.prototype.$renderable_type = 0),
        (f.Renderable.prototype._render = function (e, t, i) {
          return null;
        }),
        (f.Renderable.prototype.render = function (e, t, i) {
          return (
            this.$rendered || (this.$rendered = this._render(e, t, i)),
            this.$rendered
          );
        }),
        (f.Renderable.prototype._dumpCode = function (e, t, i, n, r) {}),
        (f.Renderable.prototype.dumpCode = function (e, t, i, n, r) {
          return this.$renderedVariable
            ? this.$renderedVariable
            : ((this.$renderedVariable = t), this._dumpCode(e, t, i, n, r));
        }),
        (f.prototype.canvas = null),
        (f.prototype.__contextType = 0),
        (f.prototype.__intOps = null),
        (f.prototype.__fltOps = null),
        (f.prototype.__uintOps = null),
        (f.prototype.__byteOps = null),
        (f.prototype.__len = 0),
        (f.prototype.__mem = null),
        (f.prototype.__execPtr = 0),
        (f.prototype.__resetPoint = 0),
        (f.prototype.__memPtr = 0),
        (f.prototype.__maxSize = o),
        (f.prototype.__offscreen = !1),
        (f.prototype.__multiThreaded = !1),
        (f.prototype.__persistent = !1),
        (f.prototype.__contextId = 0),
        (f.prototype.__lastFlush = -1),
        (f.prototype.__isRoot = !1),
        (f.prototype.$type = f.INSTANCE_RENDERERCTX),
        (f.clone = function (e) {
          return new f(
            e.__maxSize,
            e.__buffer,
            e.__mem,
            e.__len,
            e.__contextType,
            e.__renderer,
            e.__multiThreaded,
            e.__persistent,
          );
        }),
        (f.prototype.__clone = function () {
          return new f(
            this.__maxSize,
            this.__buffer,
            this.__mem,
            this.__len,
            this.__contextType,
            this.__renderer,
            this.__multiThreaded,
            this.__persistent,
          );
        }),
        (f.prototype.__realloc = function (e) {
          var t = y(e);
          ((this.__maxSize = t.byteLength),
            new Uint8Array(t).set(this.__byteOps),
            (this.__fltOps = new Float64Array(t)),
            (this.__intOps = new Int32Array(t)),
            (this.__uintOps = new Uint32Array(t)),
            (this.__byteOps = new Uint8Array(t)));
        }),
        (f.prototype.__pushByte = function (e) {
          var t = this.__len + 1;
          (t >= this.__maxSize && this.__realloc(this.__maxSize << 1),
            (this.__byteOps[this.__len] = e),
            (this.__len = t));
        }),
        (f.prototype.__pushBool = function (e) {
          (this.__pushByte(f.TYPE_BOOL), this.__pushByte(e ? 1 : 0));
        }),
        (f.prototype.__pushInt = function (e) {
          this.__pushByte(f.TYPE_INT);
          var t = this.__len + 4;
          (t >= this.__maxSize && this.__realloc(this.__maxSize << 1),
            (B[0] = e),
            (this.__byteOps[this.__len] = x[0]),
            (this.__byteOps[this.__len + 1] = x[1]),
            (this.__byteOps[this.__len + 2] = x[2]),
            (this.__byteOps[this.__len + 3] = x[3]),
            (this.__len = t));
        }),
        (f.prototype.__pushUint = function (e) {
          (this.__pushByte(f.TYPE_UINT), this.__pushUintT(e));
        }),
        (f.prototype.__pushUintT = function (e) {
          var t = this.__len + 4;
          (t >= this.__maxSize && this.__realloc(this.__maxSize << 1),
            (E[0] = e),
            (this.__byteOps[this.__len] = x[0]),
            (this.__byteOps[this.__len + 1] = x[1]),
            (this.__byteOps[this.__len + 2] = x[2]),
            (this.__byteOps[this.__len + 3] = x[3]),
            (this.__len = t));
        }),
        (f.prototype.__pushFlt = function (e) {
          (this.__pushByte(f.TYPE_FLT), this.__pushFltT(e));
        }),
        (f.prototype.__pushFltT = function (e) {
          var t = this.__len + 8;
          (t >= this.__maxSize && this.__realloc(this.__maxSize << 1),
            (w[0] = e),
            (this.__byteOps[this.__len] = x[0]),
            (this.__byteOps[this.__len + 1] = x[1]),
            (this.__byteOps[this.__len + 2] = x[2]),
            (this.__byteOps[this.__len + 3] = x[3]),
            (this.__byteOps[this.__len + 4] = x[4]),
            (this.__byteOps[this.__len + 5] = x[5]),
            (this.__byteOps[this.__len + 6] = x[6]),
            (this.__byteOps[this.__len + 7] = x[7]),
            (this.__len = t));
        }),
        (f.prototype.__pushPtr = function (e) {
          (this.__pushByte(f.TYPE_PTR), this.__pushPtrT(e));
        }),
        (f.prototype.__pushPtrT = function (e, t) {
          (e && e.$type === f.INSTANCE_RENDERERCTX && !t && (e = e.__clone()),
            this.__pushUintT(this.__mem.length),
            this.__mem.push(e));
        }),
        (f.prototype.__finish = function (e) {
          ((this.__lastFlush = this.__len),
            this.__pushByte(f.FINISH),
            this.__pushPtrT(e.canvas));
        }),
        (f.prototype.__delete = function () {}),
        (f.prototype.__fakeFunction = function () {
          this.__pushByte(f.FAKE);
        }),
        (f.prototype.__call = function () {
          this.__pushByte(f.EXEC);
        }),
        (f.prototype.__mov = function () {
          this.__pushByte(f.MOV);
        }),
        (f.prototype._setWidth = function (e) {
          (P("set width:", e),
            this.__pushByte(f._setWidth),
            this.__pushInt(e),
            this.__call());
        }),
        (f.prototype._setHeight = function (e) {
          (P("set height:", e),
            this.__pushByte(f._setHeight),
            this.__pushInt(e),
            this.__call());
        }),
        (f.prototype._flush = function (e) {
          (P("flush context: ", e.__contextType),
            e.__finish(this),
            this.__pushByte(f._flush),
            this.__pushPtr(e.canvas),
            this.__call());
        }),
        (f.prototype.__flushCanvas = function () {
          this.__pushByte(f.FLUSHCANVAS);
        }),
        (f.getLen = function (e) {
          return e.__len;
        }),
        (f.getOp = function (e) {
          return e.__byteOps[e.__execPtr++];
        }),
        (f.getVal = function (e) {
          var t,
            i = f.getOp(e);
          try {
            t = f.__getters[i](e);
          } catch (e) {
            t = f.ERROR_TYPE;
          }
          return t;
        }),
        (f.clearPrevious = function (e) {
          e.__resetPoint = e.__execPtr;
        }),
        (f.resetExec = function (e) {
          e.__execPtr = e.__resetPoint;
        }),
        (f.reset = function (e) {
          e.__len = 0;
        }),
        (f.finished = function (e) {
          return (
            e.__execPtr >= e.__len ||
            (e.__lastFlush >= 0 && e.__execPtr >= e.__lastFlush)
          );
        }),
        (f.forceRestore = function (e) {
          if ("2d" === e.__contextType && e.$realCtx)
            for (var t = 0; t < e.$maxRestoreCount; t++) e.$realCtx.restore();
        }),
        (f.dispose = function (e, t) {
          e.__buffer &&
            ((e.__mem = []),
            (e.__execPtr = 0),
            (e.__len = 0),
            (e.__resetPoint = 0),
            "webgl" === e.__contextType &&
              e instanceof f &&
              e.__clearScheduled(t),
            e.__persistent ||
              (e.__isRoot ||
                (e.canvas &&
                  e.canvas.$realCanvas &&
                  "webgl" !== e.__contextType &&
                  (e.__multiThreaded
                    ? u.push(e.canvas.$realCanvas)
                    : p.push(e.canvas.$realCanvas),
                  (e.canvas.$realCanvas = null))),
              g + e.__buffer.byteLength < s &&
                (d.push(e.__buffer), (g += e.__buffer.byteLength)),
              (e.__buffer = null),
              (e.__byteOps = null),
              (e.__intOps = null),
              (e.__fltOps = null),
              (e.__uintOps = null)),
            (!e.__persistent ||
              (e.__multiThreaded && "undefined" == typeof importScripts)) &&
              (e.canvas.$renderedBitmap &&
                (e.canvas.$renderedBitmap.close(),
                (e.canvas.$renderedBitmap = null)),
              (e.canvas.$renderedBitmapSource = null)));
        }),
        (f.freeMemory = function () {
          ((A = []), (d = []), (p = []), (u = []));
        }),
        (f.destroy = function (e) {
          if (
            e &&
            (e instanceof f.RendererCanvas && (e = e.parent), e instanceof f)
          ) {
            var t = A[e.__contextId];
            t &&
              (t.canvas.$realCanvas &&
                "function" == typeof t.canvas.$realCanvas.close &&
                (t.canvas.$realCanvas.close(), (t.canvas.$realCanvas = null)),
              delete A[e.__contextId],
              (e.__persistent = !1),
              f.dispose(e));
          }
        }),
        (f.initialize = function (e) {
          (e.__multiThreaded || e.canvas.__realCanvas, (e.__renderer = null));
        }),
        (f.initializeContext = function (e, t) {
          if (e.__multiThreaded && e.__persistent) {
            var i = A[e.__contextId];
            i &&
              ((e.canvas.$realCanvas = i.canvas.$realCanvas),
              e.canvas.$renderedBitmap ||
                (e.canvas.$renderedBitmap = i.canvas.$renderedBitmap),
              (e.$realCtx = i.$realCtx));
          }
          e.__isRoot = e.__isRoot || t;
          var n = e.$realCtx;
          if (n) return n;
          if (!e.canvas.$realCanvas)
            if (e.__multiThreaded || e.__offscreen) {
              if (e.canvas.$renderedBitmap) return null;
              e.canvas.$realCanvas = m(!0, e.__contextType);
            } else e.canvas.$realCanvas = m(!1, e.__contextType);
          return (
            (e.$realCtx = e.canvas.$realCanvas.getContext(
              e.__contextType,
              e.__contextAttributes,
            )),
            e.$realCtx
          );
        }),
        (f.postInitializeContext = function (e) {
          e.__persistent && (A[e.__contextId] = e);
        }),
        (f.getPreservedContexts = function () {
          return Object.values(A);
        }),
        (f.syncContext = function (e) {
          e.__persistent &&
            e.$realCtx &&
            (e.canvas &&
              e.canvas.$realCanvas &&
              ((e.canvas._w = e.canvas.$realCanvas.width),
              (e.canvas._h = e.canvas.$realCanvas.height)),
            "webgl" === e.__contextType &&
              f.propertiesToSync[e.__contextType].forEach(function (t) {
                e["$" + t] = e.$realCtx[t];
              }));
        }),
        (f.propertiesToSync = {}),
        i(897)(f),
        i(899)(f),
        Object.defineProperties(f.prototype, {
          __realCtx: {
            get: function () {
              return this.$realCtx
                ? this.$realCtx
                : this.__multiThreaded
                  ? null
                  : ((this.$realCtx = this.canvas.__realCanvas.getContext(
                      this.__contextType,
                      this.__contextAttributes,
                    )),
                    this.$realCtx);
            },
          },
        }));
      var b = 0;
      ((f.__ops = []),
        Object.keys(f.prototype).forEach(function (e, t) {
          e.startsWith("__") ||
            e.startsWith("$") ||
            e.match(/^[A-Z0-9\_]+$/) ||
            (f.__ops.push(e), (f[e] = b++));
        }),
        (f.EXEC = b++),
        (f.MOV = b++),
        (f.DELETE = b++),
        (f.FINISH = b++),
        (f.FLUSHCANVAS = b++),
        (f.FAKE = b++),
        (f.TYPE_FLT = b++),
        (f.TYPE_INT = b++),
        (f.TYPE_UINT = b++),
        (f.TYPE_PTR = b++),
        (f.TYPE_BOOL = b++));
      var C = new ArrayBuffer(8),
        w = new Float64Array(C),
        E = new Uint32Array(C),
        B = new Int32Array(C),
        x = new Uint8Array(C);

      function P() {
        if (f.DEBUG && "function" == typeof gdb_loaddesign) {
          var e = Array.prototype.slice.call(arguments).map(function (e) {
            return "object" == typeof e ? Array.prototype.slice.call(e) : e;
          });
          console.log("RenderCtx:" + e);
        }
      }
      ((f.getFlt = function (e) {
        var t = e.__byteOps,
          i = e.__execPtr;
        return (
          (x[0] = t[i]),
          (x[1] = t[i + 1]),
          (x[2] = t[i + 2]),
          (x[3] = t[i + 3]),
          (x[4] = t[i + 4]),
          (x[5] = t[i + 5]),
          (x[6] = t[i + 6]),
          (x[7] = t[i + 7]),
          (e.__execPtr += 8),
          w[0]
        );
      }),
        (f.getUint = function (e) {
          var t = e.__byteOps,
            i = e.__execPtr;
          return (
            (x[0] = t[i]),
            (x[1] = t[i + 1]),
            (x[2] = t[i + 2]),
            (x[3] = t[i + 3]),
            (e.__execPtr += 4),
            E[0]
          );
        }),
        (f.getInt = function (e) {
          var t = e.__byteOps,
            i = e.__execPtr;
          return (
            (x[0] = t[i]),
            (x[1] = t[i + 1]),
            (x[2] = t[i + 2]),
            (x[3] = t[i + 3]),
            (e.__execPtr += 4),
            B[0]
          );
        }),
        (f.getBool = function (e) {
          var t = e.__byteOps[e.__execPtr];
          return (e.__execPtr++, !!t);
        }),
        (f.getPtr = function (e) {
          var t = f.getUint(e);
          return e.__mem[t];
        }),
        (f.getExec = function (e) {
          return f.EXEC_TYPE;
        }),
        (f.getMov = function (e) {
          return f.MOV_TYPE;
        }),
        (f.getDelete = function (e) {
          return f.DELETE_TYPE;
        }),
        (f.getFinish = function (e) {
          return f.FINISH_TYPE;
        }),
        (f.EXEC_TYPE = {}),
        (f.MOV_TYPE = {}),
        (f.DELETE_TYPE = {}),
        (f.FINISH_TYPE = {}),
        (f.ERROR_TYPE = {}),
        (f.__getters = []),
        (f.__getters[f.TYPE_FLT] = f.getFlt),
        (f.__getters[f.TYPE_UINT] = f.getUint),
        (f.__getters[f.TYPE_INT] = f.getInt),
        (f.__getters[f.TYPE_PTR] = f.getPtr),
        (f.__getters[f.EXEC] = f.getExec),
        (f.__getters[f.MOV] = f.getMov),
        (f.__getters[f.DELETE] = f.getDelete),
        (f.__getters[f.FINISH] = f.getFinish),
        (f.__getters[f.TYPE_BOOL] = f.getBool),
        (e.exports = f));
    }