/**
 * Webpack Module #1652
 * Type: class
 * Name: GSwapPaintLayersAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(38) /* stub_requires_680 */, require(33) /* polyfill_DOMCollection_forEach */, require(26) /* polyfill_DOMCollection_iterator */;
    var i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(31) /* GAction */),
      s = o(require(18) /* MenuItemBuilder */);
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
        return false;
      }
      getShortcut() {
        return [a.GKey.Constant.X];
      }
      isEnabled() {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getEditor(),
          require = module && module.getSelection();
        return !!(require && require.find((e) => e.hasMixin(i.GStylable)));
      }
      execute() {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getEditor(),
          require = module && module.getSelection();
        if (require) {
          module.beginTransaction();
          try {
            require.forEach((e) => {
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
            module.commitTransaction(i.GLocale.get(this.getTitle()));
          }
        }
      }
      _createPaintLayers(e, t) {
        const require = ["_pt", "_op", "_vs", "_bl"];
        switch (e) {
          case l.Type.Fill:
            return t.getBorderLayers().map((e) => {
              const t = e.getProperties(require);
              return new i.GStylable.FillPaintLayer(...t);
            });
          case l.Type.Border:
            return t.getFillLayers().map((e) => {
              const t = e.getProperties(require);
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
      (exports.exports = l);
  }