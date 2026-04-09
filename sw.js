self.addEventListener('install', function(event) {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', function(event) {
  // Basic pass-through (no caching yet)
});