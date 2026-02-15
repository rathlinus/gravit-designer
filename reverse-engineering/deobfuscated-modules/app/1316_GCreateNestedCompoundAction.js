/**
 * Webpack Module #1316
 * Type: class
 * Name: GCreateNestedCompoundAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(40) /* CollaborationMergeUtils */,
      r = require(18) /* MenuItemBuilder */,
      s = require(106) /* GElementAction */;
    function l() {}
    o.GObject.inherit(l, s),
      (l.ID = "modify.createnestedcompound"),
      (l.TITLE = new o.GLocaleKey("GCreateNestedCompoundAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return r.CATEGORY_MODIFY;
      }),
      (l.prototype.getGroup = function () {
        return "structure-boolean";
      }),
      (l.prototype.getShortcut = function () {
        return [i.GKey.Constant.META, i.GKey.Constant.ALT_LEFT, "M"];
      }),
      (l.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-nested-compound" : "";
      }),
      (l.prototype.isEnabled = function () {
        if (!s.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getSelection(),
            require = 0;
          if (module && module.length)
            for (var i = 0; i < module.length; ++i) {
              if ((module[i] instanceof o.GCompoundShape && require++, require >= 2)) return true;
            }
        }
        return false;
      }),
      (l.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getEditor(),
          t = o.GNode.order(e.getIndividualSelection().slice());
        e.beginTransaction();
        try {
          for (var require, i = [], r = new Set(), s = 0; s < t.length; ++s) {
            (l = t[s]) instanceof o.GCompoundShape &&
              (require ? (i.push(l), r.add(l.getParent())) : (require = l));
          }
          if (i.length > 0) {
            try {
              (0, a.blockChanges)(e, r, null, require);
              for (s = 0; s < i.length; ++s) {
                var l;
                (l = i[s]).getParent().removeChild(l), require.appendChild(l);
              }
            } finally {
              (0, a.releaseChanges)(e, r, null, require);
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