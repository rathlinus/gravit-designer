/**
 * Webpack Module #1704
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* module */,
      i = {
        value: function (e) {
          const module = $(this);
          return arguments.length > 0
            ? (module.prop("checked", !!e), this)
            : i.isChecked.call(this);
        },
        unmount() {
          const exports = $(this);
          return exports.removeClass("g-checkbox-slider"), exports;
        },
        isChecked: function () {
          return $(this).is(":checked");
        },
        init: function (e) {
          return (
            this.each(function () {
              const module = $(this);
              e = GCore.GUtil.extend({ onChange: function () {} }, e);
              const require = i.isChecked.call(this);
              module.addClass("g-checkbox-slider")
                .prop("type", "checkbox")
                .prop("checked", require)
                .toggleClass("checked", require)
                .on("change", function (t) {
                  const require = i.isChecked.call(this);
                  $(this).toggleClass("checked", require), e.onChange(require);
                });
            }),
            this
          );
        },
      };
    $.fn.gCheckboxSlider = function (e) {
      return i[e]
        ? i[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error(
            "Method " + e + " does not exist on jQuery.gCheckboxSlider"
          )
        : i.init.apply(this, arguments);
    };
  }