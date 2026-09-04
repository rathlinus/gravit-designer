/**
 * chunk.vendor.js Module #1122
 * Type: unknown
 */

function (e, t, i) {
      i(561);
      var n = i(1135),
        r = i(1141),
        o = i(160),
        a = i(70),
        s = i(280),
        l = i(1140),
        h = i(1139),
        A = i(1142),
        c = i(640),
        p = i(0),
        u = i(75),
        d = i(794),
        g = i(1401).Inflater,
        f = i(1402).zip;

      function m(e) {
        ((this._data = e),
          (this._objects = {}),
          (this._symbolsMaster = {}),
          (this._symbolsInstance = {}),
          this.addEventListener(d.ProcessEvent, this._processEvent, this));
      }
      ((f.Inflater = g),
        (f.useWebWorkers = !1),
        p.inherit(m, u),
        (m.prototype._promise = null),
        (m.prototype._promiseCapability = null),
        (m.prototype._data = null),
        (m.prototype._pages = null),
        (m.prototype._document = null),
        (m.prototype._symbolsMaster = null),
        (m.prototype._symbolsInstance = null),
        (m.prototype._objects = null),
        (m.prototype._reader = null),
        (m.prototype._entries = null),
        (m.prototype._fontSearch = null),
        (m.prototype._progress = null),
        (m.prototype._objectsTotal = 0),
        (m.prototype._objectsProcessed = 0),
        (m.prototype._ignoreSymbolPage = !1),
        (m.prototype._progressStage = 0),
        (m.prototype._progressValue = 0),
        (m.prototype._blockedEvents = null),
        (m.prototype.canEventBeSent = function (e) {
          return !this._blockedEvents;
        }),
        (m.prototype.blockEvents = function (e) {
          this._blockedEvents = !0;
        }),
        (m.prototype.releaseEvents = function (e) {
          this._blockedEvents = !1;
        }),
        (m.prototype._processEvent = function (e) {
          var t = (++this._objectsProcessed / this._objectsTotal) * 50;
          ((t += this._progressStage),
            (this._progressValue = Math.max(t, this._progressValue || 0)),
            this.updateProgress(this._progressValue));
        }),
        (m.prototype.getMissingFonts = function () {
          return this._fontSearch._missingFonts;
        }),
        (m.prototype.updateProgress = function (e) {
          this._progress && this._progress(e);
        }),
        (m.prototype.getVersion = function () {
          return this._document.version;
        }),
        (m.prototype.getFontSearch = function () {
          return this._fontSearch;
        }),
        (m.prototype.getSymbolInstance = function (e) {
          var t = this._symbolsInstance[e];
          if (t) return new h(t, this);
          console.warn("Could not find instance symbol: #" + e);
        }),
        (m.prototype.getSymbolMaster = function (e) {
          var t = this._symbolsMaster[e];
          if (t) return new l(t, this);
          console.warn("Could not find master symbol: #" + e);
        }),
        (m.prototype.addObject = function (e) {
          this._objects[e.getId()] = e;
        }),
        (m.prototype.getObject = function (e) {
          return this._objects[e];
        }),
        (m.prototype.getReference = function (e, t) {
          return new Promise(
            function (i, n) {
              var r = this._getEntry(e);
              r
                ? r.getData(
                    t || new f.BlobWriter(),
                    function (e) {
                      i(e);
                    }.bind(this),
                    function (e, t) {},
                  )
                : n();
            }.bind(this),
          );
        }),
        (m.prototype._getEntry = function (e) {
          for (var t = 0; t < this._entries.length; t++)
            if (0 === this._entries[t].filename.indexOf(e))
              return this._entries[t];
          return null;
        }),
        (m.prototype.load = function (e) {
          return (
            (e = e || {}),
            (this._progress = e.progress),
            (this._ignoreSymbolPage = e.ignoreSymbolPage),
            (this._workspace = e.workspace || new s()),
            (this._fontSearch = new A(
              e.fontProvider,
              this._workspace.getFontManager(),
            )),
            new Promise(
              function (e, t) {
                f.createReader(
                  new f.BlobReader(this._data),
                  function (i) {
                    ((this._reader = i),
                      i.getEntries(
                        function (i) {
                          ((this._entries = i),
                            this.getReference(
                              "meta.json",
                              new f.TextWriter(),
                            ).then(
                              function (n) {
                                if (
                                  ((this._document = new r(JSON.parse(n))),
                                  this._document.parse(),
                                  console.log(
                                    ">>>this._document",
                                    this._document,
                                  ),
                                  this._document.version >= 50 &&
                                    t("Sketch file v50+ is not supproted yet."),
                                  (this._pages = []),
                                  i.length)
                                ) {
                                  var o = function (t) {
                                    if (t >= i.length) e();
                                    else {
                                      var n = i[t];
                                      -1 !== n.filename.indexOf("pages")
                                        ? n.getData(
                                            new f.TextWriter(),
                                            function (e) {
                                              (this._pages.push(JSON.parse(e)),
                                                o(++t));
                                            }.bind(this),
                                            function (e, t) {},
                                          )
                                        : o(++t);
                                    }
                                  }.bind(this);
                                  o(0);
                                }
                              }.bind(this),
                            ));
                        }.bind(this),
                      ));
                  }.bind(this),
                  function () {
                    t.apply(null, arguments);
                  },
                );
              }.bind(this),
            )
          );
        }),
        (m.prototype._preProcess = function (e) {
          e.forEach(
            function (e) {
              ("symbolMaster" === e._class &&
                (this._symbolsMaster[e.symbolID] = e),
                "symbolInstance" === e._class &&
                  (this._symbolsInstance[e.do_objectID] = e),
                e.layers && this._preProcess(e.layers),
                this._objectsTotal++);
            }.bind(this),
          );
        }),
        (m.prototype._postProcess = function (e) {
          setTimeout(
            function () {
              e.forEach(function (e) {
                e.accept(function (e) {
                  e instanceof a && ((e._runsDirty = !0), e.repaint());
                });
              });
            }.bind(this),
            1,
          );
        }),
        (m.prototype._isSymbolPage = function (e) {
          if ("symbolMaster" === e._class) return !0;
          if (e.layers)
            for (var t = 0; t < e.layers.length; t++)
              if (this._isSymbolPage(e.layers[t])) return !0;
          return !1;
        }),
        (m.prototype._createPromiseCapability = function (e) {
          return new Promise(function (t, i) {
            ((e.resolve = t), (e.reject = i));
          });
        }),
        (m.prototype.parse = function () {
          if (!this._promise) {
            this._promise = this._createPromiseCapability(
              (this._promiseCapability = {}),
            );
            try {
              this._preProcess(this._pages);
              var e = [],
                t = [],
                i = new o(this._workspace, !0),
                r = new c();
              this._objectsProcessed = 0;
              var a = function (t) {
                  (this._ignoreSymbolPage && this._isSymbolPage(t)) ||
                    ((t = new n(t, this)).parse(!0, r), e.push(t));
                }.bind(this),
                s = function () {
                  ((this._objectsProcessed = 0),
                    (this._progressStage = 50),
                    r.execute(e, l, h));
                }.bind(this),
                l = function (e) {
                  e.appendTo(i, r);
                }.bind(this),
                h = function () {
                  try {
                    for (; i.getFirstChild(); ) {
                      var e = i.getFirstChild();
                      (i.removeChild(e), t.push(e));
                    }
                    var n = this.getFontSearch().getDefaultFont(),
                      r = null;
                    (this.getMissingFonts().length &&
                      ((r = {}),
                      this.getMissingFonts().forEach(function (e) {
                        r[e] = n.family;
                      })),
                      this._promiseCapability.resolve({
                        pages: t,
                        replacedFonts: r,
                      }));
                  } finally {
                    this._reader.close();
                  }
                  this._postProcess(t);
                }.bind(this);
              r.execute(this._pages, a, s);
            } catch (e) {
              this._promiseCapability.reject(e);
            }
          }
          return this._promise;
        }),
        (e.exports = m));
    }