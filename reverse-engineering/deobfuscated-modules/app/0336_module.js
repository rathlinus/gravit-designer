/**
 * Webpack Module #336
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* module */;
    function i(e, t) {
      (this.type = e), (this.storageItem = t);
    }
    GCore.GObject.inherit(i, GCore.GEvent),
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
      GCore.GObject.inherit(i.FileStatusUpdate, GCore.GEvent),
      (exports.exports = i);
  }