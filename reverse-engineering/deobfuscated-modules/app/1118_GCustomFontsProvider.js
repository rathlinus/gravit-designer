/**
 * Webpack Module #1118
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(180) /* DataModule_180 */,
      require(181) /* polyfill_ArrayBuffer_slice */,
      require(57) /* polyfill_parseInt */,
      require(20) /* polyfill_RegExp_exec */,
      require(34) /* polyfill_String_replace */,
      require(134) /* polyfill_String_startsWith */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* GCore */,
      i = require(381) /* module_381 */,
      GFontsProviderManager = require(255) /* GFontsProviderManager */,
      GFontDBClient = require(1198) /* GFontDBClient */,
      GSystemDialog = require(44) /* GSystemDialog */;
    function l(e) {
      i.call(this, e);
    }
    GCore.GObject.inherit(l, i);
    var c = GCore.GUtil.uuid();
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
                    var t = GFontsProviderManager.getInstance(),
                      n = (e, GSystemDialog) => {
                        var l = this.fonts;
                        if (GSystemDialog >= l.length) {
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
                                GFontDBClient.FONT_LIST,
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
                                      e instanceof GCore.GText &&
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
                                GFontsProviderManager.getInstance().reset(),
                                  t && t.setShowMissingFontsDialog(true),
                                  console.log("successfully updated font list"),
                                  this._queue &&
                                    this._queue.length &&
                                    this._queue.shift().call(this);
                              });
                        } else {
                          var d = l[GSystemDialog],
                            u = d.family + "_" + d.weight + "_" + d.style;
                          e.deleteItem(u).done(() => {
                            n(e, GSystemDialog + 1);
                          });
                        }
                      };
                    GSystemDialog.confirm(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GImportedFontsProvider",
                          "confirm.delete-font"
                        )
                      ),
                      (e) => {
                        e &&
                          (this._queue || (this._queue = []),
                          this._queue.push(() => {
                            GFontDBClient.getInstance((e) => {
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
                  ? GFontDBClient.getInstance((e) => {
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
              done: function (t, n, GCore) {
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
      (l.prototype.load = function (e, t, n, GCore, i) {
        if (!this._initialized && !this._initializing)
          return (
            this._loadCallbacks.push(
              function (i) {
                i ? GCore.fail() : this.load(e, t, n, GCore);
              }.bind(this)
            ),
            void this.initialize(this.load, e, t, n, GCore)
          );
        !this._initializing || i
          ? this._fontList
            ? GCore.done(
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
            : GFontDBClient.getInstance((i) => {
                if (!i) return GCore.fail();
                i.getItem(GFontDBClient.FONT_LIST).done((i) => {
                  (this._fontList = i || []),
                    this._generateFormattedList(),
                    (this._totalFonts = this._formattedFontList
                      ? this._formattedFontList.length
                      : 0),
                    GCore.done(
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
                i ? GCore.fail() : this.load(e, t, n, GCore);
              }.bind(this)
            );
      }),
      (l.prototype._generateFormattedList = function () {
        if (this._fontList) {
          this._formattedFontList = [];
          for (var exports = this._fontList.slice(), module = 0; module < exports.length; module++) {
            var require = exports[module],
              GCore = require.displayname || require.family,
              i = [
                {
                  weight: parseInt(require.weight),
                  style: require.style,
                  family: require.family,
                  subfamily: require.subfamily || null,
                  displayname: require.displayname || null,
                },
              ],
              GFontsProviderManager = [require.family];
            this._formattedFontList.push({
              family: null,
              displayname: GCore,
              fonts: i,
              families: GFontsProviderManager,
            });
            for (var GFontDBClient = exports.length - 1; GFontDBClient > module; GFontDBClient--)
              GCore === (exports[GFontDBClient].displayname || exports[GFontDBClient].family) &&
                (GFontsProviderManager.indexOf(exports[GFontDBClient].family) < 0 && GFontsProviderManager.push(exports[GFontDBClient].family),
                i.push({
                  weight: parseInt(exports[GFontDBClient].weight),
                  style: exports[GFontDBClient].style,
                  family: exports[GFontDBClient].family,
                  subfamily: exports[GFontDBClient].subfamily || null,
                  displayname: exports[GFontDBClient].displayname || null,
                }),
                exports.splice(GFontDBClient, 1));
            var GSystemDialog = 0,
              l = GFontsProviderManager[0].length;
            if (l > 0)
              for (GFontDBClient = 1; GFontDBClient < GFontsProviderManager.length; GFontDBClient++) {
                if (GFontsProviderManager[GFontDBClient].toLowerCase().indexOf("regular") >= 0) {
                  (l = 0), (GSystemDialog = GFontDBClient);
                  break;
                }
                l > GFontsProviderManager[GFontDBClient].length && ((l = GFontsProviderManager[GFontDBClient].length), (GSystemDialog = GFontDBClient));
              }
            this._formattedFontList[this._formattedFontList.length - 1].family =
              GFontsProviderManager[GSystemDialog];
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
              function (GCore) {
                GCore ? i.fail() : this.resolveFont(e, t, n, i);
              }.bind(this)
            ),
            void this.initialize(this.resolveFont, e, t, n, i)
          );
        if (this._initializing)
          this._resolveCallbacks.push(
            function (GCore) {
              GCore ? i.fail() : this.resolveFont(e, t, n, i);
            }.bind(this)
          );
        else {
          (n = String(n) || "400"), (t = t || GCore.GFont.Style.Normal);
          var GFontsProviderManager = e + "_" + n + "_" + t;
          GFontDBClient.getInstance((GCore) => {
            if (!GCore) return i.fail();
            GCore.getItem(GFontsProviderManager).done((GFontDBClient) => {
              if (GFontDBClient)
                i.done(
                  GFontDBClient instanceof DataView || GFontDBClient instanceof ArrayBuffer
                    ? GFontDBClient
                    : GFontDBClient.buffer
                );
              else {
                if (!this._fontList)
                  return console.warn("NO FONTLIST"), void i.fail();
                var GSystemDialog = this._fontList.findIndex(function (n) {
                  return !(
                    n.family !== e ||
                    n.style !== t ||
                    !n.subfamily ||
                    n.displayname === n.family
                  );
                });
                GSystemDialog >= 0
                  ? ((n = this._fontList[GSystemDialog].weight || "400"),
                    (GFontsProviderManager = e + "_" + n + "_" + t),
                    GCore.getItem(GFontsProviderManager).done((e) => {
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