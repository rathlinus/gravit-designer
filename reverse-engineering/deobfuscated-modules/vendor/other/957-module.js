/**
 * Module 957
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  "use strict";
  require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
  const n = 1, r = require(958) /* module */;
  class o {
    constructor(e, t) {
      this.name = e, this.data = t;
    }
  }
  exports.exports = e => {
    e.WebSocketClient = class extends class {
      constructor() {
        this._events = {};
      }
      on(e, t) {
        return this._events[e] || (this._events[e] = []), this._events[e].push(t), this;
      }
      off(e, t) {
        if (this._events[e]) {
          const i = this._events[e].findIndex(e => e === t);
          -1 !== i && this._events[e].splice(i, 1);
        }
        return this;
      }
      trigger(e, t) {
        this._events[e] && this._events[e].forEach(e => {
          e.call(null, t);
        });
      }
    } {
      constructor() {
        super(), this._ws = null, this._keepAlive = null, this._token = null;
      }
      setToken(e) {
        this._token = e;
      }
      getToken() {
        return this._token || e.token;
      }
      connect(e) {
        let {
          keepAlive: module = true,
          autoReconnect: require = true
        } = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const a = () => {
          this._ws = this._open(e), module && (this._keepAlive = setInterval(() => {
            this.isListening() && navigator.onLine && this._ws.readyState === n && this._ws.send("ping");
          }, 50000)), this._ws.onmessage = e => {
            const module = JSON.parse(e.data), {
                name: require,
                data: n
              } = module;
            this.trigger(require, new o(require, n));
          }, this._ws.onclose = e => {
            if (this._keepAlive && clearInterval(this._keepAlive), require && e.code !== r.NORMAL_CLOSURE) {
              const e = () => {
                window.removeEventListener("online", e), a();
              };
              navigator.onLine ? setTimeout(e, 300) : window.addEventListener("online", e);
            }
          };
        };
        a();
      }
      isOpened() {
        return !!this._ws;
      }
      isListening() {
        return this.isOpened() && this._ws.readyState === n;
      }
      close(e) {
        this._keepAlive && clearInterval(this._keepAlive), this._ws && this._ws.close(r.NORMAL_CLOSURE, e);
      }
      _open(t) {
        if (undefined === window.WebSocket)
          throw "Unsupported Websocket";
        const require = { token: this.getToken() };
        return new WebSocket(e.getUrl(e.websocketURL + t, require));
      }
    };
  };
}
