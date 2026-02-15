/**
 * Module 25
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
      var n = i(0),
        r = i(63),
        o = i(87),
        a = i(48),
        s = i(903);

      function l(e) {
        if (((this._vertices = []), e && e.rewindVertices(0)))
          for (var t = new a(); e.readVertex(t); )
            this.addVertex(t.command, t.x, t.y);
      }
      n.mix(l, [o, s]),
        (l.serialize = function (e) {
          var t = [];
          if (e.rewindVertices(0))
            for (var i = new a(); e.readVertex(i); )
              t.push(i.command, i.x, i.y);
          return t;
        }),
        (l.deserialize = function (e) {
          for (var t = new l(), i = 0; i < e.length; i += 3)
            t.addVertex(e[i], e[i + 1], e[i + 2]);
          return t;
        }),
        (l.prototype._index = 0),
        (l.prototype._vertices = null),
        (l.prototype.addVertex = function (e, t, i, n) {
          var o = new a();
          (o.command = e),
            (o.x = t),
            (o.y = i),
            n && r.transformVertex(o, n),
            this._vertices.push(o),
            (this._index = this._vertices.length + 1);
        }),
        (l.prototype.clearVertices = function () {
          this._vertices = [];
        }),
        (l.splitVertexSource = function (e, t) {
          var i,
            n = [],
            o = new a();
          for (t && (e = new r(e, t)), e.rewindVertices(0); e.readVertex(o); )
            o.command === a.Command.Move && n.push((i = new l())),
              i && i.addVertex(o.command, o.x, o.y);
          return 1 !== n.length || t || (n = [e]), n;
        }),
        (l.mergeVertexSources = function (e, t) {
          if (!(e instanceof Array)) return e;
          var i = e.length,
            n = new l();
          if (t) for (var o = 0; o < i; o++) n.appendVertices(new r(e[o], t));
          else for (o = 0; o < i; o++) n.appendVertices(e[o]);
          return n;
        }),
        (l.makeClockWise = function (e, t) {
          for (
            var i = l.splitVertexSource(e), n = [], r = 0;
            r < i.length;
            r++
          ) {
            var o = i[r];
            t || !o.isClockWise()
              ? ((o = l.clone(o, !0)), n.push(o))
              : n.push(o);
          }
          return l.mergeVertexSources(n);
        }),
        (l.clone = function (e, t) {
          var i = new a(),
            n = null;
          new a(), new a();
          e.rewindVertices(0);
          for (var r, o = [], s = null; e.readVertex(i); ) {
            if (t) {
              if (i.command === a.Command.Move) {
                if (n && n.command === a.Command.Close) {
                  for (var h = o.length - 1; h >= 0; h--)
                    if (o[h].command === a.Command.Move) {
                      o.splice(h + 1, 0, (r = new a())),
                        (r.command = a.Command.Close);
                      break;
                    }
                  h < 0 &&
                    (o.unshift((r = new a())), (r.command = a.Command.Close)),
                    o[o.length - 1].command === a.Command.Close &&
                      (o[o.length - 1].command = a.Command.Move);
                }
              } else if (n)
                o.push((r = new a())),
                  (r.command = i.command),
                  (r.x = n.x),
                  (r.y = n.y);
              else if (i.command !== a.Command.Move)
                throw new Error("Path doesn't start with moveTo!");
            } else
              o.push((r = new a())),
                (r.command = i.command),
                (r.x = i.x),
                (r.y = i.y);
            (n = i),
              i.command === a.Command.Move &&
                (((s = new a()).x = i.x), (s.y = i.y)),
              (i = new a());
          }
          if (t) {
            if (n) {
              if (n.command === a.Command.Close) {
                for (h = o.length - 1; h >= 0; h--)
                  if (o[h].command === a.Command.Move) {
                    o.splice(h + 1, 0, (r = new a())),
                      (r.command = a.Command.Close);
                    break;
                  }
                h < 0 &&
                  (o.unshift((r = new a())), (r.command = a.Command.Close)),
                  (r = o[o.length - 1]);
              } else o.push((r = new a())), (r.x = n.x), (r.y = n.y);
              r.command = a.Command.Move;
            }
            o.reverse();
          }
          var A = new l();
          if (t) {
            var c,
              p,
              u = o[0];
            if (u.command !== a.Command.Move)
              return (
                DEBUG && console.log("Line should start with moveTo"), null
              );
            A.addVertex(u.command, u.x, u.y);
            for (h = 0; h < o.length - 1; h++) {
              (c = (u =
                (u = o[h]).command == a.Command.Curve2
                  ? A._vertices[h - 2]
                  : u.command == a.Command.Curve
                  ? A._vertices[h - 1]
                  : A._vertices[h]).x),
                (p = u.y);
              var d = h < o.length - 1 ? o[h + 1] : null;
              if (d && d.command == a.Command.Curve2) {
                var g = o[h + 1],
                  f = o[h + 2],
                  m = o[h + 3];
                if (!(g && f && m))
                  return DEBUG && console.log("Wrong path."), null;
                (u.x = f.x),
                  (u.y = f.y),
                  A.addVertex(d.command, m.x, m.y),
                  A.addVertex(d.command, c, p),
                  A.addVertex(d.command, g.x, g.y),
                  (h += 2);
              } else if (d && d.command == a.Command.Curve) {
                (g = o[h + 1]), (f = o[h + 2]);
                if (!g || !f) return DEBUG && console.log("Wrong path."), null;
                (u.x = g.x),
                  (u.y = g.y),
                  A.addVertex(d.command, f.x, f.y),
                  A.addVertex(d.command, c, p),
                  (h += 1);
              } else d && A.addVertex(d.command, d.x, d.y);
            }
          } else
            for (h = 0; h < o.length; h++)
              (u = o[h]), A.addVertex(u.command, u.x, u.y);
          return A.getCount() !== o.length
            ? (DEBUG && console.log("Wrong path length"), null)
            : A;
        }),
        (l.prototype.getCount = function () {
          return this._vertices.length;
        }),
        (l.prototype.rewindVertices = function (e) {
          return (
            (e = e || 0) >= 0 &&
            e <= this._vertices.length &&
            ((this._index = e), !0)
          );
        }),
        (l.prototype.readVertex = function (e) {
          if (this._index >= 0 && this._index < this._vertices.length) {
            var t = this._vertices[this._index];
            return (
              (e.command = t.command),
              (e.x = t.x),
              (e.y = t.y),
              this._index++,
              !0
            );
          }
          return !1;
        }),
        (l.prototype.hasVertexForRead = function () {
          return this._index >= 0 && this._index < this._vertices.length;
        }),
        (l.prototype.toString = function () {
          return "[Object GVertexContainer]";
        }),
        (e.exports = l);
    }
