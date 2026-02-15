/**
 * Module 969
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  "use strict";
  const n = require(580) /* module */;
  exports.exports = e => {
    e.passwordlessAuthentication = {
      authenticateWithResetPasswordToken: t => e.GET("/passwordless/".concat(n.ResetPassword, "/").concat(t)),
      authenticateWithSetPasswordToken: t => e.GET("/passwordless/".concat(n.SetPassword, "/").concat(t)),
      authenticateWithPasswordlessToken: t => e.GET("/passwordless/".concat(n.PasswordlessToken, "/").concat(t))
    };
  };
}
