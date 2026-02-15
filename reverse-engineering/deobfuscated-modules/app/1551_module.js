/**
 * Webpack Module #1551
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */;
    const GEventTarget = require(75) /* GEventTarget */,
      GObject = require(0) /* GObject */,
      a = require(1174) /* module_1174 */;
    function r() {}
    GObject.inherit(r, GEventTarget),
      (r.prototype.render = async function (e, t) {
        throw "Not implemented!";
      }),
      (r.prototype._triggerEvent = async function (e, t) {
        this.hasEventListeners(a) && this.trigger(new a(e, t));
      }),
      (exports.exports = r);
  }