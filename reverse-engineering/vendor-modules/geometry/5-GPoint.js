/**
 * Module 5 - GPoint
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This code is minified. Variable names like e, t, n, i, o, a, r, s
 * have been compressed. Refer to the original open-source Gravit code
 * for better understanding of the logic.
 */

function (e, t, i) {
      var n = i(5),
        r = i(6),
        o = i(12);

      function a(e, t, i, n, r, o) {
        (this._sx = "number" == typeof e ? e : 1),
          (this._shy = "number" == typeof t ? t : 0),
          (this._shx = "number" == typeof i ? i : 0),
          (this._sy = "number" == typeof n ? n : 1),
          (this._tx = "number" == typeof r ? r : 0),
          (this._ty = "number" == typeof o ? o : 0);
      }
      (a.serialize = function (e) {
        return e.isIdentity() ? [] : e.getMatrix();
      }),
        (a.deserialize = function (e) {
          return e && e.length >= 6
            ? new a(e[0], e[1], e[2], e[3], e[4], e[5])
            : new a();
        }),
        (a.equals = function (e, t, i) {
          return (
            (!e && e == t) ||
            (!(!e || !t) &&
              o.isEqualEps(e._sx, t._sx, i) &&
              o.isEqualEps(e._shy, t._shy, i) &&
              o.isEqualEps(e._shx, t._shx, i) &&
              o.isEqualEps(e._sy, t._sy, i) &&
              o.isEqualEps(e._tx, t._tx, i) &&
              o.isEqualEps(e._ty, t._ty, i))
          );
        }),
        (a.correctForFrame = function (e, t) {
          var i = e,
            n = e.decomposed();
          if (n && (!n.skew.isIdentity() || !n.rotate.isIdentity())) {
            var o = t.getSide(r.Side.CENTER),
              s = e.mapPoint(o);
            i = new a(1, 0, 0, 1, s.getX() - o.getX(), s.getY() - o.getY());
          }
          return i;
        }),
        (a.getRotationTransform = function (e, t, i, n, r, o, s, l, h) {
          var A = new a(1, 0, 0, 1, -r, -o),
            c = new a(1, 0, 0, 1, r, o),
            p = Math.atan2(t - o, e - r),
            u = Math.atan2(n - o, i - r);
          if (s) {
            var d = l || Math.PI / 12;
            u = Math.round(u / d) * d;
          }
          if (h) {
            d = Math.PI / 2;
            var g = Math.round(u / d) * d;
            Math.abs(u - g) < h && (u = g);
          }
          var f = p - u,
            m = Math.cos(f),
            y = Math.sin(f),
            _ = new a(m, -y, y, m, 0, 0);
          return A.multiplied(_).multiplied(c);
        }),
        (a.getLineConstrainRotation = function (
          e,
          t,
          i,
          r,
          o,
          s,
          l,
          h,
          A,
          c,
          p,
          u
        ) {
          var d = new a(1, 0, 0, 1, -o, -s),
            g = new a(1, 0, 0, 1, o, s),
            f = Math.atan2(t - s, e - o) - Math.atan2(r - s, i - o),
            m = Math.cos(f),
            y = Math.sin(f),
            _ = new a(m, -y, y, m, 0, 0),
            v = d.multiplied(_).multiplied(g),
            b = v.mapPoint(new n(l, h)),
            C = v.mapPoint(new n(A, c)),
            w = Math.atan2(C.getY() - b.getY(), C.getX() - b.getX()),
            E = w;
          if (p || !u) {
            var B = p || Math.PI / 12;
            E = Math.round(w / B) * B;
          }
          if (u) {
            B = Math.PI / 2;
            var x = Math.round(w / B) * B;
            Math.abs(x - w) < u && (E = x);
          }
          return (
            (f += w - E),
            (_ = new a((m = Math.cos(f)), -(y = Math.sin(f)), y, m, 0, 0)),
            d.multiplied(_).multiplied(g)
          );
        }),
        (a.getResizeTransform = function (e, t, i, n, s, l) {
          var h = 1,
            A = 1,
            c = e.getX(),
            p = e.getY(),
            u = e.getWidth(),
            d = e.getHeight(),
            g = c + u / 2,
            f = p + d / 2,
            m = u || 1,
            y = d || 1;
          switch (t) {
            case r.Side.TOP_LEFT:
            case r.Side.LEFT_CENTER:
            case r.Side.BOTTOM_LEFT:
              (h = (u - i) / m), l ? (h += h - 1) : (g = c + u);
              break;
            case r.Side.TOP_RIGHT:
            case r.Side.RIGHT_CENTER:
            case r.Side.BOTTOM_RIGHT:
              (h = (u + i) / m), l ? (h += h - 1) : (g = c);
          }
          switch (t) {
            case r.Side.TOP_LEFT:
            case r.Side.TOP_CENTER:
            case r.Side.TOP_RIGHT:
              (A = (d - n) / y), l ? (A += A - 1) : (f = p + d);
              break;
            case r.Side.BOTTOM_LEFT:
            case r.Side.BOTTOM_CENTER:
            case r.Side.BOTTOM_RIGHT:
              (A = (d + n) / y), l ? (A += A - 1) : (f = p);
          }
          if (s)
            switch (t) {
              case r.Side.TOP_CENTER:
              case r.Side.BOTTOM_CENTER:
                h = Math.abs(A);
                break;
              case r.Side.LEFT_CENTER:
              case r.Side.RIGHT_CENTER:
                A = Math.abs(h);
                break;
              default:
                Math.abs(h) > Math.abs(A)
                  ? (A = o.isEqualEps(A, 0)
                      ? h
                      : (A * Math.abs(h)) / Math.abs(A))
                  : (h = o.isEqualEps(h, 0)
                      ? A
                      : (h * Math.abs(A)) / Math.abs(h));
            }
          return new a(1, 0, 0, 1, -g, -f)
            .multiplied(new a(h, 0, 0, A, 0, 0))
            .multiplied(new a(1, 0, 0, 1, g, f));
        }),
        (a.getNativeRectTransformation = function (e) {
          return new a()
            .scaled(e.getWidth(), e.getHeight())
            .translated(e.getX(), e.getY());
        }),
        a.prototype._sx,
        a.prototype._shy,
        a.prototype._shx,
        a.prototype._sy,
        a.prototype._tx,
        a.prototype._ty,
        (a.prototype.isIdentity = function () {
          return (
            o.isEqualEps(this._sx, 1) &&
            o.isEqualEps(this._shy, 0) &&
            o.isEqualEps(this._shx, 0) &&
            o.isEqualEps(this._sy, 1) &&
            o.isEqualEps(this._tx, 0) &&
            o.isEqualEps(this._ty, 0)
          );
        }),
        (a.prototype.isValid = function () {
          return (
            Math.abs(this._sx) > o.defaultEps &&
            Math.abs(this._sy) > o.defaultEps
          );
        }),
        (a.prototype.getMatrix = function () {
          return [this._sx, this._shy, this._shx, this._sy, this._tx, this._ty];
        }),
        (a.prototype.getDeterminant = function () {
          return this._sx * this._sy - this._shy * this._shx;
        }),
        (a.prototype.getDeterminantReciprocal = function () {
          return 1 / (this._sx * this._sy - this._shy * this._shx);
        }),
        (a.prototype.getTranslation = function () {
          return new n(this._tx, this._ty);
        }),
        (a.prototype.getScaleFactor = function () {
          var e =
              0.7071067811865476 * this._sx + 0.7071067811865476 * this._shx,
            t = 0.7071067811865476 * this._shy + 0.7071067811865476 * this._sy;
          return Math.sqrt(e * e + t * t);
        }),
        (a.prototype.getRotationFactor = function () {
          return Math.atan2(this._shx, this._sx);
        }),
        (a.prototype.makeInvertible = function () {
          if (!this.invertible()) {
            var e = this._sx,
              t = this._shy,
              i = this._shx,
              n = this._sy,
              r = this._tx,
              s = this._ty;
            return (
              0 === e && (e = o.defaultEps),
              0 === n && (n = o.defaultEps),
              new a(e, t, i, n, r, s)
            );
          }
          return this;
        }),
        (a.prototype.multiplied = function (e) {
          var t = this._sx,
            i = this._shy,
            n = this._shx,
            r = this._sy,
            o = this._tx,
            s = this._ty,
            l = t * e._sx + i * e._shx,
            h = n * e._sx + r * e._shx,
            A = o * e._sx + s * e._shx + e._tx;
          return (
            (i = t * e._shy + i * e._sy),
            (r = n * e._shy + r * e._sy),
            (s = o * e._shy + s * e._sy + e._ty),
            new a((t = l), i, (n = h), r, (o = A), s)
          );
        }),
        (a.prototype.preMultiplied = function (e) {
          var t = e._sx * this._sx + e._shy * this._shx,
            i = e._sx * this._shy + e._shy * this._sy,
            n = e._shx * this._shy + e._sy * this._sy;
          return new a(
            t,
            i,
            e._shx * this._sx + e._sy * this._shx,
            n,
            e._tx * this._sx + e._ty * this._shx + this._tx,
            e._tx * this._shy + e._ty * this._sy + this._ty
          );
        }),
        (a.prototype.invertible = function () {
          return this._sx * this._sy - this._shx * this._shy != 0;
        }),
        (a.prototype.inverted = function () {
          var e = this._sx,
            t = this._sy,
            i = this._shx,
            n = this._shy,
            r = this._tx,
            o = this._ty,
            s = e * t - n * i;
          if (!s) return null;
          var l = 1 / s,
            h = t * l,
            A = -r * h - o * (i = -i * l);
          return (
            (o = -r * (n = -n * l) - o * (t = e * l)),
            new a((e = h), n, i, t, (r = A), o)
          );
        }),
        (a.prototype.rotated = function (e) {
          return this.multiplied(
            new a(Math.cos(e), Math.sin(e), -Math.sin(e), Math.cos(e), 0, 0)
          );
        }),
        (a.prototype.translated = function (e, t) {
          return this.multiplied(new a(1, 0, 0, 1, e, t));
        }),
        (a.prototype.scaled = function (e, t) {
          return t || (t = e), this.multiplied(new a(e, 0, 0, t, 0, 0));
        }),
        (a.prototype.skewed = function (e, t) {
          return this.multiplied(new a(1, Math.tan(t), Math.tan(e), 1, 0, 0));
        }),
        (a.prototype.map = function (e) {
          if (!this.isIdentity()) {
            var t = e.x;
            (e.x = t * this._sx + e.y * this._shx + this._tx),
              (e.y = t * this._shy + e.y * this._sy + this._ty);
          }
        }),
        (a.prototype.mapPoint = function (e) {
          if (this.isIdentity()) return e;
          var t = e.getX(),
            i = e.getY(),
            r = t * this._sx + i * this._shx + this._tx,
            o = t * this._shy + i * this._sy + this._ty;
          return new n(r, o);
        }),
        (a.prototype.mapQuadrilateral = function (e) {
          if (!e) return [];
          var t = e.getSide(r.Side.TOP_LEFT),
            i = e.getSide(r.Side.TOP_RIGHT),
            n = e.getSide(r.Side.BOTTOM_RIGHT),
            o = e.getSide(r.Side.BOTTOM_LEFT);
          return [
            this.mapPoint(t),
            this.mapPoint(i),
            this.mapPoint(n),
            this.mapPoint(o),
          ];
        }),
        (a.prototype.decomposed = function () {
          var e = this._sx,
            t = this._shy,
            i = this._shx,
            n = this._sy;
          if (o.isEqualEps(e * n - t * i)) return null;
          var r = Math.sqrt(e * e + t * t),
            s = (e /= r) * i + (t /= r) * n;
          (i -= e * s), (n -= t * s);
          var l = Math.sqrt(i * i + n * n);
          return (
            (s /= l),
            e * (n /= l) < t * (i /= l) &&
              ((e = -e), (t = -t), (s = -s), (r = -r)),
            {
              scale: new a(r, 0, 0, l, 0, 0),
              translate: new a(1, 0, 0, 1, this._tx, this._ty),
              rotate: new a(e, t, -t, e, 0, 0),
              skew: new a(1, 0, s, 1, 0, 0),
            }
          );
        }),
        (a.prototype.noSkewDecomposed = function () {
          var e = this._sx,
            t = this._shy,
            i = this._shx,
            n = this._sy;
          if (o.isEqualEps(e * n - t * i, 0)) return null;
          var r = 2 * (e * i + t * n),
            s = e * e + t * t - i * i - n * n,
            l = s * s + r * r;
          if (o.isEqualEps(l, 0)) return null;
          var h = s / (l = Math.sqrt(l)),
            A = r / l,
            c = Math.sqrt((1 + h) / 2),
            p = o.isEqualEps(c, 0) ? (c >= 0 ? 1 : -1) : A / (2 * c),
            u = new a(c, -p, p, c),
            d = new a(c, p, -p, c),
            g = new a(1, 0, 0, 1, this._tx, this._ty),
            f = d
              .multiplied(this)
              .multiplied(new a(1, 0, 0, 1, -this._tx, -this._ty))
              .multiplied(u);
          return o.isEqualEps(f._shy, 0, 1e-7) &&
            o.isEqualEps(f._shx, 0, 1e-7) &&
            o.isEqualEps(f._tx, 0, 1e-7) &&
            o.isEqualEps(f._ty, 0, 1e-7)
            ? ((f._shy = 0),
              (f._shx = 0),
              (f._tx = 0),
              (f._ty = 0),
              {
                rotation: u,
                scalation: f,
                rotationBack: d,
                translation: g,
              })
            : null;
        }),
        (a.prototype.mapRect = function (e) {
          return this.isIdentity()
            ? e
            : r.fromPoints.apply(null, this.mapQuadrilateral(e));
        }),
        (a.prototype.toString = function () {
          return (
            "[Object GTransform(sx=" +
            this._sx.toString() +
            ", shy=" +
            this._shy.toString() +
            ", shx=" +
            this._shx.toString() +
            ", sy=" +
            this._sy.toString() +
            ", tx=" +
            this._tx.toString() +
            ", ty=" +
            this._ty.toString() +
            ")]"
          );
        }),
        (e.exports = a);
    }
