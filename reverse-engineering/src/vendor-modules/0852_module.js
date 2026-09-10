/**
 * chunk.vendor.js Module #852
 * Type: unknown
 */

function (e, t, i) {
      var n = i(11),
        r = i(95),
        o = i(289),
        a = i(6),
        s = i(83);

      function l() {}
      ((l.hasEffects = function (e) {
        var t = e._paintContext,
          i = !1,
          n = e.getStyleLayers();
        if (t.configuration.isOutline(t));
        else if (e.$_stop > 0) {
          var r = e._effects ? e._effects.getLayersEffects(n, !0) : null;
          if (r)
            for (var o = 0; o < r.length; ++o)
              if (r[o]) for (var a = 0; a < r[o].length; ++a) i = !0;
        }
        return i;
      }),
        (l.containsImages = function (e) {
          if (e instanceof r) return !0;
          for (var t = 0; t < e.getChildren().length; t++) {
            if (1 == l.containsImages(e.getChildren()[t])) return !0;
          }
          return !1;
        }),
        (l.formatHTMLTags = function (e) {
          return n
            .map(e, function (e, t) {
              return t + '="' + e + '"';
            })
            .join(" ");
        }),
        (l.addAttributes = function (e, t) {
          n.map(t, function (t, i) {
            e.setAttribute(i, t);
          });
        }),
        (l.formatCSSTags = function (e) {
          return n
            .map(e, function (e, t) {
              return t + ":" + e + ";";
            })
            .join("");
        }),
        (l.formatRGBA = function (e, t) {
          var i = this.extractRGBA(e, t);
          return i && (i = i.slice(0, 4)) ? "rgba(" + i.join(",") + ")" : "";
        }),
        (l.extractRGBA = function (e, t) {
          t = "_" + t;
          var i = e.getProperty(t + "pt");
          if (null === i) return [0, 0, 0, 0];
          var n = i.toScreen().slice(0, 3);
          return (n.push(e.getProperty(t + "op")), n);
        }),
        (l.formatRGB = function (e, t) {
          var i = this.extractRGB(e, t);
          return i && (i = i.slice(0, 3)) ? "rgb(" + i.join(",") + ")" : "";
        }),
        (l.extractRGB = function (e, t) {
          t = "_" + t;
          var i = e.getProperty(t + "pt");
          return null === i ? [0, 0, 0] : i.toScreen().slice(0, 3);
        }),
        (l.propertiesFromGeometry = function (e) {
          var t = e.getGeometryBBox();
          return t
            ? {
                x: t.getX(),
                y: t.getY(),
                width: t.getWidth(),
                height: t.getHeight(),
              }
            : (console.warn("No GeometryBBox for " + e.toString()),
              {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
              });
        }),
        (l.xmlToString = function (e) {
          var t = new XMLSerializer()
            .serializeToString(e)
            .replace(/&amp;/g, "&#x26;");
          return (t = (t = t.replace(/&gt;/g, "&#x3E;")).replace(
            /&lt;/g,
            "&#x3C;",
          ));
        }),
        (l.getBoundingBox = function (e, t) {
          var i = e.getPaintBBox(null, null, t);
          if (!i) return null;
          if (e instanceof o) {
            var n = e.toBitmap();
            if (!n) return null;
            i = new a(
              n.getOffset().getX() + i.getX(),
              n.getOffset().getY() + i.getY(),
              n.getWidth(),
              n.getHeight(),
            );
          } else e instanceof s && (i = e.getClipBBox() || i);
          return i;
        }),
        (e.exports = l));
    }