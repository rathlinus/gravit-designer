/**
 * Module 2 - GNode
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
  var n = i(11), r = i(75), o = i(72), a = i(0), s = i(9), l = i(50);
  function h() {
  }
  a.inherit(h, a), h.MIME_TYPE = "application/gravit+node", h.inherit = function (e, t, i) {
    a.inherit(t, i), h._registerNodeClass(e, t);
  }, h.inheritAndMix = function (e, t, i, n, r) {
    a.inheritAndMix(t, i, n, r), h._registerNodeClass(e, t);
  }, h.getName = function (e) {
    return h._nodeClassToNameMap[a.getTypeId(e)];
  }, h.store = function (e, t) {
    if (t = t || {}, e.hasMixin(h.Store) && !(t.exceptions && t.exceptions.indexOf(e) >= 0)) {
      var i = { "@": h._nodeClassToNameMap[a.getTypeId(e)] };
      e.hasMixin(h.Identity) && !t.copy && (i["@id"] = e.getId());
      var n = {
        blob: i,
        options: t
      };
      if (e._notifyChange(h._Change.PrepareStore, n), e.hasMixin(h.Container))
        for (var r = e.getFirstChild(); null !== r; r = r.getNext())
          if (!t.passChildFilter || t.passChildFilter(r)) {
            var o = h.store(r, t);
            o && (i.hasOwnProperty("$") ? i.$.push(o) : i.$ = [o]);
          }
      if (e.hasMixin(h.Properties))
        if (t.copy && t.copyIgnoreProperties && t.copyIgnoreProperties.length) {
          var s = t.copyIgnoreProperties.slice();
          s.indexOf("@id") < 0 && s.push("@id"), Object.keys(e).forEach(function (t) {
            "@" === t.charAt(0) && t.length > 1 && s.indexOf(t) < 0 && e.hasOwnProperty(t) && (i[t] = e[t]);
          });
        } else
          Object.keys(e).forEach(function (t) {
            "@" === t.charAt(0) && t.length > 1 && "@id" !== t && e.hasOwnProperty(t) && (i[t] = e[t]);
          });
      return e.hasMixin(h.Reference) && e._referenceId && (i["#"] = e._referenceId), e.hasMixin(h.Multireference) && e._multiReferenceId && (i["&"] = e._multiReferenceId), e._notifyChange(h._Change.Store, n), i;
    }
    return null;
  }, h.restore = function (e, t, i, n, r) {
    var o = null;
    return h._restore(e, t, i, n, r, function (e, t, i, n, r, o) {
      o(h.restoreInstance(e, t, i, n, r));
    }, function (e) {
      o = e;
    }), o;
  }, h._restore = function (e, t, i, n, r, o, a) {
    n && r && r > 0 && (h.prototype.restoreCount++, n(80 * h.prototype.restoreCount / r + 20));
    if (!e || !e.hasOwnProperty("@"))
      return null;
    var s = h._nameToNodeClassMap[e["@"]];
    if (!s)
      return null;
    var l = t ? new s(t) : new s();
    o(e, l, i, n, r, function () {
      i && i(l), a(l);
    });
  }, h.restoreInstance = function (e, t, i, n, r) {
    var o = null;
    return h._restoreInstance(e, t, i, n, r, function (e, t, i, n, r, o, a) {
      for (var s = 0; s < t.length; ++s) {
        var l = h.restore(t[s], i, n, r, o);
        l && e.appendChild(l);
      }
      a();
    }, function (e) {
      o = e;
    }), o;
  }, h._restoreInstance = function (e, t, i, n, r, o, a) {
    var s = { blob: e };
    t._notifyChange(h._Change.PrepareRestore, s), t.hasMixin(h.Identity) && e.hasOwnProperty("@id") && (t.__id = e["@id"]);
    var l = function () {
      if (t.hasMixin(h.Properties))
        for (var i in e)
          "@" === i.charAt(0) && e.hasOwnProperty(i) && i.length > 1 && (t[i] = e[i]);
      t.hasMixin(h.Reference) && e.hasOwnProperty("#") && (t._referenceId = e["#"]), t.hasMixin(h.Multireference) && e.hasOwnProperty("&") && (t._multiReferenceId = e["&"]), t._notifyChange(h._Change.Restore, s), a(t);
    };
    if (e.hasOwnProperty("$") && t.hasMixin(h.Container)) {
      var A = e.$;
      A.length > 0 ? (t._blockUpdateChanges(), o(t, A, null, i, n, r, function () {
        t._releaseUpdateChanges(), l();
      })) : l();
    } else
      l();
  }, h.serialize = function (e, t) {
    var i = t && t.beautify || !1, n = {
        save: t && t.save || !1,
        copy: t && t.copy || !1,
        copyIgnoreProperties: t && t.copyIgnoreProperties || null,
        singleton: t && t.singleton || !1,
        exceptions: t && t.exceptions || !1,
        lastModifiedDate: t ? t.lastModifiedDate : null
      };
    if (e instanceof Array) {
      for (var r = [], o = 0; o < e.length; ++o) {
        if (!(t && t.exceptions && t.exceptions.indexOf(e[o]) >= 0))
          (a = h.store(e[o], n)) && r.push(a);
      }
      if (r.length > 0) {
        try {
          s = JSON.stringify(r, null, i ? 4 : null);
        } catch (e) {
          s = "";
        }
        return s;
      }
    } else {
      var a, s;
      if (!(t && t.exceptions && t.exceptions.indexOf(e) >= 0))
        if (a = h.store(e, n)) {
          try {
            s = JSON.stringify(a, null, i ? 4 : null);
          } catch (e) {
            s = "";
          }
          return s;
        }
    }
    return null;
  }, h.deserialize = function (e, t, i, n) {
    var r = null;
    return h._deserialize(e, t, i, n, function (e, t, i, n, r, o) {
      if (e)
        if (Array.isArray(e)) {
          var a = [];
          e.forEach(function (e) {
            var o = h.restore(e, t, i, n, r);
            o && a.push(o);
          }), o(a);
        } else
          o(h.restore(e, t, i, n, r));
    }, function (e) {
      r = e;
    }), r;
  }, h._deserialize = function (e, t, i, n, r, o) {
    var a = 0;
    if (e) {
      var s = null;
      try {
        s = JSON.parse(e);
      } catch (e) {
        console.warn("deserialize node: invalid JSON");
      }
      if (i && (h.prototype.restoreCount = 0, a = h.countBlobChildren(s, a), i(20)), s && s instanceof Array)
        return void r(s, t, void 0, void 0, void 0, o);
      if (s)
        return void r(s, t, n, i, a, o);
    }
    o(null);
  }, h.countBlobChildren = function (e, t) {
    if (t++, !e)
      return console.warn("Null blob"), 0;
    if (e.hasOwnProperty("$")) {
      var i = e.$;
      if (i.length > 0)
        for (var n = 0; n < i.length; ++n)
          t = h.countBlobChildren(i[n], t);
    }
    return t;
  }, h.order = function (e, t) {
    var i = e ? e.slice() : null;
    if (e && e.length > 1) {
      for (var n = null, r = e[0]; null !== r; r = r.getParent())
        n = r;
      if (null !== n) {
        var o = [];
        return n.accept(function (e) {
          if (!i.length)
            return !1;
          for (var t = 0, n = !1, r = 0; r < i.length && !n; ++r)
            i[r] === e && (o.push(e), t = r, n = !0);
          return n && i.splice(t, 1), !0;
        }, t), o;
      }
    }
    return i;
  }, h.getClassFromId = function (e) {
    var t = h._nodeClassToNameMap[e];
    return t && h._nameToNodeClassMap[t] || null;
  }, h._nodeClassToNameMap = {}, h._nameToNodeClassMap = {}, h._registerNodeClass = function (e, t) {
    h._nodeClassToNameMap[a.getTypeId(t)] = e, h._nameToNodeClassMap[e] = t;
  }, h.Flag = {
    Selected: 2,
    Highlighted: 4,
    Active: 8,
    Transient: 16,
    Expanded: 32
  }, h._Change = {
    BeforeChildInsert: 1,
    AfterChildInsert: 2,
    BeforeChildRemove: 10,
    AfterChildRemove: 11,
    BeforePropertiesChange: 20,
    AfterPropertiesChange: 21,
    BeforeFlagChange: 30,
    AfterFlagChange: 31,
    ParentAttached: 40,
    ParentDetach: 41,
    PrepareStore: 50,
    Store: 51,
    PrepareRestore: 52,
    Restore: 53,
    WorkspaceAttached: 60,
    WorkspaceDetach: 61
  }, h.BeforeInsertEvent = function (e) {
    this.node = e;
  }, a.inherit(h.BeforeInsertEvent, o), h.BeforeInsertEvent.prototype.node = null, h.BeforeInsertEvent.prototype.toString = function () {
    return "[Event GNode.BeforeInsertEvent]";
  }, h.AfterInsertEvent = function (e) {
    this.customObj = {}, this.node = e;
  }, a.inherit(h.AfterInsertEvent, o), h.AfterInsertEvent.prototype.node = null, h.AfterInsertEvent.prototype.customObj = null, h.AfterInsertEvent.prototype.toString = function () {
    return "[Event GNode.AfterInsertEvent]";
  }, h.BeforeRemoveEvent = function (e) {
    this.node = e, this.customObj = {};
  }, a.inherit(h.BeforeRemoveEvent, o), h.BeforeRemoveEvent.prototype.node = null, h.BeforeRemoveEvent.prototype.customObj = null, h.BeforeRemoveEvent.prototype.toString = function () {
    return "[Event GNode.BeforeRemoveEvent]";
  }, h.AfterRemoveEvent = function (e) {
    this.node = e;
  }, a.inherit(h.AfterRemoveEvent, o), h.AfterRemoveEvent.prototype.node = null, h.AfterRemoveEvent.prototype.toString = function () {
    return "[Event GNode.AfterRemoveEvent]";
  }, h.BeforePropertiesChangeEvent = function (e, t, i, n, r) {
    this.node = e, this.properties = t, this.values = i, this.custom = n, this.temporary = !!r;
  }, a.inherit(h.BeforePropertiesChangeEvent, o), h.BeforePropertiesChangeEvent.prototype.node = null, h.BeforePropertiesChangeEvent.prototype.properties = null, h.BeforePropertiesChangeEvent.prototype.values = null, h.BeforePropertiesChangeEvent.prototype.custom = null, h.BeforePropertiesChangeEvent.prototype.temporary = !1, h.BeforePropertiesChangeEvent.prototype.toString = function () {
    return "[Event GNode.BeforePropertiesChangeEvent]";
  }, h.AfterPropertiesChangeEvent = function (e, t, i, n, r) {
    this.node = e, this.properties = t, this.values = i, this.custom = n, this.customObj = {}, this.temporary = r;
  }, a.inherit(h.AfterPropertiesChangeEvent, o), h.AfterPropertiesChangeEvent.prototype.node = null, h.AfterPropertiesChangeEvent.prototype.properties = null, h.AfterPropertiesChangeEvent.prototype.values = null, h.AfterPropertiesChangeEvent.prototype.custom = null, h.AfterPropertiesChangeEvent.prototype.temporary = !1, h.AfterPropertiesChangeEvent.prototype.customObj = null, h.AfterPropertiesChangeEvent.prototype.toString = function () {
    return "[Event GNode.AfterPropertiesChangeEvent]";
  }, h.BeforeFlagChangeEvent = function (e, t, i) {
    this.node = e, this.flag = t, this.set = i;
  }, a.inherit(h.BeforeFlagChangeEvent, o), h.BeforeFlagChangeEvent.prototype.node = null, h.BeforeFlagChangeEvent.prototype.flag = null, h.BeforeFlagChangeEvent.prototype.set = null, h.BeforeFlagChangeEvent.prototype.toString = function () {
    return "[Event GNode.BeforeFlagChangeEvent]";
  }, h.AfterFlagChangeEvent = function (e, t, i) {
    this.node = e, this.flag = t, this.set = i;
  }, a.inherit(h.AfterFlagChangeEvent, o), h.AfterFlagChangeEvent.prototype.node = null, h.AfterFlagChangeEvent.prototype.flag = null, h.AfterFlagChangeEvent.prototype.set = null, h.AfterFlagChangeEvent.prototype.toString = function () {
    return "[Event GNode.AfterFlagChangeEvent]";
  }, h.BeforeSpecialChangeEvent = function (e, t) {
    this.node = e, this.data = t || null;
  }, a.inherit(h.BeforeSpecialChangeEvent, o), h.BeforeSpecialChangeEvent.prototype.node = null, h.BeforeSpecialChangeEvent.prototype.data = null, h.BeforeSpecialChangeEvent.prototype.toString = function () {
    return "[Event GNode.BeforeSpecialChangeEvent]";
  }, h.AfterSpecialChangeEvent = function (e, t) {
    this.node = e, this.data = t || null;
  }, a.inherit(h.AfterSpecialChangeEvent, o), h.AfterSpecialChangeEvent.prototype.node = null, h.AfterSpecialChangeEvent.prototype.data = null, h.AfterSpecialChangeEvent.prototype.toString = function () {
    return "[Event GNode.AfterSpecialChangeEvent]";
  }, h.AfterRestoreEvent = function (e) {
    this.node = e;
  }, a.inherit(h.AfterRestoreEvent, o), h.AfterRestoreEvent.prototype.node = null, h.AfterRestoreEvent.prototype.toString = function () {
    return "[Event GNode.AfterRestoreEvent]";
  }, h.Properties = function () {
  }, h.Properties.prototype.arePropertiesEqual = function (e, t, i) {
    for (var r = 0; r < t.length; ++r) {
      var o = t[r], a = this.hasProperty(o, i), s = e.hasProperty(o, i);
      if (a) {
        if (!s)
          return !1;
        if (!n.equals(this.getProperty(o, i), e.getProperty(o, i), !0))
          return !1;
      } else if (s)
        return !1;
    }
    return !0;
  }, h.Properties.prototype.hasProperty = function (e, t) {
    var i = (t ? "@" : "$") + e;
    return this.hasOwnProperty(i);
  }, h.Properties.prototype.getProperty = function (e, t, i, n) {
    var r = (t ? "@" : "$") + e, o = "#" + r;
    return !n && this.hasOwnProperty(o) ? this[o] : this.hasOwnProperty(r) ? this[r] : i;
  }, h.Properties.prototype.getProperties = function (e, t, i, n) {
    for (var r = [], o = 0; o < e.length; ++o) {
      var a = i && i.length > o ? i[o] : null;
      r.push(this.getProperty(e[o], t, a, n));
    }
    return r;
  }, h.Properties.prototype.resetTemporaryProperty = function (e, t) {
    return this.resetTemporaryProperties([e], t);
  }, h.Properties.prototype.resetTemporaryProperties = function (e, t) {
    for (var i = [], r = [], o = 0; o < e.length; ++o) {
      var a = "#" + (c = (t ? "@" : "$") + e[o]);
      if (this.hasOwnProperty(a)) {
        var s = this[c], l = this[a];
        n.equals(s, l, !1) || (i.push(e[o]), r.push(l));
      }
    }
    if (0 === i.length)
      return !1;
    this._notifyChange(h._Change.BeforePropertiesChange, {
      properties: i,
      values: r,
      custom: t,
      temporary: !0
    });
    var A = [];
    for (o = 0; o < i.length; ++o) {
      var c;
      a = "#" + (c = (t ? "@" : "$") + i[o]);
      A.push(this[c]), this[c] = r[o], delete this[a];
    }
    return this._notifyChange(h._Change.AfterPropertiesChange, {
      properties: i,
      values: A,
      custom: t,
      temporary: !0
    }), !0;
  }, h.Properties.prototype.setProperty = function (e, t, i, n, r) {
    return this.setProperties([e], [t], i, n, r);
  }, h.Properties.prototype.setProperties = function (e, t, i, r, o) {
    if (e.length !== t.length)
      throw new Error("Properties length does not match values length");
    for (var a = [], s = [], l = this.getTrackTempPropNames(), A = !1, c = [], p = i ? "@" : "$", u = 0; u < e.length; ++u) {
      var d = t[u], g = e[u], f = "#" + (y = p + g);
      !A && l && -1 !== l.indexOf(g) && (A = !0), !o && this.hasOwnProperty(f) && (this[y] = this[f], delete this[f]);
      var m = this[y];
      !r && n.equals(d, m, !1) || (a.push(g), s.push(d), c.push(m), o && !this.hasOwnProperty(f) && (this[f] = m));
    }
    if (0 === a.length)
      return !1;
    if (this._notifyChange(h._Change.BeforePropertiesChange, {
        properties: a,
        values: s,
        custom: i,
        temporary: o,
        forceEvent: A
      }), a.length > c.length)
      for (u = c.length; u < a.length; u++) {
        m = this[y = p + a[u]];
        c[u] = m;
      }
    for (u = 0; u < a.length; ++u) {
      var y;
      this[y = p + a[u]] = s[u];
    }
    var _ = this._workspace ? this._workspace.getTransactionRecorder() : null;
    return _ && _.afterSetProperties(this, a, c, s, o, i), this._notifyChange(h._Change.AfterPropertiesChange, {
      properties: a,
      values: c,
      custom: i,
      temporary: o,
      forceEvent: A
    }), !0;
  }, h.Properties.prototype.getTrackTempPropNames = function () {
    return null;
  }, h.Properties.prototype.storeProperties = function (e, t, i) {
    for (var r in (i = i || function (e, t) {
        return t;
      }, t)) {
      var o = t[r], a = i(r, this["$" + r]);
      n.equals(a, o, !0) || (e[r] = a);
    }
  }, h.Properties.prototype.restoreProperties = function (e, t, i) {
    i = i || function (e, t) {
      return t;
    };
    var n = [], r = [];
    for (var o in t)
      n.push(o), e.hasOwnProperty(o) ? r.push(i(o, e[o])) : r.push(t[o]);
    this.setProperties(n, r, !1);
  }, h.Properties.prototype.transferProperties = function (e, t, i) {
    for (var n = [], r = [], o = 0; o < t.length; ++o)
      for (var a in t[o])
        n.push(a), e.hasProperty(a) ? r.push(e.getProperty(a, !1, null, i)) : r.push(t[o][a]);
    this.setProperties(n, r, !1);
  }, h.Properties.prototype._setDefaultProperties = function () {
    var e, t, i, r;
    for (e = 0; e < arguments.length; ++e)
      for (r in t = arguments[e])
        !((i = t[r]) && i instanceof Object) || i instanceof a || i instanceof l || i instanceof Array || (i = n.extend(!0, {}, i)), this["$" + r] = i;
  }, h.Identity = function () {
  }, h.Identity.prototype.__id = null, h.Identity.prototype.getId = function () {
    return this.__id || (this.__id = n.uuid(6)), this.__id;
  }, h.Tag = function () {
  }, h.Tag.prototype.getTags = function () {
    throw new Error("Not Supported.");
  }, h.Reference = function () {
  }, h.Reference.prototype._referenceId = null, h.Reference.prototype._oldReferenceId = null, h.Reference.prototype.getOldReferenceId = function () {
    return this._oldReferenceId;
  }, h.Reference.prototype.getReferenceId = function () {
    return this._referenceId || (this._referenceId = n.uuid()), this._referenceId;
  }, h.Multireference = function () {
  }, h.Multireference.prototype._multiReferenceId = null, h.Multireference.prototype.getMultireferenceId = function () {
    return this._multiReferenceId || (this._multiReferenceId = n.uuid()), this._multiReferenceId;
  }, h.Multireference.prototype.resetMultireference = function () {
    this._multiReferenceId = null;
  }, h.Multireference.prototype.hasMultireference = function () {
    return null === this._multiReferenceId;
  }, h.Container = function () {
  }, h.Container.prototype._firstChild = null, h.Container.prototype._lastChild = null, h.Container.prototype.getChildren = function () {
    for (var e = [], t = this.getFirstChild(); null !== t; t = t.getNext())
      e.push(t);
    return e;
  }, h.Container.prototype.getFirstChild = function () {
    return this._firstChild;
  }, h.Container.prototype.getLastChild = function () {
    return this._lastChild;
  }, h.Container.prototype.appendChild = function (e) {
    this.insertChild(e, null);
  }, h.Container.prototype.insertChild = function (e, t) {
    if (null != e._parent)
      throw new Error("Child is already appended somewhere else");
    if (null != t && t.getParent() != this)
      throw new Error("Reference is not a child of this node");
    if (!e.validateInsertion(this, t))
      throw new Error("Child insertion validation failed.");
    this._notifyChange(h._Change.BeforeChildInsert, e), null != t ? (e._setNext(t), e._setPrevious(t._previous), t._setPrevious(e), null == e._previous ? this._firstChild = e : e._previous._setNext(e)) : (null != this._lastChild && (e._setPrevious(this._lastChild), this._lastChild._setNext(e), this._lastChild = e), e._setNext(null)), null == this._firstChild && (this._firstChild = e, e._setPrevious(null), e._setNext(null)), null == e._next && (this._lastChild = e), e._setParent(this);
    var i = this._workspace ? this._workspace.getTransactionRecorder() : null;
    i && i.afterChildInsert(e, this, e._next), this._notifyChange(h._Change.AfterChildInsert, e);
  }, h.Container.prototype.removeChild = function (e) {
    if (e._parent != this)
      throw new Error("Child is not a child of this node");
    if (!e.validateRemoval())
      throw new Error("Child removal validation failed.");
    this._notifyChange(h._Change.BeforeChildRemove, e);
    var t = this._workspace ? this._workspace.getTransactionRecorder() : null;
    t && t.beforeChildRemove(e, this, e._next), e._setParent(null), this._firstChild == e && (this._firstChild = e._next), this._lastChild == e && (this._lastChild = e._previous), null != e._previous && e._previous._setNext(e._next), null != e._next && e._next._setPrevious(e._previous), e._setPrevious(null), e._setNext(null), this._notifyChange(h._Change.AfterChildRemove, e);
  }, h.Container.prototype.clearChildren = function () {
    for (; this.getFirstChild();)
      this.removeChild(this.getFirstChild());
  }, h.Container.prototype.getIndexOfChild = function (e) {
    if (e._parent === this)
      for (var t = 0, i = this.getFirstChild(); null !== i; i = i.getNext()) {
        if (i === e)
          return t;
        t++;
      }
    return -1;
  }, h.Container.prototype.getChildByIndex = function (e) {
    for (var t = 0, i = this.getFirstChild(); null !== i; i = i.getNext()) {
      if (t === e)
        return i;
      t++;
    }
    return null;
  }, h.Container.prototype.acceptChildren = function (e, t, i, n) {
    var r, o = !i;
    if (t)
      for (var a = this.getLastChild(); null != a; a = a.getPrevious()) {
        if (!1 === (r = a.accept(e, t, i, n)) && !i)
          return !1;
        !0 === r && i && (o = !0);
      }
    else
      for (a = this.getFirstChild(); null != a; a = a.getNext()) {
        if (!1 === (r = a.accept(e, t, i, n)) && !i)
          return !1;
        !0 === r && i && (o = !0);
      }
    return o;
  }, h.Container.prototype.getSubnodeIds = function (e) {
    for (var t = this.getLastChild(); null !== t; t = t.getPrevious())
      t.hasMixin(h.Multireference) && (e[t.getMultireferenceId()] && t.resetMultireference(), e[t.getMultireferenceId()] = t), t.hasMixin(h.Container) && t.getSubnodeIds(e);
  }, h.Container.prototype.getInternalSelectedNodes = function () {
    var e = [];
    return this.acceptChildren(function (t) {
      return t.hasFlag(h.Flag.Selected) && e.push(t), !0;
    }, !1, !0), e.length ? e : null;
  }, h.Container.prototype.toString = function () {
    return "[Mixin GNode.Container]";
  }, h.Store = function () {
  }, h.Store.prototype.clone = function (e, t) {
    var i = h.serialize(this, e);
    return i ? h.deserialize(i, t) : null;
  }, h.MapContainer = function () {
    this._children = Object.create(null);
  }, h.inheritAndMix("MapContainer", h.MapContainer, h, [
    h.Store,
    h.Container
  ]), h.MapContainer.prototype._children = {}, h.MapContainer.prototype.insertChild = function (e, t) {
    if (null != e._parent)
      throw new Error("Child is already appended somewhere else");
    if (null != t && t.getParent() != this)
      throw new Error("Reference is not a child of this node");
    if (!e.validateInsertion(this, t))
      throw new Error("Child insertion validation failed.");
    this.isLocked() || (this._notifyChange(h._Change.BeforeChildInsert, e), null != t ? (e._setNext(t), e._setPrevious(t._previous), t._setPrevious(e), null == e._previous ? this._firstChild = e : e._previous._setNext(e)) : (null != this._lastChild && (e._setPrevious(this._lastChild), this._lastChild._setNext(e), this._lastChild = e), e._setNext(null)), null == this._firstChild && (this._firstChild = e, e._setPrevious(null), e._setNext(null)), null == e._next && (this._lastChild = e), e._setParent(this), this._children[e.getId()] = e, this._notifyChange(h._Change.AfterChildInsert, e));
  }, h.MapContainer.prototype.removeChild = function (e) {
    if (e._parent != this)
      throw new Error("Child is not a child of this node");
    if (!e.validateRemoval())
      throw new Error("Child removal validation failed.");
    this._notifyChange(h._Change.BeforeChildRemove, e), this._children[e.getId()] && (delete this._children[e.getId()], this._children || (this._children = Object.create(null))), this._firstChild == e && (this._firstChild = e._next), this._lastChild == e && (this._lastChild = e._previous), null != e._previous && e._previous._setNext(e._next), null != e._next && e._next._setPrevious(e._previous), e._setParent(null), e._setPrevious(null), e._setNext(null), this._notifyChange(h._Change.AfterChildRemove, e);
  }, h.MapContainer.prototype.getAsArray = function () {
    var e = Object.keys(this._children).length;
    if (!e)
      return null;
    for (var t = new Array(e), i = 0, n = this.getFirstChild(); i < e && n; ++i, n = n.getNext())
      t[i] = n;
    return t;
  }, h.MapContainer.prototype.getById = function (e) {
    return e && this._children[e] ? this._children[e] : null;
  }, h.MapContainer.prototype.toString = function () {
    return "[Mixin GNode.MapContainer]";
  }, h.prototype._workspace = null, h.prototype._parent = null, h.prototype._previous = null, h.prototype._next = null, h.prototype._flags = 0, h.prototype.restoreCount = 0, h.prototype._isRestoring = !1, h.prototype.recordedTransaction = !1, h.prototype.getNodeName = function () {
    return h.getName(this);
  }, h.prototype.getNodeNameTranslated = function () {
    return s.getValue(this, "name", this.getNodeName());
  }, h.prototype.getWorkspace = function () {
    return this._workspace;
  }, h.prototype.getParent = function () {
    return this._parent;
  }, h.prototype.getPrevious = function () {
    return this._previous;
  }, h.prototype.getNext = function () {
    return this._next;
  }, h.prototype.getNodesByName = function (e, t) {
    var i = [];
    return this.accept(function (t) {
      e && "*" != e && e !== t.getNodeName() || t !== this && i.push(t);
    }.bind(this)), i;
  }, h.prototype.accept = function (e, t, i, n) {
    var r = !1;
    if (!n && (r = e.call(null, this), !i && !1 === r))
      return r;
    if (this.hasMixin(h.Container)) {
      var o = this.acceptChildren(e, t, i, n);
      if (!i && !1 === o)
        return !1;
      r = r || o;
    }
    if (n) {
      var a = e.call(null, this);
      if (!i && !1 === a)
        return !1;
      r = r || a;
    }
    return r;
  }, h.prototype.findParent = function (e) {
    return this._parent ? !0 === e.call(null, this._parent) ? this._parent : this._parent.findParent(e) : null;
  }, h.prototype.hasFlag = function (e) {
    return 0 != (this._flags & e);
  }, h.prototype.setFlag = function (e) {
    if (this._canModifyFlag(e, !0) && 0 == (this._flags & e)) {
      this._notifyChange(h._Change.BeforeFlagChange, {
        flag: e,
        set: !0
      }), this._flags = this._flags | e;
      var t = this._workspace ? this._workspace.getTransactionRecorder() : null;
      t && t.afterFlagSet(this, e), this._notifyChange(h._Change.AfterFlagChange, {
        flag: e,
        set: !0
      });
    }
  }, h.prototype.removeFlag = function (e) {
    if (this._canModifyFlag(e, !1) && 0 != (this._flags & e)) {
      this._notifyChange(h._Change.BeforeFlagChange, {
        flag: e,
        set: !1
      }), this._flags = this._flags & ~e;
      var t = this._workspace ? this._workspace.getTransactionRecorder() : null;
      t && t.afterFlagRemove(this, e), this._notifyChange(h._Change.AfterFlagChange, {
        flag: e,
        set: !1
      });
    }
  }, h.prototype.assignFrom = function (e) {
    this.hasMixin(h.Multireference) && e.hasMixin(h.Multireference) && (this._multiReferenceId = e._multiReferenceId);
  }, h.prototype.validateInsertion = function (e, t) {
    return !1;
  }, h.prototype.validateRemoval = function () {
    return !0;
  }, h.prototype.isLocked = function () {
    return !!this._parent && this._parent.isLocked();
  }, h.prototype.isRestoring = function () {
    return !!this._isRestoring || null != this.findParent(function (e) {
      return e._isRestoring;
    });
  }, h.prototype.beginUpdate = function () {
  }, h.prototype.endUpdate = function (e) {
  }, h.prototype._blockUpdateChanges = function () {
  }, h.prototype._releaseUpdateChanges = function () {
  }, h.prototype._canModifyFlag = function (e, t) {
    return !0;
  }, h.prototype._beginBlockChanges = function (e, t) {
    this._blockedChanges || (this._blockedChanges = {}, this._blockedChanges._counter = 0);
    for (var i = 0; i < e.length; ++i) {
      var n = e[i];
      n in this._blockedChanges ? this._blockedChanges[n]++ : this._blockedChanges[n] = 1, this._blockedChanges._counter++;
    }
    var r = this._workspace ? this._workspace.getTransactionRecorder() : null;
    r && r.beginBlock(this, e, t);
  }, h.prototype._endBlockChanges = function (e, t) {
    if (this._blockedChanges)
      for (var i = 0; i < e.length; ++i) {
        var n = e[i];
        n in this._blockedChanges && this._blockedChanges[n] > 0 && 0 == --this._blockedChanges[n] && 0 == --this._blockedChanges._counter && delete this._blockedChanges;
      }
    var r = this._workspace ? this._workspace.getTransactionRecorder() : null;
    r && r.endBlock(this, e, t);
  }, h.prototype._beginBlockEvents = function (e) {
    this._blockedEvents || (this._blockedEvents = {}, this._blockedEvents._counter = 0);
    for (var t = 0; t < e.length; ++t) {
      var i = a.getTypeId(e[t]);
      i in this._blockedEvents ? this._blockedEvents[i]++ : this._blockedEvents[i] = 1, this._blockedEvents._counter++;
    }
  }, h.prototype._endBlockEvents = function (e) {
    if (this._blockedEvents)
      for (var t = 0; t < e.length; ++t) {
        var i = a.getTypeId(e[t]);
        i in this._blockedEvents && this._blockedEvents[i] > 0 && 0 == --this._blockedEvents[i] && 0 == --this._blockedEvents._counter && delete this._blockedEvents;
      }
  }, h.prototype._getCompositeEvents = function (e, t, i) {
    var n = [];
    return e && (n = n.concat([
      h.BeforeInsertEvent,
      h.AfterInsertEvent,
      h.BeforeRemoveEvent,
      h.AfterRemoveEvent
    ])), t && (n = n.concat([h.AfterPropertiesChangeEvent])), i && (n = n.concat([
      h.BeforeFlagChangeEvent,
      h.AfterFlagChangeEvent
    ])), n;
  }, h.prototype._beginBlockCompositeEvents = function (e, t, i) {
    this._beginBlockEvents(this._getCompositeEvents(e, t, i));
  }, h.prototype._endBlockCompositeEvents = function (e, t, i) {
    this._endBlockEvents(this._getCompositeEvents(e, t, i));
  }, h.prototype._notifyChange = function (e, t) {
    return (!this._blockedChanges || !this._blockedChanges[e]) && (this._handleChange(e, t), !0);
  }, h.prototype._canEventBeSent = function (e) {
    var t = a.getTypeId(e);
    return !this._blockedEvents || !this._blockedEvents[t];
  }, h.prototype._sendEvent = function (e) {
    var t = this;
    if (e.temporary)
      for ((t instanceof r || t.hasMixin(r)) && t.hasEventListeners(e.constructor) && t.trigger(e), t = t.getParent(); t; t = t.getParent())
        t.temporaryReceiver && (t.hasMixin(r) || t instanceof r) && t.hasEventListeners(e.constructor) && t.trigger(e);
    else
      for ((t instanceof r || t.hasMixin(r)) && t.hasEventListeners(e.constructor) && t.trigger(e), t = t.getParent(); t; t = t.getParent())
        (t.hasMixin(r) || t instanceof r) && t.hasEventListeners(e.constructor) && t.trigger(e);
  }, h.prototype._setWorkspace = function (e) {
    e !== this._workspace && (this._workspace && (this._notifyChange(h._Change.WorkspaceDetach), this.hasMixin(h.Reference) && this._workspace.removeReference(this), this._workspace = null), this._workspace = e, this._workspace && (this.hasMixin(h.Reference) && this._workspace.addReference(this), this._notifyChange(h._Change.WorkspaceAttached)));
  }, h.prototype._attachToParent = function (e) {
    e._workspace && this.accept(function (t) {
      t._setWorkspace(e._workspace);
    });
  }, h.prototype._detachFromParent = function (e) {
    e._workspace && this.accept(function (e) {
      e._setWorkspace(null);
    });
  }, h.prototype._setParent = function (e) {
    this._parent !== e && (this._parent && (this._notifyChange(h._Change.ParentDetach), this._detachFromParent(this._parent)), this._parent = e, this._parent && (this._attachToParent(this._parent), this._notifyChange(h._Change.ParentAttached)));
  }, h.prototype._setPrevious = function (e) {
    this._previous = e;
  }, h.prototype._setNext = function (e) {
    this._next = e;
  }, h.prototype.isRecordedTransaction = function () {
    return !!this.recordedTransaction || null != this.findParent(function (e) {
      return e.recordedTransaction;
    });
  }, h.prototype._handleChange = function (e, t) {
    if (e === h._Change.PrepareRestore)
      this._isRestoring = !0;
    else if (e === h._Change.Restore)
      this._isRestoring = !1, this._canEventBeSent(h.AfterRestoreEvent) && this._sendEvent(new h.AfterRestoreEvent(this));
    else if (e == h._Change.BeforeChildInsert) {
      var i = t;
      this._canEventBeSent(h.BeforeInsertEvent) && this._sendEvent(new h.BeforeInsertEvent(i));
    } else if (e == h._Change.AfterChildInsert) {
      i = t;
      this._canEventBeSent(h.AfterInsertEvent) && this._sendEvent(new h.AfterInsertEvent(i));
    } else if (e == h._Change.BeforeChildRemove) {
      i = t;
      this._canEventBeSent(h.BeforeRemoveEvent) && this._sendEvent(new h.BeforeRemoveEvent(i));
    } else if (e == h._Change.AfterChildRemove) {
      i = t;
      this._canEventBeSent(h.AfterRemoveEvent) && this._sendEvent(new h.AfterRemoveEvent(i));
    } else if (e == h._Change.BeforePropertiesChange) {
      (n = t).forceEvent && this._canEventBeSent(h.BeforePropertiesChangeEvent) ? this._sendEvent(new h.BeforePropertiesChangeEvent(this, n.properties, n.values, n.custom, n.temporary)) : !n.temporary && this._canEventBeSent(h.BeforePropertiesChangeEvent) && this._sendEvent(new h.BeforePropertiesChangeEvent(this, n.properties, n.values, n.custom));
    } else if (e == h._Change.AfterPropertiesChange) {
      var n = t;
      this._canEventBeSent(h.AfterPropertiesChangeEvent) && (n.forceEvent, this._sendEvent(new h.AfterPropertiesChangeEvent(this, n.properties, n.values, n.custom, n.temporary)));
    } else if (e == h._Change.BeforeFlagChange) {
      var r = t;
      this._canEventBeSent(h.BeforeFlagChangeEvent) && this._sendEvent(new h.BeforeFlagChangeEvent(this, r.flag, r.set));
    } else if (e == h._Change.AfterFlagChange) {
      r = t;
      this._canEventBeSent(h.AfterFlagChangeEvent) && this._sendEvent(new h.AfterFlagChangeEvent(this, r.flag, r.set));
    }
  }, i(894)(h), e.exports = h;
}
