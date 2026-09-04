/**
 * chunk.vendor.js Module #707
 * Type: class
 * Name: GPaywallDialog
 */

function (e, t, i) {
      "use strict";
      (i(19), i(30), i(57), i(8), i(20), i(34), i(26));
      const n = i(171),
        r = i(373),
        o = (e) => new Promise((t) => setTimeout(t, e)),
        a = i(526),
        s = i(976),
        l = i(354),
        h = i(170);
      e.exports = class {
        static get __i18n__() {
          return "GPaywallDialog";
        }
        static get Impl() {
          return class {
            open() {
              throw new Error("Not implemented");
            }
            close() {
              throw new Error("Not implemented");
            }
            openPurchaseFlow() {
              throw new Error("Not implemented");
            }
            openExternalLink() {
              throw new Error("Not implemented");
            }
            getProduct() {
              throw new Error("Not implemented");
            }
            getLicense() {
              throw new Error("Not implemented");
            }
            getUser() {
              throw new Error("Not implemented");
            }
            getLanguage() {
              throw new Error("Not implemented");
            }
          };
        }
        constructor(e) {
          let t,
            { type: i = "reminder", impl: o, gApi: A, now: c, campaign: p } = e;
          this._impl = o;
          const u = () => p || t || l.StoreCampaign.TrialSeries;
          (h.setLanguage(this._impl.getLanguage()),
            A.setLanguage(this._impl.getLanguage()),
            (this._htmlElement = n("<div></div>").addClass(
              "g-cloud-ui g-cloud-ui-paywall-dialog g-dialog",
            )),
            (this._dialog = n("<div></div>")
              .addClass(
                "g-cloud-ui-paywall-dialog-content g-dialog-content g-cloud-ui-loading",
              )
              .appendTo(this._htmlElement)));
          const d = "paywall/".concat(i);
          let g, f;
          "subscribe" === i &&
            ((g = [
              h.getValue(
                "GPaywallDialog",
                "text.offerdialog-v1-subscribe-title-1",
              ),
              h.getValue(
                "GPaywallDialog",
                "text.offerdialog-v1-subscribe-title-2",
              ),
            ]),
            (f = a.DEFAULT_CONTENT),
            (t = l.Campaign.UpgradeIntermintent));
          let m = new s({
            campaign: u(),
            page: d,
            title: g,
            content: f,
            cmd: {
              close: this.close.bind(this),
            },
          })
            .getHTMLElement()
            .appendTo(this._dialog);
          ((c = c || r.now()),
            Promise.all([this._impl.getLicense()])
              .then((e) => {
                let [n] = e;
                this._dialog.removeClass("g-cloud-ui-loading");
                let o = g,
                  A = f;
                if ("subscribe" !== i) {
                  let e = r.millisecondsToDays(r.diff(c, new Date(n.expire)));
                  if (
                    ((o = h
                      .getValue(
                        "GPaywallDialog",
                        1 === e ? "text.remaining-day" : "text.remaining-days",
                      )
                      .replace("%days", e)
                      .replace("%day", e)),
                    e >= 0)
                  )
                    (0 === e &&
                      (o = h.getValue("GPaywallDialog", "text.expires-today")),
                      (A = h.getValue(
                        "GPaywallDialog",
                        "text.access-message1",
                      )),
                      (t = l.StoreCampaign.TrialSeries));
                  else {
                    o = h.getValue("GPaywallDialog", "text.pretrial-title");
                    const e = [
                        () => {
                          A = h.getValue(
                            "GPaywallDialog",
                            "text.trial-message1",
                          );
                        },
                        () => {
                          A = h.getValue(
                            "GPaywallDialog",
                            "text.trial-message2",
                          );
                        },
                        () => {
                          A = Object.assign({}, a.DEFAULT_CONTENT, {
                            title: h.getValue(
                              "GPaywallDialog",
                              "text.pretrial-subtitle",
                            ),
                          });
                        },
                      ],
                      t = r.millisecondsToDays(r.diff(new Date(n.created), c)),
                      i = parseInt(((t - 1) / 15) % e.length) || 0;
                    e[Math.max(i, 0)].call(this);
                  }
                }
                m.replaceWith(
                  new s({
                    page: d,
                    title: o,
                    content: A,
                    campaign: u(),
                    cmd: {
                      openPurchaseFlow: () => {
                        (this._impl.openPurchaseFlow({
                          dialog: this,
                        }),
                          this.close());
                      },
                      close: this.close.bind(this),
                    },
                  }).getHTMLElement(),
                );
              })
              .catch(() => this._dialog.removeClass("g-cloud-ui-loading")));
        }
        getHTMLElement() {
          return this._htmlElement;
        }
        async open() {
          n(".g-cloud-ui-paywall-dialog").length ||
            (this._impl.open({
              dialog: this,
            }),
            await o(100),
            this._htmlElement.addClass("slide-up"));
        }
        async close() {
          let { licenseHasBeenUpgraded: e = !1 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this._htmlElement.removeClass("slide-up"),
            await o(1e3),
            this._impl.close({
              dialog: this,
              licenseHasBeenUpgraded: e,
            }));
        }
        toString() {
          return "[Object GPaywallDialog]";
        }
      };
    }