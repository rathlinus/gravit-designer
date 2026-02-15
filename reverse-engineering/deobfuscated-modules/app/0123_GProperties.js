/**
 * Webpack Module #123
 * Type: class
 * Name: GProperties
 */

function (exports, module, require) {
    "use strict";
    function o() {}
    require(3) /* polyfill_RegExp_toString */,
      (o.prototype._touchTools = null),
      (o.prototype.init = function (e, t) {
        throw new Error("Not Supported.");
      }),
      (o.prototype.isGroup = function (e) {
        return true;
      }),
      (o.prototype.isSticky = function () {
        return false;
      }),
      (o.prototype.isAvailable = function (e) {
        return !e;
      }),
      (o.prototype.update = function (e, t, n) {
        (e = e || this._document) && e.clearActiveStylesList();
      }),
      (o.prototype.openPatternChooser = function () {
        throw new Error("Not Supported.");
      }),
      (o.prototype.openEyeDropper = function (e, t) {
        throw new Error("Not Supported.");
      }),
      (o.prototype.setTouchTools = function (e) {
        this._touchTools = e;
      }),
      (o.prototype.getTouchTools = function () {
        return this._touchTools;
      }),
      (o.prototype.toString = function () {
        return "[Object GProperties]";
      }),
      (exports.exports = o);
  }