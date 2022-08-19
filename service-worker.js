const build = [
  "/figs/_app/start-c3964819.js",
  "/figs/_app/pages/__layout.svelte-6aecee21.js",
  "/figs/_app/assets/pages/__layout.svelte-7c0420e8.css",
  "/figs/_app/assets/cheese-9bdf176f.png",
  "/figs/_app/assets/class-9795478b.webp",
  "/figs/_app/assets/method-e780cc87.webp",
  "/figs/_app/assets/field-8fb526b4.webp",
  "/figs/_app/assets/eh-6b23cd84.png",
  "/figs/_app/assets/ok-56d3dd37.png",
  "/figs/_app/error.svelte-b07cd6f7.js",
  "/figs/_app/pages/_version_/__layout.svelte-b2ba17de.js",
  "/figs/_app/assets/pages/_version_/__layout.svelte-20d77389.css",
  "/figs/_app/pages/_version_/_location_.svelte-2d5c7065.js",
  "/figs/_app/pages/_version_/all.svelte-05337411.js",
  "/figs/_app/assets/pages/_version_/all.svelte-c1572228.css",
  "/figs/_app/assets/dirt-fb045025.png",
  "/figs/_app/assets/grass_block-dedaa017.png",
  "/figs/_app/assets/stone-0096954e.png",
  "/figs/_app/assets/sun-d66e4fcc.png",
  "/figs/_app/assets/sign-c804ceb9.png",
  "/figs/_app/pages/_version_/fav.svelte-c18e0c21.js",
  "/figs/_app/pages/_version_/index.svelte-33ed43ed.js",
  "/figs/_app/pages/_version_/search.svelte-48c24a01.js",
  "/figs/_app/pages/index.svelte-f31a0adc.js",
  "/figs/_app/assets/pages/index.svelte-4d8bf406.css",
  "/figs/_app/chunks/index-06c54a84.js",
  "/figs/_app/chunks/preload-helper-657f1be1.js",
  "/figs/_app/chunks/_docs_all-2fa37214.js",
  "/figs/_app/chunks/translator-173f9b36.js",
  "/figs/_app/chunks/statistics-58df4639.js",
  "/figs/_app/assets/statistics-5ea0e1bc.css",
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
  "/figs/_app/chunks/TranslatableKey-18bcd688.js",
  "/figs/_app/assets/TranslatableKey-539c3d15.css",
  "/figs/_app/chunks/DescribeAny-239511b9.js",
  "/figs/_app/chunks/MetaTags-a948ce3b.js",
  "/figs/_app/chunks/_docs_v-pre-5-ed3cdaad.js",
  "/figs/_app/chunks/_docs_v-pre-6-e6d84c6f.js",
  "/figs/_app/chunks/_docs_v-rc-1-50afcfaa.js",
  "/figs/_app/chunks/_docs_v-rc-2-93ab2c76.js",
  "/figs/_app/chunks/_docs_v-rc-3-994dbe26.js",
  "/figs/_app/chunks/_docs_v-rc-4-944bb1de.js",
  "/figs/_app/chunks/pt_pt-a11316ab.js",
  "/figs/_app/chunks/gravity-09434a8b.js",
  "/figs/_app/chunks/_docs_v-pre-5_en_uwu-3dab1db5.js",
  "/figs/_app/chunks/_docs_v-pre-6_en_uwu-d5c31aff.js",
  "/figs/_app/chunks/_docs_v-rc-1_ru_ru-e4c4d0cf.js",
  "/figs/_app/chunks/_docs_v-rc-1_en_uwu-402e3cb7.js",
  "/figs/_app/chunks/_docs_v-rc-2_ru_ru-5c4f7418.js",
  "/figs/_app/chunks/_docs_v-rc-2_en_uwu-847ea376.js",
  "/figs/_app/chunks/_docs_v-rc-3_ru_ru-70693c3b.js",
  "/figs/_app/chunks/_docs_v-rc-3_en_uwu-e07f23d8.js",
  "/figs/_app/chunks/_docs_v-rc-4_ru_ru-a02ac2a7.js",
  "/figs/_app/chunks/_docs_v-rc-4_en_uwu-0df61a81.js"
];
const files = [
  "/figs/favicon.png",
  "/figs/manifest.json"
];
const version = "1660924068005";
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
