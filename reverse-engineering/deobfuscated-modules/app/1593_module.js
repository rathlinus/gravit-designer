/**
 * Webpack Module #1593
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */;
    const { PasswordlessAuthenticationActions: o, gApi: i } = require(10) /* module_10 */,
      a = require(44) /* GSystemDialog */,
      r = require(604) /* module_604 */,
      s = require(337) /* module_337 */;
    exports.exports = class {
      async execute() {
        let { [o.ResetPassword]: exports } =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        try {
          await i.passwordlessAuthentication.authenticateWithResetPasswordToken(
            exports
          ),
            await s.checkLicense();
          const t = await gDesigner.getUser();
          t &&
            gDesigner.executeWhenReady(() => {
              new r(t, r.Tabs.ChangePassword, {
                token: exports,
                tabs: [r.Tabs.ChangePassword],
              }).open();
            });
        } catch (e) {
          gDesigner.executeWhenReady(() => {
            a.error(e);
          });
        }
      }
    };
  }