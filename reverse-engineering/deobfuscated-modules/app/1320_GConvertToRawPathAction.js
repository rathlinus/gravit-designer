/**
 * Webpack Module #1320
 * Type: class
 * Name: GConvertToRawPathAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* module_19 */, require(3) /* module_3 */, require(26) /* module_26 */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(40) /* module_40 */,
      r = require(18) /* module_18 */,
      s = require(106) /* GElementAction */;
    function l() {}
    o.GObject.inherit(l, s),
      (l.ID = "modify.converttorawpath"),
      (l.TITLE = new o.GLocaleKey("GConvertToRawPathAction", "title")),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return r.CATEGORY_MODIFY_PATH;
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
        return [i.GKey.Constant.META, i.GKey.Constant.SHIFT, "R"];
      }),
      (l.prototype._isValidElement = function (e) {
        if (e instanceof o.GPath || e instanceof o.GCompoundPath) {
          var module = [];
          if (e instanceof o.GCompoundPath)
            for (
              var require = e.getPaths().getFirstChild();
              null !== require;
              require = require.getNext()
            )
              module.push(require);
          else module = [e];
          for (var i = 0; i < module.length; i++)
            for (var a = module[i].getAnchorPoints().getFirstChild(); a; ) {
              if (o.GPathBase.isCornerType(a.getProperty("tp"))) return true;
              a = a.getNext();
            }
          return false;
        }
        return !(
          !e.hasMixin(o.GVertexSource) ||
          e instanceof o.GImage ||
          e instanceof o.GPathsGraph
        );
      }),
      (l.prototype.isEnabled = function () {
        if (!s.prototype.isEnabled.call(this)) return false;
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
          i = n ? n.getIndividualSelection() : null,
          r = [],
          s = new Set();
        if (i)
          for (var l = 0; l < i.length; ++l) {
            var c = i[l];
            this._isValidElement(c) && (r.push(c), s.add(c.getParent()));
          }
        n.beginTransaction();
        try {
          try {
            (0, a.blockChanges)(n, s), (e = []);
            for (l = 0; l < r.length; ++l) {
              var d = r[l],
                u = d.getParent(),
                p = d.getNext(),
                g = o.GPathUtil.createPathFromVertexSource(d);
              g &&
                (o.GElement.prototype.assignFrom.call(g, d),
                u.insertChild(g, p),
                e.push(g)),
                u.removeChild(d);
            }
          } finally {
            (0, a.releaseChanges)(n, s), e.length && n.updateSelection(false, e);
          }
        } finally {
          n.commitTransaction(o.GLocale.get(this.getTitle()));
        }
      }),
      (l.prototype.toString = function () {
        return "[Object GConvertToRawPathAction]";
      }),
      (exports.exports = l);
  }