/**
 * chunk.vendor.js Module #889
 * Type: class
 * Name: GLocale
 */

function (e, t, i) {
      var n = i(633),
        r = i(261),
        o = i(636),
        a = i(637),
        s = i(634),
        l = i(455),
        h = i(635),
        A = i(890),
        c = i(638),
        p = i(639),
        u = i(632);

      function d() {
        ((this._projects = {}),
          (this._clazzMap = {}),
          (this._functions = {}),
          (this._translationInstance = new s()));
        var e = this.lookupLanguage(n.fullLanguage || "en");
        null != e && this.setLanguage(e);
      }
      (r.inheritAndMix(d, r),
        (d.prototype._language = 0),
        (d.prototype._project = null),
        (d.prototype._extensionEnabled = !1),
        (d.prototype._checkStrict = !1),
        (d.prototype._supportedISO6391Locales = [
          "en",
          "de",
          "zh",
          "pt",
          "es",
          "fr",
          "pl",
          "ru",
          "tr",
          "cs",
          "it",
          "ja",
          "nl",
        ]),
        (d.prototype.setStrict = function (e) {
          this._checkStrict = e;
        }),
        (d.prototype.getSupportedLocales = function () {
          return this._supportedISO6391Locales;
        }),
        (d.prototype.setProject = function (e) {
          if (!l.hasOwnProperty(e))
            throw Error("Project '" + e + "' doesn't exist!");
          this._project = e;
        }),
        (d.prototype.enableExtension = function () {
          this._extensionEnabled = !0;
        }),
        (d.prototype._language = 0),
        (d.prototype._projects = null),
        (d.prototype._valuesElse = null),
        (d.prototype._functions = null),
        (d.prototype.getLanguage = function () {
          return this._language;
        }),
        (d.prototype.setLanguage = function (e) {
          e != this._language && (this._language = e);
        }),
        (d.prototype.get = function (e, t, i) {
          return null != e && e instanceof a ? this.getValueByKey(e, t, i) : e;
        }),
        (d.prototype.getValue = function (e, t, i, n) {
          var a = this._getClassIdentifier(e);
          void 0 === n && (n = this._language);
          var s = this._getValue(n, a, t);
          if (
            (s || n == o.Default || (s = this._getValue(o.Default, a, t)),
            s || void 0 !== i)
          ) {
            if (!s) return i;
          } else {
            if (this._checkStrict)
              throw new Error(
                "No value found for " + r.getName(e) + " and key " + t,
              );
            console.error(
              "No value found for " + r.getName(e) + " and key " + t,
            );
          }
          return s;
        }),
        (d.prototype.getValueByKey = function (e, t, i) {
          return this.getValue(e.getClassReference(), e.getKey(), t, i);
        }),
        (d.prototype._sendNotification = function (e, t, i) {
          p.hasEventListeners(c) && p.trigger(new c(this._project, e, t, i));
        }),
        (d.prototype._getClassIdentifier = function (e) {
          return (
            ((e instanceof h && "string" != typeof e.getReference()) ||
              (!(e instanceof h) && "string" != typeof e)) &&
              this._sendNotification(
                c.Type.Warning,
                "Using class instead of string for:" +
                  (e instanceof h ? e.getReference() : e),
                {
                  clazz: e,
                },
              ),
            e instanceof h ? e.getReference().trim() : r.getName(e).trim()
          );
        }),
        (d.prototype.setValues = function (e, t, i, n, r, o) {
          r = null == r || r;
          var a = this._getClassIdentifier(e);
          a ||
            console.error(
              "Please, make sure the class has a valid ID, before defining translations!",
            );
          var s = this._projects[this._project];
          s ||
            (s = this._projects[this._project] =
              {
                values: {},
                extension: {},
              });
          var l = o ? s.extension : s.values,
            h = l[t];
          h || (h = l[t] = {});
          var A = h[a];
          A || (A = h[a] = {});
          for (var c = 0; c < i.length; ++c)
            (!r &&
              A.hasOwnProperty([i[c]]) &&
              console.error("Duplicate value for key: " + i[c]),
              (A[i[c]] = n[c]));
        }),
        (d.prototype._getValue = function (e, t, i) {
          var n = this._projects[this._project];
          if (this._extensionEnabled) {
            var r = n.extension[e];
            if (r) {
              var o = r[t];
              if (o && o.hasOwnProperty(i) && o[i]) return o[i];
            }
          }
          var a = n.values[e];
          if (a && (o = a[t])) return o[i];
        }),
        (d.prototype.getAvailableKeys = function (e) {
          var t = this._getClassIdentifier(e),
            i = this._projects[this._project],
            n = this._language || 0,
            r = i.values[n];
          if (r) {
            var o = r[t];
            if (o) return Object.keys(o);
          }
        }),
        (d.prototype.getClassTranslations = function (e, t) {
          for (
            var i = this.getAvailableKeys(e), n = {}, r = 0;
            r < i.length;
            r++
          ) {
            var o = i[r];
            n[o] = this.getValue(e, o, void 0, t);
          }
          return n;
        }),
        (d.prototype.getAvailableLanguages = function () {
          return this._translationInstance.getProjectAvailableLanguages(
            this._project,
          );
        }),
        (d.prototype.setFunction = function (e, t, i) {
          var n = this._functions[e];
          (n || (n = this._functions[e] = {}), (n[t] = i));
        }),
        (d.prototype.getFunction = function (e) {
          var t;
          if ((t = this._functions[this._language]) && t.hasOwnProperty(e))
            return t[e];
          if (
            this._language != o.Default &&
            (t = this._functions[o.Default]) &&
            t.hasOwnProperty(e)
          )
            return t[e];
          return null;
        }),
        (d.prototype.getLocaleLanguage = function (e) {
          if (o[e]) return o[e];
          var t = Object.keys(o).length - 1;
          return ((o[e] = t), t);
        }),
        (d.prototype.lookupLocale = function (e) {
          if (e && this._project) {
            var t = this._translationInstance
              .getByProject(this._project)
              .find(function (t) {
                return t.keyValue == e;
              });
            if (t && t.abbreviation) return t.abbreviation.toLowerCase();
          }
          switch (e) {
            case o.English:
              return "en";
            case o.German:
              return "de";
            case o.Chinese:
              return "zh";
            case o.Portuguese:
              return "pt";
            case o.Spanish:
              return "es";
            case o.French:
              return "fr";
            case o.Polish:
              return "pl";
            case o.Russian:
              return "ru";
            case o.Turkish:
              return "tr";
            case o.Czech:
              return "cs";
            case o.Italian:
              return "it";
            case o.Japanese:
              return "ja";
            case o.Dutch:
              return "nl";
            case o.Swedish:
              return "sv";
          }
        }),
        (d.prototype.lookupLanguage = function (e) {
          var t, i, r;
          if (e) {
            if (this._project) {
              if (
                (t = this._translationInstance
                  .getByProject(this._project)
                  .find(function (t) {
                    return t.abbreviation.toLowerCase() == e.toLowerCase();
                  }))
              )
                return t.keyValue;
              if (
                (i = this._translationInstance
                  .getByProject(this._project)
                  .find(function (t) {
                    return (
                      t.abbreviation.toLowerCase().slice(0, 2) ==
                      e.toLowerCase().slice(0, 2)
                    );
                  }))
              )
                return i.keyValue;
              if (
                (r = this._translationInstance
                  .getByProject(this._project)
                  .find(function (t) {
                    return (
                      t.abbreviation.toLowerCase().slice(0, 2) ===
                      e.toLowerCase().slice(0, 2)
                    );
                  }))
              )
                return r.keyValue;
            }
            if ("en" === n.language) return o.English;
            if ("de" === n.language) return o.German;
            if ("zh" === n.language || "so" === n.language) return o.Chinese;
            if ("pt" === n.language) return o.Portuguese;
            if ("es" === n.language) return o.Spanish;
            if ("fr" === n.language) return o.French;
            if ("pl" === n.language) return o.Polish;
            if ("ru" === n.language) return o.Russian;
            if ("tr" === n.language) return o.Turkish;
            if ("cs" === n.language) return o.Czech;
            if ("it" === n.language) return o.Italian;
            if ("ja" === n.language) return o.Japanese;
            if ("nl" === n.language) return o.Dutch;
            if ("sv" === n.language) return o.Swedish;
          }
          return o.English;
        }),
        (d.prototype.toLocaleCurrency = function (e, t) {
          if (
            ((e = ("number" == typeof e && e) || parseFloat(e)), isNaN(e) || !t)
          )
            throw Error("You must provid a valid number and currency!");
          return e.toLocaleString(this.getLocaleLanguageTag(), {
            style: "currency",
            currency: t,
          });
        }),
        (d.prototype.getLocaleLanguageTag = function (e) {
          var t = this;
          e = e || "en-US";
          var i = this._translationInstance
            .getByProject(this._project)
            .find(function (e) {
              return e.keyValue === (t._language || o.English);
            });
          return (i && i.abbreviation) || e;
        }),
        (d.prototype.replaceValues = function (e, t, i) {
          this._projects[e].values[t] = i;
        }),
        (d.prototype.getLocaleTagISO6391 = function () {
          return u.bcp47ToISO6391(this.getLocaleLanguageTag());
        }),
        (d.prototype.toLocaleDate = function (e, t) {
          return A.format(e, this.getLocaleLanguageTag(), t);
        }),
        (d.prototype.getTranslations = function () {
          return this._translationInstance.getByProject(this._project);
        }),
        (d.prototype.toString = function () {
          return "[Object GLocale]";
        }),
        (e.exports = d));
    }