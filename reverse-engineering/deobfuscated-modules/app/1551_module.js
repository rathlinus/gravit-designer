/**
 * Webpack Module #1551
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */;
    const o = require(75) /* GEventTarget */,
      i = require(0) /* GObject */,
      a = require(1174) /* module_1174 */;
    function r() {}
    i.inherit(r, o),
      (r.prototype.render = async function (e, t) {
        throw "Not implemented!";
      }),
      (r.prototype._triggerEvent = async function (e, t) {
        this.hasEventListeners(a) && this.trigger(new a(e, t));
      }),
      (exports.exports = r);
  }