/**
 * Webpack Module #1667
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i extends GCore.GEventTarget {
    constructor(e, t) {
      super();
      ((this._builder = e), (this._onClose = t));
    }

    build() {
      return this._builder();
    }

    close() {
      (this.hasEventListeners(i.Event) && this.trigger(new i.Event(i.Event.Type.Close)),
        this._onClose && this._onClose());
    }

    static Event(e) {
      this.type = e;
    }

  }
  (GCore.GObject.inherit(i.Event, GCore.GEvent),
    i.Event.Type = { Close: 0 },
    exports.exports = i);
}