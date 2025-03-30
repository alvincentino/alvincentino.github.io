'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4e39ba5f5b6be04d6435df0db912736a",
"version.json": "0288ba20bee478e177fa039cb69fb1e5",
"index.html": "19e9fa48edf78286750ee591230f1743",
"/": "19e9fa48edf78286750ee591230f1743",
"main.dart.js": "876a700b605fcb67cf6893c2ede93935",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e611106e9c1e33c788f56274b6bf45f2",
".git/config": "788682f2d00ae3db0cf46bf8dcd87826",
".git/objects/59/8f4ff37c4ae1c50fb8e7cb946a47ccef38e6c1": "4d15562710fc7fc3e3661091384dc786",
".git/objects/50/b81752278d084ba9d449fff25f4051df162b0f": "0ddbe11c79b98dec806590815f7676a8",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/6f/c168e92b49a5edd812d78d0e26a5ccbe3f14a0": "a9c94c77bba4389f806a5526f64d7435",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3c/037abbc7a5b31bcf45f6f0a7e84d47a7c085e2": "00a9078abf91a7b0b971de4ff884e38c",
".git/objects/02/11ecd811b797199e857f90949a38e78fe43430": "8b4366a3b78fe81f7e988e7cbf07316d",
".git/objects/a4/c70bacec7217cc355416ab5d43c485dfe2afb3": "26b0922a1df33ca79765ca5c03fb0401",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a5/2680581fc46e2f95e36c30f30ae8fc5b69c5a0": "70f89f00af2cee3ba464a196995cb00b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/0e189ac191bc71636bf364f140fb510ad8d930": "0501ac78a76a5beb5b41dc02a3581aaf",
".git/objects/f4/df43a0fab44ee05d1b6178d3783598d5a3178a": "c31d6388a3cd041b6b37d577275545cb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/b6b8c9d3e869a676ecb1d6f55743d974d3ee56": "b292677c24ec3bc9834ffa75b815115e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c1/a925815392b5017a317cf532a7061a6841c953": "f708ab858958c66905acba2f4181f1d4",
".git/objects/ec/7a82c4902e4c347678cb7ed34a5d61061b2a1e": "ba6bcf2ad7918a05ee4f4a27f35f7003",
".git/objects/18/350d5916525c83244d603bee33c98a0e258001": "84987f6f718dadd2b67c4d75884fbf7c",
".git/objects/29/9c0c7edfb936d2aeb99963a7ef864bb679d3a9": "7dc492fef71414ae0471c5fcdf165e64",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/45/8cd0601d28013d3817481aa2839c9bbb5ded70": "570dbef1dcd6d527be1e27600d766113",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/4caa9df05007a8371797556e2d24da10a5daa9": "195eaa91c1fdf82fbed40a1b9b5f8b80",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/b9b751e5b2441054f6eef670da7b3f53a3505a": "4ecd47134cd312e80f5533abcc978530",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/5c/70f25fa50fac558c9dcee409455c9067d0ea9f": "fc83e1cd29d00ad16490402f949d2ac7",
".git/objects/65/1227ca3d6058bcd806e29af800c15ebc14f09e": "c018d31f5f0e8dca2be7cfc582c722b4",
".git/objects/62/7f6b5a1c1cbfdbb0f43d6d72f64e8a2672268d": "8722f0b0ae2fc44d909b228e63a10a6e",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/de10c8423d698aee41f920090fc8fc08f27d28": "a73e101fad9892c76403e56405f4c8de",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/55/fee3ef0912af5fc30674cf601173b614c928f1": "e28391be8a842d436ed4fa9f7b05fa3b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/8faed30080e8d0951b590afc6127d65557b73e": "1b04aa511ae674ff5ebaf7aa4d09b7f8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/dd3a723d4cffaa9d59c564e0f7f9a19029500c": "fb6f4ea0c9f9b2acc5ab4a70520dd62b",
".git/objects/d5/bd343899035cca3290e9c99b2173c5953bbed8": "5738fe44b87a55a1310085acfd32a53b",
".git/objects/d2/f91845b8be42f7a95eaa87a27734f48ba032f6": "da79f1ed40468078dd2cd688161f1623",
".git/objects/b7/aaca8de1fe458399e17311d35d543a1fa2f984": "2d171f3fb3edf873d726b4b4bb0e48bc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/9625375be53fb5a32f65d2af3317f1ba5b03d9": "a3b84ca3fd50e44861e025a9a087b97c",
".git/objects/e6/b70fb2eb18a65f65cfde160d13f704ad6efaad": "3a32b68292828a74a374523887f4c236",
".git/objects/77/6695dd8ab79b2d8b29aef0ca39af97672be788": "518181aabe89be3ccb2af5e931840242",
".git/objects/1e/e1d80c4dc1bd27267c3df0549a96733eecb261": "22baf9a54c92698ae5a99c0c1b9c058e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/e124fc84fff85762d100a5ecce74306ae62abb": "c8cff98eaddd703299e1af925009dab4",
".git/objects/12/7d7f4ea6e40165394d4340395b500a6936a0b9": "654a8853daac7868d72957fde0f66299",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/7a/0d91a92f4030bd82c03c2d29b66ccda246019c": "75f70e610433653e9136fc3ca0bc5e6d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "94cf309bea9e881d778fa903f6e12cbd",
".git/logs/refs/heads/main": "94cf309bea9e881d778fa903f6e12cbd",
".git/logs/refs/remotes/origin/main": "e015c6dfd5e73628bea977e710dc09fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0623052ba71e42b8fab98e0ecbc34fb3",
".git/refs/remotes/origin/main": "0623052ba71e42b8fab98e0ecbc34fb3",
".git/index": "81e963cb110855fe63068762ea51fece",
".git/COMMIT_EDITMSG": "32f82316185ec662764efa85a7bb0b2b",
"assets/images/open-peeps-avatar.png": "cbabe09183369f999792c77a4cab9aff",
"assets/AssetManifest.json": "acb073345997c7db5a0bc72741f58751",
"assets/NOTICES": "3d531baf75a3c870bf58e90a9fe8bb09",
"assets/FontManifest.json": "79089f557be5706cac45f26e6631bdc2",
"assets/AssetManifest.bin.json": "0616332d23e6a23d7a0390bfbe47f3ea",
"assets/icons/fb-white.png": "14150615fbf19b940f52520488fe40fb",
"assets/icons/ln-white.png": "933375fd56532e378d23db0e60f7c792",
"assets/icons/github-mark-white.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "26b34e4f37c64da65b355fe705f6fdfe",
"assets/fonts/Inter-Medium.ttf": "a6f54808ec0aeaf49a25a2d94b6adda6",
"assets/fonts/Inter-Bold.ttf": "c7b5fabc34e7d60044a1dca4ac845774",
"assets/fonts/Inter-Regular.ttf": "4145168e52304666dee7c976559aa0e4",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/open-peeps-avatar.png": "cbabe09183369f999792c77a4cab9aff",
"assets/assets/icons/fb-white.png": "14150615fbf19b940f52520488fe40fb",
"assets/assets/icons/ln-white.png": "933375fd56532e378d23db0e60f7c792",
"assets/assets/icons/github-mark-white.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/fonts/Inter-Medium.ttf": "a6f54808ec0aeaf49a25a2d94b6adda6",
"assets/assets/fonts/Inter-Bold.ttf": "c7b5fabc34e7d60044a1dca4ac845774",
"assets/assets/fonts/Inter-Regular.ttf": "4145168e52304666dee7c976559aa0e4",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
