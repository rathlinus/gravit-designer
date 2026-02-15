/**
 * Webpack Module #1720
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */;
    var GCore = require(1) /* GCore */,
      AppSettings = require(10) /* AppSettings */;
    const a = {
      init: function (e) {
        e = $.extend(
          {
            clazz: null,
            defaultText: GCore.GLocale.get(
              new GCore.GLocaleKey("GUnshareButton", "text.unshare-with-me")
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
                    const GCore = module.data("gunsharebutton").storeItem.getId(),
                      a = n.getUID();
                    console.log(
                      "About to call unshare with item id: %s and user id: %s",
                      GCore,
                      a
                    ),
                      await AppSettings.gApi.unshareWithUser(GCore, a),
                      "function" == typeof e.unshareCallback &&
                        e.unshareCallback();
                  }));
            }),
          this
        );
      },
      update: function (e) {
        const { disabled: module, hidden: require } = e,
          GCore = $(this);
        module ? GCore.addClass("g-disabled") : GCore.removeClass("g-disabled"),
          require ? GCore.hide() : GCore.show();
        gDesigner.getShareManager().isShareProRestricted() && GCore.gPro();
        const AppSettings = GCore.data("gunsharebutton");
        return (
          (AppSettings.storeItem = e.storeItem),
          e.unshareCallback && (AppSettings.options.unshareCallback = e.unshareCallback),
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