/**
 * Webpack Module #465
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(466) /* module_466 */,
      i = require(94) /* Exports_Buf */,
      a = require(312) /* module_312 */,
      r = require(314) /* module_314 */,
      s = require(225) /* module_225 */,
      l = require(313) /* module_313 */,
      c = require(469) /* module_469 */,
      d = Object.prototype.toString;
    function u(e) {
      if (!(this instanceof u)) return new u(e);
      this.options = i.assign(
        { chunkSize: 16384, windowBits: 0, to: "" },
        e || {}
      );
      var t = this.options;
      t.raw &&
        t.windowBits >= 0 &&
        t.windowBits < 16 &&
        ((t.windowBits = -t.windowBits),
        0 === t.windowBits && (t.windowBits = -15)),
        !(t.windowBits >= 0 && t.windowBits < 16) ||
          (e && e.windowBits) ||
          (t.windowBits += 32),
        t.windowBits > 15 &&
          t.windowBits < 48 &&
          0 == (15 & t.windowBits) &&
          (t.windowBits |= 15),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = false),
        (this.chunks = []),
        (this.strm = new l()),
        (this.strm.avail_out = 0);
      var n = o.inflateInit2(this.strm, t.windowBits);
      if (n !== r.Z_OK) throw new Error(s[n]);
      if (
        ((this.header = new c()),
        o.inflateGetHeader(this.strm, this.header),
        t.dictionary &&
          ("string" == typeof t.dictionary
            ? (t.dictionary = a.string2buf(t.dictionary))
            : "[object ArrayBuffer]" === d.call(t.dictionary) &&
              (t.dictionary = new Uint8Array(t.dictionary)),
          t.raw &&
            (n = o.inflateSetDictionary(this.strm, t.dictionary)) !== r.Z_OK))
      )
        throw new Error(s[n]);
    }
    function p(e, t) {
      var n = new u(t);
      if ((n.push(e, true), n.err)) throw n.msg || s[n.err];
      return n.result;
    }
    (u.prototype.push = function (e, t) {
      var n,
        s,
        l,
        c,
        u,
        p = this.strm,
        g = this.options.chunkSize,
        h = this.options.dictionary,
        f = false;
      if (this.ended) return false;
      (s = t === ~~t ? t : true === t ? r.Z_FINISH : r.Z_NO_FLUSH),
        "string" == typeof e
          ? (p.input = a.binstring2buf(e))
          : "[object ArrayBuffer]" === d.call(e)
          ? (p.input = new Uint8Array(e))
          : (p.input = e),
        (p.next_in = 0),
        (p.avail_in = p.input.length);
      do {
        if (
          (0 === p.avail_out &&
            ((p.output = new i.Buf8(g)), (p.next_out = 0), (p.avail_out = g)),
          (n = o.inflate(p, r.Z_NO_FLUSH)) === r.Z_NEED_DICT &&
            h &&
            (n = o.inflateSetDictionary(this.strm, h)),
          n === r.Z_BUF_ERROR && true === f && ((n = r.Z_OK), (f = false)),
          n !== r.Z_STREAM_END && n !== r.Z_OK)
        )
          return this.onEnd(n), (this.ended = true), false;
        p.next_out &&
          ((0 !== p.avail_out &&
            n !== r.Z_STREAM_END &&
            (0 !== p.avail_in || (s !== r.Z_FINISH && s !== r.Z_SYNC_FLUSH))) ||
            ("string" === this.options.to
              ? ((l = a.utf8border(p.output, p.next_out)),
                (c = p.next_out - l),
                (u = a.buf2string(p.output, l)),
                (p.next_out = c),
                (p.avail_out = g - c),
                c && i.arraySet(p.output, p.output, l, c, 0),
                this.onData(u))
              : this.onData(i.shrinkBuf(p.output, p.next_out)))),
          0 === p.avail_in && 0 === p.avail_out && (f = true);
      } while ((p.avail_in > 0 || 0 === p.avail_out) && n !== r.Z_STREAM_END);
      return (
        n === r.Z_STREAM_END && (s = r.Z_FINISH),
        s === r.Z_FINISH
          ? ((n = o.inflateEnd(this.strm)),
            this.onEnd(n),
            (this.ended = true),
            n === r.Z_OK)
          : s !== r.Z_SYNC_FLUSH || (this.onEnd(r.Z_OK), (p.avail_out = 0), true)
      );
    }),
      (u.prototype.onData = function (e) {
        this.chunks.push(e);
      }),
      (u.prototype.onEnd = function (e) {
        e === r.Z_OK &&
          ("string" === this.options.to
            ? (this.result = this.chunks.join(""))
            : (this.result = i.flattenChunks(this.chunks))),
          (this.chunks = []),
          (this.err = e),
          (this.msg = this.strm.msg);
      }),
      (module.Inflate = u),
      (module.inflate = p),
      (module.inflateRaw = function (e, t) {
        return ((t = t || {}).raw = true), p(e, t);
      }),
      (module.ungzip = p);
  }