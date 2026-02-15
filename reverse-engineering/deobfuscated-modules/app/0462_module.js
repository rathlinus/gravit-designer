/**
 * Webpack Module #462
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(463) /* module_463 */,
      Buf = require(94) /* Exports_Buf */,
      a = require(312) /* module_312 */,
      r = require(225) /* module_225 */,
      s = require(313) /* module_313 */,
      l = Object.prototype.toString;
    function c(e) {
      if (!(this instanceof c)) return new c(e);
      this.options = Buf.assign(
        {
          level: -1,
          method: 8,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: 0,
          to: "",
        },
        e || {}
      );
      var t = this.options;
      t.raw && t.windowBits > 0
        ? (t.windowBits = -t.windowBits)
        : t.gzip &&
          t.windowBits > 0 &&
          t.windowBits < 16 &&
          (t.windowBits += 16),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = false),
        (this.chunks = []),
        (this.strm = new s()),
        (this.strm.avail_out = 0);
      var n = o.deflateInit2(
        this.strm,
        t.level,
        t.method,
        t.windowBits,
        t.memLevel,
        t.strategy
      );
      if (0 !== n) throw new Error(r[n]);
      if ((t.header && o.deflateSetHeader(this.strm, t.header), t.dictionary)) {
        var d;
        if (
          ((d =
            "string" == typeof t.dictionary
              ? a.string2buf(t.dictionary)
              : "[object ArrayBuffer]" === l.call(t.dictionary)
              ? new Uint8Array(t.dictionary)
              : t.dictionary),
          0 !== (n = o.deflateSetDictionary(this.strm, d)))
        )
          throw new Error(r[n]);
        this._dict_set = true;
      }
    }
    function d(e, t) {
      var n = new c(t);
      if ((n.push(e, true), n.err)) throw n.msg || r[n.err];
      return n.result;
    }
    (c.prototype.push = function (e, t) {
      var n,
        r,
        s = this.strm,
        c = this.options.chunkSize;
      if (this.ended) return false;
      (r = t === ~~t ? t : true === t ? 4 : 0),
        "string" == typeof e
          ? (s.input = a.string2buf(e))
          : "[object ArrayBuffer]" === l.call(e)
          ? (s.input = new Uint8Array(e))
          : (s.input = e),
        (s.next_in = 0),
        (s.avail_in = s.input.length);
      do {
        if (
          (0 === s.avail_out &&
            ((s.output = new Buf.Buf8(c)), (s.next_out = 0), (s.avail_out = c)),
          1 !== (n = o.deflate(s, r)) && 0 !== n)
        )
          return this.onEnd(n), (this.ended = true), false;
        (0 !== s.avail_out && (0 !== s.avail_in || (4 !== r && 2 !== r))) ||
          ("string" === this.options.to
            ? this.onData(a.buf2binstring(Buf.shrinkBuf(s.output, s.next_out)))
            : this.onData(Buf.shrinkBuf(s.output, s.next_out)));
      } while ((s.avail_in > 0 || 0 === s.avail_out) && 1 !== n);
      return 4 === r
        ? ((n = o.deflateEnd(this.strm)),
          this.onEnd(n),
          (this.ended = true),
          0 === n)
        : 2 !== r || (this.onEnd(0), (s.avail_out = 0), true);
    }),
      (c.prototype.onData = function (e) {
        this.chunks.push(e);
      }),
      (c.prototype.onEnd = function (e) {
        0 === e &&
          ("string" === this.options.to
            ? (this.result = this.chunks.join(""))
            : (this.result = Buf.flattenChunks(this.chunks))),
          (this.chunks = []),
          (this.err = e),
          (this.msg = this.strm.msg);
      }),
      (module.Deflate = c),
      (module.deflate = d),
      (module.deflateRaw = function (e, t) {
        return ((t = t || {}).raw = true), d(e, t);
      }),
      (module.gzip = function (e, t) {
        return ((t = t || {}).gzip = true), d(e, t);
      });
  }