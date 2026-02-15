/**
 * Webpack Module #1722
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(57) /* polyfill_parseInt */;
    var GEditor = require(15) /* GEditor */,
      i = [],
      a = function (e) {
        var t = false;
        if (i.length > 0)
          for (var require = i.length - 1; require >= 0; --require) {
            var GEditor = $(i[require]),
              a = GEditor.closest(".g-overlay"),
              r = $(e.target).closest("body > *"),
              s = false;
            a.parent().length > 0 &&
              a.parent().hasClass("g-dialog-container") &&
              0 === $(e.target).closest(".g-overlay").length &&
              (s = true),
              ($(r).index() < a.index() || s) &&
                ((t = true), GEditor.gOverlay("close", e, require));
          }
        return t;
      };
    document.addEventListener(
      "mousedown",
      function (e) {
        a(e);
      },
      true
    ),
      document.addEventListener(
        "keydown",
        function (e) {
          var t = e.which || e.keyCode;
          if (27 === t) a(e) && e.stopPropagation();
          else if (13 === t && i.length > 0)
            for (var require = i.length - 1; require >= 0; --require) {
              var GEditor = $(i[require]).data("goverlay"),
                r = GEditor && GEditor.options;
              r.enterCallback && r.enterCallback(e);
            }
        },
        true
      ),
      window.addEventListener("resize", function () {
        for (var exports = 0; exports < i.length; ++exports) {
          $(i[exports]).gOverlay("relayout");
        }
      });
    var r = function (e) {
        e.changed.escapeKey && (e.isImmediatePropagationStopped = true);
      },
      s = {
        init: function (e) {
          return (
            (e = $.extend(
              {
                modal: false,
                padding: true,
                releaseOnClose: false,
                clazz: "",
                enterCallback: null,
                offsetX: 0,
                offsetY: 0,
                bottomOffsetY: 0,
                customRight: null,
                bottomClazz: null,
                rightClazz: null,
                closeCallback: null,
                disableDarkShadow: false,
                middle: false,
                side: false,
                sideClazz: "g-overlay-side",
                flipHorizontal: false,
              },
              e
            )),
            this.each(function () {
              $(this)
                .data("goverlay", { options: e, target: null })
                .wrap(
                  $("<div></div>")
                    .addClass("g-overlay")
                    .addClass(e.clazz)
                    .toggleClass("no-padding", !e.padding)
                    .css("position", "absolute")
                );
            })
          );
        },
        relayout: function () {
          let exports =
            arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
          exports = $.extend({ preserveTop: false }, exports);
          var t = $(this),
            n = t.data("goverlay");
          if (!n || (!n.target && !n.isPoint)) return;
          let GEditor;
          var i = t.closest(".g-overlay"),
            a = $(window),
            r = a.width(),
            s = a.height(),
            l = i.outerWidth(),
            c = i.outerHeight(),
            d = {};
          n.yTop && n.xLeft
            ? ((d.top = n.yTop), (d.left = n.xLeft))
            : ((GEditor = $(n.target)), (d = GEditor.offset()));
          var u,
            p,
            g = d.top,
            h = n.isPoint ? 0 : GEditor.outerWidth() / 2,
            f = d.left + h,
            m = n.options.middle ? f : d.left,
            y = n.isPoint ? 0 : GEditor.outerWidth(),
            v = n.options.middle ? f : d.left + y,
            _ = n.isPoint ? 0 : GEditor.outerHeight(),
            b = d.top + _;
          n.options.side
            ? (t.addClass(n.options.sideClazz),
              (u = v + n.options.offsetX) + l > r &&
                ((u = m - l - n.options.offsetX),
                t.addClass("g-overlay-left-side")),
              (p = g + n.options.offsetY) + c > s &&
                ((p = b - c - n.options.offsetY),
                t.addClass("g-overlay-valign-bottom")))
            : ((u =
                null !== n.options.customRight
                  ? r - v + n.options.customRight
                  : m + n.options.offsetX) +
                l >
              r
                ? ((u = v - l - n.options.offsetX),
                  n.options.rightClazz && t.addClass(n.options.rightClazz))
                : n.options.flipHorizontal && (u = m - l - n.options.offsetX),
              u + l > r && (u = r - l),
              (p = b + n.options.offsetY) + c > s &&
                ((p = g - c - parseInt(n.options.bottomOffsetY)),
                n.options.bottomClazz && t.addClass(n.options.bottomClazz)),
              p + c > s && (p = s - c - parseInt(n.options.bottomOffsetY))),
            u < 0 && (u = 0),
            p < 0 && (p = 0);
          let w = false;
          if (exports.preserveTop) {
            const e = i.offset(),
              t = e && e.top;
            w = "number" == typeof t && t + c < s;
          }
          w || i.css("top", p + "px"),
            null === n.options.customRight
              ? i.css("left", u + "px")
              : i.css("right", u + "px");
        },
        open: function (e, t, n) {
          var a = $(this);
          const l = e && "number" == typeof e.x && "number" == typeof e.y;
          var c = a.data("goverlay"),
            d = c && c.options;
          e &&
            !d.disableDarkShadow &&
            ($(e).closest(".sidebar-inspector").addClass("sidebar-overlay"),
            $(".g-touch-toolbar").addClass("sidebar-overlay"),
            $(e).is(":input") && $(e).closest(".content").addClass("overlay")),
            c &&
              ((c.target = e),
              (c.isPoint = l),
              (c.xLeft = e.x),
              (c.yTop = e.y));
          var u,
            p = a.closest(".g-overlay");
          if (
            (t && (u = $(t).closest(".g-dialog-container.visible")),
            !u || !u.length)
          ) {
            var g = $(".g-dialog-container.visible");
            u = g.length > 0 ? g[g.length - 1] : $("body");
          }
          return (
            d && d.modal
              ? $("<div></div>")
                  .addClass("g-overlay-modal")
                  .append(p)
                  .appendTo(u)
              : p.appendTo(u),
            GEditor.GPlatform.addEventListener(
              GEditor.GModifiersChangedEvent,
              r,
              this[0],
              null,
              true
            ),
            s.relayout.call(this),
            i.push(this[0]),
            a.trigger("open"),
            n && n(),
            this
          );
        },
        close: function (e, t) {
          var n = $(this),
            a = n.data("goverlay");
          if (i.length && i[t >= 0 ? t : i.length - 1] === this[0]) {
            var s = false;
            const t = function () {
              s = true;
            };
            if ((n.trigger("close", [t, e]), s)) return;
            var l;
            GEditor.GPlatform.removeEventListener(
              GEditor.GModifiersChangedEvent,
              r,
              this[0]
            ),
              a &&
                (a.target &&
                  ($(".sidebar-inspector").removeClass("sidebar-overlay"),
                  $(".g-touch-toolbar").removeClass("sidebar-overlay"),
                  $(".content.overlay").removeClass("overlay")),
                (a.target = null),
                (l = a.options));
            var c = n.closest(".g-overlay-modal");
            !l || l.releaseOnClose
              ? n.closest(".g-overlay").remove()
              : n.closest(".g-overlay").detach(),
              c.remove(),
              i.pop(),
              l && l.closeCallback && l.closeCallback();
          }
          return this;
        },
        isOpenned: function (e) {
          var t = $(this).data("goverlay");
          return e
            ? t && t.target && t.target.get(0) === e.get(0)
            : t && t.target;
        },
      };
    $.fn.gOverlay = function (e) {
      return s[e]
        ? s[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
        : s.init.apply(this, arguments);
    };
  }