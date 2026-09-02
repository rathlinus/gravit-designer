/**
 * chunk.vendor.js Module #783
 * Type: class
 * Name: GTextAnnotationEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(69),
        o = (i(73), i(70), i(66), i(387)),
        a = (i(22), i(36)),
        s = i(370),
        l = i(172),
        h = i(153);

      function A(e, t) {
        ((this._uid = t), o.call(this, e));
      }
      (n.inheritAndMix(A, o, [l]),
        a.exports(A, s),
        (A.prototype._uid = null),
        (A.prototype._showEditor = function (e) {
          return (
            (!e ||
              e.configuration.isElementAnnotationsVisible(this._element)) &&
            o.prototype._showEditor.call(this, e)
          );
        }),
        (A.prototype.initialSetup = function (e) {
          (o.prototype.initialSetup.call(this, e), this._annotationSetup());
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
        (A.prototype._getGuideExclusions = function () {
          return [h];
        }),
        (A.prototype.toString = function () {
          return "[Object GTextAnnotationEditor]";
        }),
        (e.exports = A));
    }