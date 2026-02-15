/**
 * Webpack Module #57
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var core_export = require(25) /* core_export */,
    parseIntPolyfill = require(678); /* parseIntPolyfill */
  core_export(
    { global: true, forced: parseInt !== parseIntPolyfill },
    { parseInt: parseIntPolyfill }
  );
}
