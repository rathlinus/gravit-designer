/**
 * Webpack Module #1306
 * Type: class
 * Name: GSelectByTransparencyAction
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
        ? e.getProperty('_stop')
        : GSelectByAction.default.EmptyValue;
    }

    toString() {
      return '[Object GSelectByTransparencyAction]';
    }

    static ID = 'edit.select-by-transparency';

    static TITLE = new GCore.GLocaleKey('GSelectByTransparencyAction', 'title');

  }
  exports.exports = r;
}