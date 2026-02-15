/**
 * Module 838
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
  var n = {
      name: "i32",
      length: 4
    }, r = [
      {
        name: "tag",
        type: n
      },
      {
        name: "value",
        type: n
      },
      {
        name: "start",
        type: n
      },
      {
        name: "end",
        type: n
      }
    ], o = require(998) /* module */();
  function a(e, t, i, n) {
    return (255 & e.charCodeAt()) << 24 | (255 & t.charCodeAt()) << 16 | (255 & i.charCodeAt()) << 8 | 255 & n.charCodeAt();
  }
  function s() {
    throw new Error("cannot initialize - this is a static entity");
  }
  s._Module = o, s.DIRECTIONS = {
    LTR: "ltr",
    RTL: "rtl",
    TTB: "ttb",
    BBT: "bbt"
  }, s.SCRIPTS = {
    COMMON: a("Z", "y", "y", "y"),
    INHERITED: a("Z", "i", "n", "h"),
    UNKNOWN: a("Z", "z", "z", "z"),
    ARABIC: a("A", "r", "a", "b"),
    ARMENIAN: a("A", "r", "m", "n"),
    BENGALI: a("B", "e", "n", "g"),
    CYRILLIC: a("C", "y", "r", "l"),
    DEVANAGARI: a("D", "e", "v", "a"),
    GEORGIAN: a("G", "e", "o", "r"),
    GREEK: a("G", "r", "e", "k"),
    GUJARATI: a("G", "u", "j", "r"),
    GURMUKHI: a("G", "u", "r", "u"),
    HANGUL: a("H", "a", "n", "g"),
    HAN: a("H", "a", "n", "i"),
    HEBREW: a("H", "e", "b", "r"),
    HIRAGANA: a("H", "i", "r", "a"),
    KANNADA: a("K", "n", "d", "a"),
    KATAKANA: a("K", "a", "n", "a"),
    LAO: a("L", "a", "o", "o"),
    LATIN: a("L", "a", "t", "n"),
    MALAYALAM: a("M", "l", "y", "m"),
    ORIYA: a("O", "r", "y", "a"),
    TAMIL: a("T", "a", "m", "l"),
    TELUGU: a("T", "e", "l", "u"),
    THAI: a("T", "h", "a", "i"),
    TIBETAN: a("T", "i", "b", "t"),
    BOPOMOFO: a("B", "o", "p", "o"),
    BRAILLE: a("B", "r", "a", "i"),
    CANADIAN_SYLLABICS: a("C", "a", "n", "s"),
    CHEROKEE: a("C", "h", "e", "r"),
    ETHIOPIC: a("E", "t", "h", "i"),
    KHMER: a("K", "h", "m", "r"),
    MONGOLIAN: a("M", "o", "n", "g"),
    MYANMAR: a("M", "y", "m", "r"),
    OGHAM: a("O", "g", "a", "m"),
    RUNIC: a("R", "u", "n", "r"),
    SINHALA: a("S", "i", "n", "h"),
    SYRIAC: a("S", "y", "r", "c"),
    THAANA: a("T", "h", "a", "a"),
    YI: a("Y", "i", "i", "i"),
    DESERET: a("D", "s", "r", "t"),
    GOTHIC: a("G", "o", "t", "h"),
    OLD_ITALIC: a("I", "t", "a", "l"),
    BUHID: a("B", "u", "h", "d"),
    HANUNOO: a("H", "a", "n", "o"),
    TAGALOG: a("T", "g", "l", "g"),
    TAGBANWA: a("T", "a", "g", "b"),
    CYPRIOT: a("C", "p", "r", "t"),
    LIMBU: a("L", "i", "m", "b"),
    LINEAR_B: a("L", "i", "n", "b"),
    OSMANYA: a("O", "s", "m", "a"),
    SHAVIAN: a("S", "h", "a", "w"),
    TAI_LE: a("T", "a", "l", "e"),
    UGARITIC: a("U", "g", "a", "r"),
    BUGINESE: a("B", "u", "g", "i"),
    COPTIC: a("C", "o", "p", "t"),
    GLAGOLITIC: a("G", "l", "a", "g"),
    KHAROSHTHI: a("K", "h", "a", "r"),
    NEW_TAI_LUE: a("T", "a", "l", "u"),
    OLD_PERSIAN: a("X", "p", "e", "o"),
    SYLOTI_NAGRI: a("S", "y", "l", "o"),
    TIFINAGH: a("T", "f", "n", "g"),
    BALINESE: a("B", "a", "l", "i"),
    CUNEIFORM: a("X", "s", "u", "x"),
    NKO: a("N", "k", "o", "o"),
    PHAGS_PA: a("P", "h", "a", "g"),
    PHOENICIAN: a("P", "h", "n", "x"),
    CARIAN: a("C", "a", "r", "i"),
    CHAM: a("C", "h", "a", "m"),
    KAYAH_LI: a("K", "a", "l", "i"),
    LEPCHA: a("L", "e", "p", "c"),
    LYCIAN: a("L", "y", "c", "i"),
    LYDIAN: a("L", "y", "d", "i"),
    OL_CHIKI: a("O", "l", "c", "k"),
    REJANG: a("R", "j", "n", "g"),
    SAURASHTRA: a("S", "a", "u", "r"),
    SUNDANESE: a("S", "u", "n", "d"),
    VAI: a("V", "a", "i", "i"),
    AVESTAN: a("A", "v", "s", "t"),
    BAMUM: a("B", "a", "m", "u"),
    EGYPTIAN_HIEROGLYPHS: a("E", "g", "y", "p"),
    IMPERIAL_ARAMAIC: a("A", "r", "m", "i"),
    INSCRIPTIONAL_PAHLAVI: a("P", "h", "l", "i"),
    INSCRIPTIONAL_PARTHIAN: a("P", "r", "t", "i"),
    JAVANESE: a("J", "a", "v", "a"),
    KAITHI: a("K", "t", "h", "i"),
    LISU: a("L", "i", "s", "u"),
    MEETEI_MAYEK: a("M", "t", "e", "i"),
    OLD_SOUTH_ARABIAN: a("S", "a", "r", "b"),
    OLD_TURKIC: a("O", "r", "k", "h"),
    SAMARITAN: a("S", "a", "m", "r"),
    TAI_THAM: a("L", "a", "n", "a"),
    TAI_VIET: a("T", "a", "v", "t"),
    BATAK: a("B", "a", "t", "k"),
    BRAHMI: a("B", "r", "a", "h"),
    MANDAIC: a("M", "a", "n", "d"),
    CHAKMA: a("C", "a", "k", "m"),
    MEROITIC_CURSIVE: a("M", "e", "r", "c"),
    MEROITIC_HIEROGLYPHS: a("M", "e", "r", "o"),
    MIAO: a("P", "l", "r", "d"),
    SHARADA: a("S", "h", "r", "d"),
    SORA_SOMPENG: a("S", "o", "r", "a"),
    TAKRI: a("T", "a", "k", "r"),
    BASSA_VAH: a("B", "a", "s", "s"),
    CAUCASIAN_ALBANIAN: a("A", "g", "h", "b"),
    DUPLOYAN: a("D", "u", "p", "l"),
    ELBASAN: a("E", "l", "b", "a"),
    GRANTHA: a("G", "r", "a", "n"),
    KHOJKI: a("K", "h", "o", "j"),
    KHUDAWADI: a("S", "i", "n", "d"),
    LINEAR_A: a("L", "i", "n", "a"),
    MAHAJANI: a("M", "a", "h", "j"),
    MANICHAEAN: a("M", "a", "n", "i"),
    MENDE_KIKAKUI: a("M", "e", "n", "d"),
    MODI: a("M", "o", "d", "i"),
    MRO: a("M", "r", "o", "o"),
    NABATAEAN: a("N", "b", "a", "t"),
    OLD_NORTH_ARABIAN: a("N", "a", "r", "b"),
    OLD_PERMIC: a("P", "e", "r", "m"),
    PAHAWH_HMONG: a("H", "m", "n", "g"),
    PALMYRENE: a("P", "a", "l", "m"),
    PAU_CIN_HAU: a("P", "a", "u", "c"),
    PSALTER_PAHLAVI: a("P", "h", "l", "p"),
    SIDDHAM: a("S", "i", "d", "d"),
    TIRHUTA: a("T", "i", "r", "h"),
    WARANG_CITI: a("W", "a", "r", "a"),
    AHOM: a("A", "h", "o", "m"),
    ANATOLIAN_HIEROGLYPHS: a("H", "l", "u", "w"),
    HATRAN: a("H", "a", "t", "r"),
    MULTANI: a("M", "u", "l", "t"),
    OLD_HUNGARIAN: a("H", "u", "n", "g"),
    SIGNWRITING: a("S", "g", "n", "w"),
    ADLAM: a("A", "d", "l", "m"),
    BHAIKSUKI: a("B", "h", "k", "s"),
    MARCHEN: a("M", "a", "r", "c"),
    OSAGE: a("O", "s", "g", "e"),
    TANGUT: a("T", "a", "n", "g"),
    NEWA: a("N", "e", "w", "a"),
    MASARAM_GONDI: a("G", "o", "n", "m"),
    NUSHU: a("N", "s", "h", "u"),
    SOYOMBO: a("S", "o", "y", "o"),
    ZANABAZAR_SQUARE: a("Z", "a", "n", "b"),
    DOGRA: a("D", "o", "g", "r"),
    GUNJALA_GONDI: a("G", "o", "n", "g"),
    HANIFI_ROHINGYA: a("R", "o", "h", "g"),
    MAKASAR: a("M", "a", "k", "a"),
    MEDEFAIDRIN: a("M", "e", "d", "f"),
    OLD_SOGDIAN: a("S", "o", "g", "o"),
    SOGDIAN: a("S", "o", "g", "d"),
    INVALID: 0
  };
  var l = o.cwrap("hb_buffer_create", "number"), h = o.cwrap("hb_buffer_add_utf8", null, [
      "number",
      "string",
      "number",
      "number",
      "number"
    ]), A = o.cwrap("hb_buffer_guess_segment_properties", "number", ["number"]), c = o.cwrap("hb_shape", null, [
      "number",
      "number",
      "number",
      "number"
    ]), p = o.cwrap("hb_buffer_destroy", null, ["number"]), u = o.cwrap("hb_buffer_get_language", "number", ["number"]), d = o.cwrap("hb_buffer_set_language", null, [
      "number",
      "number"
    ]), g = o.cwrap("hb_language_to_string", "string", ["number"]), f = o.cwrap("hb_language_from_string", "number", [
      "string",
      "number"
    ]), m = o.cwrap("hb_buffer_get_direction", "number", ["number"]), y = o.cwrap("hb_buffer_set_direction", null, [
      "number",
      "number"
    ]), _ = o.cwrap("hb_direction_to_string", "string", ["number"]), v = o.cwrap("hb_direction_from_string", "number", [
      "string",
      "number"
    ]), b = o.cwrap("hb_buffer_reverse", null, ["number"]), C = o.cwrap("hb_buffer_get_script", "number", ["number"]), w = o.cwrap("hb_buffer_set_script", null, [
      "number",
      "number"
    ]), E = o.cwrap("hb_script_get_horizontal_direction", "number", ["number"]), B = o.cwrap("hb_font_set_scale", null, [
      "number",
      "number",
      "number"
    ]), x = o.cwrap("hb_font_set_variations", null, [
      "number",
      "number",
      "number"
    ]), P = o.cwrap("hb_ot_tag_to_language", "number", ["number"]);
  s.createFontFromArrayBuffer = function (e) {
    if (!(e instanceof ArrayBuffer)) {
      if (!ArrayBuffer.isView(e))
        throw new Error("Invalid input data type");
      e = e.buffer;
    }
    var t = new Uint8Array(e), i = o._malloc(t.length * t.BYTES_PER_ELEMENT);
    o.HEAPU8.set(t, i);
    var n = o._hb_blob_create(i, t.length, 1, 0, 0), r = o._hb_face_create(n, 0), a = o._hb_font_create(r);
    return new s.Font(a);
  }, s.initStruct = function (e, t) {
    var i = e.reduce(function (e, t) {
        return e + t.type.length;
      }, 0), n = o._malloc(i), r = 0;
    return e.forEach(function (e) {
      var i = e.type, a = t[e.name];
      o.setValue(n + r, a, i.name), r += i.length;
    }), n;
  }, s.openTypeLanguageSystemTagNumberToBCP47TagNumber = function (e) {
    return P(e);
  }, s.bcp47TagNumberToString = function (e) {
    return g(e);
  }, s.stringToTag = function (e) {
    return a.apply(null, e.split(""));
  }, s.nameToTag = function (e) {
    return s.SCRIPTS[e];
  }, s.tagToName = function (e) {
    var t = Object.values(s.SCRIPTS).indexOf(e);
    return t < 0 ? null : Object.keys(s.SCRIPTS)[t];
  }, s.stringTagToName = function (e) {
    for (e = e.slice(0, 4); e.length < 4;)
      e = e.concat(String.fromCharCode(0));
    var t = e.split("");
    t[0] = t[0].toUpperCase();
    var i = a.apply(null, t);
    return s.tagToName(i);
  }, s.scriptNameToOpenTypeScriptTagString = function (e) {
    return function (e) {
      return String.fromCharCode.apply(null, [
        e >> 24 & 255,
        e >> 16 & 255,
        e >> 8 & 255,
        255 & e
      ]).split("");
    }(s.nameToTag(e)).join("").toLowerCase();
  }, s.Buffer = function (e) {
    this._text = e, this._hbBuffer = l(), h(this._hbBuffer, this._text, -1, 0, -1), A(this._hbBuffer);
  }, s.Buffer.prototype._text = null, s.Buffer.prototype._hbBuffer = null, s.Buffer.prototype.getLanguage = function () {
    if (!this._text)
      throw new Error("Text not set, cannot check language");
    return g(u(this._hbBuffer));
  }, s.Buffer.prototype.setLanguage = function (e) {
    if (!this._text)
      throw new Error("Cannot set language, text is not set");
    "string" == typeof e && (e = f(e, e.length)), d(this._hbBuffer, e);
  }, s.Buffer.prototype.getDirection = function () {
    if (!this._text)
      throw new Error("Text not set, cannot check text direction");
    return _(m(this._hbBuffer));
  }, s.Buffer.prototype.setDirection = function (e) {
    if (!this._text)
      throw new Error("Text not set, cannot set text direction");
    var t = v(e, e.length);
    y(this._hbBuffer, t);
  }, s.Buffer.prototype.reverse = function () {
    b(this._hbBuffer);
  }, s.Buffer.prototype.getScript = function () {
    if (!this._text)
      throw new Error("Text not set, cannot check text script");
    var e = C(this._hbBuffer);
    if (e === s.SCRIPTS.INVALID) {
      var module = this._text.codePointAt(0);
      if (module >= 65280 && module <= 65519)
        return s.SCRIPTS.KATAKANA;
    }
    return e;
  }, s.Buffer.prototype.setScript = function (e) {
    if ("number" != typeof e)
      throw new Error("Script must be a 32bit integer from GHarfBuzz.SCRIPTS array");
    if (Object.values(s.SCRIPTS).indexOf(e) < 0)
      throw new Error("Unknown script type");
    if (!this._text)
      throw new Error("Text not set, cannot set text script");
    w(this._hbBuffer, e);
  }, s.Buffer.prototype.directionForScript = function (e) {
    return _(E(e));
  }, s.Buffer.prototype.destroy = function () {
    p(this._hbBuffer);
  }, s.Font = function (e) {
    if ("number" != typeof e)
      throw new Error("Invalid font provided");
    this._font = e;
  }, s.Font.prototype._font = null, s.Font.prototype._stylisticSet = null, s.Font.prototype.setScale = function (e) {
    B(this._font, e, e);
  }, s.Font.prototype.setVariations = function (e) {
    for (var module = Object.keys(e), require = Object.values(e), n = o._malloc(8 * e.length), r = 0; r < module.length; r++) {
      var s = a.apply(null, module[r].split("")), l = require[r];
      o.setValue(n + 8 * r, s, "i32"), o.setValue(n + 8 * r + 4, l, "float");
    }
    x(this._font, n, module.length);
  }, s.Font.prototype.setStylistcSet = function (e) {
    this._stylisticSet = e;
  }, s.Font.prototype._getFeatures = function () {
    return this._stylisticSet ? {
      ptr: s.initStruct(r, {
        tag: s.stringToTag(this._stylisticSet),
        value: 1,
        start: 0,
        end: -1
      }),
      length: 1
    } : {
      ptr: 0,
      length: 0
    };
  }, s.Font.prototype.getGlyphs = function (e) {
    if (!(e && e instanceof s.Buffer))
      throw new Error("Cannot get glyphs - no text buffer provided");
    var t = this._getFeatures();
    c(this._font, e._hbBuffer, t.ptr, t.length);
    for (var require = o._hb_buffer_get_length(e._hbBuffer), n = o._hb_buffer_get_glyph_infos(e._hbBuffer, 0), r = o._hb_buffer_get_glyph_positions(e._hbBuffer, 0), a = [], l = 0; l < require; l++) {
      var h = o.HEAPU32[n / 4 + 5 * l + 0], A = o.HEAPU32[n / 4 + 5 * l + 1], p = o.HEAPU32[n / 4 + 5 * l + 2], u = o.HEAP32[r / 4 + 5 * l + 0], d = o.HEAP32[r / 4 + 5 * l + 1], g = o.HEAP32[r / 4 + 5 * l + 2], f = o.HEAP32[r / 4 + 5 * l + 3];
      a.push({
        codepoint: h,
        mask: A,
        cluster: p,
        xAdvance: u,
        yAdvance: d,
        xOffset: g,
        yOffset: f
      });
    }
    return a;
  }, exports.exports = s;
}
