/**
 * Webpack Module #30
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(415) /* objectAssignPolyfill */;
    o(
      { target: "Object", stat: true, arity: 2, forced: Object.assign !== i },
      { assign: i }
    );
  }