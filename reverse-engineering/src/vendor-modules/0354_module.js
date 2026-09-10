/**
 * chunk.vendor.js Module #354
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      e.exports = {
        buildCampaignParams: (e) => ({
          utm_campaign: e,
          utm_source: "gd-inapp",
          utm_medium: "inappmsg",
        }),
        buildStoreCampaignParams: (e, t, i, n) => ({
          utm_campaign: e,
          "x-vehicle": t || "ipp",
          utm_source: i || "appScreen",
          utm_medium: n || "ipp",
        }),
        Campaign: {
          LegacyWelcomeBack: "trial-legacywelcome",
          TrialDay1: "trial-day1",
          TrialDay5: "trial-day5",
          TrialDay10: "trial-day10",
          Trial1DayLeft: "trial-1dayleft",
          TrialDayExpire: "trial-dayexpire",
          TrialEnd: "trial-end",
          UpgradeIntermintent: "upgradeint",
          ProFeature: "profeature",
          SubscriptionMonthExpire: "sub-moexpire",
          SubscriptionDayExpire: "sub-dayexpire",
          SubscriptionExpired: "sub-expire",
        },
        StoreCampaign: {
          TrialSeries: "trialseries",
          WelcomeScreen: "welcomescreen",
          CorelVectorTrial: "cv-trial",
        },
        Vehicle: {
          IPM: "ipm",
        },
        Source: {
          APP: "app",
        },
        Medium: {
          IPM: "ipm",
        },
      };
    }