/**
 * Webpack Module #393
 * Type: class
 * Name: GCollaborationEvent
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    const { GEvent: o, GObject: i } = require(1) /* module */;
    function a(e, t) {
      (this.type = e), (this.data = t);
    }
    i.inherit(a, o),
      (a.prototype.type = null),
      (a.prototype.data = null),
      (a.Type = {
        AnnotationsUpdate: 0,
        ShareUpdate: 10,
        UserUpdate: 20,
        LockRequest: 30,
        LockUpdated: 31,
        FileUpdate: 40,
        FileAutoSave: 41,
        ReviewStatusChanged: 50,
      }),
      (a.prototype.toString = function () {
        return "[Object GCollaborationEvent]";
      }),
      (exports.exports = a);
  }