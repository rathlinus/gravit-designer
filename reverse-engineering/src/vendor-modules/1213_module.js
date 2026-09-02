/**
 * chunk.vendor.js Module #1213
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(11),
        o = i(233),
        a = i(264),
        s = i(70),
        l = i(28),
        h = i(17),
        A = i(87),
        c = i(122),
        p = i(2),
        u = i(796),
        d = i(795),
        g = i(439),
        f = [a.OR, a.SUB, a.AND, a.XOR];

      function m() {
        u.apply(this, arguments);
      }
      (n.inherit(m, u),
        (m.prototype.parse = function () {
          var e = this._data.style,
            t = this._data.isVisible,
            i = this._data.isLocked,
            n = this._data.name,
            o = this._data.resizingConstraint,
            a = this._data.windingRule;
          (this._data.layers.forEach(
            function (s) {
              this.isCompoundShape() ||
                ((s.style = r.extend(s.style || {}, e)),
                (s.isVisible = t),
                (s.isLocked = i),
                (s.name = n),
                (s.resizingConstraint = o),
                (s.windingRule = a));
            }.bind(this),
          ),
            u.prototype.parse.apply(this, arguments));
        }),
        (m.prototype.isCompoundShape = function () {
          return this._data.layers.length > 1;
        }),
        (m.prototype._clip = function (e) {
          if (this.isCompoundShape()) u.prototype._clip.call(this, e);
          else {
            var t = this.getChildren();
            t.length && t[0]._clip(e);
          }
        }),
        (m.prototype.appendTo = function (e, t) {
          var i = this._getTransformation();
          if (this.isCompoundShape()) {
            var n = function (e) {
                (e._beginBlockCompositeEvents(!0, !0),
                  e._beginBlockChanges([
                    p._Change.BeforeChildRemove,
                    p._Change.AfterChildRemove,
                    p._Change.BeforeChildInsert,
                    p._Change.AfterChildInsert,
                  ]));
              },
              o = function (e) {
                (e._endBlockCompositeEvents(!0, !0),
                  e._endBlockChanges([
                    p._Change.BeforeChildRemove,
                    p._Change.AfterChildRemove,
                    p._Change.BeforeChildInsert,
                    p._Change.AfterChildInsert,
                  ]));
              },
              a = this.getChildren()
                .slice()
                .filter(function (e) {
                  return e instanceof d && !!e.getNode();
                }),
              s = a.map(function (e) {
                return e.getNode();
              }),
              l = a.map(function (e) {
                return e._data.booleanOperation;
              }),
              h = !1,
              A = null;
            s.forEach(function (e, t) {
              var i = l[t];
              ((void 0 !== i && -1 !== i) || (i = 3),
                A ? A !== i && (h = !0) : (A = i));
            });
            var c = null;
            if (h)
              for (var m = 0; m < s.length; m++) {
                var y = s[m],
                  _ = c,
                  v = l[m];
                if (!_ && m < s.length - 1) {
                  ((_ = s[++m]), (v = l[m]));
                  var b = y;
                  ((y = _), (_ = b));
                }
                (void 0 !== v && -1 !== v) || (v = 3);
                var C = f[v];
                if (null !== C)
                  try {
                    (n(_), n(y), (c = this._merge(C, [_, y])));
                  } finally {
                    (o(_), o(y));
                  }
                else console.warn("Unsupported boolean operation: #" + v);
              }
            else c = this._merge(f[l.shift()], s);
            c.setProperty("evenodd", this.isEvenOdd());
            var w = r.extend({}, this._data);
            ((w.noTransform = !0),
              delete w.layers,
              new g(w, this._file, null, c).parse(),
              c.transform(i),
              e.appendChild(c));
          } else u.prototype.appendTo.call(this, e, t);
        }),
        (m.prototype._postAppendTo = function () {
          this.isCompoundShape() || this.transform(this._getTransformation());
        }),
        (m.prototype._getValidItems = function (e) {
          var t = [];
          if (e instanceof c || e instanceof o)
            for (var i = e.getFirstChild(); null !== i; i = i.getNext())
              t = t.concat(this._getValidItems(i));
          else e.hasMixin(A) && e.validateInsertion(new o()) && t.push(e);
          return t;
        }),
        (m.prototype._merge = function (e, t) {
          var i,
            n = new o(),
            r = [],
            p = !0;
          if (
            (t.forEach(
              function (e) {
                ((r = r.concat(this._getValidItems(e))),
                  e.hasMixin(A) &&
                  e.validateInsertion(n) &&
                  e.getParent() instanceof o
                    ? i
                      ? i !== e.getParent() && (p = !1)
                      : (i = e.getParent())
                    : (p = !1));
              }.bind(this),
            ),
            r.length > 1)
          ) {
            var u = r[r.length - 1],
              d = u.getParent(),
              g = u.getNext();
            if (p)
              for (; d instanceof c; ) ((g = d.getNext()), (d = d.getParent()));
            else
              for (; d instanceof c || d instanceof o; )
                ((g = d.getNext()), (d = d.getParent()));
            d && d.insertChild(n, g);
            try {
              if (
                (n.beginUpdate(),
                n.setProperty("evenodd", r[0].getProperty("evenodd")),
                r[0] instanceof s)
              ) {
                var f = r[0];
                if (
                  !f.getPaintLayers().getFillLayers(!0).length &&
                  f.getProperty("_fc")
                ) {
                  n.getPaintLayers().clearFillLayers();
                  var m =
                    "string" == typeof f.getProperty("_fc")
                      ? h.fromCSSColor(f.getProperty("_fc"))
                      : f.getProperty("_fc");
                  n.getPaintLayers().appendChild(new l.FillPaintLayer(m));
                }
              }
              var y = [],
                _ = [];
              ((i = null),
                r.forEach(function (e) {
                  e.getParent() instanceof o
                    ? (y.push(e), i || (i = e.getParent()))
                    : _.push(e);
                }),
                (r = y.concat(_)).forEach(function (t) {
                  var r,
                    s = t.getParent();
                  for (
                    (s && i && s === i) ||
                      (s instanceof o && e === a.OR) ||
                      t.setProperty("bool", e),
                      s && s.removeChild(t);
                    (s instanceof c || s instanceof o) && !s.getFirstChild();
                  )
                    ((r = s), (s = s.getParent()) && s.removeChild(r));
                  n.appendChild(t);
                }));
            } finally {
              n.endUpdate();
            }
          }
          return n;
        }),
        (e.exports = m));
    }