/**
 * Webpack Module #630
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(202) /* module_202 */;
    o(
      { target: "Promise", stat: true, forced: require(201) /* module_201 */.CONSTRUCTOR },
      {
        reject: function (e) {
          var t = i.f(this);
          return (0, t.reject)(e), t.promise;
        },
      }
    );
  }