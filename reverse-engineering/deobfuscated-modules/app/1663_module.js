/**
 * Webpack Module #1663
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */,
      require(168) /* polyfill_Array_reduce */,
      require(30) /* polyfill_Object_assign */,
      require(57) /* polyfill_parseInt */,
      require(8) /* polyfill_bundle_ES6 */,
      require(20) /* polyfill_RegExp_exec */,
      require(34) /* polyfill_String_replace */,
      require(134) /* polyfill_String_startsWith */,
      require(91) /* polyfill_String_trim */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(169) /* stub_requires_683 */,
      require(1175) /* stub_requires_1559 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      require(26) /* polyfill_DOMCollection_iterator */,
      require(125) /* stub_requires_673 */,
      require(126) /* polyfill_URL_toJSON */,
      require(114) /* stub_requires_424 */;
    var i = require(1201) /* module */,
      GCore = require(1) /* module */,
      r = require(15) /* module */,
      AppSettings = require(10) /* AppSettings */,
      l = _interopRequireDefault(require(1664) /* module_1664 */),
      c = require(219) /* module_219 */,
      GClipAction = require(809) /* GClipAction */,
      { debounce: u, stringToBase64String: p } = require(40) /* CollaborationMergeUtils */;
    const g = l.default.getElements();
    exports.exports = class {
      constructor(e) {
        (this._parent = e),
          (this._CURRENT_SKIP_COUNT = 0),
          (this._IMAGE_PAGE_COUNT = 1),
          (this._CURRENT_CATEGORY = null),
          (this._CURRENT_ROOT_CATEGORY = null),
          (this._IMAGE_ASSET_DRAINED = false),
          (this._LOADING = false),
          (this._wrapperWidth = 250),
          (this._debouncedResizeHandler = u(
            function () {
              var e = Array.from(this._parent.find(".assets-wrapper")).filter(
                  (e) => $(e).children().length
                ),
                t = $(e).css("width")
                  ? parseInt($(e).css("width").split("px")[0])
                  : 250;
              Math.abs(t - this._wrapperWidth) > 50 &&
                ((this._wrapperWidth = t),
                this._initMasonryLayoutColumns($(e), null, null, true));
            }.bind(this),
            200
          ));
        var t = $("<div/>").addClass("g-library-panel").appendTo(e);
        (this._libraryPanel = t), this._createSearch(t), this._initElements(t);
      }
      _updateUI(e, t, n, _interopRequireDefault, i) {
        var r = this,
          AppSettings = i ? [] : t.children || [],
          l = e.find(".images");
        if (AppSettings.length > 0 && 0 === e.find("select").length) {
          var c = $("<select/>")
            .addClass("selector")
            .on("change", function () {
              var n,
                _interopRequireDefault = $(this).find("option:selected").data("category");
              (r._CURRENT_SKIP_COUNT = 0),
                (r._IMAGE_PAGE_COUNT = 1),
                e.find(".asset-container").remove(),
                _interopRequireDefault
                  ? ((r._CURRENT_CATEGORY = _interopRequireDefault),
                    (n =
                      (r._CURRENT_ROOT_CATEGORY &&
                        (r._CURRENT_ROOT_CATEGORY.name ||
                          r._CURRENT_ROOT_CATEGORY.path)) ||
                      r._CURRENT_ROOT_CATEGORY ||
                      "") && (n += "-"),
                    (n +=
                      (r._CURRENT_CATEGORY &&
                        (r._CURRENT_CATEGORY.name ||
                          r._CURRENT_CATEGORY.path)) ||
                      r._CURRENT_CATEGORY ||
                      ""))
                  : ((r._CURRENT_CATEGORY = t),
                    (r._CURRENT_ROOT_CATEGORY = t),
                    (n =
                      (r._CURRENT_CATEGORY &&
                        (r._CURRENT_CATEGORY.name ||
                          r._CURRENT_CATEGORY.path)) ||
                      r._CURRENT_CATEGORY ||
                      "") && (n += "-"),
                    (n += "All")),
                gDesigner.stats("librarypanel_change_category", n),
                r._loadAssets(e, r._CURRENT_CATEGORY, r._updateUI.bind(r));
            });
          "element.image" === t.path && c.addClass("full-width");
          var GClipAction = e.parent();
          GClipAction.find(".selector-container").remove();
          var u = GClipAction.find(".indicator");
          $("<div/>").addClass("selector-container").append(c).insertAfter(u),
            $("<option/>")
              .text(
                GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "element.all"))
              )
              .appendTo(c);
          for (var p = 0; p < AppSettings.length; ++p) {
            var g =
              "element.child.name." +
              AppSettings[p].name.toLowerCase().trim().replace(/\s+/g, "-");
            $("<option/>")
              .text(
                GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", g), AppSettings[p].name)
              )
              .data("category", AppSettings[p])
              .appendTo(c);
          }
        }
        !(function (t) {
          var n = [];
          i || e.find(".asset").remove();
          for (var _interopRequireDefault = 0; _interopRequireDefault < t.length; ++_interopRequireDefault) {
            let i = t[_interopRequireDefault],
              l = i.path && i.path.startsWith("element.image");
            var GCore = r._getPreviewURI(i);
            if (l) n.push(i);
            else {
              var AppSettings = $("<div/>")
                  .addClass("asset-container")
                  .attr("data-title", i.name || ""),
                c = $("<img/>")
                  .on("dragstart", function () {
                    return false;
                  })
                  .attr("draggable", false)
                  .attr("src", GCore)
                  .on("mousedown", function (e) {
                    r._onItemDragStartHandler(i, e);
                  })
                  .addClass("asset");
              AppSettings.append(c), e.append(AppSettings);
            }
          }
          if (n) {
            var GClipAction = l.length ? l : e;
            r._initMasonryLayoutColumns(GClipAction, n, i);
          }
        })(n);
      }
      _initMasonryLayoutColumns(e, t, n, _interopRequireDefault) {
        if (
          (_interopRequireDefault && e && (t = e.find(".column").children()).unwrap(),
          0 === t.length)
        )
          return;
        this._wrapperWidth = e.css("width")
          ? parseInt(e.css("width").split("px")[0])
          : 250;
        var i,
          GCore = [],
          r = 2,
          l = null;
        if (
          ((r = Math.max(Math.ceil(this._wrapperWidth / 200), r)),
          (i = this._wrapperWidth / r - 4 * (r - 1)),
          (l =
            r > 2 ? (i / this._wrapperWidth) * 100 + "%" : "calc(50% - 4px)"),
          n)
        )
          GCore = e.find(".column").toArray();
        else
          for (var c = 0; c < r; c++) {
            var GClipAction = $("<div/>").addClass("column").css("width", l);
            c > 0 && GClipAction.css("margin-left", "4px"), GCore.push(GClipAction);
          }
        const u = GCore.map(this._getChildrenHeight.bind(this)),
          p = [];
        for (var g = 0; g < t.length; g++) {
          var h;
          if (_interopRequireDefault) h = t[g];
          else {
            let e = t[g];
            var f = this._getPreviewURI(e),
              m = $("<img/>")
                .addClass("asset")
                .attr("draggable", false)
                .attr("src", f)
                .on("dragstart", function () {
                  return false;
                });
            gDesigner.isTouchDevice()
              ? m.on("click", () => {
                  this._addAsset(e);
                })
              : m.on("mousedown", (t) => {
                  this._onItemDragStartHandler(e, t);
                }),
              (h = $("<div/>")
                .addClass("asset-container image-asset")
                .css("margin-bottom", "4px")
                .data("asset", e)
                .append(
                  $("<span/>")
                    .text(e.user.name)
                    .attr("draggable", false)
                    .on("click", function (t) {
                      t.preventDefault();
                      var n = new URL(e.user.profile);
                      n.searchParams.append(
                        "utm_source",
                        encodeURIComponent(AppSettings.DESIGNER.TITLE)
                      ),
                        n.searchParams.append("utm_medium", "referral"),
                        gContainer.openExternalLink(t, n);
                    })
                )).append(m);
          }
          const e = this._getSmallestColumnIndex(u),
            n = $(h).data("asset"),
            i = this._getThumbnailSize(n).getHeight();
          u[e] = (u[e] || 0) + i;
          const GCore = p[e] || [];
          GCore.push(h), (p[e] = GCore);
        }
        GCore.forEach((e, t) => {
          $(e).append(p[t]);
        }),
          n || e.append(GCore);
      }
      _addAsset(e, t) {
        var n = this;
        !(async function () {
          if (e.content)
            t && (t.center = true),
              gDesigner
                .getActiveDocument()
                .placeOrImport(
                  new Blob([e.content], { type: e.type || "image/svg+xml" }),
                  t,
                  false,
                  true
                );
          else if (e.path.startsWith("element.ui."))
            try {
              var _interopRequireDefault = await fetch(e.url).then((e) => {
                  if (!e.ok) throw new Error();
                  return e.text();
                }),
                l = $.parseXML(_interopRequireDefault);
              l &&
                "svg" === l.documentElement.nodeName &&
                gDesigner
                  .getActiveDocument()
                  .placeOrImport(
                    new Blob([_interopRequireDefault], { type: "image/svg+xml" }),
                    t,
                    false,
                    true
                  );
            } catch (e) {}
          else if (e.path.startsWith("element.image.")) {
            var u = e.id;
            try {
              var p = r.GPlatform.modifiers.optionKey,
                g = await AppSettings.gApi.getUnsplashPhotoUrl({
                  id: u,
                  size: "regular",
                }),
                h = await fetch(g).then((e) => {
                  if (!e.ok) throw new Error();
                  return e.blob();
                });
              i.GBitmapImport.import(h, (e, _interopRequireDefault, i, r) => {
                if (e)
                  new c(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GDocument", "text.image-too-big")
                    )
                  ).open();
                else {
                  var AppSettings = gDesigner.getActiveDocument(),
                    l = AppSettings.getScene(),
                    u = AppSettings.getEditor(),
                    g = l.getActivePage(),
                    h = u.hasSelection() && u.getSelection()[0],
                    f = GCore.GLocale.get(
                      new GCore.GLocaleKey("GImage", "name.unsplash")
                    ),
                    m = GCore.GLocale.get(
                      new GCore.GLocaleKey("GEditor", "action.insert-image")
                    );
                  u.beginTransaction();
                  try {
                    if (!h || h instanceof GCore.GImage) {
                      let e = new GCore.GImage();
                      e.setProperties(
                        ["name", "iw", "ih", "url"],
                        [f, i, r, _interopRequireDefault]
                      ),
                        n._transformNode(e, t),
                        g.appendChild(e),
                        gDesigner.stats("librarypanel_download_image");
                    } else if (p) {
                      var y = u.getSelection()[0].getTransform(),
                        v = y && y.getTranslation();
                      let e = new GCore.GImage();
                      e.setProperties(
                        ["name", "iw", "ih", "url"],
                        [f, i, r, _interopRequireDefault]
                      ),
                        !t && v && (t = { x: v.getX(), y: v.getY() }),
                        n._transformNode(e, t),
                        g.appendChild(e),
                        u.updateSelection(true, [e]),
                        gDesigner.executeAction(GClipAction.ID, undefined, undefined, true),
                        gDesigner.stats("librarypanel_download_image", "clip");
                    } else {
                      var _ = u.getSelection()[0].getPaintLayers();
                      if (_) {
                        var b = new GCore.GTexturePattern(_interopRequireDefault);
                        b.setSizeMode(GCore.GTexturePattern.SizeMode.Cover),
                          b.setScene(l);
                        var w = new GCore.GStylable.FillPaintLayer(b);
                        _.appendChild(w);
                      }
                      (m = GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GFillPaintLayerProperties",
                          "action.change-properties"
                        )
                      )),
                        gDesigner.stats("librarypanel_download_image", "fill");
                    }
                  } finally {
                    u.commitTransaction(m);
                  }
                }
              });
            } catch (e) {}
          } else {
            var f = e.url,
              m = gDesigner.getActiveDocument(),
              y = m.getEditor(),
              v = m.getScene().getActivePage(),
              _ = null,
              b = null,
              w = v.getGeometryBBox(),
              C = w && v.isFixedSized() ? w.getWidth() : 800,
              x = w && v.isFixedSized() ? w.getHeight() : 800;
            if (e.path.startsWith("element.line.tile")) b = (_ = 0.4 * C) / 10;
            else {
              (_ = e.width), (b = e.height);
              var S = _ / b;
              if (
                ((_ = C / 3) > 300 && (_ = 300),
                (b = _ / S),
                (_ = Math.round(_)),
                (b = Math.round(b)) > x)
              ) {
                var E = b;
                (b = x / 3) > 300 && (b = 300),
                  (_ = (_ / E) * b),
                  (_ = Math.round(_)),
                  (b = Math.round(b));
              }
            }
            var A = new XMLHttpRequest();
            A.open("GET", f),
              (A.onload = () => {
                i.GSVGImport.import(
                  A.responseText,
                  { baseWidth: _, baseHeight: b, forceBaseSize: true },
                  gDesigner
                    .getActiveDocument()
                    .getScene()
                    ._workspace.getFontManager(),
                  (_interopRequireDefault, i) => {
                    if (i) {
                      y.beginTransaction();
                      try {
                        if (e.path.startsWith("element.line.tile")) {
                          var r,
                            AppSettings,
                            l = new GCore.GTexturePattern(
                              i,
                              GCore.GTexturePattern.RepeatMode.Horizontal
                            );
                          l.setPosition(GCore.GTexturePattern.PositionMode.Center),
                            t
                              ? ((r = t.x - _ / 2), (AppSettings = t.y - b / 2))
                              : ((r = 0.3 * C), (AppSettings = (x - b) / 2));
                          var c = new GCore.GRectangle();
                          c.setProperty(
                            "trf",
                            new GCore.GTransform(
                              _ / 2,
                              0,
                              0,
                              b / 2,
                              r + _ / 2,
                              AppSettings + b / 2
                            )
                          ),
                            c.setProperty("isLine", true, true, false),
                            v.appendChild(c),
                            c
                              .getPaintLayers()
                              .insertChild(new GCore.GStylable.FillPaintLayer(l)),
                            gDesigner
                              .getActiveDocument()
                              .getEditor()
                              .updateSelection(false, [c]);
                        } else
                          n._transformNode(i, t),
                            m.insertElement(i, !t, true, false);
                      } finally {
                        y.commitTransaction("Add Element");
                      }
                    }
                  }
                );
              }),
              A.send();
          }
        })();
      }
      _transformNode(e, t) {
        if (t && e.hasMixin(GCore.GElement.Transform)) {
          var require = e.getGeometryBBox(),
            _interopRequireDefault = require && require.getX() ? require.getX() : 0,
            i = require && require.getY() ? require.getY() : 0;
          require && ((_interopRequireDefault += require.getWidth() / 2), (i += require.getHeight() / 2)),
            e.transform(new GCore.GTransform(1, 0, 0, 1, t.x - _interopRequireDefault, t.y - i), true);
        }
      }
      _createScrollEvent() {
        $(".library-container").unbind("scroll"),
          $($(".library-container")).scroll(
            function (e) {
              var t = $(e.currentTarget);
              t.scrollTop() > 50
                ? 0 === $(t).find(".library-scroll-top").length &&
                  $("<div/>")
                    .addClass("library-scroll-top")
                    .append(
                      $("<div/>")
                        .addClass("container")
                        .append(
                          $("<span/>").text(
                            GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GCommonNames",
                                "text.back-to-top"
                              )
                            )
                          )
                        )
                        .append(
                          $("<span/>").addClass("gravit-icon-back-to-top")
                        )
                    )
                    .on("click", function () {
                      gDesigner.stats("librarypanel_click_backtotop"),
                        $(".library-container").animate(
                          { scrollTop: 0 },
                          "slow"
                        );
                    })
                    .appendTo(t)
                : $(t).find(".library-scroll-top").remove();
            }.bind(this)
          );
      }
      _createSearch(e) {
        var t = $("<div/>"),
          n = $("<div/>"),
          _interopRequireDefault = this,
          i = function (e) {
            _interopRequireDefault._libraryPanel
              .find(".category-row")
              .find(".category")
              .removeClass("active"),
              _interopRequireDefault._libraryPanel.find(".assets").css("display", "none"),
              (_interopRequireDefault._CURRENT_SKIP_COUNT = 0),
              (_interopRequireDefault._IMAGE_PAGE_COUNT = 1),
              (_interopRequireDefault._CURRENT_CATEGORY = e),
              (_interopRequireDefault._CURRENT_ROOT_CATEGORY = null),
              t.find("span").toggleClass("gravit-icon-search", !e || !e.trim()),
              t
                .find("span")
                .toggleClass("gravit-icon-close", !!e && !!e.trim());
            var i = n.find(".assets-wrapper").first();
            i.empty(),
              i.append($("<div></div>").addClass("assets-wrapper images")),
              e &&
                e.trim() &&
                (n.css("display", "block"),
                _interopRequireDefault._createScrollEvent(null, n, true),
                _interopRequireDefault._loadAssets(i, e, _interopRequireDefault._updateUI.bind(_interopRequireDefault), true));
          };
        t
          .addClass("library-search")
          .append(
            $("<input/>")
              .attr("type", "text")
              .addClass("g-input")
              .attr(
                "placeholder",
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "element.search")
                ) + "..."
              )
              .on("keypress", function (e) {
                13 === e.keyCode && i($(this).val());
              })
          )
          .append(
            $("<span/>")
              .addClass("gravit-icon-search")
              .on("click", function () {
                var e = $(this);
                gDesigner.stats(
                  "librarypanel_click_search",
                  e.prev("input").val()
                ),
                  $(n).is(":visible")
                    ? (n.find(".assets-wrapper").empty(),
                      n.css("display", "none"),
                      e.prev("input").val(""),
                      e.removeClass("gravit-icon-close"),
                      e.addClass("gravit-icon-search"))
                    : i(e.prev("input").val());
              })
          )
          .appendTo(e),
          n
            .addClass("assets")
            .css("display", "none")
            .append(
              $("<div></div>")
                .addClass("assets-content")
                .append([
                  $("<div/>").addClass("indicator"),
                  $("<div/>")
                    .addClass("assets-wrapper")
                    .append($("<div/>").addClass("assets-wrapper images")),
                ])
            )
            .append(this._loadMoreButton(n, true))
            .appendTo(e);
      }
      _loadMoreButton(e, t) {
        return $("<div/>")
          .addClass("button-wrapper")
          .addClass("hidden")
          .append(
            $("<button/>")
              .addClass("load-more")
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.library-load-more")
                )
              )
              .on("click", () => {
                this._loadAssets(
                  e.find(".assets-wrapper").first(),
                  this._CURRENT_CATEGORY,
                  this._updateUI.bind(this),
                  t,
                  true
                ),
                  this._toggleShowMoreButton(true, true);
              })
          );
      }
      _initElements(e) {
        for (var module = this, require = 0; require < g.length; ++require) {
          let r = g[require];
          if (require > 0 && require % 3 == 0) {
            let t = $("<div/>")
              .addClass("assets")
              .css("display", "none")
              .append(
                $("<div/>")
                  .addClass("assets-content")
                  .append([
                    $("<div/>").addClass("indicator"),
                    $("<div/>").addClass("assets-wrapper"),
                  ])
              )
              .appendTo(e);
            t.append(this._loadMoreButton(t, false));
          }
          var _interopRequireDefault = this._libraryPanel.find(".category-row:last-child");
          (0 !== _interopRequireDefault.length && 3 !== _interopRequireDefault.children().length) ||
            (_interopRequireDefault = $("<div/>").addClass("category-row")).appendTo(e);
          let AppSettings = $("<div/>")
            .addClass("category")
            .on("click", function () {
              var e = r.name || r.path || r || "";
              e && (e += "-"),
                (e += "All"),
                gDesigner.stats("librarypanel_search_category", e);
              var n = $(this),
                _interopRequireDefault = n.closest(".category-row"),
                i = _interopRequireDefault.children().index(this),
                GCore = _interopRequireDefault.next(".assets"),
                l = n.hasClass("category") && n.hasClass("active");
              _interopRequireDefault
                .closest(".g-library-panel")
                .find(".category")
                .removeClass("active"),
                n.addClass("active");
              var c = _interopRequireDefault
                .closest(".g-library-panel")
                .find(".assets")
                .not(_interopRequireDefault.next(".assets"));
              c.removeClass("first second third"),
                $(".library-search")
                  .find("span")
                  .removeClass("gravit-icon-close"),
                $(".library-search")
                  .find("span")
                  .addClass("gravit-icon-search"),
                c.css("display", "none");
              var GClipAction = GCore.find(".assets-wrapper");
              "auto" !== GClipAction.css("height") && GClipAction.css("height", "auto"),
                GCore.find(".selector-container").remove(),
                GClipAction.empty(),
                c.find(".assets-wrapper").empty();
              var u = function (e) {
                let module = GCore.hasClass(e);
                GCore.removeClass("first second third"),
                  module
                    ? (GCore.css("display", "none"), n.removeClass("active"))
                    : (GCore.addClass(e),
                      GCore.css("display", ""),
                      n.addClass("active"));
              };
              u(0 === i ? "first" : 1 === i ? "second" : "third");
              var p = GCore.find(".assets-content");
              (GClipAction = GCore.find(".assets-wrapper")),
                p.removeClass(),
                p.addClass("assets-content"),
                p.addClass("asset-" + r.path.slice(8).replace(/\./g, "-")),
                module._createScrollEvent(AppSettings, GCore),
                (module._CURRENT_SKIP_COUNT = 0),
                (module._IMAGE_PAGE_COUNT = 1),
                (module._CURRENT_CATEGORY = r),
                (module._CURRENT_ROOT_CATEGORY = r),
                l || module._loadAssets(GClipAction, r, module._updateUI);
            })
            .appendTo(_interopRequireDefault);
          var i = $("<div/>").addClass("content").appendTo(AppSettings);
          $("<img/>").addClass("icon").attr("src", r.url).appendTo(i),
            $("<span/>")
              .addClass("title")
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", r.path.replace(/\.$/, "")),
                  r.name
                )
              )
              .appendTo(i);
        }
        let r = $("<div/>")
          .addClass("assets")
          .css("display", "none")
          .append(
            $("<div/>")
              .addClass("assets-content")
              .append([
                $("<div/>").addClass("indicator"),
                $("<div/>").addClass("assets-wrapper"),
              ])
          )
          .appendTo(e);
        r.append(this._loadMoreButton(r, false));
      }
      _loadAssets(e, t, n, _interopRequireDefault, i) {
        this._toggleShowMoreButton(false, false),
          this._toggleLoading(true),
          this._doLoadAssets(e, t, n, _interopRequireDefault, i);
      }
      async _doLoadAssets(e, t, n, _interopRequireDefault, i) {
        let GCore = [],
          r = 0,
          c = 0;
        try {
          if (_interopRequireDefault) {
            let e = [];
            if (l.default.isUnsplashIntegrationEnabled()) {
              if (!this._IMAGE_ASSET_DRAINED)
                try {
                  e = await AppSettings.gApi.searchUnsplashPhotos({
                    query: t,
                    page: this._IMAGE_PAGE_COUNT,
                  });
                } catch (e) {
                  console.warn("Unsplash search failed", e);
                }
              (c = (e || []).length), c || (this._IMAGE_ASSET_DRAINED = true);
            }
            (GCore = []),
              -1 !== this._CURRENT_SKIP_COUNT &&
                (GCore = await AppSettings.gApi.listMarket({
                  q: t,
                  path: "element.",
                  limit: "90",
                  skip: this._CURRENT_SKIP_COUNT + "",
                  sort: "name",
                })),
              (r = (GCore || []).length),
              (GCore = GCore.concat(e));
          } else if (t.path && t.path.startsWith("element.image"))
            l.default.isUnsplashIntegrationEnabled() &&
              ((GCore = t.tag
                ? await AppSettings.gApi.searchUnsplashPhotos({
                    query: t.tag,
                    page: this._IMAGE_PAGE_COUNT,
                  })
                : await AppSettings.gApi.getUnsplashPhotos({
                    page: this._IMAGE_PAGE_COUNT,
                  })),
              (c = (GCore || []).length));
          else {
            var GClipAction = t.path;
            (GCore = await AppSettings.gApi.listMarket({
              path: "element.line" === GClipAction ? "element.line.tile" : GClipAction,
              tag: t.tag,
              limit: "90",
              skip: this._CURRENT_SKIP_COUNT + "",
              sort: "name",
            })),
              (r = (GCore || []).length);
          }
          r < 90 && 0 === c
            ? this._toggleShowMoreButton(false, false)
            : this._toggleShowMoreButton(true, false),
            GCore.length < 90
              ? ((this._CURRENT_SKIP_COUNT = -1), this._IMAGE_PAGE_COUNT++)
              : ((this._CURRENT_SKIP_COUNT += 90), this._IMAGE_PAGE_COUNT++);
        } catch (e) {}
        this._toggleLoading(false), n.call(this, e, t, GCore, _interopRequireDefault, i);
      }
      _toggleLoading(e) {
        e
          ? this._libraryPanel.find(".assets").addClass("loading")
          : this._libraryPanel.find(".assets").removeClass("loading");
      }
      _toggleShowMoreButton(e, t) {
        let require = this._libraryPanel.find(".assets").find(".button-wrapper");
        require.find(".load-more")[t ? "addClass" : "removeClass"]("hidden"),
          require[t ? "addClass" : "removeClass"]("loading"),
          require[e ? "removeClass" : "addClass"]("hidden");
      }
      _getPreviewURI(e) {
        return e.content && !e.url_t
          ? "data:"
              .concat(e.type || "image/svg+xml", ";base64,")
              .concat(p(e.content))
          : e.url_t || e.url || e.image.thumb;
      }
      _onItemDragStartHandler(e, t, n) {
        var _interopRequireDefault;
        (this._clickCheckTime = Date.now()),
          (_interopRequireDefault = n
            ? n.get(0).getBoundingClientRect()
            : t.target.getBoundingClientRect());
        var i = e.width || _interopRequireDefault.width || 50,
          GCore = e.height || _interopRequireDefault.height || 50,
          r = gDesigner.getActiveDocument().getScene().getActivePage();
        if (e.path.startsWith("element.line.tile"))
          GCore =
            (i =
              r.getGeometryBBox() && r.isFixedSized()
                ? 0.4 * r.getGeometryBBox().getWidth()
                : 320) / 10;
        else {
          var AppSettings = r.getGeometryBBox(),
            l = AppSettings && r.isFixedSized() ? AppSettings.getWidth() : 800,
            c = AppSettings && r.isFixedSized() ? AppSettings.getHeight() : 800;
          if (
            !e.path.startsWith("element.ui") &&
            !e.path.startsWith("element.icons")
          ) {
            var GClipAction = i / GCore;
            if (
              ((i = l / 3) > 300 && (i = 300),
              (GCore = i / GClipAction),
              (i = Math.round(i)),
              (GCore = Math.round(GCore)) > c)
            ) {
              var u = GCore;
              (GCore = c / 3) > 300 && (GCore = 300),
                (i = (i / e.height) * u),
                (i = Math.round(i)),
                (GCore = Math.round(GCore));
            }
          }
          (GCore *= gDesigner.getWindows().getActiveWindow().getView().getZoom()),
            (i *= gDesigner.getWindows().getActiveWindow().getView().getZoom());
        }
        if (!this._dragging) {
          var p = _interopRequireDefault.left + _interopRequireDefault.width / 2,
            g = _interopRequireDefault.top + _interopRequireDefault.height / 2;
          (this._dragOffset = { x: p - t.clientX, y: g - t.clientY }),
            (this._dragging = true),
            (this._currentElement = t.target),
            (this._currentItem = e),
            (this._previewSize = { w: i, h: GCore }),
            e.path.startsWith("element.line.tile")
              ? (this.dragPreview = $("<div/>")
                  .css("background", 'url("' + e.url + '")')
                  .css("background-repeat", "repeat-x")
                  .css("background-position", Math.round(GCore / 2) + "px 0px")
                  .css("position", "absolute")
                  .css("height", GCore / 2 + "px")
                  .css("width", i / 2 + "px")
                  .css("display", "none")
                  .appendTo("body"))
              : (e.content && !e.url
                  ? (this.dragPreview = $(e.content))
                  : (this.dragPreview = $("<img/>").attr(
                      "src",
                      e.url || (e.image && e.image.thumb)
                    )),
                this.dragPreview
                  .css("position", "absolute")
                  .css("height", GCore + "px")
                  .css("width", i + "px")
                  .css("display", "none")
                  .on("dragstart", function () {
                    return false;
                  })
                  .attr("draggable", false)
                  .appendTo("body"));
          var h = t.clientX,
            f = t.clientY;
          $(this.dragPreview).css("left", h + "px"),
            $(this.dragPreview).css("top", f + "px"),
            (this._itemDragListener = this._onItemDrag.bind(this)),
            (this._itemDragEndListener = this._onItemDragEndHandler.bind(this)),
            document.addEventListener("mousemove", this._itemDragListener),
            document.addEventListener("touchmove", this._itemDragListener),
            document.addEventListener("mouseup", this._itemDragEndListener),
            document.addEventListener("touchend", this._itemDragEndListener);
        }
      }
      _onItemDragEndHandler(e) {
        if (
          ($(this.dragPreview).remove(),
          Date.now() - this._clickCheckTime <= 200 || !this._dragMoved)
        )
          return (
            (this._dragMoved = false),
            document.removeEventListener("mousemove", this._itemDragListener),
            document.removeEventListener("touchmove", this._itemDragListener),
            document.removeEventListener("mouseup", this._itemDragEndListener),
            document.removeEventListener("touchend", this._itemDragEndListener),
            (this._dragging = false),
            (this._currentElement.style.visibility = "visible"),
            void this._addAsset(this._currentItem)
          );
        if (((this._dragMoved = false), this._dragging)) {
          var module = gDesigner.getActiveDocument();
          document.removeEventListener("mousemove", this._itemDragListener),
            document.removeEventListener("touchmove", this._itemDragListener),
            document.removeEventListener("mouseup", this._itemDragEndListener),
            document.removeEventListener("touchend", this._itemDragEndListener);
          var require = e.clientX,
            _interopRequireDefault = e.clientY;
          if (gDesigner.positionIsOnCanvas(require, _interopRequireDefault)) {
            var i = module.getActiveWindow().getView(),
              GCore = {};
            Object.assign(GCore, e),
              (GCore.clientX = require),
              (GCore.clientY = _interopRequireDefault),
              (GCore.offsetX =
                e.offsetX + (this._dragOffset && this._dragOffset.x)),
              (GCore.offsetY =
                e.offsetY + (this._dragOffset && this._dragOffset.y)),
              (GCore.pageX = e.pageX + (this._dragOffset && this._dragOffset.x)),
              (GCore.pageY = e.pageY + (this._dragOffset && this._dragOffset.y));
            var r = i._convertClientPositionFromMousePosition(GCore),
              AppSettings = i.getViewTransform(module.scene).mapPoint(r);
            (r = { x: AppSettings._x, y: AppSettings._y }), this._addAsset(this._currentItem, r);
          }
          (this._dragging = false),
            (this._currentElement.style.visibility = "visible");
        }
      }
      _onItemDrag(e) {
        (this._dragMoved = true),
          (this._currentElement.style.visibility = "hidden");
        var t = e.clientX + (this._dragOffset ? this._dragOffset.x : 0),
          n = e.clientY + (this._dragOffset ? this._dragOffset.y : 0);
        (t -= this._previewSize.w / 2),
          (n -= this._previewSize.h / 2),
          $(this.dragPreview).css("left", t + "px"),
          $(this.dragPreview).css("top", n + "px"),
          $(this.dragPreview).css("display", "");
      }
      resize() {
        this._debouncedResizeHandler();
      }
      _getSmallestColumnIndex(e) {
        return e.indexOf(Math.min.apply(null, e)) || 0;
      }
      _getThumbnailSize(e) {
        const module = 200 / e.image.width,
          require = parseInt(e.image.height * module) + 4;
        return new GCore.GRect(0, 0, 200, require);
      }
      _getChildrenHeight(e) {
        return $(e)
          .children()
          .toArray()
          .reduce((e, t) => e + $(t).height(), 0);
      }
    };
  }