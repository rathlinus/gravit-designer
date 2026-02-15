/**
 * Webpack Module #231
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    const o = {
      IS_LOCALHOST: "localhost" === window.location.hostname,
      IS_RC: false,
      IS_BETA: false,
      IS_TRUNK: false,
      IS_PRODUCTION: true,
      IS_LTS: false,
      IS_WEB_WORKER:
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope,
    };
    e.exports = o;
  }