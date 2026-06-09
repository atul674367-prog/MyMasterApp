const CACHE_NAME = 'study-app-cache-v2';

// 1. ऐप खुलते ही मेन फाइलें सेव करें
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './style.css',
                './app.js',
                './manifest.json',
                './logo.png'
            ]);
        })
    );
});

// 2. ऑटोमैटिक ऑफलाइन सिस्टम (जो भी खुलेगा, सेव हो जाएगा)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse; // इंटरनेट नहीं है, तो सेव की हुई फाइल दिखाएं
            }
            return fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone()); // नई फाइल को भविष्य के लिए सेव करें
                    return networkResponse;
                });
            });
        })
    );
});
