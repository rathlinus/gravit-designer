/**
 * Webpack Module #1309
 * Type: class
 * Name: GSelectByEffectAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  require(3) /* polyfill_RegExp_toString */;
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
      if (!e.hasMixin(GCore.GStylable)) return GSelectByAction.default.EmptyValue;
      const module = e.getEffects();
      return module ? module.getChildren() : [];
    }

    toString() {
      return '[Object GSelectByEffectAction]';
    }

    static ID = 'edit.select-by-effect';

    static TITLE = new GCore.GLocaleKey('GSelectByEffectAction', 'title');

  }
  exports.exports = r;
}