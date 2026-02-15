/**
 * Webpack Module #1181
 * Type: class
 * Name: GMaskWithShapeAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */,
      GClipAction = require(809) /* GClipAction */;
    function l() {}
    GCore.GObject.inherit(l, GElementAction),
      (l.ID = "modify.mask-with-shape"),
      (l.TITLE = new GCore.GLocaleKey("GMaskWithShapeAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY;
      }),
      (l.prototype.getGroup = function () {
        return "structure-group";
      }),
      (l.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.SHIFT, "M"];
      }),
      (l.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-mask-with-shape" : "";
      }),
      (l.prototype.isEnabled = function () {
        return GClipAction.prototype.isEnabled.call(this);
      }),
      (l.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getEditor();
        e.beginTransaction();
        try {
          if (
            (GClipAction.prototype.execute.call(this, true, true),
            e.getSelection().length > 0)
          ) {
            var module = e.getSelection()[0];
            module.setProperty(
              "name",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GMaskWithShapeAction", "text.mask")
              )
            );
            var require = module.getPaintLayers();
            if (require) {
              for (
                var GEditor = (function (e) {
                    e: for (
                      var module = e.getFirstChild();
                      null !== module;
                      module = module.getNext()
                    )
                      if (
                        module instanceof GCore.GStylable.FillPaintLayer &&
                        module.getProperty("_pt") instanceof GCore.GLinearGradient
                      ) {
                        var require = module.getProperty("_pt");
                        require;
                        t: for (var GEditor = 0; GEditor < require.getStops().length; ++GEditor) {
                          var MenuItemBuilder = require.getStops()[GEditor].color.toScreenCSS();
                          if ("#FFFFFF" !== MenuItemBuilder && "#000000" !== MenuItemBuilder) {
                            require = null;
                            break t;
                          }
                        }
                        if (require) break e;
                      }
                    return require;
                  })(require),
                  MenuItemBuilder = [],
                  GElementAction = require.getFirstChild();
                null !== GElementAction;
                GElementAction = GElementAction.getNext()
              )
                GElementAction instanceof GCore.GStylable.FillPaintLayer && MenuItemBuilder.push(GElementAction);
              for (var l = 0; l < MenuItemBuilder.length; ++l) require.removeChild(MenuItemBuilder[l]);
              if (
                (require.insertChild(
                  new GCore.GStylable.FillPaintLayer(GCore.GRGBColor.WHITE)
                ),
                GEditor)
              ) {
                GEditor = GEditor.clone();
                for (l = 0; l < GEditor.getStops().length; ++l) {
                  var c = GEditor.getStops()[l];
                  "#FFFFFF" === c.color.toScreenCSS() && (c.opacity = 0);
                }
                var d = new GCore.GOverlayEffect();
                module.getEffects().appendChild(d),
                  d.setProperties(["alm", "opc", "pat"], [true, 1, GEditor]);
              }
            }
          }
        } finally {
          e.commitTransaction(GCore.GLocale.get(this.getTitle()));
        }
      }),
      (l.prototype.toString = function () {
        return "[Object GMaskWithShapeAction]";
      }),
      (exports.exports = l);
  }