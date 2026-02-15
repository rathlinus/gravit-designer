/**
 * Webpack Module #288
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var anObject = require(35) /* anObject */,
    toLength = require(46) /* toLength */,
    DataModule_175 = require(175); /* DataModule_175 */
  exports.exports = function (e, t, n) {
    var r, s;
    return (
      DataModule_175 &&
        anObject((r = t.constructor)) &&
        r !== n &&
        toLength((s = r.prototype)) &&
        s !== n.prototype &&
        DataModule_175(e, s),
      e
    );
  };
}
