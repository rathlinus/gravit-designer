/**
 * Webpack Module #1689
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    function o(e, t) {
      let require,
        o,
        i = this;
      return function () {
        return (
          (o = Array.prototype.slice.call(arguments, 0)),
          (require = clearTimeout(require, o)),
          (require = setTimeout(function () {
            e.apply(i, o), (require = 0);
          }, t)),
          this
        );
      };
    }
    ($.expr[":"].editable = function (e) {
      const module = $(e);
      if ("true" === module.attr("contenteditable") || e.isContentEditable)
        return true;
      if (module.is("input")) {
        const e = module.attr("type");
        return (
          !e ||
          "" === e ||
          "text" === e ||
          "password" === e ||
          "email" === e ||
          "number" === e ||
          "month" === e ||
          "search" === e ||
          "tel" === e ||
          "week" === e ||
          "url" === e ||
          "time" === e ||
          "datetime" === e ||
          "datetime-local" === e ||
          "date" === e
        );
      }
      return !!module.is("textArea");
    }),
      ($.expr[":"].textSelectable = function (e) {
        return "text" === $(e).css("user-select");
      }),
      $.extend($.fn, {
        debounce: function (e, t, n) {
          return this.bind(e, o.apply(this, [t, n])), this;
        },
      });
  }