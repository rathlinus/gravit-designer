/**
 * Webpack Module #20
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(306) /* regexpExec */;
    o({ target: "RegExp", proto: true, forced: /./.exec !== i }, { exec: i });
  }