/**
 * Webpack Module #1551
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(8) /* polyfill_bundle_ES6 */;
    const o = n(75) /* GEventTarget */,
      i = n(0) /* GObject */,
      a = n(1174) /* module_1174 */;
    function r() {}
    i.inherit(r, o),
      (r.prototype.render = async function (e, t) {
        throw "Not implemented!";
      }),
      (r.prototype._triggerEvent = async function (e, t) {
        this.hasEventListeners(a) && this.trigger(new a(e, t));
      }),
      (e.exports = r);
  }