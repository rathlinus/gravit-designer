/**
 * Webpack Module #1176
 * Type: class
 * Name: GAttachToPathAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GSplitPathAction = require(873) /* GSplitPathAction */,
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
      return gDesigner.isTouchEnabled() ? 'gravit-icon-attach-to-path' : null;
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument()
          ? gDesigner.getActiveDocument().getEditor().getSelection()
          : null,
        t = [],
        n = null;
      if (e)
        for (var MenuItemBuilder = 0; MenuItemBuilder < e.length; ++MenuItemBuilder)
          if (e[MenuItemBuilder] instanceof GCore.GText && !e[MenuItemBuilder].hasPathAttached()) {
            var GSplitPathAction = GTools.GElementEditor.getEditor(e[MenuItemBuilder]);
            GSplitPathAction && !GSplitPathAction.isInlineEdit() && t.push(e[MenuItemBuilder]);
          } else
            !e[MenuItemBuilder].hasMixin(GCore.GVertexSource) ||
              e[MenuItemBuilder] instanceof GCore.GPathsGraph ||
              (n = e[MenuItemBuilder]);
      return !(!t.length || !n);
    }

    execute() {
      var e,
        t = gDesigner.getActiveDocument(),
        n = t ? t.getScene() : null,
        MenuItemBuilder = (u = t ? t.getEditor() : null) ? u.getIndividualSelection() : null,
        GElementAction = null,
        l = [];
      if (MenuItemBuilder)
        for (var c = 0; c < MenuItemBuilder.length; ++c)
          if (!GElementAction && MenuItemBuilder[c] instanceof GCore.GPathBase)
            GElementAction = MenuItemBuilder[c];
          else if (
            MenuItemBuilder[c] instanceof GCore.GText &&
            !MenuItemBuilder[c].hasPathAttached()
          ) {
            var d = GTools.GElementEditor.getEditor(MenuItemBuilder[c]);
            d && !d.isInlineEdit() && l.push(MenuItemBuilder[c]);
          } else
            e ||
              !MenuItemBuilder[c].hasMixin(GCore.GVertexSource) ||
              MenuItemBuilder[c] instanceof GCore.GPathsGraph ||
              (e = MenuItemBuilder[c]);
      try {
        if ((u.beginTransaction(), !GElementAction)) {
          var u = gDesigner.getActiveDocument().getEditor();
          (e instanceof GCore.GCompoundPath
            ? gDesigner.executeAction(GSplitPathAction.ID, undefined, undefined, true)
            : (u.updateSelection(false, [e]), u.convertSelectionToPaths()),
            (GElementAction = u.getSelection()[0]),
            (MenuItemBuilder = MenuItemBuilder.concat()).splice(MenuItemBuilder.indexOf(e), 1),
            u.updateSelection(true, MenuItemBuilder));
        }
        n &&
          l.map(function (e) {
            n.link(e, GElementAction);
          });
      } finally {
        u.commitTransaction(GCore.GLocale.get(this.getTitle()));
      }
    }

    toString() {
      return '[Object GAttachToPathAction]';
    }

    static ID = 'modify.attachToPath';

    static TITLE = new GCore.GLocaleKey('GAttachToPathAction', 'title');

  }
  exports.exports = l;
}