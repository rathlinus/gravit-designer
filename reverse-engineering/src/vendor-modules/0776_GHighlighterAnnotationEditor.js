/**
 * chunk.vendor.js Module #776
 * Type: class
 * Name: GHighlighterAnnotationEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(69),
        o = i(127),
        a = i(36),
        s = i(318),
        l = i(172),
        h = i(153);

      function A(e, t) {
        (o.call(this, e), (this._uid = t));
      }
      (n.inheritAndMix(A, o, [l]),
        a.exports(A, s),
        (A.prototype._showEditor = function (e) {
          return (
            (!e ||
              e.configuration.isElementAnnotationsVisible(this._element)) &&
            o.prototype._showEditor.call(this, e)
          );
        }),
        (A.prototype._showAnnotations = function () {
          return !1;
        }),
        (A.prototype.canHandleDblClick = function () {
          return !0;
        }),
        (A.prototype.handleDblClick = function () {
          return !0;
        }),
        (A.prototype.isRemovalBlocked = function () {
          return (
            0 != (this._element.getProperty("plkt") & r.ProgramLck.NoDelete) ||
            o.prototype.isRemovalBlocked.call(this)
          );
        }),
        (A.prototype.initialSetup = function (e) {
          (o.prototype.initialSetup.call(this, e), this._annotationSetup());
        }),
        (A.prototype._getGuideExclusions = function () {
          return [h];
        }),
        (A.prototype.toString = function () {
          return "[Object GHighlighterAnnotationEditor]";
        }),
        (e.exports = A));
    }