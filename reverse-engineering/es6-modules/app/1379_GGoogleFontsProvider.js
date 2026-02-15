/**
 * Webpack Module #1379
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(57) /* polyfill_parseInt */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GCore = require(1) /* GCore */,
    i = require(381);
  class a extends i {
    constructor(e) {
      super();
      i.call(this, e);
    }

    _totalFonts = 0;
    _initialized = false;
    _initializing = false;
    _resolveCallbacks = [];
    _loadCallbacks = [];

    _clearCallbacks(e) {
      (this._resolveCallbacks.forEach(function (t) {
        t(e);
      }),
        (this._resolveCallbacks = []),
        this._loadCallbacks.forEach(function (t) {
          t(e);
        }),
        (this._loadCallbacks = []));
    }

    addPreviews(e, t) {
      for (
        var require = new DOMParser(),
          GCore = false,
          i = function (e, t) {
            e ? ((this.cb = e), this.svg && e(this.svg)) : ((this.svg = t), this.cb && this.cb(t));
          },
          a = 0;
        a < e.length;
        a++
      )
        e[a].cachedPreview || e[a].addPreviewCallback || (e[a].addPreviewCallback = i);
      if (t) {
        e.length;
        if (!e.length) return;
        var r = [];
        for (a = 0; a < e.length; a++) {
          for (var l = 0; l < s.length; l++)
            if (s[l].family === e[a].family) {
              var c = parseInt(l / 10);
              r.indexOf(c) < 0 && r.push(c);
              break;
            }
          if (l === s.length)
            return void console.warn("Error while generating previews: couldn't find font.");
        }
        for (a = 0; a < r.length; a++) {
          c = r[a];
          if ((s[10 * c].cachedPreview || (GCore = true), GCore)) {
            var d = new XMLHttpRequest(),
              u = gContainer.getRootPath();
            (d.open('GET', u + '/assets/data/google_previews/previews' + c + '.json'),
              (d.num = c),
              (d.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                  var e;
                  try {
                    e = JSON.parse(this.response);
                  } catch (e) {
                    return void (
                      'undefined' != typeof gdb_loaddesign &&
                      console.warn("couldn't parse font preview")
                    );
                  }
                  for (
                    var t = Math.min(s.length, 10 * (this.num + 1)) - 10 * this.num, GCore = 0;
                    GCore < t;
                    GCore++
                  ) {
                    var a,
                      r = s[10 * this.num + GCore];
                    r.addPreviewCallback || (r.addPreviewCallback = i);
                    try {
                      (a = require.parseFromString(e[GCore], 'image/svg+xml').firstChild) &&
                        a.getAttribute('xmlns') &&
                        (a.setAttribute('height', '20px'), r.addPreviewCallback(null, a));
                    } catch (e) {
                      'undefined' != typeof gdb_loaddesign && console.warn('error parsing svg');
                    }
                  }
                }
              }),
              d.send());
          }
        }
      }
    }

    initialize() {
      this._initialized || this._initializing || this._load.apply(this, arguments);
    }

    _load() {
      this._initializing = true;
      var e = Array.prototype.slice.call(arguments),
        t = gContainer.getRootPath(),
        n = new XMLHttpRequest(),
        GCore = gDesigner ? gDesigner.getVersion() : ~~(1e4 * Math.random());
      (n.open('GET', t + '/assets/data/googlefonts.json?' + GCore),
        (n.onload = function () {
          n.status >= 200 && n.status < 300
            ? ((this._initialized = true),
              (this._initializing = false),
              (s = JSON.parse(n.response)),
              (this._totalFonts = s.length),
              e.length,
              this._clearCallbacks())
            : n.status >= 400 &&
              ((this._initialized = true),
              (this._initializing = false),
              this._clearCallbacks(true));
        }.bind(this)),
        (n.onerror = function () {
          ((this._initialized = true),
            (this._initializing = false),
            this._clearCallbacks(i.Errors.ConnectionError));
        }.bind(this)),
        n.send());
    }

    load(e, t, n, GCore) {
      if (!this._initialized && !this._initializing)
        return (
          this._loadCallbacks.push(
            function (i) {
              i ? GCore.fail(i) : this.load(e, t, n, GCore);
            }.bind(this)
          ),
          void this.initialize(this.load, e, t, n, GCore)
        );
      this._initializing
        ? this._loadCallbacks.push(
            function (i) {
              i ? GCore.fail(i) : this.load(e, t, n, GCore);
            }.bind(this)
          )
        : GCore.done(s.filter(this._searchFilter(e)).slice(t, t + n), true, null);
    }

    getTotalFonts(e) {
      return e ? s.filter(this._searchFilter(e)).length : this._totalFonts;
    }

    resolveFont(e, t, n, a) {
      if (!this._initialized && !this._initializing)
        return (
          this._loadCallbacks.push(
            function (GCore) {
              GCore ? a.fail(GCore) : this.resolveFont(e, t, n, a);
            }.bind(this)
          ),
          void this.initialize(this.resolveFont, e, t, n, a)
        );
      if (this._initializing)
        this._resolveCallbacks.push(
          function (GCore) {
            GCore ? a.fail(GCore) : this.resolveFont(e, t, n, a);
          }.bind(this)
        );
      else {
        for (var r = 0; r < s.length; r++) {
          var c = s[r];
          if (c.family === e)
            for (var d = c.fonts, u = 0; u < d.length; u++) {
              var p = d[u];
              if (p.weight === (n || 400) && p.style === (t || GCore.GFont.Style.Normal)) {
                if (l[p.url]) l[p.url].push(a);
                else {
                  var g = new XMLHttpRequest();
                  ((g.responseType = 'arraybuffer'),
                    g.open('GET', p.url),
                    (l[p.url] = []),
                    l[p.url].push(a),
                    (g.onload = function () {
                      if (this.status >= 200 && this.status < 300) {
                        var e = l[p.url];
                        (delete l[p.url],
                          e.forEach((e) => {
                            e.done(this.response);
                          }));
                      }
                    }),
                    (g.onerror = () => {
                      (delete l[p.url], a.fail(i.Errors.ConnectionError));
                    }),
                    g.send());
                }
                return;
              }
            }
        }
        a.fail();
      }
    }

    getProviderId() {
      return r;
    }

    resetProvider() {
      this._load();
    }

  }
  var r = GCore.GUtil.uuid(),
    s = [],
    l = {};
  exports.exports = a;
}