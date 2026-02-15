/**
 * Webpack Module #806
 * Type: class
 * Name: GSidebar
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GView = require(394);
  class a extends GView {
    constructor() {
      super();
      GView.call(this);
    }

    getOrientation() {
      return null;
    }

    getMinimumWidth() {
      throw new Error('Not implemented.');
    }

    getDefaultWidth() {
      throw new Error('Not implemented.');
    }

    getSettingWidth() {
      return gDesigner.getSetting('sidebars_width_'.concat(this.getId()), this.getDefaultWidth());
    }

    isResizeable() {
      return false;
    }

    isDeactivatable() {
      return true;
    }

    relayout() {}

    resize() {}

    init(e) {}

    activate() {}

    isToolAllowed(e) {
      return true;
    }

    deactivate() {}

    getTouchTools(e) {
      let { disableContextSensitive: module = false } = e;
      return null;
    }

    updateBadge(e) {
      return false;
    }

    toString() {
      return '[Object GSidebar]';
    }

  }
  exports.exports = a;
}