self.addEventListener('install', (event) => {
    // Open the cache and add the static assets to it
    event.waitUntil(
      caches.open('static-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/styles.css',
          '/js/index.js',
          '/js/cards.js',
          '/js/install.js',
          '/images/logo.png',  
        ]);
      })
    );
    console.log('Service worker installed and assets cached.');
  });
  
  self.addEventListener('activate', (event) => {
    // Activate the new service worker and remove old caches if any
    event.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(
          keyList.map((key) => {
            if (key !== 'static-cache') {
              return caches.delete(key);  // Delete old cache versions
            }
          })
        );
      })
    );
    console.log('Service worker activated.');
  });
  
  self.addEventListener('fetch', (event) => {
    // Intercept fetch requests and return cached responses if available
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);  // Return cache or fetch from network
      })
    );
  });