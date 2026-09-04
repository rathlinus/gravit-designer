/**
 * chunk.vendor.js Module #471
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2);

      function r() {}
      ((r.ActionType = {
        PropertyChange: 0,
        FlagSet: 1,
        FlagRemove: 2,
        Insert: 3,
        Remove: 4,
        Special: 5,
        BeginBlock: 6,
        EndBlock: 7,
        BeginSelectionUpdate: 8,
        FinishSelectionUpdate: 9,
      }),
        (r.prototype._transactionActions = null),
        (r.prototype._debugOn = !1),
        (r.prototype._debugBugged = !1),
        (r.prototype.getDebugBugged = function () {
          return this._debugBugged;
        }),
        (r.prototype.beginTransaction = function (e) {
          ((this._transactionActions = []),
            (this._debugOn = !!e),
            (this._debugBugged = !1));
        }),
        (r.prototype.endTransaction = function () {
          var e = this._transactionActions;
          return ((this._transactionActions = null), e);
        }),
        (r.prototype.afterSetProperties = function (e, t, i, n, o, a) {
          !o &&
            this._transactionActions &&
            (this._transactionActions.push({
              isPropertyChangeAction: !0,
              node: e,
              properties: t.slice(),
              values: n,
              oldValues: i.slice(),
              custom: a,
              action: function () {
                var t = !1;
                (e.isRecordedTransaction &&
                  "function" == typeof e.isRecordedTransaction &&
                  !e.isRecordedTransaction() &&
                  ((e.recordedTransaction = !0), (t = !0)),
                  e.setProperties(this.properties, this.values, this.custom),
                  t && (e.recordedTransaction = !1));
              },
              revert: function () {
                var t = !1;
                (e.isRecordedTransaction &&
                  "function" == typeof e.isRecordedTransaction &&
                  !e.isRecordedTransaction() &&
                  ((e.recordedTransaction = !0), (t = !0)),
                  e.setProperties(this.properties, this.oldValues, this.custom),
                  t && (e.recordedTransaction = !1));
              },
            }),
            this._addDebugData(r.ActionType.PropertyChange, e));
        }),
        (r.prototype.afterChildInsert = function (e, t, i) {
          this._transactionActions &&
            (this._transactionActions.push({
              action: function () {
                t.insertChild(e, i);
              },
              revert: function () {
                t.removeChild(e);
              },
            }),
            this._addDebugData(r.ActionType.Insert, e, t, i));
        }),
        (r.prototype.beforeChildRemove = function (e, t, i) {
          this._transactionActions &&
            (this._transactionActions.push({
              action: function () {
                t.removeChild(e);
              },
              revert: function () {
                t.insertChild(e, i);
              },
            }),
            this._addDebugData(r.ActionType.Remove, e, t, i));
        }),
        (r.prototype.afterFlagSet = function (e, t) {
          this._transactionActions &&
            t === n.Flag.Active &&
            (this._transactionActions.push({
              action: function () {
                e.setFlag(n.Flag.Active);
              },
              revert: function () {
                e.removeFlag(n.Flag.Active);
              },
            }),
            this._addDebugData(r.ActionType.FlagSet, e));
        }),
        (r.prototype.afterFlagRemove = function (e, t) {
          this._transactionActions &&
            t === n.Flag.Active &&
            (this._transactionActions.push({
              action: function () {
                e.removeFlag(n.Flag.Active);
              },
              revert: function () {
                e.setFlag(n.Flag.Active);
              },
            }),
            this._addDebugData(r.ActionType.FlagRemove, e));
        }),
        (r.prototype.beginBlock = function (e, t, n) {
          if (this._transactionActions) {
            var o = i(22);
            (this._transactionActions.push({
              withInvalidation: !!n && n[0],
              noGeometryInvalidation: !!n && n[1],
              changes: t.slice(),
              action: function () {
                if (this.withInvalidation) {
                  var t = !1;
                  (e.isRecordedTransaction &&
                    "function" == typeof e.isRecordedTransaction &&
                    !e.isRecordedTransaction() &&
                    ((e.recordedTransaction = !0), (t = !0)),
                    e._notifyChange(o._Change.PrepareGeometryUpdate),
                    t && (e.recordedTransaction = !1));
                }
                e._beginBlockChanges(this.changes);
              },
              revert: function () {
                if ((e._endBlockChanges(this.changes), this.withInvalidation)) {
                  var t = !1;
                  (e.isRecordedTransaction &&
                    "function" == typeof e.isRecordedTransaction &&
                    !e.isRecordedTransaction() &&
                    ((e.recordedTransaction = !0), (t = !0)),
                    e._notifyChange(
                      o._Change.FinishGeometryUpdate,
                      this.noGeometryInvalidation ? -1 : 0,
                    ),
                    e.hasMixin(o.Accelerated) && e._updateQTree(),
                    t && (e.recordedTransaction = !1));
                }
              },
            }),
              this._addDebugData(r.ActionType.BeginBlock, e));
          }
        }),
        (r.prototype.endBlock = function (e, t, n) {
          if (this._transactionActions) {
            var o = i(22);
            (this._transactionActions.push({
              withInvalidation: !!n && n[0],
              noGeometryInvalidation: !!n && n[1],
              changes: t.slice(),
              action: function () {
                if ((e._endBlockChanges(this.changes), this.withInvalidation)) {
                  var t = !1;
                  (e.isRecordedTransaction &&
                    "function" == typeof e.isRecordedTransaction &&
                    !e.isRecordedTransaction() &&
                    ((e.recordedTransaction = !0), (t = !0)),
                    e._notifyChange(
                      o._Change.FinishGeometryUpdate,
                      this.noGeometryInvalidation ? -1 : 0,
                    ),
                    e.hasMixin(o.Accelerated) && e._updateQTree(),
                    t && (e.recordedTransaction = !1));
                }
              },
              revert: function () {
                if (this.withInvalidation) {
                  var t = !1;
                  (e.isRecordedTransaction &&
                    "function" == typeof e.isRecordedTransaction &&
                    !e.isRecordedTransaction() &&
                    ((e.recordedTransaction = !0), (t = !0)),
                    e._notifyChange(o._Change.PrepareGeometryUpdate),
                    t && (e.recordedTransaction = !1));
                }
                e._beginBlockChanges(this.changes);
              },
            }),
              this._addDebugData(r.ActionType.EndBlock, e));
          }
        }),
        (r.prototype.beginSelectionUpdate = function (e) {
          this._transactionActions &&
            this._transactionActions.push({
              action: function () {
                e._beginSelectionUpdate();
              },
              revert: function () {
                e._finishSelectionUpdate();
              },
            });
        }),
        (r.prototype.finishSelectionUpdate = function (e) {
          this._transactionActions &&
            this._transactionActions.push({
              action: function () {
                e._finishSelectionUpdate();
              },
              revert: function () {
                e._beginSelectionUpdate();
              },
            });
        }),
        (r.prototype.afterTBoxCenterTransform = function (e, t, i, n, r) {
          this._transactionActions &&
            this._transactionActions.push({
              action: function () {
                var t = e.__editor__ ? e.__editor__ : null;
                if (t) {
                  var i = t.getTransformBox();
                  i && 0 !== t.getTBoxMode() && i.setCenter(n, r);
                }
              },
              revert: function () {
                var n = e.__editor__ ? e.__editor__ : null;
                if (n) {
                  var r = n.getTransformBox();
                  r && 0 != n.getTBoxMode() && r.setCenter(t, i);
                }
              },
            });
        }),
        (r.prototype.afterTBoxChange = function (e, t, i) {
          this._transactionActions &&
            this._transactionActions.push({
              action: function () {
                var t = e.__editor__ ? e.__editor__ : null;
                t && 0 != t.getTBoxMode() && (t._transformBox = i);
              },
              revert: function () {
                var i = e.__editor__ ? e.__editor__ : null;
                i && 0 != i.getTBoxMode() && (i._transformBox = t);
              },
            });
        }),
        (r.prototype.afterSpecialChange = function (e, t) {
          this._transactionActions &&
            e.getTransactionAction &&
            "function" == typeof e.getTransactionAction &&
            e.getTransactionRevertAction &&
            "function" == typeof e.getTransactionRevertAction &&
            (this._transactionActions.push({
              action: e.getTransactionAction(t),
              revert: e.getTransactionRevertAction(t),
            }),
            this._addDebugData(r.ActionType.Special, e, null, null, t));
        }));
      var o = null;
      ((r.prototype._getSeqId = function (e) {
        for (var t = e; !t.getScene; ) t = t.getParent();
        if ("function" != typeof t.getScene) return -1;
        var i = t.getScene();
        if (!i) return -1;
        if (e === i) return -10;
        if (!o) {
          var n = {};
          (i.getSubnodeIds(n), (o = Object.values(n)));
        }
        var r = o.indexOf(e);
        if (r < 0) throw new Error("Couldn't determine node's sequence ID");
        return r;
      }),
        (r.prototype._addDebugData = function (e, t, i, a, s) {
          if (this._debugOn) {
            if (this._debugBugged) return;
            o = null;
            try {
              var l =
                this._transactionActions[this._transactionActions.length - 1];
              (e === r.ActionType.BeginSelectionUpdate ||
                e === r.ActionType.FinishSelectionUpdate ||
                (e === r.ActionType.Insert
                  ? ((l.action.node = t), (l.action.nodeStored = n.store(t)))
                  : (l.action.node = this._getSeqId(t))),
                (l.action.parent = i ? this._getSeqId(i) : null),
                (l.action.next = a ? this._getSeqId(t) : null),
                (l.action.type = e),
                l.node && (l.node = l.action.node),
                s && (l.action.data = t.getTransactionActionSerialized(s)));
            } catch (e) {
              ((this._debugBugged = !0),
                console.error("Warning: cannot add debug data"));
            }
          }
        }),
        (r.prototype.toString = function () {
          return "[GTransactionRecorder]";
        }),
        (e.exports = r));
    }