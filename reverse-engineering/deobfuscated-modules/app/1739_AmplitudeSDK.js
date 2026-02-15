/**
 * Webpack Module #1739
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require.r(module),
      require.d(module, "createInstance", function () {
        return Le;
      }),
      require.d(module, "add", function () {
        return ke;
      }),
      require.d(module, "flush", function () {
        return Oe;
      }),
      require.d(module, "getDeviceId", function () {
        return Fe;
      }),
      require.d(module, "getSessionId", function () {
        return Re;
      }),
      require.d(module, "getUserId", function () {
        return Me;
      }),
      require.d(module, "groupIdentify", function () {
        return Ne;
      }),
      require.d(module, "identify", function () {
        return Be;
      }),
      require.d(module, "init", function () {
        return Ue;
      }),
      require.d(module, "logEvent", function () {
        return $e;
      }),
      require.d(module, "remove", function () {
        return je;
      }),
      require.d(module, "reset", function () {
        return Ke;
      }),
      require.d(module, "revenue", function () {
        return Ve;
      }),
      require.d(module, "setDeviceId", function () {
        return He;
      }),
      require.d(module, "setGroup", function () {
        return We;
      }),
      require.d(module, "setOptOut", function () {
        return ze;
      }),
      require.d(module, "setSessionId", function () {
        return qe;
      }),
      require.d(module, "setTransport", function () {
        return Ye;
      }),
      require.d(module, "setUserId", function () {
        return Xe;
      }),
      require.d(module, "track", function () {
        return Qe;
      }),
      require.d(module, "runQueuedFunctions", function () {
        return ne;
      }),
      require.d(module, "Revenue", function () {
        return O;
      }),
      require.d(module, "Identify", function () {
        return k;
      }),
      require.d(module, "Types", function () {
        return o;
      });
    var o = {};
    require.r(o),
      require.d(o, "ServerZone", function () {
        return m;
      }),
      require.d(o, "SpecialEventType", function () {
        return w;
      }),
      require.d(o, "IdentifyOperation", function () {
        return _;
      }),
      require.d(o, "RevenueProperty", function () {
        return b;
      }),
      require.d(o, "LogLevel", function () {
        return f;
      }),
      require.d(o, "PluginType", function () {
        return g;
      }),
      require.d(o, "Status", function () {
        return h;
      }),
      require.d(o, "TransportType", function () {
        return V;
      });
    var i = function (e, t) {
      return (i =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var require in t)
            Object.prototype.hasOwnProperty.call(t, require) && (e[require] = t[require]);
        })(e, t);
    };
    function a(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Class extends value " + String(t) + " is not a constructor or null"
        );
      function require() {
        this.constructor = e;
      }
      i(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((require.prototype = t.prototype), new require()));
    }
    var r = function () {
      return (r =
        Object.assign ||
        function (e) {
          for (var module, require = 1, o = arguments.length; require < o; require++)
            for (var i in (module = arguments[require]))
              Object.prototype.hasOwnProperty.call(module, i) && (e[i] = module[i]);
          return e;
        }).apply(this, arguments);
    };
    function s(e, t) {
      var n = {};
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) &&
          t.indexOf(o) < 0 &&
          (n[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (o = Object.getOwnPropertySymbols(e); i < o.length; i++)
          t.indexOf(o[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, o[i]) &&
            (n[o[i]] = e[o[i]]);
      }
      return n;
    }
    function l(e, t, n, o) {
      return new (n || (n = Promise))(function (i, a) {
        function r(e) {
          try {
            l(o.next(e));
          } catch (e) {
            a(e);
          }
        }
        function s(e) {
          try {
            l(o.throw(e));
          } catch (e) {
            a(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(r, s);
        }
        l((o = o.apply(e, t || [])).next());
      });
    }
    function c(e, t) {
      var n,
        o,
        i,
        a = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        r = Object.create(
          ("function" == typeof Iterator ? Iterator : Object).prototype
        );
      return (
        (r.next = s(0)),
        (r.throw = s(1)),
        (r.return = s(2)),
        "function" == typeof Symbol &&
          (r[Symbol.iterator] = function () {
            return this;
          }),
        r
      );
      function s(s) {
        return function (l) {
          return (function (s) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; r && ((r = 0), s[0] && (a = 0)), a; )
              try {
                if (
                  ((n = 1),
                  o &&
                    (i =
                      2 & s[0]
                        ? o.return
                        : s[0]
                        ? o.throw || ((i = o.return) && i.call(o), 0)
                        : o.next) &&
                    !(i = i.call(o, s[1])).done)
                )
                  return i;
                switch (((o = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                  case 0:
                  case 1:
                    i = s;
                    break;
                  case 4:
                    return a.label++, { value: s[1], done: false };
                  case 5:
                    a.label++, (o = s[1]), (s = [0]);
                    continue;
                  case 7:
                    (s = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !((i = a.trys),
                      (i = i.length > 0 && i[i.length - 1]) ||
                        (6 !== s[0] && 2 !== s[0]))
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                      a.label = s[1];
                      break;
                    }
                    if (6 === s[0] && a.label < i[1]) {
                      (a.label = i[1]), (i = s);
                      break;
                    }
                    if (i && a.label < i[2]) {
                      (a.label = i[2]), a.ops.push(s);
                      break;
                    }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                s = t.call(e, a);
              } catch (e) {
                (s = [6, e]), (o = 0);
              } finally {
                n = i = 0;
              }
            if (5 & s[0]) throw s[1];
            return { value: s[0] ? s[1] : undefined, done: true };
          })([s, l]);
        };
      }
    }
    Object.create;
    function d(e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        o = 0;
      if (n) return n.call(e);
      if (e && "number" == typeof e.length)
        return {
          next: function () {
            return (
              e && o >= e.length && (e = undefined),
              { value: e && e[o++], done: !e }
            );
          },
        };
      throw new TypeError(
        t ? "Object is not iterable." : "Symbol.iterator is not defined."
      );
    }
    function u(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var o,
        i,
        a = n.call(e),
        r = [];
      try {
        for (; (undefined === t || t-- > 0) && !(o = a.next()).done; )
          r.push(o.value);
      } catch (e) {
        i = { error: e };
      } finally {
        try {
          o && !o.done && (n = a.return) && n.call(a);
        } finally {
          if (i) throw i.error;
        }
      }
      return r;
    }
    function p(e, t, n) {
      if (n || 2 === arguments.length)
        for (var o, i = 0, a = t.length; i < a; i++)
          (!o && i in t) ||
            (o || (o = Array.prototype.slice.call(t, 0, i)), (o[i] = t[i]));
      return e.concat(o || Array.prototype.slice.call(t));
    }
    Object.create;
    "function" == typeof SuppressedError && SuppressedError;
    var g, h;
    !(function (e) {
      (e.BEFORE = "before"),
        (e.ENRICHMENT = "enrichment"),
        (e.DESTINATION = "destination");
    })(g || (g = {})),
      (function (e) {
        (e.Unknown = "unknown"),
          (e.Skipped = "skipped"),
          (e.Success = "success"),
          (e.RateLimit = "rate_limit"),
          (e.PayloadTooLarge = "payload_too_large"),
          (e.Invalid = "invalid"),
          (e.Failed = "failed"),
          (e.Timeout = "Timeout"),
          (e.SystemError = "SystemError");
      })(h || (h = {}));
    var f,
      m,
      y = "".concat("AMP", "_unsent"),
      v = function (e, t, n) {
        return (
          undefined === t && (t = 0),
          undefined === n && (n = h.Unknown),
          { event: e, code: t, message: n }
        );
      };
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Error = 1)] = "Error"),
        (e[(e.Warn = 2)] = "Warn"),
        (e[(e.Verbose = 3)] = "Verbose");
    })(f || (f = {})),
      (function (e) {
        (e.US = "US"), (e.EU = "EU");
      })(m || (m = {}));
    var _,
      b,
      w,
      C = "Amplitude Logger ",
      x = (function () {
        function exports() {
          this.logLevel = f.None;
        }
        return (
          (exports.prototype.disable = function () {
            this.logLevel = f.None;
          }),
          (exports.prototype.enable = function (e) {
            undefined === e && (e = f.Warn), (this.logLevel = e);
          }),
          (exports.prototype.log = function () {
            for (var exports = [], module = 0; module < arguments.length; module++)
              exports[module] = arguments[module];
            this.logLevel < f.Verbose ||
              console.log("".concat(C, "[Log]: ").concat(exports.join(" ")));
          }),
          (exports.prototype.warn = function () {
            for (var exports = [], module = 0; module < arguments.length; module++)
              exports[module] = arguments[module];
            this.logLevel < f.Warn ||
              console.warn("".concat(C, "[Warn]: ").concat(exports.join(" ")));
          }),
          (exports.prototype.error = function () {
            for (var exports = [], module = 0; module < arguments.length; module++)
              exports[module] = arguments[module];
            this.logLevel < f.Error ||
              console.error("".concat(C, "[Error]: ").concat(exports.join(" ")));
          }),
          exports
        );
      })(),
      S = function () {
        return {
          flushMaxRetries: 12,
          flushQueueSize: 200,
          flushIntervalMillis: 1e4,
          logLevel: f.Warn,
          loggerProvider: new x(),
          optOut: false,
          serverUrl: "https://api2.amplitude.com/2/httpapi",
          serverZone: m.US,
          useBatch: false,
        };
      },
      E = (function () {
        function exports(e) {
          var t, n, o;
          this._optOut = false;
          var i = S();
          (this.apiKey = e.apiKey),
            (this.flushIntervalMillis =
              e.flushIntervalMillis || i.flushIntervalMillis),
            (this.flushMaxRetries = e.flushMaxRetries || i.flushMaxRetries),
            (this.flushQueueSize = e.flushQueueSize || i.flushQueueSize),
            (this.loggerProvider = e.loggerProvider || i.loggerProvider),
            (this.logLevel =
              null !== (t = e.logLevel) && undefined !== t ? t : i.logLevel),
            (this.minIdLength = e.minIdLength),
            (this.plan = e.plan),
            (this.ingestionMetadata = e.ingestionMetadata),
            (this.optOut =
              null !== (n = e.optOut) && undefined !== n ? n : i.optOut),
            (this.serverUrl = e.serverUrl),
            (this.serverZone = e.serverZone || i.serverZone),
            (this.storageProvider = e.storageProvider),
            (this.transportProvider = e.transportProvider),
            (this.useBatch =
              null !== (o = e.useBatch) && undefined !== o ? o : i.useBatch),
            this.loggerProvider.enable(this.logLevel);
          var a = T(e.serverUrl, e.serverZone, e.useBatch);
          (this.serverZone = a.serverZone), (this.serverUrl = a.serverUrl);
        }
        return (
          Object.defineProperty(exports.prototype, "optOut", {
            get: function () {
              return this._optOut;
            },
            set: function (e) {
              this._optOut = e;
            },
            enumerable: false,
            configurable: true,
          }),
          exports
        );
      })(),
      A = function (e, t) {
        return e === m.EU
          ? t
            ? "https://api.eu.amplitude.com/batch"
            : "https://api.eu.amplitude.com/2/httpapi"
          : t
          ? "https://api2.amplitude.com/batch"
          : "https://api2.amplitude.com/2/httpapi";
      },
      T = function (e, t, n) {
        if (
          (undefined === e && (e = ""),
          undefined === t && (t = S().serverZone),
          undefined === n && (n = S().useBatch),
          e)
        )
          return { serverUrl: e, serverZone: undefined };
        var o = [m.US, m.EU].includes(t) ? t : S().serverZone;
        return { serverZone: o, serverUrl: A(o, n) };
      },
      G = (function () {
        function exports() {
          (this.name = "amplitude"),
            (this.type = g.DESTINATION),
            (this.retryTimeout = 1e3),
            (this.throttleTimeout = 3e4),
            (this.storageKey = ""),
            (this.scheduled = false),
            (this.queue = []);
        }
        return (
          (exports.prototype.setup = function (e) {
            var t;
            return l(this, undefined, undefined, function () {
              var n,
                o = this;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (this.config = e),
                      (this.storageKey = ""
                        .concat(y, "_")
                        .concat(this.config.apiKey.substring(0, 10))),
                      [
                        4,
                        null === (t = this.config.storageProvider) ||
                        undefined === t
                          ? undefined
                          : t.get(this.storageKey),
                      ]
                    );
                  case 1:
                    return (
                      (n = i.sent()),
                      this.saveEvents(),
                      n &&
                        n.length > 0 &&
                        Promise.all(
                          n.map(function (e) {
                            return o.execute(e);
                          })
                        ).catch(),
                      [2, Promise.resolve(undefined)]
                    );
                }
              });
            });
          }),
          (exports.prototype.execute = function (e) {
            var t = this;
            return new Promise(function (n) {
              var o = {
                event: e,
                attempts: 0,
                callback: function (e) {
                  return n(e);
                },
                timeout: 0,
              };
              t.addToQueue(o);
            });
          }),
          (exports.prototype.addToQueue = function () {
            for (var exports = this, module = [], require = 0; require < arguments.length; require++)
              module[require] = arguments[require];
            var o = module.filter(function (t) {
              return t.attempts < exports.config.flushMaxRetries
                ? ((t.attempts += 1), true)
                : (exports.fulfillRequest(
                    [t],
                    500,
                    "Event rejected due to exceeded retry count"
                  ),
                  false);
            });
            o.forEach(function (t) {
              (exports.queue = exports.queue.concat(t)),
                0 !== t.timeout
                  ? setTimeout(function () {
                      (t.timeout = 0), exports.schedule(0);
                    }, t.timeout)
                  : exports.schedule(exports.config.flushIntervalMillis);
            }),
              this.saveEvents();
          }),
          (exports.prototype.schedule = function (e) {
            var t = this;
            this.scheduled ||
              ((this.scheduled = true),
              setTimeout(function () {
                t.flush(true).then(function () {
                  (t.scheduled = false), t.queue.length > 0 && t.schedule(e);
                });
              }, e));
          }),
          (exports.prototype.flush = function (e) {
            return (
              undefined === e && (e = false),
              l(this, undefined, undefined, function () {
                var t,
                  n,
                  o,
                  i = this;
                return c(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = []),
                        (n = []),
                        this.queue.forEach(function (e) {
                          return 0 === e.timeout ? t.push(e) : n.push(e);
                        }),
                        (this.queue = n),
                        (r = t),
                        (s = this.config.flushQueueSize),
                        (l = Math.max(s, 1)),
                        (o = r.reduce(function (e, t, n) {
                          var o = Math.floor(n / l);
                          return e[o] || (e[o] = []), e[o].push(t), e;
                        }, [])),
                        [
                          4,
                          Promise.all(
                            o.map(function (t) {
                              return i.send(t, e);
                            })
                          ),
                        ]
                      );
                    case 1:
                      return a.sent(), [2];
                  }
                  var r, s, l;
                });
              })
            );
          }),
          (exports.prototype.send = function (e, t) {
            return (
              undefined === t && (t = true),
              l(this, undefined, undefined, function () {
                var n, o, i, a;
                return c(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!this.config.apiKey)
                        return [
                          2,
                          this.fulfillRequest(
                            e,
                            400,
                            "Event rejected due to missing API key"
                          ),
                        ];
                      (n = {
                        api_key: this.config.apiKey,
                        events: e.map(function (e) {
                          var t = e.event;
                          t.extra;
                          return s(t, ["extra"]);
                        }),
                        options: { min_id_length: this.config.minIdLength },
                      }),
                        (r.label = 1);
                    case 1:
                      return (
                        r.trys.push([1, 3, , 4]),
                        (o = T(
                          this.config.serverUrl,
                          this.config.serverZone,
                          this.config.useBatch
                        ).serverUrl),
                        [4, this.config.transportProvider.send(o, n)]
                      );
                    case 2:
                      return null === (i = r.sent())
                        ? (this.fulfillRequest(
                            e,
                            0,
                            "Unexpected error occurred"
                          ),
                          [2])
                        : t
                        ? (this.handleReponse(i, e), [3, 4])
                        : (this.fulfillRequest(e, i.statusCode, i.status), [2]);
                    case 3:
                      return (
                        (a = r.sent()),
                        this.fulfillRequest(e, 0, String(a)),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              })
            );
          }),
          (exports.prototype.handleReponse = function (e, t) {
            switch (e.status) {
              case h.Success:
                this.handleSuccessResponse(e, t);
                break;
              case h.Invalid:
                this.handleInvalidResponse(e, t);
                break;
              case h.PayloadTooLarge:
                this.handlePayloadTooLargeResponse(e, t);
                break;
              case h.RateLimit:
                this.handleRateLimitResponse(e, t);
                break;
              default:
                this.handleOtherReponse(t);
            }
          }),
          (exports.prototype.handleSuccessResponse = function (e, t) {
            this.fulfillRequest(t, e.statusCode, "Event tracked successfully");
          }),
          (exports.prototype.handleInvalidResponse = function (e, t) {
            var n = this;
            if (
              e.body.missingField ||
              e.body.error.startsWith("Invalid API key")
            )
              this.fulfillRequest(t, e.statusCode, e.body.error);
            else {
              var o = p(
                  p(
                    p(
                      p(
                        [],
                        u(Object.values(e.body.eventsWithInvalidFields)),
                        false
                      ),
                      u(Object.values(e.body.eventsWithMissingFields)),
                      false
                    ),
                    u(Object.values(e.body.eventsWithInvalidIdLengths)),
                    false
                  ),
                  u(e.body.silencedEvents),
                  false
                ).flat(),
                i = new Set(o),
                a = t.filter(function (t, o) {
                  if (!i.has(o)) return true;
                  n.fulfillRequest([t], e.statusCode, e.body.error);
                });
              this.addToQueue.apply(this, p([], u(a), false));
            }
          }),
          (exports.prototype.handlePayloadTooLargeResponse = function (e, t) {
            1 !== t.length
              ? ((this.config.flushQueueSize /= 2),
                this.addToQueue.apply(this, p([], u(t), false)))
              : this.fulfillRequest(t, e.statusCode, e.body.error);
          }),
          (exports.prototype.handleRateLimitResponse = function (e, t) {
            var n = this,
              o = Object.keys(e.body.exceededDailyQuotaUsers),
              i = Object.keys(e.body.exceededDailyQuotaDevices),
              a = e.body.throttledEvents,
              r = new Set(o),
              s = new Set(i),
              l = new Set(a),
              c = t.filter(function (t, o) {
                if (
                  !(
                    (t.event.user_id && r.has(t.event.user_id)) ||
                    (t.event.device_id && s.has(t.event.device_id))
                  )
                )
                  return l.has(o) && (t.timeout = n.throttleTimeout), true;
                n.fulfillRequest([t], e.statusCode, e.body.error);
              });
            this.addToQueue.apply(this, p([], u(c), false));
          }),
          (exports.prototype.handleOtherReponse = function (e) {
            var t = this;
            this.addToQueue.apply(
              this,
              p(
                [],
                u(
                  e.map(function (e) {
                    return (e.timeout = e.attempts * t.retryTimeout), e;
                  })
                ),
                false
              )
            );
          }),
          (exports.prototype.fulfillRequest = function (e, t, n) {
            this.saveEvents(),
              e.forEach(function (e) {
                return e.callback(v(e.event, t, n));
              });
          }),
          (exports.prototype.saveEvents = function () {
            if (this.config.storageProvider) {
              var exports = Array.from(
                this.queue.map(function (e) {
                  return e.event;
                })
              );
              this.config.storageProvider.set(this.storageKey, exports);
            }
          }),
          exports
        );
      })(),
      P = function (e) {
        return e
          ? (e ^ ((16 * Math.random()) >> (e / 4))).toString(16)
          : (
              String(1e7) +
              String(-1e3) +
              String(-4e3) +
              String(-8e3) +
              String(-1e11)
            ).replace(/[018]/g, P);
      };
    !(function (e) {
      (e.SET = "$set"),
        (e.SET_ONCE = "$setOnce"),
        (e.ADD = "$add"),
        (e.APPEND = "$append"),
        (e.PREPEND = "$prepend"),
        (e.REMOVE = "$remove"),
        (e.PREINSERT = "$preInsert"),
        (e.POSTINSERT = "$postInsert"),
        (e.UNSET = "$unset"),
        (e.CLEAR_ALL = "$clearAll");
    })(_ || (_ = {})),
      (function (e) {
        (e.REVENUE_PRODUCT_ID = "$productId"),
          (e.REVENUE_QUANTITY = "$quantity"),
          (e.REVENUE_PRICE = "$price"),
          (e.REVENUE_TYPE = "$revenueType"),
          (e.REVENUE = "$revenue");
      })(b || (b = {})),
      (function (e) {
        (e.IDENTIFY = "$identify"),
          (e.GROUP_IDENTIFY = "$groupidentify"),
          (e.REVENUE = "revenue_amount");
      })(w || (w = {}));
    var D,
      L = function (e) {
        if (Object.keys(e).length > 1e3) return false;
        for (var module in e) {
          var require = e[module];
          if (!I(module, require)) return false;
        }
        return true;
      },
      I = function (e, t) {
        var n, o;
        if ("string" != typeof e) return false;
        if (Array.isArray(t)) {
          var i = true;
          try {
            for (var a = d(t), r = a.next(); !r.done; r = a.next()) {
              var s = r.value;
              if (Array.isArray(s)) return false;
              if ("object" == typeof s) i = i && L(s);
              else if (!["number", "string"].includes(typeof s)) return false;
              if (!i) return false;
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              r && !r.done && (o = a.return) && o.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
        } else {
          if (null == t) return false;
          if ("object" == typeof t) return L(t);
          if (!["number", "string", "boolean"].includes(typeof t)) return false;
        }
        return true;
      },
      k = (function () {
        function exports() {
          (this._propertySet = new Set()), (this._properties = {});
        }
        return (
          (exports.prototype.getUserProperties = function () {
            return r({}, this._properties);
          }),
          (exports.prototype.set = function (e, t) {
            return this._safeSet(_.SET, e, t), this;
          }),
          (exports.prototype.setOnce = function (e, t) {
            return this._safeSet(_.SET_ONCE, e, t), this;
          }),
          (exports.prototype.append = function (e, t) {
            return this._safeSet(_.APPEND, e, t), this;
          }),
          (exports.prototype.prepend = function (e, t) {
            return this._safeSet(_.PREPEND, e, t), this;
          }),
          (exports.prototype.postInsert = function (e, t) {
            return this._safeSet(_.POSTINSERT, e, t), this;
          }),
          (exports.prototype.preInsert = function (e, t) {
            return this._safeSet(_.PREINSERT, e, t), this;
          }),
          (exports.prototype.remove = function (e, t) {
            return this._safeSet(_.REMOVE, e, t), this;
          }),
          (exports.prototype.add = function (e, t) {
            return this._safeSet(_.ADD, e, t), this;
          }),
          (exports.prototype.unset = function (e) {
            return this._safeSet(_.UNSET, e, "-"), this;
          }),
          (exports.prototype.clearAll = function () {
            return (
              (this._properties = {}),
              (this._properties[_.CLEAR_ALL] = "-"),
              this
            );
          }),
          (exports.prototype._safeSet = function (e, t, n) {
            if (this._validate(e, t, n)) {
              var o = this._properties[e];
              return (
                undefined === o && ((o = {}), (this._properties[e] = o)),
                (o[t] = n),
                this._propertySet.add(t),
                true
              );
            }
            return false;
          }),
          (exports.prototype._validate = function (e, t, n) {
            return (
              undefined === this._properties[_.CLEAR_ALL] &&
              !this._propertySet.has(t) &&
              (e === _.ADD
                ? "number" == typeof n
                : e === _.UNSET || e === _.REMOVE || I(t, n))
            );
          }),
          exports
        );
      })(),
      O = (function () {
        function exports() {
          (this.productId = ""), (this.quantity = 1), (this.price = 0);
        }
        return (
          (exports.prototype.setProductId = function (e) {
            return (this.productId = e), this;
          }),
          (exports.prototype.setQuantity = function (e) {
            return e > 0 && (this.quantity = e), this;
          }),
          (exports.prototype.setPrice = function (e) {
            return (this.price = e), this;
          }),
          (exports.prototype.setRevenueType = function (e) {
            return (this.revenueType = e), this;
          }),
          (exports.prototype.setRevenue = function (e) {
            return (this.revenue = e), this;
          }),
          (exports.prototype.setEventProperties = function (e) {
            return L(e) && (this.properties = e), this;
          }),
          (exports.prototype.getEventProperties = function () {
            var e = this.properties ? r({}, this.properties) : {};
            return (
              (e[b.REVENUE_PRODUCT_ID] = this.productId),
              (e[b.REVENUE_QUANTITY] = this.quantity),
              (e[b.REVENUE_PRICE] = this.price),
              (e[b.REVENUE_TYPE] = this.revenueType),
              (e[b.REVENUE] = this.revenue),
              e
            );
          }),
          exports
        );
      })(),
      F = (function () {
        function exports() {
          (this.queue = []), (this.applying = false), (this.plugins = []);
        }
        return (
          (exports.prototype.register = function (e, t) {
            return l(this, undefined, undefined, function () {
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, e.setup(t)];
                  case 1:
                    return n.sent(), this.plugins.push(e), [2];
                }
              });
            });
          }),
          (exports.prototype.deregister = function (e) {
            return (
              this.plugins.splice(
                this.plugins.findIndex(function (t) {
                  return t.name === e;
                }),
                1
              ),
              Promise.resolve()
            );
          }),
          (exports.prototype.reset = function () {
            (this.applying = false), (this.plugins = []);
          }),
          (exports.prototype.push = function (e) {
            var t = this;
            return new Promise(function (n) {
              t.queue.push([e, n]), t.scheduleApply(0);
            });
          }),
          (exports.prototype.scheduleApply = function (e) {
            var t = this;
            this.applying ||
              ((this.applying = true),
              setTimeout(function () {
                t.apply(t.queue.shift()).then(function () {
                  (t.applying = false), t.queue.length > 0 && t.scheduleApply(0);
                });
              }, e));
          }),
          (exports.prototype.apply = function (e) {
            return l(this, undefined, undefined, function () {
              var t, n, o, i, a, s, l, p, h, f, m, y, _, b, w, C, x, S;
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    if (!e) return [2];
                    (t = u(e, 1)),
                      (n = t[0]),
                      (o = u(e, 2)),
                      (i = o[1]),
                      (a = this.plugins.filter(function (e) {
                        return e.type === g.BEFORE;
                      })),
                      (c.label = 1);
                  case 1:
                    c.trys.push([1, 6, 7, 8]),
                      (s = d(a)),
                      (l = s.next()),
                      (c.label = 2);
                  case 2:
                    return l.done ? [3, 5] : [4, l.value.execute(r({}, n))];
                  case 3:
                    (n = c.sent()), (c.label = 4);
                  case 4:
                    return (l = s.next()), [3, 2];
                  case 5:
                    return [3, 8];
                  case 6:
                    return (p = c.sent()), (w = { error: p }), [3, 8];
                  case 7:
                    try {
                      l && !l.done && (C = s.return) && C.call(s);
                    } finally {
                      if (w) throw w.error;
                    }
                    return [7];
                  case 8:
                    (h = this.plugins.filter(function (e) {
                      return e.type === g.ENRICHMENT;
                    })),
                      (c.label = 9);
                  case 9:
                    c.trys.push([9, 14, 15, 16]),
                      (f = d(h)),
                      (m = f.next()),
                      (c.label = 10);
                  case 10:
                    return m.done ? [3, 13] : [4, m.value.execute(r({}, n))];
                  case 11:
                    (n = c.sent()), (c.label = 12);
                  case 12:
                    return (m = f.next()), [3, 10];
                  case 13:
                    return [3, 16];
                  case 14:
                    return (y = c.sent()), (x = { error: y }), [3, 16];
                  case 15:
                    try {
                      m && !m.done && (S = f.return) && S.call(f);
                    } finally {
                      if (x) throw x.error;
                    }
                    return [7];
                  case 16:
                    return (
                      (_ = this.plugins.filter(function (e) {
                        return e.type === g.DESTINATION;
                      })),
                      (b = _.map(function (e) {
                        var t = r({}, n);
                        return e.execute(t).catch(function (e) {
                          return v(t, 0, String(e));
                        });
                      })),
                      Promise.all(b).then(function (e) {
                        var t = u(e, 1)[0];
                        i(t);
                      }),
                      [2]
                    );
                }
              });
            });
          }),
          (exports.prototype.flush = function () {
            return l(this, undefined, undefined, function () {
              var e,
                t,
                n,
                o = this;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (e = this.queue),
                      (this.queue = []),
                      [
                        4,
                        Promise.all(
                          e.map(function (e) {
                            return o.apply(e);
                          })
                        ),
                      ]
                    );
                  case 1:
                    return (
                      i.sent(),
                      (t = this.plugins.filter(function (e) {
                        return e.type === g.DESTINATION;
                      })),
                      (n = t.map(function (e) {
                        return e.flush && e.flush();
                      })),
                      [4, Promise.all(n)]
                    );
                  case 2:
                    return i.sent(), [2];
                }
              });
            });
          }),
          exports
        );
      })(),
      R = (function () {
        function exports(e) {
          undefined === e && (e = "$default"),
            (this.initializing = false),
            (this.q = []),
            (this.dispatchQ = []),
            (this.logEvent = this.track.bind(this)),
            (this.timeline = new F()),
            (this.name = e);
        }
        return (
          (exports.prototype._init = function (e) {
            return l(this, undefined, undefined, function () {
              return c(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (this.config = e),
                      this.timeline.reset(),
                      [4, this.runQueuedFunctions("q")]
                    );
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (exports.prototype.runQueuedFunctions = function (e) {
            return l(this, undefined, undefined, function () {
              var t, n, o, i, a, r;
              return c(this, function (s) {
                switch (s.label) {
                  case 0:
                    (t = this[e]), (this[e] = []), (s.label = 1);
                  case 1:
                    s.trys.push([1, 6, 7, 8]),
                      (n = d(t)),
                      (o = n.next()),
                      (s.label = 2);
                  case 2:
                    return o.done ? [3, 5] : [4, (0, o.value)()];
                  case 3:
                    s.sent(), (s.label = 4);
                  case 4:
                    return (o = n.next()), [3, 2];
                  case 5:
                    return [3, 8];
                  case 6:
                    return (i = s.sent()), (a = { error: i }), [3, 8];
                  case 7:
                    try {
                      o && !o.done && (r = n.return) && r.call(n);
                    } finally {
                      if (a) throw a.error;
                    }
                    return [7];
                  case 8:
                    return [2];
                }
              });
            });
          }),
          (exports.prototype.track = function (e, t, n) {
            var o = (function (e, t, n) {
              return r(
                r(r({}, "string" == typeof e ? { event_type: e } : e), n),
                t && { event_properties: t }
              );
            })(e, t, n);
            return this.dispatch(o);
          }),
          (exports.prototype.identify = function (e, t) {
            var n = (function (e, t) {
              return r(r({}, t), {
                event_type: w.IDENTIFY,
                user_properties: e.getUserProperties(),
              });
            })(e, t);
            return this.dispatch(n);
          }),
          (exports.prototype.groupIdentify = function (e, t, n, o) {
            var i = (function (e, t, n, o) {
              var i;
              return r(r({}, o), {
                event_type: w.GROUP_IDENTIFY,
                group_properties: n.getUserProperties(),
                groups: ((i = {}), (i[e] = t), i),
              });
            })(e, t, n, o);
            return this.dispatch(i);
          }),
          (exports.prototype.setGroup = function (e, t, n) {
            var o = (function (e, t, n) {
              var o,
                i = new k();
              return (
                i.set(e, t),
                r(r({}, n), {
                  event_type: w.IDENTIFY,
                  user_properties: i.getUserProperties(),
                  groups: ((o = {}), (o[e] = t), o),
                })
              );
            })(e, t, n);
            return this.dispatch(o);
          }),
          (exports.prototype.revenue = function (e, t) {
            var n = (function (e, t) {
              return r(r({}, t), {
                event_type: w.REVENUE,
                event_properties: e.getEventProperties(),
              });
            })(e, t);
            return this.dispatch(n);
          }),
          (exports.prototype.add = function (e) {
            return l(this, undefined, undefined, function () {
              return c(this, function (t) {
                return this.config
                  ? [2, this.timeline.register(e, this.config)]
                  : (this.q.push(this.add.bind(this, e)), [2]);
              });
            });
          }),
          (exports.prototype.remove = function (e) {
            return l(this, undefined, undefined, function () {
              return c(this, function (t) {
                return this.config
                  ? [2, this.timeline.deregister(e)]
                  : (this.q.push(this.remove.bind(this, e)), [2]);
              });
            });
          }),
          (exports.prototype.dispatchWithCallback = function (e, t) {
            if (!this.config) return t(v(e, 0, "Client not initialized"));
            this.process(e).then(t);
          }),
          (exports.prototype.dispatch = function (e) {
            return l(this, undefined, undefined, function () {
              var t = this;
              return c(this, function (n) {
                return this.config
                  ? [2, this.process(e)]
                  : [
                      2,
                      new Promise(function (n) {
                        t.dispatchQ.push(t.dispatchWithCallback.bind(t, e, n));
                      }),
                    ];
              });
            });
          }),
          (exports.prototype.process = function (e) {
            return l(this, undefined, undefined, function () {
              var t, n, o;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      i.trys.push([0, 2, , 3]),
                      this.config.optOut
                        ? [2, v(e, 0, "Event skipped due to optOut config")]
                        : [4, this.timeline.push(e)]
                    );
                  case 1:
                    return (
                      200 === (o = i.sent()).code
                        ? this.config.loggerProvider.log(o.message)
                        : this.config.loggerProvider.error(o.message),
                      [2, o]
                    );
                  case 2:
                    return (
                      (t = i.sent()),
                      (n = String(t)),
                      this.config.loggerProvider.error(n),
                      [2, (o = v(e, 0, n))]
                    );
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (exports.prototype.setOptOut = function (e) {
            this.config
              ? (this.config.optOut = Boolean(e))
              : this.q.push(this.setOptOut.bind(this, Boolean(e)));
          }),
          (exports.prototype.flush = function () {
            return this.timeline.flush();
          }),
          exports
        );
      })(),
      M = function (e) {
        return function () {
          for (var module = [], require = 0; require < arguments.length; require++)
            module[require] = arguments[require];
          return { promise: e.apply(undefined, p([], u(module), false)) };
        };
      },
      AmplitudeAnalytics = require(1358) /* AmplitudeAnalytics */,
      B = function () {
        return AmplitudeAnalytics.a.getInstance("$default_instance");
      };
    !(function (e) {
      (e.BEFORE = "before"),
        (e.ENRICHMENT = "enrichment"),
        (e.DESTINATION = "destination");
    })(D || (D = {}));
    var U,
      $,
      j,
      K = (function () {
        function exports() {
          (this.name = "identity"),
            (this.type = D.BEFORE),
            (this.identityStore = B().identityStore);
        }
        return (
          (exports.prototype.execute = function (e) {
            return l(this, undefined, undefined, function () {
              var t;
              return c(this, function (n) {
                return (
                  (t = e.user_properties) &&
                    this.identityStore
                      .editIdentity()
                      .updateUserProperties(t)
                      .commit(),
                  [2, e]
                );
              });
            });
          }),
          (exports.prototype.setup = function (e) {
            return Promise.resolve(undefined);
          }),
          exports
        );
      })();
    !(function (e) {
      (e.SET = "$set"),
        (e.SET_ONCE = "$setOnce"),
        (e.ADD = "$add"),
        (e.APPEND = "$append"),
        (e.PREPEND = "$prepend"),
        (e.REMOVE = "$remove"),
        (e.PREINSERT = "$preInsert"),
        (e.POSTINSERT = "$postInsert"),
        (e.UNSET = "$unset"),
        (e.CLEAR_ALL = "$clearAll");
    })(U || (U = {})),
      (function (e) {
        (e.REVENUE_PRODUCT_ID = "$productId"),
          (e.REVENUE_QUANTITY = "$quantity"),
          (e.REVENUE_PRICE = "$price"),
          (e.REVENUE_TYPE = "$revenueType"),
          (e.REVENUE = "$revenue");
      })($ || ($ = {})),
      (function (e) {
        (e.IDENTIFY = "$identify"),
          (e.GROUP_IDENTIFY = "$groupidentify"),
          (e.REVENUE = "revenue_amount");
      })(j || (j = {}));
    var V,
      H = "AMP",
      W =
        ("".concat(H, "_unsent"),
        function (e) {
          if (Object.keys(e).length > 1e3) return false;
          for (var module in e) {
            var require = e[module];
            if (!z(module, require)) return false;
          }
          return true;
        }),
      z = function (e, t) {
        var n, o;
        if ("string" != typeof e) return false;
        if (Array.isArray(t)) {
          var i = true;
          try {
            for (var a = d(t), r = a.next(); !r.done; r = a.next()) {
              var s = r.value;
              if (Array.isArray(s)) return false;
              if ("object" == typeof s) i = i && W(s);
              else if (!["number", "string"].includes(typeof s)) return false;
              if (!i) return false;
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              r && !r.done && (o = a.return) && o.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
        } else {
          if (null == t) return false;
          if ("object" == typeof t) return W(t);
          if (!["number", "string", "boolean"].includes(typeof t)) return false;
        }
        return true;
      },
      q = (function () {
        function exports() {
          (this._propertySet = new Set()), (this._properties = {});
        }
        return (
          (exports.prototype.getUserProperties = function () {
            return r({}, this._properties);
          }),
          (exports.prototype.set = function (e, t) {
            return this._safeSet(U.SET, e, t), this;
          }),
          (exports.prototype.setOnce = function (e, t) {
            return this._safeSet(U.SET_ONCE, e, t), this;
          }),
          (exports.prototype.append = function (e, t) {
            return this._safeSet(U.APPEND, e, t), this;
          }),
          (exports.prototype.prepend = function (e, t) {
            return this._safeSet(U.PREPEND, e, t), this;
          }),
          (exports.prototype.postInsert = function (e, t) {
            return this._safeSet(U.POSTINSERT, e, t), this;
          }),
          (exports.prototype.preInsert = function (e, t) {
            return this._safeSet(U.PREINSERT, e, t), this;
          }),
          (exports.prototype.remove = function (e, t) {
            return this._safeSet(U.REMOVE, e, t), this;
          }),
          (exports.prototype.add = function (e, t) {
            return this._safeSet(U.ADD, e, t), this;
          }),
          (exports.prototype.unset = function (e) {
            return this._safeSet(U.UNSET, e, "-"), this;
          }),
          (exports.prototype.clearAll = function () {
            return (
              (this._properties = {}),
              (this._properties[U.CLEAR_ALL] = "-"),
              this
            );
          }),
          (exports.prototype._safeSet = function (e, t, n) {
            if (this._validate(e, t, n)) {
              var o = this._properties[e];
              return (
                undefined === o && ((o = {}), (this._properties[e] = o)),
                (o[t] = n),
                this._propertySet.add(t),
                true
              );
            }
            return false;
          }),
          (exports.prototype._validate = function (e, t, n) {
            return (
              undefined === this._properties[U.CLEAR_ALL] &&
              !this._propertySet.has(t) &&
              (e === U.ADD
                ? "number" == typeof n
                : e === U.UNSET || e === U.REMOVE || z(t, n))
            );
          }),
          exports
        );
      })(),
      Y = function (e, t, n) {
        return (
          undefined === t && (t = ""),
          undefined === n && (n = 10),
          [H, t, e.substring(0, n)].filter(Boolean).join("_")
        );
      },
      X = require(611) /* module_611 */,
      Q = function () {
        var e,
          t = Object(X.a)();
        return (
          null === (e = null == t ? undefined : t.location) || undefined === e
            ? undefined
            : e.search
        )
          ? t.location.search
              .substring(1)
              .split("&")
              .filter(Boolean)
              .reduce(function (e, t) {
                var n = t.split("=", 2),
                  o = J(n[0]),
                  i = J(n[1]);
                return i ? ((e[o] = i), e) : e;
              }, {})
          : {};
      },
      J = function (e) {
        undefined === e && (e = "");
        try {
          return decodeURIComponent(e);
        } catch (e) {
          return "";
        }
      },
      Z = {
        utm_source: undefined,
        utm_medium: undefined,
        utm_campaign: undefined,
        utm_term: undefined,
        utm_content: undefined,
        referrer: undefined,
        referring_domain: undefined,
        dclid: undefined,
        gbraid: undefined,
        gclid: undefined,
        fbclid: undefined,
        ko_click_id: undefined,
        msclkid: undefined,
        ttclid: undefined,
        twclid: undefined,
        wbraid: undefined,
      },
      ee = (function () {
        function exports() {}
        return (
          (exports.prototype.parse = function () {
            return l(this, undefined, undefined, function () {
              return c(this, function (e) {
                return [
                  2,
                  r(
                    r(r(r({}, Z), this.getUtmParam()), this.getReferrer()),
                    this.getClickIds()
                  ),
                ];
              });
            });
          }),
          (exports.prototype.getUtmParam = function () {
            var e = Q();
            return {
              utm_source: e.utm_source,
              utm_medium: e.utm_medium,
              utm_campaign: e.utm_campaign,
              utm_term: e.utm_term,
              utm_content: e.utm_content,
            };
          }),
          (exports.prototype.getReferrer = function () {
            var e,
              t,
              n = { referrer: undefined, referring_domain: undefined };
            try {
              (n.referrer = document.referrer || undefined),
                (n.referring_domain =
                  null !==
                    (t =
                      null === (e = n.referrer) || undefined === e
                        ? undefined
                        : e.split("/")[2]) && undefined !== t
                    ? t
                    : undefined);
            } catch (e) {}
            return n;
          }),
          (exports.prototype.getClickIds = function () {
            var e,
              t = Q();
            return (
              ((e = {}).dclid = t.dclid),
              (e.fbclid = t.fbclid),
              (e.gbraid = t.gbraid),
              (e.gclid = t.gclid),
              (e.ko_click_id = t.ko_click_id),
              (e.msclkid = t.msclkid),
              (e.ttclid = t.ttclid),
              (e.twclid = t.twclid),
              (e.wbraid = t.wbraid),
              e
            );
          }),
          exports
        );
      })(),
      te = (function () {
        function exports(e, t) {
          var n, o;
          (this.storage = t.storage),
            (this.storageKey = Y(e, "MKTG")),
            (this.parser = new ee()),
            (this.track = t.track),
            (this.onNewCampaign = t.onNewCampaign),
            (this.disabled = Boolean(t.disabled)),
            (this.trackNewCampaigns = Boolean(t.trackNewCampaigns)),
            (this.trackPageViews = Boolean(t.trackPageViews)),
            (this.excludeReferrers =
              null !== (n = t.excludeReferrers) && undefined !== n ? n : []),
            "undefined" != typeof location &&
              this.excludeReferrers.unshift(location.hostname),
            (this.initialEmptyValue =
              null !== (o = t.initialEmptyValue) && undefined !== o ? o : "EMPTY");
        }
        return (
          (exports.prototype.isNewCampaign = function (e, t) {
            e.referrer;
            var n = s(e, ["referrer"]),
              o = t || {},
              i = (o.referrer, s(o, ["referrer"])),
              a = Boolean(
                n.referring_domain &&
                  this.excludeReferrers.includes(n.referring_domain)
              ),
              r = JSON.stringify(n) !== JSON.stringify(i);
            return !a && (!t || r);
          }),
          (exports.prototype.saveCampaignToStorage = function (e) {
            return l(this, undefined, undefined, function () {
              return c(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.storage.set(this.storageKey, e)];
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (exports.prototype.getCampaignFromStorage = function () {
            return l(this, undefined, undefined, function () {
              return c(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.storage.get(this.storageKey)];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (exports.prototype.createCampaignEvent = function (e) {
            var t,
              n,
              o = this,
              i = r(r({}, Z), e),
              a = Object.entries(i).reduce(function (e, t) {
                var n = u(t, 2),
                  i = n[0],
                  a = n[1];
                return (
                  e.setOnce("initial_".concat(i), a || o.initialEmptyValue),
                  a ? e.set(i, a) : e.unset(i)
                );
              }, new q()),
              s = {
                event_type: "Page View",
                event_properties: {
                  page_title:
                    ("undefined" != typeof document && document.title) || "",
                  page_location:
                    ("undefined" != typeof location && location.href) || "",
                  page_path:
                    ("undefined" != typeof location && location.pathname) || "",
                },
              };
            return r(
              r(
                {},
                ((t = a),
                r(r({}, n), {
                  event_type: j.IDENTIFY,
                  user_properties: t.getUserProperties(),
                }))
              ),
              this.trackPageViews && s
            );
          }),
          (exports.prototype.send = function (e) {
            return l(this, undefined, undefined, function () {
              var t, n;
              return c(this, function (o) {
                switch (o.label) {
                  case 0:
                    return this.disabled ? [2] : [4, this.parser.parse()];
                  case 1:
                    return (t = o.sent()), [4, this.getCampaignFromStorage()];
                  case 2:
                    if (((n = o.sent()), !e)) {
                      if (!this.trackNewCampaigns || !this.isNewCampaign(t, n))
                        return [2];
                      this.onNewCampaign(t);
                    }
                    return [4, this.track(this.createCampaignEvent(t))];
                  case 3:
                    return o.sent(), [4, this.saveCampaignToStorage(t)];
                  case 4:
                    return o.sent(), [2];
                }
              });
            });
          }),
          exports
        );
      })(),
      ne = function (e, t) {
        oe(e, t);
      },
      oe = function (e, t) {
        for (var require = 0; require < t.length; require++) {
          var o = t[require],
            i = o.name,
            a = o.args,
            r = o.resolve,
            s = e && e[i];
          if ("function" == typeof s) {
            var l = s.apply(e, a);
            "function" == typeof r && r(null == l ? undefined : l.promise);
          }
        }
        return e;
      },
      ie = function (e) {
        return e && undefined !== e._q;
      },
      UAParser = require(610) /* UAParser */,
      re = require.n(UAParser),
      se = function () {
        var e, t, n, o;
        if ("undefined" == typeof navigator) return "";
        var i = navigator.userLanguage;
        return null !==
          (o =
            null !==
              (n =
                null !==
                  (t =
                    null === (e = navigator.languages) || undefined === e
                      ? undefined
                      : e[0]) && undefined !== t
                  ? t
                  : navigator.language) && undefined !== n
              ? n
              : i) && undefined !== o
          ? o
          : "";
      },
      le = (function () {
        function exports() {
          var e;
          (this.name = "context"),
            (this.type = g.BEFORE),
            (this.eventId = 0),
            (this.library = "amplitude-ts/".concat("1.5.8")),
            "undefined" != typeof navigator && (e = navigator.userAgent),
            (this.uaResult = new re.a(e).getResult());
        }
        return (
          (exports.prototype.setup = function (e) {
            return (this.config = e), Promise.resolve(undefined);
          }),
          (exports.prototype.execute = function (e) {
            return l(this, undefined, undefined, function () {
              var t, n, o, i, a;
              return c(this, function (s) {
                return (
                  this.isSessionValid() || (this.config.sessionId = Date.now()),
                  (this.config.lastEventTime = Date.now()),
                  (t = new Date().getTime()),
                  (n = this.uaResult.browser.name),
                  (o = this.uaResult.browser.version),
                  (i = this.uaResult.device.model || this.uaResult.os.name),
                  (a = this.uaResult.device.vendor),
                  [
                    2,
                    r(
                      r(
                        r(
                          r(
                            r(
                              r(
                                r(
                                  r(
                                    r(
                                      r(
                                        r(
                                          r(
                                            {
                                              user_id: this.config.userId,
                                              device_id: this.config.deviceId,
                                              session_id: this.config.sessionId,
                                              time: t,
                                            },
                                            this.config.appVersion && {
                                              app_version:
                                                this.config.appVersion,
                                            }
                                          ),
                                          this.config.trackingOptions
                                            .platform && { platform: "Web" }
                                        ),
                                        this.config.trackingOptions.osName && {
                                          os_name: n,
                                        }
                                      ),
                                      this.config.trackingOptions.osVersion && {
                                        os_version: o,
                                      }
                                    ),
                                    this.config.trackingOptions
                                      .deviceManufacturer && {
                                      device_manufacturer: a,
                                    }
                                  ),
                                  this.config.trackingOptions.deviceModel && {
                                    device_model: i,
                                  }
                                ),
                                this.config.trackingOptions.language && {
                                  language: se(),
                                }
                              ),
                              this.config.trackingOptions.ipAddress && {
                                ip: "$remote",
                              }
                            ),
                            {
                              insert_id: P(),
                              partner_id: this.config.partnerId,
                              plan: this.config.plan,
                            }
                          ),
                          this.config.ingestionMetadata && {
                            ingestion_metadata: {
                              source_name:
                                this.config.ingestionMetadata.sourceName,
                              source_version:
                                this.config.ingestionMetadata.sourceVersion,
                            },
                          }
                        ),
                        e
                      ),
                      { event_id: this.eventId++, library: this.library }
                    ),
                  ]
                );
              });
            });
          }),
          (exports.prototype.isSessionValid = function () {
            var e = this.config.lastEventTime || Date.now();
            return Date.now() - e < this.config.sessionTimeout;
          }),
          exports
        );
      })();
    !(function (e) {
      (e.XHR = "xhr"), (e.SendBeacon = "beacon"), (e.Fetch = "fetch");
    })(V || (V = {}));
    var ce,
      de = (function () {
        function exports() {
          this.memoryStorage = new Map();
        }
        return (
          (exports.prototype.isEnabled = function () {
            return l(this, undefined, undefined, function () {
              return c(this, function (e) {
                return [2, true];
              });
            });
          }),
          (exports.prototype.get = function (e) {
            return l(this, undefined, undefined, function () {
              return c(this, function (t) {
                return [2, this.memoryStorage.get(e)];
              });
            });
          }),
          (exports.prototype.getRaw = function (e) {
            return l(this, undefined, undefined, function () {
              var t;
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.get(e)];
                  case 1:
                    return [2, (t = n.sent()) ? JSON.stringify(t) : undefined];
                }
              });
            });
          }),
          (exports.prototype.set = function (e, t) {
            return l(this, undefined, undefined, function () {
              return c(this, function (n) {
                return this.memoryStorage.set(e, t), [2];
              });
            });
          }),
          (exports.prototype.remove = function (e) {
            return l(this, undefined, undefined, function () {
              return c(this, function (t) {
                return this.memoryStorage.delete(e), [2];
              });
            });
          }),
          (exports.prototype.reset = function () {
            return l(this, undefined, undefined, function () {
              return c(this, function (e) {
                return this.memoryStorage.clear(), [2];
              });
            });
          }),
          exports
        );
      })(),
      ue = (function () {
        function exports(e, t) {
          (this.storage = e),
            (this.isSessionCacheValid = true),
            (this.storageKey = Y(t)),
            (this.cache = { optOut: false });
        }
        return (
          (exports.prototype.load = function () {
            var e;
            return l(this, undefined, undefined, function () {
              var t;
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (t = this), [4, this.storage.get(this.storageKey)];
                  case 1:
                    return (
                      (t.cache =
                        null !== (e = n.sent()) && undefined !== e
                          ? e
                          : { optOut: false }),
                      [2, this]
                    );
                }
              });
            });
          }),
          (exports.prototype.setSession = function (e) {
            (this.cache = r(r({}, this.cache), e)),
              this.storage.set(this.storageKey, this.cache);
          }),
          (exports.prototype.getSessionId = function () {
            var e = this;
            return (
              (this.isSessionCacheValid = true),
              this.storage.get(this.storageKey).then(function (t) {
                e.isSessionCacheValid &&
                  (e.cache.sessionId = null == t ? undefined : t.sessionId);
              }),
              this.cache.sessionId
            );
          }),
          (exports.prototype.setSessionId = function (e) {
            (this.isSessionCacheValid = false), this.setSession({ sessionId: e });
          }),
          (exports.prototype.getDeviceId = function () {
            return this.cache.deviceId;
          }),
          (exports.prototype.setDeviceId = function (e) {
            this.setSession({ deviceId: e });
          }),
          (exports.prototype.getUserId = function () {
            return this.cache.userId;
          }),
          (exports.prototype.setUserId = function (e) {
            this.setSession({ userId: e });
          }),
          (exports.prototype.getLastEventTime = function () {
            return this.cache.lastEventTime;
          }),
          (exports.prototype.setLastEventTime = function (e) {
            this.setSession({ lastEventTime: e });
          }),
          (exports.prototype.getOptOut = function () {
            return this.cache.optOut;
          }),
          (exports.prototype.setOptOut = function (e) {
            this.setSession({ optOut: e });
          }),
          exports
        );
      })();
    !(function (e) {
      (e.Unknown = "unknown"),
        (e.Skipped = "skipped"),
        (e.Success = "success"),
        (e.RateLimit = "rate_limit"),
        (e.PayloadTooLarge = "payload_too_large"),
        (e.Invalid = "invalid"),
        (e.Failed = "failed"),
        (e.Timeout = "Timeout"),
        (e.SystemError = "SystemError");
    })(ce || (ce = {}));
    var pe = (function (e) {
        function module() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(module, e),
          (module.prototype.send = function (e, t) {
            return l(this, undefined, undefined, function () {
              var n, o;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    if ("undefined" == typeof fetch)
                      throw new Error("FetchTransport is not supported");
                    return (
                      (n = {
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "*/*",
                        },
                        body: JSON.stringify(t),
                        method: "POST",
                      }),
                      [4, fetch(e, n)]
                    );
                  case 1:
                    return [4, i.sent().json()];
                  case 2:
                    return (o = i.sent()), [2, this.buildResponse(o)];
                }
              });
            });
          }),
          module
        );
      })(
        (function () {
          function exports() {}
          return (
            (exports.prototype.send = function (e, t) {
              return Promise.resolve(null);
            }),
            (exports.prototype.buildResponse = function (e) {
              var t,
                n,
                o,
                i,
                a,
                r,
                s,
                l,
                c,
                d,
                u,
                p,
                g,
                h,
                f,
                m,
                y,
                v,
                _,
                b,
                w,
                C;
              if ("object" != typeof e) return null;
              var x = e.code || 0,
                S = this.buildStatus(x);
              switch (S) {
                case ce.Success:
                  return {
                    status: S,
                    statusCode: x,
                    body: {
                      eventsIngested:
                        null !== (t = e.events_ingested) && undefined !== t
                          ? t
                          : 0,
                      payloadSizeBytes:
                        null !== (n = e.payload_size_bytes) && undefined !== n
                          ? n
                          : 0,
                      serverUploadTime:
                        null !== (o = e.server_upload_time) && undefined !== o
                          ? o
                          : 0,
                    },
                  };
                case ce.Invalid:
                  return {
                    status: S,
                    statusCode: x,
                    body: {
                      error: null !== (i = e.error) && undefined !== i ? i : "",
                      missingField:
                        null !== (a = e.missing_field) && undefined !== a ? a : "",
                      eventsWithInvalidFields:
                        null !== (r = e.events_with_invalid_fields) &&
                        undefined !== r
                          ? r
                          : {},
                      eventsWithMissingFields:
                        null !== (s = e.events_with_missing_fields) &&
                        undefined !== s
                          ? s
                          : {},
                      eventsWithInvalidIdLengths:
                        null !== (l = e.events_with_invalid_id_lengths) &&
                        undefined !== l
                          ? l
                          : {},
                      epsThreshold:
                        null !== (c = e.eps_threshold) && undefined !== c ? c : 0,
                      exceededDailyQuotaDevices:
                        null !== (d = e.exceeded_daily_quota_devices) &&
                        undefined !== d
                          ? d
                          : {},
                      silencedDevices:
                        null !== (u = e.silenced_devices) && undefined !== u
                          ? u
                          : [],
                      silencedEvents:
                        null !== (p = e.silenced_events) && undefined !== p
                          ? p
                          : [],
                      throttledDevices:
                        null !== (g = e.throttled_devices) && undefined !== g
                          ? g
                          : {},
                      throttledEvents:
                        null !== (h = e.throttled_events) && undefined !== h
                          ? h
                          : [],
                    },
                  };
                case ce.PayloadTooLarge:
                  return {
                    status: S,
                    statusCode: x,
                    body: {
                      error: null !== (f = e.error) && undefined !== f ? f : "",
                    },
                  };
                case ce.RateLimit:
                  return {
                    status: S,
                    statusCode: x,
                    body: {
                      error: null !== (m = e.error) && undefined !== m ? m : "",
                      epsThreshold:
                        null !== (y = e.eps_threshold) && undefined !== y ? y : 0,
                      throttledDevices:
                        null !== (v = e.throttled_devices) && undefined !== v
                          ? v
                          : {},
                      throttledUsers:
                        null !== (_ = e.throttled_users) && undefined !== _
                          ? _
                          : {},
                      exceededDailyQuotaDevices:
                        null !== (b = e.exceeded_daily_quota_devices) &&
                        undefined !== b
                          ? b
                          : {},
                      exceededDailyQuotaUsers:
                        null !== (w = e.exceeded_daily_quota_users) &&
                        undefined !== w
                          ? w
                          : {},
                      throttledEvents:
                        null !== (C = e.throttled_events) && undefined !== C
                          ? C
                          : [],
                    },
                  };
                case ce.Timeout:
                default:
                  return { status: S, statusCode: x };
              }
            }),
            (exports.prototype.buildStatus = function (e) {
              return e >= 200 && e < 300
                ? ce.Success
                : 429 === e
                ? ce.RateLimit
                : 413 === e
                ? ce.PayloadTooLarge
                : 408 === e
                ? ce.Timeout
                : e >= 400 && e < 500
                ? ce.Invalid
                : e >= 500
                ? ce.Failed
                : ce.Unknown;
            }),
            exports
          );
        })()
      ),
      ge = (function () {
        function exports(e) {
          this.options = r({}, e);
        }
        return (
          (exports.prototype.isEnabled = function () {
            return l(this, undefined, undefined, function () {
              var t, n, o;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (!Object(X.a)()) return [2, false];
                    (t = String(Date.now())),
                      (n = new exports(this.options)),
                      (o = "AMP_TEST"),
                      (i.label = 1);
                  case 1:
                    return i.trys.push([1, 4, 5, 7]), [4, n.set(o, t)];
                  case 2:
                    return i.sent(), [4, n.get(o)];
                  case 3:
                    return [2, i.sent() === t];
                  case 4:
                    return i.sent(), [2, false];
                  case 5:
                    return [4, n.remove(o)];
                  case 6:
                    return i.sent(), [7];
                  case 7:
                    return [2];
                }
              });
            });
          }),
          (exports.prototype.get = function (e) {
            return l(this, undefined, undefined, function () {
              var t;
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.getRaw(e)];
                  case 1:
                    if (!(t = n.sent())) return [2, undefined];
                    try {
                      try {
                        t = decodeURIComponent(atob(t));
                      } catch (e) {}
                      return [2, JSON.parse(t)];
                    } catch (e) {
                      return [2, undefined];
                    }
                    return [2];
                }
              });
            });
          }),
          (exports.prototype.getRaw = function (e) {
            var t;
            return l(this, undefined, undefined, function () {
              var n, o, i;
              return c(this, function (a) {
                return (
                  (n = Object(X.a)()),
                  (o =
                    null !==
                      (t =
                        null == n ? undefined : n.document.cookie.split("; ")) &&
                    undefined !== t
                      ? t
                      : []),
                  (i = o.find(function (t) {
                    return 0 === t.indexOf(e + "=");
                  }))
                    ? [2, i.substring(e.length + 1)]
                    : [2, undefined]
                );
              });
            });
          }),
          (exports.prototype.set = function (e, t) {
            var n;
            return l(this, undefined, undefined, function () {
              var o, i, a, r, s, l;
              return c(this, function (c) {
                try {
                  (o =
                    null !== (n = this.options.expirationDays) && undefined !== n
                      ? n
                      : 0),
                    (a = undefined),
                    (i = null !== t ? o : -1) &&
                      ((r = new Date()).setTime(
                        r.getTime() + 24 * i * 60 * 60 * 1e3
                      ),
                      (a = r)),
                    (s = ""
                      .concat(e, "=")
                      .concat(btoa(encodeURIComponent(JSON.stringify(t))))),
                    a && (s += "; expires=".concat(a.toUTCString())),
                    (s += "; path=/"),
                    this.options.domain &&
                      (s += "; domain=".concat(this.options.domain)),
                    this.options.secure && (s += "; Secure"),
                    this.options.sameSite &&
                      (s += "; SameSite=".concat(this.options.sameSite)),
                    (l = Object(X.a)()) && (l.document.cookie = s);
                } catch (e) {}
                return [2];
              });
            });
          }),
          (exports.prototype.remove = function (e) {
            return l(this, undefined, undefined, function () {
              return c(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.set(e, null)];
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (exports.prototype.reset = function () {
            return l(this, undefined, undefined, function () {
              return c(this, function (e) {
                return [2];
              });
            });
          }),
          exports
        );
      })(),
      he = (function () {
        function exports() {}
        return (
          (exports.prototype.isEnabled = function () {
            return l(this, undefined, undefined, function () {
              var t, n, o;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (!Object(X.a)()) return [2, false];
                    (t = String(Date.now())),
                      (n = new exports()),
                      (o = "AMP_TEST"),
                      (i.label = 1);
                  case 1:
                    return i.trys.push([1, 4, 5, 7]), [4, n.set(o, t)];
                  case 2:
                    return i.sent(), [4, n.get(o)];
                  case 3:
                    return [2, i.sent() === t];
                  case 4:
                    return i.sent(), [2, false];
                  case 5:
                    return [4, n.remove(o)];
                  case 6:
                    return i.sent(), [7];
                  case 7:
                    return [2];
                }
              });
            });
          }),
          (exports.prototype.get = function (e) {
            return l(this, undefined, undefined, function () {
              var t;
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return n.trys.push([0, 2, , 3]), [4, this.getRaw(e)];
                  case 1:
                    return (t = n.sent()) ? [2, JSON.parse(t)] : [2, undefined];
                  case 2:
                    return n.sent(), [2, undefined];
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (exports.prototype.getRaw = function (e) {
            var t;
            return l(this, undefined, undefined, function () {
              return c(this, function (n) {
                return [
                  2,
                  (null === (t = Object(X.a)()) || undefined === t
                    ? undefined
                    : t.localStorage.getItem(e)) || undefined,
                ];
              });
            });
          }),
          (exports.prototype.set = function (e, t) {
            var n;
            return l(this, undefined, undefined, function () {
              return c(this, function (o) {
                try {
                  null === (n = Object(X.a)()) ||
                    undefined === n ||
                    n.localStorage.setItem(e, JSON.stringify(t));
                } catch (e) {}
                return [2];
              });
            });
          }),
          (exports.prototype.remove = function (e) {
            var t;
            return l(this, undefined, undefined, function () {
              return c(this, function (n) {
                try {
                  null === (t = Object(X.a)()) ||
                    undefined === t ||
                    t.localStorage.removeItem(e);
                } catch (e) {}
                return [2];
              });
            });
          }),
          (exports.prototype.reset = function () {
            var e;
            return l(this, undefined, undefined, function () {
              return c(this, function (t) {
                try {
                  null === (e = Object(X.a)()) ||
                    undefined === e ||
                    e.localStorage.clear();
                } catch (e) {}
                return [2];
              });
            });
          }),
          exports
        );
      })(),
      fe = (function () {
        function exports() {}
        return (
          (exports.prototype.send = function (e, t) {
            return Promise.resolve(null);
          }),
          (exports.prototype.buildResponse = function (e) {
            var t,
              n,
              o,
              i,
              a,
              r,
              s,
              l,
              c,
              d,
              u,
              p,
              g,
              f,
              m,
              y,
              v,
              _,
              b,
              w,
              C,
              x;
            if ("object" != typeof e) return null;
            var S = e.code || 0,
              E = this.buildStatus(S);
            switch (E) {
              case h.Success:
                return {
                  status: E,
                  statusCode: S,
                  body: {
                    eventsIngested:
                      null !== (t = e.events_ingested) && undefined !== t ? t : 0,
                    payloadSizeBytes:
                      null !== (n = e.payload_size_bytes) && undefined !== n
                        ? n
                        : 0,
                    serverUploadTime:
                      null !== (o = e.server_upload_time) && undefined !== o
                        ? o
                        : 0,
                  },
                };
              case h.Invalid:
                return {
                  status: E,
                  statusCode: S,
                  body: {
                    error: null !== (i = e.error) && undefined !== i ? i : "",
                    missingField:
                      null !== (a = e.missing_field) && undefined !== a ? a : "",
                    eventsWithInvalidFields:
                      null !== (r = e.events_with_invalid_fields) &&
                      undefined !== r
                        ? r
                        : {},
                    eventsWithMissingFields:
                      null !== (s = e.events_with_missing_fields) &&
                      undefined !== s
                        ? s
                        : {},
                    eventsWithInvalidIdLengths:
                      null !== (l = e.events_with_invalid_id_lengths) &&
                      undefined !== l
                        ? l
                        : {},
                    epsThreshold:
                      null !== (c = e.eps_threshold) && undefined !== c ? c : 0,
                    exceededDailyQuotaDevices:
                      null !== (d = e.exceeded_daily_quota_devices) &&
                      undefined !== d
                        ? d
                        : {},
                    silencedDevices:
                      null !== (u = e.silenced_devices) && undefined !== u
                        ? u
                        : [],
                    silencedEvents:
                      null !== (p = e.silenced_events) && undefined !== p ? p : [],
                    throttledDevices:
                      null !== (g = e.throttled_devices) && undefined !== g
                        ? g
                        : {},
                    throttledEvents:
                      null !== (f = e.throttled_events) && undefined !== f
                        ? f
                        : [],
                  },
                };
              case h.PayloadTooLarge:
                return {
                  status: E,
                  statusCode: S,
                  body: {
                    error: null !== (m = e.error) && undefined !== m ? m : "",
                  },
                };
              case h.RateLimit:
                return {
                  status: E,
                  statusCode: S,
                  body: {
                    error: null !== (y = e.error) && undefined !== y ? y : "",
                    epsThreshold:
                      null !== (v = e.eps_threshold) && undefined !== v ? v : 0,
                    throttledDevices:
                      null !== (_ = e.throttled_devices) && undefined !== _
                        ? _
                        : {},
                    throttledUsers:
                      null !== (b = e.throttled_users) && undefined !== b ? b : {},
                    exceededDailyQuotaDevices:
                      null !== (w = e.exceeded_daily_quota_devices) &&
                      undefined !== w
                        ? w
                        : {},
                    exceededDailyQuotaUsers:
                      null !== (C = e.exceeded_daily_quota_users) &&
                      undefined !== C
                        ? C
                        : {},
                    throttledEvents:
                      null !== (x = e.throttled_events) && undefined !== x
                        ? x
                        : [],
                  },
                };
              case h.Timeout:
              default:
                return { status: E, statusCode: S };
            }
          }),
          (exports.prototype.buildStatus = function (e) {
            return e >= 200 && e < 300
              ? h.Success
              : 429 === e
              ? h.RateLimit
              : 413 === e
              ? h.PayloadTooLarge
              : 408 === e
              ? h.Timeout
              : e >= 400 && e < 500
              ? h.Invalid
              : e >= 500
              ? h.Failed
              : h.Unknown;
          }),
          exports
        );
      })(),
      me = (function (e) {
        function module() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.state = { done: 4 }), t;
        }
        return (
          a(module, e),
          (module.prototype.send = function (e, t) {
            return l(this, undefined, undefined, function () {
              var n = this;
              return c(this, function (o) {
                return [
                  2,
                  new Promise(function (o, i) {
                    "undefined" == typeof XMLHttpRequest &&
                      i(new Error("XHRTransport is not supported."));
                    var a = new XMLHttpRequest();
                    a.open("POST", e, true),
                      (a.onreadystatechange = function () {
                        if (a.readyState === n.state.done)
                          try {
                            var e = a.responseText,
                              t = JSON.parse(e),
                              r = n.buildResponse(t);
                            o(r);
                          } catch (e) {
                            i(e);
                          }
                      }),
                      a.setRequestHeader("Content-Type", "application/json"),
                      a.setRequestHeader("Accept", "*/*"),
                      a.send(JSON.stringify(t));
                  }),
                ];
              });
            });
          }),
          module
        );
      })(fe),
      ye = (function (e) {
        function module() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(module, e),
          (module.prototype.send = function (e, t) {
            return l(this, undefined, undefined, function () {
              var n = this;
              return c(this, function (o) {
                return [
                  2,
                  new Promise(function (o, i) {
                    var a = Object(X.a)();
                    if (!(null == a ? undefined : a.navigator.sendBeacon))
                      throw new Error("SendBeaconTransport is not supported");
                    try {
                      var r = JSON.stringify(t);
                      return o(
                        a.navigator.sendBeacon(e, JSON.stringify(t))
                          ? n.buildResponse({
                              code: 200,
                              events_ingested: t.events.length,
                              payload_size_bytes: r.length,
                              server_upload_time: Date.now(),
                            })
                          : n.buildResponse({ code: 500 })
                      );
                    } catch (e) {
                      i(e);
                    }
                  }),
                ];
              });
            });
          }),
          module
        );
      })(fe),
      ve = function () {
        var e = new de();
        return {
          cookieExpiration: 365,
          cookieSameSite: "Lax",
          cookieSecure: false,
          cookieStorage: e,
          disableCookies: false,
          domain: "",
          sessionManager: new ue(e, ""),
          sessionTimeout: 18e5,
          storageProvider: new de(),
          trackingOptions: {
            deviceManufacturer: true,
            deviceModel: true,
            ipAddress: true,
            language: true,
            osName: true,
            osVersion: true,
            platform: true,
          },
          transportProvider: new pe(),
        };
      },
      _e = (function (e) {
        function module(t, n, o) {
          var i,
            a,
            s,
            l,
            c,
            d,
            u,
            p,
            g,
            h,
            f,
            m,
            y = this,
            v = ve();
          return (
            ((y =
              e.call(
                this,
                r(
                  r(
                    {
                      flushIntervalMillis: 1e3,
                      flushMaxRetries: 5,
                      flushQueueSize: 30,
                    },
                    o
                  ),
                  {
                    apiKey: t,
                    storageProvider:
                      null !== (i = null == o ? undefined : o.storageProvider) &&
                      undefined !== i
                        ? i
                        : v.storageProvider,
                    transportProvider:
                      null !== (a = null == o ? undefined : o.transportProvider) &&
                      undefined !== a
                        ? a
                        : v.transportProvider,
                  }
                )
              ) || this).cookieStorage =
              null !== (s = null == o ? undefined : o.cookieStorage) &&
              undefined !== s
                ? s
                : v.cookieStorage),
            (y.sessionManager =
              null !== (l = null == o ? undefined : o.sessionManager) &&
              undefined !== l
                ? l
                : v.sessionManager),
            (y.sessionTimeout =
              null !== (c = null == o ? undefined : o.sessionTimeout) &&
              undefined !== c
                ? c
                : v.sessionTimeout),
            (y.appVersion = null == o ? undefined : o.appVersion),
            (y.attribution = null == o ? undefined : o.attribution),
            (y.cookieExpiration =
              null !== (d = null == o ? undefined : o.cookieExpiration) &&
              undefined !== d
                ? d
                : v.cookieExpiration),
            (y.cookieSameSite =
              null !== (u = null == o ? undefined : o.cookieSameSite) &&
              undefined !== u
                ? u
                : v.cookieSameSite),
            (y.cookieSecure =
              null !== (p = null == o ? undefined : o.cookieSecure) && undefined !== p
                ? p
                : v.cookieSecure),
            (y.deviceId = null == o ? undefined : o.deviceId),
            (y.disableCookies =
              null !== (g = null == o ? undefined : o.disableCookies) &&
              undefined !== g
                ? g
                : v.disableCookies),
            (y.domain =
              null !== (h = null == o ? undefined : o.domain) && undefined !== h
                ? h
                : v.domain),
            (y.lastEventTime =
              null !== (f = y.lastEventTime) && undefined !== f
                ? f
                : null == o
                ? undefined
                : o.lastEventTime),
            (y.optOut = Boolean(null == o ? undefined : o.optOut)),
            (y.partnerId = null == o ? undefined : o.partnerId),
            (y.sessionId = null == o ? undefined : o.sessionId),
            (y.trackingOptions =
              null !== (m = null == o ? undefined : o.trackingOptions) &&
              undefined !== m
                ? m
                : v.trackingOptions),
            (y.userId = n),
            y
          );
        }
        return (
          a(module, e),
          Object.defineProperty(module.prototype, "deviceId", {
            get: function () {
              return this.sessionManager.getDeviceId();
            },
            set: function (e) {
              this.sessionManager.setDeviceId(e);
            },
            enumerable: false,
            configurable: true,
          }),
          Object.defineProperty(module.prototype, "userId", {
            get: function () {
              return this.sessionManager.getUserId();
            },
            set: function (e) {
              this.sessionManager.setUserId(e);
            },
            enumerable: false,
            configurable: true,
          }),
          Object.defineProperty(module.prototype, "sessionId", {
            get: function () {
              return this.sessionManager.getSessionId();
            },
            set: function (e) {
              this.sessionManager.setSessionId(e);
            },
            enumerable: false,
            configurable: true,
          }),
          Object.defineProperty(module.prototype, "optOut", {
            get: function () {
              return this.sessionManager.getOptOut();
            },
            set: function (e) {
              var t;
              null === (t = this.sessionManager) ||
                undefined === t ||
                t.setOptOut(Boolean(e));
            },
            enumerable: false,
            configurable: true,
          }),
          Object.defineProperty(module.prototype, "lastEventTime", {
            get: function () {
              return this.sessionManager.getLastEventTime();
            },
            set: function (e) {
              this.sessionManager.setLastEventTime(e);
            },
            enumerable: false,
            configurable: true,
          }),
          module
        );
      })(E),
      be = function (e, t, n) {
        return l(undefined, undefined, undefined, function () {
          var o, i, a, s, l, d, u, p, g, h, f, m, y, v, _, b, w;
          return c(this, function (c) {
            switch (c.label) {
              case 0:
                return (
                  (o = ve()),
                  null === (y = null == n ? undefined : n.domain) || undefined === y
                    ? [3, 1]
                    : ((a = y), [3, 3])
                );
              case 1:
                return [4, Ae()];
              case 2:
                (a = c.sent()), (c.label = 3);
              case 3:
                return (i = a), [4, we(r(r({}, n), { domain: i }))];
              case 4:
                return (s = c.sent()), (l = Y(e)), [4, s.get(l)];
              case 5:
                return (d = c.sent()), (u = Q()), [4, new ue(s, e).load()];
              case 6:
                return (
                  (p = c.sent()),
                  (g = _e.bind),
                  (h = [
                    undefined,
                    e,
                    null != t ? t : null == d ? undefined : d.userId,
                  ]),
                  (f = [r({}, n)]),
                  (m = {
                    cookieStorage: s,
                    sessionManager: p,
                    deviceId: Se(
                      null == d ? undefined : d.deviceId,
                      null == n ? undefined : n.deviceId,
                      u.deviceId
                    ),
                    domain: i,
                    optOut:
                      null !== (v = null == n ? undefined : n.optOut) &&
                      undefined !== v
                        ? v
                        : Boolean(null == d ? undefined : d.optOut),
                  }),
                  [4, s.get(l)]
                );
              case 7:
                return (
                  (m.sessionId =
                    null !==
                      (b =
                        null === (_ = c.sent()) || undefined === _
                          ? undefined
                          : _.sessionId) && undefined !== b
                      ? b
                      : null == n
                      ? undefined
                      : n.sessionId),
                  [4, xe(n)]
                );
              case 8:
                return [
                  2,
                  new (g.apply(
                    _e,
                    h.concat([
                      r.apply(
                        undefined,
                        f.concat([
                          ((m.storageProvider = c.sent()),
                          (m.trackingOptions = r(
                            r({}, o.trackingOptions),
                            null == n ? undefined : n.trackingOptions
                          )),
                          (m.transportProvider =
                            null !==
                              (w = null == n ? undefined : n.transportProvider) &&
                            undefined !== w
                              ? w
                              : Ee(null == n ? undefined : n.transport)),
                          m),
                        ])
                      ),
                    ])
                  ))(),
                ];
            }
          });
        });
      },
      we = function (e, t) {
        return (
          undefined === t && (t = ve()),
          l(undefined, undefined, undefined, function () {
            var n, o, i;
            return c(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (n = r(r({}, t), e)),
                    (o = null == e ? undefined : e.cookieStorage),
                    (i = !o) ? [3, 2] : [4, o.isEnabled()]
                  );
                case 1:
                  (i = !a.sent()), (a.label = 2);
                case 2:
                  return i ? [2, Ce(n)] : [2, o];
              }
            });
          })
        );
      },
      Ce = function (e) {
        return l(undefined, undefined, undefined, function () {
          var t, n;
          return c(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (t = new ge({
                    domain: e.domain,
                    expirationDays: e.cookieExpiration,
                    sameSite: e.cookieSameSite,
                    secure: e.cookieSecure,
                  })),
                  (n = e.disableCookies) ? [3, 2] : [4, t.isEnabled()]
                );
              case 1:
                (n = !o.sent()), (o.label = 2);
              case 2:
                return n ? [4, (t = new he()).isEnabled()] : [3, 4];
              case 3:
                o.sent() || (t = new de()), (o.label = 4);
              case 4:
                return [2, t];
            }
          });
        });
      },
      xe = function (e) {
        return l(undefined, undefined, undefined, function () {
          var t, n, o, i, a, r, s;
          return c(this, function (l) {
            switch (l.label) {
              case 0:
                if (
                  e &&
                  Object.prototype.hasOwnProperty.call(e, "storageProvider") &&
                  !e.storageProvider
                )
                  return [3, 9];
                l.label = 1;
              case 1:
                l.trys.push([1, 7, 8, 9]),
                  (t = d([null == e ? undefined : e.storageProvider, new he()])),
                  (n = t.next()),
                  (l.label = 2);
              case 2:
                return n.done
                  ? [3, 6]
                  : ((o = n.value), (i = o) ? [4, o.isEnabled()] : [3, 4]);
              case 3:
                (i = l.sent()), (l.label = 4);
              case 4:
                if (i) return [2, o];
                l.label = 5;
              case 5:
                return (n = t.next()), [3, 2];
              case 6:
                return [3, 9];
              case 7:
                return (a = l.sent()), (r = { error: a }), [3, 9];
              case 8:
                try {
                  n && !n.done && (s = t.return) && s.call(t);
                } finally {
                  if (r) throw r.error;
                }
                return [7];
              case 9:
                return [2, undefined];
            }
          });
        });
      },
      Se = function (e, t, n) {
        return t || n || e || P();
      },
      Ee = function (e) {
        return e === V.XHR
          ? new me()
          : e === V.SendBeacon
          ? new ye()
          : ve().transportProvider;
      },
      Ae = function (e) {
        return l(undefined, undefined, undefined, function () {
          var t, n, o, i, a, r, s;
          return c(this, function (l) {
            switch (l.label) {
              case 0:
                return [4, new ge().isEnabled()];
              case 1:
                if (!l.sent() || (!e && "undefined" == typeof location))
                  return [2, ""];
                for (
                  t = null != e ? e : location.hostname,
                    n = t.split("."),
                    o = [],
                    i = "AMP_TLDTEST",
                    a = n.length - 2;
                  a >= 0;
                  --a
                )
                  o.push(n.slice(a).join("."));
                (a = 0), (l.label = 2);
              case 2:
                return a < o.length
                  ? ((r = o[a]),
                    [4, (s = new ge({ domain: "." + r })).set(i, 1)])
                  : [3, 7];
              case 3:
                return l.sent(), [4, s.get(i)];
              case 4:
                return l.sent() ? [4, s.remove(i)] : [3, 6];
              case 5:
                return l.sent(), [2, "." + r];
              case 6:
                return a++, [3, 2];
              case 7:
                return [2, ""];
            }
          });
        });
      },
      Te = function (e, t) {
        return l(undefined, undefined, undefined, function () {
          var n, o, i, a, r, s, l, d, p;
          return c(this, function (c) {
            switch (c.label) {
              case 0:
                return [4, (n = new ge()).isEnabled()];
              case 1:
                return (
                  (c.sent() && !(null == t ? undefined : t.disableCookies)) ||
                    (n = new he()),
                  [4, n.isEnabled()]
                );
              case 2:
                return c.sent()
                  ? ((o = (function (e) {
                      return ""
                        .concat(H.toLowerCase(), "_")
                        .concat(e.substring(0, 6));
                    })(e)),
                    [4, n.getRaw(o)])
                  : [2, { optOut: false }];
              case 3:
                return (i = c.sent()) ? [4, n.remove(o)] : [2, { optOut: false }];
              case 4:
                return (
                  c.sent(),
                  (a = u(i.split("."), 5)),
                  (r = a[0]),
                  (s = a[1]),
                  (l = a[2]),
                  (d = a[3]),
                  (p = a[4]),
                  [
                    2,
                    {
                      deviceId: r,
                      userId: Pe(s),
                      sessionId: Ge(d),
                      lastEventTime: Ge(p),
                      optOut: Boolean(l),
                    },
                  ]
                );
            }
          });
        });
      },
      Ge = function (e) {
        var t = parseInt(e, 32);
        if (!isNaN(t)) return t;
      },
      Pe = function (e) {
        if (atob && escape && e)
          try {
            return decodeURIComponent(escape(atob(e)));
          } catch (e) {
            return;
          }
      },
      De = (function (e) {
        function module() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(module, e),
          (module.prototype.init = function (t, n, o) {
            var i, a, s;
            return (
              undefined === t && (t = ""),
              l(this, undefined, undefined, function () {
                var l,
                  d,
                  u,
                  p,
                  g = this;
                return c(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return this.initializing
                        ? [2]
                        : ((this.initializing = true), [4, Te(t, o)]);
                    case 1:
                      return (
                        (l = c.sent()),
                        [
                          4,
                          be(
                            t,
                            n || l.userId,
                            r(r({}, o), {
                              deviceId:
                                null !== (i = l.deviceId) && undefined !== i
                                  ? i
                                  : null == o
                                  ? undefined
                                  : o.deviceId,
                              sessionId:
                                null !== (a = l.sessionId) && undefined !== a
                                  ? a
                                  : null == o
                                  ? undefined
                                  : o.sessionId,
                              optOut:
                                null !== (s = null == o ? undefined : o.optOut) &&
                                undefined !== s
                                  ? s
                                  : l.optOut,
                              lastEventTime: l.lastEventTime,
                            })
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (d = c.sent()), [4, e.prototype._init.call(this, d)]
                      );
                    case 3:
                      return (
                        c.sent(),
                        (u = !this.config.lastEventTime),
                        (!this.config.sessionId ||
                          (this.config.lastEventTime &&
                            Date.now() - this.config.lastEventTime >
                              this.config.sessionTimeout)) &&
                          (this.setSessionId(Date.now()), (u = true)),
                        (p = B()).eventBridge.setEventReceiver(function (e) {
                          g.track(e.eventType, e.eventProperties);
                        }),
                        p.identityStore.setIdentity({
                          userId: this.config.userId,
                          deviceId: this.config.deviceId,
                        }),
                        [4, this.add(new le())]
                      );
                    case 4:
                      return c.sent(), [4, this.add(new K())];
                    case 5:
                      return c.sent(), [4, this.add(new G())];
                    case 6:
                      return (
                        c.sent(),
                        (this.initializing = false),
                        [4, this.runAttributionStrategy(d.attribution, u)]
                      );
                    case 7:
                      return (
                        c.sent(), [4, this.runQueuedFunctions("dispatchQ")]
                      );
                    case 8:
                      return c.sent(), [2];
                  }
                });
              })
            );
          }),
          (module.prototype.runAttributionStrategy = function (e, t) {
            return (
              undefined === t && (t = false),
              l(this, undefined, undefined, function () {
                var n, o, i;
                return c(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (n = this.track.bind(this)),
                        (o = this.setSessionId.bind(this, Date.now())),
                        [4, Ce(this.config)]
                      );
                    case 1:
                      return (
                        (i = a.sent()),
                        [
                          4,
                          new te(
                            this.config.apiKey,
                            r(r({}, e), {
                              storage: i,
                              track: n,
                              onNewCampaign: o,
                            })
                          ).send(t),
                        ]
                      );
                    case 2:
                      return a.sent(), [2];
                  }
                });
              })
            );
          }),
          (module.prototype.getUserId = function () {
            var e;
            return null === (e = this.config) || undefined === e
              ? undefined
              : e.userId;
          }),
          (module.prototype.setUserId = function (e) {
            this.config
              ? (this.config.userId = e)
              : this.q.push(this.setUserId.bind(this, e));
          }),
          (module.prototype.getDeviceId = function () {
            var e;
            return null === (e = this.config) || undefined === e
              ? undefined
              : e.deviceId;
          }),
          (module.prototype.setDeviceId = function (e) {
            this.config
              ? (this.config.deviceId = e)
              : this.q.push(this.setDeviceId.bind(this, e));
          }),
          (module.prototype.reset = function () {
            this.setUserId(undefined), this.setDeviceId(P());
          }),
          (module.prototype.getSessionId = function () {
            var e;
            return null === (e = this.config) || undefined === e
              ? undefined
              : e.sessionId;
          }),
          (module.prototype.setSessionId = function (e) {
            this.config
              ? ((this.config.sessionId = e),
                (this.config.lastEventTime = undefined))
              : this.q.push(this.setSessionId.bind(this, e));
          }),
          (module.prototype.setTransport = function (e) {
            this.config
              ? (this.config.transportProvider = Ee(e))
              : this.q.push(this.setTransport.bind(this, e));
          }),
          (module.prototype.identify = function (t, n) {
            if (ie(t)) {
              var o = t._q;
              (t._q = []), (t = oe(new k(), o));
            }
            return (
              (null == n ? undefined : n.user_id) && this.setUserId(n.user_id),
              (null == n ? undefined : n.device_id) &&
                this.setDeviceId(n.device_id),
              e.prototype.identify.call(this, t, n)
            );
          }),
          (module.prototype.groupIdentify = function (t, n, o, i) {
            if (ie(o)) {
              var a = o._q;
              (o._q = []), (o = oe(new k(), a));
            }
            return e.prototype.groupIdentify.call(this, t, n, o, i);
          }),
          (module.prototype.revenue = function (t, n) {
            if (ie(t)) {
              var o = t._q;
              (t._q = []), (t = oe(new O(), o));
            }
            return e.prototype.revenue.call(this, t, n);
          }),
          module
        );
      })(R),
      Le = function () {
        var e = new De();
        return {
          init: M(e.init.bind(e)),
          add: M(e.add.bind(e)),
          remove: M(e.remove.bind(e)),
          track: M(e.track.bind(e)),
          logEvent: M(e.logEvent.bind(e)),
          identify: M(e.identify.bind(e)),
          groupIdentify: M(e.groupIdentify.bind(e)),
          setGroup: M(e.setGroup.bind(e)),
          revenue: M(e.revenue.bind(e)),
          flush: M(e.flush.bind(e)),
          getUserId: e.getUserId.bind(e),
          setUserId: e.setUserId.bind(e),
          getDeviceId: e.getDeviceId.bind(e),
          setDeviceId: e.setDeviceId.bind(e),
          reset: e.reset.bind(e),
          getSessionId: e.getSessionId.bind(e),
          setSessionId: e.setSessionId.bind(e),
          setOptOut: e.setOptOut.bind(e),
          setTransport: e.setTransport.bind(e),
        };
      },
      Ie = Le(),
      ke = Ie.add,
      Oe = Ie.flush,
      Fe = Ie.getDeviceId,
      Re = Ie.getSessionId,
      Me = Ie.getUserId,
      Ne = Ie.groupIdentify,
      Be = Ie.identify,
      Ue = Ie.init,
      $e = Ie.logEvent,
      je = Ie.remove,
      Ke = Ie.reset,
      Ve = Ie.revenue,
      He = Ie.setDeviceId,
      We = Ie.setGroup,
      ze = Ie.setOptOut,
      qe = Ie.setSessionId,
      Ye = Ie.setTransport,
      Xe = Ie.setUserId,
      Qe = Ie.track;
  }