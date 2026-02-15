/**
 * Webpack Module #1701
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(851) /* DataModule_851 */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      GFontListFormatter = require(1200) /* GFontListFormatter */,
      GFontsProviderManager = require(255) /* GFontsProviderManager */;
    function s(e, t) {
      var n = $(this);
      n.empty(),
        (n.data("g-fonts-panel").lastPreviewPosition = 0),
        l.call(this, e, t);
    }
    function l(e, t) {
      var n = $(this),
        GCore = this,
        GFontListFormatter = n.data("g-fonts-panel"),
        GFontsProviderManager = e.faces;
      if (GFontsProviderManager) {
        var s = function (e, t, n) {
            if (t && "_SPECIAL_" === t.getAttribute("name"))
              e.stopPropagation();
            else {
              if (
                (t && !n && (n = $(t).closest(".fonts-row").data("font")),
                n.special)
              )
                return (
                  gDesigner.stats("fontspanel_click_deletefont", n.family),
                  void e.stopPropagation()
                );
              gDesigner.stats("fontspanel_click_setfont", n.family),
                p.selection.call(GCore, n.family),
                GFontListFormatter.options.changeCallback && GFontListFormatter.options.changeCallback(n),
                e.preventDefault();
            }
          },
          l = null;
        t && t.length && (l = t);
        var u = [],
          g = [];
        for (let e = 0; e < GFontsProviderManager.length; ++e) {
          const t = GFontsProviderManager[e];
          var h = $("<div></div>")
            .addClass("fonts-row")
            .data("font", t)
            .on("mousedown", function (e) {
              (gDesigner.isTouchEnabled() && !e.originalEvent.isTrusted) ||
                s(e, e.target);
            })
            .on("click", (e) => {
              gDesigner.isTouchEnabled() && s(e, e.target);
            })
            .append(
              $("<div></div>")
                .addClass("info")
                .text(t.displayname || t.family)
            );
          u.push(h),
            t.cachedPreview
              ? ($("<div></div>")
                  .addClass("preview")
                  .append(t.cachedPreview)
                  .appendTo(h),
                (GFontListFormatter.lastPreviewPosition += 22))
              : t.addPreviewCallback && ((t.row = h), g.push(t));
        }
        var f = 0;
        if (l)
          for (let e = 0; e < g.length; e++) {
            const t = g[e];
            if ((t.displayname || t.family).localeCompare(l) >= 0) {
              f = e;
              break;
            }
          }
        (0, CollaborationMergeUtils.iterateAroundIndex)(g, f, (e) => {
          e.addPreviewCallback.call(
            e,
            function (e) {
              this.cachedPreview ||
                ((e instanceof Element || e instanceof jQuery) &&
                  ((this.cachedPreview = e),
                  (GFontListFormatter.lastPreviewPosition += 22),
                  (function (e, t) {
                    null === c &&
                      (c = setTimeout(function () {
                        for (var e of d) e.where.append(e.what);
                        (d = []), (c = null);
                      }));
                    d.push({ what: e, where: t });
                  })(
                    $("<div></div>").addClass("preview").append(e),
                    this.row
                  )));
            }.bind(e)
          );
        }),
          n.append(u),
          n.on("keydown", function (e, t) {
            if (13 === (t || e.which || e.keyCode)) {
              var n = $(".g-fonts-panel").find(".fonts-row:hover").data("font");
              n && n.family && s(e, null, n);
            }
          });
      }
    }
    var c = null,
      d = [];
    function u(e, t) {
      var n = this,
        GCore = $(this).data("g-fonts-panel"),
        CollaborationMergeUtils = GCore.manager;
      e !== GCore.previousQuery &&
        ((GCore.previousQuery = e),
        CollaborationMergeUtils.query((e) => {
          s.call(n, e, t);
        }, e));
    }
    var p = {
      init: function (e) {
        return (
          (e = $.extend(
            { search: null, preview: null, changeCallback: null },
            e
          )),
          this.each(function () {
            var t = this,
              n = gDesigner
                .getWorkspace()
                .getFontManager()
                .getDefaultFont()
                .getFamily(),
              GCore = GFontsProviderManager.getInstance(),
              CollaborationMergeUtils = $(this)
                .empty()
                .addClass("g-fonts-panel")
                .data("g-fonts-panel", {
                  options: e,
                  lastPreviewPosition: 0,
                  search: e.search || null,
                  changeCallback: e.changeCallback || null,
                  manager: GCore,
                });
            GCore.addEventListener(GFontsProviderManager.ResetEvent, () => {
              CollaborationMergeUtils.addClass("g-loading"),
                GCore.query((e) => {
                  s.call(t, e, n), CollaborationMergeUtils.removeClass("g-loading"), (n = undefined);
                }, "%");
            }),
              CollaborationMergeUtils
                .on("scroll", function () {
                  var e = CollaborationMergeUtils.scrollTop(),
                    n = CollaborationMergeUtils.data("g-fonts-panel"),
                    GCore = n.lastPreviewPosition,
                    GFontListFormatter = CollaborationMergeUtils.height(),
                    GFontsProviderManager = n.manager;
                  GFontsProviderManager.isLoading() ||
                    (e / Math.max(1, GCore - GFontListFormatter) > 0.7 &&
                      GFontsProviderManager.loadMore((e) => {
                        l.call(t, e, "Open Sans");
                      }, n.search));
                })
                .on("focusin", function (e) {
                  e.preventDefault();
                });
          })
        );
      },
      selection: function (e) {
        var t = this,
          n = $(this),
          GCore = n.data("g-fonts-panel");
        if (!arguments.length) {
          var CollaborationMergeUtils = n.find(".fonts-row.g-selected");
          return CollaborationMergeUtils.length ? CollaborationMergeUtils.data("font").family : null;
        }
        return (
          n.find(".fonts-row").each(function (CollaborationMergeUtils, GFontListFormatter) {
            var GFontsProviderManager = $(GFontListFormatter),
              s = GFontsProviderManager.data("font").family === e;
            if ((GFontsProviderManager.toggleClass("g-selected", s), s)) {
              var c = GCore.manager;
              if (
                !GFontsProviderManager.data("font").cachedPreview ||
                (CollaborationMergeUtils > 0 &&
                  !$(n.find(".fonts-row")[CollaborationMergeUtils - 1]).data("font").cachedPreview)
              )
                for (
                  var d = c.loadMore(l.bind(t), GCore.search);
                  0 !== d && d < CollaborationMergeUtils;

                ) {
                  if (d >= (d = c.loadMore(l.bind(t), GCore.search))) break;
                }
            }
          }),
          this
        );
      },
      selectUpper: function () {
        var e = $(this),
          t = e.data("g-fonts-panel"),
          n = e.find(".fonts-row.g-selected").prev().data("font");
        n ||
          (n = e
            .find(".fonts-row")
            .filter(function () {
              return $(this).position().top <= $(this).outerHeight();
            })
            .data("font")),
          n &&
            (p.selection.call(this, n.family),
            p.focusCurrent.call(this),
            t.options.changeCallback && t.options.changeCallback(n));
      },
      selectLower: function () {
        var e = $(this),
          t = e.data("g-fonts-panel"),
          n = e.find(".fonts-row.g-selected").next().data("font");
        n ||
          (n = e
            .find(".fonts-row")
            .filter(function () {
              return $(this).position().top <= $(this).outerHeight();
            })
            .data("font")),
          n &&
            (p.selection.call(this, n.family),
            p.focusCurrent.call(this),
            t.options.changeCallback && t.options.changeCallback(n));
      },
      search: function (e, t) {
        var n = $(this),
          GCore = n.data("g-fonts-panel");
        return arguments.length
          ? (e !== GCore.search && ((GCore.search = e), p.refresh.call(this, false, t)),
            this)
          : GCore.search;
      },
      focusCurrent: function () {
        var e,
          t = $(this),
          n = t.find(".fonts-row.g-selected"),
          GCore = 0;
        n &&
          n.position() &&
          (n.position().top > t.height() - n.outerHeight()
            ? ((e = n.index()),
              t.find(".fonts-row:lt(" + e + ")").each(function () {
                GCore += $(this).outerHeight(true);
              }),
              t.scrollTop(GCore - t.height() + n.outerHeight(true)))
            : n.position().top < 0 &&
              ((e = n.index()),
              t.find(".fonts-row:lt(" + e + ")").each(function () {
                GCore += $(this).outerHeight(true);
              }),
              t.scrollTop(GCore)));
      },
      reload: function (e) {
        ($(this).data("g-fonts-panel").previousQuery = null),
          p.refresh.call(this, false, e);
      },
      refresh: function (e, t) {
        var n = $(this),
          CollaborationMergeUtils = n.data("g-fonts-panel"),
          GFontListFormatter = CollaborationMergeUtils.search ? CollaborationMergeUtils.search + "%" : "%";
        GFontListFormatter !== CollaborationMergeUtils.previousQuery &&
          (n.empty(),
          (CollaborationMergeUtils.lastPreviewPosition = 0),
          n.text(
            GCore.GLocale.get(new GCore.GLocaleKey("GCommonNames", "text.loading")) +
              "..."
          ),
          e && (CollaborationMergeUtils.search = null),
          u.call(this, GFontListFormatter, t));
      },
      stylesForFont: function (e, t) {
        var n = null,
          GCore = $(this).data("g-fonts-panel").manager;
        if (GCore.isCacheEmpty()) return void (t && GCore.query(t, "%", true));
        let CollaborationMergeUtils = (0, GFontListFormatter.getFontFamily)(e, GCore.searchFamilyInCache.bind(GCore));
        if (CollaborationMergeUtils && CollaborationMergeUtils.fonts && CollaborationMergeUtils.fonts.length) {
          n = [];
          for (var GFontsProviderManager = 0; GFontsProviderManager < CollaborationMergeUtils.fonts.length; GFontsProviderManager++) n.push(CollaborationMergeUtils.fonts[GFontsProviderManager].style);
        }
        return n;
      },
      stylesForWeight: function (e, t, n, GCore) {
        var CollaborationMergeUtils = null,
          GFontsProviderManager = $(this).data("g-fonts-panel").manager;
        if (GFontsProviderManager.isCacheEmpty()) return void (n && GFontsProviderManager.query(n, "%", true));
        let s = (0, GFontListFormatter.getFontFamily)(t, GFontsProviderManager.searchFamilyInCache.bind(GFontsProviderManager));
        if (s && s.fonts && s.fonts.length) {
          CollaborationMergeUtils = [];
          for (var l = 0; l < s.fonts.length; l++)
            s.fonts[l].weight === e &&
              (GCore && s.fonts[l].hasOwnProperty("family")
                ? s.fonts[l].family === t && CollaborationMergeUtils.push(s.fonts[l].style)
                : CollaborationMergeUtils.push(s.fonts[l].style));
        }
        return CollaborationMergeUtils;
      },
      subfamiliesForWeight: function (e, t, n) {
        var GCore = null,
          CollaborationMergeUtils = $(this).data("g-fonts-panel").manager;
        if (CollaborationMergeUtils.isCacheEmpty()) return void (n && CollaborationMergeUtils.query(n, "%", true));
        let GFontsProviderManager = (0, GFontListFormatter.getFontFamily)(t, CollaborationMergeUtils.searchFamilyInCache.bind(CollaborationMergeUtils));
        if (GFontsProviderManager && GFontsProviderManager.fonts && GFontsProviderManager.fonts.length) {
          GCore = [];
          for (var s = 0; s < GFontsProviderManager.fonts.length; s++)
            GFontsProviderManager.fonts[s].weight === e &&
              GCore.push({
                realName: GFontsProviderManager.fonts[s].family || GFontsProviderManager.family,
                subFamily: GFontsProviderManager.fonts[s].subfamily,
              });
        }
        return GCore;
      },
      weightsForFont: async function (e, t, n) {
        var GCore = null,
          CollaborationMergeUtils = $(this).data("g-fonts-panel").manager;
        if (CollaborationMergeUtils.isCacheEmpty()) return void (t && CollaborationMergeUtils.query(t, "%", true));
        let GFontsProviderManager = (0, GFontListFormatter.getFontFamily)(e, CollaborationMergeUtils.searchFamilyInCache.bind(CollaborationMergeUtils));
        if (
          (GFontsProviderManager.isLocalFont &&
            ((GFontsProviderManager.fonts = await (0, GFontListFormatter.parseNativeFonts)(GFontsProviderManager.fonts)),
            delete GFontsProviderManager.isLocalFont),
          GFontsProviderManager && GFontsProviderManager.fonts && GFontsProviderManager.fonts.length)
        ) {
          GCore = [];
          for (var s = 0; s < GFontsProviderManager.fonts.length; s++)
            n &&
              GFontsProviderManager.fonts[s].hasOwnProperty("family") &&
              GFontsProviderManager.fonts[s].family === e &&
              GCore.push(GFontsProviderManager.fonts[s].weight),
              GCore.push(GFontsProviderManager.fonts[s].weight);
        }
        return GCore;
      },
      fontDisplayName: function (e, t) {
        var n = $(this).data("g-fonts-panel").manager;
        if (n.isCacheEmpty()) return void (t && n.query(t, "%", true));
        let GCore = (0, GFontListFormatter.getFontFamily)(e, n.searchFamilyInCache.bind(n));
        return (GCore && (GCore.displayname || GCore.family)) || e;
      },
      fontsLength: function () {
        return $(this).find(".fonts-row").length;
      },
    };
    $.fn.gFontsPanel = function (e) {
      return p[e]
        ? p[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
        : p.init.apply(this, arguments);
    };
  }