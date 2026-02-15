// No-op service worker for local development.
// The original cacher.js imported workbox from Google CDN and precached all assets.
// For offline local dev, we skip all caching to avoid stale bundles and external dependencies.

self.addEventListener('install', event => {
  // Immediately activate, bypassing the waiting phase
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Clear any previously cached data from the original workbox cacher
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.map(name => caches.delete(name)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Pass through all requests to the network (no caching)
  return;
});
