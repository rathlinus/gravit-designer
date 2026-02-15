/**
 * Webpack Module #1482
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(8) /* polyfill_bundle_ES6 */;
  const FileSaverJS = require(1117) /* FileSaverJS */.saveAs;
  class i {
    async download() {
    let {
      buffer: exports,
      name: module,
      extension: require,
      mime: i,
    } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    FileSaverJS(new Blob([exports], i), ''.concat(module, '.').concat(require));
  }

  }
  exports.exports = i;
}