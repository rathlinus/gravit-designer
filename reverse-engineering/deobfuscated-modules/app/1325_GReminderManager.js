/**
 * Webpack Module #1325
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(527) /* DataModule_527 */, require(107) /* polyfill_RegExp_test */, require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var AppSettings = require(10) /* AppSettings */;
    const DataModule_1326 = require(1326) /* DataModule_1326 */,
      DataModule_1578 = require(1578) /* DataModule_1578 */,
      GOfflineDialog = require(256) /* GOfflineDialog */,
      GEvent_license = require(441) /* GEvent_license */,
      l = {
        offlineWarning: () => GOfflineDialog.openOfflineWarning(),
        trialExpired: () => DataModule_1578.openTrialExpired(),
        proExpireSoon: () => DataModule_1578.openProExpireSoon(),
        proExpireToday: () => DataModule_1578.openProExpireSoon(),
        proExpired: () => DataModule_1578.openProExpired(),
        upgradeScreen: () => DataModule_1578.openUpgradeScreen(),
        proOfferInTrial: () => DataModule_1578.openTrialMessage(),
        proOfferInTrialExpired: () => DataModule_1326.openOfferReminder(),
        proOfferInTrialExpireSoon: () => DataModule_1578.openTrialMessage(),
        proOfferInTrialLastWarning: () => DataModule_1578.openTrialMessage(),
        proOfferSpecialPrice: () => DataModule_1326.openOfferReminder(),
        proOfferInFree: () => DataModule_1326.openOfferReminder(),
      };
    exports.exports = new (class {
      constructor() {
        (this._settings = Object.assign(
          {},
          AppSettings.defaultUserSettings.defaultUserSettings
        )),
          (this._intervalId = null),
          (this._flags = {
            proOfferInTrialLastWarning: true,
            proOfferInTrialExpireSoon: true,
          });
      }
      async start() {
        try {
          let e = await AppSettings.gApi.getUserSettings().catch(() => null);
          e && (this._settings = Object.assign(this._settings, e));
        } catch (e) {
          console.info("GReminderManager", "exception", e);
        }
        this._settings &&
          this._settings.reminders &&
          (this._settings.reminders.proOfferInTrialExpireSoon =
            AppSettings.DateAPI.daysToMilliseconds(1)),
          setInterval(
            this.checkReminders.bind(this),
            AppSettings.DateAPI.daysToMilliseconds(1)
          ),
          await this.checkReminders(),
          gDesigner.addEventListener(GEvent_license, this.checkReminders, this);
      }
      async checkReminders() {
        if (!gDesigner.isEnabledSubscriptions()) return;
        let exports = gDesigner.getSyncUser();
        if (!exports || exports.deactivated) return;
        if (!this._isAllowedToShowReminders()) return;
        const module = gDesigner.getLicense(),
          require = gDesigner.now();
        if (module.canAccessFreemium(require)) {
          if (module.isExpired(require)) {
            if (module.isTrial() && this.once("trialExpired"))
              return void this._checkPoint("proOfferInTrialExpired", require);
            if (module.isPro()) return void this.once("proExpired");
            this.execute("proOfferInTrialExpired");
          } else if (module.isPro())
            module.getExpirationDate() &&
              (this.once("proExpireSoon", module.getExpirationDate()) ||
                this.once("proExpireToday", module.getExpirationDate()));
          else if (module.isTrial())
            (await this._getShowTrialMessage()) &&
              this._waitUntilUserIsInactive() &&
              (this.execute("proOfferInTrial") ||
                this.once("proOfferInTrialExpireSoon", module.getExpirationDate()) ||
                this.once("proOfferInTrialLastWarning", module.getExpirationDate()));
          else if (module.isFree()) {
            const { reminders: { proOfferInFree: exports = 15 } = {} } =
              this._settings;
            if (module.getCreationDate()) {
              const DataModule_1326 = AppSettings.DateAPI.addTime(module.getCreationDate(), exports);
              AppSettings.DateAPI.gte(require, DataModule_1326) &&
                this.execute("proOfferInFree") &&
                this.reset("proOfferInTrial", require);
            }
          }
          module.isPro() ||
            (module.isLegacy() &&
              module.getSpecialPriceDate() &&
              this.once("proOfferSpecialPrice", module.getSpecialPriceDate(), true)),
            module.isOffline() &&
              !module.isOfflinePeriodExpired() &&
              (module.isPro() || module.isTrial()) &&
              this.execute("offlineWarning", module.getOfflineWarningDate()),
            module.isPro() &&
              !module.isExpired(require) &&
              (this.reset("proExpired"), this.reset("proExpireToday"));
        } else
          (await this._getShowTrialMessage()) &&
            this._executeReminder("upgradeScreen");
      }
      _isAllowedToShowReminders() {
        const exports = new Date(gDesigner.now()).getTime(),
          module = gDesigner.getLicense();
        return !module.isTrial() || !AppSettings.DateAPI.lte(exports, module.getCreationDate());
      }
      execute(e, t) {
        const require = gDesigner.now();
        t && (t = AppSettings.DateAPI.addTime(t, -this._settings.reminders[e] || 0));
        const DataModule_1326 = gDesigner.getSetting(e);
        return (
          !(
            DataModule_1326 &&
            !AppSettings.DateAPI.isExpired(require, new Date(DataModule_1326), this._settings.reminders[e])
          ) &&
          !(t && !AppSettings.DateAPI.isExpired(require, t)) &&
          this._executeReminder(e)
        );
      }
      once(e, t) {
        let require = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
        if (gDesigner.getSetting(e)) return false;
        const DataModule_1326 = gDesigner.now();
        return (
          t && (t = AppSettings.DateAPI.addTime(t, -this._settings.reminders[e] || 0)),
          !t || (!require && AppSettings.DateAPI.isExpired(DataModule_1326, t)) || (require && AppSettings.DateAPI.eq(DataModule_1326, t))
            ? this._executeReminder(e)
            : undefined
        );
      }
      _checkPoint(e, t) {
        gDesigner.setSetting(e, t);
      }
      _executeReminder(e) {
        return (
          !!this._checkFlag(e) &&
          (/^prod/.test("production") || console.info("ReminderManager", e),
          this._checkPoint(e, gDesigner.now()),
          this._handleStats(e),
          l[e].call(null),
          true)
        );
      }
      _checkFlag(e) {
        return this._flags.hasOwnProperty(e)
          ? this._flags[e]
          : false !== this._settings.flags[e];
      }
      _handleStats(e) {
        let module, require;
        switch (e) {
          case "offlineWarning":
            gDesigner.pageTracking("/ProOfflineWarning");
            break;
          case "trialExpired":
            gDesigner.pageTracking("/ProTrialExpired");
            break;
          case "upgradeScreen":
            gDesigner.pageTracking("/Upgrade"),
              gDesigner
                .getUser()
                .then(async (e) => {
                  gDesigner
                    .getAmplitudeHelper()
                    .logEvent(
                      AppSettings.AmplitudeData.Events.ACCOUNT_TRIAL_EXPIRED_SCREEN,
                      {
                        ACCOUNT_TOTAL_TRIAL_DAYS_GIVEN: e.trial_created
                          ? AppSettings.DateAPI.millisecondsToDays(
                              AppSettings.DateAPI.diff(
                                new Date(e.trial_created),
                                new Date(e.trial_expire)
                              )
                            )
                          : null,
                        ACCOUNT_TOTAL_SUBSCRIPTION_DAYS_GIVEN:
                          await AppSettings.gApi.license.totalSubscriptionDays(e),
                        ACCOUNT_EVER_SUBSCRIBED:
                          await AppSettings.gApi.license.everSubscribed(),
                      }
                    );
                })
                .catch(() => null);
            break;
          case "proExpireSoon":
            (module = gDesigner.getLicense()),
              (require = AppSettings.DateAPI.millisecondsToDays(
                AppSettings.DateAPI.diff(
                  AppSettings.DateAPI.toUTCZone(gDesigner.now()),
                  module.getExpirationDate()
                )
              )),
              gDesigner.pageTracking("/ProReminders" + require);
            break;
          case "proExpireToday":
            gDesigner.pageTracking("/ProReminders1");
            break;
          case "proExpired":
            gDesigner.pageTracking("/ProSubExpired");
            break;
          case "proOfferInTrial":
            gDesigner.pageTracking("/ProTrial");
            break;
          case "proOfferInTrialExpired":
            gDesigner.pageTracking("/ProTrialExpired");
            break;
          case "proOfferInTrialExpireSoon":
            (module = gDesigner.getLicense()),
              (require = AppSettings.DateAPI.millisecondsToDays(
                AppSettings.DateAPI.diff(
                  AppSettings.DateAPI.toUTCZone(gDesigner.now()),
                  module.getExpirationDate()
                )
              )),
              gDesigner.pageTracking("/ProTrialExpireSoon" + require);
            break;
          case "proOfferInTrialLastWarning":
            gDesigner.pageTracking("/ProTrialExpireToday");
            break;
          case "proOfferSpecialPrice":
            gDesigner.pageTracking("/ProTrialSpecialPrice");
            break;
          case "proOfferInFree":
            gDesigner.pageTracking("/ProFree");
            break;
          case "upgrade":
            gDesigner.pageTracking("/Upgrade");
        }
      }
      reset(e, t) {
        gDesigner.setSetting(e, t);
      }
      resetAll() {
        Object.keys(l).forEach((e) => this.reset(e));
      }
      _waitUntilUserIsInactive() {
        return (
          !gDesigner.isUserActivelyUsingApp() ||
          (this._intervalId ||
            (this._intervalId = setInterval(() => {
              gDesigner.isUserActivelyUsingApp() ||
                (clearInterval(this._intervalId),
                (this._intervalId = null),
                this.checkReminders());
            }, AppSettings.ACTIVE_USAGE_IDLE_TIME)),
          false)
        );
      }
      async _getShowTrialMessage() {
        try {
          const { showTrialMessage: exports } =
            (await AppSettings.gApi.client.getConfiguration()) || {};
          return !!exports;
        } catch (e) {
          console.error(
            "Failed to load client configuration. Skipping trial reminders"
          );
        }
        return false;
      }
    })();
  }