/**
 * chunk.vendor.js Module #768
 * Type: class
 * Name: GRectangleAnnotationEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(69),
        o = (i(73), i(330)),
        a = i(36),
        s = i(316),
        l = i(172),
        h = i(153),
        A = i(66);

      function c(e, t) {
        (o.call(this, e),
          (this._uid = t),
          (this._flags =
            this._flags & ~(A.Flag.RotateCorners | A.Flag.RotateHandle)));
      }
      (n.inheritAndMix(c, o, [l]),
        a.exports(c, s),
        (c.prototype._showEditor = function (e) {
          return (
            (!e ||
              e.configuration.isElementAnnotationsVisible(this._element)) &&
            o.prototype._showEditor.call(this, e)
          );
        }),
        (c.prototype.initialSetup = function (e) {
          (o.prototype.initialSetup.call(this, e), this._annotationSetup());
        }),
        (c.prototype.canHandleDblClick = function () {
          return !0;
        }),
        (c.prototype.handleDblClick = function () {
          return !0;
        }),
        (c.prototype.isRemovalBlocked = function () {
          return (
            0 != (this._element.getProperty("plkt") & r.ProgramLck.NoDelete) ||
            o.prototype.isRemovalBlocked.call(this)
          );
        }),
        (c.prototype._getGuideExclusions = function () {
          return [h];
        }),
        (c.prototype.toString = function () {
          return "[Object GRectangleAnnotationEditor]";
        }),
        (e.exports = c));
    }