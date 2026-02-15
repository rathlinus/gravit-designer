/**
 * Webpack Module #1642
 * Type: class
 * Name: GTogglePaintLayersVisibilityAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var i = require(1) /* module */,
      a = require(53) /* module */,
      r = require(15) /* module */,
      s = o(require(31) /* GAction */),
      l = o(require(18) /* MenuItemBuilder */);
    class c extends s.default {
      constructor(e) {
        super(),
          (this._type = e),
          (this._title = new i.GLocaleKey(
            "GTogglePaintLayersVisibilityAction",
            "title.".concat(this._type)
          ));
      }
      getId() {
        return "".concat(c.ID, ".").concat(this._type);
      }
      getTitle() {
        return this._title;
      }
      getCategory() {
        return l.default.CATEGORY_VIEW;
      }
      getShortcut() {
        switch (this._type) {
          case c.Type.Fill:
            return ["F"];
          case c.Type.Border:
            return [r.GKey.Constant.SHIFT, "B"];
        }
      }
      isVisible() {
        return false;
      }
      isEnabled() {
        return (
          !document.activeElement || !$(document.activeElement).is(":input")
        );
      }
      _getSingleLevelSelection(e) {
        let module = [];
        return (
          e.forEach((e) => {
            if (e) {
              const n = e.getChildren();
              e instanceof i.GLayer || module.push(e),
                Array.isArray(n) &&
                  n.length > 0 &&
                  (module = module.concat(this._getSingleLevelSelection(n)));
            }
          }),
          module
        );
      }
      _getPaintLayers(e) {
        const module = e && e.hasMixin(i.GStylable) && e.getPaintLayers();
        if (!module) return null;
        switch (this._type) {
          case c.Type.Fill:
            return module.getFillLayers();
          case c.Type.Border:
            return module.getBorderLayers();
          default:
            return null;
        }
      }
      _checkPaintLayersVisibility(e) {
        let module = false,
          require = false;
        for (let o = 0; e.length > o && (!module || !require); o++) {
          const i = e[o],
            a = this._getPaintLayers(i);
          if (Array.isArray(a))
            for (let e = 0; a.length > e && (!module || !require); e++) {
              a[e].getProperty("_vs") ? (require = true) : (module = true);
            }
        }
        return { hasHiddenPaintLayers: module, hasVisiblePaintLayers: require };
      }
      _setVisibilityPaintLayersState(e, t) {
        const require = gDesigner.getActiveDocument(),
          o = require && require.getScene();
        o &&
          a.GEditor.tryRunTransaction(
            o,
            () => {
              e.forEach((e) => {
                e.beginUpdate();
                const require = this._getPaintLayers(e);
                Array.isArray(require) &&
                  require.forEach((e) => {
                    e.setProperty("_vs", t);
                  }),
                  e.endUpdate();
              });
            },
            i.GLocale.get(c.TITLE)
          );
      }
      execute() {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getScene(),
          require = exports && exports.getEditor(),
          o = require && require.getSelection();
        if (module) {
          module.beginUpdate();
          try {
            if (Array.isArray(o) && o.length > 0) {
              const e = this._getSingleLevelSelection(o),
                { hasHiddenPaintLayers: module, hasVisiblePaintLayers: require } =
                  this._checkPaintLayersVisibility(e);
              if (!module && !require) return;
              module && require
                ? this._setVisibilityPaintLayersState(e, false)
                : this._setVisibilityPaintLayersState(e, module);
            }
          } finally {
            module.endUpdate();
          }
        }
      }
      toString() {
        return "[Object GTogglePaintLayersVisibilityAction]";
      }
    }
    (c.ID = "view.toggle-paint-layers-visibility"),
      (c.Type = { Fill: "fill", Border: "border" }),
      (exports.exports = c);
  }