/**
 * Webpack Module #394
 * Type: class
 * Name: GView
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */;
    function i() {}
    GCore.GObject.inherit(i, GCore.GEventTarget),
      (i.UpdateEvent = function () {}),
      GCore.GObject.inherit(i.UpdateEvent, GCore.GEvent),
      (i.UpdateEvent.prototype.toString = function () {
        return "[Object GView.UpdateEvent]";
      }),
      (i.UPDATE_EVENT = new i.UpdateEvent()),
      (i.prototype.getId = function () {
        throw new Error("Not Supported");
      }),
      (i.prototype.getTitle = function () {
        throw new Error("Not Supported");
      }),
      (i.prototype.isEnabled = function () {
        return true;
      }),
      (i.prototype.isVisible = function () {
        return true;
      }),
      (i.prototype._fireUpdateEvent = function () {
        this.trigger(i.UPDATE_EVENT);
      }),
      (i.prototype.toString = function () {
        return "[Object GView]";
      }),
      (exports.exports = i);
  }