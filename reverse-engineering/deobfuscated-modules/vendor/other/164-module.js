/**
 * Module 164
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
  var n = require(0) /* GObject */, r = require(176) /* GSystem */, o = require(9) /* GLocale */;
  function a() {
  }
  n.inherit(a, n), a.Constant = {
    CHARACTER: 0,
    SPACE: 1,
    ENTER: 2,
    TAB: 3,
    BACKSPACE: 4,
    CONTROL: 5,
    SHIFT: 6,
    ALT_LEFT: 7,
    LEFT: 8,
    UP: 9,
    RIGHT: 10,
    DOWN: 11,
    PAGE_UP: 12,
    PAGE_DOWN: 13,
    HOME: 14,
    END: 15,
    INSERT: 16,
    DELETE: 17,
    COMMAND: 19,
    ALT_RIGHT: 20,
    ESC: 21,
    F1: 30,
    F2: 31,
    F3: 32,
    F4: 33,
    F5: 34,
    F6: 35,
    F7: 36,
    F8: 37,
    F9: 38,
    F10: 39,
    F11: 40,
    F12: 41,
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    E: "E",
    F: "F",
    G: "G",
    H: "H",
    I: "I",
    J: "J",
    K: "K",
    L: "L",
    M: "M",
    N: "N",
    O: "O",
    P: "P",
    Q: "Q",
    R: "R",
    S: "S",
    T: "T",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "Z",
    Digit0: "0",
    Digit1: "1",
    Digit2: "2",
    Digit3: "3",
    Digit4: "4",
    Digit5: "5",
    Digit6: "6",
    Digit7: "7",
    Digit8: "8",
    Digit9: "9",
    COMMA: ",",
    PERIOD: ".",
    META: 100,
    OPTION: 101,
    REMOVE: 102
  }, a.translateCode = function (e) {
    var t = null;
    switch (e) {
    case "Space":
      t = a.Constant.SPACE;
      break;
    case "Escape":
      t = a.Constant.ESC;
      break;
    case "Enter":
      t = a.Constant.ENTER;
      break;
    case "Tab":
      t = a.Constant.TAB;
      break;
    case "Backspace":
      t = a.Constant.BACKSPACE;
      break;
    case "ShiftLeft":
    case "ShiftRight":
      t = a.Constant.SHIFT;
      break;
    case "ControlLeft":
    case "ControlRight":
      t = a.Constant.CONTROL;
      break;
    case "AltRight":
      t = a.Constant.ALT_RIGHT;
      break;
    case "AltLeft":
      t = a.Constant.ALT;
      break;
    case "ArrowLeft":
      t = a.Constant.LEFT;
      break;
    case "ArrowUp":
      t = a.Constant.UP;
      break;
    case "ArrowRight":
      t = a.Constant.RIGHT;
      break;
    case "ArrowDown":
      t = a.Constant.DOWN;
      break;
    case "PageUp":
      t = a.Constant.PAGE_UP;
      break;
    case "PageDown":
      t = a.Constant.PAGE_DOWN;
      break;
    case "Home":
      t = a.Constant.HOME;
      break;
    case "End":
      t = a.Constant.END;
      break;
    case "Insert":
      t = a.Constant.INSERT;
      break;
    case "Delete":
      t = a.Constant.DELETE;
      break;
    case "F1":
      t = a.Constant.F1;
      break;
    case "F2":
      t = a.Constant.F2;
      break;
    case "F3":
      t = a.Constant.F3;
      break;
    case "F4":
      t = a.Constant.F4;
      break;
    case "F5":
      t = a.Constant.F5;
      break;
    case "F6":
      t = a.Constant.F6;
      break;
    case "F7":
      t = a.Constant.F7;
      break;
    case "F8":
      t = a.Constant.F8;
      break;
    case "F9":
      t = a.Constant.F9;
      break;
    case "F10":
      t = a.Constant.F10;
      break;
    case "F11":
      t = a.Constant.F11;
      break;
    case "F12":
      t = a.Constant.F12;
      break;
    case "KeyA":
      t = a.Constant.A;
      break;
    case "KeyB":
      t = a.Constant.B;
      break;
    case "KeyC":
      t = a.Constant.C;
      break;
    case "KeyD":
      t = a.Constant.D;
      break;
    case "KeyE":
      t = a.Constant.E;
      break;
    case "KeyF":
      t = a.Constant.F;
      break;
    case "KeyG":
      t = a.Constant.G;
      break;
    case "KeyH":
      t = a.Constant.H;
      break;
    case "KeyI":
      t = a.Constant.I;
      break;
    case "KeyJ":
      t = a.Constant.J;
      break;
    case "KeyK":
      t = a.Constant.K;
      break;
    case "KeyL":
      t = a.Constant.L;
      break;
    case "KeyM":
      t = a.Constant.M;
      break;
    case "KeyN":
      t = a.Constant.N;
      break;
    case "KeyO":
      t = a.Constant.O;
      break;
    case "KeyP":
      t = a.Constant.P;
      break;
    case "KeyQ":
      t = a.Constant.Q;
      break;
    case "KeyR":
      t = a.Constant.R;
      break;
    case "KeyS":
      t = a.Constant.S;
      break;
    case "KeyT":
      t = a.Constant.T;
      break;
    case "KeyU":
      t = a.Constant.U;
      break;
    case "KeyV":
      t = a.Constant.V;
      break;
    case "KeyW":
      t = a.Constant.W;
      break;
    case "KeyX":
      t = a.Constant.X;
      break;
    case "KeyY":
      t = a.Constant.Y;
      break;
    case "KeyZ":
      t = a.Constant.Z;
      break;
    case "Digit0":
      t = a.Constant.Digit0;
      break;
    case "Digit1":
      t = a.Constant.Digit1;
      break;
    case "Digit2":
      t = a.Constant.Digit2;
      break;
    case "Digit3":
      t = a.Constant.Digit3;
      break;
    case "Digit4":
      t = a.Constant.Digit4;
      break;
    case "Digit5":
      t = a.Constant.Digit5;
      break;
    case "Digit6":
      t = a.Constant.Digit6;
      break;
    case "Digit7":
      t = a.Constant.Digit7;
      break;
    case "Digit8":
      t = a.Constant.Digit8;
      break;
    case "Digit9":
      t = a.Constant.Digit9;
      break;
    case "Comma":
      t = a.Constant.COMMA;
      break;
    case "Period":
      t = a.Constant.PERIOD;
    }
    return t;
  }, a.translateKey = function (e, t) {
    var i = null;
    switch (e) {
    case 32:
      i = a.Constant.SPACE;
      break;
    case 27:
      i = a.Constant.ESC;
      break;
    case 13:
      i = a.Constant.ENTER;
      break;
    case 9:
      i = a.Constant.TAB;
      break;
    case 8:
      i = a.Constant.BACKSPACE;
      break;
    case 16:
      i = a.Constant.SHIFT;
      break;
    case 17:
      i = a.Constant.CONTROL;
      break;
    case 18:
      i = 2 === t ? a.Constant.ALT_RIGHT : a.Constant.ALT;
      break;
    case 37:
      i = a.Constant.LEFT;
      break;
    case 38:
      i = a.Constant.UP;
      break;
    case 39:
      i = a.Constant.RIGHT;
      break;
    case 40:
      i = a.Constant.DOWN;
      break;
    case 33:
      i = a.Constant.PAGE_UP;
      break;
    case 34:
      i = a.Constant.PAGE_DOWN;
      break;
    case 36:
      i = a.Constant.HOME;
      break;
    case 35:
      i = a.Constant.END;
      break;
    case 45:
      i = a.Constant.INSERT;
      break;
    case 46:
      i = a.Constant.DELETE;
      break;
    case 112:
      i = a.Constant.F1;
      break;
    case 113:
      i = a.Constant.F2;
      break;
    case 114:
      i = a.Constant.F3;
      break;
    case 115:
      i = a.Constant.F4;
      break;
    case 116:
      i = a.Constant.F5;
      break;
    case 117:
      i = a.Constant.F6;
      break;
    case 118:
      i = a.Constant.F7;
      break;
    case 119:
      i = a.Constant.F8;
      break;
    case 120:
      i = a.Constant.F9;
      break;
    case 121:
      i = a.Constant.F10;
      break;
    case 122:
      i = a.Constant.F11;
      break;
    case 123:
      i = a.Constant.F12;
    }
    return null === i && (i = String.fromCharCode(e)), i;
  }, a.transformKey = function (e) {
    return e === a.Constant.META || e === a.Constant.COMMAND ? r.operatingSystem === r.OperatingSystem.OSX_IOS && r.hardware === r.Hardware.Desktop ? a.Constant.COMMAND : a.Constant.CONTROL : e === a.Constant.OPTION ? a.Constant.ALT_LEFT : e === a.Constant.REMOVE ? r.operatingSystem === r.OperatingSystem.OSX_IOS ? a.Constant.BACKSPACE : a.Constant.DELETE : e;
  }, a.toLocalizedName = function (e) {
    return e = a.transformKey(e), o.getValue("GKey", "key." + e.toString());
  }, a.toLocalizedShort = function (e, t) {
    if (!t && r.operatingSystem === r.OperatingSystem.OSX_IOS && r.hardware === r.Hardware.Desktop) {
      if (e === a.Constant.TAB)
        return "\u21E5";
      if (e === a.Constant.OPTION || e === a.Constant.ALT_LEFT || e === a.Constant.ALT_RIGHT)
        return "\u2325";
      if (e === a.Constant.META || e === a.Constant.COMMAND)
        return "\u2318";
      if (e === a.Constant.SHIFT)
        return "\u21E7";
      if (e === a.Constant.CONTROL)
        return "\u2303";
      if (e === a.Constant.SPACE)
        return "\u2423";
      if (e === a.Constant.ENTER)
        return "\u23CE";
      if (e === a.Constant.REMOVE)
        return "\u232B";
      if (e === a.Constant.UP)
        return "\u2191";
      if (e === a.Constant.DOWN)
        return "\u2193";
      if (e === a.Constant.LEFT)
        return "\u2190";
      if (e === a.Constant.RIGHT)
        return "\u2192";
    }
    e = a.transformKey(e);
    var i = o.getValue("GKey", "key." + e.toString() + ".short", null);
    return i || o.getValue("GKey", "key." + e.toString());
  }, a.toSystemShortcut = function (e) {
    if (r.operatingSystem === r.OperatingSystem.OSX_IOS && r.hardware === r.Hardware.Desktop) {
      if ("-" === e)
        return "\u2212";
      if ("+" === e)
        return "+";
    }
    return e.toUpperCase();
  }, a.shortcutToString = function (e, t = {}) {
    for (var require = t.isWordMode, n = "", o = 0; o < e.length; ++o)
      o > 0 && (require ? n += r.operatingSystem === r.OperatingSystem.OSX_IOS ? " " : " + " : r.operatingSystem !== r.OperatingSystem.OSX_IOS && (n += "+")), "number" == typeof e[o] ? n += a.toLocalizedShort(e[o]) : n += a.toSystemShortcut(e[o]);
    return n;
  }, exports.exports = a;
}
