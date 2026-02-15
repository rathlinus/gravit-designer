/**
 * Webpack Module #608
 * Type: class
 * Name: GCreateSymbolAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */, require(4) /* module_4 */, require(41) /* module_41 */, require(32) /* module_32 */, require(33) /* module_33 */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(67) /* GRichTooltipConfig */,
      r = require(18) /* module_18 */,
      s = require(106) /* GElementAction */,
      l = require(44) /* GSystemDialog */;
    function c() {
      c.TOOLTIP_CONFIG = {
        [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
          title: o.GLocale.get(
            new o.GLocaleKey("GCreateSymbolAction", "tooltip-title")
          ),
          description: o.GLocale.get(
            new o.GLocaleKey("GCreateSymbolAction", "tooltip-description")
          ),
          learnMore: "",
        }),
      };
    }
    o.GObject.inherit(c, s),
      (c.ID = "modify.createsymbol"),
      (c.TITLE = new o.GLocaleKey("GCreateSymbolAction", "title")),
      (c.SHORTCUT = [i.GKey.Constant.F8]),
      (c.TOOLTIP_CONFIG = null),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return c.TITLE;
      }),
      (c.prototype.getCategory = function () {
        return r.CATEGORY_MODIFY_SYMBOL;
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
              return t.filter((e) => e instanceof o.GSymbol).length > 1;
          }
        }
        return false;
      }),
      (c.prototype.isEnabled = function () {
        if (!s.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getIndividualSelection();
          if (module && module.length)
            for (
              var require = 0, i = new o.GSymbol(), a = module.length - 1;
              a >= 0;
              --a
            ) {
              var r = module[a];
              if (
                (r instanceof o.GSymbol && !r.getMasterSymbol()) ||
                (r.validateInsertion(i) &&
                  !r.getParent().isLocked() &&
                  i.validateInsertion(r.getParent()) &&
                  !o.GSymbol.containsUnsupportedNodes(r))
              ) {
                if (!(r instanceof o.GSymbol && r.isMaster())) return true;
                if (++require > 1) return true;
              }
            }
        }
        return false;
      }),
      (c.prototype.execute = function () {
        if (!this.isPro() || gDesigner.isEnabledProFeatures()) {
          var exports = 1,
            module = o.GLocale.get(
              new o.GLocaleKey(
                "GCreateSymbolAction",
                "createsymbol.defaultname"
              )
            ),
            require = module + " " + exports,
            i = gDesigner.getActiveDocument();
          if (i) {
            var a = i.getScene();
            if (a)
              (a.getSymbols() || []).forEach(function (i) {
                i instanceof o.GSymbol &&
                  i.isMaster() &&
                  i.getProperty("name") === require &&
                  (exports++, (require = module + " " + exports));
              }),
                l.prompt(
                  o.GLocale.get(
                    new o.GLocaleKey(
                      "GCreateSymbolAction",
                      "createsymbol.enternewname"
                    )
                  ),
                  (e) => {
                    if (gDesigner.getActiveDocument() && e) {
                      var module = gDesigner.getActiveDocument().getEditor(),
                        require = o.GNode.order(module.getIndividualSelection().slice());
                      module.beginTransaction();
                      try {
                        for (
                          var i = new o.GSymbol(), a = null, r = require.length - 1;
                          r >= 0;
                          --r
                        ) {
                          var s = require[r];
                          if (s instanceof o.GSymbol && s.convertToMaster(e))
                            require.splice(r, 1);
                          else if (
                            s.validateInsertion(i) &&
                            !o.GSymbol.containsUnsupportedNodes(s)
                          ) {
                            if (
                              !(a = s.getParent()).isLocked() &&
                              i.validateInsertion(a)
                            )
                              break;
                            a = null;
                          }
                        }
                        a && module.updateSelection(false, [o.GSymbol.create(require, a, e)]);
                      } finally {
                        module.commitTransaction(
                          o.GLocale.get(
                            new o.GLocaleKey("GCreateSymbolAction", "title")
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