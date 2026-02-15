/**
 * Webpack Module #1305
 * Type: class
 * Name: GSelectByBorderWidthAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(3) /* polyfill_RegExp_toString */, require(38)) /* stub_requires_680 */;
  var GCore = require(1) /* GCore */,
    GSelectByAction = _interopRequireDefault(require(609) /* GSelectByAction */);
  class r extends GSelectByAction.default {
    constructor() {
      super();
      GSelectByAction.default.call(this, r.ID, r.TITLE);
    }

    getGroup() {
      return 'edit/select-by-style';
    }

    _getValue(e) {
      if (e.hasMixin(GCore.GStylable)) {
        const t = e.getPaintLayers(),
          n = t && t.getBorderLayers(true);
        if (n && n.length > 0) return n.map((e) => e.getProperty('_bw'));
      }
      return GSelectByAction.default.EmptyValue;
    }

    toString() {
      return '[Object GSelectByBorderWidthAction]';
    }

    static ID = 'edit.select-by-border-width';

    static TITLE = new GCore.GLocaleKey('GSelectByBorderWidthAction', 'title');

  }
  exports.exports = r;
}