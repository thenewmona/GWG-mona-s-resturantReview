// https://www.youtube.com/watch?v=ksXwaWHCW6k&t=716s
// https://alexandroperez.github.io/mws-walkthrough/?1.23.registering-service-worker-and-caching-static-assets
// https://developers.google.com/web/fundamentals/primers/service-workers/

const appName ="Mona's Restaurant Rreview";
const staticCacheName = appName + "-v1.0";
const contentImgsCache = appName + "-images";

//caching SW 

let allCaches =[
    staticCacheName,contentImgsCache
];

//Install SW 

self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open("Mona's Restaurant Rreview").then(function(cache){      
    return cache.addAll([
        '/',
        '/restaurant.html',
        '/index.html',
        '/sw.js',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/register-sw.js',
        '/data/restaurants.json',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',                

    ])
})
    );
});
//activating SW

self.addEventListener('activate', function(event){
event.waitUntil(
    caches.keys().then(function(cacheNames) {
        return Promise.all(
            cacheNames.filter(function(cacheName){
               return cacheName.startsWith(appName) &&
               !allCaches.includes(cacheName); 
            }),map(function(cacheName){
                return caches.delete(cacheName);
            })
        );
    })
);
});

// //Fetch event listener https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    )
})

// //offline 
