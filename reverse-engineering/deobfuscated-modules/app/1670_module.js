/**
 * Webpack Module #1670
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    require(1) /* module */;
    require(85) /* GContainer */, require(1671) /* GModule */;
    function o(e) {
      this._storage = e;
    }
    (o.prototype._plugins = null),
      (o.prototype._storage = null),
      (o.prototype.load = function () {
        try {
          (this._plugins = this._storage.getPlugins()),
            this._plugins &&
              this._plugins.forEach((e) => {
                try {
                  e.load(this._storage);
                } catch (e) {
                  console.error("PluginManager: Could not load plugin", e);
                }
              });
        } catch (e) {
          console.error("PluginManager: Could not load plugins", e);
        }
      }),
      (o.prototype.init = function (e) {
        if (this._plugins && this._plugins.length) {
          let t = () => ({
              actions: [],
              sidebars: [],
              panels: [],
              tools: [],
              properties: [],
            }),
            n = t();
          this._plugins.forEach((e) => {
            try {
              let o = t();
              e.init(o),
                Object.keys(o).forEach((e) => {
                  n[e] = n[e].concat(o[e]);
                });
            } catch (e) {
              console.error("PluginManager: Could not initilize plugin", e);
            }
          }),
            Object.keys(n).forEach((t) => {
              e[t] = e[t].concat(n[t]);
            });
        }
      }),
      (o.prototype.start = function () {
        this._plugins &&
          this._plugins.length &&
          this._plugins.forEach((e) => {
            try {
              e.start();
            } catch (e) {
              console.error("PluginManager: Could not start plugin", e);
            }
          });
      }),
      (o.prototype.unload = function (e) {
        this._plugins &&
          this._plugins.length &&
          this._plugins.forEach((t) => {
            try {
              t.unload(this._storage, e);
            } catch (e) {
              console.error("PluginManager: Could not unload plugin", e);
            }
          });
      }),
      (exports.exports = o);
  }