/**
 * chunk.vendor.js Module #894
 * Type: unknown
 */

function (e, t, i) {
      var n = i(640);
      e.exports = function (e) {
        ((e.deserializeAsync = function (t, i, r, o, a) {
          var s = null,
            l = new n(0, 15, function () {
              a(s);
            });
          e._deserialize(
            t,
            i,
            r,
            o,
            function (t, i, n, r, o, a) {
              if (t)
                if (Array.isArray(t)) {
                  var s = [];
                  l.execute(
                    t,
                    function (t) {
                      e._restoreAsync(l, t, i, n, r, o, function (e) {
                        e && s.push(e);
                      });
                    },
                    function () {
                      a(s);
                    },
                  );
                } else e._restoreAsync(l, t, i, n, r, o, a);
            },
            function (e) {
              s = e;
            },
          );
        }),
          (e._restoreAsync = function (t, i, n, r, o, a, s) {
            e._restore(
              i,
              n,
              r,
              o,
              a,
              function (i, n, r, o, a, s) {
                e._restoreInstance(
                  i,
                  n,
                  r,
                  o,
                  a,
                  function (i, n, r, o, a, s, l) {
                    t.execute(
                      n,
                      function (n) {
                        e._restoreAsync(t, n, r, o, a, s, function (e) {
                          i.appendChild(e);
                        });
                      },
                      l,
                    );
                  },
                  s,
                );
              },
              s,
            );
          }));
      };
    }