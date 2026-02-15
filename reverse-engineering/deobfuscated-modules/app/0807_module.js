/**
 * Webpack Module #807
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */;
    function i(e, t) {
      (this.type = e), (this.sidebar = t);
    }
    o.GObject.inherit(i, o.GEvent),
      (i.Type = {
        Deactivated: 10,
        Activated: 11,
        ChildAdded: 12,
        ChildRemoved: 14,
      }),
      (i.prototype.type = null),
      (i.prototype.sidebar = null),
      (i.prototype.toString = function () {
        return "[Object GSidebars.SidebarEvent]";
      }),
      (exports.exports = i);
  }