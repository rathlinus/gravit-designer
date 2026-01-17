const express = require("express");
const path = require("path");
const fs = require("fs-extra");
const axios = require("axios");
const WebSocket = require("ws");
const http = require("http");

const app = express();
const port = 3100;
const publicDir = path.join(__dirname, "public");

app.use(express.static(publicDir));
app.use(express.json());

const server = http.createServer(app);

const wss = new WebSocket.Server({
  server,
  path: "/license",
  verifyClient: (info, done) => {
    const origin = info.req.headers.origin;
    if (origin === "https://app.corelvector.com" || true) {
      done(true);
    } else {
      done(false, 403, "Forbidden");
    }
  },
});

wss.on("connection", (ws, req) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const lang = url.searchParams.get("lang");

  console.log(
    `🟢 WebSocket connected with lang=${lang} from ${req.headers.origin}`
  );

  ws.on("message", (message) => {
    try {
      const parsed = JSON.parse(message.toString());
      if (parsed.name === "ping") {
        ws.send(JSON.stringify({ name: "pong" }));
        console.log("↩️ Sent pong");
      } else {
        console.log("📩 Unhandled message:", parsed);
      }
    } catch (e) {
      console.warn("❌ Invalid JSON received:", message.toString());
    }
  });

  ws.on("close", () => {
    console.log("🔌 WebSocket closed");
  });
});

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get("/connection/test", (req, res) => {
  res.send("OK");
});

app.get("/user/settings", (req, res) => {
  return res.json({
    notifications_disabled: false,
    trialDays: 15,
    quotas: { free: null, pro: null },
    subscription: {
      annual: { productId: null, coupon: "Trial20" },
      extraParameters: { "x-at": null, "x-clickref": null },
    },
    license: { offlineExpirationTime: 1296000000, offlineCountdown: 604800000 },
    reminders: {
      offlineWarning: 86400000,
      proOfferInFree: 1296000000,
      proOfferInTrial: 432000000,
      proOfferInTrialExpired: 1296000000,
      proOfferInTrialExpireSoon: 86400000,
      proOfferInTrialLastWarning: 0,
      proOfferSpecialPrice: 0,
      proExpireSoon: 2592000000,
    },
    flags: {
      welcomeMessage: false,
      windowsStoreAnnouncement: false,
      proOfferSpecialPrice: false,
      proOfferInTrialExpireSoon: true,
      proOfferInTrialLastWarning: true,
    },
  });
});

app.put("/user", (req, res) => {
  const { locale } = req.body;

  const localeToLangCode = {
    "de-de": 0,
    en: 1,
    "zh-cn": 2,
    "pt-br": 3,
    "es-es": 4,
    "fr-fr": 5,
    "pl-pl": 6,
    "ru-ru": 7,
    "tr-tr": 8,
    "cs-cz": 9,
    "zh-tw": 10,
    "it-it": 11,
    "ja-jp": 12,
    "nl-nl": 13,
    "sv-se": 14,
  };

  const languageCode = Object.keys(localeToLangCode).includes(
    locale?.toLowerCase()
  )
    ? locale
    : "en";

  return res.json({
    id: "12345678",
    name: "Test User",
    locale: languageCode,
    email: "example@example.net",
    version: "3.15.0",
    runtime: "Browser",
    settings: {
      notifications_disabled: false,
    },
  });
});

app.get("/user", (req, res) => {
  const { public: isPublic, lang } = req.query;

  const languages = {
    0: "de-DE",
    1: "en",
    2: "zh-CN",
    3: "pt-BR",
    4: "es-ES",
    5: "fr-FR",
    6: "pl-PL",
    7: "ru-RU",
    8: "tr-TR",
    9: "cs-CZ",
    10: "zh-TW",
    11: "it-IT",
    12: "ja-JP",
    13: "nl-NL",
    14: "sv-SE",
  };

  const languageCode = languages[lang] || "en";

  return res.json({
    id: "12345678",
    email: "example@example.net",
    email_verified: true,
    email_expire: null,
    login: null,
    name: "Test User",
    avatar:
      "https://gravatar.com/avatar/2b6848a6719e6c2e6747d506d1ff57b3?s=64&d=retro",
    admin: null,
    flash: null,
    last_seen: "2025-06-14T09:28:26.899Z",
    app: "designer",
    last_update: "2025-06-13T15:08:43.989Z",
    stats: {},
    address: "",
    city: "",
    zip: "",
    state: "",
    country: "",
    trial_created: "2021-09-22T19:58:35.018Z",
    trial_expire: "2099-10-07T19:58:35.018Z",
    pro_created: null,
    pro_expire: null,
    created: "2021-09-22T19:58:32.748Z",
    last_name: "",
    settings: {
      flags: {
        welcomeMessage: false,
        proOfferSpecialPrice: false,
        windowsStoreAnnouncement: false,
        proOfferInTrialExpireSoon: false,
        proOfferInTrialLastWarning: false,
      },
      quotas: {
        pro: null,
        free: null,
      },
      license: {},
      reminders: {},
      trialDays: 15,
      subscription: {
        annual: {
          coupon: "Trial20",
          productId: null,
        },
        extraParameters: {
          "x-at": null,
          "x-clickref": null,
        },
      },
      notifications_disabled: false,
    },
    runtime: "Browser",
    locale: languageCode,
    user_type: "normal",
    deactivated: false,
    legacy: false,
    guest_created: null,
    guest_expire: null,
    version: "3.15.0",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
