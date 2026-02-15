/**
 * Webpack Module #1728
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(290) /* module_290 */, require(57) /* module_57 */, require(4) /* module_4 */, require(13) /* module_13 */;
    var i,
      a,
      r,
      s = require(15) /* module */,
      l = require(1) /* module */,
      c = o(require(11) /* GUtil */),
      d = require(10) /* module_10 */,
      u = require(67) /* GRichTooltipConfig */,
      p = o(require(1342) /* GEnhancedTooltipsAction */),
      g = {
        init: function (e) {
          if (e) {
            if (!(e instanceof u.GRichTooltipConfig))
              throw new Error("Not a Tooltip Config");
            return (
              (e = $.extend(
                {
                  title: "No title",
                  isPro: false,
                  shortcut: null,
                  video: null,
                  pic: null,
                  description: null,
                  videoTimeout: 2e3,
                  middle: true,
                  marginLeft: 0,
                  side: false,
                  learnMore: null,
                  upgradeToProStatsValue: null,
                  forceShow: false,
                  flipHorizontal: false,
                },
                e.getConfig()
              )),
              d.IS_COREL && !e.forceShow
                ? this
                : this.each(function () {
                    const module = $(this);
                    (e._id = c.default.uuid(7)),
                      module.data("g-rich-tooltip", e),
                      module.on("mouseover", function (e) {
                        i && (clearTimeout(i), (i = null)),
                          a && (clearTimeout(a), (a = null));
                        var n = function () {
                          module.data("g-rich-tooltip-container-hovered", true),
                            g.showTooltip.call(module, e);
                        };
                        r ? n() : (a = setTimeout(n, 500));
                      }),
                      module.on("mouseout", function (e) {
                        a && (clearTimeout(a), (a = null)),
                          module.data("g-rich-tooltip-container-hovered", false),
                          g.hideTooltip.call(module, e);
                      }),
                      module.on("mousedown", function () {
                        a && (clearTimeout(a), (a = null));
                      });
                  })
            );
          }
        },
        showTooltip: function () {
          const exports = $(this),
            module = exports.data("g-rich-tooltip");
          if (r) {
            if (r.data("g-rich-tooltip-id") === module._id) return;
            g.close.call(exports);
          }
          gContainer.getProperty(p.default.StoragePropertyName).then((n) => {
            (module.enhanced = "boolean" != typeof n || n),
              (r = g.createTooltip(module)).on("mouseover", function () {
                i && (clearTimeout(i), (i = null)),
                  exports.data("g-rich-tooltip-self-tooltip-hovered", true);
              }),
              r.on("mouseout", function () {
                exports.data("g-rich-tooltip-self-tooltip-hovered", false),
                  g.hideTooltip.call(exports);
              }),
              r.on("click", function () {
                g.close.call(exports);
              }),
              r.gOverlay("open", exports);
          });
        },
        hideTooltip: function () {
          const exports = $(this);
          i = setTimeout(() => {
            exports.data("g-rich-tooltip-container-hovered") ||
              exports.data("g-rich-tooltip-self-tooltip-hovered") ||
              g.close.call(exports);
          }, 100);
        },
        createTooltip: function (e) {
          var t = 0,
            n = 4;
          return (
            e.side ? ((t = 0), (n = -6)) : e.middle && (t = -13),
            e.marginLeft && (t += parseInt(e.marginLeft)),
            e.flipHorizontal && (t = 0 - t),
            $("<div />")
              .addClass("g-rich-tooltip-container")
              .data("g-rich-tooltip-id", e._id)
              .append(g.createTooltipContent(e))
              .gOverlay({
                padding: true,
                releaseOnClose: true,
                bottomClazz: "from-bottom",
                rightClazz: "from-right",
                offsetY: n,
                offsetX: t,
                bottomOffsetY: 6,
                clazz:
                  "g-tooltip-content-overlay " +
                  (e.flipHorizontal ? "flip-horizontal" : ""),
                disableDarkShadow: true,
                middle: e.middle,
                side: e.side,
                flipHorizontal: e.flipHorizontal,
              })
          );
        },
        createTooltipContent: function (e) {
          const {
            title: module,
            isPro: require,
            shortcut: o,
            video: i,
            pic: a,
            description: r,
            videoTimeout: c,
            enhanced: d,
            learnMore: u,
            upgradeToProStatsValue: p,
          } = e;
          let g = r;
          const h = gDesigner.getLicense(),
            f = (h.isPro() || h.isTrial()) && h.isExpired(),
            m = u
              ? '<a href="'
                  .concat(u, '" target="_blank">')
                  .concat(
                    l.GLocale.get(
                      new l.GLocaleKey("GCommonNames", "text.learn-more")
                    ),
                    "</a>"
                  )
              : "";
          g = g ? "".concat(g, " ").concat(m) : m;
          const y = $("<div />")
            .addClass("g-tooltip-content-wrapper")
            .toggleClass("g-pro", require)
            .append(
              $("<div />")
                .addClass("g-tooltip-content-header")
                .toggleClass("simple", !d)
                .append(
                  o && o.length
                    ? $("<div />")
                        .addClass("g-tooltip-content-shortcut")
                        .text(s.GKey.shortcutToString(o))
                    : ""
                )
                .append(
                  $("<div />")
                    .toggleClass("limit-width", !(!o || !o.length))
                    .addClass("g-tooltip-content-title")
                    .text(module)
                )
            )
            .append(
              d && g
                ? $("<div />").addClass("g-tooltip-content-description").html(g)
                : ""
            )
            .append(
              d && i && i.length
                ? $("<div />").addClass("g-tooltip-content-video loading")
                : ""
            )
            .append(
              d && a && a.length
                ? $("<div />")
                    .addClass("g-tooltip-content-picture")
                    .append(
                      $("<img />")
                        .attr("width", 298)
                        .attr("height", 160)
                        .attr("src", a)
                    )
                : ""
            )
            .append(
              d && require && f
                ? $("<div />")
                    .addClass("g-tooltip-content-footer")
                    .append(
                      $("<div />")
                        .addClass("g-tooltip-footer-pro-badge")
                        .append(
                          $("<div />")
                            .addClass("g-tooltip-pro-text")
                            .text(
                              l.GLocale.get(
                                new l.GLocaleKey(
                                  "GCommonNames",
                                  "text.try-this-feature-pro-tooltip-text"
                                )
                              )
                            )
                        )
                    )
                    .on("click", () => {
                      gDesigner.openPaymentDialog(),
                        gDesigner.stats("action_tooltips_upgradetopro", p);
                    })
                : ""
            );
          return (
            d &&
              i &&
              setTimeout(() => {
                const e = y.find(".g-tooltip-content-video");
                if (e.length) {
                  const t = $("<video />")
                    .attr("width", 298)
                    .attr("height", 160)
                    .attr("src", i)
                    .attr("autoplay", true)
                    .attr("loop", true);
                  t.on("loadeddata", function () {
                    e.removeClass("loading");
                  }),
                    e.append(t);
                }
              }, c),
            y
          );
        },
        close: function () {
          r && (r.gOverlay("close"), (r = undefined));
        },
      };
    $.fn.gRichTooltip = function (e) {
      return g[e]
        ? g[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
        : g.init.apply(this, arguments);
    };
  }