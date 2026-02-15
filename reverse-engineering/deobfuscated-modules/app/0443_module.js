/**
 * Webpack Module #443
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(19) /* module_19 */,
      n(557) /* module_557 */,
      n(26) /* module_26 */,
      Object.defineProperty(t, "__esModule", { value: true }),
      (t.default = undefined),
      n(8) /* module_8 */;
    var o = (function (e, t) {
      if ("function" == typeof WeakMap)
        var n = new WeakMap(),
          o = new WeakMap();
      return (function (e, t) {
        if (!t && e && e.__esModule) return e;
        var i,
          a,
          r = { __proto__: null, default: e };
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return r;
        if ((i = t ? o : n)) {
          if (i.has(e)) return i.get(e);
          i.set(e, r);
        }
        for (const t in e)
          "default" !== t &&
            {}.hasOwnProperty.call(e, t) &&
            ((a =
              (i = Object.defineProperty) &&
              Object.getOwnPropertyDescriptor(e, t)) &&
            (a.get || a.set)
              ? i(r, t, a)
              : (r[t] = e[t]));
        return r;
      })(e, t);
    })(n(1480) /* Action_id */);
    const i = n(10) /* module_10 */;
    let a = false,
      r = false,
      s = null;
    const l = {
      TeamsMode: {
        DESKTOP: { label: "Desktop", code: "desktop" },
        WEB: { label: "Web", code: "web" },
        IOS: { label: "Ios", code: "ios" },
        ANDROID: { label: "Android", code: "android" },
        OTHER: { label: "Other" },
      },
      isExecutingOnMSTeams: async () => {
        const e = await l.getTeamsContext().catch(() => false);
        return !!e && !!e.tid;
      },
      getTeamsEnv: async function () {
        switch ((s || (await l.initTeams()), s.hostClientType)) {
          case l.TeamsMode.DESKTOP.code:
            return l.TeamsMode.DESKTOP.label;
          case l.TeamsMode.WEB.code:
            return l.TeamsMode.WEB.label;
          default:
            return l.TeamsMode.OTHER.label;
        }
      },
      isExecutingOnChannelOrChat: async () =>
        !!(await l.isExecutingOnMSTeams()) &&
        (!!(await l.isPrivateChat()) || !!(await l.isTeamsChannel())),
      isExecutingOnChannelOrChatSingletonPromise: () => r,
      initTeams: () => {
        if (s) return Promise.resolve();
        const e = i.msTeamsMode ? 15e3 : 0;
        return new Promise((t, n) => {
          const i = setTimeout(() => {
            n();
          }, e);
          o.initialize(() => {
            o.getContext((e) => {
              (s = e), clearTimeout(i), t();
            });
          });
        });
      },
      getTeamsContext: async () => (s || (await l.initTeams()), s),
      getTeamsLocale: async () => (s || (await l.initTeams()), s.locale),
      isPrivateChat: async () => !!(await l.getTeamsContext()).chatId,
      isTeamsChannel: async () => !!(await l.getTeamsContext()).channelId,
      sendSettings: async (e) => (
        s || (await l.initTeams()), o.authentication.notifySuccess(e)
      ),
      getAuthenticator: async () => (
        s || (await l.initTeams()), o.authentication
      ),
      isExecutingOnMSTeamsSync: () => a,
    };
    l.isExecutingOnMSTeams().then((e) => {
      a = e;
    }),
      (r = l.isExecutingOnChannelOrChat());
    t.default = l;
  }