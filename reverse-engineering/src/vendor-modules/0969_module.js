/**
 * chunk.vendor.js Module #969
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      const n = i(580);
      e.exports = (e) => {
        e.passwordlessAuthentication = {
          authenticateWithResetPasswordToken: (t) =>
            e.GET("/passwordless/".concat(n.ResetPassword, "/").concat(t)),
          authenticateWithSetPasswordToken: (t) =>
            e.GET("/passwordless/".concat(n.SetPassword, "/").concat(t)),
          authenticateWithPasswordlessToken: (t) =>
            e.GET("/passwordless/".concat(n.PasswordlessToken, "/").concat(t)),
        };
      };
    }