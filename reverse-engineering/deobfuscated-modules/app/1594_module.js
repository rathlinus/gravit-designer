/**
 * Webpack Module #1594
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */;
    const { PasswordlessAuthenticationActions: o, gApi: i } = require(10) /* module_10 */,
      a = require(337) /* module_337 */,
      r = require(44) /* GSystemDialog */;
    exports.exports = class {
      async execute() {
        let { [o.PasswordlessToken]: exports } =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        try {
          return (
            await i.passwordlessAuthentication.authenticateWithPasswordlessToken(
              exports
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