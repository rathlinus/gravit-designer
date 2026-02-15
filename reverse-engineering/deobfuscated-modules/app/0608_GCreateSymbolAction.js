/**
 * Webpack Module #608
 * Type: class
 * Name: GCreateSymbolAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      a = require(67) /* GRichTooltipConfig */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */,
      GSystemDialog = require(44) /* GSystemDialog */;
    function c() {
      c.TOOLTIP_CONFIG = {
        [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GCreateSymbolAction", "tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey("GCreateSymbolAction", "tooltip-description")
          ),
          learnMore: "",
        }),
      };
    }
    GCore.GObject.inherit(c, GElementAction),
      (c.ID = "modify.createsymbol"),
      (c.TITLE = new GCore.GLocaleKey("GCreateSymbolAction", "title")),
      (c.SHORTCUT = [GEditor.GKey.Constant.F8]),
      (c.TOOLTIP_CONFIG = null),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return c.TITLE;
      }),
      (c.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY_SYMBOL;
      }),
      (c.prototype.getGroup = function () {
        return "structure/modify";
      }),
      (c.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled()
          ? "gravit-icon-create-symbol"
          : "gravit-icon-symbolmaster";
      }),
      (c.prototype.getShortcut = function () {
        return c.SHORTCUT;
      }),
      (c.prototype.isPro = function () {
        if (!gDesigner.isEnabledProFeatures()) {
          const e = gDesigner.getActiveDocument();
          if (e) {
            const t = e.getEditor().getIndividualSelection();
            if (t && t.length)
              return t.filter((e) => e instanceof GCore.GSymbol).length > 1;
          }
        }
        return false;
      }),
      (c.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getIndividualSelection();
          if (module && module.length)
            for (
              var require = 0, GEditor = new GCore.GSymbol(), a = module.length - 1;
              a >= 0;
              --a
            ) {
              var MenuItemBuilder = module[a];
              if (
                (MenuItemBuilder instanceof GCore.GSymbol && !MenuItemBuilder.getMasterSymbol()) ||
                (MenuItemBuilder.validateInsertion(GEditor) &&
                  !MenuItemBuilder.getParent().isLocked() &&
                  GEditor.validateInsertion(MenuItemBuilder.getParent()) &&
                  !GCore.GSymbol.containsUnsupportedNodes(MenuItemBuilder))
              ) {
                if (!(MenuItemBuilder instanceof GCore.GSymbol && MenuItemBuilder.isMaster())) return true;
                if (++require > 1) return true;
              }
            }
        }
        return false;
      }),
      (c.prototype.execute = function () {
        if (!this.isPro() || gDesigner.isEnabledProFeatures()) {
          var exports = 1,
            module = GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GCreateSymbolAction",
                "createsymbol.defaultname"
              )
            ),
            require = module + " " + exports,
            GEditor = gDesigner.getActiveDocument();
          if (GEditor) {
            var a = GEditor.getScene();
            if (a)
              (a.getSymbols() || []).forEach(function (GEditor) {
                GEditor instanceof GCore.GSymbol &&
                  GEditor.isMaster() &&
                  GEditor.getProperty("name") === require &&
                  (exports++, (require = module + " " + exports));
              }),
                GSystemDialog.prompt(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GCreateSymbolAction",
                      "createsymbol.enternewname"
                    )
                  ),
                  (e) => {
                    if (gDesigner.getActiveDocument() && e) {
                      var module = gDesigner.getActiveDocument().getEditor(),
                        require = GCore.GNode.order(module.getIndividualSelection().slice());
                      module.beginTransaction();
                      try {
                        for (
                          var GEditor = new GCore.GSymbol(), a = null, MenuItemBuilder = require.length - 1;
                          MenuItemBuilder >= 0;
                          --MenuItemBuilder
                        ) {
                          var GElementAction = require[MenuItemBuilder];
                          if (GElementAction instanceof GCore.GSymbol && GElementAction.convertToMaster(e))
                            require.splice(MenuItemBuilder, 1);
                          else if (
                            GElementAction.validateInsertion(GEditor) &&
                            !GCore.GSymbol.containsUnsupportedNodes(GElementAction)
                          ) {
                            if (
                              !(a = GElementAction.getParent()).isLocked() &&
                              GEditor.validateInsertion(a)
                            )
                              break;
                            a = null;
                          }
                        }
                        a && module.updateSelection(false, [GCore.GSymbol.create(require, a, e)]);
                      } finally {
                        module.commitTransaction(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey("GCreateSymbolAction", "title")
                          )
                        );
                      }
                    }
                  },
                  require
                );
          }
        } else gDesigner.handlePROFeatureInterruption();
      }),
      (c.prototype.getTooltipConfig = function (e) {
        return (e && c.TOOLTIP_CONFIG[e]) || null;
      }),
      (c.prototype.toString = function () {
        return "[Object GCreateSymbolAction]";
      }),
      (exports.exports = c);
  }