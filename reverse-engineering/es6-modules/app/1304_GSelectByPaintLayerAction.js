/**
 * Webpack Module #1304
 * Type: class
 * Name: GSelectByPaintLayerAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(3) /* polyfill_RegExp_toString */, require(38)) /* stub_requires_680 */;
  var GCore = require(1) /* GCore */,
    GSelectByAction = _interopRequireDefault(require(609) /* GSelectByAction */);
  class r extends GSelectByAction.default {
    constructor(e) {
      super();
      ((this._type = e), GSelectByAction.default.call(this, r.getId(e), r.getTitle(e)));
    }

    _type = null;

    getGroup() {
      return 'edit/select-by-paintlayer';
    }

    _getValue(e) {
      switch (this._type) {
        case r.Type.Fill:
          return this._getFillPatterns(e);
        case r.Type.Border:
          return this._getBorderPatterns(e);
        case r.Type.FillAndBorder: {
          const t = this._getFillPatterns(e),
            n = this._getBorderPatterns(e);
          return t === GSelectByAction.default.EmptyValue ||
            n === GSelectByAction.default.EmptyValue
            ? GSelectByAction.default.EmptyValue
            : { fills: t, borders: n };
        }
        default:
          return GSelectByAction.default.EmptyValue;
      }
    }

    _getFillPatterns(e) {
      if (e.hasMixin(GCore.GStylable)) {
        const t = e.getPaintLayers(),
          n = t && t.getFillLayers(true);
        if (n && n.length > 0) return n.map((e) => e.getProperty('_pt'));
      }
      return GSelectByAction.default.EmptyValue;
    }

    _getBorderPatterns(e) {
      if (e.hasMixin(GCore.GStylable)) {
        const t = e.getPaintLayers(),
          n = t && t.getBorderLayers(true);
        if (n && n.length) return n.map((e) => e.getProperty('_pt'));
      }
      return GSelectByAction.default.EmptyValue;
    }

    toString() {
      return '[Object GSelectByPaintLayerAction]';
    }

    static ID = 'edit.select-by-paintlayer';

    static getId(e) {
      return ''.concat(r.ID, '.').concat(e);
    }

    static getTitle(e) {
      return new GCore.GLocaleKey('GSelectByPaintLayerAction', 'title.'.concat(e));
    }

    static Type = {
      Fill: 'fill',
      Border: 'border',
      FillAndBorder: 'fill_border',
    };

  }
  exports.exports = r;
}