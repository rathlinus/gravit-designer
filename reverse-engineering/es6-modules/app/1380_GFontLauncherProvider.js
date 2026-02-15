/**
 * Webpack Module #1380
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(596) /* polyfill_Array_reverse */,
    require(180) /* DataModule_180 */,
    require(181) /* polyfill_ArrayBuffer_slice */,
    require(57) /* polyfill_parseInt */,
    require(20) /* polyfill_RegExp_exec */,
    require(34) /* polyfill_String_replace */,
    require(134) /* polyfill_String_startsWith */,
    require(218) /* module_218 */,
    require(692) /* module_692 */,
    require(189) /* DataModule_189 */,
    require(190) /* DataModule_190 */,
    require(191) /* module_191 */,
    require(192) /* DataModule_192 */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GCore = require(1) /* GCore */,
    AppSettings = require(10) /* AppSettings */,
    a = require(381);
  class r extends a {
    constructor(e) {
      super();
      if (r._instance) throw new Error('This class cannot be instantiated multiple times');
      ((r._instance = this), a.call(this, e));
    }

    _firstConnect = true;
    _tlsError = false;
    _initialized = false;
    _connection = null;
    _tmpConnection = null;
    _fontList = null;
    _doReverse = false;
    _fontListLength = -1;
    _taskQueue = [];
    _taskLock = false;
    _resolveCallback = null;
    _oldUnresolved = null;
    _listCallbacks = [];
    _previewCallback = null;
    _cachedInstallButton = null;
    _timeout = null;

    _connect(e) {
      var t = e || r.DEFAULT_PORT;
      if (
        (this._firstConnect
          ? t > r.DEFAULT_PORT + r.START_PORT_SPAN && this._error()
          : t > r.DEFAULT_PORT + r.PORT_SPAN && this._error(),
        !((this._tmpConnection && this._taskLock) || this._connection))
      )
        if (this._fontList && 1 == this._fontList.length && this._fontList[0].special)
          this._cbFail();
        else
          try {
            (console.log('tasklock: true (connect)'),
              (this._taskLock = true),
              t === r.DEFAULT_PORT
                ? (this._tmpConnection = new WebSocket('wss://127.0.0.1:' + t))
                : (this._tmpConnection = new WebSocket('ws://127.0.0.1:' + t)),
              (this._tmpConnection.onopen = this._onOpen.bind(this)),
              (this._tmpConnection.onclose = this._onClose.bind(this)),
              (this._tmpConnection.onerror = this._error.bind(this)),
              this._timeout ||
                (this._timeout = setTimeout(
                  function () {
                    this._tmpConnection &&
                      this._taskLock &&
                      (this._tmpConnection.close(),
                      (this._tmpConnection = null),
                      console.log('tasklock: false'),
                      (this._taskLock = false),
                      (this._timeout = null),
                      console.log('connection time out'),
                      this._cbFatal());
                  }.bind(this),
                  3e4
                )));
          } catch (e) {
            t === r.DEFAULT_PORT
              ? ((this._tlsError = true), setTimeout(this._connect.bind(this), 50, t + 1))
              : setTimeout(this._connect.bind(this), 2e3, t + 1);
          }
    }

    _onOpen() {
      ((this._connection = this._tmpConnection),
        (this._connection.onmessage = this._onmsg.bind(this)),
        (this._tmpConnection = null),
        (this._timeout = null));
      var e = new Uint8Array(5);
      (this._setData(e, r.Cmd.probe), this._connection.send(e.buffer));
    }

    _onClose(e) {
      (console.log('socket closing:' + e),
        (this._connection = null),
        (this._tmpConnection = null),
        (this._initialized = false));
    }

    _error() {
      if (
        (console.log('tasklock: false (error)'),
        (this._taskLock = false),
        this._tmpConnection && !this._connection)
      ) {
        var exports = this._tmpConnection.url.split(':'),
          module = parseInt(exports[exports.length - 1]);
        this._tmpConnection = null;
        var require = this._firstConnect ? r.START_PORT_SPAN : r.PORT_SPAN;
        if (module > r.DEFAULT_PORT + require) return void this._cbFatal();
        setTimeout(this._connect.bind(this), 2e3, module + 1);
      }
    }

    _onmsg(e) {
      var t = e.data;
      if (t instanceof Blob) {
        var require = t.slice(0, 1),
          GCore = t.slice(1, 5);
        t = t.slice(5);
        var AppSettings = null,
          a = null,
          s = new FileReader();
        s.addEventListener(
          'loadend',
          function () {
            var e = false;
            if (null === AppSettings)
              ((AppSettings = s.result),
                (AppSettings = (AppSettings = new Uint8Array(AppSettings))[0]),
                s.readAsArrayBuffer(GCore));
            else if (null === a) {
              a = s.result;
              var require = new Uint8Array(a),
                l = new Uint32Array(require.buffer);
              (l[0] !== r.Cmd.stamp
                ? (require.reverse(),
                  (l = new Uint32Array(require.buffer))[0] === r.Cmd.stamp &&
                    ((this._doReverse = true), (e = true)))
                : (e = true),
                e && s.readAsArrayBuffer(t));
            } else this._handleCmd(AppSettings, s.result);
          }.bind(this)
        );
        try {
          s.readAsArrayBuffer(require);
        } catch (e) {
          return;
        }
      }
    }

    _cbFail() {
      for (var exports = 0; exports < this._listCallbacks.length; exports++) {
        var module = this._listCallbacks[exports];
        (this._listCallbacks.shift(),
          this._fontList && 1 == this._fontList.length && this._fontList[0].special
            ? module.done(this._fontList, true, null)
            : module.fail());
      }
      (this._resolveCallback &&
        ((module = this._resolveCallback),
        this._isInitialized() ||
          (this._oldUnresolved
            ? this._oldUnresolved.push(module)
            : (this._oldUnresolved = [module])),
        (this._resolveCallback = null),
        module.fail ? module.fail() : module(true)),
        (this._taskLock = false));
    }

    _cbFatal() {
      (gDesigner.getSetting('system_fonts_enabled', true)
        ? ((this._fontListLength = 1),
          (this._fontList = [{ family: '', special: true, fonts: [{ weight: 400, style: 'N' }] }]))
        : ((this._fontListLength = 0), (this._fontList = [])),
        (this._firstConnect = false),
        this._cbFail());
    }

    _cbDone(e) {
      var t;
      if ((console.log('cb done'), this._listCallbacks))
        for (var require = 0; require < this._listCallbacks.length; require++)
          ((t = this._listCallbacks[require]),
            this._listCallbacks.shift(),
            (this._listCallbacks = null),
            t.done(this._fontList, true, null));
      (this._resolveCallback &&
        ((t = this._resolveCallbacks[require]),
        (this._resolveCallback = null),
        e ? t.done(e) : t()),
        this._oldUnresolved &&
          (this._oldUnresolved.forEach(function (t) {
            e ? t.done(e) : t();
          }),
          (this._oldUnresolved = null)),
        (this._taskLock = false));
    }

    _handleCmd(e, t) {
      try {
        switch (e) {
          case r.Cmd.probe:
            var require;
            if (this._doReverse) {
              var GCore = new Uint8Array(t);
              (GCore.reverse(), (require = new Uint32Array(GCore.buffer)));
            } else require = new Uint32Array(t);
            this._fontListLength = require[0];
            var AppSettings = new Uint8Array(13);
            (this._setData(AppSettings, r.Cmd.list), this._connection.send(AppSettings.buffer));
            break;
          case r.Cmd.list:
            if ((w = (b = new Uint8Array(t))[0]) == r.Cmd.success) {
              b = b.slice(3);
              var a = String.fromCharCode.apply(null, new Uint8Array(b.buffer)),
                s = JSON.parse(a),
                l = [],
                c = {};
              if (s.length)
                if ('string' == typeof s[0] || s[0] instanceof String) {
                  for (var d = 0; d < s.length; d++) {
                    var u = s[d].split('_'),
                      p = (h = u[0]).toLowerCase(),
                      g = {
                        weight: parseInt(u[1]),
                        style: 0 == parseInt(u[2]) ? 'N' : 'I',
                        f: h,
                      };
                    c[p] ? c[p].push(g) : (c[p] = [g]);
                  }
                  for (var h in c) {
                    g = c[h];
                    l.push({ family: g[0].f, fonts: g });
                  }
                } else
                  for (d = 0; d < s.length; d++) {
                    for (
                      var f = s[d], m = ((h = f[0]), []), y = { family: h, fonts: m }, v = 1;
                      v < f.length;
                      v++
                    ) {
                      var _ = f[v].split('_');
                      m.push({
                        weight: parseInt(_[0]),
                        style: 0 == parseInt(_[1]) ? 'N' : 'I',
                      });
                    }
                    l.push(y);
                  }
              ((this._fontListLength = l.length),
                (this._fontList = l),
                (this._initialized = true),
                console.log('tasklock: false (cmd list)'),
                (this._taskLock = false),
                this._cbDone());
            } else
              w == r.Cmd.error
                ? (console.log('tasklock: false (cmd list err1)'),
                  (this._taskLock = false),
                  this._cbFail())
                : (console.log('tasklock: false (cmd list err2)'),
                  (this._taskLock = false),
                  this._cbFail());
            break;
          case r.Cmd.previews:
            break;
          case r.Cmd.font:
            var b, w;
            (w = (b = new Uint8Array(t))[0]) == r.Cmd.success
              ? ((b = b.slice(1)), this._cbDone(b.buffer))
              : (w == r.Cmd.error || console.warn('Error receiving data'), this._cbFail());
        }
      } catch (e) {
        console.warn('Error receiving data from server:' + e.message);
      }
    }

    _setData(e, t) {
      var n = r.Cmd.stamp;
      ((e[0] = n >> 24),
        (e[1] = (n >> 16) & 255),
        (e[2] = (n >> 8) & 255),
        (e[3] = (n >> 0) & 255),
        (e[4] = t));
    }

    hasEnabler() {
      return true;
    }

    getEnabler() {
      var e = document.createElement('div');
      return (e.appendChild(this._getInstallButton()), e);
    }

    isInitialized() {
      return this._isInitialized();
    }

    _isInitialized() {
      return (
        !(!this._connection || !this._initialized) &&
        (0 == this._connection.readyState ||
          1 == this._connection.readyState ||
          ((this._connection = null),
          (this._tmpConnection = null),
          (this._initialized = false),
          false))
      );
    }

    _getInstallButton() {
      if (this._cachedInstallButton) return this._cachedInstallButton;
      'http://127.0.0.1:9000' === r.HOST &&
        (r.HOST =
          'https://' +
          (AppSettings.domain.startsWith('corelvector') ? 'app-' : '') +
          gDesigner.getEnv().split('.')[0] +
          '.' +
          AppSettings.domain);
      var e = document.createElement('object');
      e.data = r.LAUNCHER_PATH;
      var t = document.createElement('div');
      ((t.innerHTML =
        "<b>To enable system fonts, either:</b><ul style='list-style:initial'><li>enable flash</li><li>download, install and run gravit font server manually: <a name='_SPECIAL_' href='/assets/data/fonts.air?no_redirect=true'>DOWNLOAD LINK</a></li><li>import fonts into browser in the settings panel.</li></ul>"),
        (t.style.width = '310px'),
        (t.style.textAlign = 'left'));
      var n = document.createElement('param');
      return (
        n.setAttribute('name', 'FlashVars'),
        n.setAttribute(
          'value',
          'host=' + escape(r.HOST) + '&appurl=' + escape('/assets/data/fonts.air?no_redirect=true')
        ),
        e.appendChild(n),
        (n = document.createElement('param')).setAttribute('name', 'wmode'),
        n.setAttribute('value', 'transparent'),
        e.appendChild(n),
        (e.type = 'application/x-shockwave-flash'),
        (e.name = '_SPECIAL_'),
        (e.height = '150'),
        (e.width = '300'),
        (this._cachedInstallButton = e),
        e
      );
    }

    addPreviews(e) {
      if (e.length)
        if (1 == e.length && e[0].special) {
          var module = this;
          e[0].addPreviewCallback = function (e) {
            e(module.getEnabler());
          };
        } else {
          if (!this._isInitialized())
            return ((this._previewCallback = this.addPreviews), void this._initialize());
          for (var require = 0; require < e.length; require++)
            e[require].cachedPreview ||
              (e[require].addPreviewCallback = function (e) {
                var t = document.createElement('div');
                ((t.innerHTML = this.family),
                  (t.style.fontFamily = this.family),
                  (t.style.fontSize = '13px'),
                  e(t));
              });
        }
    }

    _initialize() {
      gDesigner.getSetting('system_fonts_enabled', true)
        ? this._taskLock ||
          (this._tlsError ? this._connect(r.DEFAULT_PORT + 1) : this._connect(r.DEFAULT_PORT))
        : this._cbFatal();
    }

    load(e, t, n, GCore) {
      if (!this._isInitialized()) return (this._listCallbacks.push(GCore), void this._initialize());
      GCore.done(
        this._fontList
          .filter(function (t) {
            return e.indexOf('%') >= 0
              ? t.family.toLowerCase().startsWith(e.replace(/%/g, ''))
              : t.family.toLowerCase() == e.toLowerCase();
          })
          .slice(t, t + n),
        true,
        null
      );
    }

    getTotalFonts(e) {
      return this._isInitialized()
        ? e
          ? this._fontList.filter(this._searchFilter(e)).length
          : this._fontListLength
        : (this._initialize(), 0);
    }

    resolveFont(e, t, n, GCore) {
      if (!this._isInitialized())
        return (
          (this._resolveCallback = function (AppSettings) {
            AppSettings ? GCore.fail() : this.resolveFont(e, t, n, GCore);
          }.bind(this)),
          void this._initialize()
        );
      if (!this._taskLock) {
        var AppSettings = e.length;
        this._resolveCallback = GCore;
        var a = new Uint8Array(9 + AppSettings + 4);
        (this._setData(a, r.Cmd.font),
          (a[5] = (4278190080 & AppSettings) >> 24),
          (a[6] = (16711680 & AppSettings) >> 16),
          (a[7] = (65280 & AppSettings) >> 8),
          (a[8] = (255 & AppSettings) >> 0));
        for (var s = 9; s < 9 + AppSettings; s++) a[s] = e.charCodeAt(s - 9);
        var l = parseInt(n);
        ((a[s] = (65280 & l) >> 8),
          (a[s + 1] = (255 & l) >> 0),
          (a[s + 3] = 'N' == t ? 0 : 1),
          this._connection.send(a));
      }
    }

    getProviderId() {
      return s;
    }

    static _instance = this;

    static DEFAULT_PORT = 32119;

    static START_PORT_SPAN = 1;

    static PORT_SPAN = 5;

    static HOST = 'undefined' == typeof window || !window || (window.process && window.process.type)
        ? ''
        : window.location.href.replace(/\/$/, '');

    static LAUNCHER_PATH = '/assets/data/launcher.swf';

    static Cmd = {
      success: 0,
      font: 1,
      list: 2,
      probe: 3,
      close: 4,
      previews: 5,
      error: 255,
      stamp: 3735941121,
    };

    static _instance = null;

    static _launcherInstall() {
      r._instance._providerManager.setLock();
    }

    static _closeLauncher() {
      var e,
        t = 0,
        n = function () {
          if (this._isInitialized())
            return (console.log('initialized: finish'), void clearInterval(e));
          if (!this._taskLock) {
            if (((this._fontList = null), this._cachedInstallButton)) {
              var n = this._cachedInstallButton.parentElement;
              (n &&
                n.contains(this._cachedInstallButton) &&
                n.removeChild(this._cachedInstallButton),
                (this._cachedInstallButton = null));
            }
            (this._providerManager.reset(), t++ > 10 && (this._cbFatal(), clearInterval(e)));
          }
        }.bind(r._instance);
      e = setInterval(n, 2e3);
    }

    static HOST = 'https://' +
          (AppSettings.domain.startsWith('corelvector') ? 'app-' : '') +
          gDesigner.getEnv().split('.')[0] +
          '.' +
          AppSettings.domain;

  }
  var s = GCore.GUtil.uuid();
  exports.exports = r;
}