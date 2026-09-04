/**
 * chunk.vendor.js Module #108
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(47);

      function o() {}
      (n.inherit(o, n),
        (o.prototype._failed = !1),
        (o.Features = {
          SmallCaps: "smcp",
          Fractions: "frac",
          Variants: "fvar",
          StylisticSet: "stylisticset",
          LocalizedForm: "locl",
        }),
        (o.SmallCapsUnicodeMap = {
          a: "ᴀ",
          b: "ʙ",
          c: "ᴄ",
          d: "ᴅ",
          e: "ᴇ",
          f: "ғ",
          g: "ɢ",
          h: "ʜ",
          i: "ɪ",
          j: "ᴊ",
          k: "ᴋ",
          l: "ʟ",
          m: "ᴍ",
          n: "ɴ",
          o: "ᴏ",
          p: "ᴘ",
          q: "ǫ",
          r: "ʀ",
          s: "s",
          t: "ᴛ",
          u: "ᴜ",
          v: "ᴠ",
          w: "ᴡ",
          x: "x",
          y: "ʏ",
          z: "ᴢ",
        }),
        (o.Style = {
          Normal: "N",
          Italic: "I",
        }),
        (o.Weight = {
          Thin: 100,
          ExtraLight: 200,
          Light: 300,
          Regular: 400,
          Medium: 500,
          SemiBold: 600,
          Bold: 700,
          ExtraBold: 800,
          Heavy: 900,
        }),
        (o.WeightName = {
          100: new r("GFont", "weight.thin"),
          200: new r("GFont", "weight.extra-light"),
          300: new r("GFont", "weight.light"),
          400: new r("GFont", "weight.regular"),
          500: new r("GFont", "weight.medium"),
          600: new r("GFont", "weight.semi-bold"),
          700: new r("GFont", "weight.bold"),
          800: new r("GFont", "weight.extra-bold"),
          900: new r("GFont", "weight.heavy"),
        }),
        (o.WeightNameItalic = {
          100: new r("GFont", "weight.thin-italic"),
          200: new r("GFont", "weight.extra-light-italic"),
          300: new r("GFont", "weight.light-italic"),
          400: new r("GFont", "weight.regular-italic"),
          500: new r("GFont", "weight.medium-italic"),
          600: new r("GFont", "weight.semi-bold-italic"),
          700: new r("GFont", "weight.bold-italic"),
          800: new r("GFont", "weight.extra-bold-italic"),
          900: new r("GFont", "weight.heavy-italic"),
        }),
        (o.equals = function (e, t) {
          return e && t
            ? e.getFamily() === t.getFamily() &&
                e.getStyle() === t.getStyle() &&
                e.getWeight() === t.getWeight()
            : !!e == !!t;
        }),
        (o.getFontFamilyCorrected = function (e) {
          return "Noto Sans CS" === e
            ? "Noto Sans CJK SC"
            : "Noto Sans CT" === e
              ? "Noto Sans CJK TC"
              : e;
        }),
        (o.prototype.isResolved = function () {
          throw new Error("Unsupported operation.");
        }),
        (o.prototype.isEmbedded = function () {
          return !1;
        }),
        (o.prototype.setFailed = function (e) {
          this._failed = e;
        }),
        (o.prototype.isFailed = function () {
          return this._failed;
        }),
        (o.prototype.toFontFaceSrc = function () {
          return null;
        }),
        (o.prototype.toCssProperties = function () {
          var e = function () {
            switch (this.getStyle()) {
              case o.Style.Normal:
                return "normal";
              case o.Style.Italic:
                return "italic";
              default:
                throw new Error("Unknown style");
            }
          }.bind(this);
          return {
            "font-family": this.getFamily(),
            "font-style": e(),
            "font-weight": this.getWeight()
              ? this.getWeight().toString()
              : null,
          };
        }),
        (o.prototype.getFamily = function () {
          throw new Error("Unsupported operation.");
        }),
        (o.prototype.getStyle = function () {
          throw new Error("Unsupported operation.");
        }),
        (o.prototype.getWeight = function () {
          throw new Error("Unsupported operation.");
        }),
        (o.prototype.getGlyphBaseline = function (e) {
          throw new Error("Unsupported operation.");
        }),
        (o.prototype.stringToGlyphs = function (e, t, i, n, r) {
          throw new Error("Unsupported operation.");
        }),
        (o.prototype.getGlyphBoundingRect = function (e, t) {
          throw new Error("Unsupported operation.");
        }),
        (o.prototype.getGlyphOutline = function (e, t, i, n) {
          throw new Error("Unsupported operation.");
        }),
        (o.prototype.getLeftSideBearing = function (e, t) {
          throw new Error("Unsupported operation.");
        }),
        (o.prototype.getMaxFontHeight = function (e) {
          throw new Error("Unsupported operation.");
        }),
        (o.prototype.getAdvance = function (e, t, i) {
          throw new Error("Unsupported operation.");
        }),
        (o.prototype.hasFeature = function (e) {
          return !1;
        }),
        (o.prototype.getAvailableStylisticSets = function (e) {
          return [];
        }),
        (o.prototype.getAvailableLanguageSystemTags = function (e) {
          return [];
        }),
        (e.exports = o));
    }