/**
 * chunk.vendor.js Module #1121
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(9),
        o = i(47),
        a = i(1122);

      function s() {}
      (n.inherit(s, n),
        (s.import = function (e, t, i) {
          if (e instanceof ArrayBuffer || e instanceof Uint8Array) {
            var n = e instanceof ArrayBuffer ? new Uint8Array(e) : e;
            return s.import(
              new Blob([n], {
                type: "application/zip",
              }),
              t,
              i,
            );
          }
          if (!e || (!e) instanceof Blob) return i("Invalid sketch file.");
          var l = function (e) {
              ("File format is not recognized." === e &&
                (e = r.get(new o("GSketchImport", "text.unsupported-version"))),
                "Sketch file v50+ is not supproted yet." === e &&
                  (e = {
                    v50error: !0,
                  }),
                i(e));
            }.bind(this),
            h = new a(e);
          h.load(t)
            .then(function () {
              h.parse().then(i).catch(l);
            })
            .catch(l);
        }),
        (e.exports = s));
    }