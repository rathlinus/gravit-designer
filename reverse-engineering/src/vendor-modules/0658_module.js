/**
 * chunk.vendor.js Module #658
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(227),
        o = i(2),
        a = i(72),
        s = i(95),
        l = i(517),
        h = i(139),
        A = i(28),
        c = i(280);

      function p(e) {
        (r.call(this),
          (this._scene = e),
          this._scene.addEventListener(
            o.AfterInsertEvent,
            this._afterInsertEvent,
            this,
            void 0,
            void 0,
            !0,
          ),
          this._scene.addEventListener(
            o.AfterRemoveEvent,
            this._afterRemoveEvent,
            this,
            void 0,
            void 0,
            !0,
          ),
          e.getWorkspace() &&
            ((this._workspace = e.getWorkspace()),
            this._workspace.addEventListener(
              c.ResolveUrlEvent,
              this._resolveUrlEvent,
              this,
            )));
      }
      (n.inherit(p, r),
        (p.ResolvedMissingEntryEvent = function (e, t) {
          ((this.entry = t), (this.scene = e));
        }),
        n.inherit(p.ResolvedMissingEntryEvent, a),
        (p.ResolvedMissingEntryEvent.prototype.entry = null),
        (p.ResolvedMissingEntryEvent.prototype.scene = null),
        (p.prototype._scene = null),
        (p.prototype._workspace = null),
        (p.prototype._memory = 0),
        (p.prototype._resolveUrlEvent = function (e) {
          if (r.isDictionary(e.url) && e.scene === this._scene) {
            var t = this.getValue(e.url);
            t &&
              (/^(file|http|data|\/\/)/i.test(t)
                ? e.resolved(t)
                : this._workspace.trigger(
                    new c.ResolveUrlEvent(t, e.scene, e.resolved),
                  ));
          }
        }),
        (p.prototype._afterInsertEvent = function (e) {
          var t = {},
            i = this._getUrl(e.node);
          if (i)
            if (r.isDictionary(i)) {
              if (!(i in t)) {
                var n = this.getEntry(i);
                n ? (t[i] = n) : this._redirectUrl(e.node);
              }
            } else this._redirectUrl(e.node);
          if (e.node.hasMixin(A)) {
            var o = e.node.getPaintLayers();
            o &&
              o.getLayers().forEach(
                function (e) {
                  var i = this._getUrl(e);
                  if (r.isDictionary(i)) {
                    if (!(i in t)) {
                      var n = this.getEntry(i);
                      n && (t[i] = n);
                    }
                  } else this._redirectUrl(e);
                }.bind(this),
              );
          }
          this._updateReferences(t);
        }),
        (p.prototype._afterRemoveEvent = function (e) {
          var t = this._getUrl(e.node);
          if ((t && this.removeEntry(t), e.node.hasMixin(A))) {
            var i = e.node.getPaintLayers();
            i &&
              i.getLayers().forEach(
                function (e) {
                  var t = this._getUrl(e);
                  t && this.removeEntry(t);
                }.bind(this),
              );
          }
        }),
        (p.prototype._redirectUrl = function (e) {
          var t = this._getUrl(e);
          if (!r.isDictionary(t)) {
            var i = this.putValueIfAbsent(t);
            i &&
              (e instanceof A.PaintLayer
                ? (e.$_pt._url = i.getUrl())
                : e instanceof s && (e.$url = i.getUrl()));
          }
        }),
        (p.prototype._updateReferences = function (e, t) {
          var i = Object.keys(e).map(function (t) {
            var i = e[t];
            return ((i.references = 0), i);
          });
          i.length &&
            (this._scene.accept(
              function (t) {
                if (
                  (t instanceof s && t.$url in e && e[t.$url].references++,
                  t.hasMixin(A))
                ) {
                  var i = t.getPaintLayers();
                  i &&
                    i.getLayers().forEach(
                      function (t) {
                        var i = this._getUrl(t);
                        i in e && e[i].references++;
                      }.bind(this),
                    );
                }
                if (t instanceof l) {
                  var n = this._getUrl(t);
                  n in e && e[n].references++;
                }
              }.bind(this),
            ),
            i.forEach(
              function (e) {
                e.hasReferences() || this.removeEntry(e, t);
              }.bind(this),
            ));
        }),
        (p.prototype._getUrl = function (e) {
          if (e instanceof A.PaintLayer || e instanceof l) {
            if (e.$_pt && e.$_pt instanceof h && e.$_pt._url)
              return e.$_pt._url;
          } else if (e instanceof s) return e.$url;
          return null;
        }),
        (p.prototype.setCachedCanvas = function (e, t) {
          var i = this._scene.getWorkspace();
          if (i) {
            if (
              (i.decreaseMemoryForImage(e.cachedCanvas),
              !i.increaseMemoryForImage(t))
            )
              return (console.warn("MAX IMAGE MEMORY EXCEEDED"), !1);
            t && (e.cachedCanvas = t);
          }
          return !0;
        }),
        (p.prototype.release = function () {
          (this._scene.removeEventListener(
            o.AfterInsertEvent,
            this._afterInsertEvent,
            this,
          ),
            this._scene.removeEventListener(
              o.AfterRemoveEvent,
              this._afterRemoveEvent,
              this,
            ));
          var e = this._scene.getWorkspace();
          (e &&
            e.removeEventListener(
              c.ResolveUrlEvent,
              this._resolveUrlEvent,
              this,
            ),
            this.getEntries().forEach(
              function (t) {
                (e && e.decreaseMemoryForImage(t.cachedCanvas),
                  (t.cachedCanvas = null),
                  delete this._map[t.uuid]);
              }.bind(this),
            ),
            (this._memory = 0));
        }),
        (p.prototype.sanitize = function () {
          var e = function (e, t) {
            if (r.isDictionary(e) && !this.getEntry(e)) {
              var i = e.substring((r.PROTOCOL + "://").length);
              if (!t) throw new Error("Missing entry value for " + e);
              var n = new this.EntryClass(t, i);
              if (!this.addEntry(n))
                throw new Error("Could not add an entry for " + e);
              this.hasEventListeners(p.ResolvedMissingEntryEvent) &&
                this.trigger(new p.ResolvedMissingEntryEvent(this._scene, n));
            }
          }.bind(this);
          this._scene.accept(
            function (t) {
              if (t instanceof s) {
                var i = t.getProperty("url"),
                  n = t.getProperty("storedUrl");
                e(i, n);
              }
              if (t.hasMixin(A)) {
                var r = t.getPaintLayers();
                r &&
                  r.getLayers().forEach(
                    function (t) {
                      if (t instanceof A.PaintLayer) {
                        var i = t.getProperty("_pt");
                        if (i && i instanceof h) {
                          var n = i.getUrl();
                          if (n && "string" == typeof n) {
                            var r = i.getRawUrl();
                            e(n, r);
                          }
                        }
                      }
                    }.bind(this),
                  );
              }
            }.bind(this),
          );
        }),
        (p.prototype.flush = function () {
          var e = {};
          (this.getEntries().forEach(function (t) {
            e[t.getUrl()] = t;
          }),
            this._updateReferences(e, !0));
          var t = this._scene.getWorkspace();
          this.getEntries().forEach(
            function (e) {
              e.hasReferences() ||
                (delete this._map[e.uuid],
                t && t.decreaseMemoryForImage(e.cachedCanvas));
            }.bind(this),
          );
        }),
        (e.exports = p));
    }