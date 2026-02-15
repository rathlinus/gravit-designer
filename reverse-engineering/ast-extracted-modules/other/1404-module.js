/**
 * Module 1404
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
  var n = i(0), r = i(147), o = i(68), a = i(48), s = i(179), l = i(158), h = (i(139), i(108)), A = (i(281), i(568), i(587)), c = i(17), p = i(70), u = i(54), d = i(7), g = i(122), f = i(95), m = i(73), y = i(188), _ = i(214), v = i(28), b = i(47), C = i(9), w = i(14);
  i(22);
  function E(e, t, i, n) {
    this.done = !1, this.inputArray = e, this.drawCallback = t, this.fontManager = i, this.errorCallback = n, this.pointer = 0, this.worker = null, this.ggroup = new g(), this.background = null, this.clipGPathes = [], this.fontsCache = {}, this._finished = !1, this._errorDone = {}, this._errorQueue = null, this.appendItem = function (e, t) {
      (t = t || this.ggroup).appendChild(e);
    }, this.getGColor = function (e, t) {
      if (!e)
        return new c();
      if ("rgb" == e.type)
        return new c(e.value);
      if ("cmyk" == e.type) {
        var i = e.value.map(function (e) {
          return e / 255;
        });
        return new y(i);
      }
      if (("linear" == e.type || "radial" == e.type) && t) {
        var n = e.stops.map(function (e) {
            var t = c.WHITE;
            if (!e.color)
              return {
                opacity: e.opacity,
                color: t,
                position: e.position
              };
            if ("rgb" == e.color.type)
              t = new c(e.color.value);
            else if ("cmyk" == e.color.type) {
              var i = e.color.value.map(function (e) {
                return e / 255;
              });
              i = o.cmykToRGB(i), t = new c(i);
            }
            return {
              opacity: e.opacity,
              color: t,
              position: e.position
            };
          }), a = t.getGeometryBBox();
        if (!a)
          return new c();
        var s = null;
        if (e.transform && (s = d.deserialize(e.transform))) {
          var h = d.getNativeRectTransformation(a);
          h && h.invertible() && (s = s.multiplied(h.inverted()));
        }
        var A = e.value, p = A[0], u = A[1], g = A[2], f = A[3];
        if ("linear" == e.type) {
          var m = Math.atan2(f - u, g - p), _ = Math.sqrt(Math.pow(f - u, 2) + Math.pow(g - p, 2)), v = _, b = p, C = u;
          if (!s) {
            b = a._width ? (p - a._x) / a._width : 1, C = a._height ? (u - a._y) / a._height : 1;
            var w = Math.sqrt(a._width * a._width + a._height * a._height), E = Math.cos(m), B = E ? a._width / E : a._width;
            if (B > 1.2 * w) {
              var x = Math.sin(m);
              B = x ? a._height / x : a._height;
            }
            B && (v = Math.abs(_ / B));
          }
          return new r(n, v, m, b, C, s);
        }
        b = p, C = u;
        var P = g, S = f;
        s || (b = a._width ? (p - a._x) / a._width : p - a._x, C = a._height ? (u - a._y) / a._height : u - a._y, P = a._width ? (g - a._x) / a._width : g - a._x, S = a._height ? (f - a._y) / a._height : f - a._y);
        v = A[5];
        if (s)
          return new l(n, v, b, C, P, S, s);
        var T = a._height && a._width ? a._width / a._height : 1;
        return new l(n, v, b, C / T, P, S / T, new d().scaled(1, T));
      }
      if ("imageData" == e.type && (7 == e.meshType || 6 == e.meshType)) {
        var I = e.width, F = e.height;
        if (I && F) {
          var R = e.value, D = this.makeImage(I, F, R, "DeviceCMYK" == e.colorSpace);
          s = d.deserialize([
            1,
            0,
            0,
            1,
            0,
            0
          ]);
          if (e.transform) {
            var k = d.deserialize(e.transform);
            k && (s = s.multiplied(k));
          }
          return D.setTransform(k), D;
        }
      }
      return null;
    }, this.makeImage = function (e, t, i, n) {
      var r = document.createElement("canvas");
      r.width = e, r.height = t;
      var a = r.getContext("2d"), s = {
          canvas: r,
          imgData: a.createImageData(e, t),
          tempContext: a
        }, l = i;
      if (n)
        for (var h = 0; h + 3 < l.length; h += 4) {
          var A = [
              l[h] / 255,
              l[h + 1] / 255,
              l[h + 2] / 255,
              l[h + 3] / 255
            ], c = o.cmykToRGB(A);
          l[h] = c[0], l[h + 1] = c[1], l[h + 2] = c[2], l[h + 3] = 255;
        }
      if (l && s.imgData.data.length == l.length)
        for (h = 0; h < l.length; ++h)
          s.imgData.data[h] = l[h];
      s.imgData.data = l, s.tempContext.putImageData(s.imgData, 0, 0);
      var p = new f();
      return p.setProperties([
        "url",
        "iw",
        "ih"
      ], [
        s.canvas.toDataURL(),
        e,
        t
      ]), p;
    }, this.getClipPath = function (e) {
      var t;
      this.clipGPathes = [];
      for (var i = 0; i < e.length; i++)
        (t = this.path2GPath(e[i])) && (t.clipPathId = e[i].clipPathId, i > 0 ? this.appendItem(t, this.clipGPathes[i - 1]) : this.appendItem(t), this.clipGPathes[i] = t);
      return this.clipGPathes.length ? this.clipGPathes[this.clipGPathes.length - 1] : this.ggroup;
    }, this.path2GPath = function (e) {
      for (var t = new u(), i = 0; i < e.length; i++)
        for (var n = 0; n < e[i].length; n++)
          if ("curveto" == e[i][n].type)
            t.addVertex(a.Command.Curve2, e[i][n].coord3.x, e[i][n].coord3.y), t.addVertex(a.Command.Curve2, e[i][n].coord1.x, e[i][n].coord1.y), t.addVertex(a.Command.Curve2, e[i][n].coord2.x, e[i][n].coord2.y);
          else if ("lineto" == e[i][n].type)
            t.addVertex(a.Command.Line, e[i][n].coord.x, e[i][n].coord.y);
          else if ("closepath" == e[i][n].type)
            t.addVertex(a.Command.Close, e[i][n].coord.x, e[i][n].coord.y);
          else if ("moveto" == e[i][n].type)
            t.addVertex(a.Command.Move, e[i][n].coord.x, e[i][n].coord.y);
          else if ("arc" == e[i][n].type) {
            var r = e[i][n], o = new d().scaled(r.radius.x, r.radius.y).translated(r.center.x, r.center.y);
            (h = new _()).setProperties([
              "sa",
              "ea",
              "etp",
              "trf"
            ], [
              (r.angle1 + 2 * Math.PI) % (2 * Math.PI),
              (r.angle2 + 2 * Math.PI) % (2 * Math.PI),
              _.Type.Arc,
              o
            ]);
            var l = new a();
            if (h.rewindVertices(0), h.hasVertexForRead(l))
              for (; h.readVertex(l);)
                t.addVertex(l.command, l.x, l.y);
          } else if ("arcn" == e[i][n].type) {
            r = e[i][n], o = new d().scaled(r.radius.x, r.radius.y).translated(r.center.x, r.center.y);
            (h = new _()).setProperties([
              "sa",
              "ea",
              "etp",
              "trf"
            ], [
              (r.angle2 + 2 * Math.PI) % (2 * Math.PI),
              (r.angle1 + 2 * Math.PI) % (2 * Math.PI),
              _.Type.Arc,
              o
            ]);
            var h = u.clone(h, !0);
            l = new a();
            if (h.rewindVertices(0), h.hasVertexForRead(l))
              for (; h.readVertex(l);)
                t.addVertex(l.command, l.x, l.y);
          }
      return s.createPathFromVertexSource(t);
    }, this.ready = function () {
      return this._finished;
    }, this.workerAPI = {
      stroke: function (e, t, i, n, r, o, a, s, l) {
        var h = this.path2GPath(e);
        if (h) {
          var A = new v.BorderPaintLayer(), c = w.LineCap.Butt;
          1 == r ? c = w.LineCap.Round : 2 == r && (c = w.LineCap.Square);
          var p = w.LineJoin.Miter;
          1 == o ? p = w.LineJoin.Bevel : 2 == o && (p = w.LineJoin.Round);
          var u = null;
          l && l.arr.length && (u = l.arr);
          var d = s || 3;
          if (A.setProperties([
              "_pt",
              "op",
              "_bw",
              "_blc",
              "_blj",
              "_bds",
              "_bml"
            ], [
              this.getGColor(t, h),
              1,
              i,
              c,
              p,
              u,
              d
            ]), h.getPaintLayers().appendChild(A), n && n.length > 0) {
            var g = this.getClipPath(n);
            this.appendItem(h, g);
          } else
            this.appendItem(h);
          return !0;
        }
      },
      fill: function (e, t, i, n) {
        if (0 == e.length && (0 == i.length || 1 == i.length && 0 == i[0].length)) {
          var r = this.getGColor(t, o);
          if (r)
            return this.background = r, !0;
        }
        var o = this.path2GPath(e);
        if (!o)
          return !1;
        var a = new v.FillPaintLayer();
        if (a.setProperties(["_pt"], [this.getGColor(t, o)]), o.getPaintLayers().appendChild(a), o.setProperties(["evenodd"], [!!n]), i && i.length > 0) {
          var s = this.getClipPath(i);
          this.appendItem(o, s);
        } else
          this.appendItem(o);
        return !0;
      },
      shfill: function (e, t) {
        if (t && t.length > 0) {
          var i = this.getClipPath(t);
          if ((e = this.getGColor(e, i)) instanceof f)
            this.appendItem(e, i);
          else if (i != this.ggroup) {
            var n = new v.FillPaintLayer();
            n.setProperties(["_pt"], [e]), i.getPaintLayers().appendChild(n);
          } else
            e && (this.background = e);
          0;
        }
      },
      rectfill: function (e, t, i, n, r) {
        var o = new m(e, t, i, n);
        r = this.getGColor(r, o);
        var a = new v.FillPaintLayer();
        return a.setProperties(["_pt"], [r]), o.getPaintLayers().appendChild(a), this.appendItem(o), !0;
      },
      drawImage: function (e, t, i, n, r, a, s) {
        var l = document.createElement("canvas");
        l.width = e, l.height = t;
        var h = l.getContext("2d"), A = {
            canvas: l,
            imgData: h.createImageData(e, t),
            tempContext: h
          }, c = i;
        if (s) {
          c = new Array(Math.round(i.length / 5 * 4));
          for (var p = 0, u = 0; p + 4 < i.length; p += 5, u += 4) {
            var g = [
                i[p] / 255,
                i[p + 1] / 255,
                i[p + 2] / 255,
                i[p + 3] / 255
              ], m = o.cmykToRGB(g);
            c[u] = m[0], c[u + 1] = m[1], c[u + 2] = m[2], c[u + 3] = i[p + 4];
          }
        }
        if (c && A.imgData.data.length == c.length)
          for (p = 0; p < c.length; ++p)
            A.imgData.data[p] = c[p];
        A.imgData.data = c, A.tempContext.putImageData(A.imgData, 0, 0);
        var y = new f();
        y.setProperties([
          "url",
          "iw",
          "ih"
        ], [
          A.canvas.toDataURL(),
          e,
          t
        ]);
        var _ = new d(n[0], n[1], n[2], n[3], n[4], n[5]).inverted().multiplied(new d(r[0], r[1], r[2], r[3], r[4], r[5]));
        if (y.setTransform(_), a && a.length > 0) {
          var v = this.getClipPath(a);
          this.appendItem(y, v);
        } else
          this.appendItem(y);
        return !0;
      },
      jpeg: function (e, t, i) {
        if (!(i && i.length && t && t.length))
          return !1;
        var n = new Image(), r = !1;
        n.onload = function () {
          if (n.width && n.height) {
            var e = document.createElement("canvas");
            e.width = n.width, e.height = n.height;
            var o = e.getContext("2d");
            o.drawImage(n, 0, 0);
            var a = o.getImageData(0, 0, e.width, e.height);
            if (a.data.length && "undefined" != typeof Atomics) {
              if (2 == i.length)
                Atomics.store(i, 0, n.width), Atomics.store(i, 1, n.height), Atomics.store(t, 0, 1), Atomics.wake(t, 0, 1);
              else {
                for (var s = 0; s < a.data.length && s < i.length; ++s)
                  Atomics.store(i, s, a.data[s]);
                Atomics.store(t, 0, 1), Atomics.wake(t, 0, 1);
              }
              r = !0;
            }
          }
          if (!r)
            if (2 == i.length)
              Atomics.store(i, 0, 0), Atomics.store(i, 1, 0), Atomics.store(t, 0, 1), Atomics.wake(t, 0, 1);
            else {
              for (s = 0; s < i.length; ++s)
                Atomics.store(i, s, 0);
              Atomics.store(t, 0, 1), Atomics.wake(t, 0, 1);
            }
        }.bind(this), n.onerror = function () {
          if (2 == i.length)
            Atomics.store(i, 0, 0), Atomics.store(i, 1, 0), Atomics.store(t, 0, 1), Atomics.wake(t, 0, 1);
          else {
            for (var e = 0; e < i.length; ++e)
              Atomics.store(i, e, 0);
            Atomics.store(t, 0, 1), Atomics.wake(t, 0, 1);
          }
        }.bind(this), n.src = e;
      },
      resolveFont: function (e) {
        if (!this.fontsCache[e]) {
          var t = this.fontManager.getFont(e, h.Style.Normal, h.Weight.Regular);
          if (!t) {
            var i = this.fontManager.getDefaultFont();
            i && (t = A.create(e, h.Style.Normal, h.Weight.Regular, i._buffer));
          }
          this.fontsCache[e] = t;
        }
        return !0;
      },
      show: function (e, t, n, r, o, a, s, l, A, c, u, g, f, m, y, _) {
        r = this.getGColor(r);
        var b = [new p()];
        if (b)
          for (var C = 0; C < b.length; ++C) {
            var E = b[C], B = 2 == a ? new v.BorderPaintLayer() : new v.FillPaintLayer();
            if (B.setProperties(["_pt"], [r]), 2 == a) {
              var x = w.LineCap.Butt;
              1 == g ? x = w.LineCap.Round : 2 == g && (x = w.LineCap.Square);
              var P = w.LineJoin.Miter;
              1 == f ? P = w.LineJoin.Bevel : 2 == f && (P = w.LineJoin.Round);
              var S = null;
              _ && _.arr.length && (S = _.arr);
              var T = y || 3;
              B.setProperties([
                "_bw",
                "_blc",
                "_blj",
                "_bds",
                "_bml"
              ], [
                u,
                x,
                P,
                S,
                T
              ]);
            }
            if (E.getPaintLayers().appendChild(B), !t) {
              var I = i.getDefaultFont();
              I && (t = I.getFamily(), n = I.getWeight());
            }
            var F = v.PropertySetInfo[v.PropertySet.Text].geometryProperties;
            n = n || F._tfi, E.setProperties([
              "_tfs",
              "_tff",
              "_tfw",
              "_fc",
              "_tfi",
              "_aw",
              "_ah"
            ], [
              h.Style.Normal,
              t,
              h.Weight.Regular,
              r,
              n,
              !0,
              !0
            ]), E.setText(e);
            var R = this.fontManager.getDefaultFont(), D = n;
            R && R._openTypeFont && R._openTypeFont.ascender && R._openTypeFont.unitsPerEm && (D = R._openTypeFont.ascender / R._openTypeFont.unitsPerEm * n), E.transformSourceBBox(new d(1, 0, 0, 1, o.x, o.y - D)), this.appendItem(E);
          }
        return !0;
      },
      done: function () {
        if (!this._finished) {
          if (this.drawCallback(0, this.ggroup, null, this.background), this.errorCallback && this._errorQueue)
            for (var e = 0; e < this._errorQueue.length; ++e)
              this.errorCallback(this._errorQueue[e]);
          this._errorQueue = null, this._finished = !0;
        }
        return !0;
      },
      error: function (e) {
        this.errorCallback && e && !this._errorDone[e] && (this._errorQueue = this._errorQueue ? this._errorQueue : [], this._errorQueue.push(C.get(new b("GEPSParser", e))), this._errorDone[e] = !0);
      }
    };
  }
  n.inherit(E, n), E.ErrorCodes = {
    FailedColorUseBlue: "01",
    FailedElement: "02",
    Timeout: "03",
    General: "04",
    Canceled: "05"
  }, e.exports = E;
}
