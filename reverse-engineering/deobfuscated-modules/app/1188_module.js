/**
 * Webpack Module #1188
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(1) /* module */;
    function i() {}
    (i.CheckingForUpdate = function () {
      let exports =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      this.isSilent = exports.isSilent;
    }),
      o.GObject.inherit(i.CheckingForUpdate, o.GEvent),
      (i.InstallUpdate = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        this.isSilent = exports.isSilent;
      }),
      o.GObject.inherit(i.InstallUpdate, o.GEvent),
      (i.UpdateAvailable = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this.newVersion = exports.newVersion),
          (this.currentVersion = exports.currentVersion),
          (this.forceUpdate = exports.forceUpdate),
          (this.isSilent = exports.isSilent);
      }),
      o.GObject.inherit(i.UpdateAvailable, o.GEvent),
      (i.UpdateError = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this.error = exports.error), (this.isSilent = exports.isSilent);
      }),
      o.GObject.inherit(i.UpdateError, o.GEvent),
      (i.Downloading = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this.percent = exports.percent),
          (this.size = exports.size),
          (this.newVersion = exports.newVersion),
          (this.isSilent = exports.isSilent);
      }),
      o.GObject.inherit(i.Downloading, o.GEvent),
      (i.DownloadComplete = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this.newVersion = exports.newVersion),
          (this.forceUpdate = exports.forceUpdate),
          (this.isSilent = exports.isSilent);
      }),
      o.GObject.inherit(i.DownloadComplete, o.GEvent),
      (i.AfterUpdate = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this.currentVersion = exports.currentVersion), (this.isSilent = exports.isSilent);
      }),
      o.GObject.inherit(i.AfterUpdate, o.GEvent),
      (i.UpdateNotAvailable = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this.currentVersion = exports.currentVersion), (this.isSilent = exports.isSilent);
      }),
      o.GObject.inherit(i.UpdateNotAvailable, o.GEvent),
      (i.BeforeInstallUpdate = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        this.isSilent = exports.isSilent;
      }),
      o.GObject.inherit(i.BeforeInstallUpdate, o.GEvent),
      (exports.exports = i);
  }