/**
 * chunk.vendor.js Module #1459
 * Type: unknown
 */

function (e, t, i) {
      var n = i(68),
        r = i(11),
        o = i(1460),
        a = i(321),
        s = i(51),
        l = i(1461),
        h = i(432),
        A = i(729),
        c = i(249),
        p = i(1462),
        u = i(1463),
        d = i(1464),
        g = i(282),
        f = (i(852), function () {});
      ((f.getEffectMarkup = function (e, t, i) {
        var f = new p();
        r.each(e.getEffects().getChildren(), function (t, i) {
          if (0 != i.getProperty("vs")) {
            if (i instanceof s && i instanceof g) {
              var r = new c();
              (r.setProperty("r", i.getProperty("shp").radius),
                r.setProperty("vs", i.getProperty("vs")),
                r.setProperty("ly", i.getProperty("ly")),
                (i = r));
            }
            i instanceof c
              ? o.apply(f, i, e)
              : i instanceof a
                ? l.apply(f, i, e)
                : i instanceof h
                  ? u.apply(f, i, e)
                  : i instanceof A && i.getProperty("pat") instanceof n
                    ? d.apply(f, i, e)
                    : console.warn("Unhandled filter: " + i);
          }
        });
        var m = e.getProperty("_sfop");
        if ((1 != m && f.setFillOpacity(m), 0 === f.filters.length && 1 == m))
          return "";
        var y = r.uuid();
        ((t.filter = "url(#" + y + ")"), f.setId(y), f.toXml(i));
      }),
        (e.exports = f));
    }