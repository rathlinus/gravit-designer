/**
 * Webpack Module #1506
 * Type: unknown
 */

function (exports, module, require) {
    var o = require(1251) /* module_1251 */.default;
    (exports.exports = function (e, t) {
      if ("object" != o(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (undefined !== n) {
        var i = n.call(e, t || "default");
        if ("object" != o(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    }),
      (exports.exports.__esModule = true),
      (exports.exports.default = exports.exports);
  }