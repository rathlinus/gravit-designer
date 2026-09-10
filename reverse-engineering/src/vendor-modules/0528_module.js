/**
 * chunk.vendor.js Module #528
 * Type: unknown
 */

function (e, t, i) {
      var n = i(48),
        r = i(54),
        o = i(5),
        a = i(11);

      function s(e, t, i, n) {
        (t && t.length && i && i.length
          ? ((this._annotationsName = e),
            this._initAnnotationsFuncs(t),
            this._initParametersFuncs(i),
            this._parametersFuncs &&
              this._parametersFuncs.length &&
              ((this._initAnnotationsList = a.extend(!0, [], t)),
              (this._initParametersList = a.extend(!0, [], i))))
          : ((this._annotationsName = null),
            (this._annotationsFuncs = null),
            (this._parametersFuncs = null)),
          this._initVertices(n),
          (this._initVerticesList = a.extend(!0, [], n)));
      }
      ((s.CoordType = {
        Direct: 1,
        Expression: 2,
      }),
        (s.SUPPORTED_MATH_FUNCS =
          "abs|acos|asin|atan|atan2|ceil|cos|exp|floor|log|round|sign|sin|sqrt|tan|trunc"),
        (s.SUPPORTED_MATH_FUNCS2 = "min|max"),
        (s.serialize = function (e) {
          var t = [e._annotationsName, e._initVerticesList];
          return (
            e._initAnnotationsList &&
              e._initParametersList &&
              t.push(e._initAnnotationsList, e._initParametersList),
            JSON.stringify(t, null, null)
          );
        }),
        (s.deserialize = function (e) {
          var t = null;
          if (e) {
            var i = JSON.parse(e);
            if (i && i instanceof Array && i.length > 1) {
              var n = i[0],
                r = i[1],
                o = null,
                a = null;
              (4 == i.length && ((o = i[2]), (a = i[3])),
                (t = new s(n, o, a, r)));
            }
          }
          return t;
        }),
        (s.prototype._annotationsName = null),
        (s.prototype._annotationsFuncs = null),
        (s.prototype._initAnnotationsList = null),
        (s.prototype._parametersFuncs = null),
        (s.prototype._initParametersList = null),
        (s.prototype._vertices = null),
        (s.prototype._initVerticesList = null),
        (s.prototype.getVertices = function (e) {
          if (
            (this._parametersFuncs &&
              (!e || e.length != this._annotationsFuncs.length)) ||
            !this._vertices
          )
            return null;
          var t = new r();
          try {
            var i = null;
            if (this._parametersFuncs) {
              for (var a, l = 0; l < e.length; ++l) {
                var h = this._annotationsFuncs[l].x(e[l].getX(), e[l].getY()),
                  A = this._annotationsFuncs[l].y(e[l].getX(), e[l].getY());
                0 == l ? (a = [new o(h, A)]) : a.push(new o(h, A));
              }
              for (l = 0; l < this._parametersFuncs.length; ++l) {
                var c = this._parametersFuncs[l].func(a);
                0 == l ? (i = [c]) : i.push(c);
              }
            }
            for (l = 0; l < this._vertices.length; ++l) {
              var p = this._vertices[l],
                u = p.c;
              if (u != n.Command.Close) {
                var d = p.tx == s.CoordType.Direct ? p.x : p.x.apply(null, i),
                  g = p.ty == s.CoordType.Direct ? p.y : p.y.apply(null, i);
                t.addVertex(u, d, g);
              } else t.addVertex(u, null, null);
            }
          } catch (e) {
            t = null;
          }
          return t;
        }),
        (s.prototype.getAnnotationPosition = function (e, t) {
          var i = null;
          if (this._annotationsFuncs && this._annotationsFuncs.length > e) {
            var n = this._annotationsFuncs[e].x(t.getX(), t.getY()),
              r = this._annotationsFuncs[e].y(t.getX(), t.getY());
            i = new o(n, r);
          }
          return i;
        }),
        (s.prototype._initAnnotationsFuncs = function (e) {
          if (e && e.length)
            for (var t = ["x", "y"], i = 0; i < e.length; ++i) {
              var n = e[i],
                r = null,
                o = null;
              if (
                ((r =
                  "number" == typeof n.X
                    ? function (e, t, i) {
                        return e;
                      }.bind(null, n.X)
                    : this._getExprFunction(n.X, t, n.minX, n.maxX)),
                (o =
                  "number" == typeof n.Y
                    ? function (e, t, i) {
                        return e;
                      }.bind(null, n.Y)
                    : this._getExprFunction(n.Y, t, n.minY, n.maxY)),
                null === r || null === o)
              )
                return void (this._annotationsFuncs = null);
              var a = {
                x: r,
                y: o,
              };
              this._annotationsFuncs
                ? this._annotationsFuncs.push(a)
                : (this._annotationsFuncs = [a]);
            }
        }),
        (s.prototype.isSecure = function (e, t) {
          var i = e.replace(/\.X/g, "");
          if (((i = (i = i.replace(/\.Y/g, "")).replace(/\[[0-9]+\]/g, "")), t))
            for (var n = 0; n < t.length; ++n)
              i = i.replace(new RegExp(t[n], "g"), "0");
          i = i.replace(/\d+\.*\d*/g, "0");
          var r = "(?:" + s.SUPPORTED_MATH_FUNCS + ")\\(";
          i = i.replace(new RegExp(r, "g"), "a(");
          for (n = 0; n < 3; ++n)
            ((r = "(?:" + s.SUPPORTED_MATH_FUNCS2 + ")\\(0, *0"),
              (i = (i = (i = i.replace(new RegExp(r, "g"), "a(0")).replace(
                /(?:0 *[\+\-\/\*]+ *)*0/g,
                "0",
              )).replace(/a?\( *\-? *0 *\)/g, "0")));
          return "0" == i || "-0" == i;
        }),
        (s.prototype._prepareExpression = function (e) {
          var t = e || null;
          if (t) {
            t = (t = t.replace(/\.X/g, ".getX()")).replace(/\.Y/g, ".getY()");
            var i = "(" + s.SUPPORTED_MATH_FUNCS + ")\\(";
            ((t = t.replace(new RegExp(i, "g"), "Math.$1(")),
              (i = "(" + s.SUPPORTED_MATH_FUNCS2 + ")\\("),
              (t = t.replace(new RegExp(i, "g"), "Math.$1(")));
          }
          return t;
        }),
        (s.prototype._initParametersFuncs = function (e) {
          if (
            ((this._parametersFuncs = null),
            e &&
              e.length &&
              this._annotationsFuncs &&
              this._annotationsFuncs.length)
          )
            for (var t = [this._annotationsName], i = 0; i < e.length; ++i) {
              var n = e[i];
              if (!/^[a-z]*$/i.test(n.name))
                return void (this._parametersFuncs = null);
              var r = this._getExprFunction(n.expression, t);
              if (null === r) return void (this._parametersFuncs = null);
              var o = {
                name: n.name,
                func: r,
              };
              this._parametersFuncs
                ? this._parametersFuncs.push(o)
                : (this._parametersFuncs = [o]);
            }
        }),
        (s.prototype._initVertices = function (e) {
          if (e) {
            var t = 0;
            for (this._vertices = []; t < e.length; ) {
              var i = e[t];
              switch (i) {
                case n.Command.Move:
                case n.Command.Line:
                case n.Command.Curve:
                case n.Command.Curve2:
                  if (t + 4 < e.length) {
                    var r = e[t + 1],
                      o = e[t + 2],
                      a = e[t + 3],
                      s = e[t + 4],
                      l = this._getCoordVal(o, r),
                      h = this._getCoordVal(s, a);
                    null !== l &&
                      null !== h &&
                      this._vertices.push({
                        c: i,
                        tx: r,
                        x: l,
                        ty: a,
                        y: h,
                      });
                  }
                  t += 5;
                  break;
                case n.Command.Close:
                  (this._vertices.push({
                    c: i,
                    tx: null,
                    x: null,
                    ty: null,
                    y: null,
                  }),
                    ++t);
                  break;
                default:
                  ++t;
              }
            }
          }
        }),
        (s.prototype._getCoordVal = function (e, t) {
          var i = null;
          if (t == s.CoordType.Direct && "number" == typeof e) i = e;
          else if (
            t == s.CoordType.Expression &&
            this._parametersFuncs &&
            this._parametersFuncs.length
          ) {
            for (var n = [], r = 0; r < this._parametersFuncs.length; ++r)
              n.push(this._parametersFuncs[r].name);
            i = this._getExprFunction(e, n);
          }
          return i;
        }),
        (s.prototype._getExprFunction = function (e, t, i, n) {
          var r = null;
          if (e && t && t.length && this.isSecure(e, t)) {
            t = t.slice();
            var o = "",
              a = "",
              s = "",
              l = "";
            (null !== i &&
              "number" == typeof i &&
              ((o = "Math.max(" + i + ", ( "), (a = " ))")),
              null !== n &&
                "number" == typeof n &&
                ((s = "Math.min(" + n + ", ( "), (l = " ))")));
            var h =
              "return " + o + s + this._prepareExpression(e) + l + a + ";";
            (t.push(h), (r = Function.apply(null, t)));
          }
          return r;
        }),
        (e.exports = s));
    }