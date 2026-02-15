/**
 * Module 1202
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
  var n = i(852), r = i(11);
  i(1119);
  function o(e, t, i) {
    this.paintContext = t, this.projectId = e.projectId, this.options = e, this.fnResult = i, this.svgDoc = r.parseXML("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><!-- Generator: Gravit.io --><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink= \"http://www.w3.org/1999/xlink\" style=\"isolation:isolate\"></svg>"), this.currentElement = this.svgDoc.documentElement, this.viewBox = null, this.stack = [], this.imageDictionary = [];
  }
  o.XMLNamespaceURI = "http://ns.gravit.io/", o.prototype.options = null, o.prototype.svgDoc = null, o.prototype.viewBox = null, o.prototype.globalOffset = {
    x: 0,
    y: 0
  }, o.prototype.jobCount = 0, o.prototype.currentElement = null, o.prototype.stack = null, o.prototype.setDocument = function (e) {
    this.svgDoc = e, this.currentElement = e.documentElement, this.imageDictionary = [];
  }, o.prototype.push = function (e) {
    this.stack.push(this.currentElement), this.currentElement = e;
  }, o.prototype.pop = function () {
    return this.currentElement = this.stack.pop(), this.currentElement;
  }, o.prototype.peek = function () {
    return this.currentElement;
  }, o.prototype.beginJob = function (e) {
    this.jobCount++;
  }, o.prototype.endJob = function (e, t) {
    this.jobCount--, 0 == this.jobCount && this.done();
  }, o.prototype.done = function () {
    if (this.imageDictionary.length) {
      var e = this.createSvgElement("defs");
      this.imageDictionary.forEach(function (t) {
        e.appendChild(t);
      }), this.svgDoc.documentElement.appendChild(e);
    }
    var t = n.xmlToString(this.svgDoc);
    this.fnResult(null, t);
  }, o.prototype.createSvgElement = function (e) {
    return this.svgDoc.createElementNS("http://www.w3.org/2000/svg", e);
  }, o.prototype.createImageElement = function (e) {
    var t = e.getImageCanvas(), i = e.getScene();
    if (!t || !i)
      return this.createSvgElement("image");
    var n, r, o = e.getProperty("url");
    if (!o.startsWith("dictionary://"))
      return (n = this.createSvgElement("image")).setAttribute("width", t.width), n.setAttribute("height", t.height), n.setAttribute("xlink:href", t.toDataURL()), n;
    for (var a = "img_" + o.slice(13), s = null, l = 0; l < this.imageDictionary.length && !s; l++)
      this.imageDictionary[l].getAttribute("id") === a && (s = this.imageDictionary[l]);
    if (!s) {
      var h = i.getDictionary().getEntry(o).value || t.toDataURL();
      (n = this.createSvgElement("image")).setAttribute("width", t.width), n.setAttribute("height", t.height), n.setAttribute("xlink:href", h), n.setAttribute("id", a), this.imageDictionary.push(n);
    }
    return (r = this.createSvgElement("use")).setAttribute("xlink:href", "#" + a), r;
  }, o.prototype.createInternalSvgElement = function (e, t) {
    var i = this.svgDoc.createElementNS(o.XMLNamespaceURI, "gravitDesigner:" + e);
    return t && Object.keys(t).forEach(function (e) {
      i.setAttribute(e, t[e]);
    }), i;
  }, e.exports = o;
}
