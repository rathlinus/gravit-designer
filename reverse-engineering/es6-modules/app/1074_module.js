/**
 * Webpack Module #1074
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  const o = new Proxy({}, { get: (e, t) => (undefined !== e[t] ? e[t] : t) });
  exports.exports = o;
}
