/**
 * Webpack Module #1594
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(8) /* module_8 */;
    const { PasswordlessAuthenticationActions: o, gApi: i } = n(10) /* module_10 */,
      a = n(337) /* module_337 */,
      r = n(44) /* GSystemDialog */;
    e.exports = class {
      async execute() {
        let { [o.PasswordlessToken]: e } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        try {
          return (
            await i.passwordlessAuthentication.authenticateWithPasswordlessToken(
              e
            ),
            await a.checkLicense(),
            gDesigner.getUser()
          );
        } catch (e) {
          gDesigner.executeWhenReady(() => {
            r.error(e);
          });
        }
      }
    };
  }