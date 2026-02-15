/**
 * Webpack Module #307
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var toString_default = require(37); /* toString_default */
  exports.exports = function () {
    var e = toString_default(this),
      t = '';
    return (
      e.hasIndices && (t += 'd'),
      e.global && (t += 'g'),
      e.ignoreCase && (t += 'i'),
      e.multiline && (t += 'm'),
      e.dotAll && (t += 's'),
      e.unicode && (t += 'u'),
      e.unicodeSets && (t += 'v'),
      e.sticky && (t += 'y'),
      t
    );
  };
}
