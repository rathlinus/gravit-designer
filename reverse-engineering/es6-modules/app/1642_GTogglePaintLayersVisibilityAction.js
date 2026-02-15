/**
 * Webpack Module #1642
 * Type: class
 * Name: GTogglePaintLayersVisibilityAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16); /* _interopRequireDefault */
  (require(4) /* stub_requires_668 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GCore = require(1) /* GCore */,
    GTools = require(53) /* GTools */,
    r = require(15) /* GEditor */,
    GAction = _interopRequireDefault(require(31) /* GAction */),
    MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */);
  class c extends GAction.default {
    constructor(e) {
      (super(),
        (this._type = e),
        (this._title = new GCore.GLocaleKey(
          'GTogglePaintLayersVisibilityAction',
          'title.'.concat(this._type)
        )));
    }
    getId() {
      return ''.concat(c.ID, '.').concat(this._type);
    }
    getTitle() {
      return this._title;
    }
    getCategory() {
      return MenuItemBuilder.default.CATEGORY_VIEW;
    }
    getShortcut() {
      switch (this._type) {
        case c.Type.Fill:
          return ['F'];
        case c.Type.Border:
          return [r.GKey.Constant.SHIFT, 'B'];
      }
    }
    isVisible() {
      return false;
    }
    isEnabled() {
      return !document.activeElement || !$(document.activeElement).is(':input');
    }
    _getSingleLevelSelection(e) {
      let module = [];
      return (
        e.forEach((e) => {
          if (e) {
            const n = e.getChildren();
            (e instanceof GCore.GLayer || module.push(e),
              Array.isArray(n) &&
                n.length > 0 &&
                (module = module.concat(this._getSingleLevelSelection(n))));
          }
        }),
        module
      );
    }
    _getPaintLayers(e) {
      const module = e && e.hasMixin(GCore.GStylable) && e.getPaintLayers();
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
      for (
        let _interopRequireDefault = 0;
        e.length > _interopRequireDefault && (!module || !require);
        _interopRequireDefault++
      ) {
        const GCore = e[_interopRequireDefault],
          GTools = this._getPaintLayers(GCore);
        if (Array.isArray(GTools))
          for (let e = 0; GTools.length > e && (!module || !require); e++) {
            GTools[e].getProperty('_vs') ? (require = true) : (module = true);
          }
      }
      return { hasHiddenPaintLayers: module, hasVisiblePaintLayers: require };
    }
    _setVisibilityPaintLayersState(e, t) {
      const require = gDesigner.getActiveDocument(),
        _interopRequireDefault = require && require.getScene();
      _interopRequireDefault &&
        GTools.GEditor.tryRunTransaction(
          _interopRequireDefault,
          () => {
            e.forEach((e) => {
              e.beginUpdate();
              const require = this._getPaintLayers(e);
              (Array.isArray(require) &&
                require.forEach((e) => {
                  e.setProperty('_vs', t);
                }),
                e.endUpdate());
            });
          },
          GCore.GLocale.get(c.TITLE)
        );
    }
    execute() {
      const exports = gDesigner.getActiveDocument(),
        module = exports && exports.getScene(),
        require = exports && exports.getEditor(),
        _interopRequireDefault = require && require.getSelection();
      if (module) {
        module.beginUpdate();
        try {
          if (Array.isArray(_interopRequireDefault) && _interopRequireDefault.length > 0) {
            const e = this._getSingleLevelSelection(_interopRequireDefault),
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
      return '[Object GTogglePaintLayersVisibilityAction]';
    }
  }
  ((c.ID = 'view.toggle-paint-layers-visibility'),
    (c.Type = { Fill: 'fill', Border: 'border' }),
    (exports.exports = c));
}
