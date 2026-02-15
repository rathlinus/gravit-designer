/**
 * Webpack Module #1676
 * Type: class
 * Name: GSoftwareUpdateManager
 */

function (exports, module, require) {
    "use strict";
    require(58) /* module_58 */, require(96) /* module_96 */, require(865) /* module_865 */, require(193) /* module_193 */, require(8) /* module_8 */, require(3) /* module_3 */, require(4) /* module_4 */, require(97) /* module_97 */;
    var o = require(1) /* module */,
      i = require(10) /* module_10 */,
      a = require(40) /* module_40 */;
    const r = require(85) /* GContainer */,
      s = require(1188) /* module_1188 */,
      l = require(1349) /* module_1349 */;
    var c;
    exports.exports = class {
      function Object() { [native code] }() {
        (this._intervalPID = null),
          (this._releaseStatus = { version: undefined, forceUpdate: false }),
          (this._downloadCompleted = false);
      }
      _trigger(e) {
        gDesigner.trigger(e);
      }
      getNewVersion() {
        return this._releaseStatus.version;
      }
      getCurrentVersion() {
        return gDesigner.getVersion();
      }
      getCurrentFriendlyVersion() {
        return gDesigner.getVersionFriendlyName();
      }
      _isVersionGeneralFormatHigherThan(e, t) {
        var n = e.split("."),
          o = t.split(".");
        if (3 !== n.length || n.some((e) => isNaN(Number(e))))
          throw "Incorrect release version argument";
        if (3 !== o.length || o.some((e) => isNaN(Number(e))))
          throw "Incorrect current version argument";
        var i = +n[0],
          a = +n[1],
          r = +n[2],
          s = +o[0],
          l = +o[1],
          c = +o[2];
        return i > s || (i === s && a > l) || (i === s && a === l && r > c);
      }
      _isVersionHigherThan(e, t) {
        return !!e && this._isVersionGeneralFormatHigherThan(e, t);
      }
      async initializeReleaseStatus() {
        try {
          this._releaseStatus = await i.gApi.software.getRelease({
            current: this.getCurrentVersion(),
            env: gDesigner.getEnv(),
            runtime: gContainer.getRuntime(),
            build: gDesigner.getBuildNum(),
            commit: gDesigner.getCommitSHA(),
            internalVersion: gDesigner.getVersion(),
          });
        } catch (e) {
          this._releaseStatus = { silent: true, forceUpdate: false };
        }
      }
      async initializeReleaseStatusWithNotifications() {
        await this.initializeReleaseStatus(), (this._releaseStatus.silent = false);
      }
      async checkForUpdates(e) {
        if (gDesigner.isOffline())
          return console.warn(
            this.toString() +
              " Unable to check for updates - system is offline!"
          );
        try {
          const t = this.getCurrentVersion();
          e
            ? await this.initializeReleaseStatus()
            : await this.initializeReleaseStatusWithNotifications();
          this._isVersionHigherThan(this._releaseStatus.tagVersion, t)
            ? this._isElectron()
              ? c.checkForUpdates()
              : this._trigger(
                  new s.UpdateAvailable({
                    currentVersion: this.getCurrentFriendlyVersion(),
                    newVersion: this._releaseStatus.version,
                    forceUpdate: this._releaseStatus.forceUpdate,
                    isSilent: this._releaseStatus.silent,
                  })
                )
            : e ||
              this._trigger(
                new s.UpdateNotAvailable({
                  currentVersion: this.getCurrentFriendlyVersion(),
                })
              );
        } catch (e) {
          console.error(this.toString(), "exception", e);
        }
      }
      downloadUpdate() {
        console.info(this.toString(), " - Downloading update"),
          this._isElectron() && c.downloadUpdate();
      }
      async installElectronUpdate() {
        o.GSystem.operatingSystem === o.GSystem.OperatingSystem.OSX_IOS &&
          (console.info(this.toString(), " - Waiting install - OSX"),
          await (0, a.sleep)(5e3)),
          console.info(this.toString(), " - Installing update - Call"),
          c.installUpdate();
      }
      async installUpdate() {
        switch (
          (console.info(this.toString(), " - Installing update - Start"),
          this._releaseStatus.silent ||
            this._trigger(new s.BeforeInstallUpdate()),
          gContainer.getRuntime())
        ) {
          case r.Runtime.Browser:
          case r.Runtime.PWA:
            location.reload();
            break;
          case r.Runtime.Electron:
            console.info(this.toString(), " - Checking download"),
              this._downloadCompleted
                ? this._releaseStatus.silent
                  ? gContainer.setProperty("install_update_on_start", true)
                  : this.installElectronUpdate()
                : console.warn(
                    this.toString() + " The download has not been finished yet!"
                  );
        }
      }
      _isElectron() {
        return gContainer.getRuntime() === r.Runtime.Electron;
      }
      async start() {
        [r.Runtime.Electron, r.Runtime.Browser, r.Runtime.PWA].includes(
          gContainer.getRuntime()
        )
          ? (this._isElectron() &&
              ((c = require(1677) /* GElectronUpdateServiceClient */).on(
                l.UpdateDownloaded,
                this._handleDownloadComplete.bind(this)
              ),
              c.on(
                l.DownloadProgress,
                this._handleDownloadInProgress.bind(this)
              ),
              c.on(l.UpdateAvailable, this._handleUpdateAvailable.bind(this)),
              c.on(l.Error, this._handleUpdateError.bind(this)),
              c.on(
                l.UpdateNotAvailable,
                this._handleUpdateNotAvailable.bind(this)
              ),
              c.on(
                l.CheckingForUpdate,
                this._handleCheckingForUpdate.bind(this)
              ),
              (await gContainer.getProperty("install_update_on_start")) &&
                (gContainer.removeProperty("install_update_on_start"),
                await this.initializeReleaseStatus(),
                this.installElectronUpdate())),
            (this._intervalPID = setTimeout(
              function () {
                let exports = new Date().getTime();
                gContainer.setProperty("last_update_check", exports),
                  this.checkForUpdates(true);
              }.bind(this),
              i.DateAPI.daysToMilliseconds(1)
            )),
            gContainer.getProperty("last_update_check").then((e) => {
              let module = new Date().getTime();
              if (e) {
                let n = i.DateAPI.diff(
                    i.DateAPI.toDate(e),
                    i.DateAPI.toDate(module),
                    false
                  ),
                  o = i.DateAPI.daysToMilliseconds(1);
                (n < 0 || n >= o) &&
                  (gContainer.setProperty("last_update_check", module),
                  this.checkForUpdates(true));
              } else gContainer.setProperty("last_update_check", module);
            }),
            gContainer.getProperty("old_version").then((e) => {
              const module = this.getCurrentVersion();
              e
                ? e !== module &&
                  (gContainer.setProperty("old_version", module),
                  i.gApi.software.getRelease().then((e) => {
                    e &&
                      !e.silent &&
                      this._trigger(
                        new s.AfterUpdate({
                          currentVersion: this.getCurrentFriendlyVersion(),
                        })
                      );
                  }))
                : gContainer.setProperty("old_version", module);
            }))
          : console.warn(
              this.toString() + " Runtime not available for auto update!"
            );
      }
      _handleDownloadComplete() {
        console.info(this.toString() + " Download complete"),
          (this._downloadCompleted = true),
          this._trigger(
            new s.DownloadComplete({
              newVersion: this._releaseStatus.version,
              forceUpdate: this._releaseStatus.forceUpdate,
              isSilent: this._releaseStatus.silent,
            })
          );
      }
      _handleUpdateNotAvailable() {
        console.info(this.toString() + " Update not available"),
          this._trigger(
            new s.UpdateNotAvailable({
              currentVersion: this.getCurrentFriendlyVersion(),
              isSilent: this._releaseStatus.silent,
            })
          );
      }
      _handleCheckingForUpdate() {
        console.info(this.toString() + " Checking for update"),
          this._trigger(
            new s.CheckingForUpdate({ isSilent: this._releaseStatus.silent })
          );
      }
      _handleDownloadInProgress(e, t) {
        console.info(
          this.toString() + " Download in progress:" + JSON.stringify(t)
        );
        const require = t.percent;
        this._trigger(
          new s.Downloading({
            percent: parseFloat(require).toFixed(2),
            newVersion: this._releaseStatus.version,
            isSilent: this._releaseStatus.silent,
          })
        );
      }
      _handleUpdateAvailable(e, t) {
        console.info(
          this.toString() + " Update available:" + JSON.stringify(t)
        ),
          this._trigger(
            new s.UpdateAvailable({
              currentVersion: this.getCurrentFriendlyVersion(),
              newVersion: this._releaseStatus.version,
              forceUpdate: this._releaseStatus.forceUpdate,
              isSilent: this._releaseStatus.silent,
            })
          ),
          this._releaseStatus.forceUpdate &&
            this._isElectron() &&
            c.downloadUpdate();
      }
      _handleUpdateError(e, t) {
        console.info(this.toString() + " Update error:" + JSON.stringify(t)),
          this._trigger(
            new s.UpdateError({
              error: t,
              isSilent: this._releaseStatus.silent,
            })
          );
      }
      stop() {
        this._intervalPID && clearInterval(this._intervalPID);
      }
      getReleaseNotesLink() {
        return i.SOFTWARE_UPDATE.CHANGE_LOG_LINK;
      }
      function toString() { [native code] }() {
        return "[Object GSoftwareUpdateManager]";
      }
    };
  }