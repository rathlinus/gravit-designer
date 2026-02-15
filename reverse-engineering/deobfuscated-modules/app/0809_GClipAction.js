/**
 * Webpack Module #809
 * Type: class
 * Name: GClipAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(40) /* CollaborationMergeUtils */,
      r = require(67) /* GRichTooltipConfig */,
      s = require(10) /* AppSettings */,
      l = require(18) /* MenuItemBuilder */,
      c = require(106) /* GElementAction */;
    function d() {
      d.TOOLTIP_CONFIG = {
        [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
          title: o.GLocale.get(
            new o.GLocaleKey("GClipAction", "tooltip-title")
          ),
          description: o.GLocale.get(
            new o.GLocaleKey("GClipAction", "tooltip-description")
          ),
          video: s.gApi.getRichTooltipVideoURL("Clip.mp4"),
          learnMore:
            "",
        }),
      };
    }
    o.GObject.inherit(d, c),
      (d.ID = "modify.clip"),
      (d.TITLE = new o.GLocaleKey("GClipAction", "title")),
      (d.TOOLTIP_CONFIG = null),
      (d.prototype.getId = function () {
        return d.ID;
      }),
      (d.prototype.getTitle = function () {
        return d.TITLE;
      }),
      (d.prototype.getIcon = function () {
        return "gravit-icon-clip-circle";
      }),
      (d.prototype.getCategory = function () {
        return l.CATEGORY_MODIFY;
      }),
      (d.prototype.getGroup = function () {
        return "structure-group";
      }),
      (d.prototype.isEnabled = function () {
        if (!c.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getIndividualSelection();
          return module && module.length > 1;
        }
        return false;
      }),
      (d.prototype.getShortcut = function () {
        return [i.GKey.Constant.OPTION, i.GKey.Constant.META, "M"];
      }),
      (d.prototype.execute = function (e, t) {
        var n = gDesigner.getActiveDocument().getEditor(),
          i = gDesigner.getActiveDocument().getScene(),
          r = o.GNode.order(n.getIndividualSelection().slice(), e),
          s = r.shift();
        if (!s.isLocked()) {
          var l,
            c = s.getPaintBBox();
          t || n.beginTransaction();
          try {
            l = new Set();
            for (var d = 0; d < r.length; ++d) l.add(r[d].getParent());
            try {
              (0, a.blockChanges)(n, l, i, s);
              for (d = 0; d < r.length; ++d) {
                var u = r[d];
                u.validateInsertion(s) &&
                  u.getPaintBBox() &&
                  c &&
                  u.getPaintBBox().intersectsRect(c) &&
                  (u.getParent().removeChild(u), s.appendChild(u));
              }
            } finally {
              (0, a.releaseChanges)(n, l, i, s), n.updateSelection(false, [s]);
            }
          } finally {
            t ||
              n.commitTransaction(
                o.GLocale.get(
                  new o.GLocaleKey("GClipAction", "text.clip-selecion")
                )
              );
          }
        }
      }),
      (d.prototype.getTooltipConfig = function (e) {
        return e && d.TOOLTIP_CONFIG[e];
      }),
      (d.prototype.toString = function () {
        return "[Object GClipAction]";
      }),
      (exports.exports = d);
  }