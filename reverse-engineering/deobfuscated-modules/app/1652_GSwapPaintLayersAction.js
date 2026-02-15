/**
 * Webpack Module #1652
 * Type: class
 * Name: GSwapPaintLayersAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(38) /* stub_requires_680 */, require(33) /* polyfill_DOMCollection_forEach */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      GAction = _interopRequireDefault(require(31) /* GAction */),
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */);
    class l extends GAction.default {
      getId() {
        return l.ID;
      }
      getTitle() {
        return l.TITLE;
      }
      getCategory() {
        return MenuItemBuilder.default.CATEGORY_MODIFY;
      }
      isVisible() {
        return false;
      }
      getShortcut() {
        return [GEditor.GKey.Constant.X];
      }
      isEnabled() {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getEditor(),
          require = module && module.getSelection();
        return !!(require && require.find((e) => e.hasMixin(GCore.GStylable)));
      }
      execute() {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getEditor(),
          require = module && module.getSelection();
        if (require) {
          module.beginTransaction();
          try {
            require.forEach((e) => {
              if (e.hasMixin(GCore.GStylable)) {
                const t = e.getPaintLayers();
                if (t) {
                  const n = this._createPaintLayers(l.Type.Border, t),
                    _interopRequireDefault = this._createPaintLayers(l.Type.Fill, t);
                  n.forEach((t) => {
                    this._setBorderAlignment(e, t);
                  }),
                    t.clearLayers(),
                    n.concat(_interopRequireDefault).forEach((e) => {
                      t.appendChild(e);
                    });
                }
              }
            });
          } finally {
            module.commitTransaction(GCore.GLocale.get(this.getTitle()));
          }
        }
      }
      _createPaintLayers(e, t) {
        const require = ["_pt", "_op", "_vs", "_bl"];
        switch (e) {
          case l.Type.Fill:
            return t.getBorderLayers().map((e) => {
              const t = e.getProperties(require);
              return new GCore.GStylable.FillPaintLayer(...t);
            });
          case l.Type.Border:
            return t.getFillLayers().map((e) => {
              const t = e.getProperties(require);
              return new GCore.GStylable.BorderPaintLayer(...t);
            });
          default:
            throw Error("Not specified type given");
        }
      }
      _setBorderAlignment(e, t) {
        e instanceof GCore.GText
          ? t.setProperty("_ba", GCore.GStylable.BorderAlignment.Outside)
          : e instanceof GCore.GShape
          ? e instanceof GCore.GEllipse && e.$etp === GCore.GEllipse.Type.Arc
            ? t.setProperty("_ba", GCore.GStylable.BorderAlignment.Center)
            : t.setProperty("_ba", GCore.GStylable.BorderAlignment.Inside)
          : e instanceof GCore.GPath &&
            !e.$closed &&
            t.setProperty("_ba", GCore.GStylable.BorderAlignment.Center);
      }
      toString() {
        return "[Object GSwapPaintLayersAction]";
      }
    }
    (l.ID = "modify.swap-paint-layers"),
      (l.TITLE = new GCore.GLocaleKey("GSwapPaintLayersAction", "title")),
      (l.Type = { Fill: "fill", Border: "border" }),
      (exports.exports = l);
  }