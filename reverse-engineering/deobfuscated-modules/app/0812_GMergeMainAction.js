/**
 * Webpack Module #812
 * Type: class
 * Name: GMergeMainAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */,
      i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(18) /* module_18 */),
      s = o(require(31) /* GAction */),
      l = o(require(1281) /* GMainAction */);
    class c extends l.default {
      static getActionSubId(e) {
        return "".concat(c.ID, ".").concat(e);
      }
      static getValidItems(e) {
        let module = [];
        if (e instanceof i.GGroup || e instanceof i.GCompoundShape)
          for (let require = e.getFirstChild(); null !== require; require = require.getNext()) {
            const e = c.getValidItems(require);
            module = module.concat(e);
          }
        else
          e.hasMixin(i.GVertexSource) &&
            e.validateInsertion(new i.GCompoundShape()) &&
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
        return r.default.CATEGORY_MODIFY;
      }
      getGroup() {
        return "structure-group";
      }
      isVisible() {
        return false;
      }
      getShortcut() {
        return [a.GKey.Constant.SHIFT, a.GKey.Constant.META, a.GKey.Constant.Y];
      }
      getIcon() {
        return super.getIcon.call(this);
      }
      isEnabled() {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getEditor(),
          require = module && module.getIndividualSelection();
        if (!require || !require.length) return false;
        let o = [];
        for (let exports = 0; exports < require.length; ++exports) {
          const t = require[exports];
          if (((o = o.concat(c.getValidItems(t))), o.length > 1)) return true;
        }
        if (1 === o.length) {
          const e = o[0];
          return (
            e instanceof i.GCompoundShape ||
            e.getParent() instanceof i.GCompoundShape
          );
        }
        return false;
      }
      getShortcutHint(e) {
        return s.default.prototype.getShortcutHint.call(this, e);
      }
      execute() {
        const exports = c.getActionSubId(this.Type.Union);
        gDesigner.executeAction(exports);
      }
      function toString() { [native code] }() {
        return "[Object GMergeMainAction]";
      }
    }
    (c.ID = "modify.merge"),
      (c.TITLE = new i.GLocaleKey("GMergeMainAction", "title")),
      (exports.exports = c);
  }