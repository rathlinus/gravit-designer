/**
 * Webpack Module #106
 * Type: class
 * Name: GElementAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var i = require(1) /* module */,
      a = o(require(31) /* GAction */),
      r = o(require(567) /* GAnnotationsSidebar */),
      s = o(require(10) /* AppSettings */);
    function l() {}
    i.GObject.inherit(l, a.default),
      (l.prototype.isEnabled = function () {
        return (
          !s.default ||
          gDesigner.getRightSidebars().getActiveSidebar() !== r.default.ID
        );
      }),
      (l.prototype.toString = function () {
        return "[Object GElementAction]";
      }),
      (exports.exports = l);
  }