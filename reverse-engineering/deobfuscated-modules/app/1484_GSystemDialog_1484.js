/**
 * Webpack Module #1484
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(8) /* polyfill_bundle_ES6 */;
    var GSystem = _interopRequireDefault(require(176) /* GSystem */),
      GCore = require(1) /* GCore */,
      MSTeamsAuthManager = _interopRequireDefault(require(1242) /* MSTeamsAuthManager */),
      s = _interopRequireDefault(require(44) /* GSystemDialog */),
      l = _interopRequireDefault(require(443) /* module_443 */),
      SHAREPOINT_COMMAND = require(1243) /* Exports_SHAREPOINT_COMMAND */;
    const { isPrivateChat: d, isTeamsChannel: u } = l.default;
    function p(e) {
      if ("function" != typeof e)
        throw "GMSTeamsAppLoader constructor error: Wrong argument is provided";
      this._callback = e;
    }
    (p.prototype.isExeuteOnMobileDevice = function () {
      return GSystem.default.hardware === GSystem.default.Hardware.Phone;
    }),
      (p.prototype.load = async function () {
        if (this.isExeuteOnMobileDevice())
          return void s.default.splashScreenError(
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GSystemDialog",
                "text.unsupported-mobile-for-msteams-new"
              )
            )
          );
        const exports = [SHAREPOINT_COMMAND.MS_TEAMS_COMMAND];
        (await d())
          ? exports.push(SHAREPOINT_COMMAND.ONE_DRIVE_BUSINESS_COMMAND)
          : (await u()) && exports.push(SHAREPOINT_COMMAND.SHAREPOINT_COMMAND),
          MSTeamsAuthManager.default
            .getInstance()
            .authenticate(exports)
            .then(() => {
              this._callback();
            });
      }),
      (exports.exports = p);
  }