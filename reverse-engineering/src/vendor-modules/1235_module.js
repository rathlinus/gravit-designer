/**
 * chunk.vendor.js Module #1235
 * Type: unknown
 */

function (e, t, i) {
      var n = i(139),
        r = i(283),
        o = i(346),
        a = i(265),
        s = i(321),
        l = i(432),
        h = i(28);

      function A() {}
      ((A.isCompatible = function (e, t) {
        return (
          !A.hasCustomBlendMode(e) &&
          !A.hasUnsupportedPattern(e) &&
          (!t || !A.hasUnsupportedEffect(e))
        );
      }),
        (A.hasUnsupportedEffect = function (e) {
          if (e.hasMixin(h) && e.getEffects())
            for (
              var t = e.getEffects().getLayersEffects(e.getStyleLayers(), !0),
                i = 0;
              i < t.length;
              i++
            ) {
              var n = t[i];
              if (n)
                return !n.every(function (e) {
                  return [s, l].some(function (t) {
                    return e instanceof t;
                  });
                });
            }
          return !1;
        }),
        (A.hasUnsupportedPattern = function (e) {
          if (e.hasMixin(h)) {
            var t = e.getPaintLayers();
            if (t)
              return t.getLayers(null, !0).some(function (e) {
                return A.isUnsupportedPattern(e.$_pt);
              });
          }
          return !1;
        }),
        (A.hasCustomBlendMode = function (e) {
          if (A.isCustomBlendMode(e.$_sbl)) return !0;
          if (e.hasMixin(h)) {
            var t = e.getPaintLayers();
            if (t)
              return t.getLayers(null, !0).some(function (e) {
                return A.isCustomBlendMode(e.$_bl);
              });
          }
          return !1;
        }),
        (A.isCustomBlendMode = function (e) {
          return !!e && -1 !== o.BlendModes.indexOf(e);
        }),
        (A.isUnsupportedPattern = function (e) {
          return !!e && (e instanceof n || e instanceof r || e instanceof a);
        }),
        (A.isAffectedByBackground = function (e) {
          return !!A.hasCustomBlendMode(e) || !!A.hasBackgroundFill(e);
        }),
        (A.hasBackgroundFill = function (e) {
          if (e.hasMixin(h)) {
            var t = e.getPaintLayers();
            if (t)
              return !!t.getLayers(null, !0).some(function (e) {
                return e.$_pt instanceof a;
              });
          }
          return !1;
        }),
        (e.exports = A));
    }