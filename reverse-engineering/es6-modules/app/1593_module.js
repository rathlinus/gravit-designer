/**
 * Webpack Module #1593
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(8) /* polyfill_bundle_ES6 */;
  const { PasswordlessAuthenticationActions: o, gApi: i } = require(10) /* AppSettings */,
    GSystemDialog = require(44) /* GSystemDialog */,
    GProfileDialog = require(604) /* GProfileDialog */,
    s = require(337); /* stub_requires_1098 */
  exports.exports = class {
    async execute() {
      let { [o.ResetPassword]: exports } =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      try {
        (await i.passwordlessAuthentication.authenticateWithResetPasswordToken(exports),
          await s.checkLicense());
        const t = await gDesigner.getUser();
        t &&
          gDesigner.executeWhenReady(() => {
            new GProfileDialog(t, GProfileDialog.Tabs.ChangePassword, {
              token: exports,
              tabs: [GProfileDialog.Tabs.ChangePassword],
            }).open();
          });
      } catch (e) {
        gDesigner.executeWhenReady(() => {
          GSystemDialog.error(e);
        });
      }
    }
  };
}
