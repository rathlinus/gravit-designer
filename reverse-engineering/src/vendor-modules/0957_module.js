/**
 * chunk.vendor.js Module #957
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      (i(4), i(32), i(33));
      const n = 1,
        r = i(958);
      class o {
        constructor(e, t) {
          ((this.name = e), (this.data = t));
        }
      }
      e.exports = (e) => {
        e.WebSocketClient = class extends (
          class {
            constructor() {
              this._events = {};
            }
            on(e, t) {
              return (
                this._events[e] || (this._events[e] = []),
                this._events[e].push(t),
                this
              );
            }
            off(e, t) {
              if (this._events[e]) {
                const i = this._events[e].findIndex((e) => e === t);
                -1 !== i && this._events[e].splice(i, 1);
              }
              return this;
            }
            trigger(e, t) {
              this._events[e] &&
                this._events[e].forEach((e) => {
                  e.call(null, t);
                });
            }
          }
        ) {
          constructor() {
            (super(),
              (this._ws = null),
              (this._keepAlive = null),
              (this._token = null));
          }
          setToken(e) {
            this._token = e;
          }
          getToken() {
            return this._token || e.token;
          }
          connect(e) {
            let { keepAlive: t = !0, autoReconnect: i = !0 } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const a = () => {
              ((this._ws = this._open(e)),
                t &&
                  (this._keepAlive = setInterval(() => {
                    this.isListening() &&
                      navigator.onLine &&
                      this._ws.readyState === n &&
                      this._ws.send("ping");
                  }, 5e4)),
                (this._ws.onmessage = (e) => {
                  const t = JSON.parse(e.data),
                    { name: i, data: n } = t;
                  this.trigger(i, new o(i, n));
                }),
                (this._ws.onclose = (e) => {
                  if (
                    (this._keepAlive && clearInterval(this._keepAlive),
                    i && e.code !== r.NORMAL_CLOSURE)
                  ) {
                    const e = () => {
                      (window.removeEventListener("online", e), a());
                    };
                    navigator.onLine
                      ? setTimeout(e, 300)
                      : window.addEventListener("online", e);
                  }
                }));
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
            (this._keepAlive && clearInterval(this._keepAlive),
              this._ws && this._ws.close(r.NORMAL_CLOSURE, e));
          }
          _open(t) {
            if (void 0 === window.WebSocket) throw "Unsupported Websocket";
            const i = {
              token: this.getToken(),
            };
            return new WebSocket(e.getUrl(e.websocketURL + t, i));
          }
        };
      };
    }