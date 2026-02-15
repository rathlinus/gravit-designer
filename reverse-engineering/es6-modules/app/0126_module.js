/**
 * Webpack Module #126
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var core_export = require(25) /* core_export */,
    isCallable = require(29); /* isCallable */
  core_export(
    { target: 'URL', proto: true, enumerable: true },
    {
      toJSON: function () {
        return isCallable(URL.prototype.toString, this);
      },
    }
  );
}
