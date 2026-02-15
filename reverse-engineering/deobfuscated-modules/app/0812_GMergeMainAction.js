/**
 * Webpack Module #812
 * Type: class
 * Name: GMergeMainAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
      GAction = _interopRequireDefault(require(31) /* GAction */),
      GMainAction = _interopRequireDefault(require(1281) /* GMainAction */);
    class c extends GMainAction.default {
      static getActionSubId(e) {
        return "".concat(c.ID, ".").concat(e);
      }
      static getValidItems(e) {
        let module = [];
        if (e instanceof GCore.GGroup || e instanceof GCore.GCompoundShape)
          for (let require = e.getFirstChild(); null !== require; require = require.getNext()) {
            const e = c.getValidItems(require);
            module = module.concat(e);
          }
        else
          e.hasMixin(GCore.GVertexSource) &&
            e.validateInsertion(new GCore.GCompoundShape()) &&
            module.push(e);
        return module;
      }
      getId() {
        return c.ID;
      }
      getTitle() {
        return c.TITLE;
      }
      getCategory() {
        return MenuItemBuilder.default.CATEGORY_MODIFY;
      }
      getGroup() {
        return "structure-group";
      }
      isVisible() {
        return false;
      }
      getShortcut() {
        return [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, GEditor.GKey.Constant.Y];
      }
      getIcon() {
        return super.getIcon.call(this);
      }
      isEnabled() {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getEditor(),
          require = module && module.getIndividualSelection();
        if (!require || !require.length) return false;
        let _interopRequireDefault = [];
        for (let exports = 0; exports < require.length; ++exports) {
          const t = require[exports];
          if (((_interopRequireDefault = _interopRequireDefault.concat(c.getValidItems(t))), _interopRequireDefault.length > 1)) return true;
        }
        if (1 === _interopRequireDefault.length) {
          const e = _interopRequireDefault[0];
          return (
            e instanceof GCore.GCompoundShape ||
            e.getParent() instanceof GCore.GCompoundShape
          );
        }
        return false;
      }
      getShortcutHint(e) {
        return GAction.default.prototype.getShortcutHint.call(this, e);
      }
      execute() {
        const exports = c.getActionSubId(this.Type.Union);
        gDesigner.executeAction(exports);
      }
      toString() {
        return "[Object GMergeMainAction]";
      }
    }
    (c.ID = "modify.merge"),
      (c.TITLE = new GCore.GLocaleKey("GMergeMainAction", "title")),
      (exports.exports = c);
  }