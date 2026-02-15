/**
 * Webpack Module #1520
 * Type: unknown
 */

function (exports, module, require) {
  var o, i, a;
  ((i = [require(171) /* module_171 */, require(605) /* module_605 */]),
    undefined ===
      (a =
        'function' ==
        typeof (o = function (e) {
          return e.extend(e.expr[':'], {
            data: e.expr.createPseudo
              ? e.expr.createPseudo(function (t) {
                  return function (n) {
                    return !!e.data(n, t);
                  };
                })
              : function (t, n, o) {
                  return !!e.data(t, o[3]);
                },
          });
        })
          ? o.apply(module, i)
          : o) || (exports.exports = a));
}
