const build = [
  "/figs/_app/start-0eb1dd60.js",
  "/figs/_app/pages/__layout.svelte-eae8930b.js",
  "/figs/_app/assets/pages/__layout.svelte-38869a94.css",
  "/figs/_app/assets/cheese-9bdf176f.png",
  "/figs/_app/error.svelte-9abd8935.js",
  "/figs/_app/pages/index.svelte-40f7d0fd.js",
  "/figs/_app/chunks/index-03ac9702.js",
  "/figs/_app/chunks/preload-helper-7002f5f4.js",
  "/figs/_app/chunks/ClassDescribe-210fef5d.js",
  "/figs/_app/assets/ClassDescribe-73ee45e6.css",
  "/figs/_app/assets/stone1-97f2a8a7.ogg",
  "/figs/_app/assets/stone2-98a5c319.ogg",
  "/figs/_app/assets/stone3-19273f0e.ogg",
  "/figs/_app/assets/stone4-b164e732.ogg",
  "/figs/_app/assets/stone1-e94a295a.ogg",
  "/figs/_app/assets/stone2-2cfbf878.ogg",
  "/figs/_app/assets/stone3-c5d71e8d.ogg",
  "/figs/_app/assets/stone4-95820d0b.ogg",
  "/figs/_app/assets/stone5-67b1e504.ogg",
  "/figs/_app/assets/stone6-2b65e1bd.ogg",
  "/figs/_app/assets/hammer-ccd8d2cd.svg",
  "/figs/_app/chunks/svgNamespace-ebff0b03.js",
  "/figs/_app/chunks/gravity-6a381de0.js"
];
const files = [
  "/figs/favicon.png"
];
const prerendered = [
  "/figs/"
];
const version = "1656977055340";
const worker = self;
const CACHE_NAME = `A;static-cache-${version}`;
const to_cache = build.concat(files).concat(prerendered);
console.log(to_cache);
worker.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Install");
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
    console.log("[ServiceWorker] Pre-caching offline page");
    return cache.addAll(to_cache).then(() => {
      worker.skipWaiting();
    });
  }));
});
worker.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activate");
  console.log(event);
  event.waitUntil(caches.keys().then(async (keys) => Promise.all(keys.map((key) => {
    if (key !== CACHE_NAME) {
      console.log("[ServiceWorker] Removing old cache", key);
      return caches.delete(key);
    }
  }))));
  worker.clients.claim();
});
self.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] Fetch", event.request.url);
  if (event.request.mode !== "navigate") {
    return;
  }
  event.respondWith(fetch(event.request).catch(() => {
    return caches.open(CACHE_NAME).then((cache) => {
      console.log(event.request);
      return cache.match(event.request.url);
    });
  }));
});
