/**
 * Webpack Module #810
 * Type: class
 * Name: GConvertToPathAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    a = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GElementAction = require(106);
  class l extends GElementAction {
    constructor() {
      super();
      l.TOOLTIP_CONFIG = {
      [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
      title: GCore.GLocale.get(new GCore.GLocaleKey('GConvertToPathAction', 'tooltip-title')),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GConvertToPathAction', 'tooltip-description')
      ),
      shortcut: l.SHORTCUT,
      learnMore: '',
      }),
      };
    }

    getId() {
      return l.ID;
    }

    getTitle() {
      return l.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY_PATH;
    }

    getIcon() {
      return 'gravit-icon-convert-to-path';
    }

    getGroup() {
      return 'structure/modify';
    }

    getShortcut() {
      return l.SHORTCUT;
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument();
      if (e) {
        var module = e.getEditor().getSelection();
        if (module)
          for (var require = 0; require < module.length; ++require)
            if (
              !(module[require] instanceof GCore.GPath) &&
              !(module[require] instanceof GCore.GImage) &&
              !(module[require] instanceof GCore.GPathsGraph) &&
              (module[require] instanceof GCore.GPathBase ||
                (module[require].hasMixin(GCore.GVertexSource) &&
                  !(module[require] instanceof GCore.GCompoundPath)))
            )
              return true;
      }
      return false;
    }

    execute() {
      gDesigner.getActiveDocument().getEditor().convertSelectionToPaths();
    }

    getTooltipConfig(e) {
      return (e && l.TOOLTIP_CONFIG[e]) || null;
    }

    toString() {
      return '[Object GConvertToPathAction]';
    }

    static TOOLTIP_CONFIG = {
      [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GConvertToPathAction', 'tooltip-title')),
        description: GCore.GLocale.get(
          new GCore.GLocaleKey('GConvertToPathAction', 'tooltip-description')
        ),
        shortcut: l.SHORTCUT,
        learnMore: '',
      }),
    };

    static ID = 'modify.converttopath';

    static TITLE = new GCore.GLocaleKey('GConvertToPathAction', 'title');

    static SHORTCUT = [GEditor.GKey.Constant.META, GEditor.GKey.Constant.SHIFT, 'P'];

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = l;
}