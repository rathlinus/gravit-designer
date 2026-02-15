/**
 * Webpack Module #30
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var core_export = require(25) /* core_export */,
    objectAssignPolyfill = require(415); /* objectAssignPolyfill */
  core_export(
    { target: 'Object', stat: true, arity: 2, forced: Object.assign !== objectAssignPolyfill },
    { assign: objectAssignPolyfill }
  );
}
