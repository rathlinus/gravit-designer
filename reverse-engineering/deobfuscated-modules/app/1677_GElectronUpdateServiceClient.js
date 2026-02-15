/**
 * Webpack Module #1677
 * Type: class
 * Name: GElectronUpdateServiceClient
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var { ipcRenderer: o } = require(881) /* module_881 */;
    const i = require(1349) /* module_1349 */;
    function a() {}
    (a.prototype.installUpdate = function () {
      console.info(this.toString() + " Firing install update"),
        o.send(i.CommandInstallUpdate);
    }),
      (a.prototype.checkForUpdates = function () {
        console.info(this.toString() + " Firing checking update"),
          o.send(i.CommandCheckForUpdates);
      }),
      (a.prototype.downloadUpdate = function () {
        console.info(this.toString() + " Firing download update"),
          o.send(i.CommandDownloadUpdate);
      }),
      (a.prototype.on = function (e, t) {
        o.on(e, t);
      }),
      (a.prototype.toString = function () {
        return "[Object GElectronUpdateServiceClient]";
      }),
      (exports.exports = new a());
  }