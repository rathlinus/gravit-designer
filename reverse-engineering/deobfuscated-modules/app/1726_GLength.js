/**
 * Webpack Module #1726
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* GCore */,
      i = {
        init: function (e) {
          var t = [
            {
              unit: GCore.GLength.Unit.PX,
              name: GCore.GLocale.get(new GCore.GLocaleKey("GLength", "unit.px")),
              short: GCore.GLocale.get(
                new GCore.GLocaleKey("GLength", "unit.px.short"),
                undefined,
                GCore.GLocaleLanguage.English
              ),
            },
            {
              unit: GCore.GLength.Unit.MM,
              name: GCore.GLocale.get(new GCore.GLocaleKey("GLength", "unit.mm")),
              short: GCore.GLocale.get(
                new GCore.GLocaleKey("GLength", "unit.mm.short"),
                undefined,
                GCore.GLocaleLanguage.English
              ),
            },
            {
              unit: GCore.GLength.Unit.CM,
              name: GCore.GLocale.get(new GCore.GLocaleKey("GLength", "unit.cm")),
              short: GCore.GLocale.get(
                new GCore.GLocaleKey("GLength", "unit.cm.short"),
                undefined,
                GCore.GLocaleLanguage.English
              ),
            },
            {
              unit: GCore.GLength.Unit.IN,
              name: GCore.GLocale.get(new GCore.GLocaleKey("GLength", "unit.in")),
              short: GCore.GLocale.get(
                new GCore.GLocaleKey("GLength", "unit.in.short"),
                undefined,
                GCore.GLocaleLanguage.English
              ),
            },
            {
              unit: GCore.GLength.Unit.PC,
              name: GCore.GLocale.get(new GCore.GLocaleKey("GLength", "unit.pc")),
              short: GCore.GLocale.get(
                new GCore.GLocaleKey("GLength", "unit.pc.short"),
                undefined,
                GCore.GLocaleLanguage.English
              ),
            },
            {
              unit: GCore.GLength.Unit.PT,
              name: GCore.GLocale.get(new GCore.GLocaleKey("GLength", "unit.pt")),
              short: GCore.GLocale.get(
                new GCore.GLocaleKey("GLength", "unit.pt.short"),
                undefined,
                GCore.GLocaleLanguage.English
              ),
            },
          ];
          return (
            (e = $.extend({ short: false }, e)),
            this.each(function () {
              var n = $(this);
              if (n.is("select"))
                for (var GCore = 0; GCore < t.length; ++GCore)
                  n.append(
                    $("<option></option>")
                      .attr("value", t[GCore].unit)
                      .text(e.short ? t[GCore].short : t[GCore].name)
                  );
            })
          );
        },
      };
    $.fn.gUnit = function (e) {
      return i[e]
        ? i[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
        : i.init.apply(this, arguments);
    };
  }