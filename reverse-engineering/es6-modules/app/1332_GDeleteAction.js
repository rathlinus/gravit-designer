/**
 * Webpack Module #1332
 * Type: class
 * Name: GDeleteAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(41)) /* stub_requires_682 */;
  var GCore = require(1) /* GCore */,
    GTools = require(53) /* GTools */,
    r = require(15) /* GEditor */,
    AppSettings = require(10) /* AppSettings */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    GSystemDialog = _interopRequireDefault(require(44) /* GSystemDialog */),
    GAnnotationsSidebar = require(567) /* GAnnotationsSidebar */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  const GAnnotationsUtils = require(358) /* GAnnotationsUtils */,
    h = require(607);
  class f extends GAction {
    constructor() {
      super();
    }

    _isConfirmWindowDisplaying = false;

    getId() {
      return f.ID;
    }

    getTitle() {
      return f.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_EDIT;
    }

    getGroup() {
      return 'ccp';
    }

    getShortcut() {
      return [r.GKey.Constant.REMOVE];
    }

    getAdditionalShortcuts() {
      var e = [];
      return (
        GCore.GSystem.operatingSystem === GCore.GSystem.OperatingSystem.OSX_IOS
          ? e.push([r.GKey.Constant.DELETE])
          : e.push([r.GKey.Constant.BACKSPACE]),
        e
      );
    }

    isEnabled() {
      var e = gDesigner.getActiveDocument();
      if (this._isConfirmWindowDisplaying) return false;
      if (e) {
        var module = e.getEditor().getSelection();
        if (module)
          for (var require = 0; require < module.length; ++require)
            if (module[require] instanceof GCore.GItem || module[require] instanceof GCore.GLayer)
              return true;
      }
      return false;
    }

    execute() {
      var e = gDesigner.getActiveDocument(),
        t = e.getEditor(),
        n = e.getActiveStylesList(),
        _interopRequireDefault = gDesigner.getMouseOverContext();
      if (
        AppSettings.HAS_ANNOTATIONS &&
        gDesigner.getRightSidebars().getActiveSidebar() === GAnnotationsSidebar.ID
      ) {
        var r = t.getSelection().filter((e) => GAnnotationsUtils.canDeleteAnnotation(e));
        r.length &&
          (this._setIsConfirmWindowDisplaying(true),
          GSystemDialog.default.confirm(
            GCore.GLocale.get(new GCore.GLocaleKey('GAnnotationPanel', 'text.confirm-remove')),
            (e) => {
              (e &&
                gDesigner.getActiveDocument() &&
                gDesigner.getActiveDocument().getEditor() === t &&
                GAnnotationsUtils.removeAnnotations(
                  r,
                  r[0].getParent(),
                  GCore.GLocale.get(this.getTitle())
                ),
                this._setIsConfirmWindowDisplaying(false));
            },
            null,
            null,
            null,
            true,
            true
          ));
      } else if (_interopRequireDefault.context && (n.Fill || n.Border || n.Effect)) {
        var MenuItemBuilder = null,
          GAction = null,
          m = t.getSelection();
        if (_interopRequireDefault.context === h.FillPropertiesPanel)
          ((MenuItemBuilder = n.Fill), (GAction = 'fill'));
        else if (_interopRequireDefault.context === h.BorderPropertiesPanel)
          ((MenuItemBuilder = n.Border), (GAction = 'border'));
        else {
          if (_interopRequireDefault.context !== h.EffectPropertiesPanel)
            return void t.deleteSelection();
          ((MenuItemBuilder = n.Effect), (GAction = 'effect'));
        }
        GTools.GEditor.tryRunTransaction(
          e.getScene(),
          function () {
            (0, CollaborationMergeUtils.iterateEqualStyleLayers)(
              GAction,
              MenuItemBuilder,
              m,
              function (e) {
                e.getParent().removeChild(e);
              }
            );
          },
          GCore.GLocale.get(f.TITLE)
        );
      } else t.deleteSelection();
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-delete' : '';
    }

    _setIsConfirmWindowDisplaying(e) {
      this._isConfirmWindowDisplaying = e;
    }

    toString() {
      return '[Object GDeleteAction]';
    }

    static ID = 'edit.delete';

    static TITLE = new GCore.GLocaleKey('GDeleteAction', 'title');

  }
  exports.exports = f;
}