/**
 * Webpack Module #1482
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */;
    const o = require(1117) /* module_1117 */.saveAs;
    function i() {}
    (i.prototype.download = async function () {
      let {
        buffer: exports,
        name: module,
        extension: require,
        mime: i,
      } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      o(new Blob([exports], i), "".concat(module, ".").concat(require));
    }),
      (exports.exports = i);
  }