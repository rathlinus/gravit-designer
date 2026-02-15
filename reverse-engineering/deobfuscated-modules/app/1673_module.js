/**
 * Webpack Module #1673
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(57) /* module_57 */;
    var o,
      i,
      a = null,
      r = null,
      s = false;
    class l {
      static _getTooltipElement() {
        return r;
      }
      static _getBodyWidth() {
        return $("body").width();
      }
      static _getBodyHeight() {
        return $("body").height();
      }
      static showTooltip(e) {
        o = undefined;
        let module = l._getTooltipElement();
        if (a || e) {
          var require = $(a || e).closest("[data-title]");
          if (require.length) {
            var r = require[0].getBoundingClientRect(),
              c = require.attr("data-title"),
              d = parseInt(require.attr("data-custom-left-offset") || 0),
              u = !!parseInt(require.attr("data-wrap") || 0);
            if (r && c) {
              module.addClass("visible").toggleClass("wrap", u).text(c);
              var p = r.left + r.width / 2 - module.outerWidth() / 2 + "px",
                g = r.top + r.height + "px";
              module.css({ left: p, top: g }),
                module.offset().top + r.height > l._getBodyHeight() &&
                  module.css("top", r.top - r.height + "px");
              const e = l._getBodyWidth();
              if (d + module.offset().left + module.outerWidth() > e) {
                let n =
                  module.offset().left - (module.offset().left + module.outerWidth() - e) + d;
                module.css("left", n + "px");
              }
              l.resetIdle(), (s = true), (i = setTimeout(l.resetIdle, 500));
            }
          }
        }
      }
      static resetIdle() {
        undefined !== i && clearTimeout(i), (s = false);
      }
      static resetTooltip() {
        undefined !== o && (clearTimeout(o), (o = undefined)),
          r.removeClass("visible").text("").css({ left: "", top: "" });
      }
      static documentOverListener(e) {
        l.resetTooltip();
        let module = $(e.target).closest("[data-title]"),
          require =
            module.data("gRichTooltip") ||
            module.parent().data("gRichTooltip") ||
            module.children().eq(0).data("gRichTooltip");
        module.length > 0 &&
          !require &&
          ((a = e.target),
          s ? l.showTooltip() : (o = setTimeout(l.showTooltip, 500)));
      }
      static documentOutListener() {
        l.resetTooltip(), (a = null);
      }
      static init() {
        (r = $("<div></div>").addClass("g-tooltip").appendTo($("body"))),
          document.addEventListener("mouseover", l.documentOverListener),
          document.addEventListener("mouseout", l.documentOutListener);
      }
    }
    exports.exports = l;
    var c = {
      show: function () {
        l.showTooltip($(this)),
          document.addEventListener("click", l.resetTooltip, {
            once: true,
            capture: true,
          });
      },
    };
    $.fn.gTooltip = function (e) {
      return c[e]
        ? c[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
        : c.init.apply(this, arguments);
    };
  }