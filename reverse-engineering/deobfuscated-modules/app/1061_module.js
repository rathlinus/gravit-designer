/**
 * Webpack Module #1061
 * Type: unknown
 */

function (exports, module, require) {
    var o, i, a, r;
    exports.exports =
      ((r = require(55) /* module_55 */),
      require(98) /* module_98 */,
      (i = (o = r).lib.CipherParams),
      (a = o.enc.Hex),
      (o.format.Hex = {
        stringify: function (e) {
          return e.ciphertext.toString(a);
        },
        parse: function (e) {
          var t = a.parse(e);
          return i.create({ ciphertext: t });
        },
      }),
      r.format.Hex);
  }