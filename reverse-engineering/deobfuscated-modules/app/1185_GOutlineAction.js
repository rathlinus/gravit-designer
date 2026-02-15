/**
 * Webpack Module #1185
 * Type: class
 * Name: GOutlineAction
 */

function (exports, module, require) {
    "use strict";
    n(19) /* module_19 */, n(193) /* module_193 */, n(3) /* module_3 */, n(26) /* module_26 */;
    var o = n(1) /* module_1 */,
      i = n(15) /* module_15 */,
      a = n(40) /* module_40 */,
      r = n(18) /* module_18 */,
      s = n(106) /* GElementAction */,
      l = n(44) /* GSystemDialog */;
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
          for (var n = 0; !t && n < e.length; ++n)
            e[n] instanceof o.GImage ||
              !e[n].hasMixin(o.GVertexSource) ||
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
      (e.exports = c);
  }