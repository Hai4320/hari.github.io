'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7710d49aa475c2f9424fc2a01ff8543f",
".git/config": "6ffdd2a3a5559c74e9427a416a5266f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5f26911e5e283d7b4d8e96a8049a9acf",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "58e4bfd851d1b43f0c811f15d1cda831",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ee93fb85ccc6da0258dfb0e9e19efc3c",
".git/logs/refs/heads/master": "cd137e29ff549ec1475d3a9b57daded2",
".git/logs/refs/remotes/origin/master": "b464fc470f2706d441874f9b7c376e53",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/dc1f313708a0dcb5ff4f6621bea93b2ca599a0": "27845ea3a8fdedd87b3271e4b6b2dc18",
".git/objects/14/c27bf4dfbb26b17ff89276e8bdc148ee6dd284": "ab8341fbef1c5b3c48ff221ba8488396",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/e6931c33f579cf2f7cffabcec60b98bbc529bd": "551aac4cbd123b081c4121c7650da777",
".git/objects/19/f82e8e53a56216b48fd36e2c86accf0b535a11": "7ac497e74c4ed99ba76812f39dab0666",
".git/objects/1a/64dc6e69598e00928c0faa38b38db6a5d98715": "0f7fd61989bb9bf82fc1b1373588b223",
".git/objects/1a/9653c38cd3aeb8f157114408140c099379aeee": "0b3f0c57c17d967fdb59a6ea573b4dcc",
".git/objects/1f/04485e3e2ef40fa8e3a60a687c2032b1675407": "2248854dc5506e30b7714589eadded23",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/4c08de3ddfaabbf0fb1e1559417447bcf6b96f": "fdfea3f2ae21c594e250533a61e7da01",
".git/objects/39/35bf18880c01922828fefeed760c6f3f91a185": "fd78aebd75f42a6bc9b9219b5e59702a",
".git/objects/3d/36e34c945c4d47859d69df10a35f6df83ac257": "fc4418a7e5fdd59d4835cf2517cf88b1",
".git/objects/3e/b52ca6170517cf8becb6068c9a11a884ef7b50": "d320a4ce73369ba2df64007de9d92159",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/d49bb4caf35c999e9eaa497830a95012fbb2fd": "f66a111d6d8b82c68598a52343f1a7e5",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/50/0464e64fd714502603acdd4ad3a2712d90a8a4": "3699857dafe735b020e55e5bfbf14795",
".git/objects/50/8058bd18ce1579926d23aed72a9c9acb0d52dd": "b45b8d9a32300119111f9483ea6da549",
".git/objects/54/0b4b4e60bc293a954ee412eebb6bd80b1d304d": "cc7b90b4c68b2f496350cc8bc973893e",
".git/objects/55/ff16082303f5e800a80ecf42f5154cb2477fe7": "47fad92f2c417990061b716da277d14e",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/60/ca8cbf9d02b51c1c6d4e491c2c2355d9f5839a": "d21d782dc9d69064ffe5dab443f187d1",
".git/objects/6a/6685c7b9353cf3f825011625e96c2f2267113f": "0a837f57cda807b1fd26d862d122a42b",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/77/10d65008ec03d28537bb5107100c006fc634cb": "17bb7ff1270d1ae74c29e350dd6bbee1",
".git/objects/7f/0ac1c9dac0efab76877453bf0aaa900e0c702b": "56930d2b58e49ddac9fca6cf6154e3ce",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/3e2cfdb265e0de0dc1acb52b341c11f654bbdb": "32d2b1389ff837f5a09caf35ff25e4e2",
".git/objects/90/1c35cb4d1cc5ac65cee22b18b12e4edf91a880": "a97621a083fd54e17f7989d6094c0259",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/88904f23de69f1d60c930e4324a4aab698e4f5": "937e324939a93858a131e1b0e03a7bb6",
".git/objects/9e/7d2d22260ee98fda74fc019851bf212dacbe27": "f5f88331a2d49fec110605e65e422db5",
".git/objects/a2/9724a19913bf7a385befa02435a36a3f3d0731": "ae185202287a47351fbe0d6c942a0146",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/d3101dc56a26bd92c55e2491f533ea7287e588": "94b92a69824487f94f75f061162981eb",
".git/objects/b4/fb5093b4150f3dcb3b48e3e63a5f3c0380d8c2": "7a1828892727704472df2d6c240bd3f5",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c2/d4add73746a5dd2f45fa56052ce4477a0fd788": "004ca58e04ae1ea3386caa237530a9f6",
".git/objects/c5/127e28e2311c4b20fd80da32659c277859ddeb": "24c30cba5ea36bda269574b13bbfa3e8",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/c9/6330cf6a6ef282edef0fd685d355359b751a34": "a40cd800e54b052525030e0c404cba90",
".git/objects/cd/5b20072c2b121ee8005ff66a004d58c12e0d2b": "df2f127467c0e86ef8798792db48df9e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/e8bc1108e42100e5bf1f492b0bf22003013a2e": "d48dc9d9c6f245499dacb7e0ee81034d",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/0da4643143d5fcb34cdbb1c27bcdbbc7a4eb39": "f06f102d88251996b741e0146fc2b1b3",
".git/objects/eb/002075efba58f75a07b64440501b6c73bc682d": "7c457f39334acc810a3df1e79f4c144d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/04f5498213fe365416f100cbb0cc0e0bece050": "94f7378976e482c4cdd41f92040d38fa",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/ab7d20ca2b3aa9ebd92e9c9cd33695dab251aa": "fc815b703c6d756d979d71926ed611d7",
".git/ORIG_HEAD": "6b30e38838008dcfe7f637accd99840e",
".git/refs/heads/master": "c718b294aede24370e28590244f44994",
".git/refs/remotes/origin/master": "c718b294aede24370e28590244f44994",
"assets/AssetManifest.bin": "8bf3367b21e0e614b0dbd5d5ee796834",
"assets/AssetManifest.bin.json": "0006d3273c6caee6f8d372e8e9364bcb",
"assets/AssetManifest.json": "8b21feb2164bc79dc67ee4222e958de8",
"assets/assets/images/avatar.jpg": "c17130c5c8206cda600fac6aaab29573",
"assets/assets/images/github.svg": "b9d2dc35666acda23be00e1601664d59",
"assets/assets/images/hand-left.png": "336b5a3019ffd01d4ff3a01658f7e9da",
"assets/assets/images/linkedin.svg": "3fdaf832dc17754ae72b16c1198e0f2a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5cdb39a97a155784892a97174b829e37",
"assets/NOTICES": "5ac62b48e5f269a00589c43510cb2a3c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7f105677ec9f47429dec800c1a55b8de",
"/": "7f105677ec9f47429dec800c1a55b8de",
"main.dart.js": "3fde1e149d50d8b69bcf218521b01376",
"manifest.json": "89e7405def8f62723a2bd5f3249535b4",
"version.json": "d0c79ae78e4a5cb91d39426fe07dcc04"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
