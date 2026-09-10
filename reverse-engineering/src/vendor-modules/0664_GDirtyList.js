/**
 * chunk.vendor.js Module #664
 * Type: class
 * Name: GDirtyList
 */

function (e, t, i) {
      var n = i(6);

      function r() {}
      ((r.options = {
        epsilon: 2500,
        bufferSize: 10,
      }),
        (r.Matcher = function () {}),
        (r.Matcher.from = function (e) {
          for (var t = new r.Matcher(), i = null, n = 0; n < e.length; n++)
            i = i ? i.united(e[n]) : e[n];
          return ((t._unitedArea = i), (t._rects = e.slice()), t);
        }),
        (r.Matcher.prototype._unitedArea = null),
        (r.Matcher.prototype._rects = null),
        (r.Matcher.prototype._nonIntersectingRects = null),
        (r.Matcher.prototype.intersect = function (e) {
          for (
            var t = null, i = [], n = null, o = 0;
            o < this._rects.length;
            o++
          ) {
            var a = e.intersected(this._rects[o]);
            a.isEmpty() || (i.push(a), (n = null === n ? a : n.united(a)));
          }
          if (n && !n.isEmpty()) {
            (((t = new r.Matcher())._unitedArea = n),
              (t._rects = new Array(i.length)));
            for (o = 0; o < i.length; o++) t._rects[o] = i[o];
          }
          return t;
        }),
        (r.Matcher.prototype.isDirty = function (e) {
          if (this._unitedArea && !this._unitedArea.intersectsRect(e))
            return !1;
          if (this._rects && this._rects.length > 0)
            for (var t = 0; t < this._rects.length; ++t) {
              if (this._rects[t].intersectsRect(e)) return !0;
            }
          return !1;
        }),
        (r.Matcher.prototype.transform = function (e) {
          if (
            (this._unitedArea &&
              (this._unitedArea = e.mapRect(this._unitedArea)),
            this._rects && this._rects.length > 0)
          )
            for (var t = 0; t < this._rects.length; ++t)
              this._rects[t] = e.mapRect(this._rects[t]);
        }),
        (r.Matcher.prototype.clip = function (e) {
          if (this._rects && this._rects.length > 0) {
            this._unitedArea &&
              (this._unitedArea = e.intersected(this._unitedArea));
            for (var t = 0; t < this._rects.length; ++t)
              this._rects[t] = e.intersected(this._rects[t]);
          } else ((this._unitedArea = e), (this._rects = [e]));
        }),
        (r.Matcher.prototype.getDirtyArea = function () {
          return this._unitedArea;
        }),
        (r.Matcher.prototype.getDirtyRectangles = function () {
          return this._rects;
        }),
        (r.Matcher.prototype.getNonIntersectingDirtyRectangles = function () {
          if (this._nonIntersectingRects) return this._nonIntersectingRects;
          if (!this._rects) return null;
          for (var e = [], t = 0; t < this._rects.length; t++) {
            for (var i = [this._rects[t]], r = 0; r < e.length; r++) {
              for (var o = [], a = 0; a < i.length; a++) {
                var s = i[a].subtracted(e[r], !0);
                s instanceof Array
                  ? ((s = s.filter(function (e) {
                      return e && e.getWidth() > 0 && e.getHeight() > 0;
                    })),
                    (o = o.concat(s)))
                  : s instanceof n &&
                    s.getWidth() > 0 &&
                    s.getHeight() > 0 &&
                    o.push(s);
              }
              i = o;
            }
            e = e.concat(i);
          }
          return ((this._nonIntersectingRects = e), e);
        }),
        (r.prototype._area = null),
        (r.prototype._dirties = null),
        (r.prototype._numDirties = 0),
        (r.prototype.setArea = function (e) {
          this._area = e;
        }),
        (r.prototype.getArea = function () {
          return this._area;
        }),
        (r.prototype.dirty = function (e, t, i, n) {
          var o = Math.floor(e),
            a = Math.floor(t);
          if (
            ((i = Math.ceil(e + i) - o),
            (n = Math.ceil(t + n) - a),
            (e = o),
            (t = a),
            this._area)
          ) {
            if (!this._area.intersectsRectXYWH(e, t, i, n)) return !1;
            (e < this._area.getX() && (e = this._area.getX()),
              t < this._area.getY() && (t = this._area.getY()),
              e + i > this._area.getX() + this._area.getWidth() &&
                (i = this._area.getX() + this._area.getWidth() - e),
              t + n > this._area.getY() + this._area.getHeight() &&
                (n = this._area.getY() + this._area.getHeight() - t));
          }
          null == this._dirties
            ? (this._dirties = new Array(r.options.bufferSize))
            : this._numDirties == this._dirties.length &&
              (this._dirties.length += r.options.bufferSize);
          for (var s = 0; s < this._numDirties; s++) {
            var l = (p = this._dirties[s])[0],
              h = p[1],
              A = p[2],
              c = p[3];
            if (e >= l) {
              if (t >= h) {
                if (e + i <= l + A) {
                  if (t + n <= h + c) return !1;
                  if (t < h + c) {
                    ((n = t + n - (h + c)), (t = h + c), (s = -1));
                    continue;
                  }
                } else if (e < l + A && t + n <= h + c) {
                  ((i = e + i - (l + A)), (e = l + A), (s = -1));
                  continue;
                }
              } else if (e + i <= l + A && t + n > h && t + n <= h + c) {
                ((n = h - t), (s = -1));
                continue;
              }
            } else if (e <= l)
              if (t <= h && e + i >= l + A && t + n >= h + c)
                ((p[2] = 0), (p[3] = 0));
              else {
                if (l < e + i && h >= t && h + c <= t + n) {
                  ((p[2] = p[2] - (e + i - p[0])), (p[0] = e + i), (s = -1));
                  continue;
                }
                if (l + A <= e + i) {
                  if (h >= t && h < t + n) {
                    ((p[3] = c - (t + n - h)), (p[1] = t + n), (s = -1));
                    continue;
                  }
                  if (h + c > t && h + c <= t + n) {
                    ((p[3] = t - h), (s = -1));
                    continue;
                  }
                }
              }
            else {
              if (e + i > l && e + i <= l + A && t >= h && t + n <= h + c) {
                ((i = l - e), (s = -1));
                continue;
              }
              if (l + A > e && l + A <= e + i && h >= t && h + c <= t + n) {
                ((p[2] = e - l), (s = -1));
                continue;
              }
            }
          }
          for (s = 0; s < this._numDirties; s++) {
            var p = this._dirties[s];
            if (
              i > 0 &&
              n > 0 &&
              p[2] > 0 &&
              p[3] > 0 &&
              (Math.max(e + i, p[0] + p[2]) - Math.min(e, p[0])) *
                (Math.max(t + n, p[1] + p[3]) - Math.min(t, p[1])) <
                i * n + p[2] * p[3] + r.options.epsilon
            ) {
              var u = Math.min(p[0], e),
                d = Math.min(p[1], t),
                g = Math.max(e + i, p[0] + p[2]) - Math.min(p[0], e),
                f = Math.max(t + n, p[1] + p[3]) - Math.min(p[1], t);
              return (
                (this._dirties[s][2] = 0),
                (this._dirties[s][3] = 0),
                this.dirty(u, d, g, f)
              );
            }
          }
          return ((this._dirties[this._numDirties++] = [e, t, i, n]), !0);
        }),
        (r.prototype.translate = function (e, t) {
          if (this._dirties && this._numDirties > 0)
            for (var i = 0; i < this._numDirties; ++i)
              ((this._dirties[i][0] += e), (this._dirties[i][1] += t));
        }),
        (r.prototype.flush = function () {
          var e = null;
          if (this._numDirties > 0) {
            (e = new r.Matcher())._rects = new Array(this._numDirties);
            for (var t = 0, i = 0; i < this._numDirties; ++i) {
              var o = this._dirties[i];
              if (o && o[2] > 0 && o[3] > 0) {
                var a = new n(o[0], o[1], o[2], o[3]);
                ((e._rects[t++] = a),
                  null == e._unitedArea
                    ? (e._unitedArea = a)
                    : (e._unitedArea = e._unitedArea.united(a)));
              }
            }
            ((e._rects.length = t), 0 == e._rects.length && (e = null));
          }
          return (this.reset(), e);
        }),
        (r.prototype.reset = function () {
          this._numDirties > 0 &&
            ((this._dirties.length = r.options.bufferSize),
            (this._numDirties = 0));
        }),
        (r.prototype.toString = function () {
          return "[Object GDirtyList]";
        }),
        (e.exports = r));
    }