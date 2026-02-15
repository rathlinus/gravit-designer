/**
 * Module 195
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
  var n = require(148) /* module */, r = require(161) /* GTLUtil */;
  function o() {
  }
  o.getFontString = function (e) {
    var t = e && e.fontSize || n.defaultFormatting.fontSize;
    if (e)
      switch (e.script) {
      case "super":
      case "sub":
        t *= 0.8;
      }
    return (e && "object" != typeof e.fontStyle && e.fontStyle || n.defaultFormatting.fontStyle) + " " + (e && "object" != typeof e.fontWeight && e.fontWeight || n.defaultFormatting.fontWeight) + " " + t + "px " + (e && "object" != typeof e.fontFamily && e.fontFamily || n.defaultFormatting.fontFamily);
  }, o.applyRunStyle = function (e, t) {
    e.fillStyle = t && t.fontColor || n.defaultFormatting.fontColor, e.strokeStyle = "transparent", e.font = o.getFontString(t), e.charSpacing = t.charSpacing || 0;
  }, o.prepareContext = function (e) {
    e.textAlign = "left", e.textBaseline = "alphabetic";
  }, o.getRunStyle = function (e, t) {
    var i = [
      "font: ",
      o.getFontString(e)
    ];
    if (t || i.push("; color: ", e && e.fontColor || n.defaultFormatting.fontColor), e)
      switch (e.script) {
      case "super":
        i.push("; vertical-align: super");
        break;
      case "sub":
        i.push("; vertical-align: sub");
      }
    return i.join("");
  }, o.getAdditionalProps = function (e) {
    if (e) {
      var module = { charSpacing: 0 };
      return undefined !== e.charSpacing && e.charSpacing !== n.defaultFormatting.charSpacing && (module.charSpacing = e.charSpacing), undefined !== e.transformation && e.transformation !== n.defaultFormatting.transformation && (module.transformation = e.transformation), undefined !== e.script && e.script !== n.defaultFormatting.script && (module.script = e.script, module.fontSize = e.fontSize), undefined !== e.ligatures && e.ligatures !== n.defaultFormatting.ligatures && (module.ligatures = e.ligatures), undefined !== e.langScript && e.langScript !== n.defaultFormatting.langScript && (module.langScript = e.langScript), undefined !== e.fractions && e.fractions !== n.defaultFormatting.fractions && (module.fractions = e.fractions), undefined !== e.stylisticSet && e.stylisticSet !== n.defaultFormatting.stylisticSet && (module.stylisticSet = e.stylisticSet), undefined !== e.localizedForm && e.localizedForm !== n.defaultFormatting.localizedForm && (module.localizedForm = e.localizedForm), module;
    }
    return null;
  }, o.LS = String.fromCharCode(8232), o.NBSP = String.fromCharCode(160), o.ENTER = o.NBSP, o.measureText = function (e, t, n) {
    return require(367) /* module */.textMeter(e, t, n);
  }, o.createCachedMeasureText = function () {
    var e = {};
    return function (t, i, n) {
      var r = i + "<>!&%" + t;
      n && (r += "<>!&%" + JSON.stringify(n));
      var a = e[r];
      return a || ((a = o.measureText(t, i, n)) ? e[r] = a : a = null), a;
    };
  }, o.cachedMeasureText = o.createCachedMeasureText(), o.measure = function (e, t) {
    return o.cachedMeasureText(e, o.getRunStyle(t, true), o.getAdditionalProps(t));
  }, o.drawMarker = function (e, t, i, n, r) {
    o.applyRunStyle(e, i), e.drawMarker(t, n, r);
  }, o.draw = function (e, t, i, n, a, s, l, h) {
    switch (o.prepareContext(e), o.applyRunStyle(e, i), i.script) {
    case "super":
      a -= l * (1 / 3);
      break;
    case "sub":
      a += h / 2;
    }
    i.transformation && (t = r.transformText(t, i.transformation, e.getCurrentFont())), e.wordSpacing = i.wordSpacing, e.textUnderline = true === i.underline, e.textStrikeout = true === i.strikeout, e.textLigatures = i.ligatures, e.textStylisticSet = i.stylisticSet, e.textLocalizedForm = i.localizedForm, e.langScript = i.langScript, e.textVariant = i.variant, e.textFractions = true === i.fractions, e.drawText("\n" === t || t === o.LS ? o.NBSP : t, n, a, l, s);
  }, exports.exports = o;
}
