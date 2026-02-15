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

function (exports, module, require) {
  var n = require(108) /* GFont */, r = require(11) /* GUtil */, o = require(7) /* GTransform */;
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
      for (var module, require = a.Font.Weight, r = 0; r < require.length; r++) {
        var o = require[r];
        if (-1 !== e.indexOf(o.toLowerCase())) {
          module = n.Weight[o];
          break;
        }
      }
      return module || (module = -1 !== e.indexOf("bolder") ? n.Weight.ExtraBold : -1 !== e.indexOf("bold") ? n.Weight.Bold : n.Weight.Regular), module;
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
        return !(!n || -1 === n.indexOf(i)) || r.equals(e[i], t[i], true);
      });
    }
  }, a.prototype.createTexts = function (e) {
  }, a.prototype.mergeTexts = function (e, t) {
  }, exports.exports = a;
}
