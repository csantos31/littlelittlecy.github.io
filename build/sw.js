importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

//custom adjustments
console.log('my adjustments');

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "4efa855e11f7265cc5d04f75068fe450"
  },
  {
    "url": "index.html",
    "revision": "93fe31dcfb720d2c641bac6cca51e7e7"
  },
  {
    "url": "js/app.js",
    "revision": "4ae182841fbf8154e337f700f55b73e1"
  }
]);
