/**
 * Webpack Module #1724
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* GCore */,
      i = {
        init: function (e) {
          return this.each(function () {
            var e = this,
              t = $(this).data("gpivot", { value: null }).addClass("g-pivot"),
              n = function (n) {
                $("<div></div>")
                  .addClass("side")
                  .attr("data-side", n)
                  .on("click", function (GCore) {
                    gDesigner.stats("pivot_click_change-button"),
                      i.value.call(e, n),
                      t.trigger("pivotchange", n);
                  })
                  .appendTo(t);
              };
            for (var a in ($("<div></div>").addClass("borderline").appendTo(t),
            GCore.GRect.Side))
              if (GCore.GRect.Side.hasOwnProperty(a)) {
                var r = GCore.GRect.Side[a];
                "string" == typeof r && n(r);
              }
          });
        },
        value: function (e) {
          var t = $(this),
            n = t.data("gpivot");
          return arguments.length
            ? ((n.value = e),
              t.find("div[data-side]").each(function (t, n) {
                var GCore = $(n);
                GCore.toggleClass("g-active", GCore.attr("data-side") === e);
              }),
              this)
            : n.value;
        },
      };
    $.fn.gPivot = function (e) {
      return i[e]
        ? i[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
        : i.init.apply(this, arguments);
    };
  }