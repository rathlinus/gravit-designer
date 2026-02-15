const express = require("express");
const path = require("path");
const fs = require("fs-extra");
const WebSocket = require("ws");
const http = require("http");

const app = express();
const port = 3100;
const publicDir = path.join(__dirname, "public");
const docsDir = path.join(__dirname, "docs");

// ── Logging middleware (BEFORE routes so all requests are logged) ────
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve static files from public - no caching for dev builds
app.use(express.static(publicDir, {
  etag: false,
  lastModified: false,
  setHeaders: (res) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  }
}));

// Serve docs at /docs
app.use('/docs', express.static(docsDir));
app.use(express.json());

const server = http.createServer(app);

// ── WebSocket ───────────────────────────────────────────────
// App sets websocketURL = origin + "/license", then gApi.listen("/license", cb)
// appends "/license" again → client connects to /license/license?lang=N
const wss = new WebSocket.Server({ noServer: true });

server.on("upgrade", (req, socket, head) => {
  // Accept any path starting with /license
  if (req.url.startsWith("/license")) {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit("connection", ws, req);
    });
  } else {
    socket.destroy();
  }
});

wss.on("connection", (ws, req) => {
  console.log(`[WS] Connected: ${req.url}`);

  ws.on("message", (message) => {
    try {
      const parsed = JSON.parse(message.toString());
      if (parsed.name === "ping") {
        ws.send(JSON.stringify({ name: "pong" }));
      } else {
        console.log("[WS] Unhandled:", parsed);
      }
    } catch (e) {
      console.warn("[WS] Invalid JSON:", message.toString());
    }
  });

  ws.on("close", () => {
    console.log("[WS] Closed");
  });
});

// ── Language helpers ────────────────────────────────────────
const langCodeMap = {
  0: "de-DE", 1: "en", 2: "zh-CN", 3: "pt-BR", 4: "es-ES",
  5: "fr-FR", 6: "pl-PL", 7: "ru-RU", 8: "tr-TR", 9: "cs-CZ",
  10: "zh-TW", 11: "it-IT", 12: "ja-JP", 13: "nl-NL", 14: "sv-SE",
};

function getLang(req) {
  return langCodeMap[req.query.lang] || "en";
}

function mockUser(lang) {
  return {
    id: "12345678",
    email: "example@example.net",
    email_verified: true,
    email_expire: null,
    login: null,
    name: "Test User",
    avatar: "https://gravatar.com/avatar/2b6848a6719e6c2e6747d506d1ff57b3?s=64&d=retro",
    admin: null,
    flash: null,
    last_seen: new Date().toISOString(),
    app: "designer",
    last_update: new Date().toISOString(),
    stats: {},
    address: "", city: "", zip: "", state: "", country: "",
    trial_created: "2021-09-22T19:58:35.018Z",
    trial_expire: "2099-10-07T19:58:35.018Z",
    pro_created: null,
    pro_expire: null,
    created: "2021-09-22T19:58:32.748Z",
    last_name: "",
    settings: {
      flags: {
        welcomeMessage: false, proOfferSpecialPrice: false,
        windowsStoreAnnouncement: false,
        proOfferInTrialExpireSoon: false, proOfferInTrialLastWarning: false,
      },
      quotas: { pro: null, free: null },
      license: { offlineExpirationTime: 1296000000, offlineCountdown: 604800000 },
      reminders: {
        offlineWarning: 86400000, proOfferInFree: 1296000000,
        proOfferInTrial: 432000000, proOfferInTrialExpired: 1296000000,
        proOfferInTrialExpireSoon: 86400000, proOfferInTrialLastWarning: 0,
        proOfferSpecialPrice: 0, proExpireSoon: 2592000000,
      },
      trialDays: 15,
      subscription: {
        annual: { coupon: "Trial20", productId: null },
        extraParameters: { "x-at": null, "x-clickref": null },
      },
      notifications_disabled: false,
    },
    runtime: "Browser",
    locale: lang,
    user_type: "normal",
    deactivated: false,
    legacy: false,
    guest_created: null,
    guest_expire: null,
    version: "3.15.0",
  };
}

