/**
 * chunk.vendor.js Module #988
 * Type: unknown
 */

function (e, t, i) {
      var n = i(378).Tokenizer,
        r = i(989),
        o = i(990),
        a = i(991),
        s = i(992);

      function l(e) {
        ((this.baseDir = e || "ltr"),
          (this.tokenizer = new n()),
          (this.features = []));
      }

      function h() {
        var e = this.contextChecks.arabicWordCheck;
        return this.tokenizer.registerContextChecker(
          "arabicWord",
          e.arabicWordStartCheck,
          e.arabicWordEndCheck,
        );
      }

      function A() {
        var e = this.contextChecks.arabicSentenceCheck;
        return this.tokenizer.registerContextChecker(
          "arabicSentence",
          e.arabicSentenceStartCheck,
          e.arabicSentenceEndCheck,
        );
      }

      function c() {
        return (h.call(this), A.call(this), this.tokenizer.tokenize(this.text));
      }

      function p() {
        if (-1 === this.tokenizer.registeredModifiers.indexOf("glyphIndex"))
          throw new Error(
            "glyphIndex modifier is required to apply arabic presentation features.",
          );
      }

      function u() {
        if (this.features.hasOwnProperty("arab")) {
          p.call(this);
          var e = this.tokenizer.getContextRanges("arabicWord"),
            t = this;
          e.forEach(function (e) {
            a.call(t, e);
          });
        }
      }

      function d() {
        if (
          this.features.hasOwnProperty("arab") &&
          this.features.arab.hasOwnProperty("rlig")
        ) {
          p.call(this);
          var e = this.tokenizer.getContextRanges("arabicWord"),
            t = this;
          e.forEach(function (e) {
            s.call(t, e);
          });
        }
      }
      ((l.prototype.setText = function (e) {
        this.text = e;
      }),
        (l.prototype.contextChecks = {
          arabicWordCheck: r,
          arabicSentenceCheck: o,
        }),
        (l.prototype.subscribeArabicForms = function (e) {
          var t = this.tokenizer;
          t.events.contextEnd.subscribe(function (i, n) {
            if ("arabicWord" === i) return a.call(t, n, e);
          });
        }),
        (l.prototype.applyFeatures = function (e) {
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            if (i) {
              var n = i.script;
              (this.features[n] || (this.features[n] = {}),
                (this.features[n][i.tag] = i));
            }
          }
        }),
        (l.prototype.registerModifier = function (e, t, i) {
          this.tokenizer.registerModifier(e, t, i);
        }),
        (l.prototype.processText = function (e) {
          (this.text && this.text === e) ||
            (this.setText(e), c.call(this), u.call(this), d.call(this));
        }),
        (l.prototype.getBidiText = function (e) {
          return (this.processText(e), this.tokenizer.getText());
        }),
        (l.prototype.getTextGlyphs = function (e, t) {
          this.processText(e);
          for (var i = [], n = 0; n < this.tokenizer.tokens.length; n++) {
            if (!(o = this.tokenizer.tokens[n]).state.deleted) {
              var r = o.activeState.value;
              i.push(Array.isArray(r) ? r[0] : r);
            }
          }
          if (t)
            for (n = 0; n < this.tokenizer.tokens.length; n++) {
              var o;
              (o = this.tokenizer.tokens[n]).state.deleted || t.push(o.char);
            }
          return i;
        }),
        (e.exports = l));
    }