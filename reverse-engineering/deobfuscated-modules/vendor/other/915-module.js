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

function (exports, module, require) {
  require(75) /* GEventTarget */;
  var n = require(284) /* GPolygon */, r = require(2) /* GNode */, o = require(76) /* module */, a = require(0) /* GObject */, s = require(28) /* GStylable */, l = require(60) /* GPath */, h = require(56) /* GShape */, A = require(214) /* GEllipse */, c = require(17) /* GRGBColor */, p = (require(68) /* GColor */, require(648) /* GColorHelper */), u = require(73) /* GRectangle */, d = require(70) /* GText */, g = require(511) /* GStyle */, f = require(162) /* GPathsGraph */, m = require(268) /* GConnector */, y = require(14) /* GPaintCanvas */, _ = require(370) /* GTextAnnotation */, v = require(316) /* GRectangleAnnotation */, b = require(317) /* GEllipseAnnotation */, C = require(318) /* GHighlighterAnnotation */, w = require(285) /* GCommentAnnotation */, E = require(319) /* GArrowAnnotation */, B = require(320) /* GPencilAnnotation */, x = (require(321) /* GDropShadowEffect */, {
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
    for (var exports in (o.call(this), P))
      this._initDefault(exports);
  }
  r.inheritAndMix("styles", S, o, [
    r.Container,
    r.Store
  ]), S.prototype._initDefault = function (e) {
    switch (e) {
    case "GShape":
      var module = new g();
      module.setProperties([
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
      ]), module.getPaintLayers().appendChild(new s.FillPaintLayer(c.WHITE)), module.getPaintLayers().appendChild(new s.BorderPaintLayer(c.BLACK)), module.setProperty("defaultStyle", true), this.appendChild(module);
      break;
    case "GRectangle":
      var require = new g();
      require.setProperties([
        "name",
        "defaultStyle",
        "_sdf",
        "ps"
      ], [
        x[e],
        true,
        a.getTypeId(u),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers
        ]
      ]), require.getPaintLayers().appendChild(new s.FillPaintLayer(new c([
        235,
        235,
        235
      ]))), this.appendChild(require);
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
        true,
        a.getTypeId(l),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers
        ]
      ]), r.getPaintLayers().appendChild(new s.FillPaintLayer(c.WHITE, 1, false)), r.getPaintLayers().appendChild(new s.BorderPaintLayer(c.BLACK)), this.appendChild(r);
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
        true,
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
        true,
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
        true,
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
        true,
        a.getTypeId(f),
        [
          s.PropertySet.Style,
          s.PropertySet.BorderPaintLayers,
          s.PropertySet.FillPaintLayers
        ]
      ]);
      var T = new s.BorderPaintLayer(c.BLACK);
      T.setProperty("_blc", y.LineCap.Round), S.getPaintLayers().appendChild(new s.FillPaintLayer(c.WHITE, 1, false)), S.getPaintLayers().appendChild(T), this.appendChild(S);
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
        true,
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
        true,
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
        ]), 0, true, y.BlendMode.Multiply), D = new s.BorderPaintLayer(new c([
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
        true,
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
      ]), 0, true, y.BlendMode.Multiply), D = new s.BorderPaintLayer(new c([
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
        true,
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
        true,
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
        true,
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
        true,
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
        true,
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
    for (var exports = [], module = this.getFirstChild(); module; module = module.getNext())
      if (module.$defaultStyle)
        for (var require in x)
          if (module.$name === x[require]) {
            exports.push(require), module.$_sdf = a.getTypeId(P[require]);
            break;
          }
    for (var require in P)
      exports.indexOf(require) < 0 && this._initDefault(require);
  }, S.prototype._handleChange = function (e, t) {
    e === r._Change.PrepareRestore && this.clearChildren(), o.prototype._handleChange.call(this, e, t);
  }, S.prototype.setColorMode = function (e) {
    for (var module = this.getFirstChild(); module; module = module.getNext()) {
      var require = module.getPaintLayers();
      if (require)
        for (var n = require.getFirstChild(); n; n = n.getNext()) {
          var r = n.getProperty("_pt"), o = p.convertColor(r, e);
          o && n.setProperty("_pt", o);
        }
    }
  }, S.prototype.validateInsertion = function (e, t) {
    return "scene" === r.getName(e);
  }, exports.exports = S;
}
