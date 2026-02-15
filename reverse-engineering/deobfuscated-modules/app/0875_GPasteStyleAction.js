/**
 * Webpack Module #875
 * Type: class
 * Name: GPasteStyleAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(18) /* MenuItemBuilder */,
      r = require(106) /* GElementAction */;
    function s() {}
    o.GObject.inherit(s, r),
      (s.ID = "edit.paste.style"),
      (s.TITLE = new o.GLocaleKey("GPasteStyleAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_EDIT_PASTE;
      }),
      (s.prototype.getGroup = function () {
        return "ccp/paste";
      }),
      (s.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-paste-style" : null;
      }),
      (s.prototype.getShortcut = function () {
        return [i.GKey.Constant.F4];
      }),
      (s.prototype.isEnabled = function () {
        if (!r.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getClipboardMimeTypes();
        if (e && e.indexOf(o.GNode.MIME_TYPE) >= 0) {
          var module = gDesigner.getActiveDocument();
          if (module) {
            var require = module.getEditor().getIndividualSelection();
            if (require)
              for (var i = 0; i < require.length; ++i)
                if (require[i].hasMixin(o.GStylable)) return true;
          }
        }
        return false;
      }),
      (s.prototype.execute = function () {
        var e = o.GNode.deserialize(
          gDesigner.getClipboardContent(o.GNode.MIME_TYPE)
        );
        if (
          (e = gDesigner
            .getActiveDocument()
            .filterUnrestrictedCommercialFileElements(e)) &&
          e.length > 0
        ) {
          for (var module = null, require = 0; require < e.length; ++require)
            if (e[require].hasMixin(o.GStylable)) {
              module = e[require];
              break;
            }
          if (!module) return;
          var i = gDesigner.getActiveDocument().getEditor(),
            a = i.getIndividualSelection();
          module instanceof o.GText &&
            gDesigner
              .getActiveDocument()
              .getScene()
              .getActivePage()
              .appendChild(module),
            i.beginTransaction();
          try {
            for (require = 0; require < a.length; ++require) {
              var r = a[require];
              r.hasMixin(o.GStylable) && r.assignStyleFrom(module);
            }
          } finally {
            i.commitTransaction(o.GLocale.get(this.getTitle())),
              module instanceof o.GText &&
                gDesigner
                  .getActiveDocument()
                  .getScene()
                  .getActivePage()
                  .removeChild(module);
          }
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GPasteStyleAction]";
      }),
      (exports.exports = s);
  }