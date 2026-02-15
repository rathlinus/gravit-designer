/**
 * Webpack Module #871
 * Type: class
 * Name: GTransformAction
 */

function (exports, module, require) {
  'use strict';
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(41)) /* stub_requires_682 */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    a = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class l extends GAction {
    constructor(e) {
      super();
      ((this._type = e),
      (this._title = new GCore.GLocaleKey('GTransformAction', 'title.' + e)),
      (l.TOOLTIP_CONFIG = {
      [a.TOOLTIP_AREA.TOOLBAR]: {
      [l.Type.Rotate45Left]: null,
      [l.Type.Rotate90Left]: a.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GTransformAction', 'rotate-90-left-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GTransformAction', 'rotate-90-left-tooltip-description')
      ),
      learnMore: '',
      }),
      [l.Type.Rotate180Left]: null,
      [l.Type.Rotate45Right]: null,
      [l.Type.Rotate90Right]: a.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GTransformAction', 'rotate-90-right-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GTransformAction', 'rotate-90-right-tooltip-description')
      ),
      learnMore: '',
      }),
      [l.Type.Rotate180Right]: null,
      [l.Type.FlipVertical]: a.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GTransformAction', 'flip-vertical-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GTransformAction', 'flip-vertical-tooltip-description')
      ),
      learnMore: '',
      }),
      [l.Type.FlipHorizontal]: a.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GTransformAction', 'flip-horizontal-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GTransformAction', 'flip-horizontal-tooltip-description')
      ),
      learnMore: '',
      }),
      },
      }));
    }

    _type = null;
    _title = null;

    getId() {
      return l.ID + '.' + this._type;
    }

    getTitle() {
      return this._title;
    }

    getIcon() {
      switch (this._type) {
        case l.Type.Rotate90Left:
        case l.Type.Rotate90Right:
          return 'gravit-icon-rotate';
        case l.Type.FlipVertical:
          return 'gravit-icon-flip-vertical';
        case l.Type.FlipHorizontal:
          return 'gravit-icon-flip-horizontal';
        default:
          return null;
      }
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY_TRANSFORM;
    }

    getGroup() {
      var e = '';
      switch (this._type) {
        case l.Type.Rotate45Left:
        case l.Type.Rotate90Left:
        case l.Type.Rotate180Left:
          e = 'rotate-left';
          break;
        case l.Type.Rotate45Right:
        case l.Type.Rotate90Right:
        case l.Type.Rotate180Right:
          e = 'rotate-right';
          break;
        case l.Type.FlipVertical:
        case l.Type.FlipHorizontal:
          e = 'flip';
      }
      return 'arrange/transform-' + e;
    }

    getShortcut() {
      return null;
    }

    isEnabled(e) {
      let module =
        e ||
        (gDesigner.getActiveDocument()
          ? gDesigner.getActiveDocument().getEditor().getSelection()
          : null) ||
        [];
      return (
        (module = module.filter((e) => {
          var t = GTools.GElementEditor.getEditor(e);
          return (
            t &&
            (t.hasFlag(GTools.GBoxEditor.Flag.RotateCorners) ||
              t.hasFlag(GTools.GBoxEditor.Flag.RotateHandle))
          );
        })),
        module.length > 0
      );
    }

    execute(e) {
      var t = gDesigner.getActiveDocument(),
        n = t.getScene();
      (e || (e = t.getEditor().getSelection()),
        (e = (e = t.getEditor().filterIndividualElements(e)).filter((e) => {
          var t = GTools.GElementEditor.getEditor(e);
          return (
            t &&
            (t.hasFlag(GTools.GBoxEditor.Flag.RotateCorners) ||
              t.hasFlag(GTools.GBoxEditor.Flag.RotateHandle))
          );
        })));
      var a = GTools.GEditor.getGroupGeometryBBox(e);
      a &&
        GTools.GEditor.tryRunTransaction(
          n,
          function () {
            for (var t = 0; t < e.length; ++t) {
              var n = e[t];
              if (n.hasMixin(GCore.GElement.Transform) && a) {
                var GTools = a.getSide(GCore.GRect.Side.CENTER),
                  MenuItemBuilder = 0,
                  GAction = 1,
                  c = 1;
                switch (this._type) {
                  case l.Type.Rotate45Left:
                    MenuItemBuilder = -45;
                    break;
                  case l.Type.Rotate90Left:
                    MenuItemBuilder = -90;
                    break;
                  case l.Type.Rotate180Left:
                    MenuItemBuilder = -180;
                    break;
                  case l.Type.Rotate45Right:
                    MenuItemBuilder = 45;
                    break;
                  case l.Type.Rotate90Right:
                    MenuItemBuilder = 90;
                    break;
                  case l.Type.Rotate180Right:
                    MenuItemBuilder = 180;
                    break;
                  case l.Type.FlipVertical:
                    c = -1;
                    break;
                  case l.Type.FlipHorizontal:
                    GAction = -1;
                }
                var d = new GCore.GTransform()
                  .translated(-GTools.getX(), -GTools.getY())
                  .scaled(GAction, c)
                  .rotated(GCore.GMath.toRadians(MenuItemBuilder))
                  .translated(GTools.getX(), GTools.getY());
                n.transform(d, true);
              }
            }
          }.bind(this),
          GCore.GLocale.get(this.getTitle())
        );
    }

    getTooltipConfig(e) {
      return (e && l.TOOLTIP_CONFIG[e] && l.TOOLTIP_CONFIG[e][this._type]) || null;
    }

    toString() {
      return '[Object GTransformAction]';
    }

    static TOOLTIP_CONFIG = {
        [a.TOOLTIP_AREA.TOOLBAR]: {
          [l.Type.Rotate45Left]: null,
          [l.Type.Rotate90Left]: a.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GTransformAction', 'rotate-90-left-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GTransformAction', 'rotate-90-left-tooltip-description')
            ),
            learnMore: '',
          }),
          [l.Type.Rotate180Left]: null,
          [l.Type.Rotate45Right]: null,
          [l.Type.Rotate90Right]: a.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GTransformAction', 'rotate-90-right-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GTransformAction', 'rotate-90-right-tooltip-description')
            ),
            learnMore: '',
          }),
          [l.Type.Rotate180Right]: null,
          [l.Type.FlipVertical]: a.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GTransformAction', 'flip-vertical-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GTransformAction', 'flip-vertical-tooltip-description')
            ),
            learnMore: '',
          }),
          [l.Type.FlipHorizontal]: a.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GTransformAction', 'flip-horizontal-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GTransformAction', 'flip-horizontal-tooltip-description')
            ),
            learnMore: '',
          }),
        },
      };

    static Type = {
      Rotate45Left: 'rotate-45-left',
      Rotate90Left: 'rotate-90-left',
      Rotate180Left: 'rotate-180-left',
      Rotate45Right: 'rotate-45-right',
      Rotate90Right: 'rotate-90-right',
      Rotate180Right: 'rotate-180-right',
      FlipVertical: 'flip-vertical',
      FlipHorizontal: 'flip-horizontal',
    };

    static TOOLTIP_CONFIG = null;

    static ID = 'arrange.transform';

  }
  exports.exports = l;
}