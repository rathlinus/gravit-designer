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

function (e, t, i) {
  var n = i(148), r = i(161);
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
      var t = { charSpacing: 0 };
      return void 0 !== e.charSpacing && e.charSpacing !== n.defaultFormatting.charSpacing && (t.charSpacing = e.charSpacing), void 0 !== e.transformation && e.transformation !== n.defaultFormatting.transformation && (t.transformation = e.transformation), void 0 !== e.script && e.script !== n.defaultFormatting.script && (t.script = e.script, t.fontSize = e.fontSize), void 0 !== e.ligatures && e.ligatures !== n.defaultFormatting.ligatures && (t.ligatures = e.ligatures), void 0 !== e.langScript && e.langScript !== n.defaultFormatting.langScript && (t.langScript = e.langScript), void 0 !== e.fractions && e.fractions !== n.defaultFormatting.fractions && (t.fractions = e.fractions), void 0 !== e.stylisticSet && e.stylisticSet !== n.defaultFormatting.stylisticSet && (t.stylisticSet = e.stylisticSet), void 0 !== e.localizedForm && e.localizedForm !== n.defaultFormatting.localizedForm && (t.localizedForm = e.localizedForm), t;
    }
    return null;
  }, o.LS = String.fromCharCode(8232), o.NBSP = String.fromCharCode(160), o.ENTER = o.NBSP, o.measureText = function (e, t, n) {
    return i(367).textMeter(e, t, n);
  }, o.createCachedMeasureText = function () {
    var e = {};
    return function (t, i, n) {
      var r = i + "<>!&%" + t;
      n && (r += "<>!&%" + JSON.stringify(n));
      var a = e[r];
      return a || ((a = o.measureText(t, i, n)) ? e[r] = a : a = null), a;
    };
  }, o.cachedMeasureText = o.createCachedMeasureText(), o.measure = function (e, t) {
    return o.cachedMeasureText(e, o.getRunStyle(t, !0), o.getAdditionalProps(t));
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
    i.transformation && (t = r.transformText(t, i.transformation, e.getCurrentFont())), e.wordSpacing = i.wordSpacing, e.textUnderline = !0 === i.underline, e.textStrikeout = !0 === i.strikeout, e.textLigatures = i.ligatures, e.textStylisticSet = i.stylisticSet, e.textLocalizedForm = i.localizedForm, e.langScript = i.langScript, e.textVariant = i.variant, e.textFractions = !0 === i.fractions, e.drawText("\n" === t || t === o.LS ? o.NBSP : t, n, a, l, s);
  }, e.exports = o;
}
