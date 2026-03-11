const CACHE="map-cache";

const files=[
"./",
"./index.html"
];

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE)
.then(cache=>cache.addAll(files))
);
});