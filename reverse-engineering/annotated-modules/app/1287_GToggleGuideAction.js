/**
 * Webpack Module #1287
 * Type: class
 * Name: GToggleGuideAction
 */

function (e, t, n) {
    "use strict";
    n(20) /* polyfill_RegExp_exec */, n(3) /* polyfill_RegExp_toString */, n(34) /* polyfill_String_replace */;
    var o = n(1) /* module */,
      i = n(18) /* MenuItemBuilder */,
      a = n(31) /* GAction */;
    n(173) /* stub_requires_1 */;
    function r(e, t) {
      (this._guideId = e), (this._guideName = t);
    }
    o.GObject.inherit(r, a),
      (r.ID = "view.toggle-guide"),
      (r.prototype._guideId = null),
      (r.prototype._guideName = !1),
      (r.prototype.getId = function () {
        return r.ID + "." + this._guideId;
      }),
      (r.prototype.getTitle = function () {
        return o.GLocale.get(
          new o.GLocaleKey("GCommonNames", "text.snap-to-action")
        ).replace("%action", this._guideName);
      }),
      (r.prototype.getCategory = function () {
        return i.CATEGORY_VIEW_SNAP;
      }),
      (r.prototype.getGroup = function () {
        return "snap/guide";
      }),
      (r.prototype.isCheckable = function () {
        return !0;
      }),
      (r.prototype.isEnabled = function () {
        return !gDesigner.getSetting("snap_disabled");
      }),
      (r.prototype.isChecked = function () {
        return gDesigner.getSetting("snap_guides").indexOf(this._guideId) >= 0;
      }),
      (r.prototype.execute = function () {
        var e = gDesigner.getSetting("snap_guides").slice(),
          t = e.indexOf(this._guideId);
        t >= 0 ? e.splice(t, 1) : e.push(this._guideId),
          gDesigner.setSetting("snap_guides", e);
      }),
      (r.prototype.toString = function () {
        return "[Object GToggleGuideAction]";
      }),
      (e.exports = r);
  }