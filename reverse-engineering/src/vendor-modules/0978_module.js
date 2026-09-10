/**
 * chunk.vendor.js Module #978
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      (i(20), i(107));
      e.exports = class {
        static isAvailable() {
          return (
            void 0 !== window.grecaptcha &&
            /^(prod|trunk)/.test(window.env || "") &&
            "localhost" !== location.hostname
          );
        }
      };
    }