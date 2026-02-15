/**
 * Webpack Module #1320
 * Type: class
 * Name: GConvertToRawPathAction
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(3) /* polyfill_RegExp_toString */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GElementAction = require(106);
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
      return MenuItemBuilder.CATEGORY_MODIFY_PATH;
    }

    getGroup() {
      return 'structure/modify';
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-convert-to-raw-path' : null;
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.SHIFT, 'R'];
    }

    _isValidElement(e) {
      if (e instanceof GCore.GPath || e instanceof GCore.GCompoundPath) {
        var module = [];
        if (e instanceof GCore.GCompoundPath)
          for (
            var require = e.getPaths().getFirstChild();
            null !== require;
            require = require.getNext()
          )
            module.push(require);
        else module = [e];
        for (var GEditor = 0; GEditor < module.length; GEditor++)
          for (
            var CollaborationMergeUtils = module[GEditor].getAnchorPoints().getFirstChild();
            CollaborationMergeUtils;
          ) {
            if (GCore.GPathBase.isCornerType(CollaborationMergeUtils.getProperty('tp')))
              return true;
            CollaborationMergeUtils = CollaborationMergeUtils.getNext();
          }
        return false;
      }
      return !(
        !e.hasMixin(GCore.GVertexSource) ||
        e instanceof GCore.GImage ||
        e instanceof GCore.GPathsGraph
      );
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument();
      if (e) {
        var module = e.getEditor().getSelection();
        if (module)
          for (var require = 0; require < module.length; ++require)
            if (this._isValidElement(module[require])) return true;
      }
      return false;
    }

    execute() {
      var e,
        t = gDesigner.getActiveDocument(),
        n = t ? t.getEditor() : null,
        GEditor = n ? n.getIndividualSelection() : null,
        MenuItemBuilder = [],
        GElementAction = new Set();
      if (GEditor)
        for (var l = 0; l < GEditor.length; ++l) {
          var c = GEditor[l];
          this._isValidElement(c) && (MenuItemBuilder.push(c), GElementAction.add(c.getParent()));
        }
      n.beginTransaction();
      try {
        try {
          ((0, CollaborationMergeUtils.blockChanges)(n, GElementAction), (e = []));
          for (l = 0; l < MenuItemBuilder.length; ++l) {
            var d = MenuItemBuilder[l],
              u = d.getParent(),
              p = d.getNext(),
              g = GCore.GPathUtil.createPathFromVertexSource(d);
            (g && (GCore.GElement.prototype.assignFrom.call(g, d), u.insertChild(g, p), e.push(g)),
              u.removeChild(d));
          }
        } finally {
          ((0, CollaborationMergeUtils.releaseChanges)(n, GElementAction),
            e.length && n.updateSelection(false, e));
        }
      } finally {
        n.commitTransaction(GCore.GLocale.get(this.getTitle()));
      }
    }

    toString() {
      return '[Object GConvertToRawPathAction]';
    }

    static ID = 'modify.converttorawpath';

    static TITLE = new GCore.GLocaleKey('GConvertToRawPathAction', 'title');

  }
  exports.exports = l;
}