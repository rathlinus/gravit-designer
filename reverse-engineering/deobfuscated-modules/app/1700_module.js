/**
 * Webpack Module #1700
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* module */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      barrel_sidebars = require(255) /* barrel_sidebars */,
      r = require(1118) /* module_1118 */,
      s = require(1199) /* module_1199 */,
      GContainer = require(85) /* GContainer */,
      GSystemDialog = require(44) /* GSystemDialog */;
    const { GPlatform: d } = require(15) /* module */;
    function u() {}
    GCore.GObject.inheritAndMix(u, GCore.GObject),
      (u.DISABLE_LOCAL_FONTS_ACCESS_WARING =
        "disable-local-fonts-access-warning"),
      (u._showLocalFontsAccessDialog = async function () {
        if (gDesigner.getSetting(u.DISABLE_LOCAL_FONTS_ACCESS_WARING, false))
          return false;
        if (!window.queryLocalFonts)
          return (
            GSystemDialog.alert(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GLocalFontsProvider",
                  "text.current-browser-unsupported"
                )
              )
            ),
            false
          );
        if (
          "denied" ===
          (await navigator.permissions.query({ name: "local-fonts" })).state
        ) {
          const e = [
            {
              label: GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "close")),
              highlighted: true,
              shortcut: GSystemDialog.Shortcut.Enter,
              closeOnClick: true,
            },
          ];
          let t = GCore.GLocale.get(
            new GCore.GLocaleKey(
              "GLocalFontsProvider",
              "text.permission-required-subtitle-others"
            )
          );
          d.webBrowser === d.constructor.WebBrowser.Edge &&
            (t = GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GLocalFontsProvider",
                "text.permission-required-subtitle-edge"
              )
            )),
            GSystemDialog.custom({
              icon: "error",
              className: "g-local-fonts-warning-dialog",
              closeable: true,
              title: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GLocalFontsProvider",
                  "text.permission-required-title"
                )
              ),
              subtitle: t,
              buttons: e,
              dontShowAgainCb: (e) => {
                gDesigner.setSetting(u.DISABLE_LOCAL_FONTS_ACCESS_WARING, !!e);
              },
            });
        }
        return false;
      });
    var p = function () {
        return (
          gContainer.getRuntime() !== GContainer.Runtime.Browser &&
          gContainer.getRuntime() !== GContainer.Runtime.Chrome &&
          gContainer.getRuntime() !== GContainer.Runtime.PWA
        );
      },
      g = function (e, t) {
        let require =
          arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null;
        var r = $("<a></a>")
            .data("provider", t)
            .addClass("tablinks")
            .append(GCore.GLocale.get(e))
            .on(
              "click",
              CollaborationMergeUtils.watchDog.trap(
                function (t) {
                  require
                    ? gDesigner.stats(
                        "fonts_click_protab",
                        GCore.GLocale.get(e, undefined, GCore.GLocaleLanguage.English)
                      )
                    : gDesigner.stats(
                        "fonts_click_tab",
                        GCore.GLocale.get(e, undefined, GCore.GLocaleLanguage.English)
                      );
                  var CollaborationMergeUtils = $(t.target),
                    r = CollaborationMergeUtils.closest(".tab");
                  r.find(".tablinks").removeClass("active"),
                    CollaborationMergeUtils.addClass("active");
                  var GContainer = CollaborationMergeUtils.data("provider");
                  if (GContainer)
                    GContainer == s && u._showLocalFontsAccessDialog(),
                      barrel_sidebars.enableProviders([GContainer]);
                  else {
                    var GSystemDialog = [];
                    if (
                      (r.find(".tablinks:not(.active)").each(function () {
                        var e = $(this).data("provider");
                        e && GSystemDialog.push(e);
                      }),
                      !p())
                    ) {
                      var d = gContainer.getSystemFontsProvider();
                      d || GSystemDialog.push(d);
                    }
                    GSystemDialog.length && barrel_sidebars.disableProviders(GSystemDialog);
                  }
                },
                () => !require,
                (t) => {
                  gDesigner.stats(
                    "fonts_nonprotriespro_protab",
                    GCore.GLocale.get(e)
                  );
                },
                require
              )
            ),
          GContainer = $("<li></li>")
            .addClass("tablink")
            .gPro({ pro: !!require, feature: require })
            .append(r);
        return GContainer;
      },
      h = function (e, t) {
        if (e) {
          var require = e.data("gfontsbutton");
          require && require.fontList && require.fontList.gFontsPanel("search", t, e.val());
        }
      };
    const f = function () {
      const exports = $(this).data("gfontsbutton");
      exports &&
        (exports.fontListContainer && exports.fontListContainer.gOverlay("close", this),
        exports.options &&
          exports.options.closeCallback &&
          exports.options.closeCallback.call(this));
    };
    var m = function (e) {
        var t = $(e),
          n = t.data("gfontsbutton");
        if (!n.fontList) {
          var CollaborationMergeUtils = $("<div></div>").addClass("header");
          n.fontList = $("<div></div>")
            .on("mousedown", function (e) {
              n.mouseMoved = false;
            })
            .on("mousemove", function (e) {
              n.mouseMoved || (n.mouseMoved = true);
            })
            .on("mouseup", function (t) {
              "_SPECIAL_" === t.target.name ||
              "g-fonts-panel" === t.target.className ||
              n.mouseMoved
                ? (n.mouseMoved = false)
                : gDesigner.isTouchEnabled() || f.call(e);
            })
            .gFontsPanel({
              preview: CollaborationMergeUtils,
              changeCallback: function (n) {
                t.val(n.displayName || n.family);
                var GCore = t.data("gfontsbutton");
                (GCore.tempFontFamily = n.displayName || n.family),
                  GCore.options.assignFontCallback(
                    "" === n.family ? null : n.family,
                    t
                  ),
                  setTimeout(function () {
                    e.select();
                  }, 1),
                  gDesigner.isTouchEnabled() && f.call(e);
              },
            });
          var GContainer = $("<div></div>")
            .addClass("g-fonts-panel")
            .addClass("no-overflow")
            .append(
              (function (e) {
                var t = $("<ul></ul>")
                  .addClass("tab")
                  .append(
                    g(new GCore.GLocaleKey("GFontsButton", "text.web-fonts"))
                  );
                if (
                  (t.append(
                    g(
                      new GCore.GLocaleKey("GFontsButton", "text.imported-fonts"),
                      r,
                      "font.import"
                    )
                  ),
                  gContainer.supportsLocalFonts() &&
                    t.append(
                      g(
                        new GCore.GLocaleKey("GFontsButton", "text.system-fonts"),
                        s
                      )
                    ),
                  p())
                ) {
                  var n = gContainer.getSystemFontsProvider();
                  n &&
                    t.append(
                      g(
                        new GCore.GLocaleKey("GFontsButton", "text.system-fonts"),
                        n
                      )
                    );
                }
                return t.find(".tablinks:first").trigger("click"), t;
              })()
            );
          (n.fontListContainer = $("<div></div>")),
            n.fontListContainer.append(GContainer);
          n.fontListContainer
            .append(n.fontList)
            .gOverlay({
              releaseOnClose: false,
              padding: false,
              enterCallback: function (e) {
                $(".g-fonts-panel").trigger("keydown", [e.which || e.keyCode]);
              },
              clazz: "g-font-list-overlay",
            })
            .on(
              "close",
              function (e, t, n) {
                barrel_sidebars.getInstance() && barrel_sidebars.getInstance().getLock() && t();
              }.bind(e)
            );
        }
      },
      y = {
        getFontList: function () {
          var e = $(this).data("gfontsbutton");
          return e ? (e.fontList || m(this), e.fontList) : null;
        },
        init: function (e) {
          return (
            this.each(function () {
              var t = this,
                n = $(this);
              (e = $.extend(
                {
                  closeCallback: function () {},
                  assignFontCallback: function () {},
                },
                e
              )),
                n
                  .data("gfontsbutton", {
                    options: e,
                    tempFontName: undefined,
                    tempFontFamily: undefined,
                    fontList: undefined,
                    fontContainer: undefined,
                    mouseMoved: false,
                  })
                  .on("focusin", function (e) {
                    n.attr("type", "text");
                  })
                  .on("focusout", function (e) {
                    n.attr("type", "button");
                    var t = n.data("gfontsbutton").tempFontName;
                    t && t.length && !n.val().length && n.val(t);
                  })
                  .on("input", function (e) {
                    h(n, n.val());
                  })
                  .on("keydown", function (e) {
                    var GCore = n.data("gfontsbutton");
                    if (GCore && GCore.fontList) {
                      var CollaborationMergeUtils = GCore.fontList,
                        barrel_sidebars = GCore.fontListContainer,
                        r = e.which || e.keyCode;
                      40 === r
                        ? CollaborationMergeUtils.gFontsPanel("selectLower")
                        : 38 === r
                        ? CollaborationMergeUtils.gFontsPanel("selectUpper")
                        : 13 === r &&
                          barrel_sidebars &&
                          (barrel_sidebars.gOverlay("close", t),
                          n.data("gfontsbutton").options.closeCallback.call(t));
                    }
                  })
                  .on("click", function (e) {
                    gDesigner.stats("fonts_expand_textfield"),
                      h(n, ""),
                      "text" !== n.attr("type") &&
                        (n.attr("type", "text"), t.select()),
                      (n.data("gfontsbutton").tempFontFamily = n.val());
                    var GCore = n.data("gfontsbutton").fontList,
                      CollaborationMergeUtils = n.data("gfontsbutton").fontListContainer;
                    GCore
                      ? (CollaborationMergeUtils.gOverlay("open", t, t), GCore.gFontsPanel("refresh", true))
                      : (m(this),
                        (GCore = n.data("gfontsbutton").fontList),
                        (CollaborationMergeUtils = n.data("gfontsbutton").fontListContainer).gOverlay(
                          "open",
                          t,
                          t
                        ),
                        GCore.gFontsPanel("refresh"));
                    var barrel_sidebars = function () {
                      GCore.gFontsPanel("selection", n.val()),
                        GCore.gFontsPanel("focusCurrent"),
                        n.select();
                    };
                    0 === GCore.gFontsPanel("fontsLength")
                      ? setTimeout(function () {
                          barrel_sidebars();
                        }, 100)
                      : barrel_sidebars();
                  });
            }),
            this
          );
        },
      };
    (exports.exports = u),
      ($.fn.gFontsButton = function (e) {
        return y[e]
          ? y[e].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof e && e
          ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
          : y.init.apply(this, arguments);
      });
  }