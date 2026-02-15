/**
 * Webpack Module #106
 * Type: class
 * Name: GElementAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GAction = _interopRequireDefault(require(31) /* GAction */),
    GAnnotationsSidebar = _interopRequireDefault(require(567) /* GAnnotationsSidebar */),
    AppSettings = _interopRequireDefault(require(10) /* AppSettings */);
  class l extends GAction.default {
    constructor() {
      super();
    }

    isEnabled() {
      return (
        !AppSettings.default ||
        gDesigner.getRightSidebars().getActiveSidebar() !== GAnnotationsSidebar.default.ID
      );
    }

    toString() {
      return '[Object GElementAction]';
    }

  }
  exports.exports = l;
}