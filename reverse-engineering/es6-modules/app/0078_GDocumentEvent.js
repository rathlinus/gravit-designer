/**
 * Webpack Module #78
 * Type: class
 * Name: GDocumentEvent
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  class i extends GCore.GEvent {
    constructor(e, t, n) {
      super();
      ((this.type = e), (this.document = t), n && (this.data = n));
    }

    type = null;
    document = null;

    toString() {
      return '[Object GDocumentEvent]';
    }

    static Type = {
      Added: 0,
      Removed: 1,
      Opened: 2,
      Deactivated: 10,
      Activated: 11,
      StorageItemUpdated: 12,
      Saving: 20,
      Modified: 23,
      SynchronismUpdated: 30,
      SynchronismUpdateFailed: 31,
      OwnerUpdated: 40,
      CloudSynchronismUpdated: 50,
      UpdateAvailable: 60,
      BeforeReload: 70,
      AutoSaveSynchronizing: 80,
      AutoSaveSynchronized: 81,
      AutoSaveSynchronizationFailed: 82,
      ContextMenuOpened: 90,
    };

  }
  exports.exports = i;
}