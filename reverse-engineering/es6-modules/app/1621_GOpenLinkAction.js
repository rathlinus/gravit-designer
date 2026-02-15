/**
 * Webpack Module #1621
 * Type: class
 * Name: GOpenLinkAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    i = (require(18) /* MenuItemBuilder */, require(31)) /* GAction */;
  class a extends i {
    constructor(e) {
      super();
      let { name: module, category: require, group: i, link: a, icon: r, builder: s } = e;
      ((this._name = module),
      (this._category = require),
      (this._group = i),
      (this._link = a),
      (this._builder = s),
      (this._title = new GCore.GLocaleKey('GOpenLinkAction', 'title.' + module)),
      (this._icon = r));
    }

    _name = null;
    _title = null;

    getIcon() {
      return this._icon || null;
    }

    getId() {
      return a.ID + '.' + this._name;
    }

    getTitle() {
      return this._title;
    }

    getCategory() {
      return this._category;
    }

    getGroup() {
      return this._group;
    }

    isEnabled() {
      return true;
    }

    execute() {
      if (this._link || this._builder) {
        let e =
          (this._builder && 'function' == typeof this._builder && this._builder()) || this._link;
        e && gContainer.openExternalLink(null, e);
      }
    }

    toString() {
      return '[Object GOpenLinkAction]';
    }

    static Links = require(1622);

    static ID = 'open-link';

  }
  exports.exports = a;
}