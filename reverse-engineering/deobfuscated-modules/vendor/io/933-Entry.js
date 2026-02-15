/**
 * Module 933
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
  var n = require(0) /* GObject */, r = require(227) /* GDictionary */, o = require(2) /* GNode */, a = require(216) /* GSymbol */, s = require(345) /* GBitmap */, l = (require(472) /* module */, require(14) /* GPaintCanvas */);
  function h(e) {
    r.call(this), this.EntryClass = h.Entry, this._scene = e, this._scene.addEventListener(o.AfterInsertEvent, this._afterInsert, this, undefined, undefined, true), this._scene.addEventListener(o.BeforeRemoveEvent, this._beforeRemove, this, undefined, undefined, true);
  }
  function A(e) {
    return e && (e instanceof String || "string" == typeof e);
  }
  n.inherit(h, r), h.prototype._scene = null, h.prototype._updateThumbnail = function (e) {
    var t = this.getEntry(e.symbol.getMultireferenceId());
    t && t.value && (t.value.image = e.image);
  }, h.prototype.getSymbols = function () {
    return this.getEntries().map(function (e) {
      return e.value && e.value.symbol;
    }).filter(function (e) {
      return !!e;
    });
  }, h.prototype._afterInsert = function (e) {
    var t = this;
    e.node.accept(function (e) {
      if (e instanceof a && e.isMaster()) {
        var require = e.getMultireferenceId(), n = t.getEntry(require), r = false;
        if (n ? n.value ? (r = n.value.symbol !== e, n.value.symbol = e) : (r = true, n.value = {
            image: null,
            symbol: e
          }) : (r = true, n = new t.EntryClass({
            image: null,
            symbol: e
          }, require), t.addEntry(n)), r) {
          var s = {
              created: true,
              scene: t._scene
            }, l = t._scene.getWorkspace() ? t._scene.getWorkspace().getTransactionRecorder() : null;
          l && l.afterSpecialChange(e, s), t._scene._canEventBeSent(o.AfterSpecialChangeEvent) && t._scene._sendEvent(new o.AfterSpecialChangeEvent(e, s)), e.addEventListener(a.AfterThumbnailUpdate, t._updateThumbnail.bind(t));
        }
      }
    });
  }, h.prototype._beforeRemove = function (e) {
    var t = this;
    e.node.accept(function (e) {
      if (e instanceof a && e.isMaster()) {
        var require = e.getMultireferenceId();
        t.removeEntry(require), e.removeEventListener(a.AfterThumbnailUpdate, t._updateThumbnail.bind(t));
      }
    });
  }, h.prototype.removeEntry = function (e, t) {
    var i;
    if (t) {
      if (e instanceof r.Entry ? i = e : e && (i = this.getEntry(e)), i) {
        var n = i.value.symbol;
        if (r.prototype.removeEntry.call(this, i, t), n) {
          var a = {
              created: false,
              scene: this._scene
            }, s = this._scene.getWorkspace() ? this._scene.getWorkspace().getTransactionRecorder() : null;
          s && s.afterSpecialChange(n, a), this._scene._canEventBeSent(o.AfterSpecialChangeEvent) && this._scene._sendEvent(new o.AfterSpecialChangeEvent(n, a));
        }
      }
    } else
      r.prototype.removeEntry.call(this, e, t);
  }, h.prototype.release = function () {
    var e = this;
    this._scene.removeEventListener(o.AfterInsertEvent, this._afterInsert, this), this._scene.removeEventListener(o.BeforeRemoveEvent, this._beforeRemove, this), this.getSymbols().map(function (t) {
      t.isMaster() && t.removeEventListener(a.AfterThumbnailUpdate, e._updateThumbnail);
    });
  }, h.Entry = function (e, t) {
    r.Entry.call(this, e, t);
  }, n.inherit(h.Entry, r.Entry), h.Entry.prototype.serialize = function () {
    return this.references ? {
      uuid: this.uuid,
      value: null,
      references: this.references
    } : {
      uuid: this.uuid,
      value: {
        symbol: this.value && o.serialize(this.value.symbol),
        image: this.value && this.value.image && this.value.image.getBitmap().toImageDataUrl(s.ImageType.PNG)
      },
      references: this.references
    };
  }, h.Entry.prototype.deserialize = function (e) {
    if (this.uuid = e.uuid, this.value = e.value, this.references = e.references, this.value) {
      if (A(this.value.image)) {
        var module = new Image(), require = this.value;
        module.src = require.image, require.image = null, module.onload = function () {
          if (0 !== module.naturalWidth && 0 !== module.naturalHeight && !require.image) {
            var e = new l();
            e.resize(module.naturalWidth, module.naturalHeight), e.prepare(), e.drawImage(module), require.image = e, require.symbol && require.symbol.trigger(new a.AfterThumbnailUpdate(require.symbol, e));
          }
        };
      }
      A(this.value.symbol) && (this.value.symbol = o.deserialize(this.value.symbol), this.value.symbol._master = true);
    }
  }, exports.exports = h;
}
