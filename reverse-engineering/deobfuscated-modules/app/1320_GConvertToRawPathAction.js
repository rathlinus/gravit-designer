/**
 * Webpack Module #1320
 * Type: class
 * Name: GConvertToRawPathAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function l() {}
    GCore.GObject.inherit(l, GElementAction),
      (l.ID = "modify.converttorawpath"),
      (l.TITLE = new GCore.GLocaleKey("GConvertToRawPathAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY_PATH;
      }),
      (l.prototype.getGroup = function () {
        return "structure/modify";
      }),
      (l.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled()
          ? "gravit-icon-convert-to-raw-path"
          : null;
      }),
      (l.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.SHIFT, "R"];
      }),
      (l.prototype._isValidElement = function (e) {
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
            for (var CollaborationMergeUtils = module[GEditor].getAnchorPoints().getFirstChild(); CollaborationMergeUtils; ) {
              if (GCore.GPathBase.isCornerType(CollaborationMergeUtils.getProperty("tp"))) return true;
              CollaborationMergeUtils = CollaborationMergeUtils.getNext();
            }
          return false;
        }
        return !(
          !e.hasMixin(GCore.GVertexSource) ||
          e instanceof GCore.GImage ||
          e instanceof GCore.GPathsGraph
        );
      }),
      (l.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getSelection();
          if (module)
            for (var require = 0; require < module.length; ++require)
              if (this._isValidElement(module[require])) return true;
        }
        return false;
      }),
      (l.prototype.execute = function () {
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
            (0, CollaborationMergeUtils.blockChanges)(n, GElementAction), (e = []);
            for (l = 0; l < MenuItemBuilder.length; ++l) {
              var d = MenuItemBuilder[l],
                u = d.getParent(),
                p = d.getNext(),
                g = GCore.GPathUtil.createPathFromVertexSource(d);
              g &&
                (GCore.GElement.prototype.assignFrom.call(g, d),
                u.insertChild(g, p),
                e.push(g)),
                u.removeChild(d);
            }
          } finally {
            (0, CollaborationMergeUtils.releaseChanges)(n, GElementAction), e.length && n.updateSelection(false, e);
          }
        } finally {
          n.commitTransaction(GCore.GLocale.get(this.getTitle()));
        }
      }),
      (l.prototype.toString = function () {
        return "[Object GConvertToRawPathAction]";
      }),
      (exports.exports = l);
  }