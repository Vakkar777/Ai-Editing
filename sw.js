const CACHE_NAME = 'video-processor-v2';
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/scripts.js',
    'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.18.0',
    'https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@2.0.0'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
