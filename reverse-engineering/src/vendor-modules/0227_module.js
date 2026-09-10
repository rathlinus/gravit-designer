/**
 * chunk.vendor.js Module #227
 * Type: unknown
 */

function (e, t, i) {
      var n = i(11),
        r = i(0),
        o = i(75);

      function a() {
        ((this.EntryClass = a.Entry), (this._map = {}));
      }
      (r.inherit(a, o),
        (a.PROTOCOL = "dictionary"),
        (a.isDictionary = function (e) {
          var t = a.PROTOCOL + "://";
          return "string" == typeof e && e.substr(0, t.length) === t;
        }),
        (a.CLOUD_PROTOCOL = "cloud"),
        (a.prototype._map = null),
        (a.prototype.EntryClass = null),
        (a.prototype.merge = function (e) {
          var t = new a();
          return (
            (t.EntryClass = this.EntryClass),
            e.getEntries().forEach(
              function (e) {
                var i = this.getEntry(e.uuid);
                if (i) {
                  var n = new this.EntryClass();
                  (n.deserialize(i.serialize()),
                    t.addEntry(n),
                    (i.value = e.value));
                }
              }.bind(this),
            ),
            t
          );
        }),
        (a.prototype.getEntries = function () {
          return Object.keys(this._map)
            .map(
              function (e) {
                return this._map[e];
              }.bind(this),
            )
            .slice();
        }),
        (a.prototype.addEntry = function (e) {
          return e.uuid in this._map
            ? (console.warn("Duplicated entry"), !1)
            : ((this._map[e.uuid] = e), !0);
        }),
        (a.prototype.removeEntry = function (e, t) {
          var i;
          (e instanceof a.Entry ? (i = e) : e && (i = this.getEntry(e)),
            i &&
              (i.references > 0 && i.references--,
              !i.hasReferences() && t && delete this._map[i.uuid]));
        }),
        (a.prototype.getEntry = function (e) {
          return (
            a.isDictionary(e) && (e = e.substring((a.PROTOCOL + "://").length)),
            this._map[e]
          );
        }),
        (a.prototype.getValue = function (e) {
          var t = this.getEntry(e);
          return t ? t.value : null;
        }),
        (a.prototype.putValueIfAbsent = function (e) {
          if (!e) return null;
          var t = null;
          if (
            (this.getEntries().some(function (i) {
              return i.value == e && ((t = i), !0);
            }),
            t)
          )
            t.references++;
          else if (((t = new this.EntryClass(e)), !this.addEntry(t)))
            return null;
          return t;
        }),
        (a.prototype.serialize = function () {
          return (
            this.sanitize(),
            this.flush(),
            {
              entries: this.getEntries().map(function (e) {
                return e.serialize();
              }),
            }
          );
        }),
        (a.prototype.deserialize = function (e) {
          if (((this._map = {}), e))
            for (var t = 0; t < e.entries.length; t++) {
              var i = new this.EntryClass();
              (i.deserialize(e.entries[t]), this.addEntry(i));
            }
        }),
        (a.prototype.release = function () {}),
        (a.prototype.flush = function () {}),
        (a.prototype.sanitize = function () {}),
        (a.Entry = function (e, t, i) {
          ((this.value = e),
            (this.uuid = t || n.uuid()),
            (this.references = i || 1));
        }),
        r.inherit(a.Entry, r),
        (a.Entry.prototype.uuid = null),
        (a.Entry.prototype.value = null),
        (a.Entry.prototype.references = 0),
        (a.Entry.prototype.cachedCanvas = null),
        (a.Entry.prototype.getUrl = function () {
          return a.PROTOCOL + "://" + this.uuid;
        }),
        (a.Entry.prototype.hasReferences = function () {
          return this.references > 0;
        }),
        (a.Entry.prototype.serialize = function () {
          return {
            uuid: this.uuid,
            value: this.value,
            references: this.references,
          };
        }),
        (a.Entry.prototype.deserialize = function (e) {
          ((this.uuid = e.uuid),
            (this.value = e.value),
            (this.references = e.references));
        }),
        (a.prototype.toString = function () {
          return "[GDictionary]";
        }),
        (e.exports = a));
    }