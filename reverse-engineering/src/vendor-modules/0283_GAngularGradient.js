/**
 * chunk.vendor.js Module #283
 * Type: class
 * Name: GAngularGradient
 */

function (e, t, i) {
      var n = i(138),
        r = i(50),
        o = i(17),
        a = i(12),
        s = i(364),
        l = i(473),
        h = i(6),
        A = i(5),
        c = i(103),
        p = i(14),
        u = i(166),
        d = i(118);

      function g(e, t, i, r, o, a) {
        (n.call(this, e, t, i, r, a),
          (this._scale = "number" == typeof t ? t : 0.5),
          (this._a0 = "number" == typeof o ? o : -Math.PI));
      }
      (r.inheritAndMix("A", g, n, [l, d]),
        (g.prototype._isAffectedByGLBug = !0),
        (g.equals = function (e, t, i) {
          return (
            !(!(e instanceof g && t instanceof g) || (!i && e._a0 !== t._a0)) &&
            n.equals(e, t, i)
          );
        }),
        (g.prototype.getShaderClass = function () {
          return s;
        }),
        (g.prototype.asCSSBackground = function (e, t, i) {
          if (c.isDebug()) return o.WHITE.asCSSBackground();
          if (c.isRenderPhase())
            throw new Error("Cannot get CSS background, renderer is busy.");
          var n = this.getGradient(e || 1, new h(0, 0, t || 20, i || 20));
          return n
            ? "url(" + n._canvasContext.canvas.toDataURL() + ")"
            : o.WHITE.asCSSBackground();
        }),
        (g.prototype.clone = function () {
          return new g(
            this.getClonedStops(),
            this._scale,
            this._fx,
            this._fy,
            this._a0,
            this._transform,
          );
        }),
        (g.prototype.destroy = function () {
          this._destroy();
        }),
        (g.prototype._serializeToBlob = function () {
          var e = n.prototype._serializeToBlob.call(this);
          return (e && (a.isEqualEps(this._a0, 0) || (e.a0 = this._a0)), e);
        }),
        (g.prototype.getGradient = function (e, t) {
          if (!t || t.isEmpty()) return null;
          var i = null;
          if (this.prepareShader()) {
            ((i = new p()).resize(
              Math.round(t.getWidth()),
              Math.round(t.getHeight()),
            ),
              i.prepare(),
              i.setOrigin(new A(0, 0)),
              i.setOffset(new A(0, 0)));
            var n = this._getRGBStops();
            (this.drawShader(
              i,
              {
                cx: this._fx,
                cy: this._fy,
                a0: this._a0,
                a1: this._a0 + a.PI2,
                stops: n,
                opacity: e,
              },
              this._scale,
              t.getWidth(),
              t.getHeight(),
            ),
              u.DELETE_BLEND_AND_GRADIENT_TEXTURES_AFTER_DRAW &&
                this.destroy());
          }
          return i;
        }),
        (g.prototype._deserializeFromBlob = function (e) {
          if (
            (n.prototype._deserializeFromBlob.call(this, e),
            (this._a0 = e.hasOwnProperty("a0") ? e.a0 : 0),
            e.hasOwnProperty("a1"))
          ) {
            for (
              var t = (e.a1 - this._a0) / a.PI2, i = 0;
              i < this._stops.length;
              ++i
            )
              this._stops[i].position *= t;
            var r = this._stops[this._stops.length - 1];
            r.position < 0.999999 &&
              (this._stops.push({
                position: r.position + 1e-6,
                color: r.color,
                opacity: 0,
              }),
              this._stops.push({
                position: 1,
                color: r.color,
                opacity: 0,
              }));
          }
        }),
        (g.prototype.isWebGL = function () {
          return !0;
        }),
        (g.prototype.toString = function () {
          return "[Object GAngularGradient]";
        }),
        (g.prototype._getRGBStops = function () {
          var e = this.getClonedStops();
          return (
            e.forEach((e) => {
              e.color instanceof o || (e.color = new o(e.color.toScreen()));
            }),
            e
          );
        }),
        (e.exports = g));
    }