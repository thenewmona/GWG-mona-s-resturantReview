// https://www.youtube.com/watch?v=ksXwaWHCW6k&t=716s
// https://alexandroperez.github.io/mws-walkthrough/?1.23.registering-service-worker-and-caching-static-assets


if ('serviceWorker' in navigator) {
    console.log('Service Worker Supported');
    window.addEventListener('load', function() {
        console.log('Service Worker: Registered')
      navigator.serviceWorker.register('/service-worker.js');
    });
  }