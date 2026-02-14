/**
 * Module 285 - GCommentAnnotation
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

function (e, t, i) {
  var n = i(2), r = i(60), o = i(84), a = i(28), s = i(0), l = i(17), h = (i(142), i(7));
  function A() {
    r.call(this), this.initializeAnnotation();
  }
  n.inheritAndMix("anc", A, r, [o]), A.prototype._insidePath = null, A.prototype.hitTest = function (e, t, i, n, r, o, a, s, l, h) {
    if ("number" != typeof r && (r = -1), o = o || 0, s && !1 === s(this))
      return null;
    var A = this.getPaintBBox();
    if (!A || A.isEmpty())
      return null;
    if (t && (A = t.mapRect(A)), !A.expanded(o, o, o, o).containsPoint(e))
      return null;
    var c = null;
    if (i && 1 == i(this) || !i) {
      var p = this._detailHitTest(e, t, o, a, l, !1);
      p && (n && c ? c.push(p) : c = [p]);
    }
    return c;
  }, A.prototype.validateInsertion = function (e, t) {
    return "annlst" === n.getName(e);
  }, A.prototype.isEmptyTextAllowed = function () {
    return !1;
  }, A.prototype.isPaintable = function (e) {
    return !(e && !e.configuration.isElementAnnotationsVisible(this)) && r.prototype.isPaintable.call(this, e);
  }, A.prototype._handleChange = function (e, t) {
    if (e === n._Change.Store) {
      var i = o.MetaProperties;
      if (this.recordedTransaction || t.options.recordedTransaction) {
        for (var a = Object.keys(o.MetaProperties), l = t.options.recordedProperties || {}, h = {}, A = 0, c = a.length; A < c; A++) {
          var p = a[A];
          h[p] = l.hasOwnProperty(p) ? l[p] : o.MetaProperties[p];
        }
        i = h;
      }
      this.storeProperties(t.blob, i, this.storeAction.bind(this, t));
      var u = t.blob;
      t.options.separateSaving && (u.own = { "@": n._nodeClassToNameMap[s.getTypeId(this)] }, t.blob = u.own);
    } else
      e === n._Change.Restore ? this.restoreProperties(t.blob, o.MetaProperties, this.restoreAction.bind(this, t)) : e === n._Change.BeforePropertiesChange ? this.handleBeforePropertiesChange(t) : e == n._Change.AfterPropertiesChange && (t.properties.indexOf("rsv") >= 0 || t.properties.indexOf("rmd") >= 0) && this._requestInvalidation();
    r.prototype._handleChange.call(this, e, t);
  }, A.prototype.initDefaultForLimitedRestore = function () {
    this.setProperty("closed", !0);
    var e = new r();
    e.setProperties([
      "closed",
      "trf"
    ], [
      !0,
      this.getProperty("trf")
    ]);
    var t = new a.FillPaintLayer(new l([
      255,
      255,
      255
    ]));
    e.getPaintLayers().appendChild(t), this.appendChild(e), this.getAnchorPoints().deserialize([
      [
        "AABQQQAAAEA=",
        "#",
        "ASWMgdolqKdvdTUvVRyceEn0rAuEUTm4",
        "H",
        "KNZYQQAAAEA="
      ],
      [
        "AABgQQAAQEA=",
        "#",
        "nd22mOgp9wxiE78dIJ4zmwTbyjsz6UxR",
        "h",
        "AABgQV6nHEA="
      ],
      [
        "AABgQQAAUEE=",
        "#",
        "hHfpCgKektXyYnbgLReBnyHgyMdCsGE5",
        "H",
        "AABgQSjWWEE="
      ],
      [
        "AABQQQAAYEE=",
        "#",
        "A8MR93B6765dwbhY72EpMNwf6Io5gJBI",
        "h",
        "KNZYQQAAYEE="
      ],
      [
        "AABAQAAAYEE=",
        "#",
        "hiopKUR35ezTlQlMF2XXGm59T3GrCPI1",
        "H",
        "XqccQAAAYEE="
      ],
      [
        "AAAAQAAAUEE=",
        "#",
        "NJlMiKCLsmxtfj36U08HEEAKzakuhou3",
        "h",
        "AAAAQCjWWEE="
      ],
      [
        "AAAAQAAAQEA=",
        "#",
        "zMQ5I4UifU7wLrItA5sB24qNqmgQDOaf",
        "H",
        "AAAAQF6nHEA="
      ],
      [
        "AABAQAAAAEA=",
        "#",
        "40qmUrBtM8PDIwJ7MXVyTvAwNMpMzd6t",
        "h",
        "XqccQAAAAEA="
      ]
    ]), e.getAnchorPoints().deserialize([
      [
        "AABAQQAAgEA=",
        "#",
        "0PjaYCOSKsZ9lCT9XOAgGmMJ8veAWfQo"
      ],
      [
        "AACAQAAAgEA=",
        "#",
        "828pSrqb24wp2nmkrC7WW6wuOBaijRCX",
        "H",
        "XqdcQAAAgEA="
      ],
      [
        "AABAQAAAoEA=",
        "#",
        "mtxjcchNF71X7vl8ipyWYVpdVpmLllb1",
        "h",
        "AABAQK9TjkA="
      ],
      [
        "AABAQAAAoEA=",
        "#",
        "YYq8Hz0AMzof2UImOgNuY1Zr7vM46gey"
      ],
      [
        "AABAQAAAIEE=",
        "#",
        "kBx58J5JvXmPgYDrUgSf3VFE0z0BcQh6",
        "H",
        "AABAQCjWKEE="
      ],
      [
        "AACAQAAAMEE=",
        "#",
        "By4pcXWyRMkEHvlhz9Z5rqU5Be8XOMpF",
        "h",
        "XqdcQAAAMEE="
      ],
      [
        "AACAQAAAMEE=",
        "#",
        "bf2r8e2nsAKfH7wxLed5xFtDlZIMhV7p"
      ],
      [
        "AACgQAAAMEE=",
        "#",
        "IxkJ1dZbYiQcHYajF0yD4PXFKYDoahXW"
      ],
      [
        "AACgQAAAUEE=",
        "#",
        "cVEjEe2LXioWCTVXNZDoEJh02KKpyRza"
      ],
      [
        "EFj1QAAAMEE=",
        "#",
        "lClGLXYj5pesu92S34xzXcOzTgtCoPKn"
      ],
      [
        "AABAQQAAMEE=",
        "#",
        "Slj3Uny3DDcXky9U49B05AwhSUwsqzzy",
        "H",
        "KNZIQQAAMEE="
      ],
      [
        "AABQQQAAIEE=",
        "#",
        "vp0ND6im3Uw7VySEZQacXujU82DYJAS5",
        "h",
        "AABQQSjWKEE="
      ],
      [
        "AABQQQAAIEE=",
        "#",
        "XHM0QcKkXpyGPMNBv4sTsdCtaILW36OK"
      ],
      [
        "AABQQQAAoEA=",
        "#",
        "5bqYgYn18WofYH5UDYfIgvxcjOGsQZMs",
        "H",
        "AABQQa9TjkA="
      ],
      [
        "AABAQQAAgEA=",
        "#",
        "DT8Kkp2I0v6oJ4qbzDL7fseUs251GXtg",
        "h",
        "KNZIQQAAgEA="
      ]
    ]);
  }, A.prototype.initSizeAndPosition = function () {
    var e = new h(2.6666666666666665, 0, 0, 2.6666666666666665, -5.333333333333333, -5.333333333333333), t = this.getProperty("trf");
    t && t.invertible() ? this.transform(t.invert().multiplied(e)) : t || this.transform(e);
  }, A.prototype.toString = function () {
    return "[GCommentAnnotation]";
  }, e.exports = A;
}
