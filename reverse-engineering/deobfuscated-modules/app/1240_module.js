/**
 * Webpack Module #1240
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* module_30 */;
    const { FILE_FORMATS: o } = require(10) /* module_10 */;
    class i {
      constructor() {
        (this.onlyListFilesOwnedByUser = false), (this.supportedFileFormats = o);
      }
      static from() {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        return Object.assign(new i(), exports);
      }
    }
    (i.prototype.onlyListFilesOwnedByUser = null),
      (i.prototype.supportedFileFormats = null),
      (i.prototype.supportedFileFilters = null),
      (exports.exports = i);
  }