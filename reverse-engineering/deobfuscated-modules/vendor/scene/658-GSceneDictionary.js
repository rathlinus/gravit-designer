/**
 * Module 658 - GSceneDictionary
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
  var n = require(0) /* GObject */, r = require(227) /* GDictionary */, o = require(2) /* GNode */, a = require(72) /* GEvent */, s = require(95) /* GImage */, l = require(517) /* GSwatch */, h = require(139) /* GTexturePattern */, A = require(28) /* GStylable */, c = require(280) /* GWorkspace */;
  function p(e) {
    r.call(this), this._scene = e, this._scene.addEventListener(o.AfterInsertEvent, this._afterInsertEvent, this, undefined, undefined, true), this._scene.addEventListener(o.AfterRemoveEvent, this._afterRemoveEvent, this, undefined, undefined, true), e.getWorkspace() && (this._workspace = e.getWorkspace(), this._workspace.addEventListener(c.ResolveUrlEvent, this._resolveUrlEvent, this));
  }
  n.inherit(p, r), p.ResolvedMissingEntryEvent = function (e, t) {
    this.entry = t, this.scene = e;
  }, n.inherit(p.ResolvedMissingEntryEvent, a), p.ResolvedMissingEntryEvent.prototype.entry = null, p.ResolvedMissingEntryEvent.prototype.scene = null, p.prototype._scene = null, p.prototype._workspace = null, p.prototype._memory = 0, p.prototype._resolveUrlEvent = function (e) {
    if (r.isDictionary(e.url) && e.scene === this._scene) {
      var module = this.getValue(e.url);
      module && (/^(file|http|data|\/\/)/i.test(module) ? e.resolved(module) : this._workspace.trigger(new c.ResolveUrlEvent(module, e.scene, e.resolved)));
    }
  }, p.prototype._afterInsertEvent = function (e) {
    var t = {}, i = this._getUrl(e.node);
    if (i)
      if (r.isDictionary(i)) {
        if (!(i in t)) {
          var n = this.getEntry(i);
          n ? t[i] = n : this._redirectUrl(e.node);
        }
      } else
        this._redirectUrl(e.node);
    if (e.node.hasMixin(A)) {
      var o = e.node.getPaintLayers();
      o && o.getLayers().forEach(function (e) {
        var i = this._getUrl(e);
        if (r.isDictionary(i)) {
          if (!(i in t)) {
            var n = this.getEntry(i);
            n && (t[i] = n);
          }
        } else
          this._redirectUrl(e);
      }.bind(this));
    }
    this._updateReferences(t);
  }, p.prototype._afterRemoveEvent = function (e) {
    var t = this._getUrl(e.node);
    if (t && this.removeEntry(t), e.node.hasMixin(A)) {
      var require = e.node.getPaintLayers();
      require && require.getLayers().forEach(function (e) {
        var t = this._getUrl(e);
        t && this.removeEntry(t);
      }.bind(this));
    }
  }, p.prototype._redirectUrl = function (e) {
    var t = this._getUrl(e);
    if (!r.isDictionary(t)) {
      var require = this.putValueIfAbsent(t);
      require && (e instanceof A.PaintLayer ? e.$_pt._url = require.getUrl() : e instanceof s && (e.$url = require.getUrl()));
    }
  }, p.prototype._updateReferences = function (e, t) {
    var i = Object.keys(e).map(function (t) {
      var i = e[t];
      return i.references = 0, i;
    });
    i.length && (this._scene.accept(function (t) {
      if (t instanceof s && t.$url in e && e[t.$url].references++, t.hasMixin(A)) {
        var i = t.getPaintLayers();
        i && i.getLayers().forEach(function (t) {
          var i = this._getUrl(t);
          i in e && e[i].references++;
        }.bind(this));
      }
      if (t instanceof l) {
        var n = this._getUrl(t);
        n in e && e[n].references++;
      }
    }.bind(this)), i.forEach(function (e) {
      e.hasReferences() || this.removeEntry(e, t);
    }.bind(this)));
  }, p.prototype._getUrl = function (e) {
    if (e instanceof A.PaintLayer || e instanceof l) {
      if (e.$_pt && e.$_pt instanceof h && e.$_pt._url)
        return e.$_pt._url;
    } else if (e instanceof s)
      return e.$url;
    return null;
  }, p.prototype.setCachedCanvas = function (e, t) {
    var i = this._scene.getWorkspace();
    if (i) {
      if (i.decreaseMemoryForImage(e.cachedCanvas), !i.increaseMemoryForImage(t))
        return console.warn("MAX IMAGE MEMORY EXCEEDED"), false;
      t && (e.cachedCanvas = t);
    }
    return true;
  }, p.prototype.release = function () {
    this._scene.removeEventListener(o.AfterInsertEvent, this._afterInsertEvent, this), this._scene.removeEventListener(o.AfterRemoveEvent, this._afterRemoveEvent, this);
    var e = this._scene.getWorkspace();
    e && e.removeEventListener(c.ResolveUrlEvent, this._resolveUrlEvent, this), this.getEntries().forEach(function (t) {
      e && e.decreaseMemoryForImage(t.cachedCanvas), t.cachedCanvas = null, delete this._map[t.uuid];
    }.bind(this)), this._memory = 0;
  }, p.prototype.sanitize = function () {
    var e = function (e, t) {
      if (r.isDictionary(e) && !this.getEntry(e)) {
        var require = e.substring((r.PROTOCOL + "://").length);
        if (!t)
          throw new Error("Missing entry value for " + e);
        var n = new this.EntryClass(t, require);
        if (!this.addEntry(n))
          throw new Error("Could not add an entry for " + e);
        this.hasEventListeners(p.ResolvedMissingEntryEvent) && this.trigger(new p.ResolvedMissingEntryEvent(this._scene, n));
      }
    }.bind(this);
    this._scene.accept(function (t) {
      if (t instanceof s) {
        var require = t.getProperty("url"), n = t.getProperty("storedUrl");
        e(require, n);
      }
      if (t.hasMixin(A)) {
        var r = t.getPaintLayers();
        r && r.getLayers().forEach(function (t) {
          if (t instanceof A.PaintLayer) {
            var require = t.getProperty("_pt");
            if (require && require instanceof h) {
              var n = require.getUrl();
              if (n && "string" == typeof n) {
                var r = require.getRawUrl();
                e(n, r);
              }
            }
          }
        }.bind(this));
      }
    }.bind(this));
  }, p.prototype.flush = function () {
    var e = {};
    this.getEntries().forEach(function (t) {
      e[t.getUrl()] = t;
    }), this._updateReferences(e, true);
    var t = this._scene.getWorkspace();
    this.getEntries().forEach(function (e) {
      e.hasReferences() || (delete this._map[e.uuid], t && t.decreaseMemoryForImage(e.cachedCanvas));
    }.bind(this));
  }, exports.exports = p;
}
