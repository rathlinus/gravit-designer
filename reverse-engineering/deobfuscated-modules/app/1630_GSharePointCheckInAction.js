/**
 * Webpack Module #1630
 * Type: class
 * Name: GSharePointCheckInAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */;
    var GCore = require(1) /* GCore */,
      a = _interopRequireDefault(require(443) /* module_443 */);
    const { isExecutingOnMSTeamsSync: r } = a.default;
    var MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    const Item = require(1152) /* Item */,
      GSystemDialog = require(44) /* GSystemDialog */,
      GSharepointCheckInDialog = require(1631) /* GSharepointCheckInDialog */,
      GDocumentEvent = require(78) /* GDocumentEvent */;
    function g() {}
    GCore.GObject.inherit(g, GAction),
      (g.ID = "file.sharepoint-checkin"),
      (g.TITLE = new GCore.GLocaleKey("GSharePointCheckInAction", "title")),
      (g.prototype.getId = function () {
        return g.ID;
      }),
      (g.prototype.getTitle = function () {
        return g.TITLE;
      }),
      (g.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE;
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
        return !!module && module instanceof Item.Item;
      }),
      (g.prototype.isVisible = function () {
        return this._isSupported();
      }),
      (g.prototype.execute = async function () {
        try {
          const e = gDesigner.getActiveDocument();
          if (e.isModified())
            return void GSystemDialog.alert(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GSharePointCheckInAction",
                  "text.doc-modified-save-before-check-in"
                )
              ).replace("%title", e.getTitle())
            );
          const t = e.getStorageItem(),
            n = t.getCloudClient(),
            _interopRequireDefault = await n.getLibrarySettings();
          await GSharepointCheckInDialog.openCheckInDialog(_interopRequireDefault).then(async (n) => {
            let { ok: _interopRequireDefault, comment: GCore, type: a } = n;
            _interopRequireDefault &&
              (await t.checkIn(GCore, a),
              gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.SynchronismUpdated, e)));
          });
        } catch (e) {
          GSystemDialog.alert(e.message);
        }
      }),
      (g.prototype.toString = function () {
        return "[Object GSharePointCheckInAction]";
      }),
      (exports.exports = g);
  }