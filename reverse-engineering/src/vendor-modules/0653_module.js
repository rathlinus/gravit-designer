/**
 * chunk.vendor.js Module #653
 * Type: unknown
 */

function (e, t, i) {
      var n = i(267),
        r = i(230),
        o = i(0),
        a = i(918);

      function s(e, t, i, n, r, o, s, l, h, A) {
        ((this.lines = []),
          (this._parent = r),
          (this.ordinal = n),
          (this._currLength = 0),
          (this._currHeight = 0),
          (this._wrapper = new a(e, t, i, n, this, o, s, l, h)),
          (this._bboxSpacing = A));
      }
      (o.inherit(s, n),
        (s.prototype.frame = function (e, t) {
          if (
            this._wrapper.wrap(
              function (e) {
                "number" == typeof e
                  ? (this._currHeight = e)
                  : ((this._currLength = e.ordinal + e.length - this.ordinal),
                    this.lines.push(e));
              }.bind(this),
              t,
              this._bboxSpacing,
            )
          )
            return (
              (this.length = this._currLength),
              (this.height = this._currHeight),
              e(this),
              !0
            );
        }),
        (s.prototype._currLength = 0),
        (s.prototype._currHeight = 0),
        (s.prototype.lines = null),
        (s.prototype.wrapper = null),
        (s.prototype._parent = null),
        (s.prototype.ordinal = 0),
        (s.prototype.height = void 0),
        (s.prototype.length = void 0),
        (s.prototype._realBounds = null),
        (s.prototype._bboxSpacing = null),
        (s.prototype._topMargin = void 0),
        (s.prototype._bottomMargin = void 0),
        (s.prototype.realBounds = function () {
          if (null === this._realBounds) {
            for (
              var e = Number.MAX_VALUE,
                t = Number.MAX_VALUE,
                i = -Number.MAX_VALUE,
                n = -Number.MAX_VALUE,
                o = 0;
              o < this.lines.length;
              o++
            ) {
              var a = this.lines[o];
              if ("line" === a.type)
                ((t = Math.min(t, a.baseline + a.minY)),
                  (e = Math.min(e, a.minX)),
                  (n = Math.max(n, a.baseline + a.maxY)),
                  (i = Math.max(i, a.maxX)));
              else {
                var s = a.bounds(!0);
                ((t = Math.min(t, s.t)),
                  (e = Math.min(e, s.l)),
                  (n = Math.max(n, s.b)),
                  (i = Math.max(i, s.r)));
              }
            }
            e === Number.MAX_VALUE ||
            t === Number.MAX_VALUE ||
            i === -Number.MAX_VALUE ||
            n === -Number.MAX_VALUE
              ? (this._realBounds = new r(0, 0, 0, 0))
              : (this._realBounds = new r(e, t, i - e, n - t));
          }
          return this._realBounds;
        }),
        (s.prototype.topMargin = function () {
          if (void 0 === this._topMargin) {
            this._topMargin = NaN;
            for (var e = Number.MAX_VALUE, t = 0; t < this.lines.length; t++) {
              var i = this.lines[t],
                n = i.minY;
              if (n !== Number.MAX_VALUE) {
                var r = i.baseline;
                e = Math.min(e, r + n);
              }
            }
            e !== Number.MAX_VALUE && (this._topMargin = e);
          }
          return this._topMargin;
        }),
        (s.prototype.bottomMargin = function () {
          if (
            void 0 === this._bottomMargin &&
            ((this._bottomMargin = NaN), this.lines.length)
          )
            for (
              var e = this.bounds(), t = e.t + e.h, i = this.lines.length - 1;
              i >= 0;
              i--
            ) {
              var n = this.lines[i],
                r = n.maxY;
              if (Number.isNaN(r)) console.log();
              else if (r !== -Number.MAX_VALUE) {
                this._bottomMargin = t - n.baseline - r;
                break;
              }
            }
          return this._bottomMargin;
        }),
        (s.prototype.bounds = function (e) {
          if (!this._bounds || e) {
            for (
              var t = 0, i = 0, n = 0, o = 0, a = 0;
              a < this.lines.length;
              ++a
            ) {
              var s = this.lines[a].bounds(e);
              0 === a
                ? ((t = s.l), (i = s.t), (n = s.l + s.w), (o = s.t + s.h))
                : (e && ((t = Math.min(t, s.l)), (i = Math.min(i, s.t))),
                  (n = Math.max(n, s.l + s.w)),
                  (o = Math.max(o, s.t + s.h)));
            }
            var l = o - i;
            l || e || (l = this.height);
            var h = new r(t, i, n - t, l);
            if (e) return h;
            this._bounds = h;
          }
          return this._bounds;
        }),
        (s.prototype.leftPadding = function () {
          var e = this.realBounds();
          return (e && e.l) || 0;
        }),
        (s.prototype.rightPadding = function () {
          var e = 0;
          return (
            this.lines.forEach(function (t) {
              e = Math.max(e, t.rightPadding || 0);
            }),
            e
          );
        }),
        (s.prototype.ascent = function () {
          var e = 0;
          return (
            this.lines.forEach(function (t) {
              "number" == typeof t.ascent && (e = Math.max(e, t.ascent));
            }),
            e
          );
        }),
        (s.prototype.descent = function () {
          var e = 0;
          return (
            this.lines.forEach(function (t) {
              "number" == typeof t.descent && (e = Math.max(e, t.descent));
            }),
            e
          );
        }),
        (s.prototype.baseline = function () {
          for (var e = 0; e < this.lines.length; e++)
            if ("number" == typeof this.lines[e].baseline)
              return this.lines[e].baseline;
          return 0;
        }),
        (s.prototype.actualWidth = function () {
          if (!this._actualWidth) {
            var e = 0;
            (this.lines.forEach(function (t) {
              "number" == typeof t.actualWidth &&
                (e = Math.max(e, t.actualWidth));
            }),
              (this._actualWidth = e));
          }
          return this._actualWidth;
        }),
        (s.prototype.children = function () {
          return this.lines;
        }),
        (s.prototype.parent = function () {
          return this._parent;
        }),
        (s.prototype.draw = function (e, t) {
          var i = t ? t.t : 0,
            n = t ? t.t + t.h : Number.MAX_VALUE;
          this.lines.some(function (r) {
            var o = r.bounds();
            return !(o.t + o.h < i) && (o.t > n || void r.draw(e, t));
          });
        }),
        (s.prototype.getBBoxSpacing = function () {
          var e = 0,
            t = this.children();
          if (t && t.length) {
            var i = null;
            (t.forEach(function (t) {
              if ((i || (i = t), i.actualWidth < t.actualWidth)) i = t;
              else if (i.actualWidth === t.actualWidth) {
                var n = i.getLastValidCharSpacing(),
                  r = t.getLastValidCharSpacing();
                r > n && ((i = t), (e = r));
              }
            }),
              i && !e && (e = i.getLastValidCharSpacing()));
          }
          return e;
        }),
        (s.prototype.getMinX = function () {
          var e = 0,
            t = this.children();
          return (
            t &&
              t.length &&
              ((e = t[0].minX),
              t.forEach(function (t) {
                e = Math.min(e, t.minX);
              })),
            e
          );
        }),
        (s.prototype.type = "frame"),
        (e.exports = s));
    }