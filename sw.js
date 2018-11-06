const appName ="restaurant-reviews";
const staticCacheName = appName + "-v1.0";// what does the -v1.0 mean
const contentImgsCache = appName + "-images";

let allCaches =[
    staticCacheName,contentImgsCache
];

self.addEventListener('install',function(cache){
    return cache.addAll([
        '/',
        '/restaurant.html',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/register-sw.js',
        '/data/restaurants.json',      

    ])
})
