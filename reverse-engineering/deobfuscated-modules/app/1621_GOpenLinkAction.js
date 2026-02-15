/**
 * Webpack Module #1621
 * Type: class
 * Name: GOpenLinkAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      i = (require(18) /* MenuItemBuilder */, require(31) /* GAction */);
    function a(e) {
      let { name: module, category: require, group: i, link: a, icon: r, builder: s } = e;
      (this._name = module),
        (this._category = require),
        (this._group = i),
        (this._link = a),
        (this._builder = s),
        (this._title = new GCore.GLocaleKey("GOpenLinkAction", "title." + module)),
        (this._icon = r);
    }
    (a.Links = require(1622) /* DataModule_1622 */),
      GCore.GObject.inherit(a, i),
      (a.ID = "open-link"),
      (a.prototype._name = null),
      (a.prototype._title = null),
      (a.prototype.getIcon = function () {
        return this._icon || null;
      }),
      (a.prototype.getId = function () {
        return a.ID + "." + this._name;
      }),
      (a.prototype.getTitle = function () {
        return this._title;
      }),
      (a.prototype.getCategory = function () {
        return this._category;
      }),
      (a.prototype.getGroup = function () {
        return this._group;
      }),
      (a.prototype.isEnabled = function () {
        return true;
      }),
      (a.prototype.execute = function () {
        if (this._link || this._builder) {
          let e =
            (this._builder &&
              "function" == typeof this._builder &&
              this._builder()) ||
            this._link;
          e && gContainer.openExternalLink(null, e);
        }
      }),
      (a.prototype.toString = function () {
        return "[Object GOpenLinkAction]";
      }),
      (exports.exports = a);
  }