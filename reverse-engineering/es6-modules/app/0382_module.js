/**
 * Webpack Module #382
 * Type: unknown
 */

function (exports, module, require) {
  var o, i, a, r, s, CryptoJSCore;
  exports.exports =
    ((CryptoJSCore = require(55)) /* CryptoJSCore */,
    (i = (o = CryptoJSCore).lib),
    (a = i.Base),
    (r = i.WordArray),
    ((s = o.x64 = {}).Word = a.extend({
      init: function (e, t) {
        ((this.high = e), (this.low = t));
      },
    })),
    (s.WordArray = a.extend({
      init: function (e, t) {
        ((e = this.words = e || []), (this.sigBytes = null != t ? t : 8 * e.length));
      },
      toX32: function () {
        for (
          var exports = this.words, module = exports.length, require = [], o = 0;
          o < module;
          o++
        ) {
          var i = exports[o];
          (require.push(i.high), require.push(i.low));
        }
        return r.create(require, this.sigBytes);
      },
      clone: function () {
        for (
          var exports = a.clone.call(this),
            module = (exports.words = this.words.slice(0)),
            require = module.length,
            o = 0;
          o < require;
          o++
        )
          module[o] = module[o].clone();
        return exports;
      },
    })),
    CryptoJSCore);
}
