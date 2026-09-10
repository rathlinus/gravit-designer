/**
 * chunk.vendor.js Module #1455
 * Type: unknown
 */

function (e, t, i) {
      var n = i(147),
        r = i(139),
        o = i(283),
        a = i(2),
        s = i(1236),
        l = i(11),
        h = i(68),
        A = i(265),
        c = i(518),
        p = i(1202),
        u = i(1148),
        d = i(289),
        g = i(84),
        f = i(285),
        m = i(14),
        y = i(159),
        _ = i(60),
        v = i(214),
        b = (i(51), i(1458)),
        C = i(113),
        w = i(282),
        E = i(158),
        B = i(1459),
        x = i(138),
        P = i(1237),
        S = i(17),
        T = i(188),
        I = i(5),
        F = i(249),
        R = i(73),
        D = i(70),
        k = i(6),
        G = i(162),
        Q = i(7),
        M = i(122),
        N = i(216),
        U = i(1149),
        V = i(284),
        O = i(438),
        L = i(233),
        Y = i(321),
        X = i(432),
        H = i(852),
        W = i(48),
        Z = (i(95), i(160)),
        z = i(83),
        j = i(1465),
        J = i(28),
        q = i(22),
        K = i(798),
        $ = i(1466),
        ee = i(56),
        te = (i(1119), i(12)),
        ie = i(132),
        ne = i(801);

      function re() {}
      ((re.DefaultOptions = {
        forceRoot: !1,
        viewBox: !0,
        clipToPage: !1,
        preserveEditingCapabilities: !0,
        layerNamesAsId: !1,
        print: !1,
        rasterizeUnsupportedObjectsByCDR: void 0,
        useImageDictionary: !0,
        unit: ie.Unit.PT,
        dpi: ie.DPI,
        includeInvisible: !1,
        annotations: !1,
      }),
        (re.Encoders = {
          GScene: function (e) {},
          GPage: function (e) {},
          GArrowAnnotation: function (e) {
            re.checkNativeShape(e) || re.generateSvgPath(e);
          },
          GCommentAnnotation: function (e) {
            re.checkNativeShape(e) || re.generateSvgPath(e);
          },
          GEllipseAnnotation: function (e) {
            re.checkNativeShape(e) || re.generateSvgPath(e);
          },
          GHighlighterAnnotation: function (e) {
            re.checkNativeShape(e) || re.generateSvgPath(e);
          },
          GPencilAnnotation: function (e) {
            re.checkNativeShape(e) || re.generateSvgPath(e);
          },
          GRectangleAnnotation: function (e) {
            re.checkNativeShape(e) || re.generateSvgPath(e);
          },
          GTextAnnotation: function (e) {
            re.checkNativeShape(e) || re.generateSvgPath(e);
          },
          GEmptyAnnotation: function (e) {
            re.checkNativeShape(e) || re.generateSvgPath(e);
          },
          GRectangle: function (e) {
            re.checkNativeShape(e) || re.generateSvgPath(e);
          },
          GEllipse: function (e) {
            re.checkNativeShape(e) || re.generateSvgPath(e);
          },
          GPolygon: function (e) {
            re.checkNativeShape(e) || re.generateSvgPath(e);
          },
          GText: function (e) {
            re.generateSvgPath(e);
          },
          GLine: function (e) {
            re.checkNativeShape(e) || re.generateSvgPath(e);
          },
          GLayer: function (e) {},
          GGroup: function (e) {},
          GSymbol: function (e) {},
          GCompoundPath: function (e) {
            if (re.checkNativeShape(e));
            else {
              var t = e._renderContext,
                i = t.createSvgElement("g");
              (t.peek().appendChild(i), t.push(i));
              var n = {
                shape: e.toString(),
              };
              (H.addAttributes(i, n), re.generateSvgPath(e), t.pop());
            }
          },
          GPath: function (e) {
            var t = 0;
            if (e.rewindVertices(0))
              for (var i = new W(); e.readVertex(i) && 2 != ++t; );
            t < 2 ||
              (e.isLine()
                ? re.Encoders.GLine(e)
                : re.checkNativeShape(e) || re.generateSvgPath(e, {}));
          },
          GCompoundShape: function (e) {
            if (re.checkNativeShape(e));
            else {
              var t = e._renderContext,
                i = t.createSvgElement("g");
              (t.peek().appendChild(i), t.push(i));
              var n = {
                shape: e.toString(),
              };
              (H.addAttributes(i, n), re.generateSvgPath(e), t.pop());
            }
          },
          GImage: function (e) {
            re.exportImage(e);
          },
          GSlice: function () {},
          GPathsGraph: function (e) {
            re.generateSvgPath(e);
          },
        }),
        (re._node = null),
        (re._SUPPORTED_EFFECTS = [w, Y, F, X]),
        (re.isSupportedEffect = function (e) {
          return re._SUPPORTED_EFFECTS.some(function (t) {
            return e instanceof t;
          });
        }),
        (re.hasSupportedEffects = function (e) {
          var t = !1;
          return (
            e.accept(function (e) {
              if (e.hasMixin(J)) {
                var i = e.getEffects();
                if (
                  i &&
                  i.getChildren().some(function (e) {
                    return re.isSupportedEffect(e);
                  })
                )
                  return ((t = !0), !1);
              }
            }),
            t
          );
        }),
        (re.getUnsupportedFeatures = function (e, t) {
          if (((t = t || []), e.hasMixin(J))) {
            var i = [];
            l.each(e.getEffects().getChildren(), function (e, t) {
              re.isSupportedEffect(t) || i.push(t);
            });
            var n = e.getPaintLayers();
            (n &&
              n.getLayers(null, !0).forEach(function (e) {
                (e.$_pt instanceof A ||
                  e.$_pt instanceof r ||
                  e.$_pt instanceof o) &&
                  i.push(e.$_pt);
              }),
              i.length &&
                t.push({
                  name: e.getProperty("name") || e.getNodeNameTranslated(),
                  features: i,
                }));
          }
          if (e.hasMixin(a.Container))
            for (var s = e.getFirstChild(); null != s; s = s.getNext())
              re.getUnsupportedFeatures(s, t);
          return t;
        }),
        (re.hasUnsupportedObjectsByCDR = function (e) {
          if (re.hasUnsupportedEffects(e)) return !0;
          if (e.hasMixin(J)) {
            var t = e.getPaintLayers();
            if (t) {
              var i = t.getFillLayers(!0) || [];
              if (i.length > 1) return !0;
              var n = t.getBorderLayers(!0) || [];
              if (n.length > 1) return !0;
              if (
                i.some(function (e) {
                  return !(e.$_pt instanceof h);
                })
              )
                return !0;
              if (
                n.some(function (e) {
                  return !(e.$_pt instanceof h);
                })
              )
                return !0;
            }
            if (
              e
                .getEffects()
                .getChildren()
                .some(function (e) {
                  return !!e;
                })
            )
              return !0;
          }
          var r = !1;
          if (e.hasMixin(a.Container))
            for (var o = e.getFirstChild(); null != o; o = o.getNext())
              if (re.hasUnsupportedObjectsByCDR(o)) {
                r = !0;
                break;
              }
          return r;
        }),
        (re.hasUnsupportedEffects = function (e) {
          var t = !1;
          if (e.hasMixin(J)) {
            var i = e.getPaintLayers();
            if (
              i &&
              i.getFillLayers(!0).filter(function (e) {
                return (
                  e.$_pt instanceof A ||
                  e.$_pt instanceof r ||
                  e.$_pt instanceof o
                );
              }).length
            )
              return !0;
            l.each(e.getEffects().getChildren(), function (e, i) {
              re._SUPPORTED_EFFECTS.find(function (e) {
                return i instanceof e;
              }) || (t = !0);
            });
          }
          if (t) return t;
          if (e.hasMixin(a.Container))
            for (var n = e.getFirstChild(); null != n; n = n.getNext())
              re.hasUnsupportedEffects(n) && (t = !0);
          return t;
        }),
        (re.checkNativeShape = function (e) {
          var t = e._renderContext,
            i = l.extend({}, re.DefaultOptions);
          if (
            (l.extend(i, t.options || {}),
            "boolean" == typeof i.rasterizeUnsupportedObjectsByCDR)
          ) {
            if (
              i.rasterizeUnsupportedObjectsByCDR &&
              re.hasUnsupportedObjectsByCDR(e)
            )
              return !1;
          } else if (re.hasUnsupportedEffects(e)) return !1;
          var n = e.getTransform();
          if (
            (n || (n = new Q()),
            !n.isIdentity() && !(e instanceof v) && (!e) instanceof R)
          )
            return !1;
          var r,
            o = t.peek(),
            a = t.createSvgElement("g");
          if (e instanceof v) {
            var h = n.decomposed();
            if (
              e.getProperty("sa") == e.getProperty("ea") &&
              h.skew.isIdentity() &&
              h.rotate.isIdentity()
            ) {
              var A,
                c,
                p,
                u,
                d = e.getGeometryBBox(i.includeInvisible);
              ((A = d.getWidth() / 2),
                (c = d.getHeight() / 2),
                (p = d.getSide(k.Side.CENTER).getX()),
                (u = d.getSide(k.Side.CENTER).getY()));
              var g = te.isEqualEps(d.getWidth(), d.getHeight(), 1e-10);
              ((E = g
                ? t.createSvgElement("circle")
                : t.createSvgElement("ellipse")),
                a.appendChild(E),
                n.isIdentity() ||
                  E.setAttribute("vector-effect", "non-scaling-stroke"),
                E.setAttribute("cx", p),
                E.setAttribute("cy", u),
                g
                  ? E.setAttribute("r", A)
                  : (E.setAttribute("rx", A), E.setAttribute("ry", c)),
                O.setAttributeId(E, e, i),
                O.exportAttributes(E, e, i),
                re.setCommonFillStyles(e, E, void 0, i),
                re.renderBorder(t, e, E, a, i));
            } else re.renderAsNativePath(t, e, a, i);
          } else if (e instanceof _ && e.isLine()) {
            var f = t.createSvgElement("line");
            a.appendChild(f);
            var m = e._vertices._vertices;
            (f.setAttribute("x1", ne.formatNumber(m[0].x)),
              f.setAttribute("y1", ne.formatNumber(m[0].y)),
              f.setAttribute("x2", ne.formatNumber(m[1].x)),
              f.setAttribute("y2", ne.formatNumber(m[1].y)),
              O.setAttributeId(f, e, i),
              O.exportAttributes(f, e, i),
              re.setCommonStrokeStyles(e, f, i));
          } else if (e instanceof V)
            if (O.isPolygonNative(e)) {
              var y = t.createSvgElement("polygon");
              a.appendChild(y);
              var b = [];
              (e.iterateSegments(function (e, t, i) {
                t || (b.push(e.getX()), b.push(e.getY()));
              }, !0),
                y.setAttribute("points", ne.formatMatrix(b).join(",")),
                O.setAttributeId(y, e, i),
                O.exportAttributes(y, e, i),
                re.setCommonFillStyles(e, y, null, i),
                re.renderBorder(t, e, y, a, i));
            } else re.renderAsNativePath(t, e, a, i);
          else if (e instanceof _) re.renderAsNativePath(t, e, a, i);
          else if (e instanceof C) re.renderAsNativePath(t, e, a, i);
          else if (e instanceof L) re.renderAsNativePath(t, e, a, i);
          else if (e instanceof R) {
            var w,
              E = t.createSvgElement("rect");
            (a.appendChild(E),
              (w = n.isIdentity()
                ? e.getGeometryBBox(i.includeInvisible)
                : new k(-1, -1, 2, 2)));
            var x,
              P = e.getProperty("bl_sx"),
              S = e.getProperty("bl_sy"),
              T = (e.getProperty("br_sx"), e.getProperty("br_sy"), !1);
            if (
              (e.iterateSegments(function (e, t, i, n, r) {
                if (n > 0 || r > 0) return ((T = !0), !0);
              }),
              T)
            )
              return !1;
            (P || S) && (E.setAttribute("rx", P), E.setAttribute("ry", S));
            var F = new Q().getMatrix();
            if (n.isIdentity()) x = n.mapRect(w);
            else {
              var D = n.decomposed(),
                G = D.translate.mapPoint(new I(0, 0));
              ((F = new Q()
                .translated(-G.getX(), -G.getY())
                .multiplied(D.skew.multiplied(D.rotate))
                .translated(G.getX(), G.getY())
                .getMatrix()),
                (x = D.scale.multiplied(D.translate).mapRect(w)));
            }
            (E.setAttribute("x", "" + ne.formatNumber(x.getX())),
              E.setAttribute("y", "" + ne.formatNumber(x.getY())),
              E.setAttribute("width", "" + ne.formatNumber(x.getWidth())),
              E.setAttribute("height", "" + ne.formatNumber(x.getHeight())),
              E.setAttribute(
                "transform",
                "matrix(" + ne.formatMatrix(F).join(",") + ")",
              ),
              O.setAttributeId(E, e, i),
              O.exportAttributes(E, e, i),
              re.setCommonFillStyles(e, E, Q.deserialize(F), i),
              re.renderBorder(t, e, E, a, i));
          }
          var M = new U(),
            N = e.getProperty("_sbl");
          if (N && "normal" !== N)
            switch (N) {
              case "m":
              case "!m":
                r = N;
                break;
              default:
                M.set("mix-blend-mode", N);
            }
          var Y = e.getProperty("_stop");
          1 != Y && a.setAttribute("opacity", Y);
          var X = t.createSvgElement("defs"),
            H = {};
          return (
            B.getEffectMarkup(e, H, X),
            H.filter && (a.setAttribute("filter", H.filter), o.appendChild(X)),
            r
              ? s.createMask(t, a.children[0], o, "!m" === r)
              : (M.setElementStyle(a), o.appendChild(a)),
            !0
          );
        }),
        (re.renderAsNativePath = function (e, t, i, n) {
          var r = t.toSVGPath(ne.formatNumber),
            o = e.createSvgElement("path");
          (i.appendChild(o),
            o.setAttribute("d", r),
            t.getProperty("evenodd") && o.setAttribute("fill-rule", "evenodd"),
            O.setAttributeId(o, t, e.options),
            O.exportAttributes(o, t, e.options),
            re.setCommonFillStyles(t, o, null, n),
            re.setCommonStrokeStyles(t, o, n));
        }),
        (re.renderBorder = function (e, t, i, n, r) {
          re.setCommonStrokeStyles(t, i, r);
        }),
        (re.checkRasterize = function (e) {
          var t = e._renderContext,
            i = l.extend({}, re.DefaultOptions);
          l.extend(i, t.options || {});
          var n = !1;
          if (
            ("boolean" == typeof i.rasterizeUnsupportedObjectsByCDR
              ? i.rasterizeUnsupportedObjectsByCDR &&
                (n = re.hasUnsupportedObjectsByCDR(e))
              : (n = re.hasUnsupportedEffects(e)),
            n)
          ) {
            var r,
              o,
              a,
              s,
              h,
              p,
              u = e.getPaintBBox(!1, null, i.includeInvisible);
            if (
              ((a = u.getX()),
              (s = u.getY()),
              (r = u.getWidth()),
              (o = u.getHeight()),
              e.hasMixin(J))
            ) {
              var d = e.getPaintLayers();
              if (d)
                d.getFillLayers(!0).some(function (e) {
                  return e.$_pt instanceof A || e.$_pt instanceof c;
                }) &&
                  (p = K.export(
                    e.getPage(),
                    null,
                    null,
                    null,
                    i.dpi || 72,
                    null,
                    null,
                    e.getPaintBBox(!1, null, i.includeInvisible),
                  ));
            }
            (p || (p = K.export(e, null, null, null, i.dpi || 72)),
              (h = p.toImageDataUrl("image/png", null)));
            t.svgDoc;
            var g = t.peek(),
              f = t.createSvgElement("g");
            g.appendChild(f);
            var m = t.createSvgElement("image");
            (f.appendChild(m),
              m.setAttribute("xlink:href", h),
              m.setAttribute("x", "" + ne.formatNumber(a)),
              m.setAttribute("y", "" + ne.formatNumber(s)),
              m.setAttribute("width", ne.formatNumber(r)),
              m.setAttribute("height", ne.formatNumber(o)));
            var y = new U(),
              _ = e.getProperty("_sbl");
            (_ && "normal" !== _ && y.set("mix-blend-mode", _),
              m.setAttribute("style", y.toString()),
              (e._renderContext.wasRasterized = !0));
          }
          return n;
        }),
        (re.getTargetPath = function (e) {
          for (var t = e.lastChild; t && "g" === t.tagName; ) t = t.firstChild;
          return t;
        }),
        (re.generateSvgPath = function (e, t, i) {
          if (!re.checkRasterize(e)) {
            ((re._node = e), (t = t || {}), (i = i || {}));
            var n = e._paintContext,
              r = e._renderContext,
              o = n.getSvgPaths().length;
            e.paint(n);
            var a = r.svgDoc,
              h = r.peek(),
              A = r.createSvgElement("g");
            (h.appendChild(A),
              e instanceof D &&
                (r.push(A), e.getTLCore().renderSVG(r), r.pop()));
            var c = r.createSvgElement("defs");
            (i.ignoreFilter ||
              (B.getEffectMarkup(e, t, c),
              t.filter && A.setAttribute("filter", t.filter)),
              l.each(n.getSvgPaths().slice(o), function (t, i) {
                var r = n.getSvgStyle(o + t, c),
                  s = n.getGlobalCompositeOperation(o + t),
                  l = n.getGlobalAlpha(o + t);
                if (e instanceof D)
                  switch (s) {
                    case "normal":
                    case "multiply":
                    case "screen":
                    case "overlay":
                    case "darken":
                    case "lighten":
                    case "color-dodge":
                    case "color-burn":
                    case "hard-light":
                    case "soft-light":
                    case "difference":
                    case "exclusion":
                    case "hue":
                    case "saturation":
                    case "color":
                    case "luminosity":
                      (A.setAttribute("style", "mix-blend-mode:" + s + ";"),
                        1 != l && "1" !== l && A.setAttribute("opacity", l));
                  }
                else {
                  if (void 0 !== i.drawImage)
                    return void re.renderExportCanvas(n, a, c, A, i, s, l);
                  var h = {
                    isMask: !1,
                    maskTarget: A,
                  };
                  re.processPath(
                    a,
                    A,
                    c,
                    i,
                    r,
                    n.getSvgStyleObject(o + t),
                    s,
                    h,
                  );
                }
              }),
              c.childNodes.length > 0 && h.insertBefore(c, A),
              e instanceof _ &&
                e.getChildren().length > 0 &&
                s.createClipPath(e, A),
              (re._node = null));
          }
        }),
        (re.setCommonFillStyles = function (e, t, i, r) {
          if (e.hasMixin(J)) {
            var o = e.getPaintLayers();
            if (o) {
              var a = o.getFillLayers(!0);
              if (a.length)
                return void l.each(
                  a,
                  function (o, a) {
                    if (o > 0) {
                      var s = t.parentNode;
                      ((t = t.cloneNode()),
                        s.appendChild(t),
                        t.removeAttribute("fill"),
                        t.removeAttribute("fill-opacity"));
                    }
                    var l,
                      h = a.getProperty("_vs"),
                      A = a.getProperty("_op"),
                      c = a.getProperty("_pt"),
                      p = a.getProperty("_bl"),
                      d = e.getPatternBBox(r.includeInvisible),
                      g = e.getTransform() || new Q();
                    if (h)
                      if (null == c) l = "rgba(0,0,0,0)";
                      else if (c instanceof n) {
                        var f = u.createSvgLinearGradient(
                          e._renderContext,
                          e._renderContext.svgDoc,
                          c,
                          d,
                          g,
                          i,
                        );
                        (t.parentNode.insertBefore(f, t),
                          (l = "url(#" + f.getAttribute("id") + ")"));
                      } else if (c instanceof E) {
                        f = u.createSvgRadialGradient(
                          e._renderContext,
                          e._renderContext.svgDoc,
                          c,
                          d,
                          g,
                          i,
                        );
                        (t.parentNode.insertBefore(f, t),
                          (l = "url(#" + f.getAttribute("id") + ")"));
                      } else
                        c instanceof S || c instanceof T
                          ? (l = H.formatRGB(a, ""))
                          : ((l = "none"),
                            console.log("Paint type not supported"));
                    else l = "none";
                    (t.setAttribute("fill", l),
                      1 != A && t.setAttribute("fill-opacity", A));
                    var y = new U(t.getAttribute("style"));
                    (p && p !== m.BlendMode.Normal
                      ? y.set("mix-blend-mode", p)
                      : y.remove("mix-blend-mode"),
                      y.setElementStyle(t));
                  }.bind(this),
                );
            }
          }
          t.setAttribute("fill", "none");
        }),
        (re.setCommonStrokeStyles = function (e, t, i) {
          if (e.hasMixin(J)) {
            var r = e.getPaintLayers();
            if (r) {
              var o = r.getBorderLayers(!0);
              if (o.length) {
                var a,
                  h = o.length > 1 || r.getFillLayers(!0).length > 1,
                  A = [],
                  c = function (e, t) {
                    e &&
                      A.push({
                        vertexSource: e,
                        properties: t,
                      });
                  };
                (l.each(
                  o,
                  function (r, o) {
                    var A = t;
                    h &&
                      ((A = t.cloneNode(!0)).setAttribute("fill", "none"),
                      A.removeAttribute("stroke"),
                      A.removeAttribute("stroke-width"),
                      A.removeAttribute("stroke-dasharray"),
                      A.removeAttribute("stroke-opacity"),
                      A.removeAttribute("stroke-linejoin"),
                      A.removeAttribute("stroke-linecap"),
                      A.removeAttribute("stroke-miterlimit"),
                      A.removeAttribute("mask"),
                      a ||
                        ((a = e._renderContext.svgDoc.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "g",
                        )).setAttribute("style", "isolation: isolate;"),
                        t.parentNode.appendChild(a)),
                      a.appendChild(A));
                    var p,
                      d = o.getProperty("_bw"),
                      g = o.getProperty("_ba"),
                      f = A;
                    if (
                      (e instanceof R || e instanceof v) &&
                      g === J.BorderAlignment.Outside
                    ) {
                      ((f = A.cloneNode(!1)), A.parentNode.insertBefore(f, A));
                      var y = {};
                      (e instanceof R
                        ? ((y.x = parseFloat(A.getAttribute("x")) - d / 2),
                          (y.y = parseFloat(A.getAttribute("y")) - d / 2),
                          (y.width = parseFloat(A.getAttribute("width")) + d),
                          (y.height = parseFloat(A.getAttribute("height")) + d))
                        : e instanceof v &&
                          (y.r = parseFloat(A.getAttribute("r")) + d / 2),
                        Object.keys(y).forEach(function (e) {
                          f.setAttribute(e, y[e]);
                        }),
                        O.replaceFill(f, "transparent"));
                    } else if (g !== J.BorderAlignment.Center) {
                      d *= 2;
                      var _ = A.cloneNode(!0);
                      (s.createMask(
                        e._renderContext,
                        _,
                        A,
                        g === J.BorderAlignment.Outside,
                        !0,
                      ),
                        A.hasAttribute("fill") &&
                          ((_ = A.cloneNode(!0)).removeAttribute("stroke"),
                          _.removeAttribute("stroke-width"),
                          _.removeAttribute("stroke-dasharray"),
                          _.removeAttribute("stroke-opacity"),
                          _.removeAttribute("stroke-linejoin"),
                          _.removeAttribute("stroke-linecap"),
                          _.removeAttribute("stroke-miterlimit"),
                          _.removeAttribute("mask"),
                          t.parentNode.insertBefore(_, t)));
                    }
                    !(function (t) {
                      (t.setAttribute("vector-effect", "non-scaling-stroke"),
                        t.setAttribute("stroke-width", ne.formatNumber(d)));
                      var r = o.getProperty("_bds");
                      r &&
                        r.length &&
                        (r.length < 2 && r.push(r[0]),
                        t.setAttribute("stroke-dasharray", r.join(",")));
                      var a = o.getProperty("_pt");
                      e.getPatternBBox(i.includeInvisible);
                      if (null == a) p = "rgba(0,0,0,0)";
                      else if (a instanceof n) {
                        var s = u.createSvgLinearGradient(
                          e._renderContext,
                          e._renderContext.svgDoc,
                          a,
                        );
                        (t.parentNode.insertBefore(s, A),
                          (p = "url(#" + s.getAttribute("id") + ")"));
                      } else if (a instanceof E) {
                        s = u.createSvgRadialGradient(
                          e._renderContext,
                          e._renderContext.svgDoc,
                          a,
                        );
                        (t.parentNode.insertBefore(s, A),
                          (p = "url(#" + s.getAttribute("id") + ")"));
                      } else
                        a instanceof S || a instanceof T
                          ? (p = H.formatRGB(o, ""))
                          : ((p = "none"),
                            console.log("Paint type not supported"));
                      t.setAttribute("stroke", p);
                      var l = o.getProperty("_op");
                      1 != l && t.setAttribute("stroke-opacity", l);
                      var h = o.getProperty("_blj");
                      if (h)
                        switch (h) {
                          case m.LineJoin.Round:
                            t.setAttribute("stroke-linejoin", "round");
                            break;
                          case m.LineJoin.Miter:
                            t.setAttribute("stroke-linejoin", "miter");
                            break;
                          case m.LineJoin.Bevel:
                            t.setAttribute("stroke-linejoin", "bevel");
                        }
                      var c = o.getProperty("_blc");
                      if (c)
                        switch (c) {
                          case m.LineCap.Butt:
                            t.setAttribute("stroke-linecap", "butt");
                            break;
                          case m.LineCap.Round:
                            t.setAttribute("stroke-linecap", "round");
                            break;
                          case m.LineCap.Square:
                            t.setAttribute("stroke-linecap", "square");
                        }
                      var g = o.$_bml;
                      (e instanceof ee && (g = e.calculateMitterLimit(o)),
                        g && t.setAttribute("stroke-miterlimit", g));
                      var f = o.getProperty("_bl"),
                        y = new U(t.getAttribute("style"));
                      (f && f !== m.BlendMode.Normal
                        ? y.set("mix-blend-mode", f)
                        : y.remove("mix-blend-mode"),
                        y.setElementStyle(t));
                    })(f);
                    var b = {
                      paint: p,
                      bw: o.$_bw,
                    };
                    (c(
                      e.getHeadMarkerVertices(o),
                      l.extend(
                        {
                          outlined: o.$_bhmo,
                        },
                        b,
                      ),
                    ),
                      c(
                        e.getTailMarkerVertices(o),
                        l.extend(
                          {
                            outlined: o.$_btmo,
                          },
                          b,
                        ),
                      ));
                  }.bind(this),
                ),
                  A.forEach(function (n) {
                    var r = n.vertexSource.toSVGPath(ne.formatNumber),
                      o = e._renderContext.createSvgElement("path");
                    o.setAttribute("d", r);
                    var a = n.properties.paint;
                    if (-1 !== a.indexOf("url")) {
                      var s = e._renderContext.svgDoc,
                        h = s.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "pattern",
                        );
                      (h.setAttribute("id", "_pattern_" + l.uuid(3)),
                        h.setAttribute(
                          "width",
                          s.firstElementChild.getAttribute("width"),
                        ),
                        h.setAttribute(
                          "height",
                          s.firstElementChild.getAttribute("height"),
                        ),
                        h.setAttribute("patternUnits", "userSpaceOnUse"));
                      var A = e.getPaintBBox(!1, null, i.includeInvisible),
                        c = e._renderContext.createSvgElement("rect");
                      (c.setAttribute("x", ne.formatNumber(A.getX())),
                        c.setAttribute("y", ne.formatNumber(A.getY())),
                        c.setAttribute("width", ne.formatNumber(A.getWidth())),
                        c.setAttribute(
                          "height",
                          ne.formatNumber(A.getHeight()),
                        ),
                        c.setAttribute("fill", n.properties.paint),
                        h.appendChild(c),
                        (a = O.createIdUrl(h.getAttribute("id"))),
                        t.parentNode.appendChild(h));
                    }
                    (-1 === r.indexOf("Z") || n.properties.outlined
                      ? (o.setAttribute("fill", "none"),
                        o.setAttribute("stroke", a),
                        o.setAttribute("stroke-width", n.properties.bw))
                      : (o.setAttribute("fill", a),
                        o.setAttribute("stroke", "none")),
                      t.parentNode.appendChild(o));
                  }));
              }
            }
          }
        }),
        (re.processPath = function (e, t, i, n, r, o, a, s) {
          var h = e.createElementNS("http://www.w3.org/2000/svg", "path");
          if (s.isMask) {
            var A = s.isInverse ? "black" : "white";
            ("none" !== r.get("fill") && r.set("fill", A),
              "none" !== r.get("stroke") && r.set("stroke", A));
          }
          for (var c in m.BlendMode)
            if (m.BlendMode[c] === a) {
              r.set("mix-blend-mode", a);
              break;
            }
          (h.setAttribute("d", n), h.setAttribute("style", r.toString()));
          var p = t,
            u = a;
          switch (u) {
            case "normal":
            case "multiply":
            case "screen":
            case "overlay":
            case "darken":
            case "lighten":
            case "color-dodge":
            case "color-burn":
            case "hard-light":
            case "soft-light":
            case "difference":
            case "exclusion":
            case "hue":
            case "saturation":
            case "color":
            case "luminosity":
            case "source-over":
              p.appendChild(h);
              break;
            case "source-in":
              if (re._node instanceof G) {
                if (2 == t.parentElement.getElementsByTagName("g").length)
                  return void t.remove();
                var d = r.get("fill");
                if (o.fillStyle instanceof x) {
                  var g = e.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "pattern",
                  );
                  (g.setAttribute("id", "_pattern_" + l.uuid(3)),
                    g.setAttribute(
                      "width",
                      e.firstElementChild.getAttribute("width"),
                    ),
                    g.setAttribute(
                      "height",
                      e.firstElementChild.getAttribute("height"),
                    ),
                    g.setAttribute("patternUnits", "userSpaceOnUse"),
                    g.appendChild(h),
                    t.insertBefore(g, t.firstChild),
                    (d = O.createIdUrl(g.getAttribute("id"))));
                }
                l.each(t.childNodes, function (e, t) {
                  t.style &&
                    t.style.stroke &&
                    "none" !== t.style.stroke &&
                    (t.style.stroke = d);
                });
              }
              break;
            case "destination-in":
              var f = "_mask_" + l.uuid();
              if (((b = s.maskTarget) || (b = re.getTargetPath(p)), !b)) {
                console.warn("target path not found for destination-in");
                break;
              }
              if (b.getAttribute("mask")) {
                var y = e.createElementNS("http://www.w3.org/2000/svg", "g"),
                  _ = s.maskTarget;
                (_.parentNode.insertBefore(y, _),
                  y.setAttribute("mask", "url(#" + f + ")"),
                  _.parentNode.removeChild(_),
                  y.appendChild(_),
                  (s.maskTarget = y));
              } else b.setAttribute("mask", "url(#" + f + ")");
              if (!(v = void 0)) {
                var v = e.createElementNS("http://www.w3.org/2000/svg", "mask");
                (i.appendChild(v), v.setAttribute("id", f), v.appendChild(h));
              }
              h.getAttribute("style");
              o._isStroke
                ? O.replaceFillAndStroke(h, "black", "white")
                : O.replaceFillAndStroke(h, "white", "black");
              break;
            case "destination-out":
              var b;
              f = "_mask_" + l.uuid();
              if (((b = s.maskTarget) || (b = re.getTargetPath(p)), !b)) {
                console.warn("target path not found for destination-out");
                break;
              }
              if (b.getAttribute("mask")) {
                y = e.createElementNS("http://www.w3.org/2000/svg", "g");
                (p.lastChild.parentNode.insertBefore(y, p.lastChild),
                  y.setAttribute("mask", "url(#" + f + ")"),
                  y.appendChild(p.lastChild));
              } else b.setAttribute("mask", "url(#" + f + ")");
              if (!(C = void 0)) {
                var C = e.createElementNS("http://www.w3.org/2000/svg", "mask");
                (i.appendChild(C), C.setAttribute("id", f));
              }
              C.appendChild(h);
              var w = b.cloneNode(!0);
              (w.removeAttribute("mask"),
                w.removeAttribute("fill"),
                w.removeAttribute("stroke"),
                o._isStroke,
                O.replaceFillAndStroke(w, "white", "black"),
                C.setAttribute("filterUnits", "userSpaceOnUse"),
                C.setAttribute("x", "-1000%"),
                C.setAttribute("y", "-1000%"),
                C.setAttribute("width", "2000%"),
                C.setAttribute("height", "2000%"),
                C.appendChild(w),
                C.appendChild(h));
              break;
            default:
              console.log(u);
          }
        }),
        (re.renderExportCanvas = function (e, t, i, n, r, o, a) {
          var l = t.createElementNS("http://www.w3.org/2000/svg", "g");
          n.appendChild(l);
          var h = {
            isMask: !1,
            maskTarget: l,
          };
          switch (o) {
            case "normal":
            case "multiply":
            case "screen":
            case "overlay":
            case "darken":
            case "lighten":
            case "color-dodge":
            case "color-burn":
            case "hard-light":
            case "soft-light":
            case "difference":
            case "exclusion":
            case "hue":
            case "saturation":
            case "color":
            case "luminosity":
              (n.setAttribute("style", "mix-blend-mode:" + o + ";"),
                1 != a && "1" !== a && n.setAttribute("opacity", a));
              break;
            case "destination-in":
            case "destination-out":
              s.createMaskDefinition(t, o, n, h);
          }
          var A = r.drawImage._canvasContext,
            c = e.canvas;
          e.canvas = r.drawImage;
          for (var p = 0; p < A._svgs.length; p++) {
            var u = A._svgs[p],
              d = A._svgStyles[p],
              g = e.getSvgStyle(p, i);
            if (
              ((d._transform = d._transform.translated(
                r.drawImage._offset._x,
                r.drawImage._offset._y,
              )),
              void 0 !== u.drawImage)
            ) {
              ((o = e.getGlobalCompositeOperation(p)),
                (a = e.getGlobalAlpha(p)));
              var f = t.createElementNS("http://www.w3.org/2000/svg", "g");
              (l.appendChild(f), re.renderExportCanvas(e, t, i, f, u, o, a));
            } else
              re.processPath(
                t,
                l,
                i,
                u,
                g,
                e.getSvgStyleObject(p),
                d.globalCompositeOperation,
                h,
              );
          }
          e.canvas = c;
        }),
        (re.export = function (e, t, i) {
          var n = (t = t || re.DefaultOptions).backgroundColor,
            r =
              n && "number" == typeof t.backgroundOpacity
                ? t.backgroundOpacity
                : 1,
            o = !!t.includeInvisible && t.includeInvisible;
          if (i) {
            var a = null,
              s = null;
            n &&
              e instanceof z &&
              ((a = e.getProperty("bck")),
              (s = e.getProperty("bop")),
              e.setProperties(["bck", "bop"], [n, r]));
            try {
              var l = 3;
              (isNaN(t.decimalPlacesPrecision) ||
                (l = parseInt(t.decimalPlacesPrecision)),
                ne.setDecimalPlacesPrecision(l));
              var h = new P(new j(null, t));
              h.getRootCanvas()._createContext = function () {
                return new j(null, t);
              };
              var A,
                c = new p(t, h, i);
              if (!(e instanceof Z)) {
                var u = H.getBoundingBox(e, o);
                if (!u) return void i("Missing BBox");
                e instanceof d && ((A = e.$cls), (e = e.getScene()));
                var g =
                  ne.formatNumber(u.getX()) +
                  " " +
                  ne.formatNumber(u.getY()) +
                  " " +
                  ne.formatNumber(u.getWidth()) +
                  " " +
                  ne.formatNumber(u.getHeight());
                (c.svgDoc.documentElement.setAttribute("viewBox", g),
                  c.svgDoc.documentElement.setAttribute(
                    "width",
                    ne.formatNumber(u.getWidth()) + ie.Unit.PT,
                  ),
                  c.svgDoc.documentElement.setAttribute(
                    "height",
                    ne.formatNumber(u.getHeight()) + ie.Unit.PT,
                  ),
                  (c.viewBox = u));
              }
              (c.beginJob(e.toString()),
                re.renderNode(e, c, A, o),
                t.preserveEditingCapabilities &&
                  this.addEditingCapabilities(c, e),
                new b(c.svgDoc).postProcess(),
                c.endJob(e.toString()));
            } finally {
              n && e instanceof z && e.setProperties(["bck", "bop"], [a, s]);
            }
          } else
            console.error("No fnResult callback passed to GSVGExport.export.");
        }),
        (re.addEditingCapabilities = function (e, t) {
          var i = l.compressString(a.serialize(t)),
            n = e.svgDoc,
            r = n.documentElement,
            o = e.createSvgElement("switch");
          r.appendChild(o);
          var s = l.find(r.children, function (e) {
            return "g" === e.nodeName;
          });
          (r.removeChild(s), o.appendChild(s));
          var h = e.createSvgElement("foreignObject");
          h.setAttribute("requiredExtensions", p.XMLNamespaceURI);
          var A = l.uuid(),
            c = e.createInternalSvgElement("gravitElementRef", {
              "xlink:href": "#" + A,
            });
          (h.appendChild(c), o.appendChild(h));
          var u = e.createInternalSvgElement("gravitGraphicSource", {
            id: A,
            version: 1,
          });
          r.appendChild(u);
          var d = n.createCDATASection(i);
          u.appendChild(d);
        }),
        (re.exportImage = function (e) {
          var t = e._renderContext,
            i = l.extend({}, re.DefaultOptions);
          if ((l.extend(i, t.options || {}), !re.checkRasterize(e))) {
            t = e._renderContext;
            var n,
              r = e.getTransform(!0);
            if (0 != (n = null != r ? r.getRotationFactor() : 0)) {
              var o = e.getCenter(!0),
                a = new Q()
                  .translated(-o.getX(), -o.getY())
                  .scaled(1, 1)
                  .rotated(-n)
                  .translated(o.getX(), o.getY());
              (e.transform(a),
                e.getGeometryBBox(i.includeInvisible),
                e.transform(a.inverted()));
            } else e.getGeometryBBox(i.includeInvisible);
            var s,
              h = {},
              A = t.createSvgElement("defs");
            ((s = i.useImageDictionary
              ? t.createImageElement(e)
              : t.createSvgElement("image")),
              B.getEffectMarkup(e, h, A),
              A.childNodes.length > 0 && t.peek().appendChild(A),
              t.peek().appendChild(s));
            var c,
              p,
              u = new U(),
              d = e.getImageCanvas();
            if (d) {
              var g = e.getImageTransform() || new Q();
              (i.useImageDictionary ||
                (s.setAttribute("width", d.width),
                s.setAttribute("height", d.height)),
                s.setAttribute(
                  "transform",
                  "matrix(" + ne.formatNumber(g.getMatrix()).join(",") + ")",
                ),
                s.setAttribute("preserveAspectRatio", "none"),
                (x = e.getProperty("_sbl")) &&
                  "normal" !== x &&
                  "m" !== x &&
                  "!m" != x &&
                  u.set("mix-blend-mode", x));
              var f = e.getProperty("_stop");
              (1 != f && u.set("opacity", f),
                i.useImageDictionary ||
                  s.setAttribute("xlink:href", d.toDataURL()),
                s.setAttribute("style", u.toString()));
            } else
              (s.parentNode.removeChild(s),
                A.parentNode && A.parentNode.removeChild(s));
            if ("m" === (w = e.getProperty("_sbl"))) {
              var m = "_mask_" + l.uuid();
              ((E = s.ownerDocument.createElementNS(
                "http://www.w3.org/2000/svg",
                "mask",
              )).setAttribute("id", m),
                (P = s.parentNode).removeChild(s),
                l.each(P.childNodes, function (e, t) {
                  t.setAttribute("mask", "url(#" + m + ")");
                }),
                P.appendChild(E),
                E.appendChild(s));
              var y = "_mask_filter_" + l.uuid(8);
              s.setAttribute("filter", "url(#" + y + ")");
              var _ = s.ownerDocument.createElementNS(
                "http://www.w3.org/2000/svg",
                "filter",
              );
              (P.appendChild(_), _.setAttribute("id", y));
              var v = s.ownerDocument.createElementNS(
                "http://www.w3.org/2000/svg",
                "feColorMatrix",
              );
              (_.appendChild(v),
                v.setAttribute("type", "matrix"),
                v.setAttribute("in", "SourceAlpha"),
                v.setAttribute(
                  "values",
                  "0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0",
                ));
            } else if ("!m" === w) {
              m = "_mask_" + l.uuid();
              ((E = s.ownerDocument.createElementNS(
                "http://www.w3.org/2000/svg",
                "mask",
              )).setAttribute("id", m),
                (P = s.parentNode).removeChild(s),
                l.each(P.childNodes, function (e, t) {
                  t.setAttribute("mask", "url(#" + m + ")");
                }),
                P.appendChild(E),
                E.appendChild(s));
              y = "_mask_filter_" + l.uuid(8);
              s.setAttribute("filter", "url(#" + y + ")");
              _ = s.ownerDocument.createElementNS(
                "http://www.w3.org/2000/svg",
                "filter",
              );
              (P.appendChild(_), _.setAttribute("id", y));
              v = s.ownerDocument.createElementNS(
                "http://www.w3.org/2000/svg",
                "feColorMatrix",
              );
              (_.appendChild(v),
                v.setAttribute("type", "matrix"),
                v.setAttribute("in", "SourceAlpha"),
                v.setAttribute(
                  "values",
                  "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0",
                ));
              var b = s.ownerDocument.createElementNS(
                "http://www.w3.org/2000/svg",
                "rect",
              );
              (s.parentNode.insertBefore(b, s),
                b.setAttribute("x", "0"),
                b.setAttribute("y", "0"),
                b.setAttribute("width", "100%"),
                b.setAttribute("height", "100%"),
                b.setAttribute("fill", "white"));
            }
            (e.hasMixin(J) &&
              (p = e.getPaintLayers()) &&
              (c = p.getFillLayers()),
              p && p.clearFillLayers(),
              re.generateSvgPath(e, h),
              c &&
                l.each(c, function (e, t) {
                  p.appendChild(t);
                }));
            var C = Array.prototype.slice
              .call(t.peek().getElementsByTagName("defs"))
              .slice(-1)
              .pop();
            if (C) {
              var w,
                E,
                x,
                P = s.parentNode,
                S = C.getElementsByTagName("filter")[0];
              if (S) {
                var T = t.createSvgElement("g");
                (T.setAttribute("filter", "url(#" + S.getAttribute("id") + ")"),
                  P.appendChild(T),
                  (P = T));
              }
              if ((w = C.getElementsByTagName("mask")[0]))
                ((E = t.createSvgElement("g")).setAttribute(
                  "mask",
                  "url(#" + w.getAttribute("id") + ")",
                ),
                  E.appendChild(s),
                  (x = e.getProperty("_sbl")) &&
                    "normal" !== x &&
                    "m" !== x &&
                    "!m" != x &&
                    E.setAttribute("style", "mix-blend-mode:" + x),
                  P.appendChild(E));
            }
          }
        }),
        (re._shouldConverTextToPath = function (e, t) {
          if (t && t.convertTextToPath) return !0;
          if (e.isFakeText()) return !0;
          var i = e.getPaintLayers(),
            n = i.getFillLayers(!0),
            r = i.getBorderLayers(!0);
          return !!(n.length > 1 || r.length > 1 || e.getProperty("dir"));
        }),
        (re._shouldRenderNode = function (e) {
          return e instanceof q && !(e instanceof D && !e.hasStyleFill());
        }),
        (re.renderNode = function (e, t, i, n) {
          if (re._shouldRenderNode(e)) {
            var r = e.getProperty("vis");
            if (!1 !== r || n) {
              var o = !1;
              if (e instanceof D)
                if (re._shouldConverTextToPath(e, t.options)) {
                  o = !0;
                  for (var h = e.getTextShapes(), A = 0; A < h.length; A++)
                    re.renderNode(h[A], t, null, n);
                } else {
                  var c = Object.create(Object.getPrototypeOf(e));
                  (l.extend(c, e),
                    (c.__source__ = e),
                    c.setTLCore(new $(e, t.options)),
                    (c._finishPaint = function (e) {
                      (this.__proto__._finishPaint.call(this, e),
                        (this.__source__._runsDirty = !0));
                    }),
                    (e = c));
                }
              ((e._export = {}),
                (e._renderContext = t),
                (e._paintContext = t.paintContext));
              var p = !1,
                u = !1,
                d = !1,
                m = t.paintContext._ignoreContents;
              if (((t.paintContext._ignoreContents = !1), e instanceof Z)) {
                var v = t.svgDoc.documentElement,
                  b = null,
                  C = v.getAttribute("width"),
                  w = v.getAttribute("height");
                if (!C || !w) {
                  var E = e.getPaintBBox(!0, null, n);
                  if (e.isFixedSized())
                    ((C = (b = new k(0, 0, E.getWidth(), E.getHeight()))
                      .getWidth()
                      .toString()),
                      (w = b.getHeight().toString()),
                      (t._ignoreContents = !0));
                  else {
                    b = E || new k(0, 0, 0, 0);
                    var x = t.createSvgElement("g");
                    (0, t.peek().appendChild(x), t.push(x));
                    var P = 0 - b.getX(),
                      T = 0 - b.getY();
                    (x.setAttribute(
                      "transform",
                      "translate(" +
                        ne.formatNumber(P) +
                        "," +
                        ne.formatNumber(T) +
                        ")",
                    ),
                      (C = (b.getWidth() + 0).toString()),
                      (w = (b.getHeight() + 0).toString()));
                    var I = t.createSvgElement("g");
                    (x.appendChild(I),
                      t.push(I),
                      (t.globalOffset = {
                        x: P,
                        y: T,
                      }));
                  }
                  (v.setAttribute("width", ne.formatNumber(C)),
                    v.setAttribute("height", ne.formatNumber(w)));
                }
                re.setVisibility(v, r);
              } else if (e instanceof M || e instanceof y || e instanceof N) {
                if (e instanceof M || e instanceof N) {
                  var F = l.extend({}, re.DefaultOptions);
                  l.extend(F, t.options || {});
                  var R = !1;
                  ("boolean" == typeof F.rasterizeUnsupportedObjectsByCDR
                    ? F.rasterizeUnsupportedObjectsByCDR &&
                      (R = re.hasUnsupportedObjectsByCDR(e))
                    : (R = re.hasUnsupportedEffects(e)),
                    R &&
                      (re.generateSvgPath(e, {}),
                      (p = e._renderContext.wasRasterized)));
                }
                if (!p) {
                  var G;
                  ((G = t.createSvgElement("g")),
                    e instanceof y &&
                      G.setAttribute("style", "isolation:isolate"),
                    O.setAttributeId(G, e, e._renderContext.options),
                    O.exportAttributes(G, e, e._renderContext.options));
                  var Q = new U(),
                    V = e.getProperty("_sbl");
                  V && "normal" !== V && Q.set("mix-blend-mode", V);
                  var Y = e.getProperty("_stop");
                  (Y && 1 != Y && Q.set("opacity", Y),
                    Q.getLength() > 0 && G.setAttribute("style", Q.toString()),
                    t.peek().appendChild(G),
                    t.push(G));
                  var X = t.createSvgElement("defs"),
                    H = {};
                  (B.getEffectMarkup(e, H, X),
                    H.filter &&
                      (G.setAttribute("filter", H.filter),
                      G.parentNode.appendChild(X)));
                }
              } else if (!e.hasMixin(g) || e instanceof f)
                if (e instanceof _) {
                  x = t.createSvgElement("g");
                  (0,
                    (d =
                      e.hasMixin(a.Container) && e.getChildren().length > 0));
                } else
                  e instanceof L
                    ? (u = !0)
                    : e instanceof z ||
                      (d =
                        e.hasMixin(a.Container) && e.getChildren().length > 0);
              else ((u = !0), (d = !1));
              d && (t.paintContext._ignoreContents = function (e, t) {});
              var W = !1;
              (e.hasMixin(J) &&
                (W = (j = e.getPaintLayers()) && j.hasStyleFill()),
                W || (e instanceof D && (W = o || !!e.getProperty("_fc"))));
              var j,
                q = d && !W && (!j || !j.getBorderLayers(!0).length);
              if (
                (q &&
                  j &&
                  j.appendChild(new J.FillPaintLayer(new S([255, 255, 255]))),
                !o)
              ) {
                var K = e.toString().replace(/[\[\]]/g, "");
                K = K.replace(/^Object /, "");
                var ee = re.Encoders[K];
                ee instanceof Function
                  ? p ||
                    ((e._renderContext.wasRasterized = !1),
                    ee.call(this, e),
                    (p = e._renderContext.wasRasterized))
                  : console.warn("Missing encoder for node type " + K);
              }
              if (q)
                if (e.hasMixin(J))
                  (j = e.getPaintLayers()) && j.clearFillLayers();
              if (!p && (!u || d)) {
                if (d) {
                  var te = t.createSvgElement("g"),
                    ie = t.peek().lastChild;
                  if (ie) {
                    var oe = s.filterElementsUsedForMasking(ie),
                      ae = e.getProperty("_ba") === J.BorderAlignment.Outside,
                      se = s.createMaskDefinitionFromShape(t.svgDoc, ie, ae);
                    if (q)
                      for (; ie.firstChild; ) ie.removeChild(ie.firstChild);
                    if (
                      (te.setAttribute(
                        "clip-path",
                        "url(#" + se.getAttribute("id") + ")",
                      ),
                      ie.appendChild(se),
                      ie.appendChild(te),
                      j.hasStyleBorder())
                    )
                      for (var le = 0; le < oe.length; le++) {
                        var he = oe[le];
                        if (
                          he.parentNode === ie &&
                          he.getAttribute("stroke-width")
                        ) {
                          var Ae = he.cloneNode(!1);
                          (O.replaceFill(Ae, "transparent"),
                            ie.appendChild(Ae));
                        }
                      }
                    t.push(te);
                  }
                }
                if (e instanceof z) re.renderPage(e, t, i, b, n);
                else if (e.hasMixin(a.Container))
                  for (
                    var ce = e.getFirstChild();
                    null != ce;
                    ce = ce.getNext()
                  )
                    ce instanceof z
                      ? re.renderPage(ce, t, i, b, n)
                      : re.renderNode(ce, t, null, n);
                d && t.pop();
              }
              (!n || e instanceof Z || re.setVisibility(t.peek(), r),
                (((e instanceof M || e instanceof N) && !p) ||
                  e instanceof y) &&
                  t.pop(),
                (t.paintContext._ignoreContents = m));
            }
          }
        }),
        (re.setVisibility = function (e, t) {
          !1 === t && e.setAttribute("visibility", "hidden");
        }),
        (re.renderPage = function (e, t, i, n, r) {
          var a = t.createSvgElement("g");
          if (
            (t.peek().appendChild(a),
            t.push(a),
            !t.options || !1 !== t.options.sceneBackground)
          ) {
            var A = t.createSvgElement("rect"),
              c = e.getProperty("w"),
              p = e.getProperty("h");
            if (!e.isFixedSized()) {
              var u = e.getPaintBBox(!1, null, r);
              u &&
                ((c = u.getWidth()),
                (p = u.getHeight()),
                A.setAttribute("x", ne.formatNumber(u.getX())),
                A.setAttribute("y", ne.formatNumber(u.getY())));
            }
            if (c && p) {
              (A.setAttribute("width", ne.formatNumber(c)),
                A.setAttribute("height", ne.formatNumber(p)));
              var d = s.createMaskDefinitionFromShape(t.svgDoc, A, !1),
                g = t.createSvgElement("defs");
              (g.appendChild(d),
                a.parentNode.insertBefore(g, a),
                a.setAttribute(
                  "clip-path",
                  "url(#" + d.getAttribute("id") + ")",
                ));
              var f = i || e.getProperty("bck");
              if (
                (f instanceof h &&
                  l.equals(f.toScreen(), S.WHITE.toScreen()) &&
                  (f = null),
                f)
              ) {
                var m = t.createSvgElement("rect");
                if (
                  (e.isFixedSized() ||
                    (m.setAttribute("x", ne.formatNumber(u.getX())),
                    m.setAttribute("y", ne.formatNumber(u.getY()))),
                  m.setAttribute("width", ne.formatNumber(c)),
                  m.setAttribute("height", ne.formatNumber(p)),
                  a.appendChild(m),
                  f instanceof o)
                ) {
                  var y = !0,
                    _ = t.options || {};
                  if (
                    ("boolean" == typeof _.rasterizeUnsupportedObjectsByCDR &&
                      (_.rasterizeUnsupportedObjectsByCDR || (y = !1)),
                    y)
                  ) {
                    var v = new R(0, 0, c, p);
                    v.getPaintLayers().appendChild(new J.FillPaintLayer(f));
                    var b = v.toBitmap().toImageDataUrl(),
                      C = t.createSvgElement("image");
                    (C.setAttribute("width", ne.formatNumber(c)),
                      C.setAttribute("height", ne.formatNumber(p)),
                      C.setAttribute("xlink:href", b),
                      a.appendChild(C));
                  }
                } else if (f instanceof x) {
                  var w = e._paintContext.canvas
                    .createPatternPaint(f, n)
                    .paint.asSVG(t.svgDoc, 1);
                  (m.setAttribute(
                    "style",
                    "fill:url(#" + w.getAttribute("id") + ");",
                  ),
                    m.parentNode.insertBefore(w, m));
                } else if (f instanceof S || f instanceof T) {
                  m.setAttribute("style", "fill:" + P.toFill(f));
                  var E = e.getProperty("bop");
                  1 != E && m.setAttribute("fill-opacity", E);
                } else console.error("background color not supported");
              }
            }
          }
          e.getMasterPages().forEach(
            function (e) {
              e instanceof z && re.renderNode(e, t, null, r);
            }.bind(this),
          );
          for (var B = e.getFirstChild(); null != B; B = B.getNext())
            re.renderNode(B, t, null, r);
          t.pop();
        }),
        (e.exports = re));
    }