/**
 * Webpack Module #1316
 * Type: class
 * Name: GCreateNestedCompoundAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function l() {}
    GCore.GObject.inherit(l, GElementAction),
      (l.ID = "modify.createnestedcompound"),
      (l.TITLE = new GCore.GLocaleKey("GCreateNestedCompoundAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY;
      }),
      (l.prototype.getGroup = function () {
        return "structure-boolean";
      }),
      (l.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.ALT_LEFT, "M"];
      }),
      (l.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-nested-compound" : "";
      }),
      (l.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getSelection(),
            require = 0;
          if (module && module.length)
            for (var GEditor = 0; GEditor < module.length; ++GEditor) {
              if ((module[GEditor] instanceof GCore.GCompoundShape && require++, require >= 2)) return true;
            }
        }
        return false;
      }),
      (l.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getEditor(),
          t = GCore.GNode.order(e.getIndividualSelection().slice());
        e.beginTransaction();
        try {
          for (var require, GEditor = [], MenuItemBuilder = new Set(), GElementAction = 0; GElementAction < t.length; ++GElementAction) {
            (l = t[GElementAction]) instanceof GCore.GCompoundShape &&
              (require ? (GEditor.push(l), MenuItemBuilder.add(l.getParent())) : (require = l));
          }
          if (GEditor.length > 0) {
            try {
              (0, CollaborationMergeUtils.blockChanges)(e, MenuItemBuilder, null, require);
              for (GElementAction = 0; GElementAction < GEditor.length; ++GElementAction) {
                var l;
                (l = GEditor[GElementAction]).getParent().removeChild(l), require.appendChild(l);
              }
            } finally {
              (0, CollaborationMergeUtils.releaseChanges)(e, MenuItemBuilder, null, require);
            }
            e.updateSelection(false, [require]);
          }
        } finally {
          e.commitTransaction("Create nested compound");
        }
      }),
      (l.prototype.toString = function () {
        return "[Object GCreateNestedCompoundAction]";
      }),
      (exports.exports = l);
  }