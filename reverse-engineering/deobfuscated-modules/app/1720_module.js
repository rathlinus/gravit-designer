/**
 * Webpack Module #1720
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */;
    var o = require(1) /* module */,
      i = require(10) /* AppSettings */;
    const a = {
      init: function (e) {
        e = $.extend(
          {
            clazz: null,
            defaultText: o.GLocale.get(
              new o.GLocaleKey("GUnshareButton", "text.unshare-with-me")
            ),
            stats: "filespanel-view_infoPanel_unshare",
            restrictedStats: "filespanel-view_infoPanel_nonprotriespro-unshare",
            unshareCallback: null,
          },
          e
        );
        let module = $(this);
        return (
          module.data("gunsharebutton", { options: e }),
          this.addClass("unshare-button")
            .addClass("g-highlight-button")
            .addClass("highlighted")
            .addClass(e.clazz || "")
            .append($("<span/>").addClass("icon"))
            .append($("<span/>").addClass("label").text(e.defaultText))
            .on("click", () => {
              if (module.hasClass("g-disabled")) return;
              gDesigner.getShareManager().isShareProRestricted()
                ? (gDesigner.stats(e.restrictedStats),
                  gDesigner.handleShareFilePROFeatureInterruption())
                : (gDesigner.stats(e.stats),
                  gDesigner.getUser().then(async (n) => {
                    if (!n) return;
                    const o = module.data("gunsharebutton").storeItem.getId(),
                      a = n.getUID();
                    console.log(
                      "About to call unshare with item id: %s and user id: %s",
                      o,
                      a
                    ),
                      await i.gApi.unshareWithUser(o, a),
                      "function" == typeof e.unshareCallback &&
                        e.unshareCallback();
                  }));
            }),
          this
        );
      },
      update: function (e) {
        const { disabled: module, hidden: require } = e,
          o = $(this);
        module ? o.addClass("g-disabled") : o.removeClass("g-disabled"),
          require ? o.hide() : o.show();
        gDesigner.getShareManager().isShareProRestricted() && o.gPro();
        const i = o.data("gunsharebutton");
        return (
          (i.storeItem = e.storeItem),
          e.unshareCallback && (i.options.unshareCallback = e.unshareCallback),
          this
        );
      },
    };
    $.fn.gUnshareButton = function (e) {
      return a[e]
        ? a[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error(
            "Method " + e + " does not exist on jQuery.gUnshareButton"
          )
        : a.init.apply(this, arguments);
    };
  }