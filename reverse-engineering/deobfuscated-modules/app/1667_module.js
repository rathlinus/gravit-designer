/**
 * Webpack Module #1667
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* GCore */;
    function i(e, t) {
      (this._builder = e), (this._onClose = t);
    }
    GCore.GObject.inherit(i, GCore.GEventTarget),
      (i.prototype.build = function () {
        return this._builder();
      }),
      (i.prototype.close = function () {
        this.hasEventListeners(i.Event) &&
          this.trigger(new i.Event(i.Event.Type.Close)),
          this._onClose && this._onClose();
      }),
      (i.Event = function (e) {
        this.type = e;
      }),
      GCore.GObject.inherit(i.Event, GCore.GEvent),
      (i.Event.Type = { Close: 0 }),
      (exports.exports = i);
  }