/**
 * chunk.vendor.js Module #751
 * Type: class
 * Name: GGroupEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(36),
        o = i(66),
        a = i(39),
        s = i(274),
        l = i(22),
        h = i(122),
        A = i(70),
        c = i(7),
        p = i(24);

      function u(e) {
        s.call(this, e);
      }
      (n.inherit(u, s),
        r.exports(u, h),
        (u.prototype._paintOutline = function (e, t, i, n, r) {
          if (
            this._transform &&
            this._editors &&
            !this._element.getProperty("frm")
          )
            for (var o = 0; o < this._editors.length; ++o) {
              this._editors[o]._paintOutline(e, t, i, n, r);
            }
          else s.prototype._paintOutline.call(this, e, t, i, n);
        }),
        (u.prototype._applyTransform = function (e, t, i, n) {
          if (!this._transform.isIdentity()) {
            (e.beginUpdate(),
              e.assignTransformFrom(this._transform, this._element));
            for (
              var a = e.getProperty("frm"), s = e.getFirstChild();
              null != s;
              s = s.getNext()
            )
              if (
                s instanceof l &&
                (!i || i.indexOf(s) < 0) &&
                (!a ||
                  t ||
                  (s.hasMixin(l.Transform) &&
                    !s.getProperty("hacr") &&
                    !s.getProperty("vacr")))
              ) {
                var h = r.openEditor(s),
                  A = new o.EdTransformOptions();
                ((A.fullContentsTransform = !!t),
                  (s.dependentUpdate = !0),
                  h.edTransform(this._transform, null, null, A),
                  h.applyTransform(s, t, i, n),
                  (s.dependentUpdate = !1));
              }
            e.endUpdate();
          }
          o.prototype._applyTransform.call(this, e);
        }),
        (u.prototype.edTransform = function (e, t, i, n) {
          var o = this.getElement();
          if (!o.getProperty("frm"))
            for (var a = o.getFirstChild(); null != a; a = a.getNext()) {
              if (a instanceof l)
                ((a.dependentUpdate = !0),
                  r.openEditor(a).edTransform(e, null, null, n),
                  (a.dependentUpdate = !1));
            }
          s.prototype.edTransform.call(this, e, t, i, n);
        }),
        (u.prototype.getBBox = function (e) {
          return this.hasFlag(a.Flag.Selected) ||
            this.hasFlag(a.Flag.Highlighted)
            ? o.prototype.getBBox.call(this, e)
            : null;
        }),
        (u.prototype._getBBox = function (e, t) {
          for (
            var i = o.prototype._getBBox.call(this, e, t),
              n = this.getElement().getFirstChild();
            null != n;
            n = n.getNext()
          )
            if (n instanceof A) {
              var a = r.getEditor(n);
              if (a) {
                var s = a._getBBox(e, t);
                s && (i = i ? i.united(s) : s);
              }
            }
          return i;
        }),
        (u.prototype.getPEGeometryBBox = function () {
          var e = null;
          if (
            this._transform &&
            !this._element.getProperty("frm") &&
            this._editors &&
            0 != this._editors.length
          )
            for (var t = 0; t < this._editors.length; ++t) {
              var i = this._editors[t];
              if (i instanceof r) {
                var n = i.getPEGeometryBBox();
                n && (e = e ? e.united(n) : n);
              }
            }
          else e = s.prototype.getPEGeometryBBox.call(this);
          return e;
        }),
        (u.prototype.resetTransform = function () {
          for (var e = this._editors ? this._editors.length : 0; e > 0; --e) {
            this._editors[e - 1].resetTransform();
          }
          s.prototype.resetTransform.call(this);
        }),
        (u.prototype.movePart = function (e, t, i, n, r, l, h, A) {
          if (e !== o.RESIZE_HANDLE_PART_ID)
            return s.prototype.movePart.call(this, e, t, i, n, r, l, h);
          a.prototype.movePart.call(this, e, t, i, n, r, l, h);
          var u = null;
          A && ((u = new o.EdTransformOptions()).isMultiPage = !0);
          var d = n.mapPoint(i);
          d = r.mapPoint(d);
          var g = this._element.getSourceBBox();
          if (g) {
            var f = this.getBoxTransform();
            if (f && !f.isIdentity() && f.invertible()) {
              var m = f.inverted();
              m && (d = m.mapPoint(d));
            }
            var y = g.getSide(t.side),
              _ = d.getX() - y.getX(),
              v = d.getY() - y.getY(),
              b = l;
            p.isPreserveAspectRatioEnabledForSide(t.side) && (b = !0);
            var C = c.getResizeTransform(g, t.side, _, v, b, h);
            return (
              m && (C = m.multiplied(C).multiplied(f)),
              this.edTransform(C, null, null, u),
              C
            );
          }
          return null;
        }),
        (u.prototype._scaleBorder = function (e, t) {
          if (e instanceof h)
            for (var i = this._editors ? this._editors.length : 0; i > 0; --i) {
              var n = this._editors[i - 1];
              n._scaleBorder(n.getElement(), t);
            }
        }),
        (u.prototype.toString = function () {
          return "[Object GGroupEditor]";
        }),
        (e.exports = u));
    }