/**
 * Webpack Module #1697
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(26) /* polyfill_DOMCollection_iterator */;
    var o = require(1) /* module */,
      i = null;
    function a(e) {
      for (var module = 0; module < i.length; ++module) if (i[module].type === e) return i[module].icon;
      return null;
    }
    function r(e) {
      for (var module = 0; module < i.length; ++module)
        $('button[data-corner-type="' + i[module].type + '"]').toggleClass(
          "g-active",
          i[module].type === e
        );
    }
    var s = {
      init: function (e) {
        return (
          (e = $.extend({ rotate: 0 }, e)),
          i ||
            (i = [
              {
                type: o.GPathBase.CornerType.Rounded,
                title: o.GLocale.get(
                  new o.GLocaleKey("GPathBase", "corner.rounded")
                ),
                icon: "gravit-icon-corner-rounded",
              },
              {
                type: o.GPathBase.CornerType.InverseRounded,
                title: o.GLocale.get(
                  new o.GLocaleKey("GPathBase", "corner.inverse-rounded")
                ),
                icon: "gravit-icon-corner-inverse-rounded",
              },
              {
                type: o.GPathBase.CornerType.Bevel,
                title: o.GLocale.get(
                  new o.GLocaleKey("GPathBase", "corner.bevel")
                ),
                icon: "gravit-icon-corner-bevel",
              },
              {
                type: o.GPathBase.CornerType.Inset,
                title: o.GLocale.get(
                  new o.GLocaleKey("GPathBase", "corner.inset")
                ),
                icon: "gravit-icon-corner-inset",
              },
              {
                type: o.GPathBase.CornerType.Fancy,
                title: o.GLocale.get(
                  new o.GLocaleKey("GPathBase", "corner.fancy")
                ),
                icon: "gravit-icon-corner-fancy",
              },
            ]),
          this.each(function () {
            var t = this,
              n = $(this).data("gcornertype", {
                cornerType: null,
                notOverlay: e.notOverlay,
                rotate: e.rotate,
              }),
              a = function () {
                for (var a = [], r = 100 / i.length, l = 0; l < i.length; ++l)
                  a.push({
                    width: Math.round(r) + "%",
                    content: $("<button></button>")
                      .addClass("g-flat")
                      .toggleClass(
                        "g-active",
                        i[l].type === n.data("gcornertype").cornerType
                      )
                      .attr("data-corner-type", i[l].type)
                      .attr("data-title", i[l].title)
                      .append(
                        $("<span></span>")
                          .addClass(i[l].icon)
                          .css("transform", "rotate(" + e.rotate + "deg)")
                      )
                      .on("click", function () {
                        var i = $(this).attr("data-corner-type");
                        s.value.call(t, i), n.trigger("cornertypechange", i);
                        var a = "unkn",
                          r = Object.keys(o.GPathBase.CornerType);
                        for (var l of r)
                          if (i === o.GPathBase.CornerType[l]) {
                            a = l;
                            break;
                          }
                        gDesigner.stats("cornertypes_click_change", a),
                          e.notOverlay || c.gOverlay("close");
                      }),
                  });
                var c = $("<div></div>")
                  .css("width", e.notOverlay ? "100%" : "200px")
                  .gPropertyRow({ columns: a });
                e.notOverlay
                  ? n.append(c)
                  : c
                      .on("open", function () {
                        n.trigger("open");
                      })
                      .on("close", function () {
                        n.trigger("close");
                      })
                      .gOverlay({
                        releaseOnClose: true,
                        clazz: "corner-picker-overlay",
                      })
                      .gOverlay("open", t);
              };
            e.notOverlay
              ? a()
              : n.append("<span></span>").on("click", function () {
                  gDesigner.stats("cornertypes_click_open"), a();
                });
          })
        );
      },
      value: function (e) {
        var t = $(this),
          n = t.data("gcornertype");
        return arguments.length
          ? ((n.cornerType = e),
            n.notOverlay
              ? (t.find("." + a(n.cornerType)), r(n.cornerType))
              : t
                  .find("span")
                  .attr("class", a(n.cornerType))
                  .css("transform", "rotate(" + n.rotate + "deg)"),
            this)
          : n.cornerType;
      },
      update: function (e) {
        r(e);
      },
    };
    $.fn.gCornerTypePicker = function (e) {
      return s[e]
        ? s[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
        : s.init.apply(this, arguments);
    };
  }