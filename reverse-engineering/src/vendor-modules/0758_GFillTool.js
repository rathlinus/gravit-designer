/**
 * chunk.vendor.js Module #758
 * Type: class
 * Name: GFillTool
 */

function (e, t, i) {
      var n = i(2),
        r = i(0),
        o = i(56),
        a = i(28),
        s = i(52),
        l = i(77),
        h = i(211),
        A = i(162),
        c = i(9),
        p = i(47);

      function u() {
        h.call(this);
      }
      (r.inherit(u, h),
        (u.prototype._transactionStarted = !1),
        (u.prototype.getCursor = function () {
          return s.Pipette;
        }),
        (u.prototype.activate = function (e, t) {
          (h.prototype.activate.call(this, e, t),
            t ||
              (e.addEventListener(l.Down, this._mouseDown, this),
              e.addEventListener(l.Drag, this._mouseFill, this),
              e.addEventListener(l.Release, this._mouseRelease, this)),
            (this._transactionStarted = !1),
            this._editor.setSelectionDetail(!0),
            this._editor.setSelectionEdit(!0));
        }),
        (u.prototype.deactivate = function (e, t) {
          (!t &&
            this._editor &&
            (this._editor.setSelectionDetail(!1),
            this._editor.setSelectionEdit(!1)),
            h.prototype.deactivate.call(this, e, t),
            e.removeEventListener(l.Down, this._mouseDown),
            e.removeEventListener(l.Drag, this._mouseFill),
            e.removeEventListener(l.Release, this._mouseRelease));
        }),
        (u.prototype.isActivatable = function (e) {
          var t = e ? e.getEditor() : null,
            i = t ? t.getIndividualSelection() : null,
            n = !1;
          if (i && i.length) {
            n = !0;
            for (var r = 0; r < i.length && n; ++r)
              i[r] instanceof A || (n = !1);
          }
          return n;
        }),
        (u.prototype._mouseDown = function (e) {
          ((this._transactionStarted = !1), this._mouseFill(e));
        }),
        (u.prototype._mouseRelease = function (e) {
          (this._mouseFill(e),
            this._transactionStarted &&
              (this._editor.commitTransaction(
                c.get(new p("GFillTool", "action.modify-fill")),
              ),
              (this._transactionStarted = !1)));
        }),
        (u.prototype._mouseFill = function (e) {
          this._editor.updateByMousePosition(
            e.client,
            this._view.getWorldTransform(this._scene),
            !1,
            this._view.getViewConfiguration(),
          );
          var t = this._editor.getIndividualSelection();
          if (t && t.length) {
            var i = this._scene.hitTest(
              e.client,
              this._view.getWorldTransform(this._scene),
              function (e) {
                return e.hasFlag(n.Flag.Selected) && e instanceof A;
              },
              !1,
              -1,
              0,
              !0,
              null,
              !1,
              !1,
              this._view.getViewConfiguration().multiPageView,
            );
            if (
              i &&
              1 == i.length &&
              i[0].data.hitRes.type == o.HitResult.Type.Fill
            ) {
              var r = i[0].data.facet;
              if (
                (this._transactionStarted ||
                  (this._editor.beginTransaction(),
                  (this._transactionStarted = !0)),
                r.setProperties(["cSt"], [!!this._fpt]),
                r.getPaintLayers().clearFillLayers(),
                this._fpt)
              )
                r.getPaintLayers().appendChild(
                  new a.FillPaintLayer(this._fpt, this._fop),
                );
              else {
                var s = r.getParent();
                (s instanceof n.MapContainer && (s = s.getParent()),
                  r.assignStyleFrom(s));
              }
            }
          }
        }),
        (u.prototype.getSelectionFillPattern = function () {
          var e = this._editor.getIndividualSelection();
          if (e && e.length)
            for (var t = 0; t < e.length; ++t)
              if (e[t] instanceof A) {
                var i = e[t].getPaintLayers().getFillLayers()[0];
                return i ? i.$_pt : null;
              }
          return null;
        }),
        (u.prototype.getSelectionFillOpacity = function () {
          var e = this._editor.getIndividualSelection();
          if (e && e.length)
            for (var t = 0; t < e.length; ++t)
              if (e[t] instanceof A) {
                var i = e[t].getPaintLayers().getFillLayers()[0];
                return i ? i.$_op : null;
              }
          return 1;
        }),
        (u.prototype.getFillPattern = function () {
          return this._fpt;
        }),
        (u.prototype.getFillOpacity = function () {
          return this._fop;
        }),
        (u.prototype.setFill = function (e, t) {
          ((this._fpt = e), (this._fop = t));
        }),
        (u.prototype.toString = function () {
          return "[Object GFillTool]";
        }),
        (e.exports = u));
    }