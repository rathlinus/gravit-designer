/**
 * Webpack Module #255
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(328) /* polyfill_Array_sort */,
    require(20) /* polyfill_RegExp_exec */,
    require(34) /* polyfill_String_replace */,
    require(38)) /* stub_requires_680 */;
  var GCore = require(1) /* GCore */,
    GMissingFontsDialog = require(841) /* GMissingFontsDialog */,
    GDocumentStatusEvent = require(217) /* GDocumentStatusEvent */,
    r = require(86);
  const s = require(381) /* module_381 */,
    GOfflineDialog = require(256) /* GOfflineDialog */,
    GNetworkAvailabilityChangedEvent = require(291);
  var d = [],
    u = function () {};
  class p extends GCore.GEventTarget {
    constructor() {
      super();
      if (p._instance) throw new Error('FontsProviderManager can be instantiated only once.');
      p._instance = this;
    }

    manager = null;
    _resetProviders = null;
    _lock = null;
    _loaded = 0;
    _lastLoaded = 0;
    _loadedPreviews = 0;
    _lastLoadedPreviews = 0;
    _loading = false;
    _timeStamp = 0;
    _firstCallback = null;
    _missingFontsDialog = null;
    _missingFontsActions = null;
    _showMissingFontsDialog = true;
    _listenerFor = {};
    keepFontsMessage = null;

    init() {
      gDesigner.addEventListener(
        GNetworkAvailabilityChangedEvent,
        this._networkAvailabilityChangedEvent,
        this
      );
    }

    _networkAvailabilityChangedEvent(e) {
      if (this._resetProviders && this._resetProviders.length && e.connected)
        for (; this._resetProviders.length; ) this.reset(this._resetProviders.shift(), true);
    }

    getMissingFontsDialog() {
      return this._missingFontsDialog;
    }

    isLoading() {
    return this._loading;
  }

    releaseDocumentListener(e) {
      this._listenerFor[e.sessionId] &&
        this.removeEventListener(GDocumentStatusEvent, this._listenerFor[e.sessionId]);
    }

    setShowMissingFontsDialog(e) {
      this._showMissingFontsDialog = e;
    }

    resetMissingFontsDialog() {
      this._missingFontsDialog = null;
    }

    _providerProbe(e, t, n, GCore, GMissingFontsDialog, GDocumentStatusEvent, r, GOfflineDialog, GNetworkAvailabilityChangedEvent, u) {
      for (
        var p, g, _, b = this, w = GOfflineDialog ? 20 : 9999;
        d[e] && !GNetworkAvailabilityChangedEvent && !d[e].isEnabled();
      )
        e++;
      if (
        (GOfflineDialog
          ? ((p = this._loadedPreviews), (g = this._lastLoadedPreviews))
          : ((p = this._loaded), (g = this._lastLoaded)),
        e >= d.length)
      )
        return (
          (this._loading = false),
          (this._timeStamp = GCore),
          void (GOfflineDialog
            ? (this._loadedPreviews = this._lastLoadedPreviews)
            : ((this._loaded = this._lastLoaded),
              r &&
                GMissingFontsDialog.length &&
                ((!GNetworkAvailabilityChangedEvent && this.hasDisabled()) ||
                  ((m[n] = { faces: GMissingFontsDialog.slice(), total: GDocumentStatusEvent }),
                  y.unshift(n) > 30 && delete m[y.pop()]),
                GNetworkAvailabilityChangedEvent ||
                  ((h[n] = { faces: GMissingFontsDialog, total: GDocumentStatusEvent }),
                  f.unshift(n) > 30 && delete h[f.pop()])),
              t({ faces: GMissingFontsDialog, total: GDocumentStatusEvent }),
              GNetworkAvailabilityChangedEvent ||
                this._providerProbe(
                  0,
                  t,
                  n,
                  GCore,
                  [],
                  0,
                  r,
                  true,
                  GNetworkAvailabilityChangedEvent,
                  u
                )))
        );
      var C,
        x = p + (p < 9999 ? 9999 : w),
        S = 0;
      if (0 === e && !r) {
        var E = 0;
        for (e = 0; e < d.length; e++)
          if (
            (GNetworkAvailabilityChangedEvent || d[e].isEnabled()) &&
            (E += d[e].getTotalFonts(this.normalizeQuery(n))) > p
          ) {
            S = p - E + d[e].getTotalFonts(this.normalizeQuery(n));
            break;
          }
      }
      ((!n || '%' === n) && g < GDocumentStatusEvent) || e >= d.length
        ? this._providerProbe(
            d.length,
            t,
            n,
            GCore,
            GMissingFontsDialog,
            GDocumentStatusEvent,
            r,
            GOfflineDialog,
            GNetworkAvailabilityChangedEvent,
            u
          )
        : ((C = x - g),
          (_ = d[e]).load(
            this.normalizeQuery(n),
            S,
            C,
            {
              done: function (s, u, p) {
                if (GCore < this._timeStamp) console.log('discarded');
                else {
                  (d.indexOf(_) < 0 || (!GNetworkAvailabilityChangedEvent && !d[e].isEnabled())) &&
                    this._providerProbe(
                      e + 1,
                      t,
                      n,
                      GCore,
                      GMissingFontsDialog,
                      GDocumentStatusEvent,
                      r,
                      GOfflineDialog,
                      GNetworkAvailabilityChangedEvent
                    );
                  for (var g = 0; g < s.length; g++)
                    v.hasOwnProperty(s[g].family) || (v[s[g].family] = _);
                  if (!GOfflineDialog) {
                    var f = h[this.normalizeQuery(n)] || { faces: [] };
                    if (GMissingFontsDialog !== f.faces || GNetworkAvailabilityChangedEvent) {
                      for (g = 0; g < GMissingFontsDialog.length; g++) {
                        if (
                          (y = d.indexOf(v[GMissingFontsDialog[g].family])) > e &&
                          d[y].isEnabled()
                        ) {
                          Array.prototype.splice.apply(GMissingFontsDialog, [g, 0].concat(s));
                          break;
                        }
                      }
                      if (
                        (g == GMissingFontsDialog.length &&
                          Array.prototype.push.apply(GMissingFontsDialog, s),
                        !GNetworkAvailabilityChangedEvent)
                      ) {
                        var m = f.faces;
                        for (g = 0; g < m.length; g++) {
                          if ((y = d.indexOf(v[m[g].family])) > e && d[y].isEnabled()) {
                            Array.prototype.splice.apply(m, [g, 0].concat(s));
                            break;
                          }
                        }
                        g == m.length && Array.prototype.push.apply(m, s);
                      }
                    } else {
                      for (var g = 0; g < GMissingFontsDialog.length; g++) {
                        var y;
                        if (
                          (y = d.indexOf(v[GMissingFontsDialog[g].family])) > e &&
                          d[y].isEnabled()
                        ) {
                          Array.prototype.splice.apply(f.faces, [g, 0].concat(s));
                          break;
                        }
                      }
                      g == GMissingFontsDialog.length &&
                        Array.prototype.push.apply(GMissingFontsDialog, s);
                    }
                  }
                  (_.addPreviews(s, GOfflineDialog),
                    (GDocumentStatusEvent += _.getTotalFonts(this.normalizeQuery(n))),
                    r &&
                      0 === e &&
                      (GOfflineDialog ? (this._loadedPreviews = 0) : (this._loaded = 0)),
                    GOfflineDialog
                      ? (this._lastLoadedPreviews += s.length)
                      : (this._lastLoaded += s.length),
                    GMissingFontsDialog.sort((e, t) => e.family.localeCompare(t.family)),
                    this._providerProbe(
                      e + 1,
                      t,
                      n,
                      GCore,
                      GMissingFontsDialog,
                      GDocumentStatusEvent,
                      r,
                      GOfflineDialog,
                      GNetworkAvailabilityChangedEvent
                    ));
                }
              }.bind(b),
              fail: function (d) {
                (u ||
                  (d &&
                    d === s.Errors.ConnectionError &&
                    (b._resetProviders || (b._resetProviders = []),
                    b._resetProviders.push(_.constructor))),
                  b._providerProbe(
                    e + 1,
                    t,
                    n,
                    GCore,
                    GMissingFontsDialog,
                    GDocumentStatusEvent,
                    r,
                    GOfflineDialog,
                    GNetworkAvailabilityChangedEvent
                  ));
              }.bind(b),
            },
            u
          ));
    }

    setLock() {
      (this._lock && clearTimeout(this._lock),
        (this._lock = setTimeout(
          function () {
            this._lock = null;
          }.bind(this),
          1e4
        )));
    }

    getLock() {
      return !!this._lock;
    }

    reset(e, t, n) {
      if (e)
        for (var GCore = 0; GCore < d.length; GCore++)
          d[GCore] instanceof e && (t || d[GCore].isEnabled()) && d[GCore].resetProvider();
      (this._lock && (clearTimeout(this._lock), (this._lock = null)),
        (this._loaded = 0),
        (this._lastLoaded = 0),
        (this._loadedPreviews = 0),
        (this._lastLoadedPreviews = 0),
        (this._loading = false),
        (this._timeStamp = 0),
        (h = {}),
        (f = []),
        n || ((m = {}), (y = [])),
        this._firstCallback && this.query(this._firstCallback, '%'),
        this._missingFontsDialog && (this._missingFontsDialog = null),
        this.hasEventListeners(p.ResetEvent) && this.trigger(new p.ResetEvent(this)));
    }

    loadMore(e, t) {
      if (!this._loading) {
        if (0 === this._loadedPreviews && 0 === this._lastLoadedPreviews)
          this._providerProbe(0, e, t, require, [], 0, false, true);
        else if (
          this._loadedPreviews >= 9999 &&
          this._lastLoadedPreviews < this._loadedPreviews + 20
        )
          if (this._loaded >= 9999 && this._lastLoaded < this._loaded + 9999) {
            this._loading = true;
            var require = new Date().getTime();
            this._providerProbe(0, e, t, require, [], 0, false, false);
          } else {
            this._loading = true;
            require = new Date().getTime();
            this._providerProbe(0, e, t, require, [], 0, false, true);
          }
        else if (this._loaded >= 9999 && this._lastLoaded < this._loaded + 9999) {
          this._loading = true;
          require = new Date().getTime();
          this._providerProbe(0, e, t, require, [], 0, false, false);
        }
        return this._lastLoadedPreviews;
      }
    }

    query(e, t, n) {
      if ((t && (t = t.toLowerCase()), n && m.hasOwnProperty(t))) e((GCore = m[t]));
      else if (!n && h.hasOwnProperty(t)) {
        ((this._lastLoaded = 0), (this._lastLoadedPreviews = 0));
        var GCore = h[t];
        ((this._loaded = GCore.faces.length),
          (this._loadedPreviews = GCore.faces.length),
          e(GCore));
      } else {
        if (t.length > 2) {
          var GMissingFontsDialog = t.substr(0, t.length - 2);
          for (
            GMissingFontsDialog = this.normalizeQuery(GMissingFontsDialog);
            GMissingFontsDialog.length > 1;
          ) {
            if (h.hasOwnProperty(GMissingFontsDialog))
              if (
                (GCore = h[GMissingFontsDialog]).faces.length < 9999 ||
                GCore.faces.length == GCore.total
              ) {
                for (var GDocumentStatusEvent = [], r = 0; r < GCore.faces.length; r++)
                  GCore.faces[r].family.substr(0, t.length - 1).toLowerCase() ==
                    t.substr(0, t.length - 1).toLowerCase() &&
                    GDocumentStatusEvent.push(GCore.faces[r]);
                return (
                  (this._lastLoaded = this._lastLoadedPreviews = 0),
                  (this._loaded = this._loadedPreviews = GDocumentStatusEvent.length),
                  void e({ faces: GDocumentStatusEvent })
                );
              }
            ((GMissingFontsDialog = GMissingFontsDialog.substr(0, GMissingFontsDialog.length - 2)),
              (GMissingFontsDialog = this.normalizeQuery(GMissingFontsDialog)));
          }
        }
        var s = new Date().getTime();
        ((this._loading = true),
          (this._loaded = this._loadedPreviews = 0),
          (this._lastLoaded = this._lastLoadedPreviews = 0),
          this._providerProbe(0, e, t, s, [], 0, true, false, n));
      }
    }

    normalizeQuery(e) {
      return ('%' != e && (e ? (e += '%') : (e = '%'), (e = e.replace(/%+$/, '%'))), e);
    }

    isCacheEmpty() {
      return !m || !m.hasOwnProperty('%');
    }

    hasDisabled() {
      return d.some((e) => !e.isEnabled());
    }

    searchFamilyInCache(e) {
      var t = e.toLowerCase() + ('%' == e ? '' : '%');
      if (this.isCacheEmpty()) return null;
      for (; t.length > 0; ) {
        if (m.hasOwnProperty(t)) {
          var require = m[t];
          if (require.faces)
            for (var GCore = 0; GCore < require.faces.length; GCore++) {
              var GMissingFontsDialog = require.faces[GCore];
              if (GMissingFontsDialog.family === e) return GMissingFontsDialog;
              if (GMissingFontsDialog.families && GMissingFontsDialog.families.indexOf(e) >= 0)
                return GMissingFontsDialog;
            }
        }
        if (1 === t.length) break;
        ((t = t.substr(0, t.length - 2)), (t = this.normalizeQuery(t)));
      }
      return null;
    }

    static _instance = this;

    static ResetEvent(e) {
      this.manager = e;
    }

    static MissingFontEvent(e, t, n) {
      ((this.manager = e), (this.evt = t), (this.provider = n));
    }

    static registerProvider(e) {
      var t = new e(p._instance);
      d.indexOf(t) < 0 && d.push(t);
    }

    static unregisterProvider(e) {
      for (var module = 0; module < d.length; module++)
        d[module] instanceof e && d.splice(module--, 1);
    }

    static getInstance() {
      return p._instance || new p();
    }

    static getProvider(e) {
      return v[e] || null;
    }

    static getProviders() {
      return d.slice();
    }

    static getProviderInstance(e) {
      if (p._instance)
        for (var module = 0; module < d.length; module++)
          if (d[module] instanceof e) return d[module];
      return null;
    }

    static disableProviders(e) {
      if (p._instance) {
        for (var module = 0; module < e.length; module++)
          for (var require = e[module], GCore = 0; GCore < d.length; GCore++)
            d[GCore] instanceof require ? d[GCore].setEnabled(false) : d[GCore].setEnabled(true);
        p._instance.reset(null, false, true);
      }
    }

    static enableProviders(e, t) {
      if (p._instance) {
        for (var require = 0; require < e.length; require++)
          for (
            var GCore = e[require], GMissingFontsDialog = 0;
            GMissingFontsDialog < d.length;
            GMissingFontsDialog++
          )
            d[GMissingFontsDialog] instanceof GCore
              ? d[GMissingFontsDialog].setEnabled(true)
              : t || d[GMissingFontsDialog].setEnabled(false);
        t || p._instance.reset(null, false, true);
      }
    }

    static resolveQueryFontFamily(e) {
      var t = p.getInstance(),
        n = () => {
          var n = t.searchFamilyInCache(e.family);
          e.callback(n && n.fonts && n.fonts.length ? n.fonts : []);
        };
      t.isCacheEmpty() ? t.query(n, '%', true) : n();
    }

    static _triggerMissingFont(e, t) {
      var n = p.getInstance();
      n.hasEventListeners(p.MissingFontEvent) && n.trigger(new p.MissingFontEvent(n, e, t));
    }

    static resolveFont(e, t) {
      var n;
      e && undefined === t
        ? (n = p.getProvider(e.family))
          ? n.resolveFont(e.family, e.style, e.weight, {
              done: function (t) {
                var n;
                (e.sender instanceof GCore.GFontManager &&
                  (n = e.sender._getFont(e.family, e.style, e.weight)),
                  (n && n.isResolved()) ||
                    (n = GCore.GOpenTypeFont.create(e.family, e.style, e.weight, t)),
                  n && e.resolved(n));
              },
              fail: function (t) {
                t && t === s.Errors.ConnectionError
                  ? gDesigner.isOffline() &&
                    GOfflineDialog.openUnavailableFeature(() => p.resolveFont(e))
                  : (e.failed(), p._triggerMissingFont(e, n), g(e));
              },
            })
          : p.resolveFont(e, 0)
        : 'number' == typeof t &&
          ((n = d[t])
            ? n.resolveFont(e.family, e.style, e.weight, {
                done: function (n) {
                  var GMissingFontsDialog;
                  (e.sender instanceof GCore.GFontManager &&
                    (GMissingFontsDialog = e.sender._getFont(e.family, e.style, e.weight)),
                    (GMissingFontsDialog && GMissingFontsDialog.isResolved()) ||
                      (GMissingFontsDialog = GCore.GOpenTypeFont.create(
                        e.family,
                        e.style,
                        e.weight,
                        n
                      )),
                    GMissingFontsDialog
                      ? e.resolved(GMissingFontsDialog)
                      : p.resolveFont(e, t + 1));
                },
                fail: function () {
                  p.resolveFont(e, t + 1);
                },
              })
            : d && t === d.length
              ? (e.failed(), p._triggerMissingFont(e, n), g(e))
              : p.resolveFont(e, t + 1));
    }

  }
  function g(e) {
    var t = gDesigner.getActiveDocument(),
      n = function (GCore) {
        var s = p.getInstance();
        if (GCore)
          switch (GCore.status) {
            case r.Saved:
            case r.SyncFailed:
            case r.Ready:
            case r.SaveFailed:
              (s.removeEventListener(GDocumentStatusEvent, n), delete s._listenerFor[t.sessionId]);
              break;
            case r.LoadFailed:
              (s.removeEventListener(GDocumentStatusEvent, n), delete s._listenerFor[t.sessionId]);
            default:
              return;
          }
        if (!((t.getScene().getProperty('cst') || []).indexOf(e.family) >= 0)) {
          var GOfflineDialog = [e.family],
            GNetworkAvailabilityChangedEvent = d
              .filter(function (e) {
                return !e.isInitialized() && e.hasEnabler();
              })
              .map(function (e) {
                return e.getEnabler();
              });
          (!(function (e, t) {
            var n = p.getInstance();
            n._missingFontsActions || (n._missingFontsActions = {});
            n._missingFontsActions[t.sessionId] || (n._missingFontsActions[t.sessionId] = {});
            for (
              var GCore = n._missingFontsActions[t.sessionId], GMissingFontsDialog = e.length - 1;
              GMissingFontsDialog >= 0;
              GMissingFontsDialog--
            ) {
              var GDocumentStatusEvent = e[GMissingFontsDialog];
              GCore.hasOwnProperty(GDocumentStatusEvent)
                ? e.splice(GMissingFontsDialog, 1)
                : (GCore[GDocumentStatusEvent] = null);
            }
          })(GOfflineDialog, t),
            GOfflineDialog.length &&
              (s._missingFontsDialog
                ? (s._missingFontsDialog.setProviderEnablers(GNetworkAvailabilityChangedEvent),
                  s._missingFontsDialog.setMissingFonts(GOfflineDialog))
                : GOfflineDialog.length &&
                  (s._missingFontsDialog = new GMissingFontsDialog(
                    t,
                    GOfflineDialog,
                    GNetworkAvailabilityChangedEvent,
                    (e) => {
                      ((s._missingFontsDialog = null), (s.keepFontsMessage = null));
                      var n = s._missingFontsActions[t.sessionId];
                      for (var GCore in e) n[GCore] = e[GCore];
                    }
                  )),
              e.tryToResolveMissingFont &&
                s._showMissingFontsDialog &&
                !s._missingFontsDialog.opened &&
                s._missingFontsDialog.open(s.keepFontsMessage),
              (s._firstCallback = u)));
        }
      };
    if (t && t.getStatus() === r.Ready) n();
    else {
      var GCore = p.getInstance();
      t &&
        !GCore._listenerFor[t.sessionId] &&
        ((GCore._listenerFor[t.sessionId] = n), GCore.addEventListener(GDocumentStatusEvent, n));
    }
  };
  (GCore.GObject.inherit(p.ResetEvent, GCore.GEvent),
    GCore.GObject.inherit(p.MissingFontEvent, GCore.GEvent),
    p.getInstance());
  var h = {},
    f = [],
    m = {},
    y = [],
    v = {};
  exports.exports = p;
}