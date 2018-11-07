const appName ="restaurant-reviews";
const staticCacheName = appName + "-v1.0";// what does the -v1.0 mean
const contentImgsCache = appName + "-images";


//caching SW 


let allCaches =[
    staticCacheName,contentImgsCache
];

self.addEventListener('install',function(cache){
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

//fetch listener 

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    )
})

//offline 
