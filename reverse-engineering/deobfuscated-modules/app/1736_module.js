/**
 * Webpack Module #1736
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(91) /* module_91 */;
    const o = {
      init: function () {
        return (
          this.each(function () {
            const exports = $(this).addClass("g-share-user-input");
            $("<input>")
              .attr("type", "email")
              .keypress((e) => {
                const module = e.keyCode ? e.keyCode : e.which;
                if (
                  ((32 != module && 13 != module) ||
                    (e.stopPropagation(), e.preventDefault()),
                  13 == module)
                ) {
                  const t = $(e.target).closest("input"),
                    n = t.val();
                  return (
                    n &&
                      n.trim().length &&
                      ($("<div/>")
                        .addClass("email")
                        .append($("<span/>").text(n.trim()))
                        .append(
                          $("<span/>")
                            .addClass("gravit-icon-close")
                            .on("click", (e) => {
                              $(e.target).closest(".email").remove();
                            })
                        )
                        .insertBefore(t),
                      t.val("").focus()),
                    false
                  );
                }
              })
              .appendTo(exports);
          }),
          this
        );
      },
      users: function () {
        return this;
      },
    };
    $.fn.gShareUserInput = function (e) {
      return o[e]
        ? o[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error(
            "Method " + e + " does not exist on jQuery.gShareUserInput"
          )
        : o.init.apply(this, arguments);
    };
  }