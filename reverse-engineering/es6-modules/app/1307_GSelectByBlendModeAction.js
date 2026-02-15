/**
 * Webpack Module #1307
 * Type: class
 * Name: GSelectByBlendModeAction
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
      return e.hasMixin(GCore.GNode.Properties)
        ? e.getProperty('_sbl')
        : GSelectByAction.default.EmptyValue;
    }

    toString() {
      return '[Object GSelectByBlendModeAction]';
    }

    static ID = 'edit.select-by-blend-mode';

    static TITLE = new GCore.GLocaleKey('GSelectByBlendModeAction', 'title');

  }
  exports.exports = r;
}