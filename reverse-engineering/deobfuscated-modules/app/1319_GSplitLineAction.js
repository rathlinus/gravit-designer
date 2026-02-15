/**
 * Webpack Module #1319
 * Type: class
 * Name: GSplitLineAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */;
    var GTools = require(53) /* module */,
      GCore = require(1) /* module */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function l() {}
    GCore.GObject.inherit(l, GElementAction),
      (l.ID = "modify.split-line"),
      (l.TITLE = new GCore.GLocaleKey("GSplitLineAction", "title")),
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
        return "structure/path";
      }),
      (l.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-break-curve" : null;
      }),
      (l.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument()
            ? gDesigner.getActiveDocument().getEditor().getSelection()
            : null,
          t = false;
        if (e)
          for (var require = 0; !t && require < e.length; ++require)
            e[require] instanceof GCore.GPath && (t = this._isPathSplittable(e[require]));
        return t;
      }),
      (l.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e ? e.getEditor() : null,
          n = t ? t.getSelection() : null,
          GTools = [];
        if (n)
          for (var MenuItemBuilder = 0; MenuItemBuilder < n.length; ++MenuItemBuilder) {
            var GElementAction = n[MenuItemBuilder];
            GElementAction instanceof GCore.GPath && this._isPathSplittable(GElementAction) && GTools.push(GElementAction);
          }
        if (GTools.length) {
          t.beginTransaction();
          try {
            var l,
              c = [];
            l = new Set();
            for (MenuItemBuilder = 0; MenuItemBuilder < GTools.length; ++MenuItemBuilder) l.add(GTools[MenuItemBuilder].getParent());
            try {
              (0, CollaborationMergeUtils.blockChanges)(t, l);
              for (MenuItemBuilder = 0; MenuItemBuilder < GTools.length; ++MenuItemBuilder) {
                var d,
                  u = GTools[MenuItemBuilder],
                  p = u.getParent(),
                  g = u.getNext(),
                  h = u.getAnchorPoints(),
                  f = false;
                if (u.getProperty("closed"))
                  for (
                    d = h.getFirstChild();
                    null !== d && !d.hasFlag(GCore.GNode.Flag.Selected);
                    d = d.getNext()
                  );
                else
                  (d = h.getFirstChild()).hasFlag(GCore.GNode.Flag.Selected) ||
                    (f = true);
                var m = d,
                  y = m,
                  v = m ? m.getNext() || m.getPrevious() : null,
                  _ = false;
                for (
                  u.getProperty("closed") && (_ = true);
                  null !== m &&
                  (m.hasFlag(GCore.GNode.Flag.Selected) || f) &&
                  null !== v;

                ) {
                  var b,
                    w = new GCore.GPath(),
                    C = w.getAnchorPoints();
                  if (
                    ((f = false),
                    w.assignFrom(u),
                    p.insertChild(w, g),
                    c.push(w),
                    (d = h.getNextPoint(m)),
                    _)
                  )
                    (b = new GCore.GPathBase.AnchorPoint()).deserialize(
                      m.serialize()
                    ),
                      (m = b),
                      (_ = false);
                  else h.removeChild(m);
                  for (
                    C.appendChild(m);
                    null !== d &&
                    !d.hasFlag(GCore.GNode.Flag.Selected) &&
                    h.getFirstChild();

                  )
                    (v = h.getNextPoint(d)),
                      h.removeChild(d),
                      C.appendChild(d),
                      (d = v);
                  if (
                    null !== d &&
                    d.hasFlag(GCore.GNode.Flag.Selected) &&
                    h.getFirstChild()
                  )
                    (b = new GCore.GPathBase.AnchorPoint()).deserialize(
                      d.serialize()
                    ),
                      C.appendChild(b),
                      (v = (m = d) === y ? null : h.getNextPoint(d));
                  else v = null;
                  w.isLine() &&
                    (w.getPaintLayers().getBorderLayers(true).length ||
                      (u.getPaintLayers().getFillLayers(true).length
                        ? w
                            .getPaintLayers()
                            .appendChild(
                              new GCore.GStylable.BorderPaintLayer(
                                GCore.GRGBColor.BLACK
                              )
                            )
                        : w
                            .getPaintLayers()
                            .appendChild(
                              u.getPaintLayers().getFillLayers(true)[0]
                            )));
                }
                p.removeChild(u);
              }
            } finally {
              (0, CollaborationMergeUtils.releaseChanges)(t, l),
                c.length && t.updateSelection(false, c.slice(-1));
            }
          } finally {
            t.commitTransaction(GCore.GLocale.get(this.getTitle()));
          }
        }
      }),
      (l.prototype._isPathSplittable = function (e) {
        var t = false,
          n = GTools.GElementEditor.getEditor(e),
          GCore = n ? n.getPartSelection() : null;
        if (GCore && GCore.length)
          for (var CollaborationMergeUtils = 0; !t && CollaborationMergeUtils < GCore.length; ++CollaborationMergeUtils)
            GCore[CollaborationMergeUtils].type == GTools.GPathEditor.PartType.Point &&
              (e.getProperty("closed") ||
                (GCore[CollaborationMergeUtils].point != e.getAnchorPoints().getFirstChild() &&
                  GCore[CollaborationMergeUtils].point != e.getAnchorPoints().getLastChild())) &&
              (t = true);
        return t;
      }),
      (l.prototype.toString = function () {
        return "[Object GSplitLineAction]";
      }),
      (exports.exports = l);
  }