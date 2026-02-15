/**
 * Webpack Module #1188
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GCore = require(1);
  class i {
    static CheckingForUpdate() {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    this.isSilent = exports.isSilent;
  }

    static InstallUpdate() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      this.isSilent = exports.isSilent;
    }

    static UpdateAvailable() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      ((this.newVersion = exports.newVersion),
        (this.currentVersion = exports.currentVersion),
        (this.forceUpdate = exports.forceUpdate),
        (this.isSilent = exports.isSilent));
    }

    static UpdateError() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      ((this.error = exports.error), (this.isSilent = exports.isSilent));
    }

    static Downloading() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      ((this.percent = exports.percent),
        (this.size = exports.size),
        (this.newVersion = exports.newVersion),
        (this.isSilent = exports.isSilent));
    }

    static DownloadComplete() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      ((this.newVersion = exports.newVersion),
        (this.forceUpdate = exports.forceUpdate),
        (this.isSilent = exports.isSilent));
    }

    static AfterUpdate() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      ((this.currentVersion = exports.currentVersion), (this.isSilent = exports.isSilent));
    }

    static UpdateNotAvailable() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      ((this.currentVersion = exports.currentVersion), (this.isSilent = exports.isSilent));
    }

    static BeforeInstallUpdate() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      this.isSilent = exports.isSilent;
    }

  }
  (GCore.GObject.inherit(i.CheckingForUpdate, GCore.GEvent),
    GCore.GObject.inherit(i.InstallUpdate, GCore.GEvent),
    GCore.GObject.inherit(i.UpdateAvailable, GCore.GEvent),
    GCore.GObject.inherit(i.UpdateError, GCore.GEvent),
    GCore.GObject.inherit(i.Downloading, GCore.GEvent),
    GCore.GObject.inherit(i.DownloadComplete, GCore.GEvent),
    GCore.GObject.inherit(i.AfterUpdate, GCore.GEvent),
    GCore.GObject.inherit(i.UpdateNotAvailable, GCore.GEvent),
    GCore.GObject.inherit(i.BeforeInstallUpdate, GCore.GEvent),
    exports.exports = i);
}