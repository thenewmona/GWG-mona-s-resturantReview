// https://www.youtube.com/watch?v=ksXwaWHCW6k&t=716s
// https://alexandroperez.github.io/mws-walkthrough/?1.23.registering-service-worker-and-caching-static-assets

if (navigator.serviceWorker) {
    console.log('Service Worker Supported');
    navigator.serviceWorker.register('/register-sw.js').then(function(reg) {
            console.log('Service Worker: Registered')
        }).catch((e) => {
console.log("Couldn't register service worker... \n",e);
           
});
}