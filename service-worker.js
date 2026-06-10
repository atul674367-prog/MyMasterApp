const CACHE_NAME = 'study-app-cache-v3'; // वर्शन v2 से v3 किया गया ताकि नया कोड लोड हो

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
    self.skipWaiting(); // नए सर्विस वर्कर को तुरंत सक्रिय करने के लिए
});

// 2. पुराने कैश को साफ (Delete) करें
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("पुराना कैश हटाया जा रहा है:", cache);
                        return caches.delete(cache); 
                    }
                })
            );
        })
    );
});

// 3. ऑटोमैटिक ऑफलाइन सिस्टम
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