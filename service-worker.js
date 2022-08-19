const build = [
  "/figs/_app/start-0ff0a484.js",
  "/figs/_app/pages/__layout.svelte-b4d42258.js",
  "/figs/_app/assets/pages/__layout.svelte-bbe9f7ae.css",
  "/figs/_app/assets/cheese-9bdf176f.png",
  "/figs/_app/assets/class-9795478b.webp",
  "/figs/_app/assets/method-e780cc87.webp",
  "/figs/_app/assets/field-8fb526b4.webp",
  "/figs/_app/assets/eh-6b23cd84.png",
  "/figs/_app/assets/ok-56d3dd37.png",
  "/figs/_app/error.svelte-b07cd6f7.js",
  "/figs/_app/pages/_version_/__layout.svelte-05eab4af.js",
  "/figs/_app/assets/pages/_version_/__layout.svelte-20d77389.css",
  "/figs/_app/pages/_version_/_location_.svelte-e97b5dbe.js",
  "/figs/_app/pages/_version_/all.svelte-be07e251.js",
  "/figs/_app/assets/pages/_version_/all.svelte-c1572228.css",
  "/figs/_app/assets/dirt-fb045025.png",
  "/figs/_app/assets/grass_block-dedaa017.png",
  "/figs/_app/assets/stone-0096954e.png",
  "/figs/_app/assets/sun-d66e4fcc.png",
  "/figs/_app/assets/sign-c804ceb9.png",
  "/figs/_app/pages/_version_/fav.svelte-bb5920ff.js",
  "/figs/_app/pages/_version_/index.svelte-b6b0d7f1.js",
  "/figs/_app/pages/_version_/search.svelte-ca26d524.js",
  "/figs/_app/pages/index.svelte-ffe83cd7.js",
  "/figs/_app/assets/pages/index.svelte-4d8bf406.css",
  "/figs/_app/chunks/index-06c54a84.js",
  "/figs/_app/chunks/preload-helper-657f1be1.js",
  "/figs/_app/chunks/_docs_all-372ccc33.js",
  "/figs/_app/chunks/translator-173f9b36.js",
  "/figs/_app/chunks/statistics-25741bd5.js",
  "/figs/_app/assets/statistics-d41e46c0.css",
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
  "/figs/_app/assets/destroy_stage_0-f499533e.png",
  "/figs/_app/assets/destroy_stage_1-0de13fe3.png",
  "/figs/_app/assets/destroy_stage_2-3dad4672.png",
  "/figs/_app/assets/destroy_stage_3-47e37d00.png",
  "/figs/_app/assets/destroy_stage_4-27806171.png",
  "/figs/_app/assets/destroy_stage_5-a1594b01.png",
  "/figs/_app/assets/destroy_stage_6-6f3ce9bb.png",
  "/figs/_app/assets/destroy_stage_7-d3f13380.png",
  "/figs/_app/assets/destroy_stage_8-0812dac1.png",
  "/figs/_app/assets/destroy_stage_9-1a04b108.png",
  "/figs/_app/assets/hammer-ccd8d2cd.svg",
  "/figs/_app/assets/unlit_star-44b7d610.svg",
  "/figs/_app/assets/star-150d3691.svg",
  "/figs/_app/chunks/TranslatableKey-2df4563c.js",
  "/figs/_app/assets/TranslatableKey-539c3d15.css",
  "/figs/_app/chunks/DescribeAny-49d097ba.js",
  "/figs/_app/chunks/MetaTags-a948ce3b.js",
  "/figs/_app/chunks/_docs_v-pre-5-d89700a6.js",
  "/figs/_app/chunks/_docs_v-pre-6-30c58250.js",
  "/figs/_app/chunks/_docs_v-rc-1-994c2c90.js",
  "/figs/_app/chunks/_docs_v-rc-2-5d096a7f.js",
  "/figs/_app/chunks/_docs_v-rc-3-97130e6a.js",
  "/figs/_app/chunks/_docs_v-rc-4-f62d51b3.js",
  "/figs/_app/chunks/pt_pt-a11316ab.js",
  "/figs/_app/chunks/gravity-9e7c53aa.js",
  "/figs/_app/chunks/_docs_v-pre-5_en_uwu-162b628a.js",
  "/figs/_app/chunks/_docs_v-pre-6_en_uwu-bfb69253.js",
  "/figs/_app/chunks/_docs_v-rc-1_ru_ru-e4c4d0cf.js",
  "/figs/_app/chunks/_docs_v-rc-1_en_uwu-950bae14.js",
  "/figs/_app/chunks/_docs_v-rc-2_ru_ru-5c4f7418.js",
  "/figs/_app/chunks/_docs_v-rc-2_en_uwu-54396060.js",
  "/figs/_app/chunks/_docs_v-rc-3_ru_ru-70693c3b.js",
  "/figs/_app/chunks/_docs_v-rc-3_en_uwu-01354679.js",
  "/figs/_app/chunks/_docs_v-rc-4_ru_ru-a02ac2a7.js",
  "/figs/_app/chunks/_docs_v-rc-4_en_uwu-baa9c6b3.js"
];
const files = [
  "/figs/favicon.png",
  "/figs/manifest.json"
];
const version = "1660871784005";
const worker = self;
const CACHE_NAME = `A;static-cache-${version}`;
const to_cache = build.concat(files);
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
  event.respondWith(fetch(event.request).catch(() => {
    return caches.open(CACHE_NAME).then((cache) => {
      console.log(event.request);
      return cache.match(event.request.url);
    });
  }));
});
