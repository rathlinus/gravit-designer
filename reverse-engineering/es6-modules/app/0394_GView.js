/**
 * Webpack Module #394
 * Type: class
 * Name: GView
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEventTarget {
    constructor() {
      super();
    }

    getId() {
      throw new Error('Not Supported');
    }

    getTitle() {
      throw new Error('Not Supported');
    }

    isEnabled() {
      return true;
    }

    isVisible() {
      return true;
    }

    _fireUpdateEvent() {
      this.trigger(i.UPDATE_EVENT);
    }

    toString() {
      return '[Object GView]';
    }

    static UpdateEvent() {}

    static UPDATE_EVENT = new i.UpdateEvent();

  }
  (GCore.GObject.inherit(i.UpdateEvent, GCore.GEvent),
    i.UpdateEvent.prototype.toString = function () {
      return '[Object GView.UpdateEvent]';
    },
    exports.exports = i);
}