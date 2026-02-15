/**
 * Webpack Module #1593
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(8) /* polyfill_bundle_ES6 */;
    const { PasswordlessAuthenticationActions: o, gApi: i } = n(10) /* AppSettings */,
      a = n(44) /* GSystemDialog */,
      r = n(604) /* module_604 */,
      s = n(337) /* stub_requires_1098 */;
    e.exports = class {
      async execute() {
        let { [o.ResetPassword]: e } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        try {
          await i.passwordlessAuthentication.authenticateWithResetPasswordToken(
            e
          ),
            await s.checkLicense();
          const t = await gDesigner.getUser();
          t &&
            gDesigner.executeWhenReady(() => {
              new r(t, r.Tabs.ChangePassword, {
                token: e,
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