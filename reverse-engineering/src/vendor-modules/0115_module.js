/**
 * chunk.vendor.js Module #115
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      var n = i(105),
        r = i(377).encode,
        o = i(377).sizeOf;

      function a(e, t, i) {
        var n;
        for (n = 0; n < t.length; n += 1) {
          var r = t[n];
          this[r.name] = r.value;
        }
        if (((this.tableName = e), (this.fields = t), i)) {
          var o = Object.keys(i);
          for (n = 0; n < o.length; n += 1) {
            var a = o[n],
              s = i[a];
            void 0 !== this[a] && (this[a] = s);
          }
        }
      }

      function s(e, t, i) {
        void 0 === i && (i = t.length);
        var n = new Array(t.length + 1);
        n[0] = {
          name: e + "Count",
          type: "USHORT",
          value: i,
        };
        for (var r = 0; r < t.length; r++)
          n[r + 1] = {
            name: e + r,
            type: "USHORT",
            value: t[r],
          };
        return n;
      }

      function l(e, t, i) {
        var n = t.length,
          r = new Array(n + 1);
        r[0] = {
          name: e + "Count",
          type: "USHORT",
          value: n,
        };
        for (var o = 0; o < n; o++)
          r[o + 1] = {
            name: e + o,
            type: "TABLE",
            value: i(t[o], o),
          };
        return r;
      }

      function h(e, t, i) {
        var n = t.length,
          r = [];
        r[0] = {
          name: e + "Count",
          type: "USHORT",
          value: n,
        };
        for (var o = 0; o < n; o++) r = r.concat(i(t[o], o));
        return r;
      }

      function A(e) {
        1 === e.format
          ? a.call(
              this,
              "coverageTable",
              [
                {
                  name: "coverageFormat",
                  type: "USHORT",
                  value: 1,
                },
              ].concat(s("glyph", e.glyphs)),
            )
          : n.assert(!1, "Can't create coverage table format 2 yet.");
      }

      function c(e) {
        a.call(
          this,
          "scriptListTable",
          h("scriptRecord", e, function (e, t) {
            var i = e.script,
              r = i.defaultLangSys;
            return (
              n.assert(
                !!r,
                "Unable to write GSUB: script " +
                  e.tag +
                  " has no default language system.",
              ),
              [
                {
                  name: "scriptTag" + t,
                  type: "TAG",
                  value: e.tag,
                },
                {
                  name: "script" + t,
                  type: "TABLE",
                  value: new a(
                    "scriptTable",
                    [
                      {
                        name: "defaultLangSys",
                        type: "TABLE",
                        value: new a(
                          "defaultLangSys",
                          [
                            {
                              name: "lookupOrder",
                              type: "USHORT",
                              value: 0,
                            },
                            {
                              name: "reqFeatureIndex",
                              type: "USHORT",
                              value: r.reqFeatureIndex,
                            },
                          ].concat(s("featureIndex", r.featureIndexes)),
                        ),
                      },
                    ].concat(
                      h("langSys", i.langSysRecords, function (e, t) {
                        var i = e.langSys;
                        return [
                          {
                            name: "langSysTag" + t,
                            type: "TAG",
                            value: e.tag,
                          },
                          {
                            name: "langSys" + t,
                            type: "TABLE",
                            value: new a(
                              "langSys",
                              [
                                {
                                  name: "lookupOrder",
                                  type: "USHORT",
                                  value: 0,
                                },
                                {
                                  name: "reqFeatureIndex",
                                  type: "USHORT",
                                  value: i.reqFeatureIndex,
                                },
                              ].concat(s("featureIndex", i.featureIndexes)),
                            ),
                          },
                        ];
                      }),
                    ),
                  ),
                },
              ]
            );
          }),
        );
      }

      function p(e) {
        a.call(
          this,
          "featureListTable",
          h("featureRecord", e, function (e, t) {
            var i = e.feature;
            return [
              {
                name: "featureTag" + t,
                type: "TAG",
                value: e.tag,
              },
              {
                name: "feature" + t,
                type: "TABLE",
                value: new a(
                  "featureTable",
                  [
                    {
                      name: "featureParams",
                      type: "USHORT",
                      value: i.featureParams,
                    },
                  ].concat(s("lookupListIndex", i.lookupListIndexes)),
                ),
              },
            ];
          }),
        );
      }

      function u(e, t) {
        a.call(
          this,
          "lookupListTable",
          l("lookup", e, function (e) {
            var i = t[e.lookupType];
            return (
              n.assert(
                !!i,
                "Unable to write GSUB lookup type " + e.lookupType + " tables.",
              ),
              new a(
                "lookupTable",
                [
                  {
                    name: "lookupType",
                    type: "USHORT",
                    value: e.lookupType,
                  },
                  {
                    name: "lookupFlag",
                    type: "USHORT",
                    value: e.lookupFlag,
                  },
                ].concat(l("subtable", e.subtables, i)),
              )
            );
          }),
        );
      }
      ((a.prototype.encode = function () {
        return r.TABLE(this);
      }),
        (a.prototype.sizeOf = function () {
          return o.TABLE(this);
        }),
        (A.prototype = Object.create(a.prototype)),
        (A.prototype.constructor = A),
        (c.prototype = Object.create(a.prototype)),
        (c.prototype.constructor = c),
        (p.prototype = Object.create(a.prototype)),
        (p.prototype.constructor = p),
        (u.prototype = Object.create(a.prototype)),
        (u.prototype.constructor = u),
        (t.Record = t.Table = a),
        (t.Coverage = A),
        (t.ScriptList = c),
        (t.FeatureList = p),
        (t.LookupList = u),
        (t.ushortList = s),
        (t.tableList = l),
        (t.recordList = h));
    }