/**
 * Webpack Module #1188
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* module */;
    function i() {}
    (i.CheckingForUpdate = function () {
      let exports =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      this.isSilent = exports.isSilent;
    }),
      GCore.GObject.inherit(i.CheckingForUpdate, GCore.GEvent),
      (i.InstallUpdate = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        this.isSilent = exports.isSilent;
      }),
      GCore.GObject.inherit(i.InstallUpdate, GCore.GEvent),
      (i.UpdateAvailable = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this.newVersion = exports.newVersion),
          (this.currentVersion = exports.currentVersion),
          (this.forceUpdate = exports.forceUpdate),
          (this.isSilent = exports.isSilent);
      }),
      GCore.GObject.inherit(i.UpdateAvailable, GCore.GEvent),
      (i.UpdateError = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this.error = exports.error), (this.isSilent = exports.isSilent);
      }),
      GCore.GObject.inherit(i.UpdateError, GCore.GEvent),
      (i.Downloading = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this.percent = exports.percent),
          (this.size = exports.size),
          (this.newVersion = exports.newVersion),
          (this.isSilent = exports.isSilent);
      }),
      GCore.GObject.inherit(i.Downloading, GCore.GEvent),
      (i.DownloadComplete = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this.newVersion = exports.newVersion),
          (this.forceUpdate = exports.forceUpdate),
          (this.isSilent = exports.isSilent);
      }),
      GCore.GObject.inherit(i.DownloadComplete, GCore.GEvent),
      (i.AfterUpdate = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this.currentVersion = exports.currentVersion), (this.isSilent = exports.isSilent);
      }),
      GCore.GObject.inherit(i.AfterUpdate, GCore.GEvent),
      (i.UpdateNotAvailable = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this.currentVersion = exports.currentVersion), (this.isSilent = exports.isSilent);
      }),
      GCore.GObject.inherit(i.UpdateNotAvailable, GCore.GEvent),
      (i.BeforeInstallUpdate = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        this.isSilent = exports.isSilent;
      }),
      GCore.GObject.inherit(i.BeforeInstallUpdate, GCore.GEvent),
      (exports.exports = i);
  }