/**
 * Webpack Module #617
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      i = require(400) /* module_400 */,
      createPropertyDescriptor = require(88) /* createPropertyDescriptor */,
      toString_default = require(37) /* toString_default */,
      toIndexedObject = require(184) /* toIndexedObject */,
      l = require(405) /* module_405 */;
    module.f =
      hasOwnProperty_wrapper && !i
        ? Object.defineProperties
        : function (e, t) {
            toString_default(e);
            for (var require, hasOwnProperty_wrapper = toIndexedObject(t), i = l(t), c = i.length, d = 0; c > d; )
              createPropertyDescriptor.f(e, (require = i[d++]), hasOwnProperty_wrapper[require]);
            return e;
          };
  }