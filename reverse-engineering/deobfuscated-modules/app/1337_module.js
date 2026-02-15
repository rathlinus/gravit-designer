/**
 * Webpack Module #1337
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    function o() {}
    require(4) /* stub_requires_668 */,
      require(13) /* stub_requires_679 */,
      (o.Orientation = { Vertical: "vertical", Horizontal: "horizontal" }),
      (function (e) {
        const module = {
          _toggleTransitions: function (t) {
            return e(this).toggleClass("g-transitions-off", !t), this;
          },
          _toggleVisibilty: function (t) {
            const require = e(this);
            if (require.hasClass("expanded") !== t)
              return (
                require.toggleClass("collapsed", !t).toggleClass("expanded", t),
                require.hasClass(o.Orientation.Vertical)
                  ? require
                      .children(".g-collapsible-button:first")
                      .find("span")
                      .toggleClass("gravit-icon-touch-arrow-up", !t)
                      .toggleClass("gravit-icon-touch-arrow-down", t)
                  : require
                      .siblings(".g-collapsible-button:first")
                      .find("span")
                      .toggleClass("gravit-icon-touch-arrow-right", !t)
                      .toggleClass("gravit-icon-touch-arrow-left", t),
                this
              );
          },
          init: function (n) {
            n = e.extend({ orientation: o.Orientation.Vertical }, n);
            const i = this;
            return this.each(function () {
              const o = e(this)
                .addClass("g-collapsible g-transitions-off expanded")
                .addClass(n.orientation);
              "vertical" === n.orientation
                ? o.prepend(
                    e("<div/>")
                      .addClass("g-collapsible-button")
                      .append(
                        e("<span/>").addClass("gravit-icon-touch-arrow-down")
                      )
                      .on("click", () => {
                        const e = o.hasClass("expanded");
                        module._toggleTransitions.call(i, true),
                          module._toggleVisibilty.call(i, !e),
                          o.trigger("visibilitychanged", [!e]);
                      })
                  )
                : o.before(
                    e("<div/>")
                      .addClass("g-collapsible-button")
                      .append(
                        e("<span/>").addClass("gravit-icon-touch-arrow-left")
                      )
                      .on("click", () => {
                        const e = o.hasClass("expanded");
                        module._toggleTransitions.call(i, true),
                          module._toggleVisibilty.call(i, !e, true),
                          o.trigger("visibilitychanged", [!e]);
                      })
                  );
            });
          },
          collapse: function () {
            return module._toggleVisibilty.call(this, false);
          },
          expand: function () {
            return module._toggleVisibilty.call(this, true);
          },
        };
        e.fn.gCollapsible = function (n) {
          return module[n]
            ? module[n].apply(this, Array.prototype.slice.call(arguments, 1))
            : "object" != typeof n && n
            ? void e.error(
                "Method " + n + " does not exist on jQuery.gCollapsible"
              )
            : module.init.apply(this, arguments);
        };
      })(jQuery),
      (exports.exports = o);
  }