/**
 * Webpack Module #106
 * Type: class
 * Name: GElementAction
 */

function (e, t, n) {
    "use strict";
    var o = n(16) /* _interopRequireDefault */;
    n(3) /* polyfill_RegExp_toString */;
    var i = n(1) /* GCore */,
      a = o(n(31) /* GAction */),
      r = o(n(567) /* GAnnotationsSidebar */),
      s = o(n(10) /* AppSettings */);
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
      (e.exports = l);
  }