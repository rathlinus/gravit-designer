/**
 * chunk.vendor.js Module #1035
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(76),
        o = i(84);
      i(142);

      function a() {
        (r.call(this), this.initializeAnnotation());
      }
      (n.inheritAndMix("ann", a, r, [
        n.Container,
        n.Properties,
        n.Store,
        n.Reference,
        o,
      ]),
        (a.prototype.validateInsertion = function (e, t) {
          return "annlst" === n.getName(e);
        }),
        (a.prototype.isVisible = function () {
          return 0 == (this._flags & a.Flag.Hidden);
        }),
        (a.prototype._handleChange = function (e, t) {
          if (e === n._Change.Store) {
            var i = o.MetaProperties;
            if (this.recordedTransaction || t.options.recordedTransaction) {
              for (
                var s = Object.keys(o.MetaProperties),
                  l = t.options.recordedProperties || {},
                  h = {},
                  A = 0,
                  c = s.length;
                A < c;
                A++
              ) {
                var p = s[A];
                h[p] = l.hasOwnProperty(p) ? l[p] : o.MetaProperties[p];
              }
              i = h;
            }
            this.storeProperties(t.blob, i, this.storeAction.bind(this, t));
          } else if (e === n._Change.Restore)
            this.restoreProperties(
              t.blob,
              a.MetaProperties,
              this.restoreAction.bind(this, t),
            );
          else if (e == n._Change.AfterPropertiesChange) {
            t.properties.indexOf("vis") >= 0 && this._updateVisibility();
          } else
            e === n._Change.BeforePropertiesChange &&
              this.handleBeforePropertiesChange(t);
          r.prototype._handleChange.call(this, e, t);
        }),
        (a.prototype._updateVisibility = function () {
          this.getProperty("vis")
            ? (this.removeFlag(o.Flag.Hidden), this._requestInvalidation())
            : (this._requestInvalidation(), this.setFlag(o.Flag.Hidden));
        }),
        (a.prototype.toString = function () {
          return "[GEmptyAnnotation]";
        }),
        (e.exports = a));
    }