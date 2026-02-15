/**
 * Webpack Module #340
 * Type: class
 * Name: GTouchTool
 */

function (exports, module, require) {
  'use strict';
  class o {
    constructor(e) {
      Object.assign(this, e);
    }

    def = false;
    id = null;
    sidebar = null;
    icon = null;
    panel = null;
    toolbar = null;

    activate() {}

    deactivate() {}

    toString() {
      return '[Object GTouchTool]';
    }

    static APPEARANCE_TOUCH_TOOL = new o({
      id: 'appearance',
      icon: 'gravit-icon-touch-appearance-panel',
      panel: '.appearance-property-panel',
      panelWidth: '380px',
      toolbar: '.appearance-toolbar',
    });

  }
  (require(30),
    require(3),
    exports.exports = o);
}