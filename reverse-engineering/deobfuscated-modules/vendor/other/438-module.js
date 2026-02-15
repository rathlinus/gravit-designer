/**
 * Module 438
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
  var n = require(11) /* GUtil */, r = require(17) /* GRGBColor */, o = function () {
    };
  o.PIXEL_RATE_STDDEVIATION = 2.3290429691304455, o.createIdUrl = function (e) {
    return "url(#" + e + ")";
  }, o.isPolygonNative = function (e) {
    return !!e.isPlainEdges() && 0 == e.getProperty("icr") && 0 == e.getProperty("ocr");
  }, o.removeDefs = function (e) {
    for (var module = 0; module < e.childNodes.length; module++) {
      var require = e.childNodes[module];
      o.removeDefs(require);
    }
    "mask" === e.tagName && e.parentElement.removeChild(e);
  }, o.replaceFillAndStroke = function (e, t, i) {
    if (e.getAttribute) {
      var r = e.getAttribute("style");
      r && (r = (r = r.replace(/fill:[^;]+;/, "fill:" + t + ";")).replace(/stroke:[^;]+;/, "stroke:" + i + ";"), e.setAttribute("style", r)), n.each(e.childNodes, function (e, n) {
        o.replaceFillAndStroke(n, t, i);
      });
    }
  }, o.replaceFill = function (e, t) {
    var i = e.getAttribute("style");
    i && (i = i.replace(/fill:[^;]+;/, "fill:" + t + ";"), e.setAttribute("style", i)), e.getAttribute("fill") && e.setAttribute("fill", t);
  }, o.pixelToStdDeviation = function (e) {
    if (isNaN(e))
      throw "Invalid format for pixel!";
    return e / o.PIXEL_RATE_STDDEVIATION;
  }, o.stdDeviationToPixel = function (e) {
    if (isNaN(e))
      throw "Invalid format for stdDeviation!";
    return e * o.PIXEL_RATE_STDDEVIATION;
  }, o.isElementShape = function (e) {
    return e && e.nodeName && [
      "circle",
      "ellipse",
      "line",
      "mesh",
      "path",
      "polygon",
      "polyline",
      "rect"
    ].includes(e.nodeName);
  }, o.getDefaultFillForElement = function (e) {
    var t = [
      "altGlyph",
      "circle",
      "ellipse",
      "path",
      "polygon",
      "polyline",
      "rect",
      "text",
      "textPath",
      "tref",
      "tspan"
    ];
    return "string" == typeof e ? t.includes(e) && r.BLACK : e && e.nodeName && t.includes(e.nodeName) && r.BLACK;
  }, o.filterClipPathElements = function (e) {
    var t = [];
    return (o.isElementShape(e) || "text" === e.nodeName) && t.push(e), e.children && e.children.length > 0 && n.each(e.children, function (e, i) {
      t = t.concat(o.filterClipPathElements(i));
    }), t;
  }, o.setAttributeId = function (e, t, i) {
    i.layerNamesAsId ? e.setAttribute("id", t.getProperty("name") || t.getNodeNameTranslated()) : e._keepIt = true;
  }, o.exportAttributes = function (e, t, i) {
    if (i.layerNamesAsId) {
      var n = t.getProperty("svgattrs", true);
      n && Object.keys(n).forEach(function (t) {
        e.setAttribute(t, n[t]);
      });
    }
  }, exports.exports = o;
}
