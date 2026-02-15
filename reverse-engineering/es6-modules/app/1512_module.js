/**
 * Webpack Module #1512
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
    GObject = require(0);
  require(10) /* AppSettings */;
  var a = require(237) /* Item */,
    FileSaverJS = require(1117) /* FileSaverJS */.saveAs,
    s = null,
    l = null;
  class c extends a {
    constructor() {
      super();
      ((this._fileInput = null), (this._fileInputCallback = null));
    }

    _isFileAPIAvailable() {
      return false;
    }

    _hasDirectoryWriteAPI() {
      return 'function' == typeof window.chooseFileSystemEntries;
    }

    canChooseDirectory() {
      return this._hasDirectoryWriteAPI() && true;
    }

    canPromptOpen() {
      return true;
    }

    canPromptSave() {
      return this._isFileAPIAvailable();
    }

    canSave() {
      return this._isFileAPIAvailable();
    }

    canDownload() {
      return !this._isFileAPIAvailable();
    }

    chooseDirectory(e, t, n) {
      if (!this._isFileAPIAvailable() || !this.canChooseDirectory()) return;
      var GSystem = { type: l || 'open-directory' };
      let GObject = null;
      var a = false;
      window
        .chooseFileSystemEntries(GSystem)
        .then((e) => ((GObject = e), d(e)))
        .then(() => {
          let t = e(new c.Directory(this, GObject));
          return ((a = true), t);
        })
        .catch((e) => {
          if (e instanceof DOMException && 'SecurityError' === e.name) {
            if ((console.warn('Bugged!'), n)) return void n();
          } else !a && !l && e instanceof TypeError && (l = 'openDirectory');
          t && t();
        });
    }

    openPrompt(e, t, n) {
      let { disableFileSystemAccessAPI: GObject = false, silent: a = false } =
        arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {};
      if (!GObject && this._isFileAPIAvailable()) {
        var FileSaverJS = { multiple: !!n };
        if (e.length > 0) {
          const t = {};
          FileSaverJS.excludeAcceptAllOptions = true;
          for (let n = 0, GSystem = e.length; n < GSystem; n++) {
            const { mime: GSystem, ext: GObject } = e[n];
            GSystem && GObject
              ? undefined !== t[GSystem]
                ? (Array.isArray(t[GSystem]) || (t[GSystem] = [t[GSystem]]),
                  t[GSystem].push(GObject.startsWith('.') ? GObject : '.'.concat(GObject)))
                : (t[GSystem] = GObject.startsWith('.') ? GObject : '.'.concat(GObject))
              : console.warn(
                  'openPrompt warning: no mime or ext. given mime: "'
                    .concat(GSystem, '", given ext: "')
                    .concat(GObject, '"')
                );
          }
          FileSaverJS.types = [{ accept: t }];
        }
        return (
          window
            .showOpenFilePicker(FileSaverJS)
            .then((e) => {
              (Array.isArray(e) || (e = [e]),
                e.forEach((n) => {
                  n.getFile()
                    .then((e) => e.arrayBuffer())
                    .then((GSystem) =>
                      t(new c.Item(this, new Uint8Array(GSystem), n.name, n), e.length)
                    )
                    .catch(() => {
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
      const s = e.map((e) => e.ext).flat();
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
                  new c.Item(this, new Uint8Array(GObject.result), GSystem),
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
      (GSystem.hardware === GSystem.Hardware.Tablet &&
      GSystem.operatingSystem === GSystem.OperatingSystem.OSX_IOS
        ? this._fileInput.removeAttribute('accept')
        : s && s.length
          ? this._fileInput.setAttribute('accept', s.map((e) => '.' + e).join(','))
          : this._fileInput.removeAttribute('accept'),
        (this._fileInputCallback = t),
        this._fileInput.focus(),
        a || this._fileInput.click());
    }

    savePrompt(e, t, n, GSystem) {
      if (this._isFileAPIAvailable()) {
        var GObject = { suggestedName: e };
        if (t.length > 0) {
          const e = {};
          GObject.excludeAcceptAllOptions = true;
          for (let n = 0, GSystem = t.length; n < GSystem; n++) {
            let { mime: GSystem, ext: GObject } = t[n];
            GSystem && GObject
              ? ('jpg' === GObject && (GSystem = 'x-really-an-image/jpeg'),
                undefined !== e[GSystem]
                  ? (Array.isArray(e[GSystem]) || (e[GSystem] = [e[GSystem]]),
                    e[GSystem].push(GObject.startsWith('.') ? GObject : '.'.concat(GObject)))
                  : (e[GSystem] = GObject.startsWith('.') ? GObject : '.'.concat(GObject)))
              : console.warn(
                  'openPrompt warning: no mime or ext. given mime: "'
                    .concat(GSystem, '", given ext: "')
                    .concat(GObject, '"')
                );
          }
          let n = [{ accept: e }];
          const GSystem = Object.keys(e);
          ((GSystem || []).length > 1 &&
            (n = GSystem.map((t) => {
              let n = {};
              return ((n[t] = e[t]), { accept: n });
            })),
            (GObject.types = n));
        }
        var a = false;
        window
          .showSaveFilePicker(GObject)
          .then((e) => ((a = true), n(new c.Item(this, null, e.name, e))))
          .catch((t) => {
            if (
              (!a && !s && t instanceof TypeError && (s = 'saveFile'),
              !a && t.code !== DOMException.ABORT_ERR)
            )
              return this.download(e, n);
            GSystem && GSystem();
          });
      }
    }

    download(e, t) {
      return t(new c.Item(this, null, e));
    }

    static Directory(e, t) {
      (a.Directory.call(this, e), (this._dirHandle = t), (this._id = null));
    }

    static Item(e, t, n, GSystem) {
      (a.Item.call(this, e), (this._data = t), (this._filename = n), (this._fileHandle = GSystem));
    }

  }
  function d(e) {
    return e
      .queryPermission({ writable: true })
      .then((t) => ('granted' !== t ? e.requestPermission({ writable: true }) : t))
      .then((e) => {
        if ('granted' !== e) throw new Error('Cannot get write access');
      });
  };
  (GObject.inherit(c.Directory, a.Directory),
    c.Directory.prototype._dirHandle = null,
    c.Directory.prototype._id = null,
    c.Directory.prototype.getUniqueId = function () {
      return null;
    },
    c.Directory.prototype.addDirectory = async function (e) {
      let module = null;
      try {
        return (
          (module = await this._dirHandle.getDirectory(e, { create: true })),
          await d(module),
          new c.Directory(this._storage, module)
        );
      } catch (t) {
        throw new Error('Cannot create a directory: ' + e);
      }
    },
    c.Directory.prototype.addFile = async function (e) {
      let module = null;
      try {
        return (
          (module = await this._dirHandle.getFile(e, { create: true })),
          await d(module),
          new c.Item(this._storage, null, module.name, module)
        );
      } catch (e) {
        throw new Error('Cannot create a file');
      }
    },
    GObject.inherit(c.Item, a.Item),
    c.Item.prototype._data = null,
    c.Item.prototype._filename = null,
    c.Item.prototype._fileHandle = null,
    c.Item.prototype.getFullName = function () {
      return this._filename;
    },
    c.Item.prototype.setFileName = function (e) {
      this._filename = e;
    },
    c.Item.prototype.read = function (e) {
      if (this._data || !this._fileHandle) return e(this._data);
      this._fileHandle
        .getFile()
        .then((e) => e.arrayBuffer())
        .then((t) => {
          ((this._data = t), e(this._data));
        });
    },
    c.Item.prototype.write = function (e, t, n, GSystem, GObject) {
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
    exports.exports = c);
}