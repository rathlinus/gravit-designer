/**
 * Webpack Module #57
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(678) /* parseIntPolyfill */;
    o({ global: true, forced: parseInt !== i }, { parseInt: i });
  }