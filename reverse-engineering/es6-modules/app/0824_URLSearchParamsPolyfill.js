/**
 * Webpack Module #824
 * Type: unknown
 */

function (exports, module, require) {
  (function (e) {
    (!(function (e) {
      var t = (function () {
          try {
            return !!Symbol.iterator;
          } catch (e) {
            return false;
          }
        })(),
        n = function (e) {
          var n = {
            next: function () {
              var t = e.shift();
              return { done: undefined === t, value: t };
            },
          };
          return (
            t &&
              (n[Symbol.iterator] = function () {
                return n;
              }),
            n
          );
        },
        o = function (e) {
          return encodeURIComponent(e).replace(/%20/g, '+');
        },
        i = function (e) {
          return decodeURIComponent(String(e).replace(/\+/g, ' '));
        };
      (function () {
        try {
          var t = e.URLSearchParams;
          return (
            'a=1' === new t('?a=1').toString() &&
            'function' == typeof t.prototype.set &&
            'function' == typeof t.prototype.entries
          );
        } catch (e) {
          return false;
        }
      })() ||
        (function () {
          var i = function (e) {
              Object.defineProperty(this, '_entries', {
                writable: true,
                value: {},
              });
              var t = typeof e;
              if ('undefined' === t);
              else if ('string' === t) '' !== e && this._fromString(e);
              else if (e instanceof i) {
                var n = this;
                e.forEach(function (e, t) {
                  n.append(t, e);
                });
              } else {
                if (null === e || 'object' !== t)
                  throw new TypeError("Unsupported input's type for URLSearchParams");
                if ('[object Array]' === Object.prototype.toString.call(e))
                  for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    if ('[object Array]' !== Object.prototype.toString.call(a) && 2 === a.length)
                      throw new TypeError(
                        'Expected [string, any] as entry at index ' +
                          o +
                          " of URLSearchParams's input"
                      );
                    this.append(a[0], a[1]);
                  }
                else for (var r in e) e.hasOwnProperty(r) && this.append(r, e[r]);
              }
            },
            a = i.prototype;
          ((a.append = function (e, t) {
            e in this._entries
              ? this._entries[e].push(String(t))
              : (this._entries[e] = [String(t)]);
          }),
            (a.delete = function (e) {
              delete this._entries[e];
            }),
            (a.get = function (e) {
              return e in this._entries ? this._entries[e][0] : null;
            }),
            (a.getAll = function (e) {
              return e in this._entries ? this._entries[e].slice(0) : [];
            }),
            (a.has = function (e) {
              return e in this._entries;
            }),
            (a.set = function (e, t) {
              this._entries[e] = [String(t)];
            }),
            (a.forEach = function (e, t) {
              var n;
              for (var o in this._entries)
                if (this._entries.hasOwnProperty(o)) {
                  n = this._entries[o];
                  for (var i = 0; i < n.length; i++) e.call(t, n[i], o, this);
                }
            }),
            (a.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(n);
                }),
                n(e)
              );
            }),
            (a.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                n(e)
              );
            }),
            (a.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push([n, t]);
                }),
                n(e)
              );
            }),
            t && (a[Symbol.iterator] = a.entries),
            (a.toString = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(o(n) + '=' + o(t));
                }),
                e.join('&')
              );
            }),
            Object.defineProperty(a, 'size', {
              get: function () {
                return this._entries ? Object.keys(this._entries).length : 0;
              },
            }),
            (e.URLSearchParams = i));
        })();
      var a = e.URLSearchParams.prototype;
      ('function' != typeof a.sort &&
        (a.sort = function () {
          var e = this,
            t = [];
          (this.forEach(function (n, o) {
            (t.push([o, n]), e._entries || e.delete(o));
          }),
            t.sort(function (e, t) {
              return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0;
            }),
            e._entries && (e._entries = {}));
          for (var n = 0; n < t.length; n++) this.append(t[n][0], t[n][1]);
        }),
        'function' != typeof a._fromString &&
          Object.defineProperty(a, '_fromString', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function (e) {
              if (this._entries) this._entries = {};
              else {
                var t = [];
                this.forEach(function (e, n) {
                  t.push(n);
                });
                for (var n = 0; n < t.length; n++) this.delete(t[n]);
              }
              var o,
                a = (e = e.replace(/^\?/, '')).split('&');
              for (n = 0; n < a.length; n++)
                ((o = a[n].split('=')),
                  this.append(i(o[0]), o.length > 1 ? i(o.slice(1).join('=')) : ''));
            },
          }));
    })(
      undefined !== e
        ? e
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof self
            ? self
            : this
    ),
      (function (e) {
        if (
          ((function () {
            try {
              var module = new e.URL('b', 'http://a');
              return (
                (module.pathname = 'c d'),
                'http://a/c%20d' === module.href && module.searchParams
              );
            } catch (e) {
              return false;
            }
          })() ||
            (function () {
              var t = e.URL,
                n = function (t, n) {
                  ('string' != typeof t && (t = String(t)),
                    n && 'string' != typeof n && (n = String(n)));
                  var o,
                    i = document;
                  if (n && (undefined === e.location || n !== e.location.href)) {
                    ((n = n.toLowerCase()),
                      ((o = (i = document.implementation.createHTMLDocument('')).createElement(
                        'base'
                      )).href = n),
                      i.head.appendChild(o));
                    try {
                      if (0 !== o.href.indexOf(n)) throw new Error(o.href);
                    } catch (e) {
                      throw new Error('URL unable to set base ' + n + ' due to ' + e);
                    }
                  }
                  var a = i.createElement('a');
                  ((a.href = t), o && (i.body.appendChild(a), (a.href = a.href)));
                  var r = i.createElement('input');
                  if (
                    ((r.type = 'url'),
                    (r.value = t),
                    ':' === a.protocol || !/:/.test(a.href) || (!r.checkValidity() && !n))
                  )
                    throw new TypeError('Invalid URL');
                  Object.defineProperty(this, '_anchorElement', { value: a });
                  var s = new e.URLSearchParams(this.search),
                    l = true,
                    c = true,
                    d = this;
                  (['append', 'delete', 'set'].forEach(function (e) {
                    var t = s[e];
                    s[e] = function () {
                      (t.apply(s, arguments),
                        l && ((c = false), (d.search = s.toString()), (c = true)));
                    };
                  }),
                    Object.defineProperty(this, 'searchParams', {
                      value: s,
                      enumerable: true,
                    }));
                  var u = undefined;
                  Object.defineProperty(this, '_updateSearchParams', {
                    enumerable: false,
                    configurable: false,
                    writable: false,
                    value: function () {
                      this.search !== u &&
                        ((u = this.search),
                        c && ((l = false), this.searchParams._fromString(this.search), (l = true)));
                    },
                  });
                },
                o = n.prototype;
              (['hash', 'host', 'hostname', 'port', 'protocol'].forEach(function (e) {
                !(function (e) {
                  Object.defineProperty(o, e, {
                    get: function () {
                      return this._anchorElement[e];
                    },
                    set: function (t) {
                      this._anchorElement[e] = t;
                    },
                    enumerable: true,
                  });
                })(e);
              }),
                Object.defineProperty(o, 'search', {
                  get: function () {
                    return this._anchorElement.search;
                  },
                  set: function (e) {
                    ((this._anchorElement.search = e), this._updateSearchParams());
                  },
                  enumerable: true,
                }),
                Object.defineProperties(o, {
                  toString: {
                    get: function () {
                      var e = this;
                      return function () {
                        return e.href;
                      };
                    },
                  },
                  href: {
                    get: function () {
                      return this._anchorElement.href.replace(/\?$/, '');
                    },
                    set: function (e) {
                      ((this._anchorElement.href = e), this._updateSearchParams());
                    },
                    enumerable: true,
                  },
                  pathname: {
                    get: function () {
                      return this._anchorElement.pathname.replace(/(^\/?)/, '/');
                    },
                    set: function (e) {
                      this._anchorElement.pathname = e;
                    },
                    enumerable: true,
                  },
                  origin: {
                    get: function () {
                      var e = { 'http:': 80, 'https:': 443, 'ftp:': 21 }[
                          this._anchorElement.protocol
                        ],
                        t = this._anchorElement.port != e && '' !== this._anchorElement.port;
                      return (
                        this._anchorElement.protocol +
                        '//' +
                        this._anchorElement.hostname +
                        (t ? ':' + this._anchorElement.port : '')
                      );
                    },
                    enumerable: true,
                  },
                  password: {
                    get: function () {
                      return '';
                    },
                    set: function (e) {},
                    enumerable: true,
                  },
                  username: {
                    get: function () {
                      return '';
                    },
                    set: function (e) {},
                    enumerable: true,
                  },
                }),
                (n.createObjectURL = function (e) {
                  return t.createObjectURL.apply(t, arguments);
                }),
                (n.revokeObjectURL = function (e) {
                  return t.revokeObjectURL.apply(t, arguments);
                }),
                (e.URL = n));
            })(),
          undefined !== e.location && !('origin' in e.location))
        ) {
          var module = function () {
            return (
              e.location.protocol +
              '//' +
              e.location.hostname +
              (e.location.port ? ':' + e.location.port : '')
            );
          };
          try {
            Object.defineProperty(e.location, 'origin', {
              get: module,
              enumerable: true,
            });
          } catch (n) {
            setInterval(function () {
              e.location.origin = module();
            }, 100);
          }
        }
      })(
        undefined !== e
          ? e
          : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof self
              ? self
              : this
      ));
  }).call(this, require(109) /* module_109 */);
}
