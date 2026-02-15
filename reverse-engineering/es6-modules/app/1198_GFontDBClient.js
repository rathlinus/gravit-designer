/**
 * Webpack Module #1198
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  class o {
    constructor() {
      try {
      this._createDB();
      } catch (e) {
      ((this._failedStarting = true), console.log('Cannot createIndexedDB'), o._removeCallbacks());
      }
    }

    _cb = null;
    _dataBase = null;
    _cachingService = null;
    _cachingBroken = false;
    _failedStarting = false;

    _createDB() {
      try {
        ((window.indexedDB =
          window.indexedDB ||
          window.webkitIndexedDB ||
          window.mozIndexedDB ||
          window.OIndexedDB ||
          window.msIndexedDB),
          (IDBTransaction =
            window.IDBTransaction ||
            window.webkitIDBTransaction ||
            window.OIDBTransaction ||
            window.msIDBTransaction));
      } catch (e) {}
      if (window.indexedDB) {
        var exports = indexedDB.open('gravitFontsDB', 1);
        if (
          (exports.addEventListener('error', () => {
            ((this._failedStarting = true), o._removeCallbacks());
          }),
          'done' === exports.readyState)
        ) {
          if (exports.error)
            throw ((this._failedStarting = true), new Error('Failed starting GFontDBClient'));
          this._requestSuccess({ target: exports });
        } else
          ((exports.onsuccess = this._requestSuccess.bind(this)),
            (exports.onerror = function (e) {
              0;
            }));
        exports.onupgradeneeded = this._createStore.bind(this);
      } else o._removeCallbacks();
    }

    _requestSuccess(e) {
      if (this._dataBase) o._removeCallbacks(this);
      else if (((this._dataBase = e.target.result), this._dataBase)) {
        if (
          ((this._dataBase.onerror = function (e) {
            0;
          }),
          this._dataBase.setVersion)
        )
          if (1 != this._dataBase.version)
            return void (this._dataBase.setVersion(1).onsuccess = function () {
              (this._createStore(), o._removeCallbacks(this));
            }.bind(this));
        o._removeCallbacks(this);
      }
    }

    _createStore(e) {
      (this._dataBase || (this._dataBase = e.target.result),
        this._dataBase && this._dataBase.createObjectStore(i));
    }

    ready() {
      return !!this._dataBase;
    }

    clear() {
      return $.Deferred(
        function (e) {
          this._dataBase || e.resolveWith(this, [true]);
          try {
            var module = this._dataBase.transaction([i], 'readwrite');
            try {
              var require = module.objectStore(i).clear();
              ((require.onsuccess = function (t) {
                e.resolveWith(this, [true]);
              }.bind(this)),
                (require.onerror = function (t) {
                  e.resolveWith(this, [false]);
                }.bind(this)));
            } catch (t) {
              return void e.resolveWith(this, [false]);
            }
          } catch (t) {
            (0, e.resolveWith(this, [false]));
          }
        }.bind(this)
      );
    }

    deleteItem(e) {
      return $.Deferred(
        function (t) {
          this._dataBase || t.resolveWith(this, [true]);
          try {
            var require = this._dataBase.transaction([i], 'readwrite');
            try {
              var o = require.objectStore(i).delete(e);
              ((o.onsuccess = function (e) {
                t.resolveWith(this, [true]);
              }.bind(this)),
                (o.onerror = function (e) {
                  t.resolveWith(this, [false]);
                }.bind(this)));
            } catch (e) {
              return void t.resolveWith(this, [false]);
            }
          } catch (e) {
            (0, t.resolveWith(this, [false]));
          }
        }.bind(this)
      );
    }

    setItem(e, t) {
      return $.Deferred(
        function (n) {
          this._dataBase || n.resolveWith(this, [false]);
          try {
            var o = this._dataBase.transaction([i], 'readwrite');
            try {
              var a = o.objectStore(i).put(t, e);
              ((a.onsuccess = function (e) {
                n.resolveWith(this, [true]);
              }.bind(this)),
                (a.onerror = function (e) {
                  n.resolveWith(this, [false]);
                }.bind(this)));
            } catch (e) {
              return void n.resolveWith(this, [false]);
            }
          } catch (e) {
            (0, n.resolveWith(this, [false]));
          }
        }.bind(this)
      );
    }

    updateItem(e, t) {
      return $.Deferred(
        function (n) {
          (this._dataBase || n.resolveWith(this, [false]),
            this.getItem(e).done((o, i) => {
              try {
                var a = i.put(t, e);
                ((a.onsuccess = function (e) {
                  n.resolveWith(this, [true]);
                }.bind(this)),
                  (a.onerror = function (e) {
                    n.resolveWith(this, [false]);
                  }.bind(this)));
              } catch (e) {
                return void n.resolveWith(this, [false]);
              }
            }));
        }.bind(this)
      );
    }

    pushArray(e, t) {
      return $.Deferred(
        function (n) {
          this._dataBase || n.resolveWith(this, [false]);
          try {
            var o = this._dataBase.transaction([i], 'readwrite');
            o.objectStore(i).count(e).onsuccess = function (a) {
              if (
                (console.log('number of fonts:' + e + ' ' + a.target.result), 0 === a.target.result)
              ) {
                try {
                  o.objectStore(i).put(t, e);
                } catch (e) {
                  return void n.resolveWith(this, [false]);
                }
                n.resolveWith(this, [true]);
              } else
                1 === a.target.result &&
                  this.getItem(e).done(
                    function (e, o) {
                      if (e) {
                        var i;
                        e = e.concat(t);
                        try {
                          i = o.put(e);
                        } catch (e) {
                          return void n.resolveWith(this, [false]);
                        }
                        ((i.onsuccess = function (e) {
                          n.resolveWith(this, [true]);
                        }),
                          (i.error = function (e) {
                            n.resolveWith(this, [false]);
                          }));
                      }
                    }.bind(this)
                  );
            };
          } catch (e) {
            (0, n.resolveWith(this, [false]));
          }
        }.bind(this)
      );
    }

    getItem(e) {
      var t = this;
      return $.Deferred(function (n) {
        try {
          var o = this;
          t._dataBase || n.resolveWith(o, [null]);
          var a = t._dataBase.transaction([i], 'readwrite').objectStore(i),
            r = a.get(e);
          ((r.onsuccess = function (e) {
            var t = e.target.result;
            n.resolveWith(o, [t, a]);
          }),
            (r.onerror = function (e) {
              e.target.result;
              n.resolveWith(o, [null, a]);
            }));
        } catch (e) {
          ((e.name = 'exception'), n.resolveWith(this, [null, a]));
        }
      });
    }

    static _instance = new o();

    static _instance = null;

    static getInstance(e) {
    if (!o._instance || !o._instance._dataBase || o._instance._failedStarting)
      try {
        if (
          (e && o._cb.push(e),
          (o._instance && !o._instance._failedStarting) || (o._instance = new o()),
          e)
        )
          return null;
      } catch (e) {
        return ((o._instance = null), void o._removeCallbacks());
      }
    return (e && e(o._instance), o._instance);
  }

    static _cb = [];

    static _removeCallbacks(e) {
      if (o._cb.length) {
        for (var module = 0; module < o._cb.length; module++) o._cb[module](e || null);
        o._cb = [];
      }
    }

    static _instance = null;

    static _cb = [];

    static FONT_LIST = '_gravit_font_list_';

    static NATIVE_FONT_LIST = '_gravit_native_font_list_';

    static NATIVE_FONT_LIST_DATE = '_gravit_native_font_list_date_';

    static NATIVE_FONT_LIST_V = '_gravit_native_font_list_v_';

    static onsuccess = function (e) {
                t.resolveWith(this, [true]);
              }.bind(this);

    static onerror = function (e) {
                  t.resolveWith(this, [false]);
                }.bind(this);

  }
  var i = 'gravitFonts';
  exports.exports = o;
}