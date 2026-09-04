/**
 * chunk.vendor.js Module #76
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(2),
        o = i(11),
        a = i(75),
        s = i(472);

      function l() {
        this.$refs = [];
      }
      (n.inheritAndMix(l, r, [r.Identity, r.Multireference, a]),
        (l._Change = {
          SceneAttached: 200,
          SceneDetached: 201,
        }),
        (l.prototype.____id = null),
        (l.prototype.getSceneId = function () {
          return (this.____id || (this.____id = o.uuid()), this.____id);
        }),
        (l.prototype.getPage = function () {
          for (var e = this; e && "page" !== r.getName(e); ) e = e.getParent();
          return "page" === r.getName(e) ? e : null;
        }),
        (l.prototype._scene = null),
        (l.prototype._setScene = function (e) {
          e !== this._scene &&
            (this._scene && this._notifyChange(l._Change.SceneDetached),
            e
              ? (this._scene = e)
              : (this._scene && this._scene._unsetSceneNode(this),
                (this._scene = null)),
            this._scene && this._notifyChange(l._Change.SceneAttached));
        }),
        (l.prototype.getScene = function () {
          return this._scene;
        }),
        (l.prototype._attachToParent = function (e) {
          for (; e && !(e instanceof l); ) e = e.getParent();
          e &&
            (e._workspace || e._scene) &&
            this.accept(function (t) {
              (t._setWorkspace(e._workspace),
                t instanceof l && t._setScene(e._scene));
            });
        }),
        (l.prototype._handleReferencesOnSceneAttach = function (e, t) {
          if (this._workspace) {
            if ((e = e || this.$refs) && e.length)
              for (var i = 0; i < e.length; i++) {
                var n = e[i];
                if ("string" == typeof n) n = this._workspace.getReference(n);
                else if (!(n instanceof l)) continue;
                if (n)
                  if (n._scene) this._scene.link(n, this);
                  else if (t && n.getOldReferenceId()) {
                    this._scene.link(n.getOldReferenceId(), this);
                    var o = this.$refs.slice();
                    (o.splice(this.$refs.indexOf(n.getReferenceId()), 1),
                      this.setProperty("refs", o));
                  } else
                    this._scene._isRestoring ||
                      (n.getParent() || this.getParent().appendChild(n),
                      this._scene.link(n, this));
              }
            if (this.hasMixin(r.Reference) && this._scene.hasLinks(this)) {
              var a = this;
              this._scene.visitLinks(this, function (e) {
                e.trigger(new s(a, e, !0));
              });
            }
          }
        }),
        (l.prototype._detachFromParent = function (e) {
          for (; e && !(e instanceof l); ) e = e.getParent();
          e &&
            (e._workspace || e._scene) &&
            this.accept(
              function (e) {
                (e.hasFlag(r.Flag.Selected) && e.removeFlag(r.Flag.Selected),
                  e instanceof l && e._setScene(null),
                  e._setWorkspace(null));
              },
              !1,
              !1,
              !0,
            );
        }),
        (l.prototype._referenceEvent = function (e) {
          if (e.target === this && this.hasMixin(r.Properties)) {
            var t = e.linked,
              i = e.reference;
            if (t) {
              var n = o.unique(
                this.$refs.concat([i.getReferenceId()]).filter(function (e) {
                  return e;
                }),
              );
              this.setProperty("refs", n);
            } else {
              ((n = this.$refs.slice()).splice(
                this.$refs.indexOf(i.getReferenceId()),
                1,
              ),
                (n = n.filter(function (e) {
                  return e;
                })),
                this.setProperty("refs", n));
            }
          }
        }),
        (l.prototype._handleChange = function (e, t) {
          if (e === l._Change.SceneAttached && this._scene)
            (this._scene.$rb ||
              this.addEventListener(s, this._referenceEvent, this),
              this._handleReferencesOnSceneAttach());
          else if (
            e === l._Change.SceneDetached &&
            this._scene &&
            !this._scene.$rb
          ) {
            if (this.$refs)
              for (var i = this.$refs.slice(), n = i.length - 1; n >= 0; n--)
                this._scene.unlink(i[n], this);
            this.removeEventListener(s, this._referenceEvent, this);
          }
          r.prototype._handleChange.call(this, e, t);
        }),
        (e.exports = l));
    }