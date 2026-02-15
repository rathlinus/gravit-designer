/**
 * Webpack Module #807
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e, t) {
      super();
      ((this.type = e), (this.sidebar = t));
    }

    type = null;
    sidebar = null;

    toString() {
      return '[Object GSidebars.SidebarEvent]';
    }

    static Type = {
      Deactivated: 10,
      Activated: 11,
      ChildAdded: 12,
      ChildRemoved: 14,
    };

  }
  exports.exports = i;
}