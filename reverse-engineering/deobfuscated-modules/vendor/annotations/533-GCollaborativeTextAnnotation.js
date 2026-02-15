/**
 * Module 533 - GCollaborativeTextAnnotation
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
  var n = require(0) /* GObject */, r = require(2) /* GNode */, o = require(73) /* GRectangle */, a = require(84) /* GAnnotation */, s = require(69) /* GBlock */;
  require(142) /* GDate */;
  function l() {
    o.call(this), this.initializeAnnotation(), Object.defineProperties(this, {
      $img: {
        set: function () {
        },
        get: function () {
          return "assets/img/annotation/collaborative-text-annotation.svg";
        }
      },
      $plkt: {
        set: function () {
        },
        get: function () {
          return s.ProgramLck.NoSizeChanges | s.ProgramLck.NoEdit | s.ProgramLck.NoMove | s.ProgramLck.NoOrigChildrenEdit | s.ProgramLck.NoNewChildren | s.ProgramLck.NoDirectVisibilityChange;
        }
      }
    });
  }
  r.inheritAndMix("ancotext", l, o, [
    a,
    a.Linkable
  ]), l.prototype.getAnnotableReferences = function () {
    var e = [];
    return this._scene && this._scene.visitReferences(this, function (t) {
      "collabtext" === r.getName(t) && e.push(t);
    }), e;
  }, l.prototype.validateInsertion = function (e, t) {
    return "annlst" === r.getName(e);
  }, l.prototype.isPaintable = function (e) {
    return false;
  }, l.prototype._handleChange = function (e, t) {
    if (e === r._Change.Store) {
      var require = a.MetaProperties;
      if (this.recordedTransaction || t.options.recordedTransaction) {
        for (var s = Object.keys(a.MetaProperties), l = t.options.recordedProperties || {}, h = {}, A = 0, c = s.length; A < c; A++) {
          var p = s[A];
          h[p] = l.hasOwnProperty(p) ? l[p] : a.MetaProperties[p];
        }
        require = h;
      }
      this.storeProperties(t.blob, require, this.storeAction.bind(this, t));
      var u = t.blob;
      t.options.separateSaving && (u.own = { "@": r._nodeClassToNameMap[n.getTypeId(this)] }, t.blob = u.own), this.storeProperties(t.blob, a.Linkable.MetaProperties);
    } else
      e === r._Change.Restore ? (this.restoreProperties(t.blob, a.Linkable.MetaProperties), this.restoreProperties(t.blob, a.MetaProperties, this.restoreAction.bind(this, t))) : e === r._Change.BeforePropertiesChange && this.handleBeforePropertiesChange(t);
    this._handleAnnotationLinkableChange(e, t), o.prototype._handleChange.call(this, e, t);
  }, l.prototype._handleReferencesOnSceneAttach = function () {
    o.prototype._handleReferencesOnSceneAttach.call(this, this._getRestoredAnnotableReferences()), this._resetRestoredAnnotableReferences();
  }, l.prototype.toString = function () {
    return "[GCollaborativeTextAnnotation]";
  }, exports.exports = l;
}
