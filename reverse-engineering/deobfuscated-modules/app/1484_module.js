/**
 * Webpack Module #1484
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(8) /* polyfill_bundle_ES6 */;
    var i = o(require(176) /* GSystem */),
      a = require(1) /* module */,
      r = o(require(1242) /* module_1242 */),
      s = o(require(44) /* GSystemDialog */),
      l = o(require(443) /* module_443 */),
      c = require(1243) /* Exports_SHAREPOINT_COMMAND */;
    const { isPrivateChat: d, isTeamsChannel: u } = l.default;
    function p(e) {
      if ("function" != typeof e)
        throw "GMSTeamsAppLoader constructor error: Wrong argument is provided";
      this._callback = e;
    }
    (p.prototype.isExeuteOnMobileDevice = function () {
      return i.default.hardware === i.default.Hardware.Phone;
    }),
      (p.prototype.load = async function () {
        if (this.isExeuteOnMobileDevice())
          return void s.default.splashScreenError(
            a.GLocale.get(
              new a.GLocaleKey(
                "GSystemDialog",
                "text.unsupported-mobile-for-msteams-new"
              )
            )
          );
        const exports = [c.MS_TEAMS_COMMAND];
        (await d())
          ? exports.push(c.ONE_DRIVE_BUSINESS_COMMAND)
          : (await u()) && exports.push(c.SHAREPOINT_COMMAND),
          r.default
            .getInstance()
            .authenticate(exports)
            .then(() => {
              this._callback();
            });
      }),
      (exports.exports = p);
  }