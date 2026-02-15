/**
 * Webpack Module #217
 * Type: class
 * Name: GDocumentStatusEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */;
    function i(e, t) {
      (this.status = e), (this.data = t);
    }
    o.GObject.inherit(i, o.GEvent),
      (i.prototype.status = null),
      (i.prototype.data = null),
      (i.prototype.toString = function () {
        return "[Object GDocumentStatusEvent]";
      }),
      (exports.exports = i);
  }