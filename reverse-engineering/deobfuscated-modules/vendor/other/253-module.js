/**
 * Module 253
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  "use strict";
  require(19) /* polyfill_Array_iterator */, require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(107) /* polyfill_RegExp_test */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */, require(114) /* stub_requires_424 */;
  const {DateAPI: n} = require(209) /* module */, r = require(287) /* module */;
  exports.exports = {
    sinceVersion: "3.4.5",
    sinceDate: new Date(2018, 8, 15),
    providers: {
      cb: {
        getPrice() {
          let {
            productId: exports = 220444,
            coupon: module,
            currency: require,
            country: n
          } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
          const r = window.location.origin, o = new URLSearchParams("?client_id=1577");
          return exports ? (o.set("product_id", exports), module && o.set("coupon", module), require && o.set("currency", require), n && o.set("country", n), o.set("price_rule", exports), fetch("".concat(r, "/pricesystem/cb?").concat(o.toString())).then(e => e.ok ? e.json() : Promise.reject()).then(e => {
            const {
              price: {
                gross: {value: module}
              },
              list_price: {
                gross: {value: require} = {}
              } = {},
              currency: {iso: n},
              locale: r
            } = e.pop();
            return {
              price: module,
              listPrice: require,
              currency: n,
              locale: r
            };
          })) : Promise.reject("Missing productId");
        }
      }
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
      trialDays: true,
      flags: {
        welcomeMessage: true,
        windowsStoreAnnouncement: true
      },
      subscription: true
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
        "bezigon"
      ],
      quotas: { free: 2097152 }
    },
    defaultUserSettings: {
      trialDays: undefined,
      quotas: {
        free: null,
        pro: null
      },
      subscription: {
        annual: {
          productId: null,
          coupon: null
        },
        extraParameters: {
          "x-at": null,
          "x-clickref": null
        }
      },
      license: {
        offlineExpirationTime: n.daysToMilliseconds(15),
        offlineCountdown: n.daysToMilliseconds(7)
      },
      reminders: {
        offlineWarning: n.daysToMilliseconds(1),
        proOfferInFree: n.daysToMilliseconds(15),
        proOfferInTrial: n.daysToMilliseconds(5),
        proOfferInTrialExpired: n.daysToMilliseconds(15),
        proOfferInTrialExpireSoon: n.daysToMilliseconds(1),
        proOfferInTrialLastWarning: n.daysToMilliseconds(0),
        proOfferSpecialPrice: n.daysToMilliseconds(0),
        proExpireSoon: n.daysToMilliseconds(30)
      },
      flags: {
        welcomeMessage: false,
        windowsStoreAnnouncement: false,
        proOfferSpecialPrice: false,
        proOfferInTrialExpireSoon: true,
        proOfferInTrialLastWarning: true
      }
    },
    quotas: {
      free: 524288000,
      pro: -1
    },
    share: {
      pro: false,
      defaults: {
        public: { role: r.Viewer },
        private: {
          pro: true,
          role: r.Reviewer
        }
      },
      quotas: {
        free: {
          private: 0,
          public: -1
        },
        pro: {
          private: -1,
          public: -1
        }
      }
    },
    learnmore: true,
    bypassEmailVerification: true
  };
}
