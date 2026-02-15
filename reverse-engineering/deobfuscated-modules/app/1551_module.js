/**
 * Webpack Module #1551
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(8) /* module_8 */;
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