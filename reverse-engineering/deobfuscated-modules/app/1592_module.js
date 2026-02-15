/**
 * Webpack Module #1592
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(8) /* module_8 */;
    const { PasswordlessAuthenticationActions: o, gApi: i } = n(10) /* module_10 */,
      a = n(44) /* GSystemDialog */,
      r = n(604) /* module_604 */,
      s = n(337) /* module_337 */,
      { GLocale: l, GLocaleKey: c } = n(1) /* module_1 */;
    e.exports = class {
      async execute() {
        let { [o.SetPassword]: e } =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        try {
          await i.passwordlessAuthentication.authenticateWithSetPasswordToken(
            e
          ),
            await s.checkLicense();
          const t = await gDesigner.getUser();
          t &&
            gDesigner.executeWhenReady(() => {
              new r(t, r.Tabs.ChangePassword, {
                token: e,
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