// ── API Routes ──────────────────────────────────────────────

// Connection test
app.head("/connection/test", (req, res) => res.send("OK"));
app.get("/connection/test", (req, res) => res.send("OK"));

// Maintenance status
app.get("/maintenance/status", (req, res) => {
  res.json({ isMaintenanceEnabled: false, message: null });
});

// User settings (must be before /user/:id to avoid route shadowing)
app.get("/user/settings", (req, res) => {
  res.json({
    notifications_disabled: false,
    trialDays: 15,
    quotas: { free: null, pro: null },
    subscription: {
      annual: { productId: null, coupon: "Trial20" },
      extraParameters: { "x-at": null, "x-clickref": null },
    },
    license: { offlineExpirationTime: 1296000000, offlineCountdown: 604800000 },
    reminders: {
      offlineWarning: 86400000, proOfferInFree: 1296000000,
      proOfferInTrial: 432000000, proOfferInTrialExpired: 1296000000,
      proOfferInTrialExpireSoon: 86400000, proOfferInTrialLastWarning: 0,
      proOfferSpecialPrice: 0, proExpireSoon: 2592000000,
    },
    flags: {
      welcomeMessage: false, windowsStoreAnnouncement: false,
      proOfferSpecialPrice: false,
      proOfferInTrialExpireSoon: true, proOfferInTrialLastWarning: true,
    },
  });
});
app.put("/user/settings", (req, res) => res.json({ success: true }));

// User CRUD
app.get("/user", (req, res) => res.json(mockUser(getLang(req))));
app.put("/user", (req, res) => {
  const locale = req.body?.locale || "en";
  res.json(mockUser(locale));
});

// i18n locale URL — app fetches translation JSON from CDN
app.get("/i18n-url/:locale/:app", (req, res) => {
  const { locale, app: appName } = req.params;
  res.json({
    url: `https://d2mocl49mz6ak6.cloudfront.net/production/locale/${locale}/${appName}.json`,
  });
});

// License (REST)
app.get("/license", (req, res) => {
  res.json({
    type: "pro",
    status: "active",
    trial: true,
    trial_expire: "2099-10-07T19:58:35.018Z",
    pro_expire: null,
    features: [],
  });
});

// Subscription test — status:1 means subscriptions enabled
app.get("/subscription/test", (req, res) => res.json({ status: 1 }));
app.get("/subscription/nextbillingdate", (req, res) => res.json({ date: null }));
app.get("/subscription/lifetime", (req, res) => res.json({ lifetime: false }));
app.get("/ever-subscribed", (req, res) => res.json({ subscribed: false }));
app.get("/total-subscription-days", (req, res) => res.json({ days: 0 }));

// Software release — return current=latest so no update prompt
app.get("/software/release", (req, res) => {
  const current = req.query.current || "3.15.0";
  res.json({ version: current, latest: current, url: null, notes: null, mandatory: false });
});

// Files
app.get("/file", (req, res) => res.json([]));
app.post("/file", (req, res) => res.json({ id: "new-file-id", success: true }));
app.get("/file/:id", (req, res) => res.status(404).json({ error: "not_found" }));
app.put("/file/:id", (req, res) => res.json({ success: true }));
app.delete("/file/:id", (req, res) => res.json({ success: true }));
app.post("/file/:id/access", (req, res) => res.json({ success: true }));

// Autosave
app.get("/file/:id/autosave/versions", (req, res) => res.json([]));
app.get("/file/:id/autosave", (req, res) => res.status(404).json({}));
app.put("/file/:id/autosave", (req, res) => res.json({ success: true }));
app.post("/file/:id/autosave/commit", (req, res) => res.json({ success: true }));
app.post("/file/:id/manual/commit", (req, res) => res.json({ success: true }));

// Annotations
app.get("/file/:id/annotations", (req, res) => res.json([]));
app.put("/file/:id/annotations", (req, res) => res.json({ success: true }));
app.get("/file/:id/annotations/history", (req, res) => res.json([]));
app.get("/file/:id/annotations/history/design", (req, res) => res.json([]));

