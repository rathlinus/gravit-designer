/**
 * Webpack Module #677
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var core_export = require(25) /* core_export */,
    uncurryThis = require(27) /* uncurryThis */,
    a = require(244) /* module_244 */,
    r = RangeError,
    s = String.fromCharCode,
    l = String.fromCodePoint,
    c = uncurryThis([].join);
  core_export(
    { target: 'String', stat: true, arity: 1, forced: !!l && 1 !== l.length },
    {
      fromCodePoint: function (e) {
        for (
          var module, require = [], core_export = arguments.length, uncurryThis = 0;
          core_export > uncurryThis;
        ) {
          if (((module = +arguments[uncurryThis++]), a(module, 1114111) !== module))
            throw new r(module + ' is not a valid code point');
          require[uncurryThis] =
            module < 65536
              ? s(module)
              : s(55296 + ((module -= 65536) >> 10), (module % 1024) + 56320);
        }
        return c(require, '');
      },
    }
  );
}
