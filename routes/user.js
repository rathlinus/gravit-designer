const { Router } = require("express");
const fs = require("fs");
const os = require("os");
const path = require("path");
const router = Router();

// Plain os.homedir(), not Electron's app.getPath() — this file is require()d
// by both server.js (plain Node, no Electron API available) and
// electron-main.js, so it needs a path that works in both.
const PROFILE_DIR = path.join(os.homedir(), ".gravit-designer-local");
const PROFILE_FILE = path.join(PROFILE_DIR, "profile.json");

function loadProfileOverrides() {
  try {
    return JSON.parse(fs.readFileSync(PROFILE_FILE, "utf8"));
  } catch {
    return {};
  }
}

function saveProfileOverrides(overrides) {
  fs.mkdirSync(PROFILE_DIR, { recursive: true });
  fs.writeFileSync(PROFILE_FILE, JSON.stringify(overrides, null, 2));
}

const LANGUAGES = {
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

const LOCALE_TO_CODE = Object.fromEntries(
  Object.entries(LANGUAGES).map(([k, v]) => [v.toLowerCase(), Number(k)]),
);

function resolveLocale(langOrLocale) {
  if (langOrLocale in LANGUAGES) return LANGUAGES[langOrLocale];
  if (
    typeof langOrLocale === "string" &&
    LOCALE_TO_CODE[langOrLocale.toLowerCase()] !== undefined
  ) {
    return langOrLocale;
  }
  return "en";
}

const USER_PROFILE = {
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
  last_seen: new Date().toISOString(),
  app: "designer",
  last_update: new Date().toISOString(),
  stats: {},
  address: "",
  city: "",
  zip: "",
  state: "",
  country: "",
  trial_created: "2021-09-22T19:58:35.018Z",
  trial_expire: "2099-10-07T19:58:35.018Z",
  pro_created: "2021-09-22T19:58:35.018Z",
  pro_expire: "2099-12-31T23:59:59.000Z",
  created: "2021-09-22T19:58:32.748Z",
  last_name: "",
  runtime: "Browser",
  user_type: "normal",
  deactivated: false,
  legacy: false,
  guest_created: null,
  guest_expire: null,
  version: "3.15.0",
};

const SETTINGS = {
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
    proOfferInTrialExpireSoon: false,
    proOfferInTrialLastWarning: false,
  },
};

router.get("/user/settings", (_req, res) => {
  res.json(SETTINGS);
});

router.get("/user", (req, res) => {
  const locale = resolveLocale(req.query.lang);
  const profile = { ...USER_PROFILE, ...loadProfileOverrides() };
  res.json({ ...profile, locale, settings: SETTINGS });
});

router.put("/user", (req, res) => {
  const locale = resolveLocale(req.body?.locale);
  const overrides = loadProfileOverrides();
  // GAccountPanel (the client's real Account Settings form) submits these
  // three fields; only persist what it actually sends.
  for (const key of ["name", "last_name", "email"]) {
    if (typeof req.body?.[key] === "string") {
      overrides[key] = req.body[key];
    }
  }
  saveProfileOverrides(overrides);

  const profile = { ...USER_PROFILE, ...overrides };
  res.json({
    id: profile.id,
    name: profile.name,
    last_name: profile.last_name,
    locale,
    email: profile.email,
    version: profile.version,
    runtime: profile.runtime,
    settings: { notifications_disabled: false },
  });
});

module.exports = router;
