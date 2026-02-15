/**
 * Webpack Module #1070
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* module_30 */;
    const { GObject: o } = require(1) /* module */;
    class i {
      constructor(e) {
        Object.assign(this, e);
      }
    }
    o.inherit(i, o),
      (i.prototype.applyFrom = function (e) {
        Object.assign(this, e);
      }),
      (exports.exports = i);
  }