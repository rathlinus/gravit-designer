/**
 * Webpack Module #1256
 * Type: class
 * Name: GVersionsHistoryAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GAction = _interopRequireDefault(require(31) /* GAction */),
    MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
    GCloudStorage = _interopRequireDefault(require(119) /* GCloudStorage */),
    GEvent_fileId = _interopRequireDefault(require(1159) /* GEvent_fileId */),
    c = _interopRequireDefault(require(219) /* GLocale */),
    GOfflineDialog = _interopRequireDefault(require(256) /* GOfflineDialog */),
    u = require(67);
  class p extends GAction.default {
    constructor() {
      super();
      ((this._title = new GCore.GLocaleKey('GVersionsHistoryAction', 'title')),
      (p.TOOLTIP_CONFIG = {
      [u.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: u.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey(
      'GVersionsHistoryAction',
      'text.try-this-feature-pro-tooltip-title'
      )
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey(
      'GVersionsHistoryAction',
      'text.try-this-feature-pro-tooltip-description'
      )
      ),
      learnMore: '',
      upgradeToProStatsValue: 'gravit-versions-history',
      middle: false,
      side: true,
      }),
      }));
    }

    _title = null;

    getId() {
      return p.ID;
    }

    getTitle() {
      return this._title;
    }

    isPro() {
      return true;
    }

    getTooltipArea() {
      return u.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON;
    }

    getTooltipConfig(e) {
      return (e && p.TOOLTIP_CONFIG[e]) || null;
    }

    getIcon() {
      return 'gravit-icon-versions';
    }

    getCategory() {
      return MenuItemBuilder.default.CATEGORY_FILE;
    }

    getGroup() {
      return p.GroupID;
    }

    isEnabled() {
      if (!gDesigner.getApplicationManager().isShareEnabled()) return false;
      var e =
          (gDesigner.getActiveDocument() && gDesigner.getActiveDocument().getStorageItem()) || null,
        t =
          !!gDesigner.getActiveDocument() &&
          gDesigner.getActiveDocument().getScene().isCloudSynchronization();
      return GCloudStorage.default.isOnline() && e && t;
    }

    execute() {
      if (gDesigner.getWindows().getActiveWindow().getDocument().isModified())
        return (
          new c.default(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GVersionsHistoryAction', 'unsaved-modifications')
            )
          ).open(),
          false
        );
      const exports = () => {
        gDesigner &&
          gDesigner.hasEventListeners(GEvent_fileId.default) &&
          (gDesigner.trigger(
            new GEvent_fileId.default(
              GEvent_fileId.default.Type.Enable,
              gDesigner.getActiveDocument().getScene().getProperty('cid')
            )
          ),
          gDesigner.intercomStats('Entered version history'));
      };
      gDesigner.isOffline() ? GOfflineDialog.default.openUnavailableFeature(exports) : exports();
    }

    toString() {
      return '[Object GVersionsHistoryAction]';
    }

    static TOOLTIP_CONFIG = {
        [u.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: u.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey(
              'GVersionsHistoryAction',
              'text.try-this-feature-pro-tooltip-title'
            )
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey(
              'GVersionsHistoryAction',
              'text.try-this-feature-pro-tooltip-description'
            )
          ),
          learnMore: '',
          upgradeToProStatsValue: 'gravit-versions-history',
          middle: false,
          side: true,
        }),
      };

    static ID = 'gravit-versions-history';

    static GroupID = 'file';

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = p;
}