// Collaborators & versions
app.get("/file/:id/collaborators", (req, res) => res.json([]));
app.get("/file/:id/versions", (req, res) => res.json([]));
app.get("/file/:id/versions/type/:type", (req, res) => res.json([]));

// Comments
app.get("/file/:id/comment", (req, res) => res.json([]));
app.post("/file/:id/comment", (req, res) => res.json({ id: "comment-1" }));

// Sharing
app.get("/share/:token", (req, res) => res.status(404).json({ error: "not_found" }));
app.get("/sharing/statistics", (req, res) => res.json({ total: 0, shared: 0 }));

// Quota
app.get("/quota", (req, res) => res.json({ quota: { used: 0, limit: 1073741824 } }));

// Trial
app.post("/activate-trial", (req, res) => res.json({ success: true }));
app.post("/activate-trial/:token", (req, res) => res.json({ success: true }));
app.post("/reset-trial", (req, res) => res.json({ success: true }));

// Geo
app.get("/geo/me", (req, res) => res.json({ country: "US", region: null }));

// Newsletter
app.get("/newsletter/required", (req, res) => res.json({ result: 0 }));

// Recaptcha
app.get("/recaptchakey", (req, res) => res.json({ key: "" }));

// Client configuration
app.get("/client/configuration", (req, res) => res.json({}));

// Confirm email
app.get("/confirm-email/:token", (req, res) => res.json({ success: true }));
app.post("/resend-confirm-email", (req, res) => res.json({ success: true }));

// Market / example files
app.get("/market", (req, res) => res.json([]));
app.get("/v2/market", (req, res) => res.json([]));
app.get("/example-files", (req, res) => res.json([]));

// Unsplash
app.get("/unsplash/featured", (req, res) => res.json([]));
app.get("/unsplash/search/photos", (req, res) => res.json([]));
app.get("/unsplash/download/photo", (req, res) => res.json({}));

// Purchases / payment
app.get("/purchases", (req, res) => res.json([]));
app.get("/purchase/:id", (req, res) => res.status(404).json({}));
app.get("/purchase/products", (req, res) => res.json([]));
app.get("/payment/:provider/product", (req, res) => res.json({}));

// Coupons
app.get("/coupon/activate/:code", (req, res) => res.json({ success: true }));

// Cloud services
app.get("/cloudservices/googledrive/access", (req, res) => res.json({}));
app.get("/cloudservices/googledrive/configuration", (req, res) => res.json({}));

// Anonymous tokens
app.get("/anonymous/token", (req, res) => res.json([]));
app.put("/anonymous/token", (req, res) => res.json({ token: "anon-token" }));
app.delete("/anonymous/token/:id", (req, res) => res.json({ success: true }));

// Auth stubs
app.post("/signin", (req, res) => res.json(mockUser("en")));
app.post("/signup", (req, res) => res.json(mockUser("en")));
app.get("/signout", (req, res) => res.json({ success: true }));
app.post("/reset-password", (req, res) => res.json({ success: true }));
app.post("/reset-password/:token", (req, res) => res.json({ success: true }));

// Lock service
app.post("/lock/file/:id", (req, res) => res.json({ acquired: true }));
app.delete("/lock/file/:id", (req, res) => res.json({ released: true }));

// Diagnostics
app.post("/report/diagnostic", (req, res) => res.json({ success: true }));

// Catch /null requests (app sometimes constructs null URLs)
app.all("/null", (req, res) => res.json(null));

// Catch-all for unhandled API paths — return empty JSON instead of 404 HTML
app.use((req, res, next) => {
  // Only catch API-like requests (not static files)
  if (!req.path.match(/\.\w+$/) && req.path !== "/") {
    console.log(`[UNHANDLED] ${req.method} ${req.url} → returning empty JSON`);
    return res.json({});
  }
  next();
});

// ── Start server (use server.listen so WebSocket upgrade works) ─────
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`WebSocket available at ws://localhost:${port}/license/license`);
});
