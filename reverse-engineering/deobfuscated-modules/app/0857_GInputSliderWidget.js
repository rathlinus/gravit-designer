/**
 * Webpack Module #857
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(193) /* polyfill_Object_keys */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* GCore */;
    function i() {}
    i.prototype.OPACITY_DEFAULT = {
      min: 0,
      max: 100,
      custom: true,
      cssClass: "opacity",
    };
    var a = function (e, t) {
        var n = $(e).data("options").min;
        return ((t - n) / ($(e).data("options").max - n)) * 100;
      },
      r = function (e, t) {
        $(e).trigger(t);
      },
      s = function (e, t, n) {
        var GCore = (function (e, t, n) {
          var GCore = $(e).data("options").min,
            i = $(e).data("options").max,
            a = $(e).find(".g-input-slider-track"),
            r = $(e).find(".g-input-slider-thumb"),
            s = a.width();
          t || (t = r.offset().left - a.offset().left);
          var l = (100 * t) / s;
          l < 0 ? (l = 0) : l > 100 && (l = 100), n && r.css("left", l + "%");
          var c = (l * (i - GCore)) / 100 + GCore;
          return c > i ? (c = i) : c < GCore && (c = GCore), c;
        })(e, t, n);
        $(e).attr("value", GCore), l(e, a(e, GCore)), r(e, "input");
      },
      l = function (e, t) {
        $(e).data("options").generic &&
          ($(e)
            .find(".g-input-slider-track .g-input-slider-background")
            .remove(),
          $(e)
            .find(".g-input-slider-track")
            .append(
              $("<div/>")
                .addClass("g-input-slider-background")
                .css({ width: t + "%" })
            ));
      };
    var c = {
      init: function (e, t) {
        return this.each(function () {
          t || (t = this);
          var n,
            GCore = e.min,
            i = e.max;
          (e.generic = !e.background && !e.custom),
            !e.maxDecimal &&
              e.step &&
              (e.maxDecimal =
                ((n = e.step),
                Math.floor(n) === n
                  ? 0
                  : n.toString().split(".")[1].length || 0));
          var l = 50;
          l < GCore ? (l = GCore) : l > i && (l = i);
          var c = e.generic ? 10 : 8;
          $(t)
            .addClass("g-input-slider")
            .addClass(e.generic ? "generic" : "custom")
            .addClass(e.cssClass ? e.cssClass : "")
            .attr("value", l)
            .attr("min", GCore)
            .attr("max", i)
            .data("options", e),
            e.generic || $(t).css("background", e.background);
          var d = $("<div></div>")
              .addClass("g-input-slider-track")
              .addClass(e.generic ? "generic" : "custom"),
            u = $("<div></div>")
              .addClass("g-input-slider-thumb")
              .addClass(e.generic ? "generic" : "custom");
          e.richTooltipConfig && u.gRichTooltip(e.richTooltipConfig),
            d.append(u);
          var p = false,
            g = function (e) {
              if ("disabled" !== $(t).attr("disabled")) {
                var n = e.clientX,
                  GCore = $(t).offset().left;
                s(t, (n = n - GCore - c / 2), true);
              }
            };
          $(d).on("mousedown", function (e) {
            1 == e.which &&
              ((p = true), $(u).addClass("active"), e.isTrusted && g(e));
          }),
            $(t).on("mousedown", function (e) {
              1 == e.which &&
                ((p = true), $(u).addClass("active"), e.isTrusted && g(e));
            });
          let h = false;
          $(u).on("mousedown", () => {
            h = true;
          });
          let f = false;
          $(t).on("touchstart", () => {
            f = false;
          }),
            $(t).on("touchmove", () => {
              f = true;
            }),
            $(window)
              .on("mousemove", function (e) {
                p && (e.isTrusted || h) && (g(e), e.preventDefault());
              })
              .mouseup(function (e) {
                (h = false),
                  p &&
                    (f || ((e) => !e.originalEvent.cancelable)(e) || g(e),
                    (p = false),
                    "disabled" !== $(t).attr("disabled") &&
                      (function (e) {
                        $(e)
                          .find(".g-input-slider-thumb")
                          .css("left", a(e, $(e).attr("value")) + "%"),
                          r(e, "change");
                      })(t),
                    $(u).removeClass("active"));
              }),
            $(t).append(d);
        });
      },
      value: function (e) {
        var t = $(this);
        if (t.data("options")) {
          var require = t.data("options").min,
            i = t.data("options").max,
            r = t.data("options").maxDecimal ? t.data("options").maxDecimal : 0;
          if (undefined === e)
            return isNaN(t.attr("value"))
              ? parseFloat(t.attr("value"))
              : GCore.GUtil.formatNumber(t.attr("value"), r);
          isNaN(e) || (e = GCore.GUtil.formatNumber(e, r)),
            e > i ? (e = i) : e < require && (e = require);
          var s = a(this, e);
          t.find(".g-input-slider-thumb").css("left", s + "%"),
            l(this, s),
            t.attr("value", e);
        }
        return this;
      },
      minValue: function () {
        return $(this).data("options").min;
      },
      maxValue: function () {
        return $(this).data("options").max;
      },
      disabled: function () {
        return arguments.length
          ? $(this).attr("disabled", arguments[0])
          : $(this).attr("disabled");
      },
    };
    (exports.exports = i),
      ($.fn.gInputSlider = function (e) {
        return c[e]
          ? c[e].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof e && e
          ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
          : c.init.apply(this, arguments);
      });
  }