/**
 * Webpack Module #1172
 * Type: class
 * Name: GInstallToDesktopAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    a = (require(15) /* GEditor */, _interopRequireDefault(require(31) /* GAction */)),
    r =
      (_interopRequireDefault(require(85) /* GContainer */),
      _interopRequireDefault(require(18) /* MenuItemBuilder */)),
    s = _interopRequireDefault(require(1173) /* module_1173 */);
  class l extends a.default {
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
      return r.default.CATEGORY_FILE;
    }

    getGroup() {
      return 'install';
    }

    isAvailable() {
      return s.default.isSupported() && !window.matchMedia('(display-mode: standalone)').matches;
    }

    isVisible() {
      return !window.matchMedia('(display-mode: standalone)').matches;
    }

    isEnabled() {
      return gDesigner.hasPwaEvent();
    }

    execute() {
      return l.install();
    }

    toString() {
      return '[Object GInstallToDesktopAction]';
    }

    static ID = 'file.install-to-desktop';

    static TITLE = new GCore.GLocaleKey('GInstallToDesktopAction', 'title');

    static closedInstallPWADialogDatePropName = 'pwa.closed-install-pwa-dialog-date';

    static installPWA3timesAWeekPropName = 'pwa.show-install-dialog-3-times-a-week';

    static install() {
      var e = gDesigner.getPwaEvent();
      e &&
        e.prompt &&
        e.prompt().then(function (e) {
          let { outcome: module } = e;
          'dismissed' === module ||
            ('accepted' === module &&
              (gContainer.removeProperty(l.installPWA3timesAWeekPropName),
              gContainer.removeProperty(l.closedInstallPWADialogDatePropName),
              gDesigner.closeInstallPwaDialog()));
        });
    }

  }
  exports.exports = l;
}