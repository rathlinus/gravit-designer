/**
 * Webpack Module #1677
 * Type: class
 * Name: GElectronUpdateServiceClient
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var { ipcRenderer: o } = require(881);
  const i = require(1349);
  class a {
    installUpdate() {
    (console.info(this.toString() + ' Firing install update'), o.send(i.CommandInstallUpdate));
  }

    checkForUpdates() {
      (console.info(this.toString() + ' Firing checking update'), o.send(i.CommandCheckForUpdates));
    }

    downloadUpdate() {
      (console.info(this.toString() + ' Firing download update'), o.send(i.CommandDownloadUpdate));
    }

    on(e, t) {
      o.on(e, t);
    }

    toString() {
      return '[Object GElectronUpdateServiceClient]';
    }

  }
  exports.exports = new a();
}