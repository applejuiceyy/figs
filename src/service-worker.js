// @ts-nocheck
import { build, files , prerendered, version } from '$service-worker';

// stolen from: https://rodneylab.com/sveltekit-pwa/


const worker = self;
const CACHE_NAME = `A;static-cache-${version}`;

const to_cache = build.concat(files).concat(prerendered);
console.log(to_cache)

worker.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Install');

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(to_cache).then(() => {
                worker.skipWaiting();
            });
        }),
    );
});

worker.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activate');

    // Remove previous cached data from disk
    console.log(event);
    event.waitUntil(
        caches.keys().then(async (keys) =>
            Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('[ServiceWorker] Removing old cache', key);
                        return caches.delete(key);
                    }
                }),
            ),
        ),
    );
    worker.clients.claim();
});



self.addEventListener('fetch', (event) => {
    console.log('[ServiceWorker] Fetch', event.request.url);

    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.open(CACHE_NAME).then((cache) => {
                console.log(event.request);
                return cache.match(event.request.url);
            });
        }),
    );
});