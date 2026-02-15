/**
 * Webpack Module #1070
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(30) /* module_30 */;
    const { GObject: o } = n(1) /* module_1 */;
    class i {
      constructor(e) {
        Object.assign(this, e);
      }
    }
    o.inherit(i, o),
      (i.prototype.applyFrom = function (e) {
        Object.assign(this, e);
      }),
      (e.exports = i);
  }