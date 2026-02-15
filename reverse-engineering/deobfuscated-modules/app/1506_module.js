/**
 * Webpack Module #1506
 * Type: unknown
 */

function (exports, module, require) {
    var o = n(1251) /* module_1251 */.default;
    (e.exports = function (e, t) {
      if ("object" != o(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (undefined !== n) {
        var i = n.call(e, t || "default");
        if ("object" != o(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    }),
      (e.exports.__esModule = true),
      (e.exports.default = e.exports);
  }