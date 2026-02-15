/**
 * Webpack Module #1325
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* module_30 */, require(8) /* module_8 */, require(20) /* module_20 */, require(527) /* module_527 */, require(107) /* module_107 */, require(4) /* module_4 */, require(32) /* module_32 */, require(33) /* module_33 */;
    var o = require(10) /* module_10 */;
    const i = require(1326) /* module_1326 */,
      a = require(1578) /* module_1578 */,
      r = require(256) /* GOfflineDialog */,
      s = require(441) /* module_441 */,
      l = {
        offlineWarning: () => r.openOfflineWarning(),
        trialExpired: () => a.openTrialExpired(),
        proExpireSoon: () => a.openProExpireSoon(),
        proExpireToday: () => a.openProExpireSoon(),
        proExpired: () => a.openProExpired(),
        upgradeScreen: () => a.openUpgradeScreen(),
        proOfferInTrial: () => a.openTrialMessage(),
        proOfferInTrialExpired: () => i.openOfferReminder(),
        proOfferInTrialExpireSoon: () => a.openTrialMessage(),
        proOfferInTrialLastWarning: () => a.openTrialMessage(),
        proOfferSpecialPrice: () => i.openOfferReminder(),
        proOfferInFree: () => i.openOfferReminder(),
      };
    exports.exports = new (class {
      constructor() {
        (this._settings = Object.assign(
          {},
          o.defaultUserSettings.defaultUserSettings
        )),
          (this._intervalId = null),
          (this._flags = {
            proOfferInTrialLastWarning: true,
            proOfferInTrialExpireSoon: true,
          });
      }
      async start() {
        try {
          let e = await o.gApi.getUserSettings().catch(() => null);
          e && (this._settings = Object.assign(this._settings, e));
        } catch (e) {
          console.info("GReminderManager", "exception", e);
        }
        this._settings &&
          this._settings.reminders &&
          (this._settings.reminders.proOfferInTrialExpireSoon =
            o.DateAPI.daysToMilliseconds(1)),
          setInterval(
            this.checkReminders.bind(this),
            o.DateAPI.daysToMilliseconds(1)
          ),
          await this.checkReminders(),
          gDesigner.addEventListener(s, this.checkReminders, this);
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
              const i = o.DateAPI.addTime(module.getCreationDate(), exports);
              o.DateAPI.gte(require, i) &&
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
        return !module.isTrial() || !o.DateAPI.lte(exports, module.getCreationDate());
      }
      execute(e, t) {
        const require = gDesigner.now();
        t && (t = o.DateAPI.addTime(t, -this._settings.reminders[e] || 0));
        const i = gDesigner.getSetting(e);
        return (
          !(
            i &&
            !o.DateAPI.isExpired(require, new Date(i), this._settings.reminders[e])
          ) &&
          !(t && !o.DateAPI.isExpired(require, t)) &&
          this._executeReminder(e)
        );
      }
      once(e, t) {
        let require = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
        if (gDesigner.getSetting(e)) return false;
        const i = gDesigner.now();
        return (
          t && (t = o.DateAPI.addTime(t, -this._settings.reminders[e] || 0)),
          !t || (!require && o.DateAPI.isExpired(i, t)) || (require && o.DateAPI.eq(i, t))
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
                      o.AmplitudeData.Events.ACCOUNT_TRIAL_EXPIRED_SCREEN,
                      {
                        ACCOUNT_TOTAL_TRIAL_DAYS_GIVEN: e.trial_created
                          ? o.DateAPI.millisecondsToDays(
                              o.DateAPI.diff(
                                new Date(e.trial_created),
                                new Date(e.trial_expire)
                              )
                            )
                          : null,
                        ACCOUNT_TOTAL_SUBSCRIPTION_DAYS_GIVEN:
                          await o.gApi.license.totalSubscriptionDays(e),
                        ACCOUNT_EVER_SUBSCRIBED:
                          await o.gApi.license.everSubscribed(),
                      }
                    );
                })
                .catch(() => null);
            break;
          case "proExpireSoon":
            (module = gDesigner.getLicense()),
              (require = o.DateAPI.millisecondsToDays(
                o.DateAPI.diff(
                  o.DateAPI.toUTCZone(gDesigner.now()),
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
              (require = o.DateAPI.millisecondsToDays(
                o.DateAPI.diff(
                  o.DateAPI.toUTCZone(gDesigner.now()),
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
            }, o.ACTIVE_USAGE_IDLE_TIME)),
          false)
        );
      }
      async _getShowTrialMessage() {
        try {
          const { showTrialMessage: exports } =
            (await o.gApi.client.getConfiguration()) || {};
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