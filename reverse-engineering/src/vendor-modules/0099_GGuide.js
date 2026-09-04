/**
 * chunk.vendor.js Module #99
 * Type: class
 * Name: GGuide
 */

function (e, t, i) {
      var n = i(210),
        r = i(0),
        o = i(64),
        a = i(6);

      function s(e) {
        ((this._guides = e),
          (this._scene = e._scene),
          (this._allowedZones = [
            a.Side.TOP_LEFT,
            a.Side.CENTER,
            a.Side.BOTTOM_RIGHT,
          ]));
      }
      (r.inherit(s, r),
        (s.Visual = function () {}),
        (s.Visual.prototype.paint = function (e, t) {}),
        (s.Visual.prototype.toString = function () {
          return "[Mixin GGuide.Visual]";
        }),
        (s.DetailMap = function () {}),
        (s.DetailMap.Mode = {
          DetailOnFilterOn: 1,
          DetailOffFilterOn: 2,
          FilterOff: 3,
        }),
        (s.DetailMap.prototype.toString = function () {
          return "[Mixin GGuide.DetailMap]";
        }),
        (s.Map = function () {}),
        (s.Map.prototype.map = function (e, t, i, n, r, o) {}),
        (s.Map.prototype.isMappingAllowed = function (e) {
          var t = !0;
          return (
            e === s.DetailMap.Mode.DetailOnFilterOn
              ? (t = this.hasMixin(s.DetailMap))
              : e === s.DetailMap.Mode.DetailOffFilterOn && (t = !1),
            t &&
              (!n.options.disabled && o.modifiers.metaKey && (t = !1),
              n.options.disabled && !o.modifiers.metaKey && (t = !1)),
            t
          );
        }),
        (s.Map.prototype.mapTopLeftOnly = function () {
          return (
            1 === this._allowedZones.length &&
            0 === this._allowedZones.indexOf(a.Side.TOP_LEFT)
          );
        }),
        (s.Map.prototype.toString = function () {
          return "[Mixin GGuide.Map]";
        }),
        (s.prototype._guides = null),
        (s.prototype._scene = null),
        (s.prototype._exclusions = null),
        (s.prototype._allowedZones = null),
        (s.prototype.getId = function () {
          throw new Error("Not Implemented.");
        }),
        (s.prototype.isVisual = function () {
          return this.hasMixin(s.Visual);
        }),
        (s.prototype.isRelativeToPage = function () {
          return !1;
        }),
        (s.prototype.useExclusions = function (e) {
          this._exclusions = e;
        }),
        (s.prototype.cleanExclusions = function () {
          this._exclusions = null;
        }),
        (s.prototype.isScopeSupported = function () {
          return !1;
        }),
        (s.prototype.setScope = function (e) {}),
        (s.prototype.getAllowedSnapZones = function () {
          return this._allowedZones;
        }),
        (s.prototype.allowSnapZone = function (e) {
          -1 === this._allowedZones.indexOf(e) && this._allowedZones.push(e);
        }),
        (s.prototype.disallowSnapZone = function (e) {
          var t = this._allowedZones.indexOf(e);
          t >= 0 && this._allowedZones.splice(t, 1);
        }),
        (s.prototype.snapZoneIsAllowed = function (e) {
          return this._allowedZones.indexOf(e) > -1;
        }),
        (s.prototype.isFullPixelsGuide = function () {
          return !1;
        }),
        (s.prototype.canMapWithFullPixelsGuide = function () {
          return !0;
        }),
        (s.prototype.toString = function () {
          return "[Object GGuide]";
        }),
        (e.exports = s));
    }