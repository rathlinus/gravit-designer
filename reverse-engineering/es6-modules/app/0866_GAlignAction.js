/**
 * Webpack Module #866
 * Type: class
 * Name: GAlignAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    a = require(15) /* GEditor */,
    r = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class c extends GAction {
    constructor(e) {
      super();
      ((this._type = e),
      (this._title = new GCore.GLocaleKey('GAlignAction', 'title.' + e)),
      (c.TOOLTIP_CONFIG = {
      [r.TOOLTIP_AREA.SIDEBAR]: {
      [GTools.GEditor.ArrangeAlignType.AlignLeft]: r.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GAlignAction', 'text.align-left-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GAlignAction', 'text.align-left-tooltip-description')
      ),
      learnMore: '',
      }),
      [GTools.GEditor.ArrangeAlignType.AlignCenter]: r.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GAlignAction', 'text.align-center-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GAlignAction', 'text.align-center-tooltip-description')
      ),
      learnMore: '',
      }),
      [GTools.GEditor.ArrangeAlignType.AlignRight]: r.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GAlignAction', 'text.align-right-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GAlignAction', 'text.align-right-tooltip-description')
      ),
      learnMore: '',
      }),
      [GTools.GEditor.ArrangeAlignType.AlignTop]: r.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GAlignAction', 'text.align-top-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GAlignAction', 'text.align-top-tooltip-description')
      ),
      learnMore: '',
      }),
      [GTools.GEditor.ArrangeAlignType.AlignMiddle]: r.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GAlignAction', 'text.align-middle-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GAlignAction', 'text.align-middle-tooltip-description')
      ),
      learnMore: '',
      }),
      [GTools.GEditor.ArrangeAlignType.AlignBottom]: r.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GAlignAction', 'text.align-bottom-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GAlignAction', 'text.align-bottom-tooltip-description')
      ),
      learnMore: '',
      }),
      },
      }));
    }

    _type = null;
    _title = null;

    getId() {
      return c.ID + '.' + this._type;
    }

    getTitle() {
      return this._title;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY_ALIGN;
    }

    getGroup() {
      var e = '';
      switch (this._type) {
        case GTools.GEditor.ArrangeAlignType.AlignLeft:
        case GTools.GEditor.ArrangeAlignType.AlignCenter:
        case GTools.GEditor.ArrangeAlignType.AlignRight:
          e = 'horizontal';
          break;
        case GTools.GEditor.ArrangeAlignType.AlignTop:
        case GTools.GEditor.ArrangeAlignType.AlignMiddle:
        case GTools.GEditor.ArrangeAlignType.AlignBottom:
          e = 'vertical';
          break;
        case GTools.GEditor.ArrangeAlignType.AlignJustifyHorizontal:
        case GTools.GEditor.ArrangeAlignType.AlignJustifyVertical:
          e = 'justify';
      }
      return 'arrange/align-' + e;
    }

    getShortcut() {
      const exports = [a.GKey.Constant.OPTION];
      switch (this._type) {
        case GTools.GEditor.ArrangeAlignType.AlignLeft:
          return exports.concat('A');
        case GTools.GEditor.ArrangeAlignType.AlignCenter:
          return exports.concat('H');
        case GTools.GEditor.ArrangeAlignType.AlignRight:
          return exports.concat('D');
        case GTools.GEditor.ArrangeAlignType.AlignTop:
          return exports.concat('W');
        case GTools.GEditor.ArrangeAlignType.AlignMiddle:
          return exports.concat('V');
        case GTools.GEditor.ArrangeAlignType.AlignBottom:
          return exports.concat('S');
        default:
          return null;
      }
    }

    isEnabled(e, t, n) {
      var GTools = gDesigner.getActiveDocument() ? gDesigner.getActiveDocument().getEditor() : null;
      return !(!(e = e || (GTools ? GTools.getIndividualSelection() : null)) || !e.length);
    }

    execute(e, t, n) {
      var GCore = gDesigner.getActiveDocument() ? gDesigner.getActiveDocument().getEditor() : null;
      if (
        ((e = e || (GCore ? GCore.getIndividualSelection() : null)),
        GCore && e && 1 === e.length && !n)
      ) {
        var a = GTools.GElementEditor.getEditor(e[0]);
        if (!a || !a.isAlignPartsAllowed())
          if (GCore.getScene().isFixedSized())
            n = GCore.getScene().getActivePage().getGeometryBBox();
          else n = GCore.getScene().getPaintBBox();
      }
      gDesigner.getActiveDocument().getEditor().arrangeAlign(this._type, e, t, n);
    }

    _isAlignOnlyCategory() {
      switch (this._type) {
        case GTools.GEditor.ArrangeAlignType.AlignLeft:
        case GTools.GEditor.ArrangeAlignType.AlignCenter:
        case GTools.GEditor.ArrangeAlignType.AlignRight:
        case GTools.GEditor.ArrangeAlignType.AlignTop:
        case GTools.GEditor.ArrangeAlignType.AlignMiddle:
        case GTools.GEditor.ArrangeAlignType.AlignBottom:
          return true;
        default:
          return false;
      }
    }

    getTooltipConfig(e) {
      return (e && c.TOOLTIP_CONFIG[e] && c.TOOLTIP_CONFIG[e][this._type]) || null;
    }

    toString() {
      return '[Object GAlignAction]';
    }

    static TOOLTIP_CONFIG = {
        [r.TOOLTIP_AREA.SIDEBAR]: {
          [GTools.GEditor.ArrangeAlignType.AlignLeft]: r.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GAlignAction', 'text.align-left-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GAlignAction', 'text.align-left-tooltip-description')
            ),
            learnMore: '',
          }),
          [GTools.GEditor.ArrangeAlignType.AlignCenter]: r.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GAlignAction', 'text.align-center-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GAlignAction', 'text.align-center-tooltip-description')
            ),
            learnMore: '',
          }),
          [GTools.GEditor.ArrangeAlignType.AlignRight]: r.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GAlignAction', 'text.align-right-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GAlignAction', 'text.align-right-tooltip-description')
            ),
            learnMore: '',
          }),
          [GTools.GEditor.ArrangeAlignType.AlignTop]: r.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GAlignAction', 'text.align-top-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GAlignAction', 'text.align-top-tooltip-description')
            ),
            learnMore: '',
          }),
          [GTools.GEditor.ArrangeAlignType.AlignMiddle]: r.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GAlignAction', 'text.align-middle-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GAlignAction', 'text.align-middle-tooltip-description')
            ),
            learnMore: '',
          }),
          [GTools.GEditor.ArrangeAlignType.AlignBottom]: r.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GAlignAction', 'text.align-bottom-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GAlignAction', 'text.align-bottom-tooltip-description')
            ),
            learnMore: '',
          }),
        },
      };

    static ID = 'arrange.align';

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = c;
}