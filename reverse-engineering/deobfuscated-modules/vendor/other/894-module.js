/**
 * Module 894
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  var n = require(640) /* module */;
  exports.exports = function (e) {
    e.deserializeAsync = function (t, i, r, o, a) {
      var s = null, l = new n(0, 15, function () {
          a(s);
        });
      e._deserialize(t, i, r, o, function (t, i, n, r, o, a) {
        if (t)
          if (Array.isArray(t)) {
            var s = [];
            l.execute(t, function (t) {
              e._restoreAsync(l, t, i, n, r, o, function (e) {
                e && s.push(e);
              });
            }, function () {
              a(s);
            });
          } else
            e._restoreAsync(l, t, i, n, r, o, a);
      }, function (e) {
        s = e;
      });
    }, e._restoreAsync = function (t, i, n, r, o, a, s) {
      e._restore(i, n, r, o, a, function (i, n, r, o, a, s) {
        e._restoreInstance(i, n, r, o, a, function (i, n, r, o, a, s, l) {
          t.execute(n, function (n) {
            e._restoreAsync(t, n, r, o, a, s, function (e) {
              i.appendChild(e);
            });
          }, l);
        }, s);
      }, s);
    };
  };
}
