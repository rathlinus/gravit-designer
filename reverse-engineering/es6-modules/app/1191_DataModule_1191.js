/**
 * Webpack Module #1191
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(4) /* stub_requires_668 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  const { GObject: o } = require(1) /* GCore */,
    { GPlatform: i } = require(15);
  class a extends o {
    constructor() {
      super();
      this._children = [];
    }

    _children = null;

    clear() {
      (this._clearChildren(), this._clearOwnData());
    }

    _clearOwnData() {}

    _clearChildren() {
      (this._children && this._children.length && this._children.forEach((e) => e.clear()),
        (this._children = []));
    }

    clearChildren() {
      this._clearChildren();
    }

    getChildren() {
      return this._children;
    }

    addChild(e) {
      this._children.push(e);
    }

    scrollIntoView() {}

    setVisiblity(e) {
      throw Error('Not implemented!');
    }

    _scrollToElement(e) {
      if (!e || !e[0]) return;
      const module = i.webBrowser === i.constructor.WebBrowser.Firefox,
        require = module ? 'start' : 'nearest',
        o = module ? 'auto' : 'smooth';
      'function' == typeof e[0].scrollIntoView &&
        e[0].scrollIntoView({ behavior: o, block: require });
    }

  }
  exports.exports = a;
}