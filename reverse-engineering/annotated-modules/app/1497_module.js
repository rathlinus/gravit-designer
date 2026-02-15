/**
 * Webpack Module #1497
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(20) /* polyfill_RegExp_exec */, n(34) /* polyfill_String_replace */;
    var o = n(10) /* AppSettings */;
    const { GLocale: i, GLocaleKey: a } = n(1) /* module */;
    function r(e) {
      this._htmlElement = e;
    }
    (r.prototype.init = function () {
      const e = $("<div></div>")
        .addClass("container")
        .appendTo(this._htmlElement);
      $("<p></p>")
        .html(
          i
            .getValue("GBanner", "text.access-expire")
            .replace(
              "%link",
              o.CloudUtils.getYearlySubscriptionUrl(
                o.UTM.buildStoreCampaignParams(
                  o.UTM.StoreCampaign.CorelVectorTrial,
                  o.UTM.Vehicle.IPM,
                  o.UTM.Source.APP,
                  o.UTM.Medium.IPM
                )
              )
            )
        )
        .appendTo(e);
    }),
      (r.prototype.setEnabled = function (e) {
        $("#banner").css("display", e ? "none" : "unset");
      }),
      (e.exports = r);
  }