/**
 * Webpack Module #1594
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(8) /* polyfill_bundle_ES6 */;
  const { PasswordlessAuthenticationActions: o, gApi: i } = require(10) /* AppSettings */,
    a = require(337) /* stub_requires_1098 */,
    GSystemDialog = require(44); /* GSystemDialog */
  exports.exports = class {
    async execute() {
      let { [o.PasswordlessToken]: exports } =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      try {
        return (
          await i.passwordlessAuthentication.authenticateWithPasswordlessToken(exports),
          await a.checkLicense(),
          gDesigner.getUser()
        );
      } catch (e) {
        gDesigner.executeWhenReady(() => {
          GSystemDialog.error(e);
        });
      }
    }
  };
}
