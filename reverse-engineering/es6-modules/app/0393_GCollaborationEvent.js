/**
 * Webpack Module #393
 * Type: class
 * Name: GCollaborationEvent
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  const { GEvent: o, GObject: i } = require(1);
  class a extends o {
    constructor(e, t) {
      super();
      ((this.type = e), (this.data = t));
    }

    type = null;
    data = null;

    toString() {
      return '[Object GCollaborationEvent]';
    }

    static Type = {
      AnnotationsUpdate: 0,
      ShareUpdate: 10,
      UserUpdate: 20,
      LockRequest: 30,
      LockUpdated: 31,
      FileUpdate: 40,
      FileAutoSave: 41,
      ReviewStatusChanged: 50,
    };

  }
  exports.exports = a;
}