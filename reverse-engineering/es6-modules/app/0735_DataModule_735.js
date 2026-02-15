/**
 * Webpack Module #735
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var DataModule_262 = require(262) /* DataModule_262 */.start,
    DataModule_461 = require(461); /* DataModule_461 */
  exports.exports = DataModule_461('trimStart')
    ? function () {
        return DataModule_262(this);
      }
    : ''.trimStart;
}
