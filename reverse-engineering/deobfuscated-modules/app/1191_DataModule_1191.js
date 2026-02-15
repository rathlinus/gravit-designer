/**
 * Webpack Module #1191
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    const { GObject: o } = require(1) /* GCore */,
      { GPlatform: i } = require(15) /* GEditor */;
    function a() {
      this._children = [];
    }
    o.inherit(a, o),
      (a.prototype._children = null),
      (a.prototype.clear = function () {
        this._clearChildren(), this._clearOwnData();
      }),
      (a.prototype._clearOwnData = function () {}),
      (a.prototype._clearChildren = function () {
        this._children &&
          this._children.length &&
          this._children.forEach((e) => e.clear()),
          (this._children = []);
      }),
      (a.prototype.clearChildren = function () {
        this._clearChildren();
      }),
      (a.prototype.getChildren = function () {
        return this._children;
      }),
      (a.prototype.addChild = function (e) {
        this._children.push(e);
      }),
      (a.prototype.scrollIntoView = function () {}),
      (a.prototype.setVisiblity = function (e) {
        throw Error("Not implemented!");
      }),
      (a.prototype._scrollToElement = function (e) {
        if (!e || !e[0]) return;
        const module = i.webBrowser === i.constructor.WebBrowser.Firefox,
          require = module ? "start" : "nearest",
          o = module ? "auto" : "smooth";
        "function" == typeof e[0].scrollIntoView &&
          e[0].scrollIntoView({ behavior: o, block: require });
      }),
      (exports.exports = a);
  }