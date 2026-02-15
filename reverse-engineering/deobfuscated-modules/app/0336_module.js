/**
 * Webpack Module #336
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(1) /* module */;
    function i(e, t) {
      (this.type = e), (this.storageItem = t);
    }
    o.GObject.inherit(i, o.GEvent),
      (i.Type = {
        VersionUpdate: 2,
        ShareCreated: 3,
        FileUpdated: 4,
        FileCheckIn: 5,
      }),
      (i.prototype.storageItem = null),
      (i.prototype.type = null),
      (i.FileStatusUpdate = function (e, t, n) {
        (this.storageItem = e), (this.oldStatus = t), (this.newStatus = n);
      }),
      o.GObject.inherit(i.FileStatusUpdate, o.GEvent),
      (exports.exports = i);
  }