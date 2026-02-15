/**
 * Webpack Module #617
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
    DataModule_400 = require(400) /* DataModule_400 */,
    createPropertyDescriptor = require(88) /* createPropertyDescriptor */,
    toString_default = require(37) /* toString_default */,
    toIndexedObject = require(184) /* toIndexedObject */,
    l = require(405); /* module_405 */
  module.f =
    hasOwnProperty_wrapper && !DataModule_400
      ? Object.defineProperties
      : function (e, t) {
          toString_default(e);
          for (
            var require,
              hasOwnProperty_wrapper = toIndexedObject(t),
              DataModule_400 = l(t),
              c = DataModule_400.length,
              d = 0;
            c > d;
          )
            createPropertyDescriptor.f(
              e,
              (require = DataModule_400[d++]),
              hasOwnProperty_wrapper[require]
            );
          return e;
        };
}
