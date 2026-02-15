/**
 * Webpack Module #1630
 * Type: class
 * Name: GSharePointCheckInAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */;
    var i = require(1) /* module */,
      a = o(require(443) /* module_443 */);
    const { isExecutingOnMSTeamsSync: r } = a.default;
    var s = require(18) /* MenuItemBuilder */,
      l = require(31) /* GAction */;
    const c = require(1152) /* Item */,
      d = require(44) /* GSystemDialog */,
      u = require(1631) /* module_1631 */,
      p = require(78) /* GDocumentEvent */;
    function g() {}
    i.GObject.inherit(g, l),
      (g.ID = "file.sharepoint-checkin"),
      (g.TITLE = new i.GLocaleKey("GSharePointCheckInAction", "title")),
      (g.prototype.getId = function () {
        return g.ID;
      }),
      (g.prototype.getTitle = function () {
        return g.TITLE;
      }),
      (g.prototype.getCategory = function () {
        return s.CATEGORY_FILE;
      }),
      (g.prototype.getGroup = function () {
        return "file";
      }),
      (g.prototype.isEnabled = function () {
        return (
          !!this._isSupported() &&
          gDesigner.getActiveDocument().getStorageItem().isCheckedOutByMe()
        );
      }),
      (g.prototype._isSupported = function () {
        if (!r()) return false;
        const exports = gDesigner.getActiveDocument();
        if (!exports) return false;
        const module = exports.getStorageItem();
        return !!module && module instanceof c.Item;
      }),
      (g.prototype.isVisible = function () {
        return this._isSupported();
      }),
      (g.prototype.execute = async function () {
        try {
          const e = gDesigner.getActiveDocument();
          if (e.isModified())
            return void d.alert(
              i.GLocale.get(
                new i.GLocaleKey(
                  "GSharePointCheckInAction",
                  "text.doc-modified-save-before-check-in"
                )
              ).replace("%title", e.getTitle())
            );
          const t = e.getStorageItem(),
            n = t.getCloudClient(),
            o = await n.getLibrarySettings();
          await u.openCheckInDialog(o).then(async (n) => {
            let { ok: o, comment: i, type: a } = n;
            o &&
              (await t.checkIn(i, a),
              gDesigner.trigger(new p(p.Type.SynchronismUpdated, e)));
          });
        } catch (e) {
          d.alert(e.message);
        }
      }),
      (g.prototype.toString = function () {
        return "[Object GSharePointCheckInAction]";
      }),
      (exports.exports = g);
  }