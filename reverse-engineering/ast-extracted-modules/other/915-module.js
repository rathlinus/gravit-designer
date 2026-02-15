/**
 * Module 915
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  i(75);
  var n = i(284), r = i(2), o = i(76), a = i(0), s = i(28), l = i(60), h = i(56), A = i(214), c = i(17), p = (i(68), i(648)), u = i(73), d = i(70), g = i(511), f = i(162), m = i(268), y = i(14), _ = i(370), v = i(316), b = i(317), C = i(318), w = i(285), E = i(319), B = i(320), x = (i(321), {
      GShape: "Shape Default",
      GText: "Text Default",
      GRectangle: "Rectangle Default",
      GEllipse: "Ellipse Default",
      GPolygon: "Polygon Default",
      GPath: "Path Default",
      GPathsGraph: "Path graph default",
      GConnector: "Connector default",
      GTextAnnotation: "Text annotation default",
      GRectangleAnnotation: "Rectangle annotation default",
      GEllipseAnnotation: "Ellipse annotation default",
      GPencilAnnotation: "Pencil annotation default",
      GHighlighterAnnotation: "Highlighter annotation default",
      GArrowAnnotation: "Arrow annotation default",
      GCommentAnnotation: "Comment annotation default"
    }), P = {
      GShape: h,
      GText: d,
      GRectangle: u,
      GEllipse: A,
      GPolygon: n,
      GPath: l,
      GPathsGraph: f,
      GConnector: m,
      GTextAnnotation: _,
      GRectangleAnnotation: v,
      GEllipseAnnotation: b,
      GPencilAnnotation: B,
      GHighlighterAnnotation: C,
      GArrowAnnotation: E,
      GCommentAnnotation: w
    };
  function S() {
    for (var e in (o.call(this), P))
      this._initDefault(e);
  }
  r.inheritAndMix("styles", S, o, [
    r.Container,
    r.Store
  ]), S.prototype._initDefault = function (e) {
    switch (e) {
    case "GShape":
      var t = new g();
      t.setProperties([
        "name",
        "_sdf",
        "ps"
      ], [
        x[e],
        a.getTypeId(h),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers
        ]
      ]), t.getPaintLayers().appendChild(new s.FillPaintLayer(c.WHITE)), t.getPaintLayers().appendChild(new s.BorderPaintLayer(c.BLACK)), t.setProperty("defaultStyle", !0), this.appendChild(t);
      break;
    case "GRectangle":
      var i = new g();
      i.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps"
      ], [
        x[e],
        !0,
        a.getTypeId(u),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers
        ]
      ]), i.getPaintLayers().appendChild(new s.FillPaintLayer(new c([
        235,
        235,
        235
      ]))), this.appendChild(i);
      break;
    case "GPath":
      var r = new g();
      r.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps"
      ], [
        x[e],
        !0,
        a.getTypeId(l),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers
        ]
      ]), r.getPaintLayers().appendChild(new s.FillPaintLayer(c.WHITE, 1, !1)), r.getPaintLayers().appendChild(new s.BorderPaintLayer(c.BLACK)), this.appendChild(r);
      break;
    case "GEllipse":
      var o = new g();
      o.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps"
      ], [
        x[e],
        !0,
        a.getTypeId(A),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers
        ]
      ]), o.getPaintLayers().appendChild(new s.FillPaintLayer(new c([
        235,
        235,
        235
      ]))), this.appendChild(o);
      break;
    case "GPolygon":
      var p = new g();
      p.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps"
      ], [
        x[e],
        !0,
        a.getTypeId(n),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers
        ]
      ]), p.getPaintLayers().appendChild(new s.FillPaintLayer(new c([
        235,
        235,
        235
      ]))), this.appendChild(p);
      break;
    case "GText":
      var P = new g();
      P.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps",
        "_fc"
      ], [
        x[e],
        !0,
        a.getTypeId(d),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers,
          s.PropertySet.Text,
          s.PropertySet.Paragraph
        ],
        c.BLACK
      ]), this.appendChild(P);
      break;
    case "GPathsGraph":
      var S = new g();
      S.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps"
      ], [
        x[e],
        !0,
        a.getTypeId(f),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers
        ]
      ]);
      var T = new s.BorderPaintLayer(c.BLACK);
      T.setProperty("_blc", y.LineCap.Round), S.getPaintLayers().appendChild(new s.FillPaintLayer(c.WHITE, 1, !1)), S.getPaintLayers().appendChild(T), this.appendChild(S);
      break;
    case "GConnector":
      var I = new g();
      I.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps"
      ], [
        x[e],
        !0,
        a.getTypeId(m),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers
        ]
      ]), (D = new s.BorderPaintLayer(c.BLACK)).setProperties([
        "_bhm",
        "_btm",
        "_blc"
      ], [
        s.BorderMarker.Arrow,
        s.BorderMarker.Arrow,
        y.LineCap.Butt
      ]), I.getPaintLayers().appendChild(D), this.appendChild(I);
      break;
    case "GRectangleAnnotation":
      var F = new g();
      F.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps"
      ], [
        x[e],
        !0,
        a.getTypeId(v),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers
        ]
      ]);
      var R = new s.FillPaintLayer(new c([
          230,
          2,
          2
        ]), 0, !0, y.BlendMode.Multiply), D = new s.BorderPaintLayer(new c([
          230,
          2,
          2
        ])), k = F.getPaintLayers();
      D.setProperties(["_bw"], [2]), k.appendChild(R), k.appendChild(D), this.appendChild(F);
      break;
    case "GEllipseAnnotation":
      var G = new g();
      G.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps"
      ], [
        x[e],
        !0,
        a.getTypeId(b),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers
        ]
      ]);
      R = new s.FillPaintLayer(new c([
        230,
        2,
        2
      ]), 0, !0, y.BlendMode.Multiply), D = new s.BorderPaintLayer(new c([
        230,
        2,
        2
      ])), k = G.getPaintLayers();
      D.setProperties(["_bw"], [2]), k.appendChild(R), k.appendChild(D), this.appendChild(G);
      break;
    case "GHighlighterAnnotation":
      var Q = new g();
      Q.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps",
        "_stop",
        "_sbl"
      ], [
        x[e],
        !0,
        a.getTypeId(C),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers
        ],
        0.5,
        y.BlendMode.Normal
      ]), (D = new s.BorderPaintLayer(new c([
        248,
        206,
        28
      ]))).setProperties(["_bw"], [12]), Q.getPaintLayers().appendChild(D), this.appendChild(Q);
      break;
    case "GPencilAnnotation":
      var M = new g();
      M.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps",
        "_stop",
        "_sbl"
      ], [
        x[e],
        !0,
        a.getTypeId(B),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers
        ],
        1,
        y.BlendMode.Normal
      ]), (D = new s.BorderPaintLayer(new c([
        230,
        2,
        2
      ]))).setProperties(["_bw"], [2]), M.getPaintLayers().appendChild(D), this.appendChild(M);
      break;
    case "GArrowAnnotation":
      var N = new g();
      N.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps",
        "_stop",
        "_sbl"
      ], [
        x[e],
        !0,
        a.getTypeId(E),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers
        ],
        1,
        y.BlendMode.Normal
      ]), (D = new s.BorderPaintLayer(new c([
        230,
        2,
        2
      ]))).setProperties([
        "_btm",
        "_blc",
        "_bw",
        "_btmi",
        "_bhmi"
      ], [
        s.BorderMarker.Arrow,
        y.LineCap.Butt,
        2,
        0,
        0
      ]), N.getPaintLayers().appendChild(D), this.appendChild(N);
      break;
    case "GCommentAnnotation":
      var U = new g();
      U.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps",
        "_stop",
        "_sbl"
      ], [
        x[e],
        !0,
        a.getTypeId(w),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers,
          s.PropertySet.Effects
        ],
        1,
        y.BlendMode.Normal
      ]);
      R = new s.FillPaintLayer(new c([
        0,
        0,
        0
      ]));
      U.getPaintLayers().appendChild(R), this.appendChild(U);
      break;
    case "GTextAnnotation":
      var V = new g();
      V.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps",
        "_sbl",
        "_fc"
      ], [
        x[e],
        !0,
        a.getTypeId(_),
        [
          s.PropertySet.Style,
          s.PropertySet.Text
        ],
        y.BlendMode.Multiply,
        c.BLACK
      ]), this.appendChild(V);
    }
  }, S.prototype.repairSdf = function () {
    for (var e = [], t = this.getFirstChild(); t; t = t.getNext())
      if (t.$defaultStyle)
        for (var i in x)
          if (t.$name === x[i]) {
            e.push(i), t.$_sdf = a.getTypeId(P[i]);
            break;
          }
    for (var i in P)
      e.indexOf(i) < 0 && this._initDefault(i);
  }, S.prototype._handleChange = function (e, t) {
    e === r._Change.PrepareRestore && this.clearChildren(), o.prototype._handleChange.call(this, e, t);
  }, S.prototype.setColorMode = function (e) {
    for (var t = this.getFirstChild(); t; t = t.getNext()) {
      var i = t.getPaintLayers();
      if (i)
        for (var n = i.getFirstChild(); n; n = n.getNext()) {
          var r = n.getProperty("_pt"), o = p.convertColor(r, e);
          o && n.setProperty("_pt", o);
        }
    }
  }, S.prototype.validateInsertion = function (e, t) {
    return "scene" === r.getName(e);
  }, e.exports = S;
}
