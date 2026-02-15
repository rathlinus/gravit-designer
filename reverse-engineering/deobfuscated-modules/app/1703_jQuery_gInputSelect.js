/**
 * Webpack Module #1703
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(38) /* stub_requires_680 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* GCore */;
    const GMenu = require(238) /* GMenu */,
      a = require(444) /* module_444 */;
    var r = {
      value: function (e) {
        return arguments.length > 0
          ? ($(this).find("input").gInputBox("value", e), this)
          : $(this).find("input").gInputBox("value");
      },
      init: function (e) {
        return (
          this.each(function () {
            e = GCore.GUtil.extend({ list: [] }, e);
            const module = new GMenu();
            e.list
              .map((e) => ("object" != typeof e ? { title: e, data: e } : e))
              .forEach((e) => {
                let { title: require, data: GCore } = e;
                return module.createAddItem(require).setData(GCore);
              });
            const require = $(this);
            require.addClass("g-input-select")
              .append(
                $("<input/>")
                  .attr("type", "text")
                  .gInputBox(e)
                  .on("change", () => require.trigger("change"))
              )
              .append(
                $("<button></button>")
                  .css("display", e.list.length ? "" : "none")
                  .on("click", (e) => {
                    module.open(
                      e.target,
                      a.Position.Right_Bottom,
                      a.Position.Right_Bottom,
                      (t) => {
                        $(e.target)
                          .closest(".g-input-select")
                          .find("input")
                          .val(t.getData())
                          .trigger("change");
                      }
                    );
                  })
              );
          }),
          this
        );
      },
    };
    $.fn.gInputSelect = function (e) {
      return r[e]
        ? r[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.gInputSelect")
        : r.init.apply(this, arguments);
    };
  }