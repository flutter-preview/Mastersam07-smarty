'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/NOTICES": "197593eb481c2d1ab63c7c1f54a5f6a2",
"assets/assets/images/home1.png": "88ce8e8aa48a48241a9313e1631072d3",
"assets/assets/images/movie.png": "3afa3d5ea57e82bfcac79a31ffeb8ddd",
"assets/assets/images/user.png": "341f1ed19460a1691145fbacdfd53fc4",
"assets/assets/images/bg.png": "8b0c9d4bfbe71b0cb29a741dffbcd8d7",
"assets/assets/images/profile.png": "9536c39ae4f66c6f78537ca744c1c4ae",
"assets/assets/images/home3.png": "3b1b23ae40994c875028c48cd5816b5d",
"assets/assets/images/logo.png": "77e76d7e4add049ee75049f3e9798527",
"assets/assets/images/phone.png": "58d6852598bfa01f30a63da99387309f",
"assets/assets/images/light_on.png": "afa715c409d538e1031009a48e88ba1e",
"assets/assets/images/light_off.png": "eec119c4f05f7f7a62d3c6c82cd7a44e",
"assets/assets/images/home2.png": "205371e6b1d9f7f86a541591ec497162",
"assets/assets/icons/cctv.png": "4cba231f1dc1c98737898a3c73e5fa49",
"assets/assets/icons/ac.png": "75ac32353f5ddbba01aabef2ca5ec686",
"assets/assets/icons/light.png": "ba292c79a153948723a3b1cd57f7ca07",
"assets/assets/icons/tv.png": "ce2b952a8bb6d649e1bc3160f9e5eb10",
"assets/assets/icons/fridge.png": "2938c440a89215d8bbb389a447207306",
"assets/assets/icons/oven.png": "7e4545024ead14a6d9f5c6c874f817ba",
"assets/assets/icons/netflix.png": "4b39bf2f3881df5cd7a60263055ba8ee",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "00891111c5aaf6e3f91e5fe8c7c45646",
"assets/AssetManifest.json": "0aaeb00dda63e949188d554c67836683",
"assets/FontManifest.json": "c59bd7429607b7f2228882654ca43f8f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-Medium.ttf": "df13f74fd7ca2b2797d475e6a4c66cc2",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-ExtraBoldItalic.ttf": "57e8fbd5f8173f4dc1ff6215b72e4004",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-BoldItalic.ttf": "923ff53f1594d5f20833bd82fef379ee",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-ThinItalic.ttf": "bab0634fbca18089af73c1570d15440e",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-ExtraLight.ttf": "14238cdc0cfe98c9e499962eb455c7b5",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-Bold.ttf": "a6c0011464c6448c5c17665a070fbc9a",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-LightItalic.ttf": "eead9e5d4d4f5c245b049cd2647f0415",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-Italic.ttf": "f16ac4ff9e57f3d9b954ea256ba221c2",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-Light.ttf": "06d5d1d68e8cdc3d8221af90004cfa17",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-MediumItalic.ttf": "cd89889d0f38586a54b2144fae267417",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-ExtraLightItalic.ttf": "e6d30b2cd16ed3fbdbe3180cdbf6dd4a",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-Regular.ttf": "0de1b0e6c40db0a73c06348a08ea2b4f",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-ExtraBold.ttf": "0193653fe4ab31f4b1aec1b34191b160",
"assets/packages/bat_theme/fonts/TT%2520Firs%2520Neue/TTFirsNeue-Thin.ttf": "34469c6abe30ffe464a62ca90e580335",
"assets/shorebird.yaml": "a9dac87f7de4ae00d9493e91d7fa2dae",
"assets/fonts/MaterialIcons-Regular.otf": "6e49e5279588b524857d204eaf24d795",
"index.html": "3044108398cf76a958bd0656e0882d52",
"/": "3044108398cf76a958bd0656e0882d52",
"main.dart.js": "5a821ec7f67f4b8b623201dc71f5d848",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"version.json": "46ca2051a78212cd166f54c51571796b",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
