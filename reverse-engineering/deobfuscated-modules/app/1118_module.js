/**
 * Webpack Module #1118
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(180) /* module_180 */,
      require(181) /* module_181 */,
      require(57) /* module_57 */,
      require(20) /* module_20 */,
      require(34) /* module_34 */,
      require(134) /* module_134 */,
      require(4) /* module_4 */,
      require(41) /* module_41 */,
      require(32) /* module_32 */,
      require(38) /* module_38 */,
      require(33) /* module_33 */;
    var o = require(1) /* module */,
      i = require(381) /* module_381 */,
      a = require(255) /* module_255 */,
      r = require(1198) /* module_1198 */,
      s = require(44) /* GSystemDialog */;
    function l(e) {
      i.call(this, e);
    }
    o.GObject.inherit(l, i);
    var c = o.GUtil.uuid();
    (l.prototype._totalFonts = 0),
      (l.prototype._fontList = null),
      (l.prototype._formattedFontList = null),
      (l.prototype._initialized = false),
      (l.prototype._initializing = false),
      (l.prototype._queue = null),
      (l.prototype.addPreviews = function (e) {
        for (var module = 0; module < e.length; module++) {
          var require = document.createElement("image");
          e[module].preview = require;
        }
        if (e.length) {
          var i = this;
          for (module = 0; module < e.length; module++)
            e[module].cachedPreview ||
              (e[module].addPreviewCallback = function (e, t) {
                var n = $("<div></div>").addClass("preview-container"),
                  l = document.createElement("div");
                (l.innerHTML = this.displayname || this.family),
                  (l.style.fontFamily = this.family),
                  (l.style.fontSize = gDesigner.isTouchEnabled()
                    ? "20px"
                    : "13px"),
                  (l.style.height = gDesigner.isTouchEnabled()
                    ? "30px"
                    : "20px"),
                  $(l).appendTo(n);
                var c,
                  d = $("<span></span>")
                    .addClass("gravit-icon-trash g-font-delete")
                    .attr("name", "_SPECIAL_")
                    .appendTo(n)[0];
                l.addEventListener("mouseover", function (e) {
                  e.stopPropagation(), e.preventDefault();
                }),
                  d.addEventListener("mouseup", (e) => {
                    e.stopPropagation(), e.preventDefault();
                    var t = a.getInstance(),
                      n = (e, s) => {
                        var l = this.fonts;
                        if (s >= l.length) {
                          var c = i._formattedFontList.findIndex(
                            (e) => e.family === this.family
                          );
                          if (-1 === c) return;
                          i._formattedFontList.splice(c, 1),
                            (i._fontList = []),
                            i._formattedFontList.forEach(function (e) {
                              e.fonts.forEach(function (e) {
                                i._fontList.push({
                                  family: e.family,
                                  weight: String(e.weight),
                                  style: e.style,
                                  subfamily: e.subfamily,
                                  displayname: e.displayname,
                                });
                              });
                            }),
                            i._totalFonts--,
                            e
                              .updateItem(
                                r.FONT_LIST,
                                i._fontList.map(function (e) {
                                  return {
                                    family: e.family,
                                    weight: e.weight,
                                    style: e.style,
                                    subfamily: e.subfamily,
                                    displayname: e.displayname,
                                  };
                                })
                              )
                              .done((e) => {
                                for (
                                  var n = {}, i = 0;
                                  i < this.families.length;
                                  i++
                                )
                                  n[this.families[i]] = "Open Sans";
                                if (
                                  (gDesigner.getDocuments().forEach((e) => {
                                    e.getScene().acceptChildren((e) => {
                                      e instanceof o.GText &&
                                        e.replaceFonts(n, true);
                                    });
                                  }),
                                  gDesigner.getWorkspace())
                                )
                                  for (i = 0; i < this.families.length; i++)
                                    gDesigner
                                      .getWorkspace()
                                      .getFontManager()
                                      .removeFont(this.families[i]);
                                a.getInstance().reset(),
                                  t && t.setShowMissingFontsDialog(true),
                                  console.log("successfully updated font list"),
                                  this._queue &&
                                    this._queue.length &&
                                    this._queue.shift().call(this);
                              });
                        } else {
                          var d = l[s],
                            u = d.family + "_" + d.weight + "_" + d.style;
                          e.deleteItem(u).done(() => {
                            n(e, s + 1);
                          });
                        }
                      };
                    s.confirm(
                      o.GLocale.get(
                        new o.GLocaleKey(
                          "GImportedFontsProvider",
                          "confirm.delete-font"
                        )
                      ),
                      (e) => {
                        e &&
                          (this._queue || (this._queue = []),
                          this._queue.push(() => {
                            r.getInstance((e) => {
                              e &&
                                (t && t.setShowMissingFontsDialog(false), n(e, 0));
                            });
                          }),
                          1 === this._queue.length &&
                            this._queue.shift().call(this));
                      }
                    );
                  });
                var u = null;
                for (c = 0; c < i._formattedFontList.length; c++)
                  if (i._formattedFontList[c].family === this.family) {
                    u = i._formattedFontList[c];
                    break;
                  }
                u
                  ? r.getInstance((e) => {
                      if (e) {
                        var t = this.fonts[0];
                        if (t) {
                          var n = t.family + "_" + t.weight + "_" + t.style;
                          e.getItem(n).done((e) => {
                            var n = new FileReader();
                            (n.onload = () => {
                              var e = document.createElement("style");
                              e.appendChild(
                                document.createTextNode(
                                  "@font-face {font-family:" +
                                    t.family +
                                    ";font-style:" +
                                    ("N" !== t.style ? "italic" : "normal") +
                                    ";font-weight:" +
                                    t.weight +
                                    ';src: url("' +
                                    n.result +
                                    '") format("truetype");}'
                                )
                              ),
                                document.head.appendChild(e);
                            }),
                              n.readAsDataURL(
                                new Blob([e], {
                                  type: "application/x-font-ttf",
                                })
                              );
                          });
                        }
                      }
                    })
                  : (l.innerHTML = "[Unavailable]"),
                  e(n);
              });
        }
      }),
      (l.prototype.initialize = function () {
        if (!this._initialized && !this._initializing) {
          this._initializing = true;
          var exports = Array.prototype.slice.call(arguments);
          this.load(
            "%",
            0,
            1,
            {
              done: function (t, n, o) {
                (this._initialized = true),
                  (this._initializing = false),
                  exports.length && exports[0].apply(this, exports.slice(1)),
                  this._clearCallbacks();
              }.bind(this),
              fail: function () {
                (this._initializing = false),
                  (this._initialized = true),
                  this._clearCallbacks(true);
              }.bind(this),
            },
            true
          );
        }
      }),
      (l.prototype.load = function (e, t, n, o, i) {
        if (!this._initialized && !this._initializing)
          return (
            this._loadCallbacks.push(
              function (i) {
                i ? o.fail() : this.load(e, t, n, o);
              }.bind(this)
            ),
            void this.initialize(this.load, e, t, n, o)
          );
        !this._initializing || i
          ? this._fontList
            ? o.done(
                this._formattedFontList
                  .filter((t) =>
                    e.indexOf("%") >= 0
                      ? (t.displayname || t.family)
                          .toLowerCase()
                          .startsWith(e.replace(/%/g, ""))
                      : (t.displayname || t.family).toLowerCase() ==
                        e.toLowerCase()
                  )
                  .slice(t, t + n),
                true,
                null
              )
            : r.getInstance((i) => {
                if (!i) return o.fail();
                i.getItem(r.FONT_LIST).done((i) => {
                  (this._fontList = i || []),
                    this._generateFormattedList(),
                    (this._totalFonts = this._formattedFontList
                      ? this._formattedFontList.length
                      : 0),
                    o.done(
                      this._formattedFontList
                        .filter((t) =>
                          e.indexOf("%") >= 0
                            ? (t.displayname || t.family)
                                .toLowerCase()
                                .startsWith(e.replace(/%/g, ""))
                            : (t.displayname || t.family).toLowerCase() ==
                              e.toLowerCase()
                        )
                        .slice(t, t + n),
                      true,
                      null
                    ),
                    this._clearCallbacks();
                });
              })
          : this._loadCallbacks.push(
              function (i) {
                i ? o.fail() : this.load(e, t, n, o);
              }.bind(this)
            );
      }),
      (l.prototype._generateFormattedList = function () {
        if (this._fontList) {
          this._formattedFontList = [];
          for (var exports = this._fontList.slice(), module = 0; module < exports.length; module++) {
            var require = exports[module],
              o = require.displayname || require.family,
              i = [
                {
                  weight: parseInt(require.weight),
                  style: require.style,
                  family: require.family,
                  subfamily: require.subfamily || null,
                  displayname: require.displayname || null,
                },
              ],
              a = [require.family];
            this._formattedFontList.push({
              family: null,
              displayname: o,
              fonts: i,
              families: a,
            });
            for (var r = exports.length - 1; r > module; r--)
              o === (exports[r].displayname || exports[r].family) &&
                (a.indexOf(exports[r].family) < 0 && a.push(exports[r].family),
                i.push({
                  weight: parseInt(exports[r].weight),
                  style: exports[r].style,
                  family: exports[r].family,
                  subfamily: exports[r].subfamily || null,
                  displayname: exports[r].displayname || null,
                }),
                exports.splice(r, 1));
            var s = 0,
              l = a[0].length;
            if (l > 0)
              for (r = 1; r < a.length; r++) {
                if (a[r].toLowerCase().indexOf("regular") >= 0) {
                  (l = 0), (s = r);
                  break;
                }
                l > a[r].length && ((l = a[r].length), (s = r));
              }
            this._formattedFontList[this._formattedFontList.length - 1].family =
              a[s];
          }
        } else this._formattedFontList = null;
      }),
      (l.prototype._resolveCallbacks = []),
      (l.prototype._loadCallbacks = []),
      (l.prototype._clearCallbacks = function (e) {
        this._resolveCallbacks.forEach(function (t) {
          t(!!e);
        }),
          (this._resolveCallbacks = []),
          this._loadCallbacks.forEach(function (e) {
            e();
          }),
          (this._loadCallbacks = []);
      }),
      (l.prototype.getTotalFonts = function (e) {
        return e
          ? this._formattedFontList.filter(this._searchFilter(e)).length
          : this._totalFonts;
      }),
      (l.prototype.resetProvider = function () {
        (this._fontList = null), (this._formattedFontList = null);
      }),
      (l.prototype.resolveFont = function (e, t, n, i) {
        if (!this._initialized && !this._initializing)
          return (
            this._resolveCallbacks.push(
              function (o) {
                o ? i.fail() : this.resolveFont(e, t, n, i);
              }.bind(this)
            ),
            void this.initialize(this.resolveFont, e, t, n, i)
          );
        if (this._initializing)
          this._resolveCallbacks.push(
            function (o) {
              o ? i.fail() : this.resolveFont(e, t, n, i);
            }.bind(this)
          );
        else {
          (n = String(n) || "400"), (t = t || o.GFont.Style.Normal);
          var a = e + "_" + n + "_" + t;
          r.getInstance((o) => {
            if (!o) return i.fail();
            o.getItem(a).done((r) => {
              if (r)
                i.done(
                  r instanceof DataView || r instanceof ArrayBuffer
                    ? r
                    : r.buffer
                );
              else {
                if (!this._fontList)
                  return console.warn("NO FONTLIST"), void i.fail();
                var s = this._fontList.findIndex(function (n) {
                  return !(
                    n.family !== e ||
                    n.style !== t ||
                    !n.subfamily ||
                    n.displayname === n.family
                  );
                });
                s >= 0
                  ? ((n = this._fontList[s].weight || "400"),
                    (a = e + "_" + n + "_" + t),
                    o.getItem(a).done((e) => {
                      e
                        ? i.done(
                            e instanceof DataView || e instanceof ArrayBuffer
                              ? e
                              : e.buffer
                          )
                        : i.fail();
                    }))
                  : i.fail();
              }
            });
          });
        }
      }),
      (l.prototype.getProviderId = function () {
        return c;
      }),
      (exports.exports = l);
  }