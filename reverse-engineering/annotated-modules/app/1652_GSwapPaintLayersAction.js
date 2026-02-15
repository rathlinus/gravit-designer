/**
 * Webpack Module #1652
 * Type: class
 * Name: GSwapPaintLayersAction
 */

function (e, t, n) {
    "use strict";
    var o = n(16) /* _interopRequireDefault */;
    n(19) /* polyfill_Array_iterator */, n(4) /* stub_requires_668 */, n(13) /* stub_requires_679 */, n(32) /* stub_requires_670 */, n(38) /* stub_requires_680 */, n(33) /* polyfill_DOMCollection_forEach */, n(26) /* polyfill_DOMCollection_iterator */;
    var i = n(1) /* GCore */,
      a = n(15) /* GEditor */,
      r = o(n(31) /* GAction */),
      s = o(n(18) /* MenuItemBuilder */);
    class l extends r.default {
      getId() {
        return l.ID;
      }
      getTitle() {
        return l.TITLE;
      }
      getCategory() {
        return s.default.CATEGORY_MODIFY;
      }
      isVisible() {
        return !1;
      }
      getShortcut() {
        return [a.GKey.Constant.X];
      }
      isEnabled() {
        const e = gDesigner.getActiveDocument(),
          t = e && e.getEditor(),
          n = t && t.getSelection();
        return !!(n && n.find((e) => e.hasMixin(i.GStylable)));
      }
      execute() {
        const e = gDesigner.getActiveDocument(),
          t = e && e.getEditor(),
          n = t && t.getSelection();
        if (n) {
          t.beginTransaction();
          try {
            n.forEach((e) => {
              if (e.hasMixin(i.GStylable)) {
                const t = e.getPaintLayers();
                if (t) {
                  const n = this._createPaintLayers(l.Type.Border, t),
                    o = this._createPaintLayers(l.Type.Fill, t);
                  n.forEach((t) => {
                    this._setBorderAlignment(e, t);
                  }),
                    t.clearLayers(),
                    n.concat(o).forEach((e) => {
                      t.appendChild(e);
                    });
                }
              }
            });
          } finally {
            t.commitTransaction(i.GLocale.get(this.getTitle()));
          }
        }
      }
      _createPaintLayers(e, t) {
        const n = ["_pt", "_op", "_vs", "_bl"];
        switch (e) {
          case l.Type.Fill:
            return t.getBorderLayers().map((e) => {
              const t = e.getProperties(n);
              return new i.GStylable.FillPaintLayer(...t);
            });
          case l.Type.Border:
            return t.getFillLayers().map((e) => {
              const t = e.getProperties(n);
              return new i.GStylable.BorderPaintLayer(...t);
            });
          default:
            throw Error("Not specified type given");
        }
      }
      _setBorderAlignment(e, t) {
        e instanceof i.GText
          ? t.setProperty("_ba", i.GStylable.BorderAlignment.Outside)
          : e instanceof i.GShape
          ? e instanceof i.GEllipse && e.$etp === i.GEllipse.Type.Arc
            ? t.setProperty("_ba", i.GStylable.BorderAlignment.Center)
            : t.setProperty("_ba", i.GStylable.BorderAlignment.Inside)
          : e instanceof i.GPath &&
            !e.$closed &&
            t.setProperty("_ba", i.GStylable.BorderAlignment.Center);
      }
      toString() {
        return "[Object GSwapPaintLayersAction]";
      }
    }
    (l.ID = "modify.swap-paint-layers"),
      (l.TITLE = new i.GLocaleKey("GSwapPaintLayersAction", "title")),
      (l.Type = { Fill: "fill", Border: "border" }),
      (e.exports = l);
  }