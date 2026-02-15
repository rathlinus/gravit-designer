/**
 * Module 103
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

function (exports, module, require) {
  var n = require(166) /* GRendererConfig */, r = n.MAX_TIME_PER_JOB, o = require(111) /* GRendererCtx */, a = require(205) /* GRendererCtxDbg */, s = require(898) /* module */, l = require(470) /* module */, h = 0;
  n.WORKER_RENDERING_ENABLED && (h = n.CANVAS_GRID_HORIZONTAL * n.CANVAS_GRID_VERTICAL);
  var A = new Array(h);
  if (n.WORKER_RENDERING_ENABLED && "undefined" != typeof OffscreenCanvas)
    for (var c = 0; c < h; c++)
      A[c] = new Worker("./render.worker.js");
  var p = "undefined" != typeof window && window.requestAnimationFrame || setTimeout, u = "undefined" != typeof window && window.cancelAnimationFrame || clearTimeout;
  function d() {
  }
  d._enabled = true, d._debugEnabled = false, d._debugPhase = false, d._multiThreading = false, d.DUMP_IMAGES = true, d._renderPhase = false, d._toInitialize = [], d._toInitializeWorkers = new Array(h), d._renderParameters = {}, d._renderJobs = [], d._scheduledRenderings = null, d.begin = function (e) {
    o.getPreservedContexts().forEach(function (e) {
      o.syncContext(e);
    }), this._renderPhase = true, this._debugEnabled ? this._debugPhase = true : n.WORKER_RENDERING_ENABLED && e && "undefined" != typeof OffscreenCanvas ? this._multiThreading = !!e : this._multiThreading = false;
  }, d.finish = function () {
    this._renderPhase = false, this._debugPhase = false, this._multiThreading = false;
  }, d.tryRunRendering = function (e, t, i, n, r) {
    this.isRenderPhase() || this._renderJobs.some(function () {
      return true;
    }) ? (this._scheduledRenderings || (this._scheduledRenderings = []), this._scheduledRenderings.push({
      paintCanvas: e,
      renderFunc: t,
      callback: i,
      multithreading: n
    })) : function () {
      d.begin(n, r), t(), d.finish();
      var o = d._renderParameters;
      d._renderParameters = {}, d.render(e.getRendererContext(), 0, function (t, n, r) {
        n && i(e);
      }), d._renderParameters = o;
    }();
  }, d.resetRenderJobs = function () {
    this._renderJobs.forEach(function (e) {
      null !== e.timeout && console.log("SOMETHING ACTUALLY STOPPED!"), e.disposeRenderables(), e.reset();
    });
  }, d.init = function (e, t) {
    this._enabled = false !== e, this._debugEnabled = true === t;
  }, d.isEnabled = function () {
    return this._enabled;
  }, d.isRenderPhase = function (e) {
    if (e) {
      var module = this._renderJobs[e.__contextId];
      return !(!module || null === module.timeout);
    }
    return this._enabled && this._renderPhase;
  }, d.isDebug = function () {
    return n.DEBUG_LEVEL < 2 || this._debugEnabled;
  }, d.isMultiThreaded = function (e) {
    return e ? e.__multiThreaded : this._multiThreading;
  }, d.getRenderParameters = function () {
    return Object.assign({}, this._renderParameters);
  }, d.setRenderParameters = function (e) {
    for (var module in e)
      this._renderParameters[module] = e[module];
  }, d.usingOffscreenCanvas = function () {
    return this._renderParameters && this._renderParameters.offscreen;
  }, d.preInitializeContext = function (e) {
    this._toInitialize.push(e);
    for (var module = 0; module < h; module++) {
      var require = this._toInitializeWorkers[module] || [];
      require.push(e), this._toInitializeWorkers[module] = require;
    }
  }, d.disposeWorkerDataAfterRender = function (e) {
    if (e.__multiThreaded) {
      var module = e.__contextId % h;
      this._toInitializeWorkers[module].forEach(function (t) {
        o.dispose(t, e.renderParameters);
      }), o.dispose(e), this._toInitializeWorkers[module] = [], this._toInitialize = [];
    }
  }, d.getRenderer = function (e, t, i, n, r) {
    return this._enabled && this._debugEnabled && (this._debugPhase || e) ? new a(t, i, this, n) : this._enabled && (this._renderPhase || e) ? new o(null, null, null, null, t, i, this, this.isMultiThreaded() || r, n) : document.createElement("canvas").getContext(t || "2d", i);
  }, d.render = function (e, t, i, a) {
    var c, u, g, f, m, v, b, C = o.getLen(e), w = 0, E = (t = t || 0, new Array(15)), B = false, x = true, P = a && a.resuming;
    if (!this._enabled) {
      var S = e.$type === o.INSTANCE_RENDERERCTX ? e.canvas.__realCanvas : e.canvas;
      return i(S, true, false), S;
    }
    if (this._debugPhase)
      return i(e.canvas.$realCanvas, true, false), e.canvas.$realCanvas;
    if (0 !== t || P || (this.isDebug() || e.__multiThreaded) && (this._toInitialize.forEach(function (e) {
        o.initialize(e);
      }), e.__multiThreaded || console.log(this.dumpCode(e))), e.__multiThreaded) {
      if (P)
        return null;
      var T = [], I = e.__contextId % h;
      e.canvas.$realCanvas && (e.canvas.$realCanvas = null), e.canvas.$renderedBitmap && (e.canvas.$renderedBitmap.close(), e.canvas.$renderedBitmap = null);
      var F = [];
      this._toInitializeWorkers[I].forEach(function (e) {
        if (e.canvas.$renderedBitmapSource) {
          var t = e.canvas.$renderedBitmapSource, i = new OffscreenCanvas(t.width, t.width);
          i.getContext("2d").drawImage(t, 0, 0);
          var n = i.transferToImageBitmap();
          T.push(n), e.canvas.$renderedBitmap = n, F.push(t), e.canvas.$renderedBitmapSource = null;
        } else if (e.canvas.$renderedBitmap)
          throw new Error("Rendered bitmap encountered but no bitmap source found");
      }), e.renderParameters = this._renderParameters;
      var R = A[I];
      try {
        R.postMessage(e, T);
      } catch (e) {
        console.log("RENDERER ERROR", e), i && i(null, true, false);
      } finally {
        this._toInitializeWorkers[I].forEach(function (e) {
          e.canvas.$renderedBitmap && (e.canvas.$renderedBitmapSource = F.shift(), e.canvas.$renderedBitmap.close(), e.canvas.$renderedBitmap = null);
        });
      }
      return R.onmessage = function (t) {
        if (e.canvas.$renderedBitmap = t.data.canvas, i(t.data.canvas, t.data.finished, t.data.skipped), t.data.finished && d._scheduledRenderings && d._scheduledRenderings.length) {
          var n = d._scheduledRenderings.pop();
          p(function () {
            d.tryRunRendering(n.paintCanvas, n.renderFunc, n.callback, n.multithreading);
          });
        }
      }, null;
    }
    if (0 === t && (b = this._toInitialize, this._toInitialize = []), !a)
      if (a = this._renderJobs[e.__contextId]) {
        if (null !== a.timeout)
          return console.warn("Rendering already scheduled thing"), console.warn("This means that for example rendering is in progress, but second launched"), null;
      } else {
        var D = {};
        for (var k in this._renderParameters)
          D[k] = this._renderParameters[k];
        var G = r;
        (D.quickRender || D.noWebGL) && (G = 0), (a = new s(e, i ? G : 0, D)).initialRenderables = b, this._renderJobs[a.getId()] = a;
      }
    if (P)
      w = (m = a.popSave()).execPtr, C = m.len, u = m.op, E = m.params || new Array(15), g = m.funcName, f = m.funcOp, c = m.realCtx, v = m.numParams, a.hasSave() || (a.reset(), P = false, m = null);
    else {
      if (!(c = o.initializeContext(e, 0 === t)))
        return 0 === t ? (a.exiting = false, delete this._renderJobs[a.getId()], i && i(e.canvas.$realCanvas, true), e.canvas.$realCanvas) : null;
      if (e.canvas.rendering || o.resetExec(e), e.canvas.rendering || t > 0 && e.canvas.rendered) {
        if (_("Reusing subcanvas 2"), 0 !== t || !i)
          return e.canvas.$realCanvas;
        _("Renderer: recovering from previous error", 1), o.resetExec(e), o.forceRestore(e);
      }
      e.canvas.rendering = true, w = e.__execPtr, a.addRenderable(e);
    }
    for (; w < C;) {
      if (!m) {
        if ((u = o.getOp(e)) === o.DELETE) {
          w = e.__execPtr, o.clearPrevious(e);
          continue;
        }
        if (u === o.FINISH) {
          var Q = o.getPtr(e);
          if (w = e.__execPtr, t > 0) {
            if (Q.rendering) {
              o.clearPrevious(e);
              break;
            }
            continue;
          }
          continue;
        }
        if (u === o.FLUSHCANVAS) {
          y(c.canvas);
          continue;
        }
        if (u === o.FAKE)
          continue;
        g = o.__ops[u], f = u, v = 0;
      }
      for (;;) {
        var M;
        if (m)
          M = m.val, m = null;
        else if ((M = o.getVal(e)) === o.ERROR_TYPE)
          return _("Renderer: invalid value in stack", 2), a.exiting = false, o.forceRestore(e), 0 === t && i && i(e.canvas.$realCanvas, true, true), e.canvas.$realCanvas;
        if ("number" == typeof M);
        else {
          if (M === o.EXEC_TYPE) {
            u = o.EXEC;
            break;
          }
          if (M === o.MOV_TYPE) {
            u = o.MOV;
            break;
          }
          if (M && M.$type === o.INSTANCE_RENDERERCANVAS) {
            var N = M;
            if (!M.rendered && !M.rendering || P) {
              if (a.parameters.quickRender && t > 0 || a.parameters.noWebGL && "webgl" === M.parent.__contextType ? B = true : (M = this.render(M.parent, t + 1, null, a), "_flush" !== g && (M ? M instanceof HTMLCanvasElement && M.width * M.height == 0 && (B = true, x = false, _("Error: canvas was empty, skipping draw", 2)) : (B = true, x = false))), a.exiting)
                return w = e.__execPtr, o.clearPrevious(e), a.pushSave({
                  ctx: e,
                  callback: i,
                  len: C,
                  execPtr: w,
                  realCtx: c,
                  resumeLocation: 1,
                  op: u,
                  params: E,
                  numParams: v,
                  funcName: g,
                  funcOp: f,
                  val: N
                }), 0 === t && (a.exiting = false, i && i(e.canvas.$realCanvas, false, B || a.skipped, a.parameters)), null;
            } else
              M = M.$realCanvas || M.$renderedBitmap, "_flush" !== g && (M ? M instanceof HTMLCanvasElement && M.width * M.height == 0 && (B = true, x = false, _("Error: canvas was empty, skipping draw", 2)) : (B = true, x = false, _("Error: canvas is null", 2)));
          } else
            M && M.$type === o.INSTANCE_RENDERABLE && (a.lock(), M = M.render(this, t + 1, a), a.unlock(), undefined === M && (B = true));
        }
        E[v++] = M;
      }
      if (u === o.EXEC)
        if (f === o._setWidth)
          e.canvas.$realCanvas.width = e.canvas._w = E[0];
        else if (f === o._setHeight)
          e.canvas.$realCanvas.height = e.canvas._h = E[0];
        else if (f === o.getProgramParameter || f === o.getShaderParameter) {
          if (!c[g].call(c, E[0], E[1])) {
            _("getProgramParameter" === g ? "link error: " + c.getProgramInfoLog(E[0]) : "shader error: " + c.getShaderInfoLog(E[0]), 2);
            break;
          }
        } else
          f === o._flush ? u !== o.EXEC && _("erroneous flush", 2) : B ? (B = false, x ? a.skipped = true : x = true) : 2 === v ? c[g].call(c, E[0], E[1]) : 4 === v ? c[g].call(c, E[0], E[1], E[2], E[3]) : 6 === v ? c[g].call(c, E[0], E[1], E[2], E[3], E[4], E[5]) : 0 === v ? c[g].call(c) : 1 === v ? c[g].call(c, E[0]) : 3 === v ? c[g].call(c, E[0], E[1], E[2]) : 5 === v ? c[g].call(c, E[0], E[1], E[2], E[3], E[4]) : 7 === v ? c[g].call(c, E[0], E[1], E[2], E[3], E[4], E[5], E[6]) : 8 === v ? c[g].call(c, E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7]) : 9 === v ? c[g].call(c, E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8]) : 10 === v ? c[g].call(c, E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8], E[9]) : 11 === v ? c[g].call(c, E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8], E[9], E[10]) : 12 === v ? c[g].call(c, E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8], E[9], E[10], E[11]) : 13 === v ? c[g].call(c, E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8], E[9], E[10], E[11], E[12]) : 14 === v ? c[g].call(c, E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8], E[9], E[10], E[11], E[12], E[13]) : 15 === v && c[g].call(c, E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8], E[9], E[10], E[11], E[12], E[13], E[14]);
      else {
        if (u !== o.MOV)
          break;
        c[g] = E[0];
      }
      if (w = e.__execPtr, !P && a.isExpired()) {
        if (o.finished(e))
          continue;
        return o.clearPrevious(e), a.hasSave() && _("Renderer: exiting render loop without reaching save location", 2), a.pushSave({
          ctx: e,
          callback: i,
          len: C,
          realCtx: c,
          execPtr: w,
          resumeLocation: 2
        }), d._scheduleRender(a), 0 === t && i && i(e.canvas.$realCanvas, false, a.skipped, a.parameters), a.exiting = true, null;
      }
    }
    e.canvas.rendering = false;
    var U = e.canvas.$realCanvas;
    if (o.finished(e) ? (e.canvas.rendered = true, o.dispose(e)) : o.clearPrevious(e), 0 === t && (a.disposeRenderables(), a.exiting = false, delete this._renderJobs[a.getId()], n.AGGRESIVE_MEMORY_SWEEPER && l.destroyTextures(), i && (i(e.canvas.$realCanvas, true, a.skipped, a.parameters), d._scheduledRenderings && d._scheduledRenderings.length))) {
      var V = d._scheduledRenderings.pop();
      p(function () {
        d.tryRunRendering(V.paintCanvas, V.renderFunc, V.callback, V.multithreading);
      });
    }
    return o.postInitializeContext(e), U;
  }, d.forceCleanup = function (e) {
    var t = this._renderJobs[e.__contextId];
    t && null !== t.timeout && (u(t.timeout), t.timeout = null), o.forceRestore(e), o.dispose(e), t && (t.disposeRenderables(), t.exiting = false, delete this._renderJobs[t.getId()]), n.AGGRESIVE_MEMORY_SWEEPER && l.destroyTextures();
  }, d._scheduleRender = function (e) {
    var t = this._renderJobs[e.getId()];
    t || (this._renderJobs[e.getId()] = t), e.timeout && (u(e.timeout), e.timeout = null), e.timeout = p(function () {
      e.resuming = true;
      var t = e.getSave();
      try {
        d.render(t.ctx, 0, t.callback, e);
      } catch (e) {
        console.error("Render error:" + e), d.forceCleanup(t.ctx), t.callback(null, true, false);
      }
    }, 0);
  };
  var g, f = 0, m = 0;
  function y(e) {
    var t = document.createElement("canvas");
    t.width = t.height = 1, t.getContext("2d").drawImage(e, 0, 0);
  }
  function _(e, t) {
    if (t = t || 0, "function" == typeof gdb_loaddesign && n.DEBUG_LEVEL <= t) {
      if (2 === t)
        return void console.error("Renderer:" + e);
      if (1 === t)
        return void console.warn("Renderer:" + e);
      0 === t && console.log("Renderer: " + e);
    }
  }
  d.dumpCode = function (e, t, i, n) {
    var r = o.getLen(e), a = 0;
    0 !== (i = e.canvas.renderingName || e.canvas.renderedName ? parseInt((e.canvas.renderingName || e.canvas.renderedName).match(/[0-9]+$/)[0]) : null === i ? ++m : i || 0) || e.canvas.rendering || f > 0 && (g = true);
    var s = "canvas" + i, l = "context" + i, h = "";
    if (e.canvas.rendering)
      return h;
    if (!e.canvas.renderingName && !e.canvas.renderedName)
      if ("webgl" === e.__contextType && g);
      else {
        if (h = "var " + s + " = document.createElement('canvas');\n", h += "var " + l + " = " + s + ".getContext('" + e.__contextType + "', " + JSON.stringify(e.__contextAttributes) + ");\n", h += s + ".width=" + e.canvas.$realCanvas.width + ";\n", h += s + ".height=" + e.canvas.$realCanvas.height + ";\n", 0 === i) {
          var A = e.canvas.$realCanvas.width, c = e.canvas.$realCanvas.height;
          h += s + ".style.width=\"" + (A /= window.devicePixelRatio) + "px\";\n", h += s + ".style.height=\"" + (c /= window.devicePixelRatio) + "px\";\n", h += "document.body.appendChild(" + s + ");\n";
        }
        "webgl" === e.__contextType && (h += l + ".getExtension('OES_texture_float');\n", h += l + ".getExtension('OES_texture_float_linear');\n", h += l + ".getExtension('OES_texture_half_float');\n", h += l + ".getExtension('OES_texture_half_float_linear');\n"), o.resetExec(e);
      }
    a = e.__execPtr;
    n = n || [0];
    for (e.canvas.renderingName = s, e.canvas.rendering = true; a < r;) {
      var p = o.getOp(e), u = o.__ops[p], y = [];
      if (p !== o.DELETE)
        if (p !== o.FINISH)
          if (p !== o.FLUSHCANVAS)
            if (p !== o.FAKE) {
              for (;;) {
                var v;
                try {
                  v = o.getVal(e);
                } catch (e) {
                  return _("Renderer: invalid value in stack", 1), h;
                }
                if (v === o.EXEC_TYPE) {
                  p = o.EXEC;
                  break;
                }
                if (v === o.MOV_TYPE) {
                  p = o.MOV;
                  break;
                }
                if ("string" == typeof v)
                  v = "\"" + v + "\"";
                else if (v && v.$type === o.INSTANCE_RENDERERCANVAS)
                  if (v.renderedName || v.renderingName)
                    if (v.renderingName)
                      if (v.rendering)
                        v = v.renderingName;
                      else {
                        var b = v.renderingName;
                        h += this.dumpCode(v.parent, false, null, n), v = b;
                      }
                    else if (!v.rendered && v.renderedName) {
                      b = v.renderedName;
                      v.rendering || (h += this.dumpCode(v.parent, false, null, n)), v = b;
                    } else
                      v = v.renderedName;
                  else {
                    var C = ++m;
                    h += v = this.dumpCode(v.parent, false, C, n), v = "canvas" + C;
                  }
                else if (v instanceof HTMLCanvasElement && d.DUMP_IMAGES) {
                  var w = "tmp" + n[0];
                  h += "var " + w + " = new Image();\n", h += w + ".src = \"" + v.toDataURL() + "\";\n", h += w + ".onload=()=>{\n", v = w, n[0]++;
                } else if (v && v.$type === o.INSTANCE_RENDERABLE) {
                  var E = "pattern" + i + "_" + f;
                  v.$renderedVariable || (h += v.dumpCode(l, E, this, i, n), f++), v = v.dumpCode(l, E, this, i, n);
                } else if (v instanceof Float32Array)
                  v = "new Float32Array([" + v.join(",") + "])";
                else if (v instanceof Int32Array)
                  v = "new Int32Array([" + v.join(",") + "])";
                else if (v instanceof Float64Array)
                  v = "new Float64Array([" + v.join(",") + "])";
                else {
                  if (v instanceof Array)
                    throw new Error("Array parameter not supported");
                  if (null === v)
                    v = "null";
                  else if (undefined === v)
                    v = "undefined";
                  else if ("webgl" === e.__contextType && "number" == typeof v) {
                    if (parseInt(v) === v) {
                      var B = o.getGLConst(v);
                      B && (v = l + "." + B);
                    }
                  }
                }
                y.push(v);
              }
              if ("_setWidth" === u)
                h += s + ".width = " + y[0] + "\n";
              else if ("_setHeight" === u)
                h += s + ".height = " + y[0] + "\n";
              else if ("_flush" === u && p === o.EXEC)
                h += "//           .\n", h += "//          / \\\n", h += "// flushed /| |\\\n";
              else if (p === o.EXEC)
                "shaderSource" === u && (y[1] = y[1].replace(/\n/g, "")), h += l + "." + u + "(" + y.join(",") + ");\n";
              else {
                if (p !== o.MOV)
                  return _("Invalid op", 2), h + "<== ERROR ###";
                h += l + "." + u + " = " + y[0] + ";\n";
              }
              a = e.__execPtr;
            } else
              h += "// <= DUMP DEBUG PLACE";
          else
            h += "var workaroundCtx = document.createElement(\"canvas\").getContext(\"2d\");\n\t\t\t\t\t workaroundCtx.drawImage(" + s + ",0,0);\n";
        else {
          var x = o.getPtr(e);
          if (a = e.__execPtr, i > 0) {
            if (_("### Finish id = " + i + "; finishSrc rendering? " + x.rendering), x.rendering)
              break;
            continue;
          }
          _("### Finish id = 0; finishSrc rendering? " + x.rendering);
        }
      else
        a = e.__execPtr;
    }
    if (0 === i)
      for (var P = 0; P < n[0]; P++)
        h += "}";
    if (0 === i && t) {
      h = "data:text/html;base64," + btoa("<!DOCTYPE html><html><body><script type='text/javascript'>" + h + "</script></body></html>");
    }
    return e.canvas.rendering = false, o.finished(e) && (e.canvas.renderedName = e.canvas.renderingName, e.canvas.renderingName = null), h;
  }, d.destroy = function (e) {
    if (e && e.__multiThreaded) {
      if (A)
        for (var module = 0; module < h; module++)
          A[module].postMessage({
            __contextId: e.__contextId,
            action: "d"
          });
    } else
      o.destroy(e);
  }, o.DEBUG = d.isDebug(), exports.exports = d;
}
