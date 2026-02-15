/**
 * Webpack Module #106
 * Type: class
 * Name: GElementAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GAction = _interopRequireDefault(require(31) /* GAction */),
      GAnnotationsSidebar = _interopRequireDefault(require(567) /* GAnnotationsSidebar */),
      AppSettings = _interopRequireDefault(require(10) /* AppSettings */);
    function l() {}
    GCore.GObject.inherit(l, GAction.default),
      (l.prototype.isEnabled = function () {
        return (
          !AppSettings.default ||
          gDesigner.getRightSidebars().getActiveSidebar() !== GAnnotationsSidebar.default.ID
        );
      }),
      (l.prototype.toString = function () {
        return "[Object GElementAction]";
      }),
      (exports.exports = l);
  }