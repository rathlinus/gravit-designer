/**
 * Webpack Module #20
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      regexpExec = require(306) /* regexpExec */;
    core_export({ target: "RegExp", proto: true, forced: /./.exec !== regexpExec }, { exec: regexpExec });
  }