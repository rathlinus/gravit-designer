/**
 * Module 1458
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

function (e, t) {
  var i = function (e) {
    this._document = e;
  };
  i.prototype.postProcess = function () {
    this.removeRedundantGroups(), this.removeDefaultAttributes();
  }, i.prototype.removeRedundantGroups = function () {
    this._visit(this._document.documentElement.childNodes);
  }, i.prototype.removeDefaultAttributes = function () {
  }, i.prototype._visit = function (e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      if ("g" !== i.nodeName || 0 != i.attributes.length || i._keepIt || i.parentNode && "switch" === i.parentNode.nodeName)
        this._visit(i.childNodes);
      else {
        for (; i.childNodes.length > 0;)
          i.parentElement.insertBefore(i.childNodes[i.childNodes.length - 1], i.nextSibling);
        i.parentElement.removeChild(i), t--;
      }
    }
  }, e.exports = i;
}
