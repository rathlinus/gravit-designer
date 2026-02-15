/**
 * Webpack Module #1670
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(4) /* stub_requires_668 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  require(1) /* GCore */;
  (require(85) /* GContainer */, require(1671)) /* GModule */;
  class o {
    constructor(e) {
      this._storage = e;
    }

    _plugins = null;
    _storage = null;

    load() {
      try {
        ((this._plugins = this._storage.getPlugins()),
          this._plugins &&
            this._plugins.forEach((e) => {
              try {
                e.load(this._storage);
              } catch (e) {
                console.error('PluginManager: Could not load plugin', e);
              }
            }));
      } catch (e) {
        console.error('PluginManager: Could not load plugins', e);
      }
    }

    init(e) {
      if (this._plugins && this._plugins.length) {
        let t = () => ({
            actions: [],
            sidebars: [],
            panels: [],
            tools: [],
            properties: [],
          }),
          n = t();
        (this._plugins.forEach((e) => {
          try {
            let o = t();
            (e.init(o),
              Object.keys(o).forEach((e) => {
                n[e] = n[e].concat(o[e]);
              }));
          } catch (e) {
            console.error('PluginManager: Could not initilize plugin', e);
          }
        }),
          Object.keys(n).forEach((t) => {
            e[t] = e[t].concat(n[t]);
          }));
      }
    }

    start() {
      this._plugins &&
        this._plugins.length &&
        this._plugins.forEach((e) => {
          try {
            e.start();
          } catch (e) {
            console.error('PluginManager: Could not start plugin', e);
          }
        });
    }

    unload(e) {
      this._plugins &&
        this._plugins.length &&
        this._plugins.forEach((t) => {
          try {
            t.unload(this._storage, e);
          } catch (e) {
            console.error('PluginManager: Could not unload plugin', e);
          }
        });
    }

  }
  exports.exports = o;
}