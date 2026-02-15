/**
 * Webpack Module #589
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    function o() {
      let exports =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      Object.assign(this, exports);
    }
    require(30) /* polyfill_Object_assign */, (o.prototype.getUID = function () {}), (exports.exports = o);
  }