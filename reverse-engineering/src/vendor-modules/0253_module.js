/**
 * chunk.vendor.js Module #253
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      (i(19), i(8), i(20), i(107), i(3), i(26), i(114));
      const { DateAPI: n } = i(209),
        r = i(287);
      e.exports = {
        sinceVersion: "3.4.5",
        sinceDate: new Date(2018, 8, 15),
        providers: {
          cb: {
            getPrice() {
              let {
                productId: e = 220444,
                coupon: t,
                currency: i,
                country: n,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              const r = window.location.origin,
                o = new URLSearchParams("?client_id=1577");
              return e
                ? (o.set("product_id", e),
                  t && o.set("coupon", t),
                  i && o.set("currency", i),
                  n && o.set("country", n),
                  o.set("price_rule", e),
                  fetch("".concat(r, "/pricesystem/cb?").concat(o.toString()))
                    .then((e) => (e.ok ? e.json() : Promise.reject()))
                    .then((e) => {
                      const {
                        price: {
                          gross: { value: t },
                        },
                        list_price: { gross: { value: i } = {} } = {},
                        currency: { iso: n },
                        locale: r,
                      } = e.pop();
                      return {
                        price: t,
                        listPrice: i,
                        currency: n,
                        locale: r,
                      };
                    }))
                : Promise.reject("Missing productId");
            },
          },
        },
        trialDays: 15,
        legacyTrialDays: 30,
        legacyPriceDays: -1,
        legacyUserUntil: new Date(2018, 9, 17),
        newUserSince: new Date(2018, 9, 17),
        minTrialPeriod: 5,
        maxTrialPeriod: 45,
        defaultTrialPeriod: 15,
        publicUserSettings: {
          trialDays: !0,
          flags: {
            welcomeMessage: !0,
            windowsStoreAnnouncement: !0,
          },
          subscription: !0,
        },
        defaultLegacyUserSettings: {
          features: [
            "offline",
            "file.export",
            "file.export.pdf",
            "file.save-as.pdf",
            "file.save-as.pdf.300",
            "swatches",
            "cmyk",
            "font.import",
            "bezigon",
          ],
          quotas: {
            free: 2097152,
          },
        },
        defaultUserSettings: {
          trialDays: void 0,
          quotas: {
            free: null,
            pro: null,
          },
          subscription: {
            annual: {
              productId: null,
              coupon: null,
            },
            extraParameters: {
              "x-at": null,
              "x-clickref": null,
            },
          },
          license: {
            offlineExpirationTime: n.daysToMilliseconds(15),
            offlineCountdown: n.daysToMilliseconds(7),
          },
          reminders: {
            offlineWarning: n.daysToMilliseconds(1),
            proOfferInFree: n.daysToMilliseconds(15),
            proOfferInTrial: n.daysToMilliseconds(5),
            proOfferInTrialExpired: n.daysToMilliseconds(15),
            proOfferInTrialExpireSoon: n.daysToMilliseconds(1),
            proOfferInTrialLastWarning: n.daysToMilliseconds(0),
            proOfferSpecialPrice: n.daysToMilliseconds(0),
            proExpireSoon: n.daysToMilliseconds(30),
          },
          flags: {
            welcomeMessage: !1,
            windowsStoreAnnouncement: !1,
            proOfferSpecialPrice: !1,
            proOfferInTrialExpireSoon: !0,
            proOfferInTrialLastWarning: !0,
          },
        },
        quotas: {
          free: 524288e3,
          pro: -1,
        },
        share: {
          pro: !1,
          defaults: {
            public: {
              role: r.Viewer,
            },
            private: {
              pro: !0,
              role: r.Reviewer,
            },
          },
          quotas: {
            free: {
              private: 0,
              public: -1,
            },
            pro: {
              private: -1,
              public: -1,
            },
          },
        },
        learnmore: !0,
        bypassEmailVerification: !0,
      };
    }