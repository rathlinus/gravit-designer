/**
 * Webpack Module #124
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var DataModule_223 = require(223) /* DataModule_223 */,
    DataModule_65 = require(65) /* DataModule_65 */,
    DataModule_239 = require(239) /* DataModule_239 */,
    r = DataModule_223(DataModule_223.bind);
  exports.exports = function (e, t) {
    return (
      DataModule_65(e),
      undefined === t
        ? e
        : DataModule_239
          ? r(e, t)
          : function () {
              return e.apply(t, arguments);
            }
    );
  };
}
