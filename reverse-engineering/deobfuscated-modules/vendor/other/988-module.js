/**
 * Module 988
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
  var n = require(378) /* module */.Tokenizer, r = require(989) /* module */, o = require(990) /* module */, a = require(991) /* module */, s = require(992) /* module */;
  function l(e) {
    this.baseDir = e || "ltr", this.tokenizer = new n(), this.features = [];
  }
  function h() {
    var e = this.contextChecks.arabicWordCheck;
    return this.tokenizer.registerContextChecker("arabicWord", e.arabicWordStartCheck, e.arabicWordEndCheck);
  }
  function A() {
    var e = this.contextChecks.arabicSentenceCheck;
    return this.tokenizer.registerContextChecker("arabicSentence", e.arabicSentenceStartCheck, e.arabicSentenceEndCheck);
  }
  function c() {
    return h.call(this), A.call(this), this.tokenizer.tokenize(this.text);
  }
  function p() {
    if (-1 === this.tokenizer.registeredModifiers.indexOf("glyphIndex"))
      throw new Error("glyphIndex modifier is required to apply arabic presentation features.");
  }
  function u() {
    if (this.features.hasOwnProperty("arab")) {
      p.call(this);
      var exports = this.tokenizer.getContextRanges("arabicWord"), module = this;
      exports.forEach(function (e) {
        a.call(module, e);
      });
    }
  }
  function d() {
    if (this.features.hasOwnProperty("arab") && this.features.arab.hasOwnProperty("rlig")) {
      p.call(this);
      var exports = this.tokenizer.getContextRanges("arabicWord"), module = this;
      exports.forEach(function (e) {
        s.call(module, e);
      });
    }
  }
  l.prototype.setText = function (e) {
    this.text = e;
  }, l.prototype.contextChecks = {
    arabicWordCheck: r,
    arabicSentenceCheck: o
  }, l.prototype.subscribeArabicForms = function (e) {
    var t = this.tokenizer;
    t.events.contextEnd.subscribe(function (i, n) {
      if ("arabicWord" === i)
        return a.call(t, n, e);
    });
  }, l.prototype.applyFeatures = function (e) {
    for (var module = 0; module < e.length; module++) {
      var require = e[module];
      if (require) {
        var n = require.script;
        this.features[n] || (this.features[n] = {}), this.features[n][require.tag] = require;
      }
    }
  }, l.prototype.registerModifier = function (e, t, i) {
    this.tokenizer.registerModifier(e, t, i);
  }, l.prototype.processText = function (e) {
    this.text && this.text === e || (this.setText(e), c.call(this), u.call(this), d.call(this));
  }, l.prototype.getBidiText = function (e) {
    return this.processText(e), this.tokenizer.getText();
  }, l.prototype.getTextGlyphs = function (e, t) {
    this.processText(e);
    for (var require = [], n = 0; n < this.tokenizer.tokens.length; n++) {
      if (!(o = this.tokenizer.tokens[n]).state.deleted) {
        var r = o.activeState.value;
        require.push(Array.isArray(r) ? r[0] : r);
      }
    }
    if (t)
      for (n = 0; n < this.tokenizer.tokens.length; n++) {
        var o;
        (o = this.tokenizer.tokens[n]).state.deleted || t.push(o.char);
      }
    return require;
  }, exports.exports = l;
}
