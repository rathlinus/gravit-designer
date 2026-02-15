/**
 * Webpack Module #1185
 * Type: class
 * Name: GOutlineAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* module_19 */, require(193) /* module_193 */, require(3) /* module_3 */, require(26) /* module_26 */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(40) /* module_40 */,
      r = require(18) /* module_18 */,
      s = require(106) /* GElementAction */,
      l = require(44) /* GSystemDialog */;
    function c() {}
    o.GObject.inherit(c, s),
      (c.ID = "modify.ouline"),
      (c.TITLE = new o.GLocaleKey("GOutlineAction", "title")),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return c.TITLE;
      }),
      (c.prototype.getCategory = function () {
        return r.CATEGORY_MODIFY_PATH;
      }),
      (c.prototype.getGroup = function () {
        return "structure/modify";
      }),
      (c.prototype.getShortcut = function () {
        return [i.GKey.Constant.F5];
      }),
      (c.prototype.isEnabled = function () {
        if (!s.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument()
            ? gDesigner.getActiveDocument().getEditor().getSelection()
            : null,
          t = false;
        if (e)
          for (var require = 0; !t && require < e.length; ++require)
            e[require] instanceof o.GImage ||
              !e[require].hasMixin(o.GVertexSource) ||
              (t = true);
        return t;
      }),
      (c.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled()
          ? "gravit-icon-convert-to-outline"
          : null;
      }),
      (c.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e ? e.getEditor() : null,
          n = t ? t.getIndividualSelection() : null,
          i = [];
        if (n)
          for (var r = 0; r < n.length; ++r) {
            var s = n[r];
            s.hasMixin(o.GVertexSource) && i.push(s);
          }
        i.length &&
          l.prompt(
            this._dialogPromptMessage(),
            (e) => {
              if (e) {
                var n,
                  r,
                  s = parseFloat(e);
                if (isNaN(s) || !isFinite(s) || o.GMath.isEqualEps(s, 0))
                  l.alert(
                    o.GLocale.get(
                      new o.GLocaleKey("GOutlineAction", "text.invalid-value")
                    )
                  );
                else {
                  t.beginTransaction();
                  try {
                    try {
                      r = new Set();
                      for (var c = 0; c < i.length; ++c) {
                        var d = i[c].getParent();
                        d && r.add(d);
                      }
                      (0, a.blockChanges)(t, r), (n = []);
                      for (c = 0; c < i.length; ++c) {
                        var u = i[c],
                          p = u.getParent();
                        if (p) {
                          var g = u.getNext(),
                            h = this._makeOffsetter(s, u),
                            f = o.GPathUtil.createPathFromVertexSource(h);
                          f &&
                            (o.GElement.prototype.assignFrom.call(f, u),
                            p.insertChild(f, g),
                            n.push(f)),
                            p.removeChild(u);
                        }
                      }
                    } finally {
                      (0, a.releaseChanges)(t, r),
                        n.length && t.updateSelection(false, n);
                    }
                  } finally {
                    t.commitTransaction(o.GLocale.get(this.getTitle()));
                  }
                }
              }
            },
            "1"
          );
      }),
      (c.prototype._dialogPromptMessage = function () {
        return o.GLocale.get(
          new o.GLocaleKey("GOutlineAction", "text.dialog-prompt-message")
        );
      }),
      (c.prototype._makeOffsetter = function (e, t) {
        var n;
        if (t.hasMixin(o.GStylable)) {
          var i = t.getPaintLayers();
          if (i) {
            var a = i.getBorderLayers(true).pop();
            a && (n = a.$_blc);
          }
        }
        var r = e > 0 ? e : -e;
        return (
          t instanceof o.GPathBase && !t.isClockWise() && t.reverseOrder(),
          new o.GVertexOffsetter(t, r, true, true, 0, n)
        );
      }),
      (c.prototype.toString = function () {
        return "[Object GOutlineAction]";
      }),
      (exports.exports = c);
  }