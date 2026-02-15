/**
 * Module 553
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

function (e, t, i) {
  var n = i(64), r = i(150), o = i(75), a = i(0), s = i(72), l = i(5), h = i(211), A = i(761), c = i(551), p = i(758), u = i(335), d = i(764), g = i(756), f = i(757), m = i(748), y = i(759), _ = i(550), v = i(753), b = i(539), C = i(548), w = i(384), E = i(549), B = i(762), x = i(763), P = i(754), S = i(386), T = i(547), I = i(746), F = i(755), R = i(738), D = i(77), k = i(765), G = i(767), Q = i(769), M = i(771), N = i(773), U = i(775);
  function V() {
    this._tools = [], this._typeIdToIndexMap = {}, this._defaultTool = C, this.addTool(new C()), this.addTool(new S()), this.addTool(new m()), this.addTool(new y()), this.addTool(new _()), this.addTool(new b()), this.addTool(new A()), this.addTool(new v()), this.addTool(new u()), this.addTool(new d()), this.addTool(new E()), this.addTool(new c()), this.addTool(new I()), this.addTool(new w()), this.addTool(new P()), this.addTool(new B()), this.addTool(new T()), this.addTool(new f()), this.addTool(new p()), this.addTool(new x()), this.addTool(new p()), this.addTool(new g()), this.addTool(new F()), this.addTool(new R()), this.addTool(new k()), this.addTool(new N()), this.addTool(new G()), this.addTool(new Q()), this.addTool(new M()), this.addTool(new U());
  }
  a.inheritAndMix(V, a, [o]), V.ToolChangedEvent = function (e, t, i) {
    this.previousTool = e, this.newTool = t, this.light = !!i;
  }, a.inherit(V.ToolChangedEvent, s), V.ToolChangedEvent.prototype.previousTool = null, V.ToolChangedEvent.prototype.newTool = null, V.ToolChangedEvent.prototype.light = !1, V.ToolChangedEvent.prototype.toString = function () {
    return "[Event GToolManager.ToolChangedEvent]";
  }, V.InvalidationRequestEvent = function (e, t) {
    this.manager = e, this.area = t;
  }, a.inherit(V.InvalidationRequestEvent, s), V.InvalidationRequestEvent.prototype.manager = null, V.InvalidationRequestEvent.prototype.area = null, V.InvalidationRequestEvent.prototype.toString = function () {
    return "[Event GToolManager.InvalidationRequestEvent]";
  }, V.prototype._tools = null, V.prototype._typeIdToIndexMap = null, V.prototype._activeTool = null, V.prototype._oldTool = null, V.prototype._view = null, V.prototype._temporaryActiveTool = null, V.prototype._tempActivationTime = null, V.prototype._lightDeactivation = !1, V.prototype.addTool = function (e) {
    if (e._manager)
      throw new Error("Tool is already registered");
    this._tools.push(e), e._manager = this, this._typeIdToIndexMap = {};
    for (var t = 0; t < this._tools.length; ++t) {
      e = this._tools[t];
      this._typeIdToIndexMap[a.getTypeId(e)] = t;
    }
  }, V.prototype.hasTool = function (e) {
    return this._typeIdToIndexMap.hasOwnProperty(a.getTypeId(e));
  }, V.prototype.getToolCount = function () {
    return this._tools.length;
  }, V.prototype.indexOf = function (e) {
    return this._typeIdToIndexMap.hasOwnProperty(a.getTypeId(e)) ? this._typeIdToIndexMap[a.getTypeId(e)] : -1;
  }, V.prototype.getTool = function (e) {
    var t = "number" == typeof e ? e : this.indexOf(e);
    return t >= 0 && t < this._tools.length ? this._tools[t] : null;
  }, V.prototype.getActiveTool = function () {
    return this._activeTool;
  }, V.prototype.getTemporaryActiveTool = function () {
    return this._temporaryActiveTool;
  }, V.prototype.activateTool = function (e, t, i) {
    if (!this._temporaryActiveTool || i) {
      if (this._temporaryActiveTool) {
        if (e instanceof h || (e = this.getTool(this.indexOf(e))), e == this._activeTool)
          return this._temporaryActiveTool = null, this._tempActivationTime = null, !0;
        this._activeTool.isDeactivatable() && (this._temporaryActiveTool = null, this._tempActivationTime = null);
      }
      if (!this._temporaryActiveTool)
        return this._activateTool(e, t);
    }
    return !1;
  }, V.prototype.tempToolKeyActivate = function (e) {
    if (e && this.getTool(e) !== this._activeTool) {
      var t = this._activeTool, i = e == g || e == F || (t instanceof b || t instanceof A) && (e == b || e == A || e == C || e == S || e == m);
      if (this._activateTool(e, null, i))
        return this._lightDeactivation = i, this._temporaryActiveTool || (this._temporaryActiveTool = t), this._tempActivationTime || (this._tempActivationTime = new Date().getTime()), !0;
    }
    return !1;
  }, V.prototype.tempToolKeyRelease = function (e, t) {
    return !!(e && this.getTool(e) == this._activeTool && this._temporaryActiveTool && this._tempActivationTime) && (this._tempActivationTime + t <= new Date().getTime() ? this._activateTool(this._temporaryActiveTool) : this._lightDeactivation && (this._temporaryActiveTool.deactivate(this._view), this._activeTool.activate(this._view, !0), this.hasEventListeners(V.ToolChangedEvent) && this.trigger(new V.ToolChangedEvent(this._temporaryActiveTool, this._activeTool, !1)), this._lightDeactivation = !1), this._temporaryActiveTool = null, this._tempActivationTime = null, !0);
  }, V.prototype.isContextActivatable = function (e) {
    return e.isActivatable(this._view);
  }, V.prototype.setView = function (e) {
    e != this._view && (this._view && (this._removeActiveToolFromView(), n.removeEventListener(r, this._modifiersChanged)), this._view = e, this._view && (this._addActiveToolToView(), n.addEventListener(r, this._modifiersChanged, this)));
  }, V.prototype.setDefaultTool = function (e) {
    this._defaultTool = e;
  }, V.prototype.notifyJobDone = function (e) {
    e instanceof this._defaultTool || setTimeout(function () {
      this.activateTool(this._defaultTool);
    }.bind(this), 0);
  }, V.prototype.activateSubSelect = function () {
    this.activateTool(S);
  }, V.prototype.getOldTool = function () {
    return this._oldTool;
  }, V.prototype.activateOldPathTool = function () {
    var e = this.getOldTool();
    e && (e instanceof b || e instanceof A) ? this.activateTool(e) : this.activateTool(b);
  }, V.prototype._activateTool = function (e, t, i) {
    return e instanceof h || (e = this.getTool(this.indexOf(e))), e != this._activeTool && !(this._activeTool && !this._activeTool.isDeactivatable()) && !!e.isActivatable(this._view) && (this._removeActiveToolFromView(i), this._oldTool = this._activeTool, this._activeTool = e, t && this._activeTool.setIcon instanceof Function && this._activeTool.setIcon(t), this._addActiveToolToView(), this.hasEventListeners(V.ToolChangedEvent) && this.trigger(new V.ToolChangedEvent(this._oldTool, e, i)), !0);
  }, V.prototype._addActiveToolToView = function () {
    this._activeTool && this._view && (this._activeTool.activate(this._view), this._updateActiveToolCursor());
  }, V.prototype._removeActiveToolFromView = function (e) {
    this._activeTool && this._view && (this._activeTool.deactivate(this._view, e), this._view.setCursor(null), this._view.getEditor().closeInlineEditor());
  }, V.prototype._updateActiveToolCursor = function () {
    this._activeTool && this._view && this._view.setCursor(this._activeTool.getCursor());
  }, V.prototype._updateInlineHint = function (e, t, i) {
    if (this._activeTool && this._view)
      if (e && t) {
        var n = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(t);
        this._view.updateInlineHint(e, new l(n.getX(), n.getY()), i);
      } else
        this._view.updateInlineHint(null);
  }, V.prototype._invalidateActiveToolArea = function (e) {
    this.hasEventListeners(V.InvalidationRequestEvent) && this._activeTool && this._view && this.trigger(new V.InvalidationRequestEvent(this, e));
  }, V.prototype.paint = function (e) {
    this._activeTool && this._activeTool.paint(e);
  }, V.prototype._updateTemporaryTool = function (e) {
    if (!this._view.getEditor().isInlineEditing()) {
      var t = this.getTool(this.indexOf(g)), i = this.getTool(this.indexOf(F)), r = null;
      if ((n.modifiers.spaceKey || n.modifiers.middleButton) && this._temporaryActiveTool !== t ? r = t : this._temporaryActiveTool && this._tempActivationTime && !((e.spaceKey || e.middleButton) && this._activeTool == t || !n.modifiers.metaKey && e.metaKey && this._activeTool == i) && (r = this._activeTool), r || !t || t.isDeactivatable() || this._view.trigger(new D.DragEnd()), n.modifiers.metaKey && (r === t || this._activeTool instanceof g) && !this._tempActivationTime && (r = i), !r && this._temporaryActiveTool)
        this._activateTool(this._temporaryActiveTool) && (this._temporaryActiveTool = null, this._tempActivationTime = null);
      else if (r && r !== this._activeTool) {
        var o = this._activeTool;
        this._activateTool(r, null, !0) && (this._temporaryActiveTool || (this._temporaryActiveTool = o));
      }
    }
  }, V.prototype._modifiersChanged = function (e) {
    this._updateTemporaryTool(e.changed);
  }, V.prototype.toString = function () {
    return "[Object GToolManager]";
  }, e.exports = V;
}
