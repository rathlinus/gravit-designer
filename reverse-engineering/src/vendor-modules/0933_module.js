/**
 * chunk.vendor.js Module #933
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(227),
        o = i(2),
        a = i(216),
        s = i(345),
        l = (i(472), i(14));

      function h(e) {
        (r.call(this),
          (this.EntryClass = h.Entry),
          (this._scene = e),
          this._scene.addEventListener(
            o.AfterInsertEvent,
            this._afterInsert,
            this,
            void 0,
            void 0,
            !0,
          ),
          this._scene.addEventListener(
            o.BeforeRemoveEvent,
            this._beforeRemove,
            this,
            void 0,
            void 0,
            !0,
          ));
      }

      function A(e) {
        return e && (e instanceof String || "string" == typeof e);
      }
      (n.inherit(h, r),
        (h.prototype._scene = null),
        (h.prototype._updateThumbnail = function (e) {
          var t = this.getEntry(e.symbol.getMultireferenceId());
          t && t.value && (t.value.image = e.image);
        }),
        (h.prototype.getSymbols = function () {
          return this.getEntries()
            .map(function (e) {
              return e.value && e.value.symbol;
            })
            .filter(function (e) {
              return !!e;
            });
        }),
        (h.prototype._afterInsert = function (e) {
          var t = this;
          e.node.accept(function (e) {
            if (e instanceof a && e.isMaster()) {
              var i = e.getMultireferenceId(),
                n = t.getEntry(i),
                r = !1;
              if (
                (n
                  ? n.value
                    ? ((r = n.value.symbol !== e), (n.value.symbol = e))
                    : ((r = !0),
                      (n.value = {
                        image: null,
                        symbol: e,
                      }))
                  : ((r = !0),
                    (n = new t.EntryClass(
                      {
                        image: null,
                        symbol: e,
                      },
                      i,
                    )),
                    t.addEntry(n)),
                r)
              ) {
                var s = {
                    created: !0,
                    scene: t._scene,
                  },
                  l = t._scene.getWorkspace()
                    ? t._scene.getWorkspace().getTransactionRecorder()
                    : null;
                (l && l.afterSpecialChange(e, s),
                  t._scene._canEventBeSent(o.AfterSpecialChangeEvent) &&
                    t._scene._sendEvent(new o.AfterSpecialChangeEvent(e, s)),
                  e.addEventListener(
                    a.AfterThumbnailUpdate,
                    t._updateThumbnail.bind(t),
                  ));
              }
            }
          });
        }),
        (h.prototype._beforeRemove = function (e) {
          var t = this;
          e.node.accept(function (e) {
            if (e instanceof a && e.isMaster()) {
              var i = e.getMultireferenceId();
              (t.removeEntry(i),
                e.removeEventListener(
                  a.AfterThumbnailUpdate,
                  t._updateThumbnail.bind(t),
                ));
            }
          });
        }),
        (h.prototype.removeEntry = function (e, t) {
          var i;
          if (t) {
            if (
              (e instanceof r.Entry ? (i = e) : e && (i = this.getEntry(e)), i)
            ) {
              var n = i.value.symbol;
              if ((r.prototype.removeEntry.call(this, i, t), n)) {
                var a = {
                    created: !1,
                    scene: this._scene,
                  },
                  s = this._scene.getWorkspace()
                    ? this._scene.getWorkspace().getTransactionRecorder()
                    : null;
                (s && s.afterSpecialChange(n, a),
                  this._scene._canEventBeSent(o.AfterSpecialChangeEvent) &&
                    this._scene._sendEvent(
                      new o.AfterSpecialChangeEvent(n, a),
                    ));
              }
            }
          } else r.prototype.removeEntry.call(this, e, t);
        }),
        (h.prototype.release = function () {
          var e = this;
          (this._scene.removeEventListener(
            o.AfterInsertEvent,
            this._afterInsert,
            this,
          ),
            this._scene.removeEventListener(
              o.BeforeRemoveEvent,
              this._beforeRemove,
              this,
            ),
            this.getSymbols().map(function (t) {
              t.isMaster() &&
                t.removeEventListener(
                  a.AfterThumbnailUpdate,
                  e._updateThumbnail,
                );
            }));
        }),
        (h.Entry = function (e, t) {
          r.Entry.call(this, e, t);
        }),
        n.inherit(h.Entry, r.Entry),
        (h.Entry.prototype.serialize = function () {
          return this.references
            ? {
                uuid: this.uuid,
                value: null,
                references: this.references,
              }
            : {
                uuid: this.uuid,
                value: {
                  symbol: this.value && o.serialize(this.value.symbol),
                  image:
                    this.value &&
                    this.value.image &&
                    this.value.image
                      .getBitmap()
                      .toImageDataUrl(s.ImageType.PNG),
                },
                references: this.references,
              };
        }),
        (h.Entry.prototype.deserialize = function (e) {
          if (
            ((this.uuid = e.uuid),
            (this.value = e.value),
            (this.references = e.references),
            this.value)
          ) {
            if (A(this.value.image)) {
              var t = new Image(),
                i = this.value;
              ((t.src = i.image),
                (i.image = null),
                (t.onload = function () {
                  if (
                    0 !== t.naturalWidth &&
                    0 !== t.naturalHeight &&
                    !i.image
                  ) {
                    var e = new l();
                    (e.resize(t.naturalWidth, t.naturalHeight),
                      e.prepare(),
                      e.drawImage(t),
                      (i.image = e),
                      i.symbol &&
                        i.symbol.trigger(
                          new a.AfterThumbnailUpdate(i.symbol, e),
                        ));
                  }
                }));
            }
            A(this.value.symbol) &&
              ((this.value.symbol = o.deserialize(this.value.symbol)),
              (this.value.symbol._master = !0));
          }
        }),
        (e.exports = h));
    }