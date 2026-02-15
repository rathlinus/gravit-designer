/**
 * Module 76
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
  var n = require(0) /* GObject */, r = require(2) /* GNode */, o = require(11) /* GUtil */, a = require(75) /* GEventTarget */, s = require(472) /* module */;
  function l() {
    this.$refs = [];
  }
  n.inheritAndMix(l, r, [
    r.Identity,
    r.Multireference,
    a
  ]), l._Change = {
    SceneAttached: 200,
    SceneDetached: 201
  }, l.prototype.____id = null, l.prototype.getSceneId = function () {
    return this.____id || (this.____id = o.uuid()), this.____id;
  }, l.prototype.getPage = function () {
    for (var exports = this; exports && "page" !== r.getName(exports);)
      exports = exports.getParent();
    return "page" === r.getName(exports) ? exports : null;
  }, l.prototype._scene = null, l.prototype._setScene = function (e) {
    e !== this._scene && (this._scene && this._notifyChange(l._Change.SceneDetached), e ? this._scene = e : (this._scene && this._scene._unsetSceneNode(this), this._scene = null), this._scene && this._notifyChange(l._Change.SceneAttached));
  }, l.prototype.getScene = function () {
    return this._scene;
  }, l.prototype._attachToParent = function (e) {
    for (; e && !(e instanceof l);)
      e = e.getParent();
    e && (e._workspace || e._scene) && this.accept(function (t) {
      t._setWorkspace(e._workspace), t instanceof l && t._setScene(e._scene);
    });
  }, l.prototype._handleReferencesOnSceneAttach = function (e, t) {
    if (this._workspace) {
      if ((e = e || this.$refs) && e.length)
        for (var require = 0; require < e.length; require++) {
          var n = e[require];
          if ("string" == typeof n)
            n = this._workspace.getReference(n);
          else if (!(n instanceof l))
            continue;
          if (n)
            if (n._scene)
              this._scene.link(n, this);
            else if (t && n.getOldReferenceId()) {
              this._scene.link(n.getOldReferenceId(), this);
              var o = this.$refs.slice();
              o.splice(this.$refs.indexOf(n.getReferenceId()), 1), this.setProperty("refs", o);
            } else
              this._scene._isRestoring || (n.getParent() || this.getParent().appendChild(n), this._scene.link(n, this));
        }
      if (this.hasMixin(r.Reference) && this._scene.hasLinks(this)) {
        var a = this;
        this._scene.visitLinks(this, function (e) {
          e.trigger(new s(a, e, true));
        });
      }
    }
  }, l.prototype._detachFromParent = function (e) {
    for (; e && !(e instanceof l);)
      e = e.getParent();
    e && (e._workspace || e._scene) && this.accept(function (e) {
      e.hasFlag(r.Flag.Selected) && e.removeFlag(r.Flag.Selected), e instanceof l && e._setScene(null), e._setWorkspace(null);
    }, false, false, true);
  }, l.prototype._referenceEvent = function (e) {
    if (e.target === this && this.hasMixin(r.Properties)) {
      var module = e.linked, require = e.reference;
      if (module) {
        var n = o.unique(this.$refs.concat([require.getReferenceId()]).filter(function (e) {
          return e;
        }));
        this.setProperty("refs", n);
      } else {
        (n = this.$refs.slice()).splice(this.$refs.indexOf(require.getReferenceId()), 1), n = n.filter(function (e) {
          return e;
        }), this.setProperty("refs", n);
      }
    }
  }, l.prototype._handleChange = function (e, t) {
    if (e === l._Change.SceneAttached && this._scene)
      this._scene.$rb || this.addEventListener(s, this._referenceEvent, this), this._handleReferencesOnSceneAttach();
    else if (e === l._Change.SceneDetached && this._scene && !this._scene.$rb) {
      if (this.$refs)
        for (var require = this.$refs.slice(), n = require.length - 1; n >= 0; n--)
          this._scene.unlink(require[n], this);
      this.removeEventListener(s, this._referenceEvent, this);
    }
    r.prototype._handleChange.call(this, e, t);
  }, exports.exports = l;
}
