/**
 * Webpack Module #1181
 * Type: class
 * Name: GMaskWithShapeAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GElementAction = require(106) /* GElementAction */,
    GClipAction = require(809);
  class l extends GElementAction {
    constructor() {
      super();
    }

    getId() {
      return l.ID;
    }

    getTitle() {
      return l.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY;
    }

    getGroup() {
      return 'structure-group';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.SHIFT, 'M'];
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-mask-with-shape' : '';
    }

    isEnabled() {
      return GClipAction.prototype.isEnabled.call(this);
    }

    execute() {
      var e = gDesigner.getActiveDocument().getEditor();
      e.beginTransaction();
      try {
        if ((GClipAction.prototype.execute.call(this, true, true), e.getSelection().length > 0)) {
          var module = e.getSelection()[0];
          module.setProperty(
            'name',
            GCore.GLocale.get(new GCore.GLocaleKey('GMaskWithShapeAction', 'text.mask'))
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
                      module.getProperty('_pt') instanceof GCore.GLinearGradient
                    ) {
                      var require = module.getProperty('_pt');
                      require;
                      t: for (var GEditor = 0; GEditor < require.getStops().length; ++GEditor) {
                        var MenuItemBuilder = require.getStops()[GEditor].color.toScreenCSS();
                        if ('#FFFFFF' !== MenuItemBuilder && '#000000' !== MenuItemBuilder) {
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
              GElementAction instanceof GCore.GStylable.FillPaintLayer &&
                MenuItemBuilder.push(GElementAction);
            for (var l = 0; l < MenuItemBuilder.length; ++l)
              require.removeChild(MenuItemBuilder[l]);
            if (
              (require.insertChild(new GCore.GStylable.FillPaintLayer(GCore.GRGBColor.WHITE)),
              GEditor)
            ) {
              GEditor = GEditor.clone();
              for (l = 0; l < GEditor.getStops().length; ++l) {
                var c = GEditor.getStops()[l];
                '#FFFFFF' === c.color.toScreenCSS() && (c.opacity = 0);
              }
              var d = new GCore.GOverlayEffect();
              (module.getEffects().appendChild(d),
                d.setProperties(['alm', 'opc', 'pat'], [true, 1, GEditor]));
            }
          }
        }
      } finally {
        e.commitTransaction(GCore.GLocale.get(this.getTitle()));
      }
    }

    toString() {
      return '[Object GMaskWithShapeAction]';
    }

    static ID = 'modify.mask-with-shape';

    static TITLE = new GCore.GLocaleKey('GMaskWithShapeAction', 'title');

  }
  exports.exports = l;
}