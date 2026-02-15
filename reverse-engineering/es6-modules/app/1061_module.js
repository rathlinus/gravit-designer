/**
 * Webpack Module #1061
 * Type: unknown
 */

function (exports, module, require) {
  var o, i, a, CryptoJSCore;
  exports.exports =
    ((CryptoJSCore = require(55)) /* CryptoJSCore */,
    require(98) /* CryptoJSCipherBase */,
    (i = (o = CryptoJSCore).lib.CipherParams),
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
    CryptoJSCore.format.Hex);
}
