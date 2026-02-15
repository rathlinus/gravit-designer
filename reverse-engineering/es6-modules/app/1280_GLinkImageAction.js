/**
 * Webpack Module #1280
 * Type: class
 * Name: GLinkImageAction
 */

function (exports, module, require) {
  'use strict';
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(41)) /* stub_requires_682 */;
  var GCore = require(1) /* GCore */,
    i = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GDocument = require(163) /* GDocument */,
    GAction = require(31) /* GAction */,
    GContainer = require(85);
  class c extends GAction {
    constructor() {
      super();
      c.TOOLTIP_CONFIG = {
      [i.TOOLTIP_AREA.TOOLBAR]: i.GRichTooltipConfig.from({
      title: GCore.GLocale.get(new GCore.GLocaleKey('GLinkImageAction', 'tooltip-title')),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GLinkImageAction', 'tooltip-description')
      ),
      middle: false,
      learnMore: '',
      }),
      };
    }

    getId() {
      return c.ID;
    }

    getTitle() {
      return c.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_FILE_IMPORT;
    }

    getGroup() {
      return 'import/place-import';
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-link-image' : null;
    }

    isEnabled(e) {
      if (gContainer.getRuntime() !== GContainer.Runtime.Electron) return false;
      var t = gDesigner.getActiveDocument();
      return !!t && (e = e || t.getStorage() || gDesigner.getDefaultStorage()) && e.canPromptOpen();
    }

    execute(e, t) {
      var n = gDesigner.getActiveDocument();
      if (!n) return false;
      (e = e || n.getStorage() || gDesigner.getDefaultStorage()).openPrompt(
        GDocument.FileTypes.filter((e) => 0 === e.mime.indexOf('image')),
        (e) => {
          var i = 'file://' + e.getUniqueId(),
            MenuItemBuilder = i,
            GDocument = n.getScene().getDictionary().putValueIfAbsent(MenuItemBuilder);
          GDocument && (MenuItemBuilder = GDocument.getUrl());
          var GAction = new Image();
          ((GAction.onload = () => {
            var e = new GCore.GImage();
            (e.setProperties(
              ['iw', 'ih', 'url'],
              [GAction.naturalWidth, GAction.naturalHeight, MenuItemBuilder]
            ),
              n.insertElement(e, true, true),
              t && t());
          }),
            (GAction.src = i));
        },
        false
      );
    }

    isAvailable() {
      return gContainer.getRuntime() !== GContainer.Runtime.IPad;
    }

    getTooltipConfig(e) {
      return (e && c.TOOLTIP_CONFIG[e]) || null;
    }

    toString() {
      return '[Object GLinkImageAction]';
    }

    static TOOLTIP_CONFIG = {
      [i.TOOLTIP_AREA.TOOLBAR]: i.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GLinkImageAction', 'tooltip-title')),
        description: GCore.GLocale.get(
          new GCore.GLocaleKey('GLinkImageAction', 'tooltip-description')
        ),
        middle: false,
        learnMore: '',
      }),
    };

    static ID = 'file.link-import';

    static TITLE = new GCore.GLocaleKey('GLinkImageAction', 'title');

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = c;
}