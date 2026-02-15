/**
 * Webpack Module #336
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e, t) {
      super();
      ((this.type = e), (this.storageItem = t));
    }

    storageItem = null;
    type = null;

    static Type = {
      VersionUpdate: 2,
      ShareCreated: 3,
      FileUpdated: 4,
      FileCheckIn: 5,
    };

    static FileStatusUpdate(e, t, n) {
      ((this.storageItem = e), (this.oldStatus = t), (this.newStatus = n));
    }

  }
  (GCore.GObject.inherit(i.FileStatusUpdate, GCore.GEvent),
    exports.exports = i);
}