/**
 * Webpack Module #1616
 * Type: class
 * Name: GVectorizeImageAction
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(328) /* polyfill_Array_sort */,
    require(3) /* polyfill_RegExp_toString */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1) /* GCore */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GElementAction = require(106);
  class s extends GElementAction {
    constructor() {
      super();
    }

    getId() {
      return s.ID;
    }

    getTitle() {
      return s.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY_PATH;
    }

    getGroup() {
      return 'structure/modify';
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument()
        ? gDesigner.getActiveDocument().getEditor().getSelection()
        : null;
      if (e)
        for (var module = 0; module < e.length; ++module)
          if (e[module] instanceof GCore.GImage && !e[module].getStatus()) return true;
      return false;
    }

    execute() {
      var e = gDesigner.getActiveDocument(),
        t = e ? e.getEditor() : null,
        n = t ? t.getIndividualSelection() : null,
        MenuItemBuilder = [];
      if (n)
        for (var GElementAction = 0; GElementAction < n.length; ++GElementAction)
          n[GElementAction] instanceof GCore.GImage &&
            !n[GElementAction].getStatus() &&
            MenuItemBuilder.push(n[GElementAction]);
      if (MenuItemBuilder.length) {
        t.beginTransaction();
        try {
          var s,
            l = [];
          s = new Set();
          for (GElementAction = 0; GElementAction < MenuItemBuilder.length; ++GElementAction) {
            var c = MenuItemBuilder[GElementAction].getParent();
            c && s.add(c);
          }
          try {
            (0, CollaborationMergeUtils.blockChanges)(t, s);
            for (GElementAction = 0; GElementAction < MenuItemBuilder.length; ++GElementAction) {
              var d = MenuItemBuilder[GElementAction],
                u = d.getParent(),
                p = d.getNext(),
                g = this._vectorize(d);
              (g && (u.insertChild(g, p), l.push(g)), u.removeChild(d));
            }
          } finally {
            ((0, CollaborationMergeUtils.releaseChanges)(t, s),
              l.length && t.updateSelection(false, l));
          }
        } finally {
          t.commitTransaction(GCore.GLocale.get(this.getTitle()));
        }
      }
    }

    _vectorize(e) {
      new GCore.GVertexContainer();
      var t,
        n,
        CollaborationMergeUtils = e.getImageCanvas(),
        MenuItemBuilder = new GCore.GImageTracer(),
        GElementAction = MenuItemBuilder.getImgdata(CollaborationMergeUtils),
        s = GElementAction.width,
        l = GElementAction.height,
        c = MenuItemBuilder.imagedataToTracedata(GElementAction, {
          ltres: 1,
          qtres: Math.min(s / 4, l / 4, 10),
          numberofcolors: 8,
          blurradius: 2,
          colorquantcycles: 5,
          pathomit: Math.min(0.25 * s, 0.25 * l, 20),
        }),
        d = c.palette,
        u = [];
      for (t in c.layers)
        if (c.layers.hasOwnProperty(t))
          for (n = 0; n < c.layers[t].length; n++)
            u[c.layers[t][n][0].y1 * s + c.layers[t][n][0].x1] = {
              l: '' + t,
              p: '' + n,
            };
      var p,
        g,
        h = Object.keys(u);
      h.sort(function (e, t) {
        return e - t;
      });
      var f,
        m,
        y = new GCore.GGroup(),
        v = -1;
      for (t = 0; t < h.length; t++)
        if (
          ((p = u[h[t]].l),
          (f = t + 1 < h.length ? u[h[t + 1]].l : -1),
          (g = u[h[t]].p),
          0 !== d[p].a)
        ) {
          var _ = new GCore.GRGBColor([d[p].r, d[p].g, d[p].b]),
            b = c.layers[p];
          p !== v && (m = new GCore.GVertexContainer());
          var w = b[g];
          m.addVertex(GCore.GVertex.Command.Move, w[0].x1, w[0].y1);
          for (var C = 0; C < w.length; C++) {
            var x = w[C];
            'L' === x.type
              ? m.addVertex(GCore.GVertex.Command.Line, x.x2, x.y2)
              : (m.addVertex(GCore.GVertex.Command.Curve, x.x3, x.y3),
                m.addVertex(GCore.GVertex.Command.Curve, x.x2, x.y2));
          }
          if (p !== f) {
            m = new GCore.GVertexSimplifier(m).simplify(0.4, false, true);
            var S = GCore.GPathUtil.createPathFromVertexSource(m);
            S &&
              (S.getPaintLayers().appendChild(new GCore.GStylable.FillPaintLayer(_)),
              S.setProperty('name', _.getClosestCSSName()),
              y.appendChild(S));
          }
          v = p;
        }
      return y;
    }

    toString() {
      return '[Object GVectorizeImageAction]';
    }

    static ID = 'modify.bmp2path';

    static TITLE = new GCore.GLocaleKey('GVectorizeImageAction', 'title');

  }
  exports.exports = s;
}