/**
 * Webpack Module #1308
 * Type: class
 * Name: GSelectByShapeAction
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
      return e.getNodeName();
    }

    toString() {
      return '[Object GSelectByShapeAction]';
    }

    static ID = 'edit.select-by-shape';

    static TITLE = new GCore.GLocaleKey('GSelectByShapeAction', 'title');

  }
  exports.exports = r;
}