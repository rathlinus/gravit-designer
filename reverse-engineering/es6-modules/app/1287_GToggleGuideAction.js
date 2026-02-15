/**
 * Webpack Module #1287
 * Type: class
 * Name: GToggleGuideAction
 */

function (exports, module, require) {
  'use strict';
  (require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(34)) /* polyfill_String_replace */;
  var GCore = require(1) /* GCore */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  require(173) /* stub_requires_1 */;
  class r extends GAction {
    constructor(e, t) {
      super();
      ((this._guideId = e), (this._guideName = t));
    }

    _guideId = null;
    _guideName = false;

    getId() {
      return r.ID + '.' + this._guideId;
    }

    getTitle() {
      return GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.snap-to-action')).replace(
        '%action',
        this._guideName
      );
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_VIEW_SNAP;
    }

    getGroup() {
      return 'snap/guide';
    }

    isCheckable() {
      return true;
    }

    isEnabled() {
      return !gDesigner.getSetting('snap_disabled');
    }

    isChecked() {
      return gDesigner.getSetting('snap_guides').indexOf(this._guideId) >= 0;
    }

    execute() {
      var e = gDesigner.getSetting('snap_guides').slice(),
        t = e.indexOf(this._guideId);
      (t >= 0 ? e.splice(t, 1) : e.push(this._guideId), gDesigner.setSetting('snap_guides', e));
    }

    toString() {
      return '[Object GToggleGuideAction]';
    }

    static ID = 'view.toggle-guide';

  }
  exports.exports = r;
}