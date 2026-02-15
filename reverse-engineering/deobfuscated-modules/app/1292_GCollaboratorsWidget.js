/**
 * Webpack Module #1292
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(38) /* stub_requires_680 */;
    const { GLocale: o, GLocaleKey: i } = require(1) /* GCore */;
    function a() {
      throw "No instantiate";
    }
    a.Mode = { Online: "online", Offline: "offline" };
    const r = {
      init: function () {
        return this.each(function () {
          $(this)
            .data("mode", a.Mode.Online)
            .addClass("g-collaborators")
            .append($("<div/>").addClass("g-collaborators-container"));
        });
      },
      mode: function (e) {
        const module = r[e];
        return module && ($(this).data("mode", e), module.call(this)), this;
      },
      online: function () {
        const exports = $(this).data("collaborators") || [];
        return r.collaborators.call(this, exports), this;
      },
      offline: function () {
        return (
          $(this)
            .find(".g-collaborators-container")
            .attr(
              "data-title",
              o.get(new i("GCollaborators", "text.you-are-offline-tooltip"))
            )
            .empty()
            .append(
              $("<div/>")
                .addClass("g-collaborator")
                .addClass("offline")
                .append($("<span/>").addClass("gravit-icon-offline"))
            )
            .append(
              $("<span/>").text(
                o.get(new i("GCollaborators", "text.you-are-offline"))
              )
            ),
          this
        );
      },
      collaborators: function (e) {
        if (arguments.length > 0) {
          if (!((e && e.length) || $(this).data("mode") !== a.Mode.Offline))
            return;
          const t = (e) => {
              const t = e.getUserColor(),
                n = e.getTooltip() || "",
                o = e.getIcon(),
                i = $("<div/>")
                  .addClass("g-collaborator")
                  .attr("data-title", n)
                  .css("border-color", t)
                  .css("background-color", t)
                  .append(
                    $("<span/>")
                      .addClass("icon")
                      .addClass(o || "")
                      .css("display", o ? "flex" : "none")
                  );
              if (e.hasOwnPictureAvatar()) {
                const t = e.avatar;
                "<svg>" === t.substr(0, "<svg>".length)
                  ? $(t).appendTo(i)
                  : i.css({ backgroundImage: 'url("'.concat(t, '")') });
              } else $("<span/>").text(e.getUserNameInitials()).appendTo(i);
              return i;
            },
            n = $(this)
              .data("collaborators", e)
              .find(".g-collaborators-container")
              .removeAttr("data-title")
              .empty()
              .append(e.slice(0, 4).map((e) => t(e)));
          if (e.length > 4) {
            const o = $("<div/>")
              .gOverlay({ clazz: "g-collaborators-overlay" })
              .append(
                $("<div/>")
                  .addClass("g-collaborators-container")
                  .append(
                    e
                      .slice(4, e.length)
                      .map((e) =>
                        $("<div/>")
                          .addClass("g-collaborator-row")
                          .append(t(e))
                          .append($("<span/>").text(e.name))
                      )
                  )
              );
            $("<div/>")
              .addClass("g-collaborator")
              .addClass("plus")
              .append($("<span/>").text("+ ".concat(e.length - 4)))
              .on("click", (e) => {
                o.gOverlay("open", $(e.target).closest(".g-collaborator"));
              })
              .appendTo(n);
          }
          return this;
        }
        return $(this).data("collaborators");
      },
    };
    ($.fn.gCollaborators = function (e) {
      return r[e]
        ? r[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error(
            "Method " + e + " does not exist on jQuery.gCollaborators"
          )
        : r.init.apply(this, arguments);
    }),
      (exports.exports = a);
  }