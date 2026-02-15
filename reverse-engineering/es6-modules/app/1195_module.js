/**
 * Webpack Module #1195
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(1196) /* polyfill_Array_flat */,
    require(19) /* polyfill_Array_iterator */,
    require(1197) /* stub_requires_360 */,
    require(180) /* DataModule_180 */,
    require(181) /* polyfill_ArrayBuffer_slice */,
    require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(107) /* polyfill_RegExp_test */,
    require(134) /* polyfill_String_startsWith */,
    require(218) /* module_218 */,
    require(189) /* DataModule_189 */,
    require(190) /* DataModule_190 */,
    require(191) /* module_191 */,
    require(192) /* DataModule_192 */,
    require(4) /* stub_requires_668 */,
    require(32) /* stub_requires_670 */,
    require(38) /* stub_requires_680 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GSystem = require(176) /* GSystem */,
    GObject = require(0) /* GObject */,
    a = require(237);
  const { GRegex: r } = require(263);
  var FileSaverJS = require(1117) /* FileSaverJS */.saveAs,
    l = false,
    c = null,
    d = null;
  class u extends a {
    constructor() {
      super();
      ((this._fileInput = null), (this._fileInputCallback = null));
    }

    _hasFileAPI() {
      return 'function' == typeof window.showSaveFilePicker && !this._isChromeOS();
    }

    _isChromeOS() {
      return r.NavigatorUserAgent.IS_CHROME_OS.test(navigator.userAgent || '');
    }

    _hasDirectoryWriteAPI() {
      return 'function' == typeof window.chooseFileSystemEntries;
    }

    canChooseDirectory() {
      return this._hasDirectoryWriteAPI() && !l;
    }

    canPromptOpen() {
      return true;
    }

    canPromptSave(e) {
      return this._hasFileAPI();
    }

    canSave() {
      return this._hasFileAPI();
    }

    canDownload() {
      return true;
    }

    chooseDirectory(e, t, n) {
      if (!this._hasFileAPI() || !this.canChooseDirectory()) return;
      var GSystem = { type: d || 'open-directory' };
      let GObject = null;
      var a = false;
      window
        .chooseFileSystemEntries(GSystem)
        .then((e) => ((GObject = e), p(e)))
        .then(() => {
          let t = e(new u.Directory(this, GObject));
          return ((a = true), t);
        })
        .catch((e) => {
          if (e instanceof DOMException && 'SecurityError' === e.name) {
            if (((l = true), n)) return void n();
          } else !a && !d && e instanceof TypeError && (d = 'openDirectory');
          t && t();
        });
    }

    openPrompt(e, t, n) {
      let { disableFileSystemAccessAPI: GObject = false, silent: a = false } =
        arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {};
      if (!GObject && this._hasFileAPI()) {
        var r = { multiple: !!n };
        return (
          e.length > 0 &&
            ((r.excludeAcceptAllOption = true), (r.types = [this._prepareDialogTypes(e)])),
          window
            .showOpenFilePicker(r)
            .then((e) => {
              (Array.isArray(e) || (e = [e]),
                e.forEach((n) => {
                  n.getFile()
                    .then((e) => e.arrayBuffer())
                    .then((GSystem) =>
                      t(new u.Item(this, new Uint8Array(GSystem), n.name, n), e.length)
                    )
                    .catch((e) => {
                      console.log('ERROR reading file');
                    });
                }));
            })
            .catch((e) => {
              e instanceof DOMException || console.warn('showOpenFilePicker warning', e);
            }),
          void (this._fileInputCallback = t)
        );
      }
      const FileSaverJS = e.map((e) => e.ext).flat();
      e.map((e) => e.mime);
      if (!this._fileInput) {
        ((this._fileInput = document.createElement('input')),
          this._fileInput.setAttribute('type', 'file'),
          this._fileInput.setAttribute('id', 'file-input'),
          (this._fileInput.multiple = n),
          (this._fileInput.style.opacity = 0),
          (this._fileInput.style.position = 'absolute'),
          (this._fileInput.style.zIndex = -1),
          (this._fileInput.style.left = '-9999px'),
          (this._fileInput.style.top = '-9999px'));
        var l = function (e) {
          var t = this._fileInput.files.length;
          if (e >= t) this._fileInput.value = '';
          else {
            var n = this._fileInput.files[e],
              GSystem = n.name;
            if (n instanceof File || n instanceof Blob) {
              var GObject = new FileReader();
              ((GObject.onload = function () {
                (this._fileInputCallback(
                  new u.Item(this, new Uint8Array(GObject.result), GSystem),
                  t
                ),
                  l(e + 1));
              }.bind(this)),
                GObject.readAsArrayBuffer(n));
            } else l(e + 1);
          }
        }.bind(this);
        (this._fileInput.addEventListener('change', () => {
          l(0);
        }),
          document.body.appendChild(this._fileInput));
      }
      (GSystem.operatingSystem === GSystem.OperatingSystem.OSX_IOS
        ? this._fileInput.removeAttribute('accept')
        : FileSaverJS && FileSaverJS.length
          ? this._fileInput.setAttribute('accept', FileSaverJS.map((e) => '.' + e).join(','))
          : this._fileInput.removeAttribute('accept'),
        (this._fileInputCallback = t),
        this._fileInput.focus(),
        a || this._fileInput.click());
    }

    savePrompt(e, t, n, GSystem) {
      if (this._hasFileAPI()) {
        var GObject = {};
        t.length > 0 &&
          ((GObject.suggestedName = e),
          (GObject.excludeAcceptAllOption = true),
          (GObject.types = [this._prepareDialogTypes(t, true)]));
        var a = false;
        window
          .showSaveFilePicker(GObject)
          .then((e) => ((a = true), n(new u.Item(this, null, e.name, e))))
          .catch((t) => {
            if (
              (!a && !c && t instanceof TypeError && (c = 'saveFile'),
              !a && t.code !== DOMException.ABORT_ERR)
            )
              return this.download(e, n);
            GSystem && GSystem();
          });
      }
    }

    _prepareDialogTypes(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
      const require = {};
      let GSystem = '';
      for (let GObject = 0, a = e.length; GObject < a; GObject++) {
        let { mime: a, ext: r } = e[GObject];
        a && r
          ? (module && 'jpg' === r && (a = 'x-really-an-image/jpeg'),
            undefined !== require[a]
              ? (Array.isArray(require[a]) || (require[a] = [require[a]]),
                require[a].push(r.startsWith('.') ? r : '.'.concat(r)),
                GSystem && (GSystem += ', '),
                (GSystem += '*' + (r.startsWith('.') ? r : '.'.concat(r))))
              : ((require[a] = r.startsWith('.') ? r : '.'.concat(r)),
                GSystem && (GSystem += ', '),
                (GSystem += '*' + (r.startsWith('.') ? r : '.'.concat(r)))))
          : console.warn(
              'openPrompt warning: no mime or ext. given mime: "'
                .concat(a, '", given ext: "')
                .concat(r, '"')
            );
      }
      return { description: GSystem, accept: require };
    }

    download(e, t) {
      return t(new u.Item(this, null, e));
    }

    static Directory(e, t) {
      (a.Directory.call(this, e), (this._dirHandle = t), (this._id = null));
    }

    static Item(e, t, n, GSystem) {
      (a.Item.call(this, e), (this._data = t), (this._filename = n), (this._fileHandle = GSystem));
    }

  }
  function p(e) {
    return e
      .queryPermission({ writable: true })
      .then((t) => ('granted' !== t ? e.requestPermission({ writable: true }) : t))
      .then((e) => {
        if ('granted' !== e) throw new Error('Cannot get write access');
      });
  };
  (GObject.inherit(u.Directory, a.Directory),
    u.Directory.prototype._dirHandle = null,
    u.Directory.prototype._id = null,
    u.Directory.prototype.getUniqueId = function () {
      return null;
    },
    u.Directory.prototype.addDirectory = async function (e, t) {
      let require = null;
      try {
        return (
          (require = await this._dirHandle.getDirectory(e, { create: true })),
          await p(require),
          new u.Directory(this._storage, require)
        );
      } catch (t) {
        throw new Error('Cannot create a directory: ' + e);
      }
    },
    u.Directory.prototype.addFile = async function (e, t) {
      let require = null;
      try {
        return (
          (require = await this._dirHandle.getFile(e, { create: true })),
          await p(require),
          new u.Item(this._storage, null, require.name, require)
        );
      } catch (e) {
        throw new Error('Cannot create a file');
      }
    },
    GObject.inherit(u.Item, a.Item),
    u.Item.prototype._data = null,
    u.Item.prototype._filename = null,
    u.Item.prototype._fileHandle = null,
    u.Item.prototype.getFullName = function () {
      return this._filename;
    },
    u.Item.prototype.setFileName = function (e) {
      this._filename = e;
    },
    u.Item.prototype.read = function (e, t, n) {
      if (this._data || !this._fileHandle) return e(this._data);
      this._fileHandle
        .getFile()
        .then((e) => e.arrayBuffer())
        .then((t) => {
          ((this._data = new Uint8Array(t)), e(this._data));
        });
    },
    u.Item.prototype.write = function (e, t, n, GSystem, GObject) {
      if ((this._verifyFileNotTooSmall(e.length, GObject), this._fileHandle)) {
        let GSystem = null;
        this._fileHandle
          .createWritable()
          .then((e) => ((GSystem = e), GSystem.truncate(0)))
          .then(() => GSystem.write(e))
          .then(() => GSystem.close())
          .then(() => {
            t && t();
          })
          .catch((GSystem) => {
            if (GSystem instanceof DOMException && GSystem.code === DOMException.QUOTA_EXCEEDED_ERR)
              return (this.notEnoughDiskSpace(), void (n ? n() : t && t()));
            (FileSaverJS(new Blob([e]), this._filename), t && t());
          });
      } else (FileSaverJS(new Blob([e]), this._filename), t && t());
    },
    exports.exports = u);
}