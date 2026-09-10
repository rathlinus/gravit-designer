/**
 * chunk.vendor.js Module #1391
 * Type: unknown
 */

function (e, t, i) {
      var n = i(179),
        r = i(12),
        o = i(147),
        a = i(60),
        s = i(214),
        l = i(17),
        h = i(113),
        A = i(5),
        c = i(48),
        p = i(87),
        u = i(233),
        d = i(264),
        g = i(14),
        f = i(28),
        m = i(158),
        y = i(139),
        _ = i(54),
        v = i(7),
        b = i(122),
        C = i(73),
        w = (i(284), i(45)),
        E = i(70),
        B = i(11),
        x = i(95),
        P = i(69),
        S = i(22),
        T = i(6),
        I = i(215),
        F = i(1392),
        R = i(416),
        D = i(108),
        k = i(281),
        G = i(280),
        Q = i(367),
        M = i(249),
        N = i(321),
        U = i(2),
        V = i(1202),
        O = i(83),
        L = i(438),
        Y = i(132),
        X = i(0);

      function H(e, t, i) {
        return e + "_" + t + "_" + i;
      }
      e.exports = function (e, t) {
        var i = {
          opts: e,
          jobs: 0,
          jobCallback: null,
        };
        if (
          ((i.fontManager = t),
          (i.fontProvider = {
            fontsToResolve: 0,
            fontProvider: e.fontProvider,
            fontCallbackMap: {},
            queryFirst: function (e, t) {
              0 == this.fontsToResolve && i.beginJob();
              var n = this.fontCallbackMap[H(e)];
              (n ||
                (this.fontsToResolve++, (this.fontCallbackMap[H(e)] = n = [])),
                n.push(t),
                1 === n.length &&
                  this.fontProvider.queryFirst(
                    e,
                    function () {
                      this.fontsToResolve--;
                      var t = this.fontCallbackMap[H(e)];
                      if ((delete this.fontCallbackMap[H(e)], t)) {
                        var n = arguments;
                        t.forEach(function (e) {
                          e.apply(null, n);
                        });
                      }
                      this.fontsToResolve || i.endJob();
                    }.bind(this),
                  ));
            },
          }),
          (i.waitFor = function (e) {
            this.hasJobs() ? (this.jobCallback = e) : e();
          }),
          (i.beginJob = function () {
            this.jobs++;
          }),
          (i.endJob = function () {
            (this.jobs--, !this.jobs && this.jobCallback && this.jobCallback());
          }),
          (i.hasJobs = function () {
            return !!i.jobs;
          }),
          t)
        )
          try {
            new Q().initialize(0, 0, t);
          } catch (e) {
            console.log("WARN: Could not load GTLCore");
          }
        ((i._fontUnavailableEvent = function (e) {
          this._resolvedFont(e.font, this.fontManager.getDefaultFont());
        }),
          (i._fontAvailableEvent = function (e) {
            this._resolvedFont(e.font);
          }),
          (i._resolvedFont = function (e, t) {
            var n = H(e.getFamily(), e.getStyle(), e.getWeight());
            try {
              var r = i.FontsToResolve[n];
              r &&
                B.each(r, function (i, n) {
                  n(t || e);
                });
            } finally {
              delete this.FontsToResolve[n];
            }
            this.hasFontsToResolve() ||
              (this.endJob(),
              this.fontManager.removeEventListener(
                k.FontAvailableEvent,
                this._fontAvailableEvent,
                this,
              ),
              this.fontManager.removeEventListener(
                k.FontUnavailableEvent,
                this._fontUnavailableEvent,
                this,
              ));
          }),
          (i.hasFontsToResolve = function () {
            return !!Object.keys(i.FontsToResolve).length;
          }),
          (i._hasFontListener = !1),
          (i.MAX_VIRTUAL_PIXELS = 3e4),
          (i.log = function (e) {}),
          1 == i.opts.log &&
            "undefined" != typeof console &&
            (i.log = function (e) {
              console.log(e);
            }),
          (i.init = function () {
            var e = 0;
            ((i.UniqueId = function () {
              return "canvg" + ++e;
            }),
              (i.Definitions = {}),
              (i.Styles = {}),
              (i.Images = []),
              (i.References = {}),
              (i.FontsToResolve = {}),
              (i.FontsToSearch = {}),
              (i.ViewPort = new (function () {
                ((this.viewPorts = []),
                  (this.Clear = function () {
                    this.viewPorts = [];
                  }),
                  (this.SetCurrent = function (e, t) {
                    this.viewPorts.push({
                      width: e,
                      height: t,
                    });
                  }),
                  (this.RemoveCurrent = function () {
                    this.viewPorts.pop();
                  }),
                  (this.Current = function () {
                    return this.viewPorts[this.viewPorts.length - 1];
                  }),
                  (this.width = function () {
                    return this.Current().width;
                  }),
                  (this.height = function () {
                    return this.Current().height;
                  }),
                  (this.ComputeSize = function (e) {
                    return null != e && "number" == typeof e
                      ? e
                      : "x" == e
                        ? this.width()
                        : "y" == e
                          ? this.height()
                          : Math.sqrt(
                              Math.pow(this.width(), 2) +
                                Math.pow(this.height(), 2),
                            ) / Math.sqrt(2);
                  }));
              })()));
          }),
          i.init(),
          (i.addReference = function (e, t) {
            (this.References[e] || (this.References[e] = []),
              this.References[e].push(t));
          }),
          (i.isReferenced = function (e) {
            for (var t = Object.keys(this.References), i = 0; i < t.length; i++)
              if (-1 !== this.References[t[i]].indexOf(e)) return !0;
            return !1;
          }),
          (i.addFontToResolve = function (e, t) {
            this._hasFontListener ||
              (this.beginJob(),
              (this._hasFontListener = !0),
              this.fontManager.addEventListener(
                k.FontAvailableEvent,
                this._fontAvailableEvent,
                this,
              ),
              this.fontManager.addEventListener(
                k.FontUnavailableEvent,
                this._fontUnavailableEvent,
                this,
              ));
            var i = H(e.getFamily(), e.getStyle(), e.getWeight());
            (this.FontsToResolve[i] || (this.FontsToResolve[i] = []),
              this.FontsToResolve[i].push(t));
          }),
          (i.ImagesLoaded = function () {
            for (var e = 0; e < i.Images.length; e++)
              if (!i.Images[e].loaded) return !1;
            return !0;
          }),
          (i.trim = function (e) {
            return e.replace(/^\s+|\s+$/g, "");
          }),
          (i.compressSpaces = function (e) {
            return e.replace(/[\s\r\t\n]+/gm, " ");
          }),
          (i.ajax = function (e) {
            var t = new XMLHttpRequest();
            return (t.open("GET", e, !1), t.send(null), t.responseText);
          }),
          (i.parseXml = function (e) {
            return new DOMParser().parseFromString(e, "text/xml");
          }),
          (i.getColor = function (e) {
            var t = l.parseCSSColor(e),
              i = null;
            return (t && (i = [new l(t.slice(0, 3)), t[3]]), i);
          }),
          (i.Property = function (e, t) {
            ((this.name = e), (this.value = t));
          }),
          (i.Property.prototype.getValue = function () {
            return this.value;
          }),
          (i.Property.prototype.hasValue = function () {
            return null != this.value && "" !== this.value;
          }),
          (i.Property.prototype.numValue = function () {
            if (!this.hasValue()) return 0;
            var e = parseFloat(this.value);
            return ((this.value + "").match(/%$/) && (e /= 100), e);
          }),
          (i.Property.prototype.valueOrDefault = function (e) {
            return this.hasValue() ? this.value : e;
          }),
          (i.Property.prototype.numValueOrDefault = function (e) {
            return this.hasValue() ? this.numValue() : e;
          }),
          (i.Property.prototype.addOpacity = function (e) {
            var t = this.value;
            if (
              null != e.value &&
              "" != e.value &&
              "string" == typeof this.value
            ) {
              var n = this.value ? l.parseCSSColor(this.value) : null;
              n &&
                (t =
                  "rgba(" +
                  n[0] +
                  ", " +
                  n[1] +
                  ", " +
                  n[2] +
                  ", " +
                  e.numValue() +
                  ")");
            }
            return new i.Property(this.name, t);
          }),
          (i.Property.prototype.getDefinition = function () {
            var e = this.value.match(/#([^\)'"]+)/);
            return (e && (e = e[1]), e || (e = this.value), i.Definitions[e]);
          }),
          (i.Property.prototype.isUrlDefinition = function () {
            return 0 == this.value.indexOf("url(");
          }),
          (i.Property.prototype.getFillStyleDefinition = function (e, t) {
            var n = this.getDefinition();
            return null != n && n.createGradient
              ? n.createGradient(i.ctx, e, t)
              : null != n && n.createPattern
                ? n.createPattern(i.ctx, e, t)
                : Promise.resolve({
                    color: null,
                    opacity: null,
                  });
          }),
          (i.Property.prototype.getDPI = function (e) {
            return Y.DPI;
          }),
          (i.Property.prototype.getEM = function (e) {
            var t = 12,
              n = new i.Property("fontSize", i.Font.Parse(i.ctx.font).fontSize);
            return (n.hasValue() && (t = n.toPixels(e)), t);
          }),
          (i.Property.prototype.getUnits = function () {
            return (this.value + "").replace(/[0-9\.\-]/g, "");
          }),
          (i.Property.prototype.toPixels = function (e, t) {
            if (!this.hasValue()) return 0;
            var n = this.value + "";
            if (n.match(/em$/)) return this.numValue() * this.getEM(e);
            if (n.match(/ex$/)) return (this.numValue() * this.getEM(e)) / 2;
            if (n.match(/px$/)) return this.numValue();
            if (n.match(/pt$/))
              return this.numValue() * this.getDPI(e) * (1 / 72);
            if (n.match(/pc$/)) return 15 * this.numValue();
            if (n.match(/cm$/))
              return (this.numValue() * this.getDPI(e)) / 2.54;
            if (n.match(/mm$/))
              return (this.numValue() * this.getDPI(e)) / 25.4;
            if (n.match(/in$/)) return this.numValue() * this.getDPI(e);
            if (n.match(/%$/))
              return this.numValue() * i.ViewPort.ComputeSize(e);
            var r = this.numValue();
            return t && r < 1 ? r * i.ViewPort.ComputeSize(e) : r;
          }),
          (i.Property.prototype.toMilliseconds = function () {
            if (!this.hasValue()) return 0;
            var e = this.value + "";
            return e.match(/s$/)
              ? 1e3 * this.numValue()
              : (e.match(/ms$/), this.numValue());
          }),
          (i.Property.prototype.toRadians = function () {
            if (!this.hasValue()) return 0;
            var e = this.value + "";
            return e.match(/deg$/)
              ? this.numValue() * (Math.PI / 180)
              : e.match(/grad$/)
                ? this.numValue() * (Math.PI / 200)
                : e.match(/rad$/)
                  ? this.numValue()
                  : this.numValue() * (Math.PI / 180);
          }));
        var W = {
          baseline: "alphabetic",
          "before-edge": "top",
          "text-before-edge": "top",
          middle: "middle",
          central: "middle",
          "after-edge": "bottom",
          "text-after-edge": "bottom",
          ideographic: "ideographic",
          alphabetic: "alphabetic",
          hanging: "hanging",
          mathematical: "alphabetic",
        };
        return (
          (i.Property.prototype.toTextBaseline = function () {
            return this.hasValue() ? W[this.value] : null;
          }),
          (i.Font = new (function () {
            ((this.Styles = "normal|italic|oblique|inherit"),
              (this.Variants = "normal|small-caps|inherit"),
              (this.Weights =
                "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit"),
              (this.CreateFont = function (e, t, n, r, o, a) {
                var s =
                  null != a
                    ? this.Parse(a)
                    : this.CreateFont("", "", "", "", "", i.ctx.font);
                return {
                  fontFamily: o || s.fontFamily,
                  fontSize: r || s.fontSize,
                  fontStyle: e || s.fontStyle,
                  fontWeight: n || s.fontWeight,
                  fontVariant: t || s.fontVariant,
                  toString: function () {
                    return [
                      this.fontStyle,
                      this.fontVariant,
                      this.fontWeight,
                      this.fontSize,
                      this.fontFamily,
                    ].join(" ");
                  },
                };
              }));
            var e = this;
            this.Parse = function (t) {
              for (
                var n = {},
                  r = i.trim(i.compressSpaces(t || "")).split(" "),
                  o = {
                    fontSize: !1,
                    fontStyle: !1,
                    fontWeight: !1,
                    fontVariant: !1,
                  },
                  a = "",
                  s = 0;
                s < r.length;
                s++
              )
                o.fontStyle || -1 == e.Styles.indexOf(r[s])
                  ? o.fontVariant || -1 == e.Variants.indexOf(r[s])
                    ? o.fontWeight || -1 == e.Weights.indexOf(r[s])
                      ? o.fontSize
                        ? "inherit" != r[s] && (a += r[s])
                        : ("inherit" != r[s] &&
                            (n.fontSize = r[s].split("/")[0]),
                          (o.fontStyle =
                            o.fontVariant =
                            o.fontWeight =
                            o.fontSize =
                              !0))
                      : ("inherit" != r[s] && (n.fontWeight = r[s]),
                        (o.fontStyle = o.fontVariant = o.fontWeight = !0))
                    : ("inherit" != r[s] && (n.fontVariant = r[s]),
                      (o.fontStyle = o.fontVariant = !0))
                  : ("inherit" != r[s] && (n.fontStyle = r[s]),
                    (o.fontStyle = !0));
              return ("" != a && (n.fontFamily = a), n);
            };
          })()),
          (i.Rect = function (e, t, i, n) {
            ((this._x0 = void 0 !== e ? e : 1 / 0),
              (this._y0 = void 0 !== t ? t : 1 / 0),
              (this._x1 = void 0 !== i ? e + i : Number.NEGATIVE_INFINITY),
              (this._y1 = void 0 !== n ? t + n : Number.NEGATIVE_INFINITY));
          }),
          (i.Rect.prototype.width = function () {
            return this._x1 - this._x0;
          }),
          (i.Rect.prototype.height = function () {
            return this._y1 - this._y0;
          }),
          (i.Rect.prototype.x = function () {
            return this._x0;
          }),
          (i.Rect.prototype.y = function () {
            return this._y0;
          }),
          (i.Rect.prototype.expand = function (e) {
            (e.x < this._x0 && (this._x0 = e.x),
              e.x > this._x1 && (this._x1 = e.x),
              e.y < this._y0 && (this._y0 = e.y),
              e.y > this._y1 && (this._y1 = e.x));
          }),
          (i.ToNumberArray = function (e) {
            for (
              var t = i
                  .trim(i.compressSpaces((e || "").replace(/,/g, " ")))
                  .split(" "),
                n = 0;
              n < t.length;
              n++
            )
              t[n] = parseFloat(t[n]);
            return t;
          }),
          (i.Point = function (e, t) {
            ((this.x = e), (this.y = t));
          }),
          (i.Point.prototype.angleTo = function (e) {
            return Math.atan2(e.y - this.y, e.x - this.x);
          }),
          (i.Point.prototype.applyTransform = function (e) {
            var t = this.x * e[0] + this.y * e[2] + e[4],
              i = this.x * e[1] + this.y * e[3] + e[5];
            ((this.x = t), (this.y = i));
          }),
          (i.CreatePoint = function (e) {
            var t = i.ToNumberArray(e);
            return new i.Point(t[0], t[1]);
          }),
          (i.CreatePath = function (e) {
            for (
              var t = i.ToNumberArray(e), n = [], r = 0;
              r < t.length;
              r += 2
            )
              n.push(new i.Point(t[r], t[r + 1]));
            return n;
          }),
          (i.Transform = function (e) {
            var t = this;
            ((this.Type = {}),
              (this.Type.translate = function (e) {
                ((this.p = i.CreatePoint(e)),
                  (this.apply = function (e) {
                    e.transform = e.transform.preMultiplied(
                      new v().translated(this.p.x || 0, this.p.y || 0),
                    );
                  }),
                  (this.unapply = function (e) {
                    e.transform = e.transform.preMultiplied(
                      new v().translated(
                        -1 * this.p.x || 0,
                        -1 * this.p.y || 0,
                      ),
                    );
                  }),
                  (this.applyToPoint = function (e) {
                    e.applyTransform([
                      1,
                      0,
                      0,
                      1,
                      this.p.x || 0,
                      this.p.y || 0,
                    ]);
                  }));
              }),
              (this.Type.rotate = function (e) {
                var t = i.ToNumberArray(e);
                ((this.angle = new i.Property("angle", t[0])),
                  (this.cx = t[1] || 0),
                  (this.cy = t[2] || 0),
                  (this.apply = function (e) {
                    e.transform = e.transform.preMultiplied(
                      new v()
                        .translated(this.cx, this.cy)
                        .preMultiplied(new v().rotated(this.angle.toRadians()))
                        .preMultiplied(new v().translated(-this.cx, -this.cy)),
                    );
                  }),
                  (this.unapply = function (e) {
                    e.transform = e.transform.preMultiplied(
                      new v()
                        .translated(this.cx, this.cy)
                        .preMultiplied(
                          new v().rotated(-1 * this.angle.toRadians()),
                        )
                        .preMultiplied(new v().translated(-this.cx, -this.cy)),
                    );
                  }),
                  (this.applyToPoint = function (e) {
                    var t = this.angle.toRadians();
                    (e.applyTransform([
                      1,
                      0,
                      0,
                      1,
                      this.p.x || 0,
                      this.p.y || 0,
                    ]),
                      e.applyTransform([
                        Math.cos(t),
                        Math.sin(t),
                        -Math.sin(t),
                        Math.cos(t),
                        0,
                        0,
                      ]),
                      e.applyTransform([
                        1,
                        0,
                        0,
                        1,
                        -this.p.x || 0,
                        -this.p.y || 0,
                      ]));
                  }));
              }),
              (this.Type.scale = function (e) {
                ((this.p = i.CreatePoint(e)),
                  (this.apply = function (e) {
                    e.transform = e.transform.preMultiplied(
                      new v().scaled(this.p.x || 1, this.p.y || this.p.x || 1),
                    );
                  }),
                  (this.unapply = function (e) {
                    e.transform = e.transform.preMultiplied(
                      new v().scaled(
                        1 / this.p.x || 1,
                        1 / this.p.y || this.p.x || 1,
                      ),
                    );
                  }),
                  (this.applyToPoint = function (e) {
                    e.applyTransform([
                      this.p.x || 0,
                      0,
                      0,
                      this.p.y || 0,
                      0,
                      0,
                    ]);
                  }));
              }),
              (this.Type.matrix = function (e) {
                ((this.m = i.ToNumberArray(e)),
                  (this.apply = function (e) {
                    e.transform = e.transform.multiplied(
                      new v(
                        this.m[0],
                        this.m[1],
                        this.m[2],
                        this.m[3],
                        this.m[4],
                        this.m[5],
                      ),
                    );
                  }),
                  (this.unapply = function (e) {
                    var t = this.m[0],
                      i = this.m[2],
                      n = this.m[4],
                      r = this.m[1],
                      o = this.m[3],
                      a = this.m[5],
                      s =
                        1 /
                        (t * (1 * o - 0 * a) -
                          i * (1 * r - 0 * a) +
                          n * (0 * r - 0 * o));
                    e.transform = e.transform.multiplied(
                      new v(
                        s * (1 * o - 0 * a),
                        s * (0 * a - 1 * r),
                        s * (0 * n - 1 * i),
                        s * (1 * t - 0 * n),
                        s * (i * a - n * o),
                        s * (n * r - t * a),
                      ),
                    );
                  }),
                  (this.applyToPoint = function (e) {
                    e.applyTransform(this.m);
                  }));
              }),
              (this.Type.SkewBase = function (e) {
                ((this.base = t.Type.matrix),
                  this.base(e),
                  (this.angle = new i.Property("angle", e)));
              }),
              (this.Type.SkewBase.prototype = new this.Type.matrix()),
              (this.Type.skewX = function (e) {
                ((this.base = t.Type.SkewBase),
                  this.base(e),
                  (this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0]));
              }),
              (this.Type.skewX.prototype = new this.Type.SkewBase()),
              (this.Type.skewY = function (e) {
                ((this.base = t.Type.SkewBase),
                  this.base(e),
                  (this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0]));
              }),
              (this.Type.skewY.prototype = new this.Type.SkewBase()),
              (this.transforms = []),
              (this.apply = function (e) {
                for (var t = 0; t < this.transforms.length; t++)
                  this.transforms[t].apply(e);
              }),
              (this.unapply = function (e) {
                for (var t = this.transforms.length - 1; t >= 0; t--)
                  this.transforms[t].unapply(e);
              }),
              (this.applyToPoint = function (e) {
                for (var t = 0; t < this.transforms.length; t++)
                  this.transforms[t].applyToPoint(e);
              }));
            for (
              var n = i
                  .trim(i.compressSpaces(e))
                  .replace(/\)([a-zA-Z])/g, ") $1")
                  .replace(/\)(\s?,\s?)/g, ") ")
                  .split(/\s(?=[a-z])/),
                r = 0;
              r < n.length;
              r++
            ) {
              var o = i.trim(n[r].split("(")[0]),
                a = n[r].split("(")[1].replace(")", ""),
                s = new this.Type[o](a);
              ((s.type = o), this.transforms.push(s));
            }
          }),
          (i.AspectRatio = function (e, t, n, r, o, a, s, l, h, A) {
            var c =
                (t = (t = i.compressSpaces(t)).replace(/^defer\s/, "")).split(
                  " ",
                )[0] || "xMidYMid",
              p = t.split(" ")[1] || "meet",
              u = n / r,
              d = o / a,
              g = Math.min(u, d),
              f = Math.max(u, d);
            ("meet" == p && ((r *= g), (a *= g)),
              "slice" == p && ((r *= f), (a *= f)),
              (h = new i.Property("refX", h)),
              (A = new i.Property("refY", A)),
              h.hasValue() && A.hasValue()
                ? (e.transform = e.transform.translated(
                    -g * h.toPixels("x"),
                    -g * A.toPixels("y"),
                  ))
                : (c.match(/^xMid/) &&
                    (("meet" == p && g == d) || ("slice" == p && f == d)) &&
                    (e.transform = e.transform.translated(n / 2 - r / 2, 0)),
                  c.match(/YMid$/) &&
                    (("meet" == p && g == u) || ("slice" == p && f == u)) &&
                    (e.transform = e.transform.translated(0, o / 2 - a / 2)),
                  c.match(/^xMax/) &&
                    (("meet" == p && g == d) || ("slice" == p && f == d)) &&
                    (e.transform = e.transform.translated(n - r, 0)),
                  c.match(/YMax$/) &&
                    (("meet" == p && g == u) || ("slice" == p && f == u)) &&
                    (e.transform = e.transform.translated(0, o - a))),
              "none" == c
                ? (e.transform = e.transform.scaled(u, d))
                : "meet" == p
                  ? (e.transform = e.transform.scaled(g, g))
                  : "slice" == p && (e.transform = e.transform.scaled(f, f)),
              (e.transform = e.transform.translated(
                null == s ? 0 : -s,
                null == l ? 0 : -l,
              )));
          }),
          (i.Element = {}),
          (i.EmptyProperty = new i.Property("EMPTY", "")),
          (i.Element.ElementBase = function (e) {
            if (
              ((this.attributes = {}),
              (this.styles = {}),
              (this.children = []),
              (this.clone = function () {
                return new this.constructor(e.cloneNode(!0));
              }),
              (this.attribute = function (e, t) {
                var n = this.attributes[e];
                return null != n
                  ? n
                  : (1 == t &&
                      ((n = new i.Property(e, "")), (this.attributes[e] = n)),
                    n || i.EmptyProperty);
              }),
              (this.getHrefAttribute = function () {
                for (var e in this.attributes)
                  if (e.match(/:href$/) || "href" === e)
                    return this.attributes[e];
                return i.EmptyProperty;
              }),
              (this.style = function (e, t, n) {
                var r = this.styles[e];
                if (null != r) return r;
                var o = this.attribute(e);
                if (null != o && o.hasValue()) return ((this.styles[e] = o), o);
                if (1 != n) {
                  var a = this.parent;
                  if (null != a) {
                    var s = a.style(e);
                    if (null != s && s.hasValue()) return s;
                  }
                }
                return (
                  1 == t && ((r = new i.Property(e, "")), (this.styles[e] = r)),
                  r || i.EmptyProperty
                );
              }),
              (this.createSceneNode = function () {
                return null;
              }),
              (this.toScene = function (e, t) {
                var n = t || this.createSceneNode();
                if (n) {
                  n instanceof P &&
                    n !== t &&
                    (("none" != this.style("display").value &&
                      "hidden" != this.style("visibility").value) ||
                      n.setProperty("vis", !1));
                  var r = {
                    transform: e.length ? e[e.length - 1].transform : new v(),
                  };
                  if ((e.push(r), this.style("filter", !1, !0).hasValue())) {
                    var o = this.style("filter").getDefinition();
                    null != o && o.apply(r, this, n);
                  }
                  this.setSceneContext(r, n);
                  for (var a = 0; a < this.children.length; a++) {
                    var s = this.children[a].toScene(e);
                    this.children[a] instanceof i.Element.clipPath ||
                      (Array.isArray(s)
                        ? B.each(s, function (e, t) {
                            n.appendChild(t);
                          })
                        : s && !s.getParent() && n.appendChild(s));
                  }
                  if (
                    (this.clearSceneContext(r, n),
                    e.pop({}),
                    r.clipPath &&
                      (r.clipPath.appendChild(n),
                      (n = r.clipPath),
                      delete r.clipPath),
                    this.attribute("mask").hasValue())
                  ) {
                    var l = this.attribute("mask").getDefinition();
                    null != l && (n = l.apply(r, this, n, e));
                  }
                }
                return n;
              }),
              (this.setSceneContext = function (e) {}),
              (this.clearSceneContext = function (e) {}),
              (this.setContext = function (e) {}),
              (this.clearContext = function (e) {}),
              (this.addChild = function (e, t) {
                var n = e;
                (t && (n = i.CreateElement(e)),
                  (n.parent = this),
                  "title" != n.type && this.children.push(n));
              }),
              null != e && 1 == e.nodeType)
            ) {
              for (var t = 0; t < e.attributes.length; t++) {
                var n = e.attributes[t];
                this.attributes[n.nodeName] = new i.Property(
                  n.nodeName,
                  n.value,
                );
              }
              if (null != (s = i.Styles[e.nodeName]))
                for (var r in s) this.styles[r] = s[r];
              if (this.attribute("class").hasValue())
                for (
                  var o = i
                      .compressSpaces(this.attribute("class").value)
                      .split(" "),
                    a = 0;
                  a < o.length;
                  a++
                ) {
                  if (null != (s = i.Styles["." + o[a]]))
                    for (var r in s) this.styles[r] = s[r];
                  if (null != (s = i.Styles[e.nodeName + "." + o[a]]))
                    for (var r in s) this.styles[r] = s[r];
                }
              if (this.attribute("id").hasValue())
                if (null != (s = i.Styles["#" + this.attribute("id").value]))
                  for (var r in s) this.styles[r] = s[r];
              if (this.attribute("style").hasValue()) {
                var s = this.attribute("style").value.split(";");
                for (t = 0; t < s.length; t++)
                  if ("" != i.trim(s[t])) {
                    var l = s[t].split(":"),
                      h = ((r = i.trim(l[0])), i.trim(l[1]));
                    this.styles[r] = new i.Property(r, h);
                  }
              }
              this.attribute("id").hasValue() &&
                null == i.Definitions[this.attribute("id").value] &&
                (i.Definitions[this.attribute("id").value] = this);
              for (t = 0; t < e.childNodes.length; t++) {
                var A = e.childNodes[t];
                if (
                  (1 == A.nodeType && this.addChild(A, !0),
                  this.captureTextNodes && (3 == A.nodeType || 4 == A.nodeType))
                ) {
                  var c = A.nodeValue || A.text || "";
                  if (
                    "" != i.trim(i.compressSpaces(c)) &&
                    !(this instanceof i.Element.tspan)
                  ) {
                    var p = new i.Element.tspan(A),
                      u = this.children.slice(-1).pop();
                    u instanceof i.Element.tspan
                      ? (u.text += p.getText())
                      : ((p.attributes = B.extend(
                          {},
                          p.attributes,
                          this.attributes,
                        )),
                        this.addChild(p, !1));
                  }
                }
              }
            }
          }),
          (i.Element.RenderedElementBase = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this._clipPath = null),
              (this._transform = null),
              (this.getAbsoluteBoundingBox = function () {
                return this.getBoundingBox();
              }),
              (this.getBoundingBox = function () {
                throw new Error("getBoundingBox: unimplemented");
              }),
              (this.setSceneContext = function (e, t) {
                if (this.attribute("transform").hasValue()) {
                  var n = new i.Transform(this.attribute("transform").value),
                    r = e.transform;
                  ((e.transform = new v()),
                    n.apply(e),
                    (e.transform = e.transform.multiplied(r)));
                }
                if (t && t.hasMixin(U.Properties)) {
                  var o = ["type", "class"]
                    .filter(
                      function (e) {
                        return this.attributes[e];
                      }.bind(this),
                    )
                    .reduce(
                      function (e, t) {
                        return ((e[t] = this.attribute(t).value), e);
                      }.bind(this),
                      {},
                    );
                  Object.keys(o).length && t.setProperty("svgattrs", o, !0);
                }
                if (
                  (t &&
                    t instanceof P &&
                    this.attribute("id").hasValue() &&
                    t.setProperty("name", this.attribute("id").value),
                  t &&
                    t.hasMixin(S.Transform) &&
                    (e.transform.isIdentity() ||
                      ((this._transform = e.transform),
                      t.transform(e.transform, !0))),
                  t && t.hasMixin(f))
                ) {
                  var s = t.getStylePropertySets(),
                    h = {};
                  s.indexOf(f.PropertySet.Style) >= 0 &&
                    this.style("opacity").hasValue() &&
                    (h._stop = this.style("opacity").numValue());
                  var A = t.getPaintLayers();
                  if (A) {
                    var c,
                      p = function (e) {
                        ((e._vs = "boolean" != typeof e._vs || e._vs),
                          this.style("fill-opacity").hasValue() &&
                            (e._op =
                              this.style("fill-opacity").numValue() *
                              Math.min(e._op, 1)),
                          "number" == typeof e._op &&
                            (e._op = Math.min(e._op, 1)));
                        var t = L.getDefaultFillForElement(this.type),
                          i =
                            this.style("fill").hasValue() &&
                            "none" === this.style("fill").getValue();
                        e._pt
                          ? (e._vs = !0)
                          : e._pt || i || !t
                            ? ((e._pt = l.BLACK), (e._vs = !1))
                            : ((e._pt = t), (e._vs = !0));
                        var n = [],
                          r = [];
                        for (var o in e) (r.push(o), n.push(e[o]));
                        (d.setProperties(r, n), A.appendChild(d));
                      }.bind(this),
                      u = 1,
                      d = new f.FillPaintLayer(),
                      m = [];
                    if (this.style("fill").isUrlDefinition())
                      this.style("fill")
                        .getFillStyleDefinition(
                          this,
                          this.style("fill-opacity"),
                        )
                        .then(
                          function (e) {
                            var t = [],
                              i = d.getProperty("_op");
                            ("number" == typeof e.opacity && (i = e.opacity),
                              "number" != typeof i && (i = 1),
                              (c = e.color),
                              (t._op = i),
                              (t._pt = c),
                              p(t));
                          }.bind(this),
                        );
                    else if (this.style("fill").hasValue()) {
                      var y = this.style("fill");
                      if ("none" == y.value) c = null;
                      else
                        ("currentColor" == y.value &&
                          (y.value = this.style("color").value),
                          (w = i.getColor(y.value) || [l.BLACK, 1]) &&
                            ((c = w[0]), (u = w[1])));
                      ((m._op = u), (m._pt = c), p(m));
                    } else
                      t instanceof x ||
                        ((c = l.BLACK),
                        (u = 1),
                        (m._op = u),
                        (m._pt = c),
                        p(m));
                  }
                  if (A) {
                    var _ = new f.BorderPaintLayer(),
                      b = function (i) {
                        if (
                          (t instanceof a && (i._ba = f.BorderAlignment.Center),
                          this.style("stroke-opacity").hasValue())
                        ) {
                          var n = i.hasOwnProperty("_op") ? i._op : 1;
                          i._op = this.style("stroke-opacity").numValue() * n;
                        }
                        if (
                          (this.style("stroke-width").hasValue()
                            ? (i._bw = this.style("stroke-width").toPixels())
                            : (i._bw = 1),
                          this.attribute("stroke-dasharray").hasValue())
                        ) {
                          var r = this.attribute("stroke-dasharray").value;
                          if ("" !== r.trim()) {
                            var o = [];
                            y = r.includes(",")
                              ? r.replace(/\s/g, "").split(",")
                              : r.split(" ");
                            for (
                              var s = Math.min(4, y.length), h = 0;
                              h < s;
                              h++
                            ) {
                              var c = Y.parseEquationValue(y[h]);
                              null !== c && c >= 0 && o.push(c);
                            }
                            o.length && (i._bds = o);
                          }
                        }
                        if (this.attribute("mask").hasValue()) {
                          i._bw /= 2;
                          var p = this.attribute("mask").getDefinition();
                          if (p) {
                            var u = p.attribute("x").numValue() < 0;
                            i._ba = u
                              ? f.BorderAlignment.Outside
                              : f.BorderAlignment.Inside;
                          }
                        }
                        if (
                          "non-scaling-stroke" !==
                          this.attribute("vector-effect").value
                        ) {
                          var d = e.transform.getScaleFactor();
                          d > 0 && 1 !== d && (i._bw *= d);
                        }
                        if (this.style("stroke-linecap").hasValue())
                          switch (this.style("stroke-linecap").value) {
                            case "round":
                              i._blc = g.LineCap.Round;
                              break;
                            case "square":
                              i._blc = g.LineCap.Square;
                              break;
                            case "butt":
                            default:
                              i._blc = g.LineCap.Butt;
                          }
                        else i._blc = g.LineCap.Butt;
                        if (this.style("stroke-linejoin").hasValue())
                          switch (this.style("stroke-linejoin").value) {
                            case "round":
                              i._blj = g.LineJoin.Round;
                              break;
                            case "bevel":
                              i._blj = g.LineJoin.Bevel;
                              break;
                            case "miter":
                            default:
                              i._blj = g.LineJoin.Miter;
                          }
                        else i._blj = g.LineJoin.Miter;
                        (this.style("stroke-miterlimit").hasValue()
                          ? (i._bml =
                              this.style("stroke-miterlimit").numValue())
                          : (i._bml = 4),
                          this.style("stroke-dasharray").hasValue() &&
                            this.style("stroke-dasharray").value);
                        var m = [],
                          y = [];
                        if (!i._pt) {
                          var v = L.getDefaultFillForElement(this.type);
                          !(
                            this.style("fill").hasValue() &&
                            "none" === this.style("fill").getValue()
                          ) && v
                            ? ((m._pt = v), (m._vs = !0))
                            : ((m._pt = l.BLACK), (m._vs = !1));
                        }
                        for (var b in i) (m.push(b), y.push(i[b]));
                        (_.setProperties(m, y), A.appendChild(_));
                      }.bind(this),
                      C = [];
                    if (this.style("stroke").isUrlDefinition())
                      this.style("stroke")
                        .getFillStyleDefinition(
                          this,
                          this.style("stroke-opacity"),
                        )
                        .then(function (e) {
                          var t = [],
                            i = _.getProperty("_op");
                          ("number" == typeof e.opacity && (i = e.opacity),
                            "number" != typeof i && (i = 1),
                            (t._pt = e.color),
                            (t._vs = !0),
                            (t._op = Math.min(1, i)),
                            b(t));
                        });
                    else if (this.style("stroke").hasValue()) {
                      var w,
                        E = this.style("stroke");
                      if ("none" == E.value) C._pt = null;
                      else
                        ("currentColor" == E.value &&
                          (E.value = this.style("color").value),
                          (w = i.getColor(E.value) || [l.BLACK, 1]) &&
                            ((C._pt = w[0]), (C._op = w[1])));
                      b(C);
                    } else ((C._pt = null), b(C));
                  }
                  s.indexOf(f.PropertySet.Text);
                  m = [];
                  var B = [];
                  for (var T in h) (m.push(T), B.push(h[T]));
                  m.length && t.setProperties(m, B);
                }
                if (this.style("clip-path", !1, !0).hasValue()) {
                  var I = this.style("clip-path", !1, !0).getDefinition();
                  I && (e.clipPath = I.getPath(e));
                }
              }));
          }),
          X.inherit(i.Element.RenderedElementBase, i.Element.ElementBase),
          (i.Element.PromiseCapability = function (e) {
            ((this.base = i.Element.RenderedElementBase), this.base(e));
            var t = {};
            ((this.promise = new Promise(function (e, i) {
              ((t.resolve = e), (t.reject = i));
            })),
              (this.promiseCapability = t));
          }),
          X.inherit(i.Element.PromiseCapability, i.Element.RenderedElementBase),
          Object.defineProperties(i.Element.PromiseCapability.prototype, {
            resolve: {
              get: function () {
                return this.promiseCapability.resolve;
              },
            },
            reject: {
              get: function () {
                return this.promiseCapability.reject;
              },
            },
          }),
          (i.Element.PathElementBase = function (e) {
            ((this.base = i.Element.RenderedElementBase),
              this.base(e),
              (this.baseSetSceneContext = this.setSceneContext),
              (this.setSceneContext = function (e, t) {
                if ((this.baseSetSceneContext(e, t), t instanceof h))
                  for (
                    var i = t.getPaths().getFirstChild();
                    null !== i;
                    i = i.getNext()
                  )
                    this._setPathSceneContext(e, i);
                this._setPathSceneContext(e, t);
              }),
              (this._setPathSceneContext = function (e, t) {
                (t instanceof w || t instanceof h) &&
                  ("inherit" !=
                  this.style("fill-rule").valueOrDefault("inherit")
                    ? t.setProperty(
                        "evenodd",
                        "evenodd" === this.style("fill-rule").value,
                      )
                    : t.setProperty("evenodd", !1));
              }),
              (this.renderChildren = function (e) {
                (this.path(e),
                  i.Mouse.checkPath(this, e),
                  "" != e.fillStyle &&
                    ("inherit" !=
                    this.style("fill-rule").valueOrDefault("inherit")
                      ? e.fill(this.style("fill-rule").value)
                      : e.fill()),
                  "" != e.strokeStyle && e.stroke());
                var t = this.getMarkers();
                if (null != t) {
                  if (this.style("marker-start").isUrlDefinition())
                    (n = this.style("marker-start").getDefinition()).render(
                      e,
                      t[0][0],
                      t[0][1],
                    );
                  if (this.style("marker-mid").isUrlDefinition())
                    for (
                      var n = this.style("marker-mid").getDefinition(), r = 1;
                      r < t.length - 1;
                      r++
                    )
                      n.render(e, t[r][0], t[r][1]);
                  if (this.style("marker-end").isUrlDefinition())
                    (n = this.style("marker-end").getDefinition()).render(
                      e,
                      t[t.length - 1][0],
                      t[t.length - 1][1],
                    );
                }
              }),
              (this.getMarkers = function () {
                return null;
              }));
          }),
          X.inherit(i.Element.PathElementBase, i.Element.RenderedElementBase),
          (i.Element.svg = function (e) {
            ((this.base = i.Element.RenderedElementBase),
              this.base(e),
              (this.createSceneNode = function () {
                return new b();
              }),
              (this.baseClearSceneContext = this.clearSceneContext),
              (this.clearSceneContext = function (e) {
                this.baseClearSceneContext(e);
              }),
              (this.baseSetSceneContext = this.setSceneContext),
              (this.setSceneContext = function (e) {
                (this.attribute("x").hasValue() ||
                  (this.attribute("x", !0).value = 0),
                  this.attribute("y").hasValue() ||
                    (this.attribute("y", !0).value = 0),
                  (e.transform = new v(
                    1,
                    0,
                    0,
                    1,
                    this.attribute("x").toPixels("x"),
                    this.attribute("y").toPixels("y"),
                  ).multiplied(e.transform)),
                  this.baseSetSceneContext(e));
                var t = i.ViewPort.width(),
                  n = i.ViewPort.height();
                if (
                  (this.attribute("width").hasValue() ||
                    (this.attribute("width", !0).value = "100%"),
                  this.attribute("height").hasValue() ||
                    (this.attribute("height", !0).value = "100%"),
                  void 0 === this.root)
                ) {
                  ((t = this.attribute("width").toPixels("x")),
                    (n = this.attribute("height").toPixels("y")));
                  (this.attribute("refX").hasValue() &&
                    this.attribute("refY").hasValue() &&
                    (-this.attribute("refX").toPixels("x"),
                    -this.attribute("refY").toPixels("y")),
                    this.attribute("overflow").valueOrDefault("hidden"));
                }
                if (
                  (i.ViewPort.SetCurrent(t, n),
                  this.attribute("viewBox").hasValue())
                ) {
                  var r = i.ToNumberArray(this.attribute("viewBox").value),
                    o = r[0],
                    a = r[1];
                  ((t = r[2]),
                    (n = r[3]),
                    i.AspectRatio(
                      e,
                      this.attribute("preserveAspectRatio").value,
                      i.ViewPort.width(),
                      t,
                      i.ViewPort.height(),
                      n,
                      o,
                      a,
                      this.attribute("refX").value,
                      this.attribute("refY").value,
                    ),
                    i.ViewPort.RemoveCurrent(),
                    i.ViewPort.SetCurrent(r[2], r[3]));
                }
              }),
              (this.baseClearContext = this.clearContext),
              (this.clearContext = function (e) {
                (this.baseClearContext(e), i.ViewPort.RemoveCurrent());
              }),
              (this.baseSetContext = this.setContext),
              (this.setContext = function (e) {
                ((e.strokeStyle = "rgba(0,0,0,0)"),
                  (e.lineCap = "butt"),
                  (e.lineJoin = "miter"),
                  (e.miterLimit = 4),
                  void 0 !== e.font &&
                    void 0 !== window.getComputedStyle &&
                    (e.font = window
                      .getComputedStyle(e.canvas)
                      .getPropertyValue("font")),
                  this.baseSetContext(e),
                  this.attribute("x").hasValue() ||
                    (this.attribute("x", !0).value = 0),
                  this.attribute("y").hasValue() ||
                    (this.attribute("y", !0).value = 0),
                  (e.transform = e.transform.translated(
                    this.attribute("x").toPixels("x"),
                    this.attribute("y").toPixels("y"),
                  )));
                var t = i.ViewPort.width(),
                  n = i.ViewPort.height();
                if (
                  (this.attribute("width").hasValue() ||
                    (this.attribute("width", !0).value = "100%"),
                  this.attribute("height").hasValue() ||
                    (this.attribute("height", !0).value = "100%"),
                  void 0 === this.root)
                ) {
                  ((t = this.attribute("width").toPixels("x")),
                    (n = this.attribute("height").toPixels("y")));
                  var r = 0,
                    o = 0;
                  (this.attribute("refX").hasValue() &&
                    this.attribute("refY").hasValue() &&
                    ((r = -this.attribute("refX").toPixels("x")),
                    (o = -this.attribute("refY").toPixels("y"))),
                    "visible" !=
                      this.attribute("overflow").valueOrDefault("hidden") &&
                      (e.beginPath(),
                      e.moveTo(r, o),
                      e.lineTo(t, o),
                      e.lineTo(t, n),
                      e.lineTo(r, n),
                      e.closePath(),
                      e.clip()));
                }
                if (
                  (i.ViewPort.SetCurrent(t, n),
                  this.attribute("viewBox").hasValue())
                ) {
                  var a = i.ToNumberArray(this.attribute("viewBox").value),
                    s = a[0],
                    l = a[1];
                  ((t = a[2]),
                    (n = a[3]),
                    i.AspectRatio(
                      e,
                      this.attribute("preserveAspectRatio").value,
                      i.ViewPort.width(),
                      t,
                      i.ViewPort.height(),
                      n,
                      s,
                      l,
                      this.attribute("refX").value,
                      this.attribute("refY").value,
                    ),
                    i.ViewPort.RemoveCurrent(),
                    i.ViewPort.SetCurrent(a[2], a[3]));
                }
              }));
            var t = this.toScene;
            this.toScene = function (e, n) {
              var r = B.find(this.children, function (e) {
                  return e instanceof i.Element.switch;
                }),
                o = null;
              if (r && r.hasValidGraphicSource()) {
                o = r.renderGraphicSource();
                var a = n || this.createSceneNode();
                if (a && o)
                  return (
                    o instanceof O
                      ? (a = o)
                      : Array.isArray(o)
                        ? B.each(o, function (e, t) {
                            a.appendChild(t);
                          })
                        : a.appendChild(o),
                    a
                  );
              }
              return t.call(this, e, n);
            };
          }),
          X.inherit(i.Element.svg, i.Element.RenderedElementBase),
          (i.Element.rect = function (e) {
            ((this.base = i.Element.RenderedElementBase),
              this.base(e),
              (this.createSceneNode = function () {
                var e = new C(),
                  t = this.attribute("x").toPixels("x"),
                  n = this.attribute("y").toPixels("y"),
                  r = this.attribute("width").toPixels("x"),
                  o = this.attribute("height").toPixels("y"),
                  a = this.attribute("rx").toPixels("x"),
                  s = this.attribute("ry").toPixels("y");
                return (
                  this.attribute("rx").hasValue() &&
                    !this.attribute("ry").hasValue() &&
                    (s = a),
                  this.attribute("ry").hasValue() &&
                    !this.attribute("rx").hasValue() &&
                    (a = s),
                  (a = Math.min(a, r / 2)),
                  (s = Math.min(s, o / 2)),
                  e.setProperties(
                    ["trf", "tl_sx", "tl_sy"],
                    [new v(r / 2, 0, 0, o / 2, t + r / 2, n + o / 2), a, s],
                  ),
                  (this._bbox = new i.Rect(t, n, r, o)),
                  e
                );
              }),
              (this.getBoundingBox = function () {
                return this._bbox;
              }));
          }),
          X.inherit(i.Element.rect, i.Element.RenderedElementBase),
          (i.Element.circle = function (e) {
            ((this.base = i.Element.RenderedElementBase),
              this.base(e),
              (this._bbox = null),
              (this.createSceneNode = function () {
                var e = new s(),
                  t = this.attribute("cx").toPixels("x"),
                  n = this.attribute("cy").toPixels("y"),
                  r = this.attribute("r").toPixels(),
                  o = t - r,
                  a = n - r,
                  l = 2 * r,
                  h = 2 * r;
                e.setProperty(
                  "trf",
                  new v(l / 2, 0, 0, h / 2, o + l / 2, a + h / 2),
                );
                e.getGeometryBBox();
                return ((this._bbox = new i.Rect(o, a, l, h)), e);
              }),
              (this.getBoundingBox = function () {
                return this._bbox;
              }));
          }),
          (i.Element.ellipse = function (e) {
            ((this.base = i.Element.RenderedElementBase),
              this.base(e),
              (this._bbox = null),
              (this.createSceneNode = function () {
                var e = new s(),
                  t = this.attribute("rx").toPixels("x"),
                  n = this.attribute("ry").toPixels("y"),
                  r = this.attribute("cx").toPixels("x") - t,
                  o = this.attribute("cy").toPixels("y") - n,
                  a = 2 * t,
                  l = 2 * n;
                e.setProperty(
                  "trf",
                  new v(a / 2, 0, 0, l / 2, r + a / 2, o + l / 2),
                );
                e.getGeometryBBox();
                return ((this._bbox = new i.Rect(r, o, a, l)), e);
              }),
              (this.getBoundingBox = function () {
                return this._bbox;
              }));
          }),
          X.inherit(i.Element.ellipse, i.Element.RenderedElementBase),
          (i.Element.line = function (e) {
            ((this.base = i.Element.PathElementBase),
              this.base(e),
              (this._bbox = null),
              (this.getPoints = function () {
                return [
                  new i.Point(
                    this.attribute("x1").toPixels("x"),
                    this.attribute("y1").toPixels("y"),
                  ),
                  new i.Point(
                    this.attribute("x2").toPixels("x"),
                    this.attribute("y2").toPixels("y"),
                  ),
                ];
              }),
              (this.createSceneNode = function () {
                var e = new a(),
                  t = e.getAnchorPoints();
                this._bbox = new i.Rect();
                for (var n = this.getPoints(), r = 0; r < n.length; ++r) {
                  var o = n[r],
                    s = new w.AnchorPoint();
                  (t.appendChild(s),
                    s.setProperties(["x", "y"], [o.x, o.y]),
                    this._bbox.expand(o));
                }
                return e;
              }),
              (this.getBoundingBox = function () {
                return this._bbox;
              }),
              (this.getMarkers = function () {
                var e = this.getPoints(),
                  t = e[0].angleTo(e[1]);
                return [
                  [e[0], t],
                  [e[1], t],
                ];
              }));
          }),
          X.inherit(i.Element.line, i.Element.PathElementBase),
          (i.Element.polyline = function (e) {
            ((this.base = i.Element.PathElementBase),
              this.base(e),
              (this._bbox = null),
              (this.points = i.CreatePath(this.attribute("points").value)),
              (this.createSceneNode = function () {
                var e = new a(),
                  t = e.getAnchorPoints();
                this._bbox = new i.Rect();
                for (var n = 0; n < this.points.length; ++n) {
                  var r = this.points[n],
                    o = new w.AnchorPoint();
                  (t.appendChild(o),
                    o.setProperties(["x", "y"], [r.x, r.y]),
                    this._bbox.expand(r));
                }
                return e;
              }),
              (this.getBoundingBox = function () {
                return this._bbox;
              }),
              (this.getMarkers = function () {
                for (var e = [], t = 0; t < this.points.length - 1; t++)
                  e.push([
                    this.points[t],
                    this.points[t].angleTo(this.points[t + 1]),
                  ]);
                return (
                  e.push([
                    this.points[this.points.length - 1],
                    e[e.length - 1][1],
                  ]),
                  e
                );
              }));
          }),
          X.inherit(i.Element.polyline, i.Element.PathElementBase),
          (i.Element.polygon = function (e) {
            ((this.base = i.Element.polyline),
              this.base(e),
              (this.baseCreateSceneNode = this.createSceneNode),
              (this.createSceneNode = function () {
                var e = this.baseCreateSceneNode();
                return (e.setProperty("closed", !0), e);
              }));
          }),
          X.inherit(i.Element.polygon, i.Element.polyline),
          (i.Element.path = function (e) {
            ((this.base = i.Element.PathElementBase),
              this.base(e),
              (this._bbox = null));
            var t = this.attribute("d").value;
            ((t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(
              /,/gm,
              " ",
            )).replace(
              /([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,
              "$1 $2",
            )).replace(
              /([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,
              "$1 $2",
            )).replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2")).replace(
              /([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,
              "$1 $2",
            )).replace(/([0-9])([+\-])/gm, "$1 $2")).replace(
              /(\.[0-9]*)(\.)/gm,
              "$1 $2",
            )).replace(/(\.[0-9]*)(\.)/gm, "$1 $2")).replace(
              /([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,
              "$1 $3 $4 ",
            )),
              (t = i.compressSpaces(t)),
              (t = i.trim(t)),
              (this.PathParser = new (function (e) {
                ((this.tokens = e.split(" ")),
                  (this.reset = function () {
                    ((this.i = -1),
                      (this.command = ""),
                      (this.previousCommand = ""),
                      (this.start = new i.Point(0, 0)),
                      (this.control = new i.Point(0, 0)),
                      (this.current = new i.Point(0, 0)),
                      (this.points = []),
                      (this.angles = []));
                  }),
                  (this.isEnd = function () {
                    return this.i >= this.tokens.length - 1;
                  }),
                  (this.isCommandOrEnd = function () {
                    return (
                      !!this.isEnd() ||
                      null != this.tokens[this.i + 1].match(/^[A-Za-z]$/)
                    );
                  }),
                  (this.isRelativeCommand = function () {
                    switch (this.command) {
                      case "m":
                      case "l":
                      case "h":
                      case "v":
                      case "c":
                      case "s":
                      case "q":
                      case "t":
                      case "a":
                      case "z":
                        return !0;
                    }
                    return !1;
                  }),
                  (this.getToken = function () {
                    return (this.i++, this.tokens[this.i]);
                  }),
                  (this.getScalar = function () {
                    return parseFloat(this.getToken());
                  }),
                  (this.nextCommand = function () {
                    ((this.previousCommand = this.command),
                      (this.command = this.getToken()));
                  }),
                  (this.getPoint = function () {
                    var e = new i.Point(this.getScalar(), this.getScalar());
                    return this.makeAbsolute(e);
                  }),
                  (this.getAsControlPoint = function () {
                    var e = this.getPoint();
                    return ((this.control = e), e);
                  }),
                  (this.getAsCurrentPoint = function () {
                    var e = this.getPoint();
                    return ((this.current = e), e);
                  }),
                  (this.getReflectedControlPoint = function () {
                    return "c" != this.previousCommand.toLowerCase() &&
                      "s" != this.previousCommand.toLowerCase() &&
                      "q" != this.previousCommand.toLowerCase() &&
                      "t" != this.previousCommand.toLowerCase()
                      ? this.current
                      : new i.Point(
                          2 * this.current.x - this.control.x,
                          2 * this.current.y - this.control.y,
                        );
                  }),
                  (this.makeAbsolute = function (e) {
                    return (
                      this.isRelativeCommand() &&
                        ((e.x += this.current.x), (e.y += this.current.y)),
                      e
                    );
                  }),
                  (this.addMarker = function (e, t, i) {
                    (null != i &&
                      this.angles.length > 0 &&
                      null == this.angles[this.angles.length - 1] &&
                      (this.angles[this.angles.length - 1] =
                        this.points[this.points.length - 1].angleTo(i)),
                      this.addMarkerAngle(e, null == t ? null : t.angleTo(e)));
                  }),
                  (this.addMarkerAngle = function (e, t) {
                    (this.points.push(e), this.angles.push(t));
                  }),
                  (this.getMarkerPoints = function () {
                    return this.points;
                  }),
                  (this.getMarkerAngles = function () {
                    for (var e = 0; e < this.angles.length; e++)
                      if (null == this.angles[e])
                        for (var t = e + 1; t < this.angles.length; t++)
                          if (null != this.angles[t]) {
                            this.angles[e] = this.angles[t];
                            break;
                          }
                    return this.angles;
                  }));
              })(t)),
              (this.createSceneNode = function () {
                var e = this.PathParser;
                e.reset();
                for (var t = new _(); !e.isEnd(); )
                  switch ((e.nextCommand(), e.command)) {
                    case "M":
                    case "m":
                      var r = e.getAsCurrentPoint();
                      for (
                        e.addMarker(r),
                          t.addVertex(c.Command.Move, r.x, r.y),
                          e.start = e.current;
                        !e.isCommandOrEnd();
                      ) {
                        r = e.getAsCurrentPoint();
                        (e.addMarker(r, e.start),
                          t.addVertex(c.Command.Line, r.x, r.y));
                      }
                      break;
                    case "L":
                    case "l":
                      for (; !e.isCommandOrEnd(); ) {
                        var o = e.current;
                        r = e.getAsCurrentPoint();
                        (e.addMarker(r, o),
                          t.addVertex(c.Command.Line, r.x, r.y));
                      }
                      break;
                    case "H":
                    case "h":
                      for (; !e.isCommandOrEnd(); ) {
                        t.rewindVertices(t.getCount() - 1);
                        var a = new c();
                        t.readVertex(a) &&
                          a.command === c.Command.Close &&
                          t.addVertex(c.Command.Move, a.x, a.y);
                        var s = new i.Point(
                          (e.isRelativeCommand() ? e.current.x : 0) +
                            e.getScalar(),
                          e.current.y,
                        );
                        (e.addMarker(s, e.current),
                          (e.current = s),
                          t.addVertex(
                            c.Command.Line,
                            e.current.x,
                            e.current.y,
                          ));
                      }
                      break;
                    case "V":
                    case "v":
                      for (; !e.isCommandOrEnd(); ) {
                        t.rewindVertices(t.getCount() - 1);
                        a = new c();
                        t.readVertex(a) &&
                          a.command === c.Command.Close &&
                          t.addVertex(c.Command.Move, a.x, a.y);
                        s = new i.Point(
                          e.current.x,
                          (e.isRelativeCommand() ? e.current.y : 0) +
                            e.getScalar(),
                        );
                        (e.addMarker(s, e.current),
                          (e.current = s),
                          t.addVertex(
                            c.Command.Line,
                            e.current.x,
                            e.current.y,
                          ));
                      }
                      break;
                    case "C":
                    case "c":
                      for (; !e.isCommandOrEnd(); ) {
                        var l = e.getPoint(),
                          h = e.getAsControlPoint(),
                          A = e.getAsCurrentPoint();
                        (e.addMarker(A, h, l),
                          t.addVertex(c.Command.Curve2, A.x, A.y),
                          t.addVertex(c.Command.Curve2, l.x, l.y),
                          t.addVertex(c.Command.Curve2, h.x, h.y));
                      }
                      break;
                    case "S":
                    case "s":
                      for (; !e.isCommandOrEnd(); ) {
                        ((l = e.getReflectedControlPoint()),
                          (h = e.getAsControlPoint()),
                          (A = e.getAsCurrentPoint()));
                        (e.addMarker(A, h, l),
                          t.addVertex(c.Command.Curve2, A.x, A.y),
                          t.addVertex(c.Command.Curve2, l.x, l.y),
                          t.addVertex(c.Command.Curve2, h.x, h.y));
                      }
                      break;
                    case "Q":
                    case "q":
                      for (; !e.isCommandOrEnd(); ) {
                        ((h = e.getAsControlPoint()),
                          (A = e.getAsCurrentPoint()));
                        (e.addMarker(A, h, h),
                          t.addVertex(c.Command.Curve, A.x, A.y),
                          t.addVertex(c.Command.Curve, h.x, h.y));
                      }
                      break;
                    case "T":
                    case "t":
                      for (; !e.isCommandOrEnd(); ) {
                        h = e.getReflectedControlPoint();
                        e.control = h;
                        A = e.getAsCurrentPoint();
                        (e.addMarker(A, h, h),
                          t.addVertex(c.Command.Curve, A.x, A.y),
                          t.addVertex(c.Command.Curve, h.x, h.y));
                      }
                      break;
                    case "A":
                    case "a":
                      for (; !e.isCommandOrEnd(); ) {
                        var p = e.current,
                          u = e.getScalar(),
                          d = e.getScalar(),
                          g = e.getScalar() * (Math.PI / 180),
                          f = e.getScalar(),
                          m = e.getScalar(),
                          y =
                            ((A = e.getAsCurrentPoint()),
                            F.arcToBezier({
                              px: p.x,
                              py: p.y,
                              cx: A.x,
                              cy: A.y,
                              rx: u,
                              ry: d,
                              xAxisRotation: g,
                              largeArcFlag: f,
                              sweepFlag: m,
                            }));
                        B.each(
                          y,
                          function (n, r) {
                            var o = new i.Point(r.x, r.y),
                              a = new i.Point(r.x1, r.y1),
                              s = new i.Point(r.x2, r.y2);
                            (e.addMarker(o, s, a),
                              t.addVertex(c.Command.Curve2, o.x, o.y),
                              t.addVertex(c.Command.Curve2, a.x, a.y),
                              t.addVertex(c.Command.Curve2, s.x, s.y));
                          }.bind(this),
                        );
                      }
                      break;
                    case "Z":
                    case "z":
                      (t.addVertex(c.Command.Close), (e.current = e.start));
                  }
                var v = n.createPathFromVertexSource(t, !1, !0);
                if (v) {
                  var b = v.getGeometryBBox();
                  b &&
                    (this._bbox = new i.Rect(
                      b.getX(),
                      b.getY(),
                      b.getWidth(),
                      b.getHeight(),
                    ));
                }
                return v;
              }),
              (this.getBoundingBox = function () {
                return this._bbox;
              }),
              (this.getMarkers = function () {
                for (
                  var e = this.PathParser.getMarkerPoints(),
                    t = this.PathParser.getMarkerAngles(),
                    i = [],
                    n = 0;
                  n < e.length;
                  n++
                )
                  i.push([e[n], t[n]]);
                return i;
              }));
          }),
          X.inherit(i.Element.path, i.Element.PathElementBase),
          (i.Element.switch = function (e) {
            ((this.base = i.Element.RenderedElementBase),
              this.base(e),
              (this.createSceneNode = function () {
                for (var e = 0; e < this.children.length; e++) {
                  if (
                    !(this.children[e] instanceof i.Element.foreignObject) &&
                    !(this.children[e] instanceof i.Element.MISSING)
                  )
                    return this.children[e].createSceneNode();
                }
                return null;
              }),
              (this.getGraphicSource = function () {
                return B.find(this.children, function (e) {
                  return e instanceof i.Element.foreignObject;
                });
              }),
              (this.hasValidGraphicSource = function () {
                var e = this.getGraphicSource();
                return e && e.isValid();
              }),
              (this.renderGraphicSource = function () {
                return this.getGraphicSource().renderGraphicSource();
              }));
          }),
          X.inherit(i.Element.switch, i.Element.RenderedElementBase),
          (i.Element.pattern = function (e) {
            ((this.base = i.Element.PromiseCapability),
              this.base(e),
              (this.createPattern = function (e, t) {
                var n = function (e) {
                  var n = this.attribute("width").toPixels("x", !0),
                    r = this.attribute("height").toPixels("y", !0),
                    o = new i.Element.svg();
                  ((o.attributes.viewBox = new i.Property(
                    "viewBox",
                    this.attribute("viewBox").value,
                  )),
                    (o.attributes.width = new i.Property("width", n + "px")),
                    (o.attributes.height = new i.Property("height", r + "px")),
                    (o.attributes.transform = new i.Property(
                      "transform",
                      this.attribute("patternTransform").value,
                    )),
                    (o.children = this.children));
                  var a = o.toScene([]),
                    s = l.WHITE;
                  if (a) {
                    var h = a;
                    a.getFirstChild() instanceof x &&
                      1 == a.getChildren().length &&
                      (h = a.getFirstChild().$url);
                    var A = y.SizeMode.Length;
                    if (
                      "objectBoundingBox" ===
                      this.attribute("patternUnits").valueOrDefault(
                        "objectBoundingBox",
                      )
                    ) {
                      var c = this.attribute("width"),
                        p = this.attribute("height");
                      if (
                        (c.getValue() + "").match(/%$/) &&
                        (p.getValue() + "").match(/%$/)
                      )
                        ((n = 100 * c.numValue()),
                          (r = 100 * p.numValue()),
                          (A = y.SizeMode.Percent));
                      else {
                        var u = t.getBoundingBox();
                        ((n = u.width()), (r = u.height()));
                      }
                    }
                    ((s = new y(h, y.RepeatMode.Both)).setWidth(n),
                      s.setHeight(r),
                      s.setSizeMode(A));
                  }
                  e({
                    color: s,
                    opacity: null,
                  });
                }.bind(this);
                if (t instanceof i.Element.PromiseCapability) {
                  var r = {},
                    o = new Promise(function (e) {
                      r.resolve = e;
                    });
                  return (
                    t.promise.then(function () {
                      n(r.resolve);
                    }),
                    o
                  );
                }
                return new Promise(n);
              }));
          }),
          X.inherit(i.Element.pattern, i.Element.PromiseCapability),
          (i.Element.marker = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.baseRender = this.render),
              (this.render = function (e, t, n) {
                ((e.transform = e.transform.translated(t.x, t.y)),
                  "auto" == this.attribute("orient").valueOrDefault("auto") &&
                    (e.transform = e.transform.rotated(n)),
                  "strokeWidth" ==
                    this.attribute("markerUnits").valueOrDefault(
                      "strokeWidth",
                    ) &&
                    (e.transform = e.transform.scaled(
                      e.lineWidth,
                      e.lineWidth,
                    )),
                  e.save());
                var r = new i.Element.svg();
                ((r.attributes.viewBox = new i.Property(
                  "viewBox",
                  this.attribute("viewBox").value,
                )),
                  (r.attributes.refX = new i.Property(
                    "refX",
                    this.attribute("refX").value,
                  )),
                  (r.attributes.refY = new i.Property(
                    "refY",
                    this.attribute("refY").value,
                  )),
                  (r.attributes.width = new i.Property(
                    "width",
                    this.attribute("markerWidth").value,
                  )),
                  (r.attributes.height = new i.Property(
                    "height",
                    this.attribute("markerHeight").value,
                  )),
                  (r.attributes.fill = new i.Property(
                    "fill",
                    this.attribute("fill").valueOrDefault("black"),
                  )),
                  (r.attributes.stroke = new i.Property(
                    "stroke",
                    this.attribute("stroke").valueOrDefault("none"),
                  )),
                  (r.children = this.children),
                  r.render(e),
                  e.restore(),
                  "strokeWidth" ==
                    this.attribute("markerUnits").valueOrDefault(
                      "strokeWidth",
                    ) &&
                    (e.transform = e.transform.scaled(
                      1 / e.lineWidth,
                      1 / e.lineWidth,
                    )),
                  "auto" == this.attribute("orient").valueOrDefault("auto") &&
                    (e.transform = e.transform.rotated(-n)),
                  (e.transform = e.transform.translated(-t.x, -t.y)));
              }));
          }),
          X.inherit(i.Element.marker, i.Element.ElementBase),
          (i.Element.defs = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.toScene = function (t) {
                var i = {
                  transform: t.length ? t[t.length - 1].transform : new v(),
                };
                (t.push(i), this.setSceneContext(i, e));
                for (var n = 0; n < this.children.length; n++)
                  this.children[n].toScene(t);
                (this.clearSceneContext(i, e), t.pop({}));
              }));
          }),
          X.inherit(i.Element.defs, i.Element.ElementBase),
          (i.Element.GradientBase = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.gradientUnits =
                this.attribute("gradientUnits").valueOrDefault(
                  "objectBoundingBox",
                )),
              (this.stops = []));
            for (var t = 0; t < this.children.length; t++) {
              var n = this.children[t];
              "stop" == n.type &&
                (Number.isNaN(n.offset) && (n.offset = 0), this.stops.push(n));
            }
            ((this.getGradient = function () {
              throw new Error(
                "svg.Element.GradientBase.getGradient: virtual method",
              );
            }),
              (this.createGradient = function (e, t, n) {
                var r = this;
                this.getHrefAttribute().hasValue() &&
                  (r = this.getHrefAttribute().getDefinition());
                var o = {},
                  a = new Promise(function (e) {
                    o.resolve = e;
                  });
                return (
                  this.getGradient(
                    e,
                    t,
                    r.stops,
                    this.attribute("gradientTransform").hasValue()
                      ? this.attribute("gradientTransform").value
                      : null,
                  ).then(function (e) {
                    if (null == e) {
                      var t = i.getColor(r.stops[r.stops.length - 1].color);
                      (t ||
                        o.resolve({
                          color: null,
                          opacity: null,
                        }),
                        o.resolve({
                          color: t[0],
                          opacity: t[1],
                        }));
                    }
                    o.resolve({
                      color: e,
                      opacity: null,
                    });
                  }),
                  a
                );
              }));
          }),
          X.inherit(i.Element.GradientBase, i.Element.ElementBase),
          (i.Element.linearGradient = function (e) {
            ((this.base = i.Element.GradientBase),
              this.base(e),
              (this.getGradient = function (e, t, n, a) {
                var s = function (e) {
                  var s = t.getAbsoluteBoundingBox();
                  this.attribute("x1").hasValue() ||
                    this.attribute("y1").hasValue() ||
                    this.attribute("x2").hasValue() ||
                    this.attribute("y2").hasValue() ||
                    ((this.attribute("x1", !0).value = 0),
                    (this.attribute("y1", !0).value = 0),
                    (this.attribute("x2", !0).value = 1),
                    (this.attribute("y2", !0).value = 0));
                  var h =
                      "objectBoundingBox" == this.gradientUnits
                        ? s.x() + s.width() * this.attribute("x1").numValue()
                        : this.attribute("x1").toPixels("x"),
                    c =
                      "objectBoundingBox" == this.gradientUnits
                        ? s.y() + s.height() * this.attribute("y1").numValue()
                        : this.attribute("y1").toPixels("y"),
                    p =
                      "objectBoundingBox" == this.gradientUnits
                        ? s.x() + s.width() * this.attribute("x2").numValue()
                        : this.attribute("x2").toPixels("x"),
                    u =
                      "objectBoundingBox" == this.gradientUnits
                        ? s.y() + s.height() * this.attribute("y2").numValue()
                        : this.attribute("y2").toPixels("y");
                  if (h == p && c == u) return null;
                  if (a) {
                    var d = new i.Transform(a),
                      g = {
                        transform: new v(),
                      };
                    if (
                      (d.apply(g), "objectBoundingBox" == this.gradientUnits)
                    ) {
                      var f = g.transform.getMatrix();
                      g.transform = new v(
                        f[0],
                        f[1],
                        f[2],
                        f[3],
                        f[4] * s.width(),
                        f[5] * s.height(),
                      );
                    }
                    var m = g.transform.mapPoint(new A(h, c)),
                      y = g.transform.mapPoint(new A(p, u));
                    ((h = m.getX()),
                      (p = y.getX()),
                      (c = m.getY()),
                      (u = y.getY()));
                  }
                  var _ = p - h,
                    b = u - c,
                    C = !1;
                  if ("objectBoundingBox" == this.gradientUnits && _ < 0) {
                    ((C = !0), (_ = -_), (b = -b));
                    var w = p;
                    ((p = h),
                      (h = w),
                      (w = u),
                      (u = c),
                      (c = w),
                      n.sort(function (e, t) {
                        return e.offset - t.offset;
                      }));
                    for (var E = 0; E < n.length / 2; E++)
                      ((w = n[E].offset),
                        (n[E].offset = n[n.length - E - 1].offset),
                        (n[n.length - E - 1].offset = w));
                    n.sort(function (e, t) {
                      return e.offset - t.offset;
                    });
                  }
                  var B = Math.sqrt(_ * _ + b * b),
                    x = _ / B,
                    P = b / B,
                    S = Math.atan2(P, x),
                    I = s.x() + 0.5 * s.width(),
                    F = s.y() + 0.5 * s.height(),
                    R = ((I - h) * _ + (F - c) * b) / (_ * _ + b * b),
                    D = h + R * _,
                    k = c + R * b,
                    G = (s.x() - I) / _,
                    Q = (s.y() - F) / b;
                  Math.abs(G) > Math.abs(Q) && (G = Q);
                  var M,
                    N,
                    U = I + G * _,
                    V = F + G * b,
                    O = r.ptDist(I, F, U, V),
                    L = D - O * x,
                    Y = k - O * P,
                    X = 2 * O;
                  var H,
                    W,
                    Z =
                      ((M = 0 != _ ? (h - L) / x : (c - Y) / P) + B) / X -
                      (N = M / X),
                    z = [],
                    j = function (e, t, n, r) {
                      var o = i.getColor(e.color),
                        a = o[0].toScreen(!1),
                        s = t[0].toScreen(!1),
                        h = o[1],
                        A = t[1];
                      (r && (n = 1 - n),
                        (t[0] = new l([
                          Math.round(a[0] * (1 - n) + s[0] * n),
                          Math.round(a[1] * (1 - n) + s[1] * n),
                          Math.round(a[2] * (1 - n) + s[2] * n),
                        ])),
                        (t[1] = h * (1 - n) + A * n));
                    };
                  for (E = 0; E < n.length; E++) {
                    var J = i.getColor(n[E].color),
                      q = n[E].offset * Z + N;
                    if (J) {
                      if ("userSpaceOnUse" == this.gradientUnits)
                        q = n[E].offset;
                      else if (q < 0) {
                        var K = E < n.length - 1 ? n[E + 1] : null;
                        if (K) {
                          if (K.offset * Z + N <= 0) continue;
                          j(K, J, -q / Z, !0);
                        }
                        q = 0;
                      } else if (q > 1) {
                        var $ = E > 0 ? n[E - 1] : null;
                        ($ && j($, J, 1 / (q - N)), (q = 1));
                      }
                      z.push({
                        position: q,
                        color: J[0],
                        opacity: J[1],
                      });
                    } else
                      z.push({
                        position: q,
                        color: l.BLACK,
                        opacity: 1,
                      });
                  }
                  if (0 == z.length && n.length > 0) {
                    J = i.getColor(n[n.length - 1].color);
                    (z.push({
                      position: 0,
                      color: J[0],
                      opacity: J[1],
                    }),
                      z.push({
                        position: 1,
                        color: J[0],
                        opacity: J[1],
                      }));
                  }
                  if (C) {
                    for (E = 0; E < n.length / 2; E++)
                      ((w = n[E].offset),
                        (n[E].offset = n[n.length - E - 1].offset),
                        (n[n.length - E - 1].offset = w));
                    n.sort(function (e, t) {
                      return e.offset - t.offset;
                    });
                  }
                  Z = 1;
                  if ("userSpaceOnUse" == this.gradientUnits) {
                    var ee = v
                      .getNativeRectTransformation(
                        T.fromPoints(new A(s._x0, s._y0), new A(s._x1, s._y1)),
                      )
                      .inverted();
                    if (ee) {
                      var te,
                        ie = ee.mapPoint(new A(h, c));
                      m = ee.mapPoint(new A(p, u));
                      ((H = ie.getX()), (W = ie.getY()));
                      var ne,
                        re = m.getX() - ie.getX(),
                        oe = m.getY() - ie.getY();
                      ((S = -r.normalizeAngleRadians(-Math.atan2(oe, re))),
                        (te = -r.normalizeAngleRadians(
                          -Math.atan2(u - c, p - h),
                        )),
                        0 !== re
                          ? ((Z = re / Math.cos(S)), (ne = re / Math.cos(te)))
                          : ((Z = oe / Math.sin(S)), (ne = oe / Math.sin(te))),
                        ((Z = Math.min(Z, ne)) < Number.MIN_VALUE ||
                          Z > Number.MAX_VALUE) &&
                          (Z = 1));
                      var ae = t.getBoundingBox(),
                        se = new T(s.x(), s.y(), s.width(), s.height()),
                        le = new T(ae.x(), ae.y(), ae.width(), ae.height());
                      (T.equals(se, le) || (Z = s.width() / ae.width()),
                        (S = te));
                    }
                  }
                  e(new o(z, Z, S, H, W));
                }.bind(this);
                if (t instanceof i.Element.PromiseCapability) {
                  var h = {},
                    c = new Promise(function (e) {
                      h.resolve = e;
                    });
                  return (
                    t.promise.then(function () {
                      s(h.resolve);
                    }),
                    c
                  );
                }
                return new Promise(s);
              }));
          }),
          X.inherit(i.Element.linearGradient, i.Element.GradientBase),
          (i.Element.radialGradient = function (e) {
            ((this.base = i.Element.GradientBase),
              this.base(e),
              (this.getGradient = function (e, t, n, r) {
                var o = function (e) {
                  var o,
                    a,
                    s,
                    h,
                    c = t.getAbsoluteBoundingBox();
                  i.ViewPort.viewPorts[0];
                  (this.attribute("cx").hasValue() ||
                    (this.attribute("cx", !0).value = "50%"),
                    this.attribute("cy").hasValue() ||
                      (this.attribute("cy", !0).value = "50%"),
                    this.attribute("r").hasValue() ||
                      (this.attribute("r", !0).value = "50%"),
                    "objectBoundingBox" == this.gradientUnits
                      ? ((o = this.attribute("cx").hasValue()
                          ? this.attribute("cx").numValue()
                          : void 0),
                        (a = this.attribute("cy").hasValue()
                          ? this.attribute("cy").numValue()
                          : void 0),
                        (s = this.attribute("fx").hasValue()
                          ? this.attribute("fx").numValue()
                          : o),
                        (h = this.attribute("fy").hasValue()
                          ? this.attribute("fy").numValue()
                          : a))
                      : ((o = this.attribute("cx").hasValue()
                          ? this.attribute("cx").toPixels("x")
                          : void 0),
                        (a = this.attribute("cy").hasValue()
                          ? this.attribute("cy").toPixels("y")
                          : void 0),
                        (s = this.attribute("fx").hasValue()
                          ? this.attribute("fx").toPixels("x")
                          : o),
                        (h = this.attribute("fy").hasValue()
                          ? this.attribute("fy").toPixels("y")
                          : a)));
                  for (
                    var p =
                        (this.gradientUnits, this.attribute("r").numValue()),
                      u = [],
                      d = 0;
                    d < n.length;
                    d++
                  ) {
                    var g = i.getColor(n[d].color);
                    g
                      ? u.push({
                          position: n[d].offset,
                          color: g[0],
                          opacity: g[1],
                        })
                      : u.push({
                          position: n[d].offset * p,
                          color: l.BLACK,
                          opacity: 1,
                        });
                  }
                  var f = new m(u, p, s, h, o, a);
                  if (r) {
                    var y = new i.Transform(r),
                      _ = {
                        transform: new v(),
                      };
                    if (
                      (y.apply(_), "objectBoundingBox" !== this.gradientUnits)
                    ) {
                      var b = _.transform.mapPoint(new A(o, a)),
                        C = _.transform.mapPoint(new A(s, h)),
                        w = v
                          .getNativeRectTransformation(
                            new T(c.x(), c.y(), c.width(), c.height()),
                          )
                          .inverted();
                      if (!w) return void e(null);
                      ((b = w.mapPoint(b)),
                        (C = w.mapPoint(C)),
                        (f._cx = b.getX()),
                        (f._cy = b.getY()),
                        (f._fx = C.getX()),
                        (f._fy = C.getY()),
                        (f._scale =
                          C.getX() === b.getX() ? 1 : 1 / (p / c.width())));
                      var E = _.transform.decomposed();
                      _.transform = E.skew.multiplied(E.rotate);
                    }
                  }
                  e(f);
                }.bind(this);
                if (t instanceof i.Element.PromiseCapability) {
                  var a = {},
                    s = new Promise(function (e) {
                      a.resolve = e;
                    });
                  return (
                    t.promise.then(function () {
                      o(a.resolve);
                    }),
                    s
                  );
                }
                return new Promise(o);
              }));
          }),
          X.inherit(i.Element.radialGradient, i.Element.GradientBase),
          (i.Element.stop = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.offset = this.attribute("offset").numValue()),
              this.offset < 0 && (this.offset = 0),
              this.offset > 1 && (this.offset = 1));
            var t = this.style("stop-color");
            (this.style("stop-opacity").hasValue() &&
              (t = t.addOpacity(this.style("stop-opacity"))),
              (this.color = t.value));
          }),
          X.inherit(i.Element.stop, i.Element.ElementBase),
          (i.Element.font = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.horizAdvX = this.attribute("horiz-adv-x").numValue()),
              (this.isRTL = !1),
              (this.isArabic = !1),
              (this.fontFace = null),
              (this.missingGlyph = null),
              (this.glyphs = []));
            for (var t = 0; t < this.children.length; t++) {
              var n = this.children[t];
              "font-face" == n.type
                ? ((this.fontFace = n),
                  n.style("font-family").hasValue() &&
                    (i.Definitions[n.style("font-family").value] = this))
                : "missing-glyph" == n.type
                  ? (this.missingGlyph = n)
                  : "glyph" == n.type &&
                    ("" != n.arabicForm
                      ? ((this.isRTL = !0),
                        (this.isArabic = !0),
                        void 0 === this.glyphs[n.unicode] &&
                          (this.glyphs[n.unicode] = []),
                        (this.glyphs[n.unicode][n.arabicForm] = n))
                      : (this.glyphs[n.unicode] = n));
            }
          }),
          X.inherit(i.Element.font, i.Element.ElementBase),
          (i.Element.fontface = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.ascent = this.attribute("ascent").value),
              (this.descent = this.attribute("descent").value),
              (this.unitsPerEm = this.attribute("units-per-em").numValue()));
          }),
          X.inherit(i.Element.fontface, i.Element.ElementBase),
          (i.Element.missingglyph = function (e) {
            ((this.base = i.Element.path), this.base(e), (this.horizAdvX = 0));
          }),
          X.inherit(i.Element.missingglyph, i.Element.path),
          (i.Element.glyph = function (e) {
            ((this.base = i.Element.path),
              this.base(e),
              (this.horizAdvX = this.attribute("horiz-adv-x").numValue()),
              (this.unicode = this.attribute("unicode").value),
              (this.arabicForm = this.attribute("arabic-form").value));
          }),
          X.inherit(i.Element.glyph, i.Element.path),
          (i.Element.TextElementBase = function (e) {
            ((this.base = i.Element.PromiseCapability),
              this.base(e),
              (this.bbox = null),
              (this.element = null),
              (this.getText = function () {}),
              (this.ready = function () {
                if (this.element) {
                  if (
                    !this.element.getGeometryBBox() ||
                    this.element.getGeometryBBox().isEmpty()
                  ) {
                    var e = new G();
                    ((e._fontManager = i.fontManager),
                      this.element._setWorkspace(e),
                      this.element.repaint(),
                      (this.bbox = this.element.getGeometryBBox()));
                  }
                  this.resolve();
                }
              }),
              (this.getBoundingBox = function () {
                return this.bbox
                  ? new i.Rect(
                      this.bbox.getX(),
                      this.bbox.getY(),
                      this.bbox.getWidth(),
                      this.bbox.getWidth(),
                    )
                  : new i.Rect(0, 0, 0, 0);
              }));
          }),
          X.inherit(i.Element.TextElementBase, i.Element.PromiseCapability),
          (i.Element.text = function (e) {
            ((this.captureTextNodes = !0),
              (this.base = i.Element.TextElementBase),
              this.base(e),
              (this.baseSetContext = this.setContext),
              (this.setContext = function (e) {
                this.baseSetContext(e);
                var t = this.style("dominant-baseline").toTextBaseline();
                (null == t &&
                  (t = this.style("alignment-baseline").toTextBaseline()),
                  null != t && (e.textBaseline = t));
              }),
              (this.toScene = function (e) {
                var t = this.createSceneNode();
                return (
                  t &&
                    B.each(
                      t,
                      function (t, i) {
                        var n = {
                          transform: e.length
                            ? e[e.length - 1].transform
                            : new v(),
                        };
                        (e.push(n),
                          (this.children[t].attributes = B.extend(
                            {},
                            this.attributes,
                            this.children[t].attributes,
                          )),
                          this.children[t].setSceneContext(n, i),
                          this.children[t].clearSceneContext(n, i),
                          this.children[t].ready(),
                          e.pop({}));
                      }.bind(this),
                    ),
                  t
                );
              }),
              (this.getBaseBoundingBox = this.getBoundingBox),
              (this.getBoundingBox = function () {
                if (this.children) {
                  for (var e = null, t = 0; t < this.children.length; t++) {
                    var n = this.children[t].bbox;
                    n && !n.isEmpty() && (e = e ? e.united(n) : n);
                  }
                  if (e)
                    return new i.Rect(
                      e.getX(),
                      e.getY(),
                      e.getWidth(),
                      e.getHeight(),
                    );
                }
                return this.getBaseBoundingBox();
              }),
              (this.createSceneNode = function () {
                for (
                  var e = [],
                    t = function (t) {
                      var n;
                      n =
                        (n = t.attribute("font-size").hasValue()
                          ? t.attribute("font-size").toPixels()
                          : t.style("font-size").toPixels()) || 16;
                      var r = new E();
                      (r.setProperty("_tfi", n), r.setText(t.getText()));
                      var o = new v().translated(
                        t.attribute("x").toPixels(),
                        t.attribute("y").toPixels() - n,
                      );
                      (r.setProperty("sc", !0), r.transform(o));
                      i.fontManager.getDefaultFont();
                      var a,
                        s = function (e, t, i) {
                          i.element = e;
                          try {
                            if (t.isResolved()) {
                              var r = [];
                              (r.push("font:"),
                                r.push(
                                  t.getStyle() === D.Style.Normal
                                    ? "normal"
                                    : "italic",
                                ),
                                r.push(t.getWeight()),
                                r.push(n + "px"),
                                r.push(t.getFamily()));
                              var o = new R(i.getText(), r.join(" ")),
                                a = 0,
                                s = o.ascent || n,
                                l = i.style("text-anchor");
                              l.hasValue() &&
                                ("middle" === l.getValue()
                                  ? (a = o.width / 2)
                                  : "end" === l.getValue() && (a = o.width));
                              var h = new v().translated(-a, -s + n);
                              if (e.getTransform() && i._transform) {
                                var A = new v().translated(
                                    i.attribute("x").toPixels(),
                                    i.attribute("y").toPixels() - n,
                                  ),
                                  c = A.multiplied(i._transform)
                                    .inverted()
                                    .multiplied(e.getTransform());
                                ((h = A.multiplied(h)
                                  .multiplied(i._transform)
                                  .multiplied(c)),
                                  e.setTransform(h),
                                  i.ready());
                              } else e.transform(h);
                            } else i.reject(new Error("Unresolved font"));
                          } catch (e) {
                            i.reject(e);
                          }
                        },
                        l = function (e, t, n, r, o) {
                          e.setProperties(["_tff", "_tfw", "_tfs"], [t, n, r]);
                          var a = i.fontManager.getFont(t, r, n);
                          (a.isFailed() && (a = i.fontManager.getDefaultFont()),
                            a.isResolved()
                              ? s(e, a, o)
                              : i.addFontToResolve(a, function (t) {
                                  s(e, t, o);
                                }));
                        },
                        h = function (e) {
                          if (isNaN(e)) {
                            if ("inherit" !== e && "normal" !== e)
                              for (
                                var t = Object.keys(D.Weight), i = 0;
                                i < t.length;
                                i++
                              )
                                if (t[i].toLowerCase() === e.toLowerCase())
                                  return D.Weight[t[i]];
                            return D.Weight.Regular;
                          }
                          return parseInt(e);
                        },
                        A = function (e) {
                          return "normal" === e
                            ? D.Style.Normal
                            : D.Style.Italic;
                        },
                        c = D.Style.Normal,
                        p = D.Weight.Regular;
                      if (
                        (t.style("font-weight").hasValue() &&
                          (p = h(t.style("font-weight").value)),
                        t.style("font-style").hasValue() &&
                          (c = A(t.style("font-style").value)),
                        i.fontProvider)
                      ) {
                        var u = [];
                        ((f = t.style("font-family").value.split(",")).forEach(
                          function (e) {
                            var o = [
                                t.style("font-style").value || "normal",
                                t.style("font-variant").value || "normal",
                                t.style("font-weight").value || "normal",
                                n,
                                e,
                              ].join(" "),
                              a = i.Font.CreateFont(
                                null,
                                null,
                                null,
                                null,
                                null,
                                o,
                              );
                            if (
                              (e = (function (e) {
                                var t = (e = e
                                  .replace(/["']/g, "")
                                  .replace(" ", "")
                                  .trim()).indexOf("-");
                                if (-1 !== t) {
                                  var i = e.substring(t + 1, e.length).trim();
                                  (D.Weight[i] ||
                                    "normal" === i.toLowerCase()) &&
                                    (e = e.substring(0, t).trim());
                                }
                                return e
                                  .replace(/([a-z])([A-Z])/g, "$1 $2")
                                  .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
                                  .replace(/([a-z])([0-9])/gi, "$1 $2")
                                  .replace(/([0-9])([a-z])/gi, "$1 $2")
                                  .trim();
                              })(e)).length
                            ) {
                              var s = a.fontWeight ? h(a.fontWeight) : p,
                                l = a.fontStyle ? A(a.fontStyle) : c,
                                d = Object.create({
                                  text: r,
                                  fontFamily: e,
                                  fontWeight: s,
                                  fontStyle: l,
                                  node: t,
                                });
                              u.push(d);
                            }
                          },
                        ),
                          u.slice().forEach(function (e) {
                            u.push(
                              Object.create({
                                text: e.text,
                                fontFamily: i.fontManager
                                  .getDefaultFont()
                                  .getFamily(),
                                fontWeight: e.fontWeight,
                                fontStyle: e.fontStyle,
                                node: t,
                              }),
                            );
                          }));
                        var d = u.shift();
                        if (d) {
                          var g = function (e) {
                            var t,
                              n = this.fontWeight,
                              r = this.fontStyle;
                            if (e)
                              ((t = e.family),
                                (n = e.weight),
                                (r = e.style),
                                l(this.text, t, n, r, this.node));
                            else if (u.length) {
                              var o = u.shift();
                              i.fontProvider.queryFirst(o, g.bind(o));
                            } else
                              ((t = f.length ? f[0] : "Open Sans"),
                                l(this.text, t, n, r, this.node));
                          }.bind(d);
                          i.fontProvider.queryFirst(d, g);
                        } else a = f.length ? f[0] : "Open Sans";
                      } else {
                        var f;
                        (f = t.style("font-family").value.split(",")).length &&
                          (a = f[0]);
                      }
                      return (a && l(r, a, p, c, t), e.push(r), r);
                    },
                    n = 0;
                  n < this.children.length;
                  n++
                ) {
                  var r = this.children[n];
                  if (r instanceof i.Element.tspan) t(r);
                  else if (r instanceof i.Element.textPath) {
                    var o = this.children.splice(n, 1).pop();
                    if (o.getHrefAttribute().hasValue()) {
                      var a = o.getHrefAttribute().getDefinition();
                      B.each(
                        o.children,
                        function (e, n) {
                          this.children.push(n);
                          var r = o.attribute("startOffset").toPixels("x"),
                            s = t(n);
                          (s.setProperties(["tpths", "tpthl"], [I.OUTSIDE, r]),
                            i.addReference(a.attribute("id").getValue(), s));
                        }.bind(this),
                      );
                    }
                  }
                }
                return e;
              }));
          }),
          X.inherit(i.Element.text, i.Element.TextElementBase),
          (i.Element.tspan = function (e) {
            ((this.captureTextNodes = !0),
              (this.base = i.Element.TextElementBase),
              this.base(e),
              (this.text = e.nodeValue || e.text || e.textContent || ""),
              (this.getText = function () {
                return this.text;
              }),
              (this.baseSetSceneContext = this.setSceneContext),
              (this.setSceneContext = function (e, t) {
                if ((this.baseSetSceneContext(e, t), i.isReferenced(t))) {
                  var n = t.getTransform();
                  n &&
                    !n.isIdentity() &&
                    t.setProperty(
                      "_tfi",
                      t.getProperty("_tfi") * n.getScaleFactor(),
                    );
                }
              }),
              (this.getAbsoluteBoundingBox = function () {
                return this.parent.getBoundingBox();
              }));
          }),
          X.inherit(i.Element.tspan, i.Element.TextElementBase),
          (i.Element.textPath = function (e) {
            ((this.base = i.Element.text), this.base(e));
          }),
          X.inherit(i.Element.textPath, i.Element.text),
          (i.Element.tref = function (e) {
            ((this.base = i.Element.TextElementBase),
              this.base(e),
              (this.getText = function () {
                var e = this.getHrefAttribute().getDefinition();
                if (null != e) return e.children[0].getText();
              }));
          }),
          X.inherit(i.Element.tref, i.Element.TextElementBase),
          (i.Element.a = function (e) {
            this.hasText = !0;
            for (var t = 0; t < e.childNodes.length; t++)
              3 != e.childNodes[t].nodeType && (this.hasText = !1);
            (this.hasText
              ? ((this.base = i.Element.TextElementBase), this.base(e))
              : ((this.base = i.Element.RenderedElementBase),
                this.base(e),
                (this.createSceneNode = function () {
                  return new b();
                })),
              (this.text = this.hasText ? e.childNodes[0].nodeValue : ""),
              (this.getText = function () {
                return this.text;
              }));
          }),
          X.inherit(i.Element.a, i.Element.TextElementBase),
          (i.Element.image = function (e) {
            ((this.base = i.Element.rect),
              this.base(e),
              (this.createSceneNode = function () {
                var e = new x();
                e.setProperty("url", this.getHrefAttribute().value);
                var t = this.attribute("x").toPixels("x"),
                  n = this.attribute("y").toPixels("y"),
                  r = this.attribute("width").toPixels("x"),
                  o = this.attribute("height").toPixels("y"),
                  a = this.attribute("rx").toPixels("x"),
                  s = this.attribute("ry").toPixels("y");
                (this.attribute("rx").hasValue() &&
                  !this.attribute("ry").hasValue() &&
                  (s = a),
                  this.attribute("ry").hasValue() &&
                    !this.attribute("rx").hasValue() &&
                    (a = s),
                  (a = Math.min(a, r / 2)),
                  (s = Math.min(s, o / 2)));
                new v(1, 0, 0, 1, t, n);
                e.setProperties(["tl_sx", "tl_sy"], [a, s]);
                var l = function (i) {
                  if (i) {
                    if (
                      i.image.getStatus() !== x.ImageStatus.Loaded &&
                      i.image.getStatus() !== x.ImageStatus.Error
                    )
                      return;
                    i.image.removeEventListener(x.StatusEvent, this);
                  }
                  var a = (e.getProperty("trf") || new v()).preMultiplied(
                    new v(r / e.$iw, 0, 0, o / e.$ih, t, n),
                  );
                  e.setProperties(["trf", "itrf"], [a, a]);
                };
                return (
                  e.getStatus() === x.ImageStatus.Loaded
                    ? l()
                    : e.getStatus() !== x.ImageStatus.Error &&
                      e.addEventListener(x.StatusEvent, l),
                  (this._bbox = new i.Rect(t, n, r, o)),
                  e
                );
              }));
            var t = this.getHrefAttribute().value;
            if ("" != t) {
              var n = t.match(/\.svg$/);
              if ((i.Images.push(this), (this.loaded = !1), n))
                ((this.img = i.ajax(t)), (this.loaded = !0));
              else {
                ((this.img = document.createElement("img")),
                  1 == i.opts.useCORS && (this.img.crossOrigin = "Anonymous"));
                var r = this;
                ((this.img.onload = function () {
                  r.loaded = !0;
                }),
                  (this.img.onerror = function () {
                    (i.log('ERROR: image "' + t + '" not found'),
                      (r.loaded = !0));
                  }),
                  (this.img.src = t));
              }
              this.renderChildren = function (e) {
                var t = this.attribute("x").toPixels("x"),
                  n = this.attribute("y").toPixels("y"),
                  r = this.attribute("width").toPixels("x"),
                  o = this.attribute("height").toPixels("y");
                0 != r &&
                  0 != o &&
                  (e.save(),
                  (e.transform = e.transform.translated(t, n)),
                  i.AspectRatio(
                    e,
                    this.attribute("preserveAspectRatio").value,
                    r,
                    this.img.width,
                    o,
                    this.img.height,
                    0,
                    0,
                  ),
                  e.drawImage(this.img, 0, 0),
                  e.restore());
              };
            }
          }),
          X.inherit(i.Element.image, i.Element.rect),
          (i.Element.g = function (e) {
            ((this.base = i.Element.RenderedElementBase),
              this.base(e),
              (this.createSceneNode = function () {
                return new b();
              }));
          }),
          X.inherit(i.Element.g, i.Element.RenderedElementBase),
          (i.Element.symbol = function (e) {
            ((this.base = i.Element.RenderedElementBase),
              this.base(e),
              (this.render = function (e) {}),
              (this.toScene = function (e, t) {
                var i = t || this.createSceneNode();
                if (i) {
                  i instanceof P &&
                    i !== t &&
                    (("none" != this.style("display").value &&
                      "hidden" != this.style("visibility").value) ||
                      i.setProperty("vis", !1));
                  var n = {
                    transform: e.length ? e[e.length - 1].transform : new v(),
                  };
                  if ((e.push(n), this.style("filter", !1, !0).hasValue())) {
                    var r = this.style("filter").getDefinition();
                    null != r && r.apply(n, this, i);
                  }
                  if (
                    (this.setSceneContext(n, i),
                    this.clearSceneContext(n, i),
                    e.pop({}),
                    n.clipPath &&
                      (n.clipPath.appendChild(i),
                      (i = n.clipPath),
                      delete n.clipPath),
                    this.attribute("mask").hasValue())
                  ) {
                    var o = this.attribute("mask").getDefinition();
                    null != o && (i = o.apply(n, this, i, e));
                  }
                }
                return i;
              }),
              (this.createSceneNode = function () {
                for (var e = 0; e < this.children.length; e++) {
                  if (
                    !(this.children[e] instanceof i.Element.foreignObject) &&
                    !(this.children[e] instanceof i.Element.MISSING)
                  )
                    return this.children[e].createSceneNode();
                }
                return null;
              }));
          }),
          X.inherit(i.Element.symbol, i.Element.RenderedElementBase),
          (i.Element.style = function (e) {
            ((this.base = i.Element.ElementBase), this.base(e));
            for (var t = "", n = 0; n < e.childNodes.length; n++)
              t += e.childNodes[n].nodeValue;
            t = t.replace(
              /(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,
              "",
            );
            var r = (t = i.compressSpaces(t)).split("}");
            for (n = 0; n < r.length; n++)
              if (r[n] && "" != i.trim(r[n])) {
                var o = r[n].split("{");
                if (o.length > 1)
                  for (
                    var a = o[0].split(","), s = o[1].split(";"), l = 0;
                    l < a.length;
                    l++
                  ) {
                    var h = i.trim(a[l]);
                    if ("" != h) {
                      for (
                        var A = i.Styles[h] || {}, c = 0;
                        c < s.length;
                        c++
                      ) {
                        var p = s[c].indexOf(":"),
                          u = s[c].substr(0, p),
                          d = s[c].substr(p + 1, s[c].length - p);
                        null != u &&
                          null != d &&
                          (A[i.trim(u)] = new i.Property(i.trim(u), i.trim(d)));
                      }
                      if (((i.Styles[h] = A), "@font-face" == h)) {
                        var g = A["font-family"].value.replace(/"/g, ""),
                          f = A.src.value;
                        if (f)
                          for (var m = f.split(","), y = 0; y < m.length; y++)
                            if (m[y].indexOf('format("svg")') > 0)
                              for (
                                var _ = m[y].indexOf("url"),
                                  v = m[y].indexOf(")", _),
                                  b = m[y].substr(_ + 5, v - _ - 6),
                                  C = i
                                    .parseXml(i.ajax(b))
                                    .getElementsByTagName("font"),
                                  w = 0;
                                w < C.length;
                                w++
                              ) {
                                var E = i.CreateElement(C[w]);
                                i.Definitions[g] = E;
                              }
                      }
                    }
                  }
              }
          }),
          X.inherit(i.Element.style, i.Element.ElementBase),
          (i.Element.use = function (e) {
            ((this.base = i.Element.RenderedElementBase),
              this.base(e),
              (this._useParameters = [
                "href",
                "xlink:href",
                "x",
                "y",
                "transform",
                "width",
                "height",
              ]),
              (this._setSceneContext = function (e, t) {
                if (this.attribute("transform").hasValue()) {
                  var n = new i.Transform(this.attribute("transform").value),
                    r = e.transform;
                  ((e.transform = new v()),
                    n.apply(e),
                    (e.transform = r.multiplied(e.transform)));
                }
                var o = this.attribute("x");
                o.hasValue() &&
                  (e.transform = e.transform.translated(o.numValue(), 0));
                var a = this.attribute("y");
                (a.hasValue() &&
                  (e.transform = e.transform.translated(0, a.numValue())),
                  t &&
                    t.hasMixin(S.Transform) &&
                    (e.transform.isIdentity() ||
                      ((this._transform = e.transform),
                      t.setTransform(e.transform))));
              }),
              (this.toScene = function (e, t) {
                var n = this.getHrefAttribute().getDefinition();
                if (n) {
                  if (((n = n.clone()), this.attribute("style").hasValue()))
                    for (
                      var r = this.attribute("style").value.split(";"), o = 0;
                      o < r.length;
                      o++
                    )
                      if ("" != i.trim(r[o])) {
                        var a = r[o].split(":"),
                          s = i.trim(a[0]),
                          l = i.trim(a[1]);
                        n.styles[s] = new i.Property(s, l);
                      }
                  (Object.keys(this.attributes)
                    .filter(
                      function (e) {
                        return !this._useParameters.includes(e);
                      }.bind(this),
                    )
                    .forEach(
                      function (e) {
                        var t = this.attributes[e];
                        t.hasValue() && (n.attributes[e] = t);
                      }.bind(this),
                    ),
                    e.push({
                      transform: new v(),
                    }));
                  var h = n.toScene(e, t);
                  if ((e.pop({}), h)) {
                    var A = {
                      transform: h.getTransform() ? h.getTransform() : new v(),
                    };
                    this._setSceneContext(A, h);
                    var c = e[e.length - 1]
                      ? e[e.length - 1].transform
                      : new v();
                    h.hasMixin(S.Transform) &&
                      h.setTransform(
                        (h.getTransform() || new v()).multiplied(c),
                      );
                  }
                  return h;
                }
                return null;
              }),
              (this.createSceneNode = function () {
                return (
                  (this.element = this.getHrefAttribute().getDefinition()),
                  this.element ? this.element.createSceneNode() : null
                );
              }),
              (this.renderChildren = function (e) {
                if (null != element) {
                  var t = element;
                  ("symbol" == element.type &&
                    (((t = new i.Element.svg()).type = "svg"),
                    (t.attributes.viewBox = new i.Property(
                      "viewBox",
                      element.attribute("viewBox").value,
                    )),
                    (t.attributes.preserveAspectRatio = new i.Property(
                      "preserveAspectRatio",
                      element.attribute("preserveAspectRatio").value,
                    )),
                    (t.attributes.overflow = new i.Property(
                      "overflow",
                      element.attribute("overflow").value,
                    )),
                    (t.children = element.children)),
                    "svg" == t.type &&
                      (this.attribute("width").hasValue() &&
                        (t.attributes.width = new i.Property(
                          "width",
                          this.attribute("width").value,
                        )),
                      this.attribute("height").hasValue() &&
                        (t.attributes.height = new i.Property(
                          "height",
                          this.attribute("height").value,
                        ))));
                  var n = t.parent;
                  ((t.parent = null), t.render(e), (t.parent = n));
                }
              }),
              (this.getBoundingBox = function () {
                return this.element ? this.element.getBoundingBox() : null;
              }));
          }),
          X.inherit(i.Element.use, i.Element.RenderedElementBase),
          (i.Element.mask = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.apply = function (e, t, i, n) {
                var r = this._toScene(n);
                if (r) {
                  var o = [];
                  return (
                    r.acceptChildren(function (e) {
                      e instanceof a && o.push(e);
                    }),
                    0 === o.length && r instanceof a && o.push(r),
                    1 === o.length ? o[0].appendChild(i) : r.appendChild(i),
                    r
                  );
                }
                return i;
              }),
              (this._toScene = function (e, t) {
                var i = t || this._createSceneNode(e);
                if (i) {
                  i instanceof P &&
                    i !== t &&
                    (("none" != this.style("display").value &&
                      "hidden" != this.style("visibility").value) ||
                      i.setProperty("vis", !1));
                  var n = {
                    transform: e.length ? e[e.length - 1].transform : new v(),
                  };
                  if ((e.push(n), this.style("filter", !1, !0).hasValue())) {
                    var r = this.style("filter").getDefinition();
                    null != r && r.apply(n, this, i);
                  }
                  (this.setSceneContext(n, i),
                    this.clearSceneContext(n, i),
                    e.pop({}),
                    n.clipPath &&
                      (n.clipPath.appendChild(i),
                      (i = n.clipPath),
                      delete n.clipPath));
                }
                return i;
              }),
              (this._createSceneNode = function (e) {
                for (
                  var t = function (e, t) {
                      var i = e && e.hasMixin(f) && e.getPaintLayers(),
                        n = i && i.getFillLayers();
                      return n.length
                        ? n.some(
                            function (e) {
                              var t = e.getProperty("_pt");
                              return t && l.equals(t, l.BLACK);
                            }.bind(this),
                          )
                        : t || !1;
                    },
                    i = function (e) {
                      var t = e && e.hasMixin(f) && e.getPaintLayers();
                      (t && t.getFillLayers()).forEach(function (e) {
                        e.setProperties(["_pt", "_op"], [l.WHITE, 0]);
                      });
                    },
                    r = [],
                    o = 0;
                  o < this.children.length;
                  o++
                ) {
                  var a = this.children[o].toScene(e);
                  r = r.concat(this._getValidItems(a));
                }
                var s = new u();
                if (r.length > 1) {
                  try {
                    var h = [],
                      A = [],
                      c = null;
                    for (o = 0; o < r.length; o++) {
                      (p = r[o]).getParent() instanceof u
                        ? (h.push(p), c || (c = p.getParent()))
                        : A.push(p);
                    }
                    ((r = h.concat(A)),
                      s.beginUpdate(),
                      r.sort(function (e, i) {
                        var n = t(e),
                          r = t(i);
                        return n && r ? 0 : n ? (n ? 1 : void 0) : -1;
                      }));
                    for (o = 0; o < r.length; ++o) {
                      var p;
                      ((p = r[o]).setProperty("bool", t(p) ? d.SUB : d.AND),
                        i(p),
                        s.appendChild(p));
                    }
                  } finally {
                    s.endUpdate();
                  }
                  var g = n.createPathFromVertexSource(s);
                  return g
                    ? ((s.$trf = null),
                      g.assignFrom(s),
                      s instanceof w &&
                        ((g.$evenodd = s.getProperty("evenodd")),
                        (g.$closed = s.getProperty("closed"))),
                      i(g),
                      g)
                    : null;
                }
                if (1 === r.length) {
                  var m = r[0];
                  return (
                    i(m),
                    m.getParent() && m.getParent().removeChild(m),
                    m
                  );
                }
                return null;
              }),
              (this._getValidItems = function (e) {
                var t = [];
                if (e instanceof b || e instanceof u)
                  for (var i = e.getFirstChild(); null !== i; i = i.getNext())
                    t = t.concat(this._getValidItems(i));
                else e.hasMixin(p) && e.validateInsertion(new u()) && t.push(e);
                return t;
              }),
              (this.render = function (e) {}));
          }),
          X.inherit(i.Element.mask, i.Element.ElementBase),
          (i.Element.clipPath = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.getPath = function (e) {
                for (var t = [], i = 0; i < this.children.length; i++) {
                  var r = this.children[i].createSceneNode();
                  if (r) {
                    var o = {
                      transform: e.transform || new v(),
                    };
                    (this.children[i].setSceneContext(o, r),
                      this.children[i].clearSceneContext(o, r),
                      t.push(r));
                  }
                }
                if (t && t.length) {
                  var a;
                  if (1 == t.length) a = t[0];
                  else {
                    var s = function (e) {
                        if (e instanceof b)
                          for (
                            var t = e.getFirstChild();
                            null != t;
                            t = t.getNext()
                          )
                            s(t);
                        else
                          !(function (e) {
                            for (e.rewindVertices(0); e.readVertex(h); )
                              l.addVertex(h.command, h.x, h.y);
                          })(e);
                      },
                      l = new _(),
                      h = new c();
                    for (i = 0; i < t.length; ++i) s(t[i]);
                    a = n.createPathFromVertexSource(l, !1, !0);
                  }
                  if (a) {
                    if (a.hasMixin(f)) {
                      var A = a.getPaintLayers();
                      A && A.clearLayers();
                    }
                    return a;
                  }
                }
                return null;
              }),
              (this.toScene = function (e) {
                return null;
              }),
              (this.createSceneNode = function () {
                return null;
              }),
              (this.apply = function (e) {
                var t = CanvasRenderingContext2D.prototype.beginPath;
                CanvasRenderingContext2D.prototype.beginPath = function () {};
                var n = CanvasRenderingContext2D.prototype.closePath;
                ((CanvasRenderingContext2D.prototype.closePath =
                  function () {}),
                  t.call(e));
                for (var r = 0; r < this.children.length; r++) {
                  var o = this.children[r];
                  if (void 0 !== o.path) {
                    var a = null;
                    (o.attribute("transform").hasValue() &&
                      (a = new i.Transform(
                        o.attribute("transform").value,
                      )).apply(e),
                      o.path(e),
                      (CanvasRenderingContext2D.prototype.closePath = n),
                      a && a.unapply(e));
                  }
                }
                (n.call(e),
                  e.clip(),
                  (CanvasRenderingContext2D.prototype.beginPath = t),
                  (CanvasRenderingContext2D.prototype.closePath = n));
              }),
              (this.render = function (e) {}));
          }),
          X.inherit(i.Element.clipPath, i.Element.ElementBase),
          (i.Element.filter = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.apply = function (e, t, i) {
                if (
                  ["x", "y", "height", "width"].every(
                    function (e) {
                      return (
                        this.attributes[e] && this.attributes[e].hasValue()
                      );
                    }.bind(this),
                  )
                ) {
                  var n = {
                    x: this.attribute("x").toPixels("x"),
                    y: this.attribute("y").toPixels("y"),
                    width: this.attribute("width").toPixels("y"),
                    height: this.attribute("height").toPixels("x"),
                  };
                  null === i.getGeometryBBox()
                    ? i instanceof b &&
                      i.setProperty("frm", new T(n.x, n.y, n.width, n.height))
                    : i.hasMixin(S.Transform) &&
                      i.setBounds(n.x, n.y, n.width, n.height);
                }
                var r = t.style("filter").value;
                t.style("filter").value = "";
                for (var o = 0, a = 0, s = 0; s < this.children.length; s++) {
                  var l = this.children[s].extraFilterDistance || 0;
                  ((o = Math.max(o, l)), (a = Math.max(a, l)));
                }
                var h = ["feOffset", "feGaussianBlur"],
                  A = ["feBlend", "feComposite"],
                  c = !1;
                if (
                  !this.children.every(function (e) {
                    if (!c && A.indexOf(e.type) >= 0)
                      return ((c = !0), !!h.length);
                    if (h.length) {
                      var t = h.indexOf(e.type);
                      if (t >= 0) return (h.splice(t, 1), !c || h.length);
                    }
                    return !0;
                  })
                ) {
                  if (i.hasMixin(f)) {
                    var p = i.getEffects();
                    if (p) {
                      var u = B.find(this.children, function (e) {
                          return "feGaussianBlur" === e.type;
                        }),
                        d = B.find(this.children, function (e) {
                          return "feOffset" === e.type;
                        }),
                        g = B.find(this.children, function (e) {
                          return "feFlood" === e.type;
                        }),
                        m = new N();
                      (m.setProperty("r", L.stdDeviationToPixel(u.blurRadius)),
                        m.setProperty("x", d.dx),
                        m.setProperty("y", d.dy),
                        g &&
                          (m.setProperty("pat", g.floodColor),
                          m.setProperty("opc", g.floodOpacity)),
                        p.appendChild(m));
                    }
                  }
                } else
                  for (s = 0; s < this.children.length; s++)
                    "function" == typeof this.children[s].apply &&
                      this.children[s].apply(e, i, o, a);
                t.style("filter", !0).value = r;
              }),
              (this.render = function (e) {}));
          }),
          X.inherit(i.Element.filter, i.Element.ElementBase),
          (i.Element.feMorphology = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.apply = function (e, t, i, n, r) {}));
          }),
          X.inherit(i.Element.feMorphology, i.Element.ElementBase),
          (i.Element.feComposite = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.apply = function (e, t, i, n, r) {}));
          }),
          X.inherit(i.Element.feComposite, i.Element.ElementBase),
          (i.Element.feColorMatrix = function (e) {
            ((this.base = i.Element.ElementBase), this.base(e));
            var t = i.ToNumberArray(this.attribute("values").value);
            switch (this.attribute("type").valueOrDefault("matrix")) {
              case "saturate":
                var n = t[0];
                t = [
                  0.213 + 0.787 * n,
                  0.715 - 0.715 * n,
                  0.072 - 0.072 * n,
                  0,
                  0,
                  0.213 - 0.213 * n,
                  0.715 + 0.285 * n,
                  0.072 - 0.072 * n,
                  0,
                  0,
                  0.213 - 0.213 * n,
                  0.715 - 0.715 * n,
                  0.072 + 0.928 * n,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
                break;
              case "hueRotate":
                var r = (t[0] * Math.PI) / 180,
                  o = function (e, t, i) {
                    return e + Math.cos(r) * t + Math.sin(r) * i;
                  };
                t = [
                  o(0.213, 0.787, -0.213),
                  o(0.715, -0.715, -0.715),
                  o(0.072, -0.072, 0.928),
                  0,
                  0,
                  o(0.213, -0.213, 0.143),
                  o(0.715, 0.285, 0.14),
                  o(0.072, -0.072, -0.283),
                  0,
                  0,
                  o(0.213, -0.213, -0.787),
                  o(0.715, -0.715, 0.715),
                  o(0.072, 0.928, 0.072),
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
                break;
              case "luminanceToAlpha":
                t = [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154,
                  0.0721, 0, 0, 0, 0, 0, 0, 1,
                ];
            }

            function a(e, t, i, n, r, o) {
              return e[i * n * 4 + 4 * t + o];
            }

            function s(e, t, i, n, r, o, a) {
              e[i * n * 4 + 4 * t + o] = a;
            }

            function l(e, i) {
              var n = t[e];
              return n * (n < 0 ? i - 255 : i);
            }
            this.apply = function (e, t, i, n, r) {
              var o = e.getImageData(0, 0, n, r);
              for (i = 0; i < r; i++)
                for (t = 0; t < n; t++) {
                  var h = a(o.data, t, i, n, 0, 0),
                    A = a(o.data, t, i, n, 0, 1),
                    c = a(o.data, t, i, n, 0, 2),
                    p = a(o.data, t, i, n, 0, 3);
                  (s(
                    o.data,
                    t,
                    i,
                    n,
                    0,
                    0,
                    l(0, h) + l(1, A) + l(2, c) + l(3, p) + l(4, 1),
                  ),
                    s(
                      o.data,
                      t,
                      i,
                      n,
                      0,
                      1,
                      l(5, h) + l(6, A) + l(7, c) + l(8, p) + l(9, 1),
                    ),
                    s(
                      o.data,
                      t,
                      i,
                      n,
                      0,
                      2,
                      l(10, h) + l(11, A) + l(12, c) + l(13, p) + l(14, 1),
                    ),
                    s(
                      o.data,
                      t,
                      i,
                      n,
                      0,
                      3,
                      l(15, h) + l(16, A) + l(17, c) + l(18, p) + l(19, 1),
                    ));
                }
              (e.clearRect(0, 0, n, r), e.putImageData(o, 0, 0));
            };
          }),
          X.inherit(i.Element.feColorMatrix, i.Element.ElementBase),
          (i.Element.feOffset = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.dx = this.attribute("dx").toPixels("x")),
              (this.dy = this.attribute("dy").toPixels("y")),
              (this.apply = function (e, t, i, n, r, o) {}));
          }),
          X.inherit(i.Element.feOffset, i.Element.ElementBase),
          (i.Element.feFlood = function (e) {
            ((this.base = i.Element.ElementBase), this.base(e));
            var t = this.style("flood-color"),
              n = l.BLACK,
              r = 1;
            if ("none" !== t.value) {
              "currentColor" == t.value &&
                (t.value = this.style("color").value);
              var o = i.getColor(t.value) || [l.BLACK, 1];
              o && ((n = o[0]), (r = o[1]));
            }
            ((this.floodColor = n),
              this.style("flood-opacity").hasValue() &&
                (r = this.style("flood-opacity").numValue() * Math.min(r, 1)),
              (this.floodOpacity = r),
              (this.apply = function (e, t, i, n, r, o) {}));
          }),
          (i.Element.feDropShadow = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.dx = this.attribute("dx").toPixels("x")),
              (this.dy = this.attribute("dy").toPixels("y")),
              (this.blurRadius = this.attribute("stdDeviation").numValue()),
              (this.extraFilterDistance = this.blurRadius));
            var t = this.style("flood-color"),
              n = l.BLACK,
              r = 1;
            if ("none" !== t.value) {
              "currentColor" == t.value &&
                (t.value = this.style("color").value);
              var o = i.getColor(t.value) || [l.BLACK, 1];
              o && ((n = o[0]), (r = o[1]));
            }
            ((this.floodColor = n),
              this.style("flood-opacity").hasValue() &&
                (r = this.style("flood-opacity").numValue() * Math.min(r, 1)),
              (this.floodOpacity = r),
              (this.apply = function (e, t) {
                if (t.hasMixin(f)) {
                  var i = t.getEffects();
                  if (i) {
                    var n,
                      r,
                      o,
                      a,
                      s,
                      l = new N();
                    ((n = this.blurRadius),
                      (r = this.dx),
                      (o = this.dy),
                      (a = this.floodColor),
                      (s = this.floodOpacity),
                      l.setProperty("r", L.stdDeviationToPixel(n)),
                      l.setProperty("x", r),
                      l.setProperty("y", o),
                      l.setProperty("pat", a),
                      l.setProperty("opc", s),
                      i.appendChild(l));
                  }
                }
              }));
          }),
          (i.Element.gravitGraphicSource = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.version = this.attribute("version").numValue()));
            for (var t = 0; t < e.childNodes.length; t++) {
              var n = e.childNodes[t];
              if ("#cdata-section" === n.nodeName) {
                this.sourceElement = n.nodeValue.trim();
                break;
              }
            }
            ((this.toScene = function () {}),
              (this.renderGraphicSource = function () {
                try {
                  return (
                    this.sourceElement &&
                    U.deserialize(B.decompressString(this.sourceElement))
                  );
                } catch (e) {
                  return null;
                }
              }));
          }),
          (i.Element.foreignObject = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.isSupported = function () {
                return (
                  this.attribute("requiredExtensions").getValue() ===
                  V.XMLNamespaceURI
                );
              }),
              (this.getElementOfReference = function () {
                return B.find(this.children, function (e) {
                  return e instanceof i.Element.gravitElementRef;
                });
              }),
              (this.isValid = function () {
                return this.isSupported() && !!this.getElementOfReference();
              }),
              (this.toScene = function () {}),
              (this.renderGraphicSource = function () {
                if (!this.isValid()) return null;
                var e = this.getElementOfReference();
                return e && e.renderGraphicSource();
              }));
          }),
          (i.Element.gravitElementRef = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.toScene = function () {}),
              (this.renderGraphicSource = function () {
                var e = this.getHrefAttribute().getDefinition();
                return e && e.renderGraphicSource();
              }));
          }),
          X.inherit(i.Element.gravitElementRef, i.Element.ElementBase),
          (i.Element.feGaussianBlur = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              (this.blurRadius = this.attribute("stdDeviation").numValue()),
              (this.extraFilterDistance = this.blurRadius),
              (this.apply = function (e, t, i, n, r, o) {
                if (t.hasMixin(f)) {
                  var a = t.getEffects();
                  if (a) {
                    var s = new M(),
                      l = L.stdDeviationToPixel(this.blurRadius),
                      h = t.getGeometryBBox();
                    (h &&
                      (e.transform && (h = e.transform.mapRect(h)),
                      (l > h.getWidth() || l > h.getHeight()) &&
                        (l = L.pixelToStdDeviation(this.blurRadius))),
                      s.setProperty("r", l),
                      a.appendChild(s));
                  }
                }
              }));
          }),
          X.inherit(i.Element.feGaussianBlur, i.Element.ElementBase),
          (i.Element.title = function (e) {
            ((this.base = i.Element.ElementBase), this.base(e));
          }),
          X.inherit(i.Element.title, i.Element.ElementBase),
          (i.Element.desc = function (e) {
            ((this.base = i.Element.ElementBase), this.base(e));
          }),
          X.inherit(i.Element.desc, i.Element.ElementBase),
          (i.Element.MISSING = function (e) {
            ((this.base = i.Element.ElementBase),
              this.base(e),
              i.log(
                "ERROR: Element '" + e.nodeName + "' not yet implemented.",
              ));
          }),
          X.inherit(i.Element.MISSING, i.Element.ElementBase),
          (i.CreateElement = function (e) {
            var t = e.nodeName.replace(/^[^:]+:/, "");
            t = t.replace(/\-/g, "");
            var n = null;
            return (
              ((n =
                void 0 !== i.Element[t]
                  ? new i.Element[t](e)
                  : new i.Element.MISSING(e)).type = e.nodeName),
              n
            );
          }),
          i
        );
      };
    }