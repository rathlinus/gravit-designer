/**
 * Webpack Module #1259
 * Type: unknown
 */

function (exports, module, require) {
    var o, i, a;
    (i = [require(171) /* module_171 */, require(605) /* module_605 */]),
      undefined ===
        (a =
          "function" ==
          typeof (o = function (e) {
            return (e.fn.scrollParent = function (t) {
              var n = this.css("position"),
                o = "absolute" === n,
                i = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents()
                  .filter(function () {
                    var t = e(this);
                    return (
                      (!o || "static" !== t.css("position")) &&
                      i.test(
                        t.css("overflow") +
                          t.css("overflow-y") +
                          t.css("overflow-x")
                      )
                    );
                  })
                  .eq(0);
              return "fixed" !== n && a.length
                ? a
                : e(this[0].ownerDocument || document);
            });
          })
            ? o.apply(module, i)
            : o) || (exports.exports = a);
  }