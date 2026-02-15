/**
 * Webpack Module #1497
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */, require(34) /* polyfill_String_replace */;
    var o = require(10) /* AppSettings */;
    const { GLocale: i, GLocaleKey: a } = require(1) /* module */;
    function r(e) {
      this._htmlElement = e;
    }
    (r.prototype.init = function () {
      const exports = $("<div></div>")
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
        .appendTo(exports);
    }),
      (r.prototype.setEnabled = function (e) {
        $("#banner").css("display", e ? "none" : "unset");
      }),
      (exports.exports = r);
  }