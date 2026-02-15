/**
 * Webpack Module #1734
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(290) /* module_290 */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(38) /* stub_requires_680 */;
    const { watchDog: o } = require(40) /* CollaborationMergeUtils */,
      i = require(433) /* module_433 */,
      a = {
        init: function (e) {
          return (
            (e = $.extend({ defaultRole: null, buttons: [] }, e)),
            this.each(function () {
              const module = i.ROLES.ALL.filter((e) => e.isAssignable()),
                require = $("<div/>")
                  .gOverlay({
                    padding: false,
                    clazz: "g-role-selector-overlay",
                    releaseOnClose: false,
                  })
                  .addClass("g-role-selector-container")
                  .append(
                    $("<div/>")
                      .addClass("g-role-selector-roles")
                      .append(
                        module.map((e) =>
                          $("<div/>")
                            .attr("role-id", e.id)
                            .addClass("g-role-selector-role")
                            .append(
                              $("<span/>")
                                .addClass("icon")
                                .addClass("gravit-icon-role-checked")
                            )
                            .append(
                              $("<div/>")
                                .addClass("g-role-selector-role-container")
                                .append(
                                  $("<span/>")
                                    .addClass("name")
                                    .text(e.name)
                                    .gPro({
                                      pro: !!e.pro,
                                      badgeAlwaysVisible: true,
                                    })
                                )
                                .append(
                                  $("<span/>")
                                    .addClass("text")
                                    .text(e.description)
                                )
                            )
                            .on(
                              "click",
                              o.trap(
                                () => {
                                  a.role.call(this, e),
                                    $(this).trigger("rolechange", e),
                                    require.gOverlay("close");
                                },
                                () => !e.pro
                              )
                            )
                        )
                      )
                  );
              e.buttons &&
                e.buttons.length &&
                (require.append($("<hr/>")),
                require.append(
                  $("<div/>")
                    .addClass("g-role-selector-buttons")
                    .append(
                      e.buttons.map((e) => {
                        let {
                          icon: module,
                          label: o,
                          click: i,
                          closeOnClick: a,
                        } = e;
                        return $("<div/>")
                          .addClass("g-role-selector-button")
                          .append(
                            $("<span/>")
                              .addClass("icon")
                              .addClass(module || "")
                          )
                          .append($("<span/>").addClass("label").text(o))
                          .on("click", () => {
                            i(), a && require.gOverlay("close");
                          });
                      })
                    )
                ));
              const r = $(this)
                  .data("options", e)
                  .data("overlay", require)
                  .addClass("g-role-selector")
                  .append($("<label/>"))
                  .append($("<span/>").addClass("gravit-icon-down"))
                  .on("click", (e) => {
                    require.gOverlay("open", $(e.target).closest(".g-role-selector"));
                  }),
                s = e.defaultRole || module[0];
              return a.role.call(this, s), r;
            })
          );
        },
        role: function (e) {
          let module =
            !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
          if (arguments.length > 0) {
            const n = $(this);
            let o = module && n.data("options") ? n.data("options").role : null;
            (n.data("options").previousRole = o),
              (n.data("options").role = e),
              n.find("label").text(e.name);
            const i = n.data("overlay");
            return (
              i
                .find(".g-role-selector-role.g-selected")
                .removeClass("g-selected"),
              i.find('[role-id="'.concat(e.id, '"]')).addClass("g-selected"),
              this
            );
          }
          return $(this).data("options").role;
        },
        restoreRole: function () {
          const exports = $(this);
          exports.data("options").previousRole &&
            a.role.call(this, exports.data("options").previousRole, false);
        },
      };
    $.fn.gRoleSelector = function (e) {
      return a[e]
        ? a[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error(
            "Method " + e + " does not exist on jQuery.gRoleSelector"
          )
        : a.init.apply(this, arguments);
    };
  }