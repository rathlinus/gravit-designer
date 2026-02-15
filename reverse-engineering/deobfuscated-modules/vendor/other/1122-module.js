/**
 * Module 1122
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
  require(561) /* module */;
  var n = require(1135) /* module */, r = require(1141) /* module */, o = require(160) /* GScene */, a = require(70) /* GText */, s = require(280) /* GWorkspace */, l = require(1140) /* module */, h = require(1139) /* module */, A = require(1142) /* module */, c = require(640) /* module */, p = require(0) /* GObject */, u = require(75) /* GEventTarget */, d = require(794) /* module */, g = require(1401) /* ZlibInflate */.Inflater, f = require(1402) /* ZipJS */.zip;
  function m(e) {
    this._data = e, this._objects = {}, this._symbolsMaster = {}, this._symbolsInstance = {}, this.addEventListener(d.ProcessEvent, this._processEvent, this);
  }
  f.Inflater = g, f.useWebWorkers = false, p.inherit(m, u), m.prototype._promise = null, m.prototype._promiseCapability = null, m.prototype._data = null, m.prototype._pages = null, m.prototype._document = null, m.prototype._symbolsMaster = null, m.prototype._symbolsInstance = null, m.prototype._objects = null, m.prototype._reader = null, m.prototype._entries = null, m.prototype._fontSearch = null, m.prototype._progress = null, m.prototype._objectsTotal = 0, m.prototype._objectsProcessed = 0, m.prototype._ignoreSymbolPage = false, m.prototype._progressStage = 0, m.prototype._progressValue = 0, m.prototype._blockedEvents = null, m.prototype.canEventBeSent = function (e) {
    return !this._blockedEvents;
  }, m.prototype.blockEvents = function (e) {
    this._blockedEvents = true;
  }, m.prototype.releaseEvents = function (e) {
    this._blockedEvents = false;
  }, m.prototype._processEvent = function (e) {
    var t = ++this._objectsProcessed / this._objectsTotal * 50;
    t += this._progressStage, this._progressValue = Math.max(t, this._progressValue || 0), this.updateProgress(this._progressValue);
  }, m.prototype.getMissingFonts = function () {
    return this._fontSearch._missingFonts;
  }, m.prototype.updateProgress = function (e) {
    this._progress && this._progress(e);
  }, m.prototype.getVersion = function () {
    return this._document.version;
  }, m.prototype.getFontSearch = function () {
    return this._fontSearch;
  }, m.prototype.getSymbolInstance = function (e) {
    var t = this._symbolsInstance[e];
    if (t)
      return new h(t, this);
    console.warn("Could not find instance symbol: #" + e);
  }, m.prototype.getSymbolMaster = function (e) {
    var t = this._symbolsMaster[e];
    if (t)
      return new l(t, this);
    console.warn("Could not find master symbol: #" + e);
  }, m.prototype.addObject = function (e) {
    this._objects[e.getId()] = e;
  }, m.prototype.getObject = function (e) {
    return this._objects[e];
  }, m.prototype.getReference = function (e, t) {
    return new Promise(function (i, n) {
      var r = this._getEntry(e);
      r ? r.getData(t || new f.BlobWriter(), function (e) {
        i(e);
      }.bind(this), function (e, t) {
      }) : n();
    }.bind(this));
  }, m.prototype._getEntry = function (e) {
    for (var module = 0; module < this._entries.length; module++)
      if (0 === this._entries[module].filename.indexOf(e))
        return this._entries[module];
    return null;
  }, m.prototype.load = function (e) {
    return e = e || {}, this._progress = e.progress, this._ignoreSymbolPage = e.ignoreSymbolPage, this._workspace = e.workspace || new s(), this._fontSearch = new A(e.fontProvider, this._workspace.getFontManager()), new Promise(function (e, t) {
      f.createReader(new f.BlobReader(this._data), function (i) {
        this._reader = i, i.getEntries(function (i) {
          this._entries = i, this.getReference("meta.json", new f.TextWriter()).then(function (n) {
            if (this._document = new r(JSON.parse(n)), this._document.parse(), console.log(">>>this._document", this._document), this._document.version >= 50 && t("Sketch file v50+ is not supproted yet."), this._pages = [], i.length) {
              var o = function (t) {
                if (t >= i.length)
                  e();
                else {
                  var n = i[t];
                  -1 !== n.filename.indexOf("pages") ? n.getData(new f.TextWriter(), function (e) {
                    this._pages.push(JSON.parse(e)), o(++t);
                  }.bind(this), function (e, t) {
                  }) : o(++t);
                }
              }.bind(this);
              o(0);
            }
          }.bind(this));
        }.bind(this));
      }.bind(this), function () {
        t.apply(null, arguments);
      });
    }.bind(this));
  }, m.prototype._preProcess = function (e) {
    e.forEach(function (e) {
      "symbolMaster" === e._class && (this._symbolsMaster[e.symbolID] = e), "symbolInstance" === e._class && (this._symbolsInstance[e.do_objectID] = e), e.layers && this._preProcess(e.layers), this._objectsTotal++;
    }.bind(this));
  }, m.prototype._postProcess = function (e) {
    setTimeout(function () {
      e.forEach(function (e) {
        e.accept(function (e) {
          e instanceof a && (e._runsDirty = true, e.repaint());
        });
      });
    }.bind(this), 1);
  }, m.prototype._isSymbolPage = function (e) {
    if ("symbolMaster" === e._class)
      return true;
    if (e.layers)
      for (var module = 0; module < e.layers.length; module++)
        if (this._isSymbolPage(e.layers[module]))
          return true;
    return false;
  }, m.prototype._createPromiseCapability = function (e) {
    return new Promise(function (t, i) {
      e.resolve = t, e.reject = i;
    });
  }, m.prototype.parse = function () {
    if (!this._promise) {
      this._promise = this._createPromiseCapability(this._promiseCapability = {});
      try {
        this._preProcess(this._pages);
        var exports = [], module = [], require = new o(this._workspace, true), r = new c();
        this._objectsProcessed = 0;
        var a = function (t) {
            this._ignoreSymbolPage && this._isSymbolPage(t) || ((t = new n(t, this)).parse(true, r), exports.push(t));
          }.bind(this), s = function () {
            this._objectsProcessed = 0, this._progressStage = 50, r.execute(exports, l, h);
          }.bind(this), l = function (e) {
            e.appendTo(require, r);
          }.bind(this), h = function () {
            try {
              for (; require.getFirstChild();) {
                var exports = require.getFirstChild();
                require.removeChild(exports), module.push(exports);
              }
              var n = this.getFontSearch().getDefaultFont(), r = null;
              this.getMissingFonts().length && (r = {}, this.getMissingFonts().forEach(function (e) {
                r[e] = n.family;
              })), this._promiseCapability.resolve({
                pages: module,
                replacedFonts: r
              });
            } finally {
              this._reader.close();
            }
            this._postProcess(module);
          }.bind(this);
        r.execute(this._pages, a, s);
      } catch (e) {
        this._promiseCapability.reject(e);
      }
    }
    return this._promise;
  }, exports.exports = m;
}
