/**
 * Webpack Module #1735
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(168) /* polyfill_Array_reduce */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(169) /* stub_requires_683 */;
    var GCore = require(1) /* GCore */;
    const GMenu = require(238) /* GMenu */,
      a = (e) => {
        e.empty().append(
          $("<div/>")
            .addClass("container")
            .append($("<span/>").addClass("gravit-icon-pages"))
            .append($("<span/>").addClass("caption"))
            .append($("<span/>").addClass("gravit-icon-down"))
        );
      },
      r = (e, t) => {
        e.empty()
          .append(
            $("<div />")
              .addClass("action-button")
              .append($("<span />").addClass("gravit-icon-touch-pages-panel"))
              .append($("<span />").addClass("caption"))
          )
          .append(t);
      },
      s = {
        init: function () {
          return this.each(function () {
            const exports = $(this),
              module = $("<button />")
                .addClass("dropdown-button")
                .append($("<span></span>").addClass("gravit-icon-down"));
            exports.data("g-page-button-dropdownbutton", module);
            let require = new GMenu(undefined, "g-page-menu");
            exports.addClass("g-page-button").gMenuButton({
              menu: () => {
                const module = exports.data("options") && exports.data("options").scene;
                return (
                  module &&
                    (require.clearItems(),
                    module
                      .getChildren()
                      .filter((e) => e instanceof GCore.GPage && e.isVisible())
                      .reduce(
                        (e, t) => (
                          e.createAddItem(t.getLabel(), () => {
                            t.setFlag(GCore.GNode.Flag.Active);
                          }),
                          e
                        ),
                        require
                      )),
                  require
                );
              },
              getActiveItem: () => {
                const module = exports.data("options") && exports.data("options").scene;
                if (module) {
                  const e = module.getActivePage();
                  if (e) return require.findItem(e.getLabel());
                }
                return null;
              },
              reference: () => (gDesigner.isTouchEnabled() ? module : null),
            }),
              gDesigner.isTouchEnabled() ? r(exports) : a(exports);
          });
        },
        scene: function (e) {
          const module = $(this),
            require = module.data("options") || {};
          return (
            require.scene !== e &&
              (require.scene &&
                require.scene.removeEventListener(
                  GCore.GNode.AfterFlagChangeEvent,
                  s._afterFlagChangeEvent,
                  this
                ),
              (require.scene = e),
              e &&
                (s._activatePage.call(this, e.getActivePage()),
                e.addEventListener(
                  GCore.GNode.AfterFlagChangeEvent,
                  s._afterFlagChangeEvent,
                  this
                ))),
            module.data("options", require),
            this
          );
        },
        reinit: function () {
          const exports = $(this);
          gDesigner.isTouchEnabled()
            ? r(exports, exports.data("g-page-button-dropdownbutton"))
            : a(exports);
          const module = (exports.data("options") || {}).scene;
          module &&
            (s._activatePage.call(this, module.getActivePage()),
            module.hasEventListeners(
              GCore.GNode.AfterFlagChangeEvent,
              s._afterFlagChangeEvent,
              this
            ) ||
              module.addEventListener(
                GCore.GNode.AfterFlagChangeEvent,
                s._afterFlagChangeEvent,
                this
              ));
        },
        release: function () {
          const exports = $(this),
            module = exports.data("options");
          return (
            module &&
              module.scene &&
              module.scene.removeEventListener(
                GCore.GNode.AfterFlagChangeEvent,
                s._afterFlagChangeEvent,
                this
              ),
            exports.remove(),
            this
          );
        },
        _afterFlagChangeEvent: function (e) {
          e.node instanceof GCore.GPage &&
            e.flag === GCore.GNode.Flag.Active &&
            s._activatePage.call(this, e.node);
        },
        _activatePage: function (e) {
          $(this)
            .find(".caption")
            .text(e ? e.getLabel() : "");
        },
      };
    $.fn.gPageButton = function (e) {
      return s[e]
        ? s[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.gPageButton")
        : s.init.apply(this, arguments);
    };
  }