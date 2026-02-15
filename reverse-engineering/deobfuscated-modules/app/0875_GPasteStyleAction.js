/**
 * Webpack Module #875
 * Type: class
 * Name: GPasteStyleAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function s() {}
    GCore.GObject.inherit(s, GElementAction),
      (s.ID = "edit.paste.style"),
      (s.TITLE = new GCore.GLocaleKey("GPasteStyleAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_EDIT_PASTE;
      }),
      (s.prototype.getGroup = function () {
        return "ccp/paste";
      }),
      (s.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-paste-style" : null;
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.F4];
      }),
      (s.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getClipboardMimeTypes();
        if (e && e.indexOf(GCore.GNode.MIME_TYPE) >= 0) {
          var module = gDesigner.getActiveDocument();
          if (module) {
            var require = module.getEditor().getIndividualSelection();
            if (require)
              for (var GEditor = 0; GEditor < require.length; ++GEditor)
                if (require[GEditor].hasMixin(GCore.GStylable)) return true;
          }
        }
        return false;
      }),
      (s.prototype.execute = function () {
        var e = GCore.GNode.deserialize(
          gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE)
        );
        if (
          (e = gDesigner
            .getActiveDocument()
            .filterUnrestrictedCommercialFileElements(e)) &&
          e.length > 0
        ) {
          for (var module = null, require = 0; require < e.length; ++require)
            if (e[require].hasMixin(GCore.GStylable)) {
              module = e[require];
              break;
            }
          if (!module) return;
          var GEditor = gDesigner.getActiveDocument().getEditor(),
            MenuItemBuilder = GEditor.getIndividualSelection();
          module instanceof GCore.GText &&
            gDesigner
              .getActiveDocument()
              .getScene()
              .getActivePage()
              .appendChild(module),
            GEditor.beginTransaction();
          try {
            for (require = 0; require < MenuItemBuilder.length; ++require) {
              var GElementAction = MenuItemBuilder[require];
              GElementAction.hasMixin(GCore.GStylable) && GElementAction.assignStyleFrom(module);
            }
          } finally {
            GEditor.commitTransaction(GCore.GLocale.get(this.getTitle())),
              module instanceof GCore.GText &&
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