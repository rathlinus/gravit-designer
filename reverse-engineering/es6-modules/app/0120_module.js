/**
 * Webpack Module #120
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var DataModule_401 = require(401) /* DataModule_401 */,
    createPropertyDescriptor = require(88); /* createPropertyDescriptor */
  exports.exports = function (e, t, n) {
    return (
      n.get && DataModule_401(n.get, t, { getter: true }),
      n.set && DataModule_401(n.set, t, { setter: true }),
      createPropertyDescriptor.f(e, t, n)
    );
  };
}
