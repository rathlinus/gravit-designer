/**
 * Webpack Module #1673
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(57) /* module_57 */;
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
        let t = l._getTooltipElement();
        if (a || e) {
          var n = $(a || e).closest("[data-title]");
          if (n.length) {
            var r = n[0].getBoundingClientRect(),
              c = n.attr("data-title"),
              d = parseInt(n.attr("data-custom-left-offset") || 0),
              u = !!parseInt(n.attr("data-wrap") || 0);
            if (r && c) {
              t.addClass("visible").toggleClass("wrap", u).text(c);
              var p = r.left + r.width / 2 - t.outerWidth() / 2 + "px",
                g = r.top + r.height + "px";
              t.css({ left: p, top: g }),
                t.offset().top + r.height > l._getBodyHeight() &&
                  t.css("top", r.top - r.height + "px");
              const e = l._getBodyWidth();
              if (d + t.offset().left + t.outerWidth() > e) {
                let n =
                  t.offset().left - (t.offset().left + t.outerWidth() - e) + d;
                t.css("left", n + "px");
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
        let t = $(e.target).closest("[data-title]"),
          n =
            t.data("gRichTooltip") ||
            t.parent().data("gRichTooltip") ||
            t.children().eq(0).data("gRichTooltip");
        t.length > 0 &&
          !n &&
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
    e.exports = l;
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