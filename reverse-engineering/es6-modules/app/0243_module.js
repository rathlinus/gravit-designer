/**
 * Webpack Module #243
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o = require(402) /* module_402 */,
    i = require(301) /* module_301 */
      .concat('length', 'prototype');
  module.f =
    Object.getOwnPropertyNames ||
    function (e) {
      return o(e, i);
    };
}
