/**
 * Webpack Module #1497
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(20) /* polyfill_RegExp_exec */, require(34)) /* polyfill_String_replace */;
  var AppSettings = require(10);
  const { GLocale: i, GLocaleKey: a } = require(1);
  class r {
    constructor(e) {
      this._htmlElement = e;
    }

    init() {
    const exports = $('<div></div>').addClass('container').appendTo(this._htmlElement);
    $('<p></p>')
      .html(
        i
          .getValue('GBanner', 'text.access-expire')
          .replace(
            '%link',
            AppSettings.CloudUtils.getYearlySubscriptionUrl(
              AppSettings.UTM.buildStoreCampaignParams(
                AppSettings.UTM.StoreCampaign.CorelVectorTrial,
                AppSettings.UTM.Vehicle.IPM,
                AppSettings.UTM.Source.APP,
                AppSettings.UTM.Medium.IPM
              )
            )
          )
      )
      .appendTo(exports);
  }

    setEnabled(e) {
      $('#banner').css('display', e ? 'none' : 'unset');
    }

  }
  exports.exports = r;
}