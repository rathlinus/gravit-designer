/**
 * Webpack Module #1592
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */;
    const { PasswordlessAuthenticationActions: o, gApi: i } = require(10) /* module_10 */,
      a = require(44) /* GSystemDialog */,
      r = require(604) /* module_604 */,
      s = require(337) /* module_337 */,
      { GLocale: l, GLocaleKey: c } = require(1) /* module */;
    exports.exports = class {
      async execute() {
        let { [o.SetPassword]: exports } =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        try {
          await i.passwordlessAuthentication.authenticateWithSetPasswordToken(
            exports
          ),
            await s.checkLicense();
          const t = await gDesigner.getUser();
          t &&
            gDesigner.executeWhenReady(() => {
              new r(t, r.Tabs.ChangePassword, {
                token: exports,
                tabs: [r.Tabs.ChangePassword],
                closeable: false,
                changePasswordOptions: {
                  autoClose: true,
                  title: l.get(
                    new c("GChangePasswordPanel", "text.set-password")
                  ),
                  info: l.get(
                    new c("GChangePasswordPanel", "text.set-password-info")
                  ),
                },
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