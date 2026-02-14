/**
 * Module 1204
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
  var n = i(108), r = i(11), o = i(7);
  function a() {
  }
  a.Transform = {
    sameTransformation: function (e, t) {
      var i = e.decomposed(), n = t.decomposed();
      return o.equals(i.skew, n.skew) && o.equals(i.rotate, n.rotate) && o.equals(i.scale, n.scale);
    }
  }, a.Font = {
    Weight: [
      "ExtraLight",
      "ExtraBold",
      "SemiBold",
      "Thin",
      "Light",
      "Regular",
      "Medium",
      "Bold",
      "Heavy"
    ],
    getWeight: function (e) {
      e = e.toLowerCase();
      for (var t, i = a.Font.Weight, r = 0; r < i.length; r++) {
        var o = i[r];
        if (-1 !== e.indexOf(o.toLowerCase())) {
          t = n.Weight[o];
          break;
        }
      }
      return t || (t = -1 !== e.indexOf("bolder") ? n.Weight.ExtraBold : -1 !== e.indexOf("bold") ? n.Weight.Bold : n.Weight.Regular), t;
    },
    getStyle: function (e) {
      return -1 !== (e = e.toLowerCase()).indexOf("italic") ? n.Style.Italic : n.Style.Normal;
    }
  }, a.Word = {
    sameFormatting: function (e, t, i, n) {
      return [
        "fontWeight",
        "fontStyle",
        "fontColor",
        "fontFamily",
        "fontSize"
      ].concat(i || []).every(function (i) {
        return !(!n || -1 === n.indexOf(i)) || r.equals(e[i], t[i], !0);
      });
    }
  }, a.prototype.createTexts = function (e) {
  }, a.prototype.mergeTexts = function (e, t) {
  }, e.exports = a;
}
