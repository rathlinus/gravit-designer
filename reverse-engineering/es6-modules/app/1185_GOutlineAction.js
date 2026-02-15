/**
 * Webpack Module #1185
 * Type: class
 * Name: GOutlineAction
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(193) /* polyfill_Object_keys */,
    require(3) /* polyfill_RegExp_toString */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GElementAction = require(106) /* GElementAction */,
    GSystemDialog = require(44);
  class c extends GElementAction {
    constructor() {
      super();
    }

    getId() {
      return c.ID;
    }

    getTitle() {
      return c.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY_PATH;
    }

    getGroup() {
      return 'structure/modify';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.F5];
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument()
          ? gDesigner.getActiveDocument().getEditor().getSelection()
          : null,
        t = false;
      if (e)
        for (var require = 0; !t && require < e.length; ++require)
          e[require] instanceof GCore.GImage ||
            !e[require].hasMixin(GCore.GVertexSource) ||
            (t = true);
      return t;
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-convert-to-outline' : null;
    }

    execute() {
      var e = gDesigner.getActiveDocument(),
        t = e ? e.getEditor() : null,
        n = t ? t.getIndividualSelection() : null,
        GEditor = [];
      if (n)
        for (var MenuItemBuilder = 0; MenuItemBuilder < n.length; ++MenuItemBuilder) {
          var GElementAction = n[MenuItemBuilder];
          GElementAction.hasMixin(GCore.GVertexSource) && GEditor.push(GElementAction);
        }
      GEditor.length &&
        GSystemDialog.prompt(
          this._dialogPromptMessage(),
          (e) => {
            if (e) {
              var n,
                MenuItemBuilder,
                GElementAction = parseFloat(e);
              if (
                isNaN(GElementAction) ||
                !isFinite(GElementAction) ||
                GCore.GMath.isEqualEps(GElementAction, 0)
              )
                GSystemDialog.alert(
                  GCore.GLocale.get(new GCore.GLocaleKey('GOutlineAction', 'text.invalid-value'))
                );
              else {
                t.beginTransaction();
                try {
                  try {
                    MenuItemBuilder = new Set();
                    for (var c = 0; c < GEditor.length; ++c) {
                      var d = GEditor[c].getParent();
                      d && MenuItemBuilder.add(d);
                    }
                    ((0, CollaborationMergeUtils.blockChanges)(t, MenuItemBuilder), (n = []));
                    for (c = 0; c < GEditor.length; ++c) {
                      var u = GEditor[c],
                        p = u.getParent();
                      if (p) {
                        var g = u.getNext(),
                          h = this._makeOffsetter(GElementAction, u),
                          f = GCore.GPathUtil.createPathFromVertexSource(h);
                        (f &&
                          (GCore.GElement.prototype.assignFrom.call(f, u),
                          p.insertChild(f, g),
                          n.push(f)),
                          p.removeChild(u));
                      }
                    }
                  } finally {
                    ((0, CollaborationMergeUtils.releaseChanges)(t, MenuItemBuilder),
                      n.length && t.updateSelection(false, n));
                  }
                } finally {
                  t.commitTransaction(GCore.GLocale.get(this.getTitle()));
                }
              }
            }
          },
          '1'
        );
    }

    _dialogPromptMessage() {
      return GCore.GLocale.get(
        new GCore.GLocaleKey('GOutlineAction', 'text.dialog-prompt-message')
      );
    }

    _makeOffsetter(e, t) {
      var n;
      if (t.hasMixin(GCore.GStylable)) {
        var GEditor = t.getPaintLayers();
        if (GEditor) {
          var CollaborationMergeUtils = GEditor.getBorderLayers(true).pop();
          CollaborationMergeUtils && (n = CollaborationMergeUtils.$_blc);
        }
      }
      var MenuItemBuilder = e > 0 ? e : -e;
      return (
        t instanceof GCore.GPathBase && !t.isClockWise() && t.reverseOrder(),
        new GCore.GVertexOffsetter(t, MenuItemBuilder, true, true, 0, n)
      );
    }

    toString() {
      return '[Object GOutlineAction]';
    }

    static ID = 'modify.ouline';

    static TITLE = new GCore.GLocaleKey('GOutlineAction', 'title');

  }
  exports.exports = c;